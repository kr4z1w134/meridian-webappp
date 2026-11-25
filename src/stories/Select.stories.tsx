import React from 'react';
import { MSelect } from '@meridian/ui-kit';

export default {
  title: 'Select',
  component: MSelect,
};

export const SingleSelect = () => (
  <MSelect>
    <option value="">Select an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </MSelect>
);

export const MultiSelect = () => (
  <MSelect multiple>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </MSelect>
);