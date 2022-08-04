import Image from 'next/image';
import styles from './Styles.module.scss';
import avatar from '../../assets/avatar.png';
import SelectInput from './../misc/SelectInput';

//Form Imports
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
// Prevent serverside redering on the FormikControl Component
import dynamic from 'next/dynamic';
import useAuthStore from '../../store/authStore';
import useUserStore from '../../store/userStore';

const FormikControl = dynamic(() => import('../Forms/FormikControl'), {
  ssr: false,
});

const ProfileDisplay = () => {
  const { userProfile } = useAuthStore();
  const { userStates } = useUserStore();

  // console.log(userStates)

  const first_name = userProfile?.first_name;
  const last_name = userProfile?.last_name;
  const email = userProfile?.email;
  const image = userProfile?.image;
 
  //Initialize select options
  const stateOptions = [
    {
      label: 'Rivers',
      value: 'Rivers State',
    },
    {
      label: 'Lagos',
      value: 'Lagos State',
    },
    {
      label: 'Ogun',
      value: 'Ogun State',
    },
  ];
  const villageOptions = [
    {
      label: 'Ezeani Village 1',
      value: 'Ezeani Village',
    },
    {
      label: 'Osusus Village 2',
      value: 'Osusu Village',
    },
    {
      label: 'Ariara Village 3',
      value: 'Ariara Village',
    },
  ];

  // Initial form values
  const initialValues = {
    firstName: first_name,
    lastName: last_name,
    email: email,
    state: '',
    village: '',
  };

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    state: Yup.string().required('Required'),
    village: Yup.string().required('Required'),
  });

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Image src={image ? image : avatar} />
        <p className='capitalize'>edit image</p>
      </div>
      <div className={styles.form}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log('Form Data', values)}
        >
          {({ values }) => (
            <Form autoComplete="off">
              <FormikControl
                values={values}
                control="input"
                placeholder="First Name"
                name="firstName"
                type="text"
              />
              <FormikControl
                values={values}
                control="input"
                placeholder="Last Name"
                name="lastName"
                type="text"
              />
              <FormikControl
                values={values}
                control="input"
                placeholder="Enter your email"
                name="email"
                type="email"
              />
              <FormikControl
                values={values}
                control="select"
                placeholder="Select your state"
                name="state"
                options={stateOptions}
              />
              <FormikControl
                values={values}
                control="select"
                placeholder="Select your village"
                name="village"
                options={villageOptions}
              />
              <button className="btn_dark mt-8" type="submit">
                Continue
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProfileDisplay;
