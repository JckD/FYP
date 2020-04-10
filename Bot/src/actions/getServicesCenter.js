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
        
        
            let options = [
                {
                    name : 'Find a Student Services Centre',
                    desc : 'There are currently three student service centres dispersed throught the TU Dublin network of buildings',
                    pic :  'https://www.dit.ie/media/studentservices/images/student%20service.jpg',
                    url :  'https://www.dit.ie/currentstudents/studentservices/studentservicecentres/findastudentservicecentre/'
                },
                {
                    name : 'I need a letter, form stamped',
                    desc : 'Click here to access information on how to complete the process',
                    pic :  'https://www.dit.ie/media/studentservices/images/Artboard%2012-100.jpg',
                    url :  'https://www.dit.ie/currentstudents/studentservices/studentservicecentres/requestservice/'
                },
                {
                    name : 'Student ID',
                    desc : 'Information on how and where to collect your student card',
                    pic :  'https://www.dit.ie/media/studentservices/images/student%20ID%20card.jpg',
                    url :  'https://www.dit.ie/currentstudents/studentservices/studentservicecentres/studentidcard/'
                },
                {
                    name : 'Rules & Regulations',
                    desc : 'Find out more about the TUD Dublin Rules and TU Dublin Policy here',
                    pic :  'https://www.dit.ie/media/studentservices/images/Rules%20&%20Regulations.jpg',
                    url :  'https://www.dit.ie/currentstudents/studentservices/registration/registrationsfaqs/'
                },
                {
                    name : 'Keep your details up to date',
                    desc : 'It is really important that we can contact you, if you need to amed your contact details you can do so here',
                    pic :  'https://www.dit.ie/media/studentservices/images/student.jpg',
                    url :  'https://www.dit.ie/currentstudents/studentservices/studentservicecentres/keepyourdetailsuptodate/'
                },
                {
                    name : 'IT Services for Students',
                    desc : 'If you need help accessing the wifi, printin or are having other technical isssues click here for help',
                    pic :  'https://www.dit.ie/media/studentservices/images/it%20technician.jpg',
                    url :  'https://www.dit.ie/currentstudents/studentservices/studentservicecentres/itservicesforstudents/'
                }
            ]   
       
      return {options}
    }

  render() {   
    
    return (
    <>     
        <Carousel>
            {this.props.options.map((e, i) => (
                <Element key={e.name}>
                    <Pic src={e.pic} />
                    <Title>{e.name}</Title>
                    <Subtitle>{e.desc}</Subtitle>
                    <Button url={e.url}>TUD Site</Button>
                </Element>
            ))}
        </Carousel>
        

    </> 
    )
  }
}