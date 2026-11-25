import React from 'react';
import { MSelect } from '@meridian/ui-kit';

export default {
  title: 'Select',
  component: MSelect,
};

export const Simple = () => (
  <MSelect>
    <option value="">Choose...</option>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
  </MSelect>
);

export const WithPlaceholder = () => <MSelect placeholder="Select fruit"><option value=""></option><option value="apple">Apple</option><option value="banana">Banana</option><option value="orange">Orange</option></MSelect>