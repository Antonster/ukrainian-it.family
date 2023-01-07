import { readFile } from '@utils';
import { Home } from '@views';

export async function getStaticProps({ locale }) {
  const headerData = await readFile('/db/header.data.json');
  const footerData = await readFile('/db/footer.data.json');
  const servicesData = await readFile('/db/services.data.json');
  const expertiseData = await readFile('/db/expertise.data.json');
  const portfolioData = await readFile('/db/portfolio.data.json');
  const aboutUsNumbersData = await readFile('/db/about-us-numbers.data.json');
  const testimonialsData = await readFile('/db/testimonials.data.json');

  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
      initialZustandState: {
        headerLinks: headerData?.[locale]?.headerLinks,
        hamburgerLinks: headerData?.[locale]?.hamburgerLinks,
        footerLinks: footerData?.[locale]?.footerLinks,
        footerTerms: footerData?.[locale]?.footerTerms,
        footerSocialLogoList: footerData?.[locale]?.footerSocialLogoList,
        servicesData: servicesData?.[locale],
        expertiseData: expertiseData?.[locale],
        portfolioData: portfolioData?.[locale],
        aboutUsNumbersData: aboutUsNumbersData?.[locale],
        testimonialsData: testimonialsData?.[locale],
      },
    },
  };
}

export default Home;
