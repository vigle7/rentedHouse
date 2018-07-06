import React from 'react'
import { Font } from 'expo'
import FontAwesome from '@expo/vector-icons/fonts/FontAwesome.ttf'
import MaterialIcons from '@expo/vector-icons/fonts/MaterialIcons.ttf'

class AppFontLoader extends React.Component {
  state = {
    fontLoaded: true,
  };


  async componentWillMount() {
    try {
      await Font.loadAsync({
        FontAwesome,
        'Material Icons': MaterialIcons,
      })
      this.setState({ fontLoaded: false })
    } catch (error) {
      console.log('error loading icon fonts', error)
    }
  }

  render() {
    if (this.state.fontLoaded) {
      return null
    }
    return this.props.children
  }
}

export default AppFontLoader
