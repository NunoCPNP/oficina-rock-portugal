import useTranslation from 'next-translate/useTranslation'

type Props = {};

const Home: React.FC<Props> = ({}) => {
  const { t } = useTranslation()

  return <div>{t(`home:greeting`)}</div>;
};

export default Home;
