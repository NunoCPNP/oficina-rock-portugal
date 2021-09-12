import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { ImCross } from 'react-icons/im'

import { useProductState } from '@/hooks/useProduct'

import { Container, EmptyBag, Bag, BagItem, BagItemHeader } from './CheckOutItems.styles'

const CheckOutItems = () => {
  const { t } = useTranslation('common')
  const { shoppingBag } = useProductState()

  return (
    <Container>
      {shoppingBag.length === 0 && <EmptyBag>{t(`cart-empty`)}</EmptyBag>}
      <Bag>
        {shoppingBag.length !== 0 && (
          <BagItemHeader>
            <div></div>
            <div>Description</div>
            <div>Quantity</div>
            <div>Size</div>
            <div>Price</div>
            <div>Remove</div>
          </BagItemHeader>
        )}
        {shoppingBag.map((item, index) => (
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
            <div className="size">{item.size}</div>
            <div className="price">{item.price} €</div>
            <ImCross className="remove" onClick={() => console.log(index)} />
          </BagItem>
        ))}
      </Bag>
    </Container>
  )
}

export default CheckOutItems
