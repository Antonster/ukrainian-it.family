import {
  Breadcrumbs,
  DropALine,
  Footer,
  Header,
  SectionWrapper,
  TeamList,
  TitleSectionWrapper,
  WhyUs,
  WidthBox,
} from '@components';
import { useStore } from '@hooks';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';

import styles from './Team.module.scss';

const Team = () => {
  const t = useTranslations('Views.Team');
  const headTitle = useMemo(() => `${t('HeadTitle')} | Ukrainian-IT.Family`, [t]);
  const crumbs = useMemo(() => [{ link: '/', text: t('Breadcrumbs.0') }, t('Breadcrumbs.1')], [t]);
  const { teamData, whyUsData } = useStore();

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

      {teamData && (
        <WidthBox>
          <TitleSectionWrapper title={t('PageTitle')} description={t('PageDescription')}>
            <TeamList teamData={teamData} />
          </TitleSectionWrapper>
        </WidthBox>
      )}

      {whyUsData && (
        <WidthBox>
          <SectionWrapper name={t('WhyUsName')} titles={[t('WhyUsTitles')]}>
            <WhyUs whyUsData={whyUsData} />
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

export default memo(Team);
