import React from 'react';
import PropTypes from 'prop-types';
import { statSync } from 'fs';
import { basename } from 'path';
import { FolderOutlined, FileOutlined } from '@ant-design/icons';

import reduceFilename from '../tools/reduce-filename';
import isVideoFile from '../tools/is-video-file';
import VideoFile from './VideoFile';


const FileItem = ({ filePath, onFolderDoubleClick }) => {
  let stat;
  try {
    stat = statSync(filePath);
  } catch (e) {
    return <></>;
  }

  if (isVideoFile(filePath)) {
    return <VideoFile filePath={filePath} onDoubleClick={() => null} />;
  }

  const isDirectory = stat.isDirectory();
  const onDoubleClick = isDirectory ? () => onFolderDoubleClick(filePath) : () => null;

  return (
    <div className="file-item" onDoubleClick={onDoubleClick}>
      <div className="inner">
        { isDirectory ? <FolderOutlined /> : <FileOutlined />}
        <span className="filename">{ reduceFilename(basename(filePath)) }</span>
      </div>
    </div>
  );
};

FileItem.propTypes = {
  filePath: PropTypes.string,
  onFolderDoubleClick: PropTypes.func,
};

FileItem.defaultProps = {
  filePath: '',
  onFolderDoubleClick: () => null,
};

export default FileItem;
