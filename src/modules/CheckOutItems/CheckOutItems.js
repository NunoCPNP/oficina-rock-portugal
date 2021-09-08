import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { ImCross } from 'react-icons/im'

import useProduct from '@/hooks/useProduct'

import { Container, EmptyBag, Bag, BagItem } from './CheckOutItems.styles'

const CheckOutItems = () => {
  const { t } = useTranslation('common')
  const [{ shoppingBag }, dispatch] = useProduct()

  // console.log('-->', shoppingBag)

  return (
    <Container>
      {shoppingBag.length === 0 && <EmptyBag>{t(`cart-empty`)}</EmptyBag>}
      <Bag>
        {shoppingBag.map((item, index) => {
          console.log(item)

          return (
            <BagItem key={index}>
              <div>
                <Image src={item.image} alt="" width="65" height="70" />
              </div>
              <div className="description">
                <div>{item.type}</div>
                <div className="title">
                  {item.band} - {item.title}
                </div>
              </div>
              <div className="quantity">{item.quantitySelected}</div>
              <div className="price">{item.price} €</div>
              <ImCross />
            </BagItem>
          )
        })}
      </Bag>
    </Container>
  )
}

export default CheckOutItems
