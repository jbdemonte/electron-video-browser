import React, { useState } from 'react';
import { Layout } from 'antd';

import Shortcuts from './Shortcuts';
import FileBrowser from './FileBrowser';
import FolderBreadcrumb from './FolderBreadcrumb';

const {
  Content, Footer, Sider,
} = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [folder, setFolder] = useState('');

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Shortcuts onClick={setFolder} />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <FolderBreadcrumb fullPath={folder} onClick={setFolder} />
          <FileBrowser folder={folder} openFolder={setFolder} />
        </Content>
        <Footer style={{ textAlign: 'center', userSelect: 'none' }}>Powered by Electron, React and Ant-Design</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
