import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { ImCross } from 'react-icons/im'

import CheckOutTotal from '@/components/CheckOutTotal'

import useProduct from '@/hooks/useProduct'

import { Container, EmptyBag, Bag, BagItem, BagItemHeader } from './CheckOutItems.styles'

const CheckOutItems = () => {
  const { t } = useTranslation('common')
  const [{ shoppingBag }, dispatch] = useProduct()

  return (
    <Container>
      {shoppingBag.length === 0 && <EmptyBag>{t(`cart-empty`)}</EmptyBag>}
      <Bag>
        {shoppingBag.length !== 0 && (
          <BagItemHeader>
            <div></div>
            <div>{t(`description`)}</div>
            <div>{t(`quantity`)}</div>
            <div>{t(`size`)}</div>
            <div>{t(`price`)}</div>
            <div>{t(`remove`)}</div>
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
            <ImCross className="remove" onClick={() => dispatch({ type: 'DELETE_PRODUCT_FROM_BAG', payload: index })} />
          </BagItem>
        ))}
        {shoppingBag.length !== 0 && <CheckOutTotal />}
      </Bag>
    </Container>
  )
}

export default CheckOutItems
