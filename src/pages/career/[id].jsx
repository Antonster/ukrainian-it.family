import { careerData } from '@constants';
import { CareerId } from '@templates';
import { PropTypes } from 'prop-types';

export const getStaticPaths = async () => {
  const paths = careerData.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const vacancy = careerData.find((item) => item.id === context.params.id);

  return {
    props: { vacancy },
  };
}

const CareerIdSSG = ({ vacancy }) => <CareerId vacancy={vacancy} />;

CareerIdSSG.propTypes = {
  vacancy: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
          .isRequired,
      }),
    ),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }).isRequired,
    ),
  }).isRequired,
};

export default CareerIdSSG;
