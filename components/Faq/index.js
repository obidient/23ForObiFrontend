import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./Styles.module.scss"
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

//images
import search from '../../assets/search.png'

const Faq = () => {
    const [ searchQuery, setSearchQuery ]  = useState('')

    const [faq, setFaq ] = useState(false)

    const faqShow = {
        height: "150px",
        transition: "0.5s"
    }

    const faqHide = {
        height: "50px",
        transition: "0.5s"
    }

    const toggle = index => {
        if(faq === index) {
            return setFaq(null)
        }
        setFaq(index)
    }

   

    const faqObject = [
        {
            ques: "What is #23forObi about?",
            res: "#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids."
        },
        {
            ques: "What is #23forObi about?",
            res: "#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids."
        },
        {
            ques: "What is #23forObi about?",
            res: "#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids."
        },
        {
            ques: "What is #23forObi about?",
            res: "#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids."
        },
        {
            ques: "What is #23forObi about?",
            res: "#23forObi is a movement that connects people in the grass root, we aim to educate people about PVC, good governance and how we can use this power to change our nation for the better.With your help and the help of everyone around you, we can better make this country a reliable, sustainable and relevant institution for ourselves and our kids."
        }
    ]
        
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    return (
        <div className={styles.faq}>
            <div className={styles.hero}>
                <div className={styles.hero__title}>
                    <h2>Frequently asked  questions about</h2>
                    <h3>#23forobi</h3>
                    <p>These are the frequently asked questions about the <br/>#23forObi online campaign</p>
                    
                </div>
               
            </div>
            <div className={styles.main}>
                <div className={styles.main__input}>
                    <input
                        type="text"
                        placeholder="Search here"
                        value={searchQuery}
                        onChange={handleChange}
                    />
                    <div >
                        <Image src={search} alt="search" />
                </div>
                </div>
                
                <div className={styles.main__faq_main}>
                    {faqObject.map((item, index) => (
                         <div style={faq === index ? faqShow : faqHide} onClick={() => toggle(index)} key={index}>
                         <section>
                             <h3>{item.ques}</h3>
                             {faq === index ? <BsChevronDown className="text-3xl" /> : <BsChevronUp className="text-3xl" />}
                             
                         </section>
                         {/* <p style={faq === index ? faqShow : faqHide}>{item.res}</p> */}
                         <p >{item.res}</p>
                     </div>
                    ))}
                   
                </div>
            </div>
        </div>
    )
}

export default Faq
