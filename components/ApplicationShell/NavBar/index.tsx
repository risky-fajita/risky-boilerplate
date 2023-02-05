import {
  Navbar,
  ScrollArea,
} from '@mantine/core';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
import { MainLinks } from './NavigationLinks';

interface NavigationSideBarProps {
    visible: boolean;
}

export const NavigationSideBar = ({ visible } : NavigationSideBarProps) => (visible ? (
    <Navbar
      p="md"
      hiddenBreakpoint="lg"
      hidden={!visible}
      width={{ sm: 200, lg: 300 }}
    >
        <Navbar.Section>{/* Header with logo */}</Navbar.Section>
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs"><MainLinks /></Navbar.Section>
        <Navbar.Section><ColorSchemeToggle /></Navbar.Section>
    </Navbar>
    ) : <></>);
