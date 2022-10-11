import AboutUsNumbers from '@components/about-us-numbers';
import ExpertiseList from '@components/expertise-list';
import Layout from '@components/layout';
import SectionWrapper from '@components/section-wrapper';
import ServiceList from '@components/service-list';
import styles from '@styles/pages/home.module.scss';
import Head from 'next/head';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Home | Ukrainian-IT.Family</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/static/images/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <Layout>
      <SectionWrapper big name="Services" titles={['This is what we do best']}>
        <ServiceList />
      </SectionWrapper>
    </Layout>

    <Layout filled>
      <SectionWrapper name="Expertise" titles={['You have an idea', 'We have a solution']}>
        <ExpertiseList />
      </SectionWrapper>
    </Layout>

    <Layout>
      <SectionWrapper big name="Case studies" titles={['Portfolio']}>
        {' '}
      </SectionWrapper>
    </Layout>

    <Layout filled>
      <SectionWrapper
        name="About us"
        titles={['In numbers']}
        link="/about"
        linkText="read about us"
      >
        <AboutUsNumbers />
      </SectionWrapper>
    </Layout>

    <Layout>
      <SectionWrapper big name="Testimonials" titles={['Our partners say']} link="/testimonials">
        {' '}
      </SectionWrapper>
    </Layout>
  </div>
);

export default Home;
