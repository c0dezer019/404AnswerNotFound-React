import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import img from '../images/logo.png';

// eslint-disable-next-line no-unused-vars
const Header = ({ user, mode }) => {
  // eslint-disable-next-line no-unused-vars
  const [logoStyle, setLogoStyle] = useState('/client/src/images/404anflogo3.png');

  useEffect(() => {
    if (mode === 'dark') setLogoStyle('../images/404anflogo3_dark.png');
  });

  useEffect(() => {
    if (mode === 'light') setLogoStyle('../images/404anflogo3.png');
    else setLogoStyle('../images/404anflogo3_dark.png');
  }, [mode]);

  return (
    <div id="header-body">
      <Image
        src={ img }
        alt="logo"
        as="a"
        href="https:/404anf.bblankenship.me"
      />
    </div>
  );
};

Header.propTypes =
  {
    user: PropTypes.shape.isRequired,
    mode: PropTypes.string,
  };

Header.defaultProps =
  {
    mode: 'light',
  };

export default Header;
