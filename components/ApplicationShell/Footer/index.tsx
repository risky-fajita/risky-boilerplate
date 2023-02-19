import { Footer as CoreFooter } from '@mantine/core';
import { globalConfig } from '../../globalConfig';

export const Footer = () => (
  <CoreFooter height={60} p="md">
    © {globalConfig.company} {new Date().getFullYear()}
  </CoreFooter>
);
