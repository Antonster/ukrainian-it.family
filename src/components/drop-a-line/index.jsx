import MainButton from '@components/main-button';
import styles from '@styles/components/drop-a-line.module.scss';

const DropALine = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      Contact us and we’ll get in touch with you as soon as possible
    </div>

    <MainButton size="big" type="button" text="contact us" width="240px" onClick={() => {}} />
  </div>
);

export default DropALine;
