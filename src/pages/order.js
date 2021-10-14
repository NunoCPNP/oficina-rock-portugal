import { useRouter } from 'next/router'
import useSWR from 'swr'

const Order = () => {
  const {
    query: { session_id },
  } = useRouter()

  const { data, error } = useSWR(session_id ? `/api/checkout/${session_id}` : null, (url) =>
    fetch(url).then((res) => res.json()),
  )

  return <div>{data && JSON.stringify(data, null, 2)}</div>
}

export default Order
