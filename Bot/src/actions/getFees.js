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
        
        console.log(Text);



      return {}
    }

  render() {   
    
    let options = [
        {
            name : 'Fees',
            desc : 'Find out what you need to know about fees for your programme',
            pic :  'https://www.dit.ie/media/studentservices/images/Student%20Centre.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/feesandgrants/welcometofeesandgrants/'
        },
        {
            name : 'Grants & College Finance',
            desc : 'Find out how to apply for a Student Grant and about other finance options avaiale to Students at TU Dublin',
            pic :  'https://www.dit.ie/media/studentservices/images/fees_grants.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/feesandgrants/collegefreeloan/'
        },
        {
            name : 'Payments & Deadlines',
            desc : 'Find out how to make a payment to TU Dublin and the deadlines for Fees to be paid',
            pic :  'https://www.dit.ie/media/studentservices/images/Artboard%206-100.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/studentservicecentres/paymentspaymentdeadlines/'
        },
        {
            name : 'Exemptions',
            desc : 'Find out about the financial impocations when you have been approved for an exemption/exemtions',
            pic :  'https://www.dit.ie/media/studentservices/images/ID-card-collection-induction.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/feesandgrants/exemtions/'
        },
        {
            name : 'FAQ',
            desc : 'Frequently asked questions answered here',
            pic :  'https://www.dit.ie/media/studentservices/images/Examinations.jpg',
            url :  'https://www.dit.ie/currentstudents/studentservices/feesandgrants/faqs/'
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