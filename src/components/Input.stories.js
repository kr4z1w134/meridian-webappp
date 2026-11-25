import React from 'react';
import { MInput } from '@meridian/ui-kit';

export default {
  title: 'Components/Input',
  component: MInput,
};

export const Default = () => <MInput placeholder="Enter text" />;
export const WithValue = () => <MInput defaultValue="pre-filled" />;