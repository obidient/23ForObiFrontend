import styles from './Styles.module.scss';

const DeliverVotes = () => {
  return (
    <div className={styles.delivervotes}>
      <h2>How to deliver Votes</h2>
      <hr />
      <p>These are instructions on how to deliver votes</p>
      <div className={styles.instruction_cards}>
        <div className={styles.card}>
          <h3>Get your PVC</h3>
          <p>
            Get your PVC if you haven’t, this is the first step to start the
            change we need, you can get your PVC here{' '}
            <span>
              <a href="https://cvr.inecnigeria.org/">
                https://cvr.inecnigeria.org/
              </a>
            </span>
          </p>
        </div>
        <div className={styles.card}>
          <h3>Organise meetings in your community</h3>
          <p>
            Organise a meet-up within your community and encourage the people in
            your community to vote for the right reasons.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Get people to vote</h3>
          <p>
            Educate people on the reason why their vote counts and how they can
            go about mobilising others to join in to vote for Peter Obi.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Mobilise others to join in</h3>
          <p>
            Get people around you to join in the campaign, share fliers and
            information on WhatsApp and other groups they are involved in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliverVotes;
