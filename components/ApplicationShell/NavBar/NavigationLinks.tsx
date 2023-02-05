import React from 'react';
import { IconGitPullRequest, IconAlertCircle } from '@tabler/icons';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import Link from 'next/link';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
}

function MainLink({ icon, color, label, path }: MainLinkProps) {
  return (
    <Link href={path} passHref>
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
    </Link>
  );
}

const data = [
  { icon: <IconGitPullRequest size={16} />, color: 'blue', label: 'Home', path: '/' },
  { icon: <IconAlertCircle size={16} />, color: 'teal', label: 'About', path: '/about' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
