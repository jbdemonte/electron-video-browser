import React from 'react';
import PropTypes from 'prop-types';
import { statSync } from 'fs';
import { basename } from 'path';
import { FolderOutlined, FileOutlined } from '@ant-design/icons';
import reduceFilename from '../tools/reduce-filename';

const FileItem = ({ filePath, onFolderDoubleClick }) => {
  const stat = statSync(filePath);
  const isDirectory = stat.isDirectory();
  const onDoubleClick = isDirectory ? () => onFolderDoubleClick(filePath) : () => null;

  return (
    <div className="file-item" onDoubleClick={onDoubleClick}>
      <div className="inner">
        { isDirectory ? <FolderOutlined /> : <FileOutlined />}
        <span>{ reduceFilename(basename(filePath)) }</span>
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
