import { useEffect } from "react" 

import { getCollection } from "../services/collection"

const Home: React.FC = () => {
  useEffect(() => {
    getCollection().then((response) => console.log(response.data))
  }, [])

  return (
    <div>Yo Tribos !</div>
  )
}

export default Home
