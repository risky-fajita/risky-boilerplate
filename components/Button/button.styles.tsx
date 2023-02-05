import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  button: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));
