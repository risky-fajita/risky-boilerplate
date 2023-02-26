import React from 'react';
import useStyles from './TemplateName.styles';

interface TemplateNameProps {
  text: string;
}

export function TemplateName({ text }: TemplateNameProps) {
  const { classes } = useStyles();

  return <div className={classes.templateName}>{text}</div>;
}
