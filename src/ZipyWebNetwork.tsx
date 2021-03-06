// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import NetworkProvider from './state/network/NetworkProvider';
import MainContainer from './Containers/MainContainer';
import Styles from './ZipyWebNetwork.styles.scss';
import ThemeProvider from './state/theme/Context';

const contextClassNames = classNames.bind(Styles);

const ZipyWebNetwork = ({
  file,
  data,
  fetchOptions,
  scrollTimeStamp,
  options,
  onRequestSelect,
  scrollRequestPosition,
  autoHighlightChange,
  onDataLoaded,
  onDataError,
  containerClassName,
}) => (
  // @ts-ignore
  <section className={contextClassNames('zipy-web-network', containerClassName)}>
    <ThemeProvider options={options}>
      <NetworkProvider
        autoHighlightChange={autoHighlightChange}
        data={data}
        fetchOptions={fetchOptions}
        file={file}
        onDataError={onDataError}
        onDataLoaded={onDataLoaded}
        scrollRequestPosition={scrollRequestPosition}
        scrollTimeStamp={scrollTimeStamp}
      >
        <MainContainer onRequestSelect={onRequestSelect} />
      </NetworkProvider>
    </ThemeProvider>
  </section>
);

ZipyWebNetwork.propTypes = {
  autoHighlightChange: PropTypes.bool,
  containerClassName: PropTypes.string,
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
  onDataError: PropTypes.func,
  onDataLoaded: PropTypes.func,
  onRequestSelect: PropTypes.func,
  options: PropTypes.object,
  scrollRequestPosition: PropTypes.oneOf(['before', 'after', 'near']),
  scrollTimeStamp: PropTypes.number,
};

ZipyWebNetwork.defaultProps = {
  autoHighlightChange: false,
  containerClassName: null,
  data: null,
  fetchOptions: { withCredentials: true },
  file: null,
  onDataError: null,
  onDataLoaded: null,
  onRequestSelect: () => {},
  options: null,
  scrollRequestPosition: 'near',
  scrollTimeStamp: null,
};

export default ZipyWebNetwork;
