import React from 'react'
import { Text, Button, Reply } from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
    static async botonicInit({ input }) {
    return { name: 'John Doe' }
  }

  render() {
    return (
      <>
        <Text>Which library are you asking about?

        <Button path='getLibrary?location=Kevin St'>Kevin St</Button>
        <Button path='getLibrary?location=Augnier St'>Augnier St</Button>
        <Button path='getLibrary?location=Cathal Bruhga St'>Cathal Brugha St</Button>
        <Button path='getLibrary?location=Grangegorman'>Grangegorman</Button>
        <Button path='getLibrary?location=Rathmines'>Rathmines</Button>
        <Button path='getLibrary?location=Bolton St'>Bolton St</Button>
       
        </Text>
       
      </>
    )
  }
}
