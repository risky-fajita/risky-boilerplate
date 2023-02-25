import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  templateName: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));
