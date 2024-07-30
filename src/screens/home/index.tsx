import React from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {PlusIcon} from '../../assets/icons/common';
import {Box} from '../../components/box';
import {SafeAreaViewContainer} from '../../components/safe-area-view-container';
import {COLORS} from '../../constants';
import todosServices from '../../services/api/todos.services';
import {BottomSheetAddToDos} from './BottomSheetAddToDos';
import ToDoListItem from './ToDoListItemProps';
import {useEditTodosStore} from './store/useEditTodosStore';

export const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [todos, setTodos] = useState<
    {id: number; description: string; done: boolean}[]
  >([]);
  const getTodos = async () => {
    const data = await todosServices.getTodos();
    setTodos(data.data);
  };

  const {selectedId} = useEditTodosStore();

  useEffect(() => {
    getTodos();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    getTodos().then(() => {
      setRefreshing(false);
    });
  }, []);

  const bottomSheetDeleteModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetAddNotesModalRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    bottomSheetAddNotesModalRef.current?.present();
  }, []);

  const closeModal = useCallback(() => {
    bottomSheetAddNotesModalRef.current?.close();
  }, []);

  const openDeleteModal = useCallback(() => {
    bottomSheetDeleteModalRef.current?.present();
  }, []);

  const deleteNote = async () => {
    if (selectedId) {
      await todosServices.deleteToDos(selectedId);
      setTodos(prev => prev.filter(todo => todo.id !== selectedId));
      bottomSheetDeleteModalRef.current?.close();
    }
  };

  return (
    <SafeAreaViewContainer>
      <Box style={styles.flex}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <ToDoListItem
              id={item.id}
              description={item.description}
              done={item.done}
              openDeleteModal={openDeleteModal}
              deleteNote={deleteNote}
              bottomSheetDeleteModalRef={bottomSheetDeleteModalRef}
            />
          )}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </Box>
      <TouchableOpacity onPress={openModal} style={styles.floatingBtn}>
        <PlusIcon color={COLORS.MAIN} />
      </TouchableOpacity>
      <BottomSheetAddToDos
        bottomSheetModalRef={bottomSheetAddNotesModalRef}
        closeModal={closeModal}
        setTodos={setTodos}
      />
    </SafeAreaViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  floatingBtn: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: COLORS.MAIN,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    bottom: 20,
    right: 20,
  },
});
