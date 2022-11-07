import { Breadcrumbs } from '@elements';
import { SectionWrapper, TitleSectionWrapper, WidthBox } from '@layouts';
import { ExpertiseList, Footer, Header, ServiceList } from '@modules';
import Head from 'next/head';
import { useMemo } from 'react';

import styles from './Services.module.scss';

export const Services = () => {
  const headTitle = useMemo(() => `Services | Ukrainian-IT.Family`, []);
  const crumbs = useMemo(() => [{ link: '/', text: 'Homepage' }, 'Services'], []);

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
          title="This is what we do best"
          description="See how we can become partners"
        >
          <ServiceList />
        </TitleSectionWrapper>
      </WidthBox>

      <WidthBox filled>
        <SectionWrapper name="Expertise" titles={['You have an idea', 'We have a solution']}>
          <ExpertiseList />
        </SectionWrapper>
      </WidthBox>

      <Footer />
    </div>
  );
};
