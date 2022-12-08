import { careerData } from '@data';
import { CareerId } from '@views';

export const getStaticPaths = async (context) => {
  const paths = careerData[context.defaultLocale].flatMap(({ id }) =>
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

export async function getStaticProps(context) {
  const vacancy = careerData[context.locale].find((item) => item.id === context.params.id);

  return {
    props: {
      vacancy,
      messages: (await import(`../../locales/${context.locale}.json`)).default,
    },
  };
}

export default CareerId;
