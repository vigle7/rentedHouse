import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import autobind from 'autobind-decorator'
// import Amplify, { API } from 'aws-amplify'
import { API } from 'aws-amplify'
// import aws_exports from '../../src/aws-exports'

// Amplify.configure(aws_exports)

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResponse: null,
      title: '0',
    }
  }


  // noteId is the primary key of the particular record you want to fetch
  @autobind
  async getNote() {
    const path = `/House/${this.state.title}`
    try {
      const apiResponse = await API.get('HouseCRUD', path)
      console.log(`response from getting hosue: ${apiResponse}`)
      this.setState({ apiResponse })
    } catch (e) {
      console.log(e)
    }
  }

  @autobind
  handleChangeNoteId(event) {
    this.setState({ title: event })
  }

  @autobind
  async saveNote() {
    const newHouse = {
      body: {
        title: this.state.title,
        price: '800',
        floor: '8',
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
  @autobind
  async deleteNote() {
    const path = `/House/object/${this.state.title}/800`
    try {
      debugger
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
        <Button title="Save Note" onPress={this.saveNote} />
        <Button title="Get Note" onPress={this.getNote} />
        <Button title="Delete Note" onPress={this.deleteNote} />
        <TextInput style={styles.textInput} autoCapitalize="none" onChangeText={this.handleChangeNoteId} />
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
