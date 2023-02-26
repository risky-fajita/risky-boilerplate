/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import { TemplateName } from '.';
import '@testing-library/jest-dom';
import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('<TemplateName />', () => {
  const props = {
    text: 'text',
  };

  beforeEach(() => {
    render(<TemplateName {...props} />);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<TemplateName {...props} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('renders correctly', async () => {
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
