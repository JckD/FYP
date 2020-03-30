import React from 'react';
import { 
  Text,
  Button,
  Carousel,
  Element,
  Pic,
  Title,
    Document,
    Location, 
  Subtitle,
  Reply
   } from '@botonic/react';
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
    static async botonicInit({ input, session, params, lastRoutePath, Text}) {
        
     

      return {}
    }

  render() {   
    
    return (
    <>
        <Text>
            What services were you looking for?
            <Button payload='Registration'>Registration</Button>
            <Button payload='fees'>Fees & Grants</Button>
            <Button payload='ServicesCenter'>Student Services center</Button>
            <Button payload='ExamInformation'>Exams</Button>
            <Button payload='Graduation'>Graduations</Button>
            <Button payload='OnlineService'>Online Student Services</Button>
            
        </Text>

    </> 
    )
  }
}