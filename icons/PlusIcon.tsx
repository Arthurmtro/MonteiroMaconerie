import React from 'react'
import styled from 'styled-components'

interface IPlusIcon {
  size?: number
}

const PlusIcon = ({ size }: IPlusIcon) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11.693" height="11.817" viewBox="0 0 11.693 11.817">
    <g id="Group_1" data-name="Group 1" transform="translate(-706.5 -90.5)">
      <Line id="Line_1" data-name="Line 1" x1="11.693" transform="translate(706.5 96.409)" fill="none" strokeWidth="1.8" />
      <Line id="Line_2" data-name="Line 2" y2="11.817" transform="translate(712.346 90.5)" fill="none" strokeWidth="1.8" />
    </g>
  </svg>
)

const Line = styled.line`
  stroke: var(--theme-alt);
`

export default PlusIcon
