import React from 'react';
import PropTypes from 'prop-types';
import { FolderOutlined } from '@ant-design/icons';

import reduceFilename from '../tools/reduce-filename';


const Directory = ({ name, onDoubleClick }) => (
  <div className="file-item" onDoubleClick={onDoubleClick}>
    <div className="inner">
      <FolderOutlined />
      <span className="filename">{ reduceFilename(name) }</span>
    </div>
  </div>
);

Directory.propTypes = {
  name: PropTypes.string,
  onDoubleClick: PropTypes.func,
};

Directory.defaultProps = {
  name: '',
  onDoubleClick: () => null,
};

export default Directory;
