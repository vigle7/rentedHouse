import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
// import Amplify, { API } from 'aws-amplify'
import { API } from 'aws-amplify'
// import aws_exports from '../../src/aws-exports'

// Amplify.configure(aws_exports)
export default class LaunchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResponse: null,
      HouseId: 0,
    }
  }


  // noteId is the primary key of the particular record you want to fetch
  async getNote() {
    const path = `/House/object/${this.state.HouseId}`
    try {
      const apiResponse = await API.get('HouseCRUD', path)
      console.log(`response from getting hosue: ${apiResponse}`)
      this.setState({ apiResponse })
    } catch (e) {
      console.log(e)
    }
  }

  handleChangeNoteId(event) {
    const HouseId = Number(event)
    this.setState({ HouseId })
  }
  async saveNote() {
    const newHouse = {
      body: {
        price: 800,
        floor: 8,
        HouseId: this.state.HouseId,
      },
    }
    const path = '/House'

    // Use the API module to save the note to the database
    try {
      const apiResponse = await API.post('HouseCRUD', path, newHouse)
      console.log(`response from saving hosue: ${apiResponse}`)
      this.setState({ apiResponse })
    } catch (e) {
      console.log(e)
    }
  }

  // noteId is the NoteId of the particular record you want to delete
  async deleteNote() {
    const path = `/House/object/${this.state.HouseId}`
    try {
      const apiResponse = await API.del('HouseCRUD', path)
      console.log(`response from deleteing hosue: ${apiResponse}`)
      this.setState({ apiResponse })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Response: {this.state.apiResponse && JSON.stringify(this.state.apiResponse)}</Text>
        <Button title="Save Note" onPress={this.saveNote.bind(this)} />
        <Button title="Get Note" onPress={this.getNote.bind(this)} />
        <Button title="Delete Note" onPress={this.deleteNote.bind(this)} />
        <TextInput style={styles.textInput} autoCapitalize="none" onChangeText={this.handleChangeNoteId.bind(this)} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    margin: 15,
    height: 30,
    width: 200,
    borderWidth: 1,
    color: 'green',
    fontSize: 20,
    backgroundColor: 'black',
  },
})
