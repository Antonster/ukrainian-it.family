import { LanguageSelection, MainButton, NavigationItem } from '@components/elements';
import { ContactUsForm } from '@components/forms';
import { headerData } from '@constants';
import { Dialog, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo, useCallback, useState } from 'react';

import styles from './MainSection.module.scss';

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    maxWidth: '656px',
    backgroundColor: '#f2f7fa',
    boxShadow: 'none',
    borderRadius: 'unset',
  },
}));

const MainSection = ({ sectionHeaderRef }) => {
  const t = useTranslations('Sections.MainSection');
  const router = useRouter();
  const [isOpenModal, setOpenModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <header className={styles.header} ref={sectionHeaderRef}>
          <div className={styles['header__logo-wrapper']}>
            <Link href="/">
              <a className={styles.header__logo}>
                <Image src="/static/images/logo-full.svg" alt="logo" width={120} height={70} />
              </a>
            </Link>
          </div>

          <nav className={styles['header__navigation-container']}>
            <ul className={styles.header__navigation}>
              {headerData[router.locale].map((item) => (
                <NavigationItem key={item.text} item={item} />
              ))}

              <li>
                <LanguageSelection />
              </li>

              <li>
                <Link href="/contacts">
                  <a className={styles['header__navigation-get-item']}>
                    <div className={styles['header__navigation-get-item-text']}>
                      {t('GetInTouch')}
                    </div>
                    <Image
                      src="/static/images/arrow-yellow.svg"
                      alt="arrow icon"
                      width={16}
                      height={16}
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <h1 className={styles.main__title}>
          <div className={styles['main__flag-emblem']}>
            <Image src="/static/images/flag-emblem.svg" alt="flag emblem" width={8} height={45} />
          </div>
          <div>{t('Title')}</div>
          <div className={styles.main__emblem}>
            <Image src="/static/images/emblem.svg" alt="emblem" width={20} height={29} />
          </div>
        </h1>
        <h2 className={styles.main__subtitle}>{t('Subtitle')}</h2>
        <div className={styles['main__description-container']}>
          <div className={styles.main__description}>
            {t('Description.0')}{' '}
            <span className={styles['main__description-decorator']}>{t('Description.1')}</span>{' '}
            {t('Description.2')}
          </div>

          <MainButton size="big" type="button" text={t('ButtonText')} onClick={onOpenModal} />
        </div>
      </div>

      <div className={styles['main-background']}>
        <Image
          src="/static/images/main-background.svg"
          alt="background decorator"
          layout="fixed"
          width={500}
          height={878}
        />
      </div>

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
          descriptionField
          fileLabel={t('ContactUsFormFileLabel')}
          formDescription={t('ContactUsFormDescription')}
          formLabel={t('ContactUsFormLabel')}
        />
      </StyledDialog>
    </div>
  );
};

MainSection.propTypes = {
  sectionHeaderRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
};

export default memo(MainSection);
