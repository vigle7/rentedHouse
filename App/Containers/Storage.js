import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StorageStyle'

class Storage extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Storage Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  })

const mapDispatchToProps = (dispatch) => ({
  })

export default connect(mapStateToProps, mapDispatchToProps)(Storage)
