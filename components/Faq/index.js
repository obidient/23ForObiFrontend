import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Styles.module.scss';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

//images
import search from '../../assets/search.png';
import Hero from '../Hero';

const faqObject = [
  {
    ques: 'What is #23forObi about?',
    res: '#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids.',
  },
  {
    ques: 'How do I contribute?',
    res: '#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids.',
  },
  {
    ques: 'What the process of being a part of the movement',
    res: '#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids.',
  },
  {
    ques: 'What is #23forObi about?',
    res: '#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids.',
  },
  {
    ques: 'What is #23forObi about?',
    res: '#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids.',
  },
];

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchValue, setSearchValue ] = useState(faqObject)
  const [faq, setFaq] = useState(false);

  const faqShow = {
    height: '150px',
    transition: '0.5s',
  };

  const faqHide = {
    height: '50px',
    transition: '0.5s',
  };

  const toggle = (index) => {
    if (faq === index) {
      return setFaq(null);
    }
    setFaq(index);
  };



  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {

    if(searchQuery !== ''){
      let search = searchValue.filter((value) => {
          return value.ques.toLowerCase().includes(searchQuery.toString().toLowerCase())
        })
        // console.log(search)
        setSearchValue(search)
    }else {
      setSearchValue(faqObject)
    }
  }, [searchQuery])

  
  return (
    <div className='container'>
      <Hero
        subtitle="Frequently asked  questions about"
        title="#23forObi"
        description="These are the frequently asked questions about the
            #23forObi online campaign"
      />
      <div>
        <div className='flex items-center relative w-[320px] h-[44px] border-2 border-[#979797] rounded-full'>
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={handleChange}
            className='mx-5 w-1/2 outline-none'
          />
          <div className='absolute left-0 bottom-3 lg:bottom-2 px-2'>
            <Image src={search} alt="search" />
          </div>
        </div>

        <div className={styles.main__faq_main}>
          {searchValue.map((item, index) => (
            <div
              style={faq === index ? faqShow : faqHide}
              onClick={() => toggle(index)}
              key={index}
            >
              <section>
                <h3>{item.ques}</h3>
                {faq === index ? (
                  <BsChevronDown className="text-3xl" />
                ) : (
                  <BsChevronUp className="text-3xl" />
                )}
              </section>
              {/* <p style={faq === index ? faqShow : faqHide}>{item.res}</p> */}
              <p>{item.res}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
