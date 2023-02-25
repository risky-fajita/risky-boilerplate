import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TemplateName } from '.';
export default {
  title: 'TemplateName',
  component: TemplateName,
} as ComponentMeta<typeof TemplateName>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TemplateName> = (args) => <TemplateName {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { text: 'text'};
