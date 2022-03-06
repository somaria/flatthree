import React, { useEffect } from 'react'
import _ from 'lodash'
import moment from 'moment'

interface DataProps {
  clazz_name: string
  created_at: string
}

let dataone: DataProps[] = [
  {
    clazz_name: '1A',
    created_at: '2022-01-19T09:13:42.149+08:00',
  },
  {
    clazz_name: '1B',
    created_at: '2022-02-19T09:13:42.149+08:00',
  },
]

let datatwo: DataProps[] = []

function App() {
  useEffect(() => {
    dataone = _.map(dataone, (item) => ({
      ...item,
      created_at: moment(item.created_at).format('MMM'),
    }))
    console.log(dataone)
  }, [])

  return <div>Test</div>
}

export default App
