import React from 'react'
import styled from 'styled-components'

interface IMailIcon {
  size?: number
}

const MailIcon = ({ size }: IMailIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19.059" height="15.013" viewBox="0 0 19.059 15.013">
      <Path
        id="icon"
        d="M0,0H18.046L8.982,8.966.36,0H18.046V14H.36L6.624,6.534,8.982,8.966l2.506-2.432L18.046,14H.36L0,0"
        transform="translate(0.513 0.513)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  )
}

const Path = styled.path`
  stroke: var(--theme-alt);
`

export default MailIcon
