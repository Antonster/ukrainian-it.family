import { MainButton } from '@elements';
import { Modal } from '@mui/material';
import { useCallback, useState } from 'react';

import { ContactUsForm } from '../ContactUsForm/ContactUsForm';
import styles from './DropALine.module.scss';

export const DropALine = () => {
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
          <ContactUsForm onCloseModal={onCloseModal} formGap />
        </div>
      </Modal>
    </div>
  );
};
