import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import { NavigationSideBar } from './NavigationSideBar';
import { Header } from './Header';
import { Footer } from './Footer';

interface ApplicationShellProps {
  children: React.ReactNode;
}
export const ApplicationShell = ({ children }: ApplicationShellProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavigationSideBar visible={opened} />}
      footer={<Footer />}
      header={<Header menuOpen={opened} setMenuOpen={setOpened} />}
    >
      {children}
    </AppShell>
  );
};
