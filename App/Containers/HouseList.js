import React from 'react'
import {
  View,
  ScrollView,
  Text,
  Animated,
  StyleSheet,
  Image,
  Easing,
  TouchableHighlight,
  Modal,
} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { DrawerNavigator, NavigationActions, StackNavigator } from 'react-navigation'

import { API, Storage } from 'aws-amplify'
import AddPet from './AddPet'
import ViewPet from './ViewPet'
import UploadPhoto from '../Components/UploadPhoto'
import SideMenuIcon from '../Components/SideMenuIcon'
import awsmobile from '../aws-exports'
import { colors } from 'theme'

const styles = {}
class HouseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResponse: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.handleRetrievePet()
    this.animate()
  }

  handleRetrievePet() {
    API.get('HouseCRUD', '/House').then(apiResponse => Promise.all(apiResponse.map(async (house) => {
        // Make "key" work with paths like:
        // "private/us-east-1:7817b8c7-2a90-4735-90d4-9356d7f8f0c7/091357f0-f0bc-11e7-a6a2-937d1d45b80e.jpeg"
        // and
        // "44b223e0-9707-11e7-a7d2-cdc5b84df56b.jpeg"
        const [, , , key] = /(([^\/]+\/){2})?(.+)$/.exec(house.picKey)
        debugger
        const picUrl = house.picKey && await Storage.get(key)

        return { ...house, picUrl }
      }))).then(apiResponse => {
      this.setState({ apiResponse, loading: false })
    }).catch(e => {
      this.setState({ apiResponse: e.message, loading: false })
    })
  }

  renderHouse(pet, index) {
    const uri = pet.picUrl

    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigation.navigate('ViewPet', { pet })
        }}
        underlayColor='transparent'
        key={pet.petId}
      >
        <View style={styles.petInfoContainer}>
          <Image
            resizeMode='cover'
            source={uri ? { uri } : require('../../assets/images/profileicon.png')}
            style={styles.petInfoAvatar}
          />
          <Text style={styles.petInfoName}>{pet.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={[{ flex: 1 }]}>
        {!loading && <View style={{
          position: 'absolute', bottom: 25, right: 25, zIndex: 1,
          }}
        >
          <Icon
            onPress={this.toggleModal}
            raised
            reverse
            name='add'
            size={44}
            containerStyle={{ width: 50, height: 50 }}
            color={colors.primary}
          />
        </View>}
        <ScrollView style={[{ flex: 1, zIndex: 0 }]} contentContainerStyle={[loading && { justifyContent: 'center', alignItems: 'center' }]}>
          {loading && <Animated.View style={{ transform: [{ rotate: spin }] }}><Icon name='autorenew' color={colors.grayIcon} /></Animated.View>}
          {
            !loading &&
            <View style={styles.container}>
              <Text style={styles.title}>My Pets</Text>
              {
                typeof apiResponse === 'string' ?
                  <Text>{apiResponse}</Text> :
                  apiResponse.map((house, index) => this.renderHouse(house, index))
              }
            </View>
          }
        </ScrollView>
      </View >
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HouseList)
