import React from 'react';
import PropTypes from 'prop-types';
import { readdirSync } from 'fs';
import { join } from 'path';


import FileItem from './FileItem';

const FileBrowser = ({ folder, openFolder }) => {
  if (!folder) {
    return <div />;
  }
  const files = readdirSync(folder);

  return (
    <div className="file-browser">
      { files.map((file) => <FileItem key={file} filePath={join(folder, file)} onFolderDoubleClick={openFolder} />) }
    </div>
  );
};

FileBrowser.propTypes = {
  folder: PropTypes.string,
  openFolder: PropTypes.func,
};

FileBrowser.defaultProps = {
  folder: '',
  openFolder: () => null,
};

export default FileBrowser;
