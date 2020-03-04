import React from 'react'
import { Text, Reply } from '@botonic/react'


export default class extends React.Component {

  static async botonicInit({ input }) {
    return { name: 'John Doe' }
  }

  render() {
    return (
      <>
        <Text>Hello! Welcome to TUD's Student Chatbot {"\n"} What can I help you with today? 
          <Reply payload='Library'>Library</Reply>
          <Reply payload='Exams'>Exams</Reply>
          <Reply payload='Doctor'>Doctor</Reply>
          <Reply>Student Services</Reply>
        </Text>

      </>
    )
  }
}
