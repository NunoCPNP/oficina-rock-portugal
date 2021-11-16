import { initialStock } from '@/utils/data'
import { writeData } from '@/utils/writeData'

const Load = () => {
  const loadData = () => writeData(initialStock)

  return (
    <>
      <div>
        <button onClick={() => loadData()}>Load</button>
      </div>
    </>
  )
}

export default Load
