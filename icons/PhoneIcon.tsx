import React from 'react'
import styled from 'styled-components'

interface IPhoneIcon {
  size?: number
}

const PhoneIcon = ({ size }: IPhoneIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19.057" height="18.99" viewBox="0 0 19.057 18.99">
      <g id="icon" transform="translate(-543.051 -12.903)">
        <Path
          id="Path_2"
          data-name="Path 2"
          d="M0,.312-2.949,4-1.7,8.639l4.053,4.348,3.758,2.8,3.537,1.105L12.6,15.787,14,14.019l-.516-1.032-1.326-1.253L10.9,10.85l-1.842.295-1.621.59L2.357,7.018,3.978,3.554,2.357,1.417,0,.312"
          transform="translate(546.5 14.5)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <Path
          id="Path_3"
          data-name="Path 3"
          d="M-.222-.551,1.369.073l1.4,1.09L3.811,2.689l.684,1.992"
          transform="translate(553.5 17.5)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <Path
          id="Path_4"
          data-name="Path 4"
          d="M0,0,1.915.428l1.46.636,1.193.69.9.923.943,1.14L7.169,5.25,7.59,6.4,8,8"
          transform="translate(553.5 13.5)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  )
}

const Path = styled.path`
  stroke: var(--theme-alt);
`

export default PhoneIcon
