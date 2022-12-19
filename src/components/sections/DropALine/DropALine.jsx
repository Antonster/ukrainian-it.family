import { MainButton } from '@components/elements';
import { ContactUsForm } from '@components/forms';
import { useMediaQuery } from '@hooks';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo, useCallback, useState } from 'react';

import styles from './DropALine.module.scss';

const FormDialog = styled(Dialog)(() => ({
  zIndex: '1600',
  '& .MuiDialog-paper': {
    maxWidth: '656px',
    backgroundColor: '#f2f7fa',
    boxShadow: 'none',
    borderRadius: 'unset',
  },
}));

const DropALine = ({ formLabel, formDescription, fileLabel, linkField, descriptionField }) => {
  const t = useTranslations('Sections.DropALine');
  const [isOpenModal, setOpenModal] = useState(false);
  const isTabletScreen = useMediaQuery('(max-width: 768px)');

  const onOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text}>{t('Text')}</div>

      <MainButton
        size="big"
        type="button"
        text={t('ButtonText')}
        width="240px"
        onClick={onOpenModal}
      />

      <FormDialog
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        scroll="body"
        open={isOpenModal}
        onClose={onCloseModal}
        fullScreen={isTabletScreen}
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
      </FormDialog>
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

export default memo(DropALine);
