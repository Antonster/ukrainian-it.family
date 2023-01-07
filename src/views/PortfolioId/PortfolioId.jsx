import {
  Breadcrumbs,
  DropALine,
  Footer,
  Header,
  ProjectDescription,
  ProjectDetails,
  ProjectPreview,
  ProjectResults,
  ProjectScreens,
  SectionWrapper,
  WidthBox,
} from '@components';
import { useMediaQuery, useStore } from '@hooks';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';

import styles from './PortfolioId.module.scss';

const PortfolioId = ({
  project: {
    name,
    tags,
    description,
    fullPreviewImage,
    screenList,
    paragraphs,
    rows,
    videoId,
    resultList,
    feedbackId,
  },
}) => {
  const t = useTranslations('Views.PortfolioId');
  const headTitle = useMemo(() => `${name} | Ukrainian-IT.Family`, [name]);
  const crumbs = useMemo(
    () => [
      { link: '/', text: t('Breadcrumbs.0') },
      { link: '/portfolio', text: t('Breadcrumbs.1') },
      name,
    ],
    [name, t],
  );
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');
  const { testimonialsData } = useStore();

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

      {!isSmallScreen && (
        <WidthBox>
          <ProjectPreview image={fullPreviewImage} />
        </WidthBox>
      )}

      <WidthBox filled="dark">
        <SectionWrapper
          name={t('ProjectScreensName')}
          titles={[t('ProjectScreensTitles')]}
          titleColor="secondary"
        >
          <ProjectScreens imageList={screenList} />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled="light">
        <SectionWrapper name={t('ProjectDetailsName')} titles={[t('ProjectDetailsTitles')]}>
          <ProjectDetails paragraphs={paragraphs} rows={rows} videoId={videoId} />
        </SectionWrapper>
      </WidthBox>

      {testimonialsData && (
        <WidthBox>
          <SectionWrapper name={t('ProjectResultsName')} titles={[t('ProjectResultsTitles')]}>
            <ProjectResults
              testimonialsData={testimonialsData}
              resultList={resultList}
              feedbackId={feedbackId}
            />
          </SectionWrapper>
        </WidthBox>
      )}

      <WidthBox filled="light">
        <SectionWrapper name={t('DropALineName')} titles={[t('DropALineTitles')]}>
          <DropALine
            descriptionField
            fileLabel={t('DropALineFileLabel')}
            formDescription={t('DropALineFormDescription')}
            formLabel={t('DropALineFormLabel')}
          />
        </SectionWrapper>
      </WidthBox>

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
    fullPreviewImage: PropTypes.string.isRequired,
    screenList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      }),
    ),
    paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    rows: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    videoId: PropTypes.string,
    resultList: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    feedbackId: PropTypes.string,
  }),
};

export default memo(PortfolioId);
