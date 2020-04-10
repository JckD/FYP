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
import {
    Stitch,
     RemoteMongoClient,
      AnonymousCredential
      } from 'mongodb-stitch-browser-sdk';
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
      
    // constructor() {
    //     super();
    //     this.state = {
    //         options : [],
    //         value : ""
    //     };

    //     this.displayOptions =this.displayOptions.bind(this);
    // };

    // componentDidMount() {
    //     //Initialize the App Client
    //     if (this.client != Stitch.initializeDefaultAppClient('tudbot-bdnwa'))
    //     {
    //         this.client = Stitch.initializeDefaultAppClient('tudbot-bdnwa')
    //     };
        

    //     // Get a MongoDB Service Client, used for logging in and communicating with Stitch
    //     const MongoDB = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');

    //     // Get ref to the TUDBot DB
    //     this.db = MongoDB.db("TUDBot");
    //     this.displayOptionsOnLoad();
    // }

    // displayOptions() {
    //     // Query the remote DSb and update the component State
    //     this.db
    //     .collection("studentServices")
    //     .find({},{ limit : 1})
    //     .asArray()
    //     .then(options => {
    //         this.setState({options});
    //     }); 
    // }

    // displayOptionsOnLoad() {
    //     //Anonmously log in and display comments on load
    //     this.client.auth.loginWithCredential(new AnonymousCredential())
    //     .then(this.displayOptions)
    //     .catch(console.error);
    // }

    // handleChange(event) {
    //     this.setState({ value : event.target.value });
    // }

    static async botonicInit({ input, session, params, lastRoutePath, Text}) {
        
          
      
     
        // const client = Stitch.initializeDefaultAppClient('tudbot-bdnwa');
     
        // const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('TUDBot');
     
     
        // client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
        // db.collection('Data').find({ "Service" : "Doctor"}, { limit: 1})
        // ).then(docs => {
        //     this.setState({options});
        // }).catch(err => {
        //     console.error(err)
        //});
        
        let   options = [
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
           ];
           
     

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