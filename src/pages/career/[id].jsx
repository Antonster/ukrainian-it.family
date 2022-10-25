import Breadcrumbs from '@components/breadcrumbs';
import ContactUsForm from '@components/contact-us-form';
import Footer from '@components/footer';
import Header from '@components/header';
import Layout from '@components/layout';
import VacancyContent from '@components/vacancy-content';
import VacancyDescription from '@components/vacancy-description';
import { careerData } from '@constants/index';
import styles from '@styles/pages/career-id.module.scss';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

export const getStaticPaths = async () => {
  const paths = careerData.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const vacancy = careerData.find((item) => item.id === context.params.id);

  return {
    props: { vacancy },
  };
}

const CareerDetailed = ({ vacancy: { id, title, description, location, time, items, links } }) => {
  const crumbs = useMemo(
    () => [{ link: '/', text: 'Homepage' }, { link: '/career', text: 'Career' }, title],
    [title],
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | Ukrainian-IT.Family</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <Layout small>
        <Breadcrumbs crumbs={crumbs} />
      </Layout>

      <Layout small>
        <VacancyDescription
          title={title}
          description={description}
          location={location}
          time={time}
        />
      </Layout>

      <Layout small filled>
        <VacancyContent items={items} links={links} />
      </Layout>

      <Layout small filled>
        <div className={styles['form-wrapper']}>
          <ContactUsForm />
        </div>
      </Layout>

      <Footer />
    </div>
  );
};

CareerDetailed.propTypes = {
  vacancy: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
          .isRequired,
      }),
    ),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }).isRequired,
    ),
  }).isRequired,
};

export default CareerDetailed;
