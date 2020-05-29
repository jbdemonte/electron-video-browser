import React from 'react';
import PropTypes from 'prop-types';
import { readdirSync } from 'fs';
import { join } from 'path';


import isVideoFile from '../tools/is-video-file';
import Directory from './Directory';
import VideoFile from './VideoFile';

const FileBrowser = ({ folder, openFolder }) => {
  if (!folder) {
    return <div />;
  }
  const dirents = readdirSync(folder, { withFileTypes: true });

  const folders = dirents.filter((dirent) => dirent.isDirectory());
  const videos = dirents.filter((dirent) => isVideoFile(dirent.name));

  return (
    <div className="file-browser">
      <div className="listing">
        { folders.map((dirent) => <Directory key={dirent.name} name={dirent.name} onDoubleClick={() => openFolder(join(folder, dirent.name))} />) }
      </div>
      {
        folders.length && videos.length ? <div className="separator" /> : null
      }
      <div className="listing">
        { videos.map((dirent) => <VideoFile key={dirent.name} filePath={join(folder, dirent.name)} />) }
      </div>
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
