import React from 'react';
import { MSelect } from '@meridian/ui-kit';

export default {
  title: 'Components/Select',
  component: MSelect,
};

export const Default = () => (
  <MSelect>
    <option value="">Select an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </MSelect>
);