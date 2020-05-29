import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import {
  DesktopOutlined, HomeOutlined, DownloadOutlined, FileOutlined, CustomerServiceOutlined,
  PictureOutlined, VideoCameraOutlined,
} from '@ant-design/icons';
import { remote } from 'electron';

import Shortcut from './Shortcut';


/**
 * Return current user shortcuts
 */
function getUserPaths() {
  return {
    home: remote.app.getPath('home'),
    desktop: remote.app.getPath('desktop'),
    documents: remote.app.getPath('documents'),
    downloads: remote.app.getPath('downloads'),
    music: remote.app.getPath('music'),
    pictures: remote.app.getPath('pictures'),
    videos: remote.app.getPath('videos'),
  };
}

const Shortcuts = ({ onClick }) => {
  const paths = getUserPaths();
  const defaultPath = paths.desktop;

  // on load, trigger the default  selected path
  useEffect(() => onClick(defaultPath), []);

  return (
    <Menu theme="dark" mode="inline" onClick={(item) => onClick(item.key)} defaultSelectedKeys={[defaultPath]}>
      { Shortcut('Home', paths.home, <HomeOutlined />) }
      { Shortcut('Bureau', paths.desktop, <DesktopOutlined />) }
      { Shortcut('Documents', paths.documents, <FileOutlined />) }
      { Shortcut('Téléchargements', paths.downloads, <DownloadOutlined />) }
      { Shortcut('Musique', paths.music, <CustomerServiceOutlined />) }
      { Shortcut('Images', paths.pictures, <PictureOutlined />) }
      { Shortcut('Videos', paths.videos, <VideoCameraOutlined />) }
    </Menu>
  );
};

Shortcuts.propTypes = {
  onClick: PropTypes.func,
};

Shortcuts.defaultProps = {
  onClick: () => null,
};

export default Shortcuts;
