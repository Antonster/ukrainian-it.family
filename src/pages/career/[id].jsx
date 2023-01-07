import { readFile } from '@utils';
import { CareerId } from '@views';

export const getStaticPaths = async (context) => {
  const careerData = await readFile('/db/career.data.json');

  const paths = careerData?.[context.defaultLocale].flatMap(({ id }) =>
    context.locales.map((locale) => ({
      params: { id },
      locale,
    })),
  );

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ locale, params }) {
  const headerData = await readFile('/db/header.data.json');
  const footerData = await readFile('/db/footer.data.json');
  const careerData = await readFile('/db/career.data.json');

  const vacancy = careerData[locale].find((item) => item.id === params.id);

  return {
    props: {
      vacancy,
      messages: (await import(`../../locales/${locale}.json`)).default,
      initialZustandState: {
        headerLinks: headerData?.[locale]?.headerLinks,
        hamburgerLinks: headerData?.[locale]?.hamburgerLinks,
        footerLinks: footerData?.[locale]?.footerLinks,
        footerTerms: footerData?.[locale]?.footerTerms,
        footerSocialLogoList: footerData?.[locale]?.footerSocialLogoList,
      },
    },
  };
}

export default CareerId;
