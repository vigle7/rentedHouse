import { StackNavigator } from 'react-navigation'
import Storagetest from '../Containers/Storagetest'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Storagetest: { screen: Storagetest },
  LaunchScreen: { screen: LaunchScreen },
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Storagetest',
    navigationOptions: {
      headerStyle: styles.header,
    },
  })

export default PrimaryNav
