interface props {
  data: data[]
}

interface data {
  name: string
}

export const TableDash = (data: any) => {
  return (
    <>
      <h1>Test</h1>
      {JSON.stringify(data)}
    </>
  )
}

export default TableDash