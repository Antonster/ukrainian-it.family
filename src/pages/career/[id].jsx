import { careerData } from '@constants';
import { CareerId } from '@views';

export const getStaticPaths = async ({ locales }) => {
  const paths = careerData.flatMap(({ id }) =>
    locales.map((locale) => ({
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
  const vacancy = careerData.find((item) => item.id === context.params.id);

  return {
    props: {
      vacancy,
      messages: (await import(`../../locales/${context.locale}.json`)).default,
    },
  };
}

export default CareerId;
