import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';

import Shortcuts from './Shortcuts';
import FileBrowser from './FileBrowser';
import FolderBreadcrumb from './FolderBreadcrumb';

const {
  Header, Content, Footer, Sider,
} = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [folder, setFolder] = useState('');

  useEffect(() => {
    console.log(folder);
  }, [folder]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Shortcuts onChange={setFolder} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <FolderBreadcrumb fullPath={folder} onClick={setFolder} />
          <FileBrowser folder={folder} openFolder={setFolder} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
