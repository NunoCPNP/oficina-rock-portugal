import useTranslation from 'next-translate/useTranslation'

const Home = () => {
  const { t } = useTranslation('home')
  
  return <div>{t(`greeting`)}</div>;
};

export default Home;
