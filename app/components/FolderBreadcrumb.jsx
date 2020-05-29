import React from 'react';
import { sep } from 'path';
import PropTypes from 'prop-types';

const FolderBreadcrumb = ({ fullPath, onClick }) => {
  // Special case of "/" as fullPath => split give a ["", ""]
  const folders = fullPath === sep ? [''] : fullPath.split(sep);
  return (
    <div className="folder-breadcrumbs">
      {
            folders.map((folder, index) => {
              const bread = folders.slice(0, index + 1).join(sep) || sep;
              return (
                <React.Fragment key={bread}>
                  <span role="button" onClick={() => onClick(bread)}>
                    {folder}
                  </span>
                  <span role="button" onClick={() => onClick(bread)}>{sep}</span>
                </React.Fragment>
              );
            })
        }
    </div>
  );
};

FolderBreadcrumb.propTypes = {
  fullPath: PropTypes.string,
  onClick: PropTypes.func,
};

FolderBreadcrumb.defaultProps = {
  fullPath: '',
  onClick: () => null,
};

export default FolderBreadcrumb;
