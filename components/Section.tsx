import React from 'react'
import styled from 'styled-components'

interface ISectionProps {
  children: JSX.Element | JSX.Element[] | string
  darker?: boolean
  fullSize?: boolean
  id?: string
}

export default function Section({ children, darker = false, fullSize = false, id = undefined }: ISectionProps) {
  return (
    <Content id={id} darker={darker} fullSize={fullSize}>
      {children}
    </Content>
  )
}

const Content = styled.section<{ darker: boolean; fullSize: boolean }>`
  min-height: 50vh;
  background-color: ${({ darker }) => (darker ? 'var(--theme-background-primary)' : 'var(--theme-white)')};
  display: flex;
  justify-content: ${({ fullSize }) => (fullSize ? 'none' : 'center')};
  align-items: ${({ fullSize }) => (fullSize ? 'none' : 'center')};
  padding: ${({ fullSize }) => (fullSize ? '0' : '4rem 0')};

  color: var(--theme-white);
`
