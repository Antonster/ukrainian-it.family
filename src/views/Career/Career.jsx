import { Breadcrumbs } from '@components/elements';
import { SectionWrapper, TitleSectionWrapper, WidthBox } from '@components/layouts';
import { DropALine, Footer, Header, VacancyList } from '@sections';
import Head from 'next/head';
import { useMemo } from 'react';

import styles from './Career.module.scss';

export const Career = () => {
  const headTitle = useMemo(() => `Career | Ukrainian-IT.Family`, []);
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Career'], []);

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

      <WidthBox small>
        <TitleSectionWrapper
          title="Join ukrainian IT Family"
          description="We celebrate Ukrainian IT talent and want to make it famous around the world. Join us!"
        >
          <VacancyList />
        </TitleSectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper question name="Drop a line" titles={['No suitable vacancy']}>
          <DropALine fileLabel="CV" formLabel="Contact Us" linkField />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
