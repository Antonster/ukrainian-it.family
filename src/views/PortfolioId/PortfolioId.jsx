import { Breadcrumbs, Footer, Header } from '@components/elements';
import { WidthBox } from '@components/layouts';
import { ProjectDescription, ProjectPreview } from '@components/sections';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';

import styles from './PortfolioId.module.scss';

const PortfolioId = ({ project: { id, name, tags, description, image } }) => {
  const t = useTranslations('Views.PortfolioId');
  const router = useRouter();
  const headTitle = useMemo(() => `${name} | Ukrainian-IT.Family`, [name]);
  const crumbs = useMemo(
    () => [
      { link: '/', text: t('Breadcrumbs.0') },
      { link: '/portfolio', text: t('Breadcrumbs.1') },
      name,
    ],
    [name, t],
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <WidthBox>
        <Breadcrumbs crumbs={crumbs} />
      </WidthBox>

      <WidthBox>
        <ProjectDescription name={name} tags={tags} description={description} />
      </WidthBox>

      <WidthBox>
        <ProjectPreview image={image} />
      </WidthBox>

      {/* <WidthBox filled="light">
        <SectionWrapper name={t('DropALineName')} titles={[t('DropALineTitles')]}>
          <DropALine
            descriptionField
            fileLabel={t('DropALineFileLabel')}
            formDescription={t('DropALineFormDescription')}
            formLabel={t('DropALineFormLabel')}
          />
        </SectionWrapper>
      </WidthBox> */}

      <Footer />
    </div>
  );
};

PortfolioId.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default memo(PortfolioId);
