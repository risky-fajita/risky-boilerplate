import { createStyles } from '@mantine/core';

export const themeColours = {
  red: '#FF6363',
  darkBlue: '#0B3954',
  lightBlue: '#BFD7EA',
  orange: '#F98824',
  lightOrange: '#FCC16D',
  white: '#FEFFFE',
};

const textStyles = createStyles((theme) => ({
  text: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export default createStyles((theme) => ({
  title: {
    fontSize: 100,
    fontWeight: 700,
    letterSpacing: -2,

    [theme.fn.largerThan('sm')]: {
      fontSize: 75,
    },
    ...textStyles,
  },
  headerText: {
    fontSize: 100,
    fontWeight: 700,
    letterSpacing: -2,
    ...textStyles,
    [theme.fn.largerThan('sm')]: {
      fontSize: 45,
    },
  },
}));
