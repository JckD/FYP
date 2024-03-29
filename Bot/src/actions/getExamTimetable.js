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

        // Get the current month
        let monthNumber = new Date().getMonth();
        let monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let currentMonth = monthNames[monthNumber];
      return {buttonObj, monthNumber, currentMonth}
  }


  render() {   

    const time = this.context.month;
    // if current month is around exam time send timetable dont if not
    if (time == 11 || time == 6)
    {
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
    else{
        return (
            <>
                <Text>
                    It's only {this.props.currentMonth}!
                    It's too early for examtimetables to be out!
                </Text>
            </>
        )
    }
    
  }
}
