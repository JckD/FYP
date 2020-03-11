import React from 'react'
//import { staticAsset } from '@botonic/react'
import chatbotImage from '../assets/chatbotImage.png'
import launcherIcon from '../assets/chatbotImage.png'
import IntroImage from '../assets/chatbotImage.png'
import C3POLogo from '../assets/chatbotImage.png'
import R2D2Logo from '../assets/chatbotImage.png'
import { CustomTrigger } from './custom-trigger'
//import { CustomHeader } from './custom-header'
import { CustomIntro } from './custom-intro'
import { CustomReply } from './custom-reply'
import { CustomButton } from './custom-button'

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
    webview: {
      style: {+
        top: 0,
        right: 0,
        height: 500,
        width: '100%',
      }, // end of webview style
      header: {
        style: {
          background: 'white',
        }, // end of webview header file
      }, // end of webview header
    }, // end of webview
    botMessageImage: chatbotImage,

    triggerButtonImage: launcherIcon,

    triggerButton: {
      image: launcherIcon,
      style: {
        width: '200px',
      }, // end of triggerButton style
      // custom: CustomTrigger,
    }, //end of triggerButton
    intro: {
      // image: IntroImage,
      // style: {
      //   padding: 20
      // }
      custom: CustomIntro,
    }, //end of intro
    //brandColor: '#34aeeb',
    headerStyle: {
        
        backgroundColor:'#ffffff',
        background: '#ffffff',
        height: 100,
        borderRadius: 0,
        color: '#ffffff',

        style : {
          backgroundColor:'#ffffff',
          background: '#ffffff',
          height: 100,
          color: '#ffffff',
        }
    
    },
    headerTitle: 'TUD Bot',
    headerImage: R2D2Logo,
  
    header: {
      title: 'TUD Bot',
      //subtitle: 'R2D2',
      image: R2D2Logo,
      style: {
        height: 70,
        backgroundImage: 'white',
        background: 'white',
      }, //end of header style
       //custom: CustomHeader
    }, //end of header
    /*
     * brandImage will set both headerImage and botMessageImage with its current logo
     * you can overwrite these values by redefining them individually
     */
    message: {
      bot: {
        image: C3POLogo, // set it to 'null' to hide this image
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
 
  scrollbar: {
    // enable: false,
    autoHide: true,
    thumb: {
      opacity: 1,
      // color: 'yellow',
      bgcolor:
        'linear-gradient(-131deg,rgba(231, 176, 43) 0%,rgb(193, 62, 81) 100%);',
      border: '20px',
    },
    // track: {
    //   color: 'black',
    //   bgcolor:
    //     'linear-gradient(-131deg,rgba(50, 40, 43) 0%,rgb(125, 62, 81) 100%);',
    //   border: '20px',
    // },
  },
  

  // Webchat listeners
  onInit: app => {
    // You can combine webchat listeners with the Webchat SDK's Api in order
    // to obtain extra functionalities. This will open automatically the webchat.
    //app.open()
    app.addUserPayload('Start')
    app.onOpen()
  },
  onOpen: app => {
    // app.addBotText('Hi human!')
    // app.addUserText('Hi')
    // app.addUserPayload('POSTBACK_INITCHAT')
    //app.addUserPayload('Start')
  },
  onClose: app => {
   // console.log('I have been closed!')
  },
  onMessage: app => {
    //console.log('New message!')
  },
}
