import { useRouter } from 'next/router';
import Village from '../../../components/Village/Index';

const village = () => {
  const router = useRouter();
  const { state } = router.query;
  console.log(router);
  return <Village id={state} />;
};

export default village;
