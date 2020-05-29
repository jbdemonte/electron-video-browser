import React, { useEffect, useState } from 'react';
import { basename } from 'path';
import PropTypes from 'prop-types';
import SoundOutlined from '@ant-design/icons/lib/icons/SoundOutlined';
import MessageOutlined from '@ant-design/icons/lib/icons/MessageOutlined';

import reduceFilename from '../tools/reduce-filename';
import extractVideoInformations from '../tools/ffprobe';
import Quality from './Quality';
import Codec from './Codec';
import Flag from './Flag';

const filterNoNamedLanguages = (languages) => languages.filter((stream) => stream.language);

const renderAudio = (languages) => (
  <div className="languages audio">
    <SoundOutlined />
    {
          languages.map((stream, idx) => (
            <Flag
              // eslint-disable-next-line react/no-array-index-key
              key={`${stream.language}_${stream.codecName}_${idx}`}
              language={stream.language}
              title={stream.codecName}
            />
          ))
        }
  </div>
);

const renderSubtitle = (languages) => (
  <div className="languages subtitle">
    <MessageOutlined />
    {
      languages.map((stream, idx) => (
        <Flag
        // eslint-disable-next-line react/no-array-index-key
          key={`${stream.language}_${stream.title}_${idx}`}
          language={stream.language}
          title={stream.title}
        />
      ))
    }
  </div>
);

const renderInformations = (informations) => (
  <>
    <span className="filename">{informations.title}</span>
    <div className="tags">
      <Quality value={informations.quality} />
      <Codec value={informations.codecName} />
    </div>
    { informations.audio.length ? renderAudio(informations.audio) : null }
    { informations.subtitle.length ? renderSubtitle(informations.subtitle) : null }
  </>
);

const VideoFile = ({ filePath, onDoubleClick }) => {
  const [informations, setInformations] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const infos = await extractVideoInformations(filePath);
      setInformations({ ...infos, audio: filterNoNamedLanguages(infos.audio), subtitle: filterNoNamedLanguages(infos.subtitle) });
    }
    fetchData();
  }, []);

  return (
    <div className="file-item video-item" onDoubleClick={onDoubleClick}>
      <div className="inner">
        <div className="img" />
        {
          informations ? renderInformations(informations) : <span className="filename">{reduceFilename(basename(filePath))}</span>
        }
      </div>
    </div>
  );
};

VideoFile.propTypes = {
  filePath: PropTypes.string,
  onDoubleClick: PropTypes.func,
};

VideoFile.defaultProps = {
  filePath: '',
  onDoubleClick: () => null,
};

export default VideoFile;
