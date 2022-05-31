import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import StyleTheme from '../src/style/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <MemoryRouter>
    <StyleTheme>{story()}</StyleTheme>
  </MemoryRouter>
));