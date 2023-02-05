/* eslint-disable jest/expect-expect */
import { measurePerformance } from 'reassure';
import { ColorSchemeProvider } from '@mantine/core';
import { ColorSchemeToggle } from '.';

test('Performance test', async () => {
  await measurePerformance(
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <ColorSchemeToggle />
    </ColorSchemeProvider>
  );
});
