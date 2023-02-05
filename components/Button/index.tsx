import { Button as CoreButton } from '@mantine/core';
import useStyles from './button.styles';

interface ButtonProps
  extends React.HTMLProps<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  const { classes } = useStyles();

  return (
    <CoreButton className={classes.button}>{text}</CoreButton>
  );
};
