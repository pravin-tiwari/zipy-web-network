import React, { useEffect, useState } from 'react';

import ZipyWebNetwork from '../../../src/ZipyWebNetwork';
import NetworkData from './../data/network.har';

const data = JSON.parse(NetworkData);

const ScrollExample = () => {
  const [scrollTimeStamp, updateTimeStamp] = useState(0);

  useEffect(() => {
    let currentTimestamp = 1573651631300;
    const updateInterval = setInterval(() => {
      currentTimestamp += 2000;
      updateTimeStamp(currentTimestamp);
    }, 2000);

    setTimeout(() => {
      clearTimeout(updateInterval);
    }, 20000);
  }, []);

  return (
    <ZipyWebNetwork
      data={data}
      scrollRequestPosition="near"
      scrollTimeStamp={scrollTimeStamp}
    />
  );
};

export default ScrollExample;
