import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAsync } from '../reducers/counterReducer'

export default function Page2 () {
  const { value, status } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(incrementAsync())
  }, [dispatch, incrementAsync])

  return (
    <div id='Page3'>
      <h2>Title: Page3</h2>
      {(status === 'pending')
        ? <h3>Fetching...</h3>
        : (status === 'fulfilled')
            ? <h3>Complete...</h3>
            : (status === 'rejected')
                ? <h3>Failed...</h3>
                : <h3>Idle...</h3>
      }
      <p>Count: {value}</p>
    </div>
  )
}
