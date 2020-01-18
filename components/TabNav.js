import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';

const DetailTab = createMaterialTopTabNavigator(
  {
    About: TabOne,
    Cards: TabTwo,
    Quiz: TabThree,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: 'transparent',
      },
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: 'blue',
      },
    },
  }
);

const TabNav = createAppContainer(DetailTab);

export default TabNav;