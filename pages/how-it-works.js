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
    text3: 'Other things you can do',
    details2:
      'You can do this other things in order to help yourself and the people around you get ready for 2023',
    details:
      'You can always call the people close to you and sensitize them on the importance of getting their Personal Voters Card',
    pvc: '(PVC).',
    img: '/images/how_it_works_img8.png',
    width: '592.3px',
    height: '285.66px',
  },
  {
    text1: 'Come out and',
    text2: 'VOTE THE',
    text4: 'LABOUR PARTY',
    text5: 'Peter Obi',
    details1:
      'Come out and vote en masse for the Labour Party presidential candidate by the name  ',
    details3: 'and let’s make Nigeria great again.',
    img: '/images/how_it_works_img9.png',
    width: '679.5px',
    height: '525px',
  },
];

const howItWorks = () => {
  return (
    <Page title="How It Works">
      <div className="container bg-[#FDFFFE]">
        <div className="flex flex-col justify-center my-24">
          <h2 className="font-light my-6 text-7xl">This is how #23forObi</h2>
          <h1 className="font-black text-9xl">Work</h1>
          <p className="font-light my-6 lg:text-3xl text-[#5F6160] text-4xl">
            Step by step of how #23forObi works to help achieve a unified goal
          </p>
        </div>
        {contents.map((content, index) => (
          <div
            className="flex flex-col-2 justify-between p-5 sm:my-1 lg:my-28  ml-auto odd:flex-row-reverse"
            key={index}
          >
            <div className="content flex flex-col justify-center w-1/2 p-5">
              <h2 className=" lg:my-3" style={{color: "#7a7b7b"}}>
                {content.text1 ? content.text1 : ''}
              </h2>
              <h5 className="font-black text-4xl">
                {content.text2 ? content.text2 : ''}{' '}
                <span className="text-[#D60602]">
                  {content.text4 ? content.text4 : ''}
                </span>
              </h5>
              <p className="text-2xl lg:my-2 flex-wrap pr-4">
                {content.details1 ? content.details1 : content.details}{' '}
                <span className="text-[#018226] font-bold">
                  {content.text5}
                </span>{' '}
                {content.details3}{' '}
                <span className="font-bold">{content.pvc}</span>
              </p>
            </div>
            <div className="flex flex-col w-1/2">
              <h2 className="lg:my-3 font-bold">
                {content.text3 ? content.text3 : ''}
              </h2>
              <p className="text-2xl lg:my-4 lg:pb-20">
                {content.details2 ? content.details2 : ''}
              </p>
              <div className="flex">
                <Image
                  src={content.img ? content.img : ''}
                  width={content.width}
                  height={content.height}
                  className="lg:my-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default howItWorks;
