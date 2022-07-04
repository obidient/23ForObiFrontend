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
  },
  {
    text1: 'Provide your',
    text2: 'details',
    details:
      'Provide your details in few simple steps, all you have to do is login with your social media account.',
    img: '/images/how_it_works_img2.png',
  },
  {
    text1: 'Answer a',
    text2: 'few questions',
    details:
      'Provide a few answers about your PVC status in order to get the neccessary information needed.',
    img: '/images/how_it_works_img3.png',
  },
  {
    text1: 'Select how you',
    text2: 'wish to contribute',
    details:
      'Let us know how you wish to contribute either by delivering votes, Sending whatsApp messages or buying billboards and poster.',
    img: '/images/how_it_works_img4.png',
  },
  {
    text1: 'Add villages',
    text2: 'you have control over',
    details:
      'Add the villages within your state you can easily find contributors.',
    img: '/images/how_it_works_img5.png',
  },
  {
    text1: 'Add Contributors',
    text2: 'from your village',
    details:
      'Add people within your state who would like to vote and they can also add other people.',
    img: '/images/how_it_works_img6.png',
  },
  {
    text1: 'Keep expanding',
    text2: 'the network',
    details:
      'Keep preaching the importance of excercising voting rights to add more contributors',
    img: '/images/how_it_works_img7.png',
  },

  {
    text1: 'Sensitize people around you',
    text2: 'to get their PVC',
    details:
      'You can always call the people close to you and sensitize them on the importance of getting their Personal Voters Card (PVC).',
    img: '/images/how_it_works_img8.png',
  },
  {
    text1: 'Come out and vote',
    text2: 'VOTE THE LABOUR PARTY',
    details:
      'Come out and vote en masse for the Labour Party presidential candidate by the name Peter Obi and let’s make Nigeria great again.',
    img: '/images/how_it_works_img9.png',
  },
];

const howItWorks = () => {
  return (
    <Page title="How It Works">
      <div className="container">
        <div className="flex"></div>
        {contents.map((content, index) => (
          <div className="grid grid-cols-2 gap-4" key={index}>
            <div className="content">
              <h2>{content.text1}</h2>
              <h5>{content.text2}</h5>
              <p>{content.details}</p>
            </div>
            <div>
              <Image src={content.img} width="463px" height="473px" />
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default howItWorks;
