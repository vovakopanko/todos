import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {Box} from '../../components/box';
import {Button} from '../../components/button';
import {ControlledInput} from '../../components/input';
import {Text} from '../../components/text';
import {COLORS} from '../../constants';
import todosServices from '../../services/api/todos.services';
import {windowWidth} from '../../utils/general';
import CustomBackdrop from './CustomBackDrop';

type ToDos = {description: string; done: boolean; id: number};

type Props = {
  bottomSheetModalRef: React.MutableRefObject<BottomSheetModalMethods | null>;
  closeModal: () => void;
  setTodos: (val: ToDos[]) => void;
};

type FormData = {
  description: string;
};

const SNAP_POINTS = ['45%'];

export const BottomSheetAddToDos = ({
  bottomSheetModalRef,
  closeModal,
  setTodos,
}: Props) => {
  const {control, handleSubmit, reset} = useForm<FormData>({
    defaultValues: {description: ''},
  });

  const onSubmit = async ({description}: {description: string}) => {
    const data = await todosServices.fetchTodos(description);
    //@ts-ignore
    setTodos((prev: ToDos[]) => [...prev, data.data]);
    reset();
    closeModal();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={SNAP_POINTS}
      // eslint-disable-next-line react/no-unstable-nested-components
      backdropComponent={props => (
        <CustomBackdrop {...props} onPress={closeModal} />
      )}>
      <BottomSheetView style={styles.bottomSheet}>
        <Box style={styles.modalBody}>
          <Text fontWeight={600} style={styles.modalTitle}>
            {'Add a note'}
          </Text>
          <View>
            <ControlledInput
              control={control}
              name="description"
              placeholder={'Enter your notes'}
              variant="solid"
              containerStyle={styles.input}
            />
          </View>
          <Text fontWeight={400} style={styles.question}>
            {'Reminders give you a greater likelihood of completing a task'}
          </Text>
        </Box>
        <Button
          title={'Add a note'}
          onPress={handleSubmit(onSubmit)}
          containerStyle={styles.button}
          textStyle={{color: COLORS.WHITE}}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 54,
  },
  modalBody: {
    gap: 20,
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    paddingBottom: 40,
  },
  question: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 40,
    textAlign: 'center',
  },
  info: {
    fontSize: 14,
    lineHeight: 16.8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.MAIN,
    borderWidth: 0,
    minWidth: 256,
  },
  input: {
    width: windowWidth - 32,
    marginBottom: 24,
  },
});
