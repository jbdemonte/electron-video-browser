import { Menu } from 'antd';
import React from 'react';

const Shortcut = (label, path, icon) => (
  <Menu.Item key={path} icon={icon} style={{ userSelect: 'none' }}>
    { label }
  </Menu.Item>
);

export default Shortcut;
