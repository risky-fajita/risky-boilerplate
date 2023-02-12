import { Header as CoreHeader, useMantineTheme, Burger, Title } from '@mantine/core';
import { globalConfig } from '../../globalConfig';
import useStyles from '../../theme';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const Header = ({ menuOpen, setMenuOpen }: HeaderProps) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <CoreHeader height={{ base: 50, md: 70 }} p="md">
      <div data-cy="app-header" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Burger
          id="menu-button"
          opened={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
        <Title
          className={classes.headerText}
          variant="text"
          sx={{ fontFamily: 'Fredoka One' }}
          ta="center"
          fz="xl"
          fw={200}
        >
          {globalConfig.appName}
        </Title>
      </div>
    </CoreHeader>
  );
};
