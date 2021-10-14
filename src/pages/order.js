import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import Loader from '@/components/Loader'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;

  p {
    text-align: center;
  }
`

const Order = () => {
  const { query } = useRouter()

  const { data, error } = useSWR(query.session_id ? `/api/checkout/${query.session_id}` : null, (url) =>
    fetch(url).then((res) => res.json()),
  )

  return (
    <Container>
      {error ? (
        <div>
          <p>Sorry, something went wrong!</p>
        </div>
      ) : !data ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <h2>Thanks for your order !</h2>
          <p>Check your inbox for the receipt</p>
        </div>
      )}
    </Container>
  )
}

export default Order
