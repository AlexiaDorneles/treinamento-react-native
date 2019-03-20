import { createBottomTabNavigator } from 'react-navigation'
import { FeedStack } from '@ui/navigator/stacks/feed'
import { ProfileStack } from '@ui/navigator/stacks/profile'
import { IgFooter } from '@component'

export const RootTabBar = createBottomTabNavigator(
  {
    FeedStack: {
      screen: FeedStack,
    },
    ProfileStack: {
      screen: ProfileStack,
    },
  },
  {
    tabBarComponent: IgFooter,
  },
)
