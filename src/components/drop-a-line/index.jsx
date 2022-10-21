import ContactUsForm from '@components/contact-us-form';
import MainButton from '@components/main-button';
import { Modal } from '@mui/material';
import styles from '@styles/components/drop-a-line.module.scss';
import { useCallback, useState } from 'react';

const DropALine = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Contact us and we’ll get in touch with you as soon as possible
      </div>

      <MainButton size="big" type="button" text="contact us" width="240px" onClick={onOpenModal} />

      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        className={styles.modal}
        open={isOpenModal}
        onClose={onCloseModal}
      >
        <div>
          <ContactUsForm />
        </div>
      </Modal>
    </div>
  );
};

export default DropALine;
