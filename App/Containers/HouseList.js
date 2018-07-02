import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles




class MyListItem extends React.PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.id)
  };

  render() {
    const textColor = this.props.selected ? "red" : "black"
    return (
      <Button onPress={this.onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </Button>
    )
  }
}

class HouseList extends React.PureComponent {

  const list = [
    {
      id: "1",
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      id: "2",
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
  ]


  onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected)
      selected.set(id, !selected.get(id)) // toggle
      return { selected }
    })
  };

  keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => {
    return (
      <View style={styles.listContainer}  >
        <Image style={styles.listImage} source={item.avatar} />
        <Text style={styles.listText} >{item.text}</Text>
        <Text style={styles.listVal} >{item.val}</Text>
        <Image style={styles.listImage} source={require('../../resources/icons/MyAccount/arrowright.png')} />
      </View>
    );

  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HouseList)
