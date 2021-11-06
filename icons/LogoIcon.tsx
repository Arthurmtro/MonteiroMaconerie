import React from 'react'
import styled from 'styled-components'

interface ILogoIcon {
  size?: number
}

const LogoIcon = ({ size }: ILogoIcon) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 81.702 83">
    <text
      id="M"
      transform="translate(19.702)"
      fill="#463f32"
      fontSize="70"
      fontFamily="Rubik-Medium, Rubik"
      fontWeight="500"
    >
      <tspan x="0" y="65">
        M
      </tspan>
    </text>
    <g id="casque" transform="translate(34.706 15.886) rotate(110)">
      <path
        id="Path_9"
        data-name="Path 9"
        d="M0,0H0L1.182,7.753,2.321,10.9,4.2,13.419,6.476,15.8l2.949,2.378,3.552,1.4,3.485.56,3.485-.56,3.217-1.4L26.046,15.8l2.547-2.378L30.2,10.9l1.407-3.148L33.238,0H44.281"
        transform="translate(0 0)"
        fill="#ff0"
        stroke="#535000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <path
        id="Path_10"
        data-name="Path 10"
        d="M0,0C12.285,16.6,23.5,0,23.5,0"
        transform="translate(1.738 9.304)"
        fill="#ff0"
        stroke="#535000"
        strokeWidth="1"
      />
    </g>
  </svg>
)

const Path = styled.path`
  fill: #fff;
`

export default LogoIcon
