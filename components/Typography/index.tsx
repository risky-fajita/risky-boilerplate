import { Text } from '@mantine/core';

interface TitleTextProps {
  children: string;
  gradiant?: boolean;
}
export const TitleText = ({ children, gradiant }: TitleTextProps) => (
  <Text
    variant={gradiant ? 'gradient' : 'text'}
    gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
    sx={{ fontFamily: 'Fredoka One' }}
    ta="center"
    fz="xl"
    fw={700}
  >
    {children}
  </Text>
);
