import { css, Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
