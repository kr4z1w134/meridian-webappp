import React from 'react';
import { MButton } from '@meridian/ui-kit';

export default {
  title: 'Button',
  component: MButton,
};

export const Primary = () => <MButton variant="primary">Primary</MButton>;
export const Secondary = () => <MButton variant="secondary">Secondary</MButton>;
export const Disabled = () => <MButton disabled>Disabled</MButton>;