import { Title } from '@mantine/core';
import useStyles, { themeColours } from '../theme';

interface TitleTextProps {
  children: string;
  gradiant?: boolean;
}
export const TitleText = ({ children, gradiant }: TitleTextProps) => {
  const { darkBlue, lightBlue } = themeColours;
  const { classes } = useStyles();

  return (
    <Title
      className={classes.title}
      variant={gradiant ? 'gradient' : 'text'}
      gradient={{ from: darkBlue, to: lightBlue, deg: 90 }}
      sx={{ fontFamily: 'Fredoka One' }}
      ta="center"
      fz="xl"
      fw={700}
    >
      {children}
    </Title>
  );
};
