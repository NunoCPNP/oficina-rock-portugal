import { useEffect } from "react" 

import { getCollection } from "../services/collection"



const Home: React.FC = () => {
  useEffect(() => {
    const getData = async () => {
      const response = await getCollection()
    
      console.log(response)
    }

    getData()
  }, [])

  return (
    <div>Yo Tribos !</div>
  )
}

export default Home
