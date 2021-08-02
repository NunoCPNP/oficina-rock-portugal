import useTranslation from 'next-translate/useTranslation'

type Props = {};

const Home: React.FC<Props> = ({}) => {
  const { t } = useTranslation('home')
  
  return <div>{t(`greeting`)}</div>;
};

export default Home;
