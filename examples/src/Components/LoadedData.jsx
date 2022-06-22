import React from 'react';

import ZipyWebNetwork from '../../../src/ZipyWebNetwork';
import NetworkData from './../data/network.har';

const data = JSON.parse(NetworkData);

const LoadedData = () => (
  <ZipyWebNetwork
    data={data}
    options={{
      showTimeline: false,
      showImportHAR: false,
    }}
  />
);

export default LoadedData;
