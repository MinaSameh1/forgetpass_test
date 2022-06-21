import { useState } from 'react'
import { getData } from './dashAPI'
import { data } from './types'

export const TableDash = () => {
  const [data, setData] = useState<data[]>([])

  const getDataFromApi = async () => {
    setData(await getData())
  }

  return (
    <>
      <h1>Test</h1>
        {data.map(item => (
        <div key={item.id}>
          <h5>Data</h5>
          <pre>
            {item.school}
          </pre>
        </div>
        ))}
      <br />
      <button onClick={() => getDataFromApi()} >click</button>
    </>
  )
}

export default TableDash
