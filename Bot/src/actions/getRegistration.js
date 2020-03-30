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
        
     
1500 
      return {}
    }

  render() {   
    let options = [
        {
            name : 'Register & Pay',
            desc : 'Self service registration system allows you to go on-line and register for your TU Dublin programme',
            pic :  'https://www.dit.ie/media/studentservices/images/Register-and-Pay.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/registration/registerpaynew/'
        },
        {
            name : 'Module Selection',
            desc : 'Click here to access information on how to complete the process',
            pic :  'https://www.dit.ie/media/studentservices/images/Artboard%2012-100.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/registration/moduleselection/'
        },
        {
            name : 'Student ID',
            desc : 'Information on how and where to collect your student card',
            pic :  'https://www.dit.ie/media/studentservices/images/Artboard%2020-100.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/studentservicecentres/studentidcard/'
        },
        {
            name : 'FAQ',
            desc : 'Frequently asked questions answered here',
            pic :  'https://www.dit.ie/media/studentservices/images/FAQ.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/registration/registrationsfaqs/'
        },
        {
            name : 'Part-time Music Enrolment',
            desc : 'Click here to enrol for Part-time Music',
            pic :  'https://www.dit.ie/media/studentservices/images/Artboard%207-100.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/registration/part-timemusicenrolment/'
        }
    ]
    return (
    <>     
        <Carousel>
            {options.map((e, i) => (
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