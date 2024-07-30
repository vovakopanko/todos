import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Box} from '../../components/box';
import {Button} from '../../components/button';
import {Text} from '../../components/text';
import {COLORS} from '../../constants';
import {windowWidth} from '../../utils/general';
import CustomBackdrop from './CustomBackDrop';

type Props = {
  bottomSheetModalRef: React.MutableRefObject<BottomSheetModalMethods | null>;
  closeModal: () => void;
  deleteNote: any;
  description: string;
  id: number;
};

const SNAP_POINTS = ['35%'];

export const BottomSheetDeleteToDos = ({
  bottomSheetModalRef,
  closeModal,
  deleteNote,
}: Props) => {
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
            {'Delete a note'}
          </Text>
          <Text fontWeight={400} style={styles.question}>
            {'Are you sure want delete your notes?'}
          </Text>
        </Box>
        <Button
          title={'Delete a note'}
          onPress={deleteNote}
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
