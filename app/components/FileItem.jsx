import React from 'react';
import PropTypes from 'prop-types';
import { statSync } from 'fs';
import { basename } from 'path';
import { FolderOutlined, FileOutlined } from '@ant-design/icons';

const FileItem = ({ filePath, onFolderDoubleClick }) => {
  const stat = statSync(filePath);
  const isDirectory = stat.isDirectory();
  const onDoubleClick = isDirectory ? () => onFolderDoubleClick(filePath) : () => null;

  // todo: basename => [20 on left] ... [5 on right] . extension
  return (
    <div className="file-item" onDoubleClick={onDoubleClick}>
      <div className="inner">
        { isDirectory ? <FolderOutlined /> : <FileOutlined />}
        <span>{ basename(filePath) }</span>
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
