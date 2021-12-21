import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

const Wrapper = styled.div`
  margin: 3rem 0;
`

const WhoWeAre = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO title="Oficina Rock Portugal" />
      <Wrapper>
        <SectionTitle title={t(`who-we-are`)} />
        {/* <div>
          <p>A Oficina Rock é uma marca de roupas criada no intuito de agregar estilo ao vestuário rock.</p>
          <p>Atuamos no mercado há mais de 20 anos, oferecendo e entregando qualidade em todos os aspectos.</p>
          <p>
            Todas as nossas camisetas, passam por um rigoroso processo de fabricação, desde a a arte da camiseta até a
            confecção da mesma. Trazendo assim exclusividade ao seu produto.
          </p>
          <p>
            O nosso diferencial é a sua experiência de comprar em nossa loja, pois a excelência no atendimento e
            qualidade dos produtos já é nossa obrigação e comprometimento com você.
          </p>
        </div> */}
      </Wrapper>
    </>
  )
}

export default WhoWeAre
