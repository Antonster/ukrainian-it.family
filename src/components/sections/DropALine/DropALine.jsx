import { MainButton } from '@components/elements';
import { ContactUsForm } from '@components/forms';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import styles from './DropALine.module.scss';

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    maxWidth: '656px',
    backgroundColor: '#f2f7fa',
    boxShadow: 'none',
    borderRadius: 'unset',
  },
}));

export const DropALine = ({
  formLabel,
  formDescription,
  fileLabel,
  linkField,
  descriptionField,
}) => {
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

      <StyledDialog
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        scroll="body"
        open={isOpenModal}
        onClose={onCloseModal}
      >
        <ContactUsForm
          onCloseModal={onCloseModal}
          formGap
          formLabel={formLabel}
          formDescription={formDescription}
          fileLabel={fileLabel}
          linkField={linkField}
          descriptionField={descriptionField}
        />
      </StyledDialog>
    </div>
  );
};

DropALine.propTypes = {
  formLabel: PropTypes.string.isRequired,
  formDescription: PropTypes.string,
  fileLabel: PropTypes.string,
  linkField: PropTypes.bool,
  descriptionField: PropTypes.bool,
};
