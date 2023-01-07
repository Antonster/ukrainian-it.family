import { StoreContext } from '@context';
import { PropTypes } from 'prop-types';

const StoreProvider = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  store: PropTypes.func.isRequired,
};

export default StoreProvider;
