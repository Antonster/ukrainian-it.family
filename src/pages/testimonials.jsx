import { readFile } from '@utils';
import { Testimonials } from '@views';

export async function getStaticProps({ locale }) {
  const headerData = await readFile('/db/header.data.json');
  const footerData = await readFile('/db/footer.data.json');
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
        testimonialsData: testimonialsData?.[locale],
      },
    },
  };
}

export default Testimonials;
