import React from "react"
import { Font } from "expo"
import { Platform } from "react-native"
import FontAwesome from "@expo/vector-icons/fonts/FontAwesome.ttf"
import MaterialIcons from "@expo/vector-icons/fonts/MaterialIcons.ttf"

class AppFontLoader extends React.Component {
  state = {
    fontLoaded: true,
  };

  async componentWillMount() {
    try {
      if (Platform.OS === "ios") {
        await Font.loadAsync({
          FontAwesome,
          "Material Icons": MaterialIcons,
        })
      } else {
        await Font.loadAsync({
          FontAwesome,
          MaterialIcons,
        })
      }
      this.setState({ fontLoaded: false })
    } catch (error) {
      console.log("error loading icon fonts", error)
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
