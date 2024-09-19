import React from 'react';
import styles from './Contact.module.css';
import contactImage from './img/c3.jpg'

function Contact () {
  const phoneNumber="08087400168";
  const phoneNumber2="08155512886";
    return(
        <section className={styles.Container}>
        <h2 className={styles.Title}>Contact Our Team</h2>
    <img src={contactImage} alt="Contact us " className={styles.ContactImage} />
    <div className={styles.contactDetails}>
            <p><span className={styles.highlight}>Email:</span> contact@homeStylers.com</p>
            <p><span className={styles.highlight}>Address:</span>Location: Tsakalof 14, Kolonaki, Athens, Greece</p>
            <p><span className={styles.highlight}>Phone:</span> <a href={`tel:${phoneNumber}`}>+2348 0874 00168</a> | <a href={`tel:${phoneNumber2}`}>+2348 1555 12886</a></p>
          </div>   
        </section>
);
};

export default Contact;