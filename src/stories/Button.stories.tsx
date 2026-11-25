import React from 'react';
import { MButton } from '@meridian/ui-kit';

export default {
  title: 'Button',
  component: MButton,
};

export const Primary = () => <MButton variant="primary">Primary Button</MButton>;
export const Secondary = () => <MButton variant="secondary">Secondary Button</MButton>;
export const Disabled = () => <MButton disabled>Disabled Button</MButton>;