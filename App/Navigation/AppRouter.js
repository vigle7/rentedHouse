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
  Tabs,
  Drawer,
} from 'react-native-router-flux'
import GoogleMapScreen from '../Containers/GoogleMapScreen'
import AuthScreen from '../Containers/AuthScreen'
import Storagetest from '../Containers/Storagetest'
import LaunchScreen from '../Containers/LaunchScreen'
import AddHouseScreen from '../Containers/AddHouseScreen'
import HouseList from '../Containers/HouseList'
import TabIcon from '../Components/TabIcon'
import { DrawerContent } from '../Components/DrawerContent'

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
            <Drawer
              hideNavBar
              key="drawer"
              contentComponent={DrawerContent}
              drawerWidth={300}
            >
              <Scene key="TabStack" hideNavBar panHandlers={null}>
                <Tabs
                  key="tabbar"
                  showLabel={false}
                  lazy
                  swipeEnabled={false}
                  activeBackgroundColor="white"
                  inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
                >
                  <Scene
                    hideNavBar
                    key="AddHouseScreen"
                    component={AddHouseScreen}
                    icon={TabIcon}

                  />
                  <Scene
                    hideNavBar
                    key="HouseList"
                    component={HouseList}
                    icon={TabIcon}
                    initial
                  />
                  <Scene
                    hideNavBar
                    key="INBOX_KEY"
                    component={AuthScreen}
                    icon={TabIcon}

                  />
                  <Scene
                    hideNavBar
                    key="MY_ACCOUNT_KEY"
                    component={AuthScreen}
                    icon={TabIcon}
                  />
                </Tabs>
              </Scene>
              <Scene key="GoogleMapScreen" component={GoogleMapScreen} />
              <Scene key="AuthScreen" component={AuthScreen} />
              <Scene key="Storagetest" component={Storagetest} />
              <Scene key="LaunchScreen" component={LaunchScreen} />


            </Drawer>
          </Stack>

        </Lightbox>
      </Modal>
    </Overlay>
  </Router>
)

export default AppRouter
