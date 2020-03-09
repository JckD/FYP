import React from 'react'
import { Text, Button, Reply } from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
    static async botonicInit({ input, params, session }) {
        
       let locationParam = params;
        if(session.campus != null)
        {
            
        }
        
//        if (input.entities.places.includes('Kevin St'))
//        {
//             {path='getLibrary?location=Kevin St'}
//        }
//        else if (input.data.includes('Kevin St'))
//        {
//              GetLibrary
//        }
//        else {
//          locationParam = params;
//        }
    return {locationParam}
  }

  render() {
   
    
    return (
      <>
        
        <Text>Which campus do you attend?
        
            <Button path='getExamTimetable?location=Kevin St'>Kevin St</Button>
            <Button path='getExamTimetable?location=Augnier St'>Augnier St</Button>
            <Button path='getExamTimetable?location=Cathal Bruhga St'>Cathal Brugha St</Button>
            <Button path='getExamTimetable?location=Grangegorman'>Grangegorman</Button>
            <Button path='getExamTimetable?location=Rathmines'>Rathmines</Button>
            <Button path='getExamTimetable?location=Bolton St'>Bolton St</Button>

        </Text>
       
      </>
    )
  }
}
