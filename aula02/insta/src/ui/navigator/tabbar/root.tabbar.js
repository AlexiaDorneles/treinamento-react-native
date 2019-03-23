import { createBottomTabNavigator } from 'react-navigation'
import { FeedStack } from '@ui/navigator/stacks/feed'
import { ProfileStack } from '@ui/navigator/stacks/profile'
import { DirectStack } from '@ui/navigator/stacks/direct'
import { IgFooter } from '@component'

export const RootTabBar = createBottomTabNavigator(
  {
    FeedStack: {
      screen: FeedStack,
    },
    ProfileStack: {
      screen: ProfileStack,
    },
    DirectStack: {
      screen: DirectStack,
    },
  },
  {
    tabBarComponent: IgFooter,
  },
)
