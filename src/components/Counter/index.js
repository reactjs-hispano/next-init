import React from 'react'
import { connect } from 'react-redux'
import { Counter as CounterComponent } from './counter'
import { addCounter, removeCounter } from '../../store/meta/actions'

const Counter = ({
  count,
  addCounter,
  removeCounter
}) => (
  <CounterComponent
    count={count}
    addCounter={addCounter}
    removeCounter={removeCounter}
  />
)

const mapStateToProps = ({
  meta: { count }
}) => ({
  count
})
const mapDispatchToProps = ({ addCounter, removeCounter })

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
