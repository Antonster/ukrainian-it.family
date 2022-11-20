import { Breadcrumbs, Footer, Header } from '@components/elements';
import { ContactUsForm } from '@components/forms';
import { TitleSectionWrapper, WidthBox } from '@components/layouts';
import { ContactsList } from '@components/sections';
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
          <ContactUsForm
            descriptionField
            fileLabel="Brief"
            formDescription="Drop us a line and we’ll contact you as soon as possible"
            formLabel="Or Fill the form"
          />
        </div>
      </WidthBox>

      <Footer />
    </div>
  );
};
