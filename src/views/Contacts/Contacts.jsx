import { Breadcrumbs } from '@components/elements';
import { ContactUsPartnerForm } from '@components/forms';
import { TitleSectionWrapper, WidthBox } from '@components/layouts';
import { ContactsList, Footer, Header } from '@components/sections';
import Head from 'next/head';
import { useMemo } from 'react';

import styles from './Contacts.module.scss';

export const Contacts = () => {
  const headTitle = useMemo(() => `Contacts | Ukrainian-IT.Family`, []);
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Contacts'], []);

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

      <WidthBox>
        <TitleSectionWrapper
          title="Get in touch with UITF"
          description="Drop us a line and we’ll contact you as soon as possible"
        >
          <ContactsList />
        </TitleSectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <div className={styles['form-wrapper']}>
          <ContactUsPartnerForm />
        </div>
      </WidthBox>

      <Footer />
    </div>
  );
};
