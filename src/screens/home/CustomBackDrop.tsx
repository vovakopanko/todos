import React from 'react';
import {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import {Pressable, StyleSheet} from 'react-native';

interface Props extends BottomSheetBackdropProps {
  onPress: () => void;
}

const CustomBackdrop = ({style, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={[style, styles.backgroundColor]} />
  );
};

const styles = StyleSheet.create({
  backgroundColor: {backgroundColor: '#5e5d5d92'},
});

export default CustomBackdrop;
