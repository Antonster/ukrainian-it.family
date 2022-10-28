import Breadcrumbs from '@components/breadcrumbs';
import ContactUsPartnerForm from '@components/contact-us-partner-form';
import ContactsList from '@components/contacts-list';
import Footer from '@components/footer';
import Header from '@components/header';
import Layout from '@components/layout';
import TitleSectionWrapper from '@components/title-section-wrapper';
import styles from '@styles/pages/contacts.module.scss';
import Head from 'next/head';
import { useMemo } from 'react';

const Contacts = () => {
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Contacts'], []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Contacts | Ukrainian-IT.Family</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <Layout>
        <Breadcrumbs crumbs={crumbs} centered />
      </Layout>

      <Layout>
        <TitleSectionWrapper
          title="Get in touch with UITF"
          description="Drop us a line and we’ll contact you as soon as possible"
        >
          <ContactsList />
        </TitleSectionWrapper>
      </Layout>

      <Layout filled>
        <div className={styles['form-wrapper']}>
          <ContactUsPartnerForm />
        </div>
      </Layout>

      <Footer />
    </div>
  );
};

export default Contacts;
