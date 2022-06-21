import React from 'react';
import styles from './Styles.module.scss';
import { FaBeer } from 'react-icons/fa';

const ContributeMethod = () => {
  return (
    <div>
      <div className={styles.check_form}>
        <div className={styles.check_form__input}>
          <div className={styles.inputs}>
            <div className={styles.container}>
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="deliver">
                <h5>Deliver votes.</h5>
                <p>
                  Be a part of the campaign by delivering votes while also
                  contributing to the party.
                </p>
              </label>
            </div>
            <div className={styles.container}>
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="send">
                <h5>Send WhatsApp messages & distribute posters online.</h5>
                <p>
                  Be a part of the campaign by sending WhatsApp messages and
                  distributing posters
                </p>
              </label>
            </div>
            <div className={styles.container}>
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="buy">
                <h5>Buy Bill Boards & Posters.</h5>
                <p>
                  Be a part of the campaign by buying billboards and posters and
                  sharing around your vicinity, state and village.
                </p>
              </label>
            </div>
          </div>
          <div className={styles.input_btn}>
            <button>Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeMethod;
