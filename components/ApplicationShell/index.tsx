import { useState } from 'react';
import {
  AppShell,
  Header,
  Footer,
  Text,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { globalConfig } from '../globalConfig';
import { NavigationSideBar } from './NavBar';

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
      navbar={
        <NavigationSideBar visible={opened} />
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            <Text>{globalConfig.appName}</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
