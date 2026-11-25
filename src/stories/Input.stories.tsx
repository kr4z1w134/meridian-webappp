import React from 'react';
import { MInput } from '@meridian/ui-kit';

export default {
  title: 'Input',
  component: MInput,
};

export const Default = () => <MInput placeholder="Enter text" />;
export const Controlled = () => {
  const [value, setValue] = React.useState('');
  return <MInput value={value} onChange={e => setValue(e.target.value)} />;
};