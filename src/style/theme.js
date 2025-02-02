import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const deviceSize = {
  mobile: '600px',
  tablet: '992px',
  laptop: '1200px',
};

const theme = {
  COLOR: {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    PRIMARY_RED: '#FD334B',
    PRIMARY_GREEN: '#83BD75',
    CYAN_300: '#2AC1BC',
    PINK_200: '#F977B3',
    PINK_300: '#F73D93',

    GREY_100: '#BBBBBB',
    GREY_200: '#E4E4E7',
    GREY_300: '#949494',

    GREY_500: '#78716C',
    CYAN_TRANSPARENT: '#34B3F160',
  },
  DEVICE: {
    EXTRA_SMALL: `screen and (max-width:${deviceSize.mobile})`,
    MOBILE: `screen and (min-width:${deviceSize.mobile})`,
    TABLET: `screen and (min-width:${deviceSize.tablet})`,
    LAPTOP: `screen and (min-width:${deviceSize.laptop})`,
  },
  FONT: {
    PRIMARY: 'Do Hyeon',
    SECONDARY: 'Yeon Sung',
  },
};

const StyleTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

StyleTheme.propTypes = {
  children: PropTypes.node,
};

export default StyleTheme;
