import { useEffect, useState } from 'react'
import { data } from './types'
import { countBy } from 'lodash'
import { MdOutlineAvTimer } from 'react-icons/md'
import './tabledash.css'
import { FaSchool } from 'react-icons/fa'
import { getData } from '../../api'

export const TableDash = () => {
  const [data, setData] = useState<data[]>([])
  const [total, setTotal] = useState(0)

  const getDataFromApi = async () => {
    const { data, count } = await getData()
    setData(data)
    setTotal(count)
  }

  useEffect(() => {
    getDataFromApi()
  }, [])

  return (
    <div className='table-main'>
      <span className='table-title'>Schools</span>
      <div className='table-widgets'>
        <div className='table-widget'>
          <MdOutlineAvTimer className='table-widget-icon' />
          <span className='table-widget-number'>
            {countBy(data, (item: data) => item.status == 0).true}
          </span>
          <span className='table-widget-text'>Pending Schools </span>
        </div>
        <div className='table-widget'>
          <FaSchool className='table-widget-icon' />
          <span className='table-widget-number'>{total}</span>
          <span className='table-widget-text'>Total Schools</span>
        </div>
      </div>
      <div className='table-buttons'>

      </div>

      {data.map((item) => (
        <div key={item.id}>
          <h5>Data</h5>
          <pre>{item.school}</pre>
        </div>
      ))}
      <br />
      <button onClick={() => getDataFromApi()}>click</button>
    </div>
  )
}

export default TableDash
