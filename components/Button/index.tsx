import { Button as CoreButton } from '@mantine/core';
import useStyles from './button.styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  const { classes } = useStyles();

  return (
    <CoreButton className={classes.button} onClick={onClick}>
      {text}
    </CoreButton>
  );
};
