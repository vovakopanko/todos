import {RouteProp} from '@react-navigation/native';
import {TABS} from './constants';
import {BottomTabNavigatorParamList} from './types';
import {AccountIcon, HomeIcon} from '../assets/icons/tabbar';

export const tabBarName = {
  [TABS.HOME]: 'Home',
  [TABS.ACCOUNT]: 'Account',
};

export const getTabBarIcon = (
  route?: RouteProp<BottomTabNavigatorParamList>,
) => {
  let Icon: React.ElementType;

  switch (route?.name) {
    case TABS.HOME:
      Icon = HomeIcon;
      break;
    case TABS.ACCOUNT:
      Icon = AccountIcon;
      break;
    default:
      Icon = HomeIcon; // TODO: change to smthng meaningful
  }

  return {Icon};
};
