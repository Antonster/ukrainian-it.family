import { Breadcrumbs } from '@components/elements';
import { SectionWrapper, TitleSectionWrapper, WidthBox } from '@components/layouts';
import { DropALine, Footer, Header, TeamList, WhyUs } from '@components/sections';
import Head from 'next/head';
import { useMemo } from 'react';

import styles from './Team.module.scss';

export const Team = () => {
  const headTitle = useMemo(() => `Our Team | Ukrainian-IT.Family`, []);
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Our Team'], []);

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
          title="Ukrainian talent in one place"
          description="Ukrainian IT talent appreciation team"
        >
          <TeamList />
        </TitleSectionWrapper>
      </WidthBox>

      <WidthBox>
        <SectionWrapper name="Why us" titles={['Why us']}>
          <WhyUs />
        </SectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name="Drop a line" titles={['Credit us your project']}>
          <DropALine />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
