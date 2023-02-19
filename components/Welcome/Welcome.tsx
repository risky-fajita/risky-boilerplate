import { Text, Anchor } from '@mantine/core';
import { globalConfig } from '../globalConfig';
import { TitleText } from '../Typography';

export function Welcome() {
  return (
    <>
      <TitleText>Welcome to the</TitleText>
      <TitleText gradiant>{globalConfig.appName}</TitleText>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
    </>
  );
}
