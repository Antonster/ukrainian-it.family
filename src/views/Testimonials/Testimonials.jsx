import {
  Breadcrumbs,
  DropALine,
  Footer,
  Header,
  SectionWrapper,
  TestimonialList,
  TitleSectionWrapper,
  WidthBox,
} from '@components';
import { useStore } from '@hooks';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const t = useTranslations('Views.Testimonials');
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const crumbs = useMemo(() => [{ link: '/', text: t('Breadcrumbs.0') }, t('Breadcrumbs.1')], [t]);
  const { testimonialsData } = useStore();

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

      {testimonialsData && (
        <WidthBox>
          <TitleSectionWrapper title={t('PageTitle')} description={t('PageDescription')}>
            <TestimonialList testimonialsData={testimonialsData} />
          </TitleSectionWrapper>
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

export default memo(Testimonials);
