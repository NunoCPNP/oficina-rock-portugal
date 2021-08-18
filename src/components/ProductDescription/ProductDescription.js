import useTranslation from "next-translate/useTranslation";

const ProductDescription = ({ description }) => {
  const { t } = useTranslation();

  return (
    <div>
      {description.map((line, index) => (
        <div key={index}>{t(`${line}`)}</div>
      ))}
    </div>
  );
};

export default ProductDescription;
