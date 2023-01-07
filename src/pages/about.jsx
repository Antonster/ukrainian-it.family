import { readFile } from '@utils';
import { About } from '@views';

export async function getStaticProps({ locale }) {
  const headerData = await readFile('/db/header.data.json');
  const footerData = await readFile('/db/footer.data.json');
  const aboutUsNumbersData = await readFile('/db/about-us-numbers.data.json');
  const historyData = await readFile('/db/history.data.json');
  const ourLifeData = await readFile('/db/our-life.data.json');
  const principlesData = await readFile('/db/principles.data.json');
  const testimonialsData = await readFile('/db/testimonials.data.json');
  const ourPartnersData = await readFile('/db/our-partners.data.json');

  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
      initialZustandState: {
        headerLinks: headerData?.[locale]?.headerLinks,
        hamburgerLinks: headerData?.[locale]?.hamburgerLinks,
        footerLinks: footerData?.[locale]?.footerLinks,
        footerTerms: footerData?.[locale]?.footerTerms,
        footerSocialLogoList: footerData?.[locale]?.footerSocialLogoList,
        aboutUsNumbersData: aboutUsNumbersData?.[locale],
        historyData: historyData?.[locale],
        ourLifeData,
        principlesData: principlesData?.[locale],
        testimonialsData: testimonialsData?.[locale],
        ourPartnersData,
      },
    },
  };
}

export default About;
