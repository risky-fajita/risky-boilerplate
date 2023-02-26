/* eslint-disable jest/expect-expect */
import React from 'react';
import { measurePerformance } from 'reassure';
import { TemplateName } from '.';

test('TemplateName performance', async () => {
  await measurePerformance(<TemplateName text="text" />);
});
