import React from 'react';
import {BackButton} from '../../../../components/back-bottom';
import {HeaderOptionsProps} from '../../../types';

export const headerOptions = ({navigation}: HeaderOptionsProps) => ({
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  headerTransparent: true,
  headerTitle: '',
  headerLeft: () => <BackButton navigation={navigation} />,
});
