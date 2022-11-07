import { Breadcrumbs } from '@elements';
import { WidthBox } from '@layouts';
import { ContactUsForm, Footer, Header, VacancyContent, VacancyDescription } from '@modules';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import styles from './CareerId.module.scss';

const CareerId = ({ vacancy: { id, title, description, location, time, items, links } }) => {
  const headTitle = useMemo(() => `${title} | Ukrainian-IT.Family`, [title]);
  const crumbs = useMemo(
    () => [{ link: '/', text: 'Homepage' }, { link: '/career', text: 'Career' }, title],
    [title],
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <WidthBox small>
        <Breadcrumbs crumbs={crumbs} />
      </WidthBox>

      <WidthBox small>
        <VacancyDescription
          title={title}
          description={description}
          location={location}
          time={time}
        />
      </WidthBox>

      <WidthBox small filled>
        <VacancyContent items={items} links={links} />
      </WidthBox>

      <WidthBox small filled>
        <div className={styles['form-wrapper']}>
          <ContactUsForm />
        </div>
      </WidthBox>

      <Footer />
    </div>
  );
};

CareerId.propTypes = {
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

export default CareerId;
