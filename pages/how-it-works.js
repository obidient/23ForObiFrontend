import React from 'react';
import Image from 'next/image';
import Page from '../components/Page';

const contents = [
  {
    text1: 'Create an account',
    text2: 'by clicking on deliver votes',
    details:
      'Create an account in a few easy steps by using your favourite social media account.',
    img: '/images/how_it_works_img1.png',
    width: '463px',
    height: '473px',
  },
  {
    text1: 'Provide your',
    text2: 'details',
    details:
      'Provide your details in few simple steps, all you have to do is login with your social media account.',
    img: '/images/how_it_works_img2.png',
    width: '463px',
    height: '473px',
  },
  {
    text1: 'Answer a',
    text2: 'few questions',
    details:
      'Provide a few answers about your PVC status in order to get the neccessary information needed.',
    img: '/images/how_it_works_img3.png',
    width: '463px',
    height: '473px',
  },
  {
    text1: 'Select how you',
    text2: 'wish to contribute',
    details:
      'Let us know how you wish to contribute either by delivering votes, Sending whatsApp messages or buying billboards and poster.',
    img: '/images/how_it_works_img4.png',
    width: '463px',
    height: '473px',
  },
  {
    text1: 'Add villages',
    text2: 'you have control over',
    details:
      'Add the villages within your state you can easily find contributors.',
    img: '/images/how_it_works_img5.png',
    width: '463px',
    height: '473px',
  },
  {
    text1: 'Add Contributors',
    text2: 'from your village',
    details:
      'Add people within your state who would like to vote and they can also add other people.',
    img: '/images/how_it_works_img6.png',
    width: '463px',
    height: '473px',
  },
  {
    text1: 'Keep expanding',
    text2: 'the network',
    details:
      'Keep preaching the importance of excercising voting rights to add more contributors',
    img: '/images/how_it_works_img7.png',
    width: '463px',
    height: '473px',
  },

  {
    text1: 'Sensitize people around you',
    text2: 'to get their PVC',
    details:
      'You can always call the people close to you and sensitize them on the importance of getting their Personal Voters Card (PVC).',
    img: '/images/how_it_works_img8.png',
    width: '592.3px',
    height: '285.66px',
  },
  {
    text1: 'Come out and vote',
    text2: 'VOTE THE LABOUR PARTY',
    details:
      'Come out and vote en masse for the Labour Party presidential candidate by the name Peter Obi and let’s make Nigeria great again.',
    img: '/images/how_it_works_img9.png',
    width: '679.5px',
    height: '525px',
  },
];

const howItWorks = () => {
  return (
    <Page title="How It Works">
      <div className="container bg-[#FDFFFE]">
        <div className="grid grid-cols-1 my-24">
          <h2 className="font-light my-6">This is how #23forObi</h2>
          <h1 className="text-8xl font-black">Work</h1>
          <p className="font-extralight my-6">
            Step by step of how #23forObi works to help achieve a unified goal
          </p>
        </div>
        {contents.map((content, index) => (
          <div
            className="flex flex-col-2 justify-between p-5 my-28 ml-auto odd:flex-row-reverse"
            key={index}
          >
            <div className="content flex flex-col justify-center w-1/2">
              <h2 className="font-light my-3">{content.text1}</h2>
              <h5 className="font-bold text-4xl">{content.text2}</h5>
              <p className="text-2xl my-2 flex-wrap pr-4">{content.details}</p>
            </div>
            <div className='flex w-1/2'>
              <Image
                src={content.img}
                width={content.width}
                height={content.height}
              />
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default howItWorks;
