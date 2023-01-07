import {
  Breadcrumbs,
  ContactList,
  ContactUsForm,
  Footer,
  Header,
  TitleSectionWrapper,
  WidthBox,
} from '@components';
import { useStore } from '@hooks';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './Contacts.module.scss';

const Contacts = () => {
  const t = useTranslations('Views.Contacts');
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const crumbs = useMemo(() => [{ link: '/', text: t('Breadcrumbs.0') }, t('Breadcrumbs.1')], [t]);
  const { contactsData } = useStore();

  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <WidthBox>
        <Breadcrumbs crumbs={crumbs} centered />
      </WidthBox>

      {contactsData && (
        <WidthBox>
          <TitleSectionWrapper title={t('PageTitle')} description={t('PageDescription')}>
            <ContactList contactsData={contactsData} />
          </TitleSectionWrapper>
        </WidthBox>
      )}

      <WidthBox filled="light">
        <div className={styles['form-wrapper']}>
          <ContactUsForm
            descriptionField
            fileLabel={t('ContactUsFormFileLabel')}
            formDescription={t('ContactUsFormDescription')}
            formLabel={t('ContactUsFormLabel')}
          />
        </div>
      </WidthBox>

      <Footer />
    </div>
  );
};

export default memo(Contacts);
