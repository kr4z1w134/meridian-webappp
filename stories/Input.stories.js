import React from 'react';
import { MInput } from '@meridian/ui-kit';

export default {
  title: 'Input',
  component: MInput,
};

export const Default = () => <MInput placeholder="Type here..." />;
export const Labeled = () => (
  <>
    <label htmlFor="labeled-input">Label:</label>
    <MInput id="labeled-input" placeholder="Labeled input" />
  </>
);