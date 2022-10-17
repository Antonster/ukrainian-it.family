import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';
import styles from '@styles/components/navigation-item.module.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';

const StyledPopover = styled(Popover)(() => ({
  '& .MuiPopover-paper': {
    display: 'flex',
    minWidth: '320px',
    flexDirection: 'column',
    padding: '8px 0',
    background: '#FFFFFF',
    boxShadow: '0px 12px 24px rgba(1, 72, 110, 0.2)',
    borderRadius: '0px',
  },
}));

const NavigationItem = ({ item }) => {
  const [anchorElement, setAnchorElement] = useState(null);

  const onClickElement = (event) => {
    setAnchorElement(event.currentTarget);
  };

  const onCloseElement = () => {
    setAnchorElement(null);
  };

  if (item.type === 'menu-list') {
    return (
      <li className={styles['navigation-item']}>
        <button
          aria-describedby={item.text}
          type="button"
          className={styles['navigation-item']}
          onClick={onClickElement}
        >
          <div className={styles['navigation-item__text']}>{item.text}</div>
          <img
            className={`${styles['navigation-item__image']} ${anchorElement ? styles.active : ''}`}
            src="/static/images/arrow-down-blue.svg"
            alt=""
          />
        </button>
        <StyledPopover
          id={item.text}
          open={!!anchorElement}
          anchorEl={anchorElement}
          onClose={onCloseElement}
          disableScrollLock
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {item.list.map(({ text, link }) => (
            <Link key={text} href={link}>
              <a className={styles['navigation-item__popover-link']}>{text}</a>
            </Link>
          ))}
        </StyledPopover>
      </li>
    );
  }

  return (
    <li className={styles['navigation-item']}>
      <Link href={item.link}>
        <a className={styles['navigation-item__text']}>{item.text}</a>
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default NavigationItem;
