import NextHead from 'next/head'

const defaultDescription =
  'T-Shirts de Rock, T-Shirts de Bandas, Modelos Femininos, Infantis e muito mais. Grande variedade de estampas e material de alta qualidade'

const Head = ({ title, description = defaultDescription, children }) => {
  return (
    <>
      <NextHead>
        {/* Title */}
        <title>{title}</title>
        <meta name="og:title" content={title} />
        {/* Description */}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        {/* Keywords */}
        <meta name="keywords" content="T-shirts, merchandise, Rock, bandas, música, entretenimento" />
        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="pt" />
        {children}
      </NextHead>
    </>
  )
}

export default Head
