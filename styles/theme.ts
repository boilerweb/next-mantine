import type {MantineThemeOverride} from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  globalStyles: theme => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    body: {
      ...theme.fn.fontStyles(),
      minWidth: '320px',
      fontSize: '16px',
      WebkitTextSizeAdjust: '100%',
      MsTextSizeAdjust: '100%',
    },
  }),
};
