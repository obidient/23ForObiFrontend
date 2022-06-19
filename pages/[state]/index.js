import { useRouter } from 'next/router';
import State from '../../components/State/Index';

const state = () => {
  const router = useRouter();
  const { state } = router.query;

  return <State id={state} />;
};

export default state;
