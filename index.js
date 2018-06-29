import Expo from 'expo'
import './App/Config/ReactotronConfig'
import DebugConfig from './App/Config/DebugConfig'
import AppRouter from './App/Navigation/AppRouter'


const Entrypoint =
  __DEV__ && DebugConfig.launchStorybook
    ? require('./storybook').default
    : require('./App/Containers/App').default


Expo.registerRootComponent(Entrypoint)
