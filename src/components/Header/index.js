import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const Header = ({ title }) => {
  return (
          <AppBar
            title={title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false} />
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header