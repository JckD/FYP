import React from 'react'
import { staticAsset } from '@botonic/react'
import Img from '../assets/chatbotImage.png'
export const CustomIntro = () => {
  return <img height={'50%'} width={'100%'} src={staticAsset(Img)} />
}

