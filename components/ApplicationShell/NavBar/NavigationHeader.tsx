import { Container, Image, useMantineTheme } from '@mantine/core';

export const NavigationHeader = () => {
  const theme = useMantineTheme();

  return (
    <Container>
      <Image radius="md" src={`/logo_${theme.colorScheme}.svg`} alt="RiskyFajita Logo" />
    </Container>
  );
};
