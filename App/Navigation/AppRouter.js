// import { StackNavigator } from 'react-navigation'
// import GoogleMapScreen from '../Containers/GoogleMapScreen'
// import AuthScreen from '../Containers/AuthScreen'
// import Storagetest from '../Containers/Storagetest'
// import LaunchScreen from '../Containers/LaunchScreen'

// import styles from './Styles/NavigationStyles'

// // Manifest of possible screens
// const PrimaryNav = StackNavigator({
//   GoogleMapScreen: { screen: GoogleMapScreen },
//   AuthScreen: { screen: AuthScreen },
//   Storagetest: { screen: Storagetest },
//   LaunchScreen: { screen: LaunchScreen },
// }, {
//     // Default config for all screens
//     headerMode: 'none',
//     initialRouteName: 'AuthScreen',
//     navigationOptions: {
//       headerStyle: styles.header,
//     },
//   })

// export default PrimaryNav


import React from 'react'
import { Platform } from 'react-native'
import {
  Scene,
  Router,
  Reducer,
  Overlay,
  Modal,
  Stack,
  Lightbox,
} from 'react-native-router-flux'
import GoogleMapScreen from '../Containers/GoogleMapScreen'
import AuthScreen from '../Containers/AuthScreen'
import Storagetest from '../Containers/Storagetest'
import LaunchScreen from '../Containers/LaunchScreen'

const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    console.log('ACTION:', action)
    return defaultReducer(state, action)
  }
}

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
})

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://'

const AppRouter = () => (
  <Router
    createReducer={reducerCreate}
    getSceneStyle={getSceneStyle}
    uriPrefix={prefix}
  >

    <Overlay key="overlay">
      <Modal
        key="modal"
        hideNavBar
      >
        <Lightbox key="lightbox">
          <Stack
            hideNavBar
            key="root"
            titleStyle={{ alignSelf: 'center' }}
          >
            <Scene key="GoogleMapScreen" component={GoogleMapScreen} />
            <Scene key="AuthScreen" component={AuthScreen} initial />
            <Scene key="Storagetest" component={Storagetest} />
            <Scene key="LaunchScreen" component={LaunchScreen} />
          </Stack>
        </Lightbox>

      </Modal>


    </Overlay>
  </Router>
)

export default AppRouter
