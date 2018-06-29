import { StackNavigator } from 'react-navigation'
import GoogleMapScreen from '../Containers/GoogleMapScreen'
import AuthScreen from '../Containers/AuthScreen'
import Storagetest from '../Containers/Storagetest'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  GoogleMapScreen: { screen: GoogleMapScreen },
  AuthScreen: { screen: AuthScreen },
  Storagetest: { screen: Storagetest },
  LaunchScreen: { screen: LaunchScreen },
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'AuthScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  })

export default PrimaryNav
