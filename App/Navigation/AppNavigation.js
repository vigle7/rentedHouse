import { StackNavigator } from 'react-navigation'
import Storage from '../Containers/Storage'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Storage: { screen: Storage },
  LaunchScreen: { screen: LaunchScreen },
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  })

export default PrimaryNav
