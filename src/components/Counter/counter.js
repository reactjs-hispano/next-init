import React from 'react'
import { Button, Actions, Container, Count } from './styles'
import { META_ENVIRONMENT_EXAMPLE } from '../../config'

export const Counter = ({
  count,
  addCounter,
  removeCounter
}) => (
  <>
    <Container>
      <Count>{count}</Count>
      <Actions>
        <Button onClick={() => addCounter()}>ADD COUNT</Button>
        <Button onClick={() => removeCounter()}>REMOVE COUNT</Button>
        <Button onClick={() => console.log(META_ENVIRONMENT_EXAMPLE)}>PRINT IN CONSOLE</Button>
      </Actions>
    </Container>
  </>
)
