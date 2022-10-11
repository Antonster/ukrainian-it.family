import styles from '@styles/components/testimonial-list.module.scss';
import PropTypes from 'prop-types';

const TestimonialList = ({ data }) => (
  <div className={styles.container}>
    {data.map(({ image, name, company, description }) => (
      <div key={name + company} className={styles.item}>
        <img className={styles.item__image} src={image} alt="figure" />
        <div className={styles['item__content-wrapper']}>
          <div className={styles.item__name}>{name}</div>
          <div className={styles.item__company}>{company}</div>
          <div className={styles.item__description}>{description}</div>
        </div>
      </div>
    ))}
  </div>
);

TestimonialList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TestimonialList;
