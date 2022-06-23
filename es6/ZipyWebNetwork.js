import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NetworkProvider from './state/network/NetworkProvider.js';
import MainContainer from './Containers/MainContainer.js';
import Styles from './ZipyWebNetwork.styles.scss.js';
import { ThemeProvider } from './state/theme/Context.js';

// @ts-nocheck
var contextClassNames = classNames.bind(Styles);

var ZipyWebNetwork = function ZipyWebNetwork(_ref) {
  var file = _ref.file,
      data = _ref.data,
      fetchOptions = _ref.fetchOptions,
      scrollTimeStamp = _ref.scrollTimeStamp,
      options = _ref.options,
      onRequestSelect = _ref.onRequestSelect,
      scrollRequestPosition = _ref.scrollRequestPosition,
      autoHighlightChange = _ref.autoHighlightChange,
      onDataLoaded = _ref.onDataLoaded,
      onDataError = _ref.onDataError,
      containerClassName = _ref.containerClassName;
  return (
    /*#__PURE__*/
    // @ts-ignore
    React.createElement("section", {
      className: contextClassNames('zipy-web-network', containerClassName)
    }, /*#__PURE__*/React.createElement(ThemeProvider, {
      options: options
    }, /*#__PURE__*/React.createElement(NetworkProvider, {
      autoHighlightChange: autoHighlightChange,
      data: data,
      fetchOptions: fetchOptions,
      file: file,
      onDataError: onDataError,
      onDataLoaded: onDataLoaded,
      scrollRequestPosition: scrollRequestPosition,
      scrollTimeStamp: scrollTimeStamp
    }, /*#__PURE__*/React.createElement(MainContainer, {
      onRequestSelect: onRequestSelect
    }))))
  );
};

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
  scrollTimeStamp: PropTypes.number
};
ZipyWebNetwork.defaultProps = {
  autoHighlightChange: false,
  containerClassName: null,
  data: null,
  fetchOptions: {
    withCredentials: true
  },
  file: null,
  onDataError: null,
  onDataLoaded: null,
  onRequestSelect: function onRequestSelect() {},
  options: null,
  scrollRequestPosition: 'near',
  scrollTimeStamp: null
};

export { ZipyWebNetwork as default };
//# sourceMappingURL=ZipyWebNetwork.js.map
