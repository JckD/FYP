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
  Subtitle
   } from '@botonic/react';
import { RequestContext } from '@botonic/react'

export default class extends React.Component {
  

    static async botonicInit({ input, session, params, lastRoutePath, Text}) {
        
     // const MongoClient = require('mongodb').MongoClient;
      

      // const {
      //  Stitch,
      //   RemoteMongoClient,
      //    AnonymousCredential
      //    } = require('mongodb-stitch-browser-sdk');

      // const client = Stitch.initializeDefaultAppClient('tudbot-bdnwa');

      // const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('TUDBot');



      // client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
      // db.collection('Data').find({ "Service" : "Doctor"}, { limit: 1})
      // ).then(docs => {
      //   console.log("Found docs")
      //   console.log(docs);
      // }).catch(err => {
      //   console.error(err)
      // });


      
      //  const MongoClient = require('mongodb').MongoClient;
      // const uri = "mongodb+srv://JDoyle:memes420@cluster0-jfz0g.mongodb.net/test?retryWrites=true&w=majority";
      // const client = new MongoClient(uri, { useNewUrlParser: true });
      // client.connect(err => {
      //   const collection = client.db("TUDBot").collection("Data");
      //   console.log(collection)
      //   // perform actions on the collection object
      //   client.close();
      // });

      

      return {}
    }

  render() {   
  
    return (
    <>
        <Text>
            TU Dublin offers a Student Health Centre at Augnier Street campus and Linenhall Campus. 
            
        </Text>

        <Text>General Consultations are free</Text>
        <Text>
            There are fees for some services and Specialist Clinics
            <Button url='https://www.dit.ie/campuslife/studenthealthservice/fees/'>Fees</Button>
            <Button url='https://www.dit.ie/campuslife/studenthealthservice/sexualhealthservice/'>Sexual Health</Button>
            <Button url='https://www.dit.ie/campuslife/studenthealthservice/travelvaccinations/'>Travel Vaccinations</Button>
            <Button url='https://www.dit.ie/campuslife/studenthealthservice/physiotherapy/'>Physiotherapy</Button>
            <Button url='https://www.dit.ie/media/studenthealthcentre/Hep%20B%20Info%20for%20Students.doc'>Hepatitis B {'\n'}Vaccination Programme</Button>
            
        </Text>
        <Text>Contact Information can be found here:
            <Button url='https://www.dit.ie/campuslife/studenthealthservice/contactus/'>Contact Info</Button>
        </Text>
    </> 
    )
  }
}