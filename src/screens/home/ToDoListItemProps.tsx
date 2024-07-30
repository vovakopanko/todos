import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {CloseIcon, PencilIcon} from '../../assets/icons/common';
import {COLORS} from '../../constants';
import todosServices from '../../services/api/todos.services';
import {BottomSheetDeleteToDos} from './BottomSheetDeleteToDos';
import {useEditTodosStore} from './store/useEditTodosStore';

interface ToDoListItemProps {
  id: number;
  description: string;
  done: boolean;
  openDeleteModal: () => void;
  bottomSheetDeleteModalRef: any;
  deleteNote: any;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({
  id,
  description,
  done,
  openDeleteModal,
  bottomSheetDeleteModalRef,
  deleteNote,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(description);
  const [todoDone, setTodoDone] = useState(done);

  const editToDos = async () => {
    await todosServices.editToDo({
      id,
      description: newTitle,
      done: todoDone,
    });
  };

  const handleSaveTitle = () => {
    setIsEditing(false);
  };

  const editText = () => {
    editToDos();
    setIsEditing(!isEditing);
  };

  const setSelectedId = useEditTodosStore(set => set.setSelectedId);

  const deleteToDos = () => {
    setSelectedId(id);
    openDeleteModal();
  };

  const closeDeleteModal = useCallback(() => {
    bottomSheetDeleteModalRef.current?.close();
  }, [bottomSheetDeleteModalRef]);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <CheckBox
          value={done}
          onValueChange={val => {
            editToDos();
            setTodoDone(val);
          }}
          onCheckColor={COLORS.MAIN}
          onTintColor={COLORS.MAIN}
        />
        {isEditing ? (
          <TextInput
            style={styles.textInput}
            value={newTitle}
            onChangeText={text => setNewTitle(text)}
            onBlur={handleSaveTitle}
            autoFocus
          />
        ) : (
          <Text style={[styles.title, todoDone && styles.completedTitle]}>
            {newTitle}
          </Text>
        )}
      </View>
      <View style={styles.controlPanel}>
        <TouchableOpacity onPress={editText} style={styles.editButton}>
          <PencilIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteToDos}>
          <CloseIcon color={COLORS.MAIN} />
        </TouchableOpacity>
      </View>
      <BottomSheetDeleteToDos
        description={description}
        bottomSheetModalRef={bottomSheetDeleteModalRef}
        closeModal={closeDeleteModal}
        deleteNote={deleteNote}
        id={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  editButton: {
    padding: 10,
  },
  controlPanel: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToDoListItem;
