import React from 'react'
import { 
  Text,
  Button,
  Carousel,
  Element,
  Pic,
  Title,
    Document,
  Subtitle
   } from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
    static async botonicInit({ input, session, params, lastRoutePath, Text}) {
        
        let buttonObj = params;
        console.log(buttonObj.location);
        

      return {buttonObj}
  }

  render() {   
  
    return (
    <>
        <Text>
            Here are the Exam Timetables for {this.props.buttonObj.location}: {'\n'}
        </Text>
        {this.props.buttonObj.location == 'Kevin St' &&
            <>
                <Text>Exam Timetables are usuallly released 4 weeks before the exam
                <Button url='https://www.dit.ie/media/examinations/examtimetables/TU%20Dublin%20City%20-%20Kevin%20Street%20V2.pdf'>Timetable</Button>
                </Text>
            </>
        }
        {this.props.buttonObj.location == 'Augnier St' &&
            <>
                <Text>Mon-Thurs: 09:00-21:00{'\n'}
                Friday: 09:00-17:00{'\n'}
                Saturday: 10:00-17:00</Text>
            </>
        }
         {this.props.buttonObj.location == 'Cathal Brugha St' &&
            <>
                <Text>Mon-Thurs: 09:00-21:00{'\n'}
                Friday: 09:00-17:00{'\n'}
                Saturday: 10:00-17:00</Text>
            </>
        }
         {this.props.buttonObj.location == 'Grangegorman' &&
            <>
                <Text>Mon-Thurs: 09:30-21:30{'\n'}
                Friday: 09:30-17:15{'\n'}
                Saturday: 10:00-17:00</Text>
            </>
        }
         {this.props.buttonObj.location == 'Rathmines' &&
            <>
                <Text>Mon-Thurs: 09:30-21:30{'\n'}
                Friday: 09:30-17:00{'\n'}
                Saturday: 09:30-13:00</Text>
            </>
        }
         {this.props.buttonObj.location == 'Bolton St' &&
            <>
                <Text>Mon-Thurs : 09:00-21:00{'\n'}
                Friday: 09:00-17:00{'\n'}
                Saturday: 09:30-16:30</Text>
            </>
        }
        
    </>
    )
  }
}
