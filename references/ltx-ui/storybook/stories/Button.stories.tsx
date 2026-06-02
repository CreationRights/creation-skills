import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Extracted from a live site by `designlang`. No runtime library —
// these stories render inline to stay dependency-free.
const Button: React.FC<{ variant?: string; size?: string }> = (args) => {
    const style = {
      fontFamily: 'var(--font-sans, inherit)',
      padding: args.size === 'sm' ? '6px 12px' : args.size === 'lg' ? '14px 22px' : '10px 16px',
      borderRadius: 'var(--radius, 8px)',
      background: args.variant === 'secondary' ? 'transparent'
        : args.variant === 'outline' ? 'transparent'
        : 'var(--color-primary, #3b82f6)',
      color: args.variant === 'secondary' || args.variant === 'outline' ? 'var(--color-foreground, #111)' : '#fff',
      border: args.variant === 'outline' ? '1px solid var(--color-foreground, #111)' : 'none',
      fontWeight: 500,
      cursor: 'pointer',
    };
    return React.createElement('button', { style, 'data-variant': args.variant, 'data-size': args.size },
      'Button'
    );
  };

const meta: Meta<typeof Button> = {
  title: 'Extracted/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default'] },
    size:    { control: 'select', options: ['small'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'button — 17 instances detected across the page.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { variant: 'default', size: 'small' } };

export const Sizes: Story = {
  render: () => React.createElement('div', { style: { display: 'flex', gap: 12, alignItems: 'center' } },
    React.createElement(Button, { key: 'small', variant: 'default', size: 'small' })
  ),
};
