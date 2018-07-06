import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { Button, ListItem } from 'react-native-elements'
import AppFontLoader from '../Components/AppFontLoader'
import { Storage } from 'aws-amplify'

class HouseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: '',
    }

    this.keyExtractor = this.keyExtractor.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
      },
    ]
  }

  componentDidMount() {
    Storage.list('photo/')
      .then(result => {
        this.setState({ key: result[0].key })
        console.log(result)
      })
      .catch(err => console.log(err))
  }

  keyExtractor = (item, index) => index

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      avatar={{ uri: item.avatar_url }}
    />
  )

  render() {
    return (
      <AppFontLoader>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.list}
          renderItem={this.renderItem}
        />
      </AppFontLoader>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HouseList)
