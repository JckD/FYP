import React from 'react'
import { 
  Text,
  Button,
  Carousel,
  Element,
  Pic,
  Title,
  Subtitle
   } from '@botonic/react'
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
    static async botonicInit({ input, session, params, lastRoutePath, Text, req}) {
        console.log(params);
        session.campus = params.location;
        
        if (params.location == null)
        {
            if(input.data.includes('Kevin St'))
            {
                params.location = 'Kevin St';
            }
        } 
        
            let buttonObj = params;
        

      return {buttonObj}
  }

  render() {   
  
    return (
    <>
        <Text>
            Here are the opening times for {this.props.buttonObj.location} library: {'\n'}
        </Text>
        {this.props.buttonObj.location == 'Kevin St' &&
            <>
                <Text>Mon-Thurs: 09:00-21:30 {'\n'}
                Friday: 09:00-17:15{'\n'}
                Saturday : 09:30-16:30</Text>
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
        <Button url='https://www.dit.ie/library/location/'>Find out more here.</Button>
    </>
    )
  }
}
