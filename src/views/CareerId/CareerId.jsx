import { Breadcrumbs, Footer, Header } from '@components/elements';
import { ContactUsForm } from '@components/forms';
import { WidthBox } from '@components/layouts';
import { VacancyContent, VacancyDescription } from '@components/sections';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';

import styles from './CareerId.module.scss';

const CareerId = ({ vacancy: { title, description, location, time, items, links } }) => {
  const t = useTranslations('Views.CareerId');
  const headTitle = useMemo(() => `${title} | Ukrainian-IT.Family`, [title]);
  const crumbs = useMemo(
    () => [
      { link: '/', text: t('Breadcrumbs.0') },
      { link: '/career', text: t('Breadcrumbs.1') },
      title,
    ],
    [t, title],
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

      <WidthBox small filled="light">
        <VacancyContent items={items} links={links} />
      </WidthBox>

      <WidthBox small filled="light">
        <div id="career-form" className={styles['form-wrapper']}>
          <ContactUsForm
            fileLabel={t('ContactUsFormFileLabel')}
            formLabel={t('ContactUsFormLabel')}
            linkField
          />
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

export default memo(CareerId);
