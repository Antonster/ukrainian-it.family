import styles from '@styles/components/main-button.module.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const MainButton = ({
  type,
  href,
  buttonStyle = 'primary',
  size = 'small',
  width = 'auto',
  text,
  onClick,
}) => {
  const classes = useMemo(
    () => `${styles.button} ${styles[buttonStyle]} ${styles[size]}`,
    [buttonStyle, size],
  );
  const image = useMemo(() => {
    switch (buttonStyle) {
      case 'secondary':
        return '/static/images/arrow-blue.svg';
      case 'outlined':
        return '/static/images/arrow-blue.svg';
      default:
        return '/static/images/arrow-white.svg';
    }
  }, [buttonStyle]);

  if (type === 'link') {
    return (
      <Link href={href}>
        <a className={classes} style={{ width }}>
          <div>{text}</div>
          <img src={image} alt="arrow icon" />
        </a>
      </Link>
    );
  }

  return (
    <button
      className={classes}
      style={{ width }}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      <div>{text}</div>
      <img src={image} alt="arrow icon" />
    </button>
  );
};

MainButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'link']),
  href: PropTypes.string,
  buttonStyle: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  size: PropTypes.oneOf(['small', 'big']),
  width: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MainButton;
