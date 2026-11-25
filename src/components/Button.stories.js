import React from 'react';
import { MButton } from '@meridian/ui-kit';

export default {
  title: 'Components/Button',
  component: MButton,
};

export const Primary = () => <MButton primary>Primary Button</MButton>;
export const Secondary = () => <MButton>Secondary Button</MButton>;