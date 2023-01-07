import {
  ContactUsForm,
  LanguageSelection,
  MainButton,
  NavigationItem,
  WidthBox,
} from '@components';
import { useStore } from '@hooks';
import { Dialog, styled, useMediaQuery } from '@mui/material';
import { Squash as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo, useCallback, useState } from 'react';

import styles from './Header.module.scss';

const FormDialog = styled(Dialog)(() => ({
  zIndex: '1600',
  '& .MuiDialog-paper': {
    maxWidth: '656px',
    backgroundColor: '#f2f7fa',
    boxShadow: 'none',
    borderRadius: 'unset',
  },
}));

const MenuDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    borderRadius: 'unset',
  },
}));

const Header = ({ fixed }) => {
  const t = useTranslations('Components.Header');
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');
  const isTabletScreen = useMediaQuery('(max-width: 768px)');
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const { headerLinks, hamburgerLinks } = useStore();

  const onOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <div className={`${styles.container} ${fixed ? styles.fixed : ''}`}>
      <WidthBox>
        <header className={styles.header}>
          <div className={styles['header__logo-wrapper']}>
            <Link href="/">
              <a className={styles.header__logo}>
                <Image
                  src="/static/images/logo-full.svg"
                  alt="logo"
                  width={isSmallScreen ? 96 : 120}
                  height={isSmallScreen ? 56 : 70}
                />
              </a>
            </Link>

            {!isSmallScreen && <LanguageSelection />}
          </div>

          {!isSmallScreen && (
            <nav>
              <ul className={styles.header__navigation}>
                {headerLinks?.map((item) => (
                  <NavigationItem key={item.text} item={item} />
                ))}

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
          )}

          {isSmallScreen && (
            <Hamburger
              toggled={isOpenMenu}
              toggle={setOpenMenu}
              size={24}
              duration={0.5}
              color="#01669c"
            />
          )}
        </header>
      </WidthBox>

      <MenuDialog open={isOpenMenu} fullScreen>
        <div className={styles['header__hamburger-content']}>
          <nav className={styles['header__hamburger-navigation']}>
            <LanguageSelection />

            <ul className={styles['header__hamburger-navigation-links']}>
              {hamburgerLinks?.map((item) => (
                <NavigationItem key={item.text} item={item} />
              ))}

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

          <div className={styles['header__hamburger-button']}>
            <MainButton
              size="big"
              type="button"
              text={t('ButtonText')}
              onClick={onOpenModal}
              width="100%"
            />
          </div>
        </div>
      </MenuDialog>

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
          descriptionField
          fileLabel={t('ContactUsFormFileLabel')}
          formDescription={t('ContactUsFormDescription')}
          formLabel={t('ContactUsFormLabel')}
        />
      </FormDialog>
    </div>
  );
};

Header.propTypes = {
  fixed: PropTypes.bool,
};

export default memo(Header);
