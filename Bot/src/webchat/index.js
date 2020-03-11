import React from 'react'
//import { staticAsset } from '@botonic/react'
import chatbotImage from '../assets/chatbotImage.png'



export const webchat = {
  theme: {
    mobileBreakpoint: 360,
    style: {
      position: 'fixed',
      right: 0,
      bottom: 0,
      width: 360,
      height: 560,
      margin: 'auto',
      backgroundColor: 'white',
      borderRadius: 0,
      //boxShadow: '0 0 50px rgba(0,0,255,.30)',
      overflow: 'hidden',
      backgroundImage: 'white',
      
    }, // end of main style

    botMessageImage: chatbotImage,
    triggerButtonImage: chatbotImage,

    brandColor: '#34aeeb',
   
    headerTitle: 'TUD Bot',
    headerImage: chatbotImage,
  
    /*
     * brandImage will set both headerImage and botMessageImage with its current logo
     * you can overwrite these values by redefining them individually
     */
    message: {
      bot: {
        image: chatbotImage, // set it to 'null' to hide this image
        style: {
          border: 'none',
          color: 'black',
          borderRadius: '20px',
          background: 'pink',
        }, // end of message bot style
      }, //end of message bot
      user: {
        style: {
          // border:'none',
          color: 'white',
          background: '#2b81b6',
          borderRadius: '10px',
        }, //end of message user style
      }, // end of message user
     // customTypes: [CalendarMessage],
    }, //end  of message

    button: {
      style: {
        color: 'black',
        background: 'white',
        borderRadius: 20,
      }, // end of button style
      hoverBackground: '#b3fcfa',
      hoverTextColor: 'black',

      // custom: CustomButton,
    }, //end of button
    replies: {
      align: 'center',
      wrap: 'nowrap',
    }, //end of replies
    reply: {
      style: {
        color: 'black',
        background: '#e1fcfb',
        borderColor: 'black',
      }, //end of reply sytle
      // custom: CustomReply,
    }, //end of reply
    userInput: {
      style: {
        background: 'black',
      }, //end of user input style
      box: {
        style: {
          border: '2px solid #2b81b6',
          color: '#2b81b6',
          background: '#F0F0F0',
          width: '90%',
          borderRadius: 20,
          paddingLeft: 20,
          marginRight: 10,
        }, //end of user input box style
        placeholder: 'Type something...',
      }, //end of user input box

      // enable: false,
      
    },
  }, /**** END OF THEME ****/

  emojiPicker: false,

  attachments: true,
      

  // These are the set of inputs which are not allowed.
  blockInputs: [
    {
      match: [/ugly/i, /bastard/i],
      message: 'We cannot tolerate these kind of words.',
    },
  ],

  // Webchat listeners
  onInit: app => {
    // You can combine webchat listeners with the Webchat SDK's Api in order
    // to obtain extra functionalities. This will open automatically the webchat.
    //app.open()
    app.addUserPayload('Start')
    app.Open()
  },
  onOpen: app => {
    // app.addBotText('Hi human!')
    // app.addUserText('Hi')
    // app.addUserPayload('POSTBACK_INITCHAT')
    //app.addUserPayload('Start')
  },
  onClose: app => {
    console.log('I have been closed!')
  },
  onMessage: app => {
    console.log('New message!')
  },
}
