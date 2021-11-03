import React from 'react'
import styled from 'styled-components'

interface ISectionProps {
  children: JSX.Element | string
  darker?: boolean
  half?: boolean
  id?: string
}

export default function Section({ children, darker = false, half = false, id = undefined }: ISectionProps) {
  return (
    <Content id={id} darker={darker}>
      {children}
    </Content>
  )
}

const Content = styled.section<{ darker: boolean }>`
  min-height: 50vh;
  background-color: ${({ darker }) => (darker ? 'var(--theme-background-primary)' : 'var(--theme-white)')};
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ darker }) => (darker ? 'var(--theme-white)' : 'var(--theme-background-primary)')};
`
