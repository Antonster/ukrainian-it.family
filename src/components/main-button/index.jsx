import styles from '@styles/components/main-button.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const MainButton = ({
  type,
  href,
  blank,
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
      <>
        {blank ? (
          <a
            className={classes}
            style={{ width }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{text}</div>
            <Image src={image} alt="arrow icon" width={24} height={24} />
          </a>
        ) : (
          <Link href={href}>
            <a className={classes} style={{ width }}>
              <div>{text}</div>
              <Image src={image} alt="arrow icon" width={24} height={24} />
            </a>
          </Link>
        )}
      </>
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
      <Image src={image} alt="arrow icon" width={24} height={24} />
    </button>
  );
};

MainButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'link']),
  href: PropTypes.string,
  blank: PropTypes.bool,
  buttonStyle: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  size: PropTypes.oneOf(['small', 'big']),
  width: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MainButton;
