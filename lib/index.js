'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames/bind');
var immutable = require('immutable');
var axios = require('axios');
var reactFlexboxGrid = require('react-flexbox-grid');
var reactDropzone = require('react-dropzone');
var Popover = require('react-popover');
var qs = require('qs');
var recharts = require('recharts');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var Popover__default = /*#__PURE__*/_interopDefaultLegacy(Popover);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// @ts-nocheck
var VIEWER_FIELDS = Object.freeze({
  file: Object.freeze({
    key: 'filename',
    name: 'File'
  }),
  status: Object.freeze({
    key: 'status',
    name: 'Status'
  }),
  method: Object.freeze({
    key: 'method',
    name: 'Method'
  }),
  domain: Object.freeze({
    key: 'domain',
    name: 'Domain'
  }),
  type: Object.freeze({
    key: 'type',
    name: 'Type'
  }),
  size: Object.freeze({
    key: 'size',
    name: 'Size'
  }),
  time: Object.freeze({
    key: 'time',
    name: 'Time'
  })
});
var DEFAULT_FILTER = {
  name: null,
  value: null
};
var FILTERS = [{
  name: 'All',
  filterBy: DEFAULT_FILTER
}, {
  name: 'XHR',
  filterBy: {
    name: 'type',
    value: ['xhr', 'XHR', 'fetch']
  }
}, {
  name: 'JS',
  filterBy: {
    name: 'type',
    value: ['script', 'javascript', 'x-javascript', 'json']
  }
}, {
  name: 'CSS',
  filterBy: {
    name: 'type',
    value: ['stylesheet', 'css']
  }
}, {
  name: 'Img',
  filterBy: {
    name: 'type',
    value: ['image', 'png', 'jpeg', 'svg+xml', 'gif']
  }
}, {
  name: 'Media',
  filterBy: {
    name: 'type',
    value: ['media']
  }
}, {
  name: 'Font',
  filterBy: {
    name: 'type',
    value: ['font', 'woff2']
  }
}, {
  name: 'Doc',
  filterBy: {
    name: 'type',
    value: ['document', 'html']
  }
}, {
  name: 'WS',
  filterBy: {
    name: 'type',
    value: ['websocket']
  }
}, {
  name: 'Manifest',
  filterBy: {
    name: 'type',
    value: ['manifest.json']
  }
}];
var FETCH_FILE_LOAD_TEXT = 'Please wait, Fetching file is in progress.';
var TIMINGS = {
  queueing: {
    dataKey: '_blocked_queueing',
    fill: '#ccc',
    name: 'Queueing'
  },
  blocked: {
    dataKey: 'blocked',
    fill: '#A1000C',
    name: 'Stalled'
  },
  dns: {
    dataKey: 'dns',
    fill: '#DCC9E5',
    name: 'DNS Lookup'
  },
  ssl: {
    dataKey: 'ssl',
    fill: '#E78057',
    name: 'SSL'
  },
  connect: {
    dataKey: 'connect',
    fill: '#DB8553',
    name: 'Initial Connection'
  },
  send: {
    dataKey: 'send',
    fill: '#3C96C4',
    name: 'Request Sent'
  },
  wait: {
    dataKey: 'wait',
    fill: '#7CA0BF',
    name: 'Waiting (TTFB)'
  },
  receive: {
    dataKey: 'receive',
    fill: '#65B955',
    name: 'Content Downloaded'
  }
};
var TIME_CHART_SVG_PROPS = {
  width: '100%',
  height: '20',
  viewBox: '0 0 250 20',
  version: '1.1',
  preserveAspectRatio: 'xMinYMin meet'
};
var TIME_CHART_DEFAULT_PROPS = {
  height: 16,
  y: 3.5
};
var ROW_ID_PREFIX = 'zipy-web-network-table-row-';
var GENERAL_HEADERS = Object.freeze({
  url: Object.freeze({
    key: 'url',
    name: 'Request URL'
  }),
  method: Object.freeze({
    key: 'method',
    name: 'Request Method'
  }),
  status: Object.freeze({
    key: 'status',
    name: 'Status Code'
  }),
  serverIPAddress: Object.freeze({
    key: 'serverIPAddress',
    name: 'Remote Address'
  })
});
var HEADERS_TITLES = Object.freeze({
  general: Object.freeze({
    key: 'general',
    name: 'General'
  }),
  response: Object.freeze({
    key: 'response',
    name: 'Response Headers'
  }),
  request: Object.freeze({
    key: 'request',
    name: 'Request Headers'
  }),
  queryString: Object.freeze({
    key: 'queryString',
    name: 'Query String Parameters'
  }),
  formData: Object.freeze({
    key: 'formaData',
    name: 'Form Data'
  }),
  requestPayload: Object.freeze({
    key: 'requestPayload',
    name: 'Request Payload'
  })
});

var TIMELINE_DATA_POINT_HEIGHT = 2;
var NETWORK_VIEWER_DEFAULT_OPTIONS = {
  showImportHAR: true,
  showTimeline: false
};
var PAYLOAD_CAPTIONS = Object.freeze({
  encode: Object.freeze({
    "true": 'URL encoded',
    "false": 'decoded'
  }),
  parse: Object.freeze({
    "true": 'source',
    "false": 'parsed'
  })
});

/* eslint no-underscore-dangle: 0 */

var roundOff = function roundOff(value) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var base = Math.pow(10, decimal);
  return Math.round(value * base) / base;
};
var formatSize = function formatSize(bytes) {
  if (bytes < 1024) {
    return "".concat(roundOff(bytes), " B");
  }

  if (bytes < Math.pow(1024, 2)) {
    return "".concat(roundOff(bytes / 1024), " KB");
  }

  return "".concat(roundOff(bytes / Math.pow(1024, 2)), " MB");
};
var formatTime = function formatTime(time) {
  if (time < 1000) {
    return "".concat(Math.round(time), "ms");
  }

  if (time < 60000) {
    return "".concat(Math.ceil(time / 10) / 100, "s");
  }

  return "".concat(Math.ceil(time / 60000) * 100 / 100, "m");
};
var getUrlInfo = function getUrlInfo(url) {
  var urlInfo = new URL(url);
  var pathSplit = urlInfo.pathname.split('/');
  var fileName = (pathSplit[pathSplit.length - 1].trim() ? pathSplit[pathSplit.length - 1] : pathSplit[pathSplit.length - 2]) + urlInfo.search;
  return {
    domain: urlInfo.host,
    filename: fileName || urlInfo.href,
    url: urlInfo.href
  };
};
var parseSize = function parseSize(_ref) {
  var bodySize = _ref.bodySize,
      _transferSize = _ref._transferSize,
      headers = _ref.headers,
      content = _ref.content;

  if (content && content.size) {
    return formatSize(content.size);
  }

  if (_transferSize > -1) {
    return formatSize(_transferSize);
  }

  if (bodySize > -1) {
    return formatSize(bodySize);
  }

  var contentInfo = headers.find(function (_ref2) {
    var name = _ref2.name;
    return ['content-length', 'Content-Length'].includes(name);
  });

  if (!contentInfo) {
    return 0;
  }

  return formatSize(contentInfo.value);
};
var getContentType = function getContentType(entry) {
  if (entry._resourceType) {
    return entry._resourceType.toLowerCase();
  }

  var headers = entry.response.headers;
  var contentInfo = headers.find(function (_ref3) {
    var name = _ref3.name;
    return ['content-type', 'Content-Type'].includes(name);
  });

  if (!contentInfo) {
    return '';
  }

  var type = contentInfo.value.split(';')[0].split('/');
  return type.length > 1 ? type[1] : type[0];
};
var getTimings = function getTimings(_ref4, firstEntryTime) {
  var startedDateTime = _ref4.startedDateTime,
      timings = _ref4.timings;
  return _objectSpread2(_objectSpread2({}, timings), {}, {
    startTime: new Date(startedDateTime).getTime() - new Date(firstEntryTime).getTime()
  });
};
var getContent = function getContent(_ref5) {
  var mimeType = _ref5.mimeType,
      text = _ref5.text;

  if (mimeType === 'application/json') {
    var parsedJson = text;

    try {
      parsedJson = JSON.stringify(JSON.parse(text), null, 2);
    } catch (err) {
      parsedJson = text;
    }

    return parsedJson;
  }

  return text;
};
var getEntryTransferredSize = function getEntryTransferredSize(_ref6) {
  var response = _ref6.response;
  var bodySize = response.bodySize,
      _transferSize = response._transferSize;

  if (_transferSize > -1) {
    return _transferSize;
  }

  if (bodySize > -1) {
    return bodySize;
  }

  return -1;
};
var getEntryUncompressedSize = function getEntryUncompressedSize(_ref7) {
  var response = _ref7.response;
  var bodySize = response.bodySize,
      _transferSize = response._transferSize,
      size = response.content.size;

  if (size > 0) {
    return size;
  }

  if (_transferSize > -1) {
    return _transferSize;
  }

  if (bodySize > -1) {
    return bodySize;
  }

  return -1;
};
var calculateFinishTime = function calculateFinishTime(data) {
  var finishTimes = data.map(function (_ref8) {
    var timings = _ref8.timings;
    return Object.values(timings).reduce(function (acc, durationInMS) {
      return acc + (durationInMS > -1 ? durationInMS : 0);
    }, 0);
  });
  return Math.max.apply(Math, _toConsumableArray(finishTimes));
};
var sortHeaders = function sortHeaders(current, next) {
  if (current.name < next.name) {
    return -1;
  }

  return current.name > next.name ? 1 : 0;
};
var getHeaders = function getHeaders(entry) {
  return {
    request: entry.request.headers.sort(sortHeaders),
    response: entry.response.headers.sort(sortHeaders),
    queryString: entry.request.queryString,
    postData: entry.request.postData
  };
};
var getTotalTimeOfEntry = function getTotalTimeOfEntry(_ref9) {
  var startedDateTime = _ref9.startedDateTime,
      time = _ref9.time,
      timings = _ref9.timings;
  return new Date(startedDateTime).getTime() + time + (timings._blocked_queueing || 0);
};
var getInterceptError = function getInterceptError(_ref10) {
  var response = _ref10.response;
  return response && response._error ? response._error : null;
};
var prepareViewerData = function prepareViewerData(entries) {
  if (!entries.length) {
    return {
      totalNetworkTime: 0,
      data: [],
      totalRequests: 0,
      totalTransferredSize: 0,
      totalUncompressedSize: 0,
      finishTime: 0
    };
  }

  var firstEntryTime = entries[0].startedDateTime;
  var endTime = getTotalTimeOfEntry(entries[entries.length - 1]);
  var totalTransferredSize = 0;
  var totalUncompressedSize = 0;
  var data = entries.filter(function (entry) {
    return entry.response && getUrlInfo(entry.request.url).domain;
  }).map(function (entry, index) {
    totalTransferredSize += getEntryTransferredSize(entry);
    totalUncompressedSize += getEntryUncompressedSize(entry);
    var lastTimeOfEntry = getTotalTimeOfEntry(entry);
    endTime = endTime < lastTimeOfEntry ? lastTimeOfEntry : endTime;
    return _objectSpread2({
      index: index,
      status: entry.response.status,
      method: entry.request.method,
      size: parseSize(entry.response),
      startedDateTime: new Date(entry.startedDateTime).getTime(),
      type: getContentType(entry),
      timings: getTimings(entry, firstEntryTime),
      body: getContent(entry.response.content),
      time: entry.time,
      serverIPAddress: entry.serverIPAddress || ':80',
      headers: getHeaders(entry),
      transferredSize: getEntryTransferredSize(entry),
      uncompressedSize: getEntryUncompressedSize(entry),
      error: getInterceptError(entry)
    }, getUrlInfo(entry.request.url));
  });
  var totalRequests = data.length;
  var totalNetworkTime = endTime - new Date(firstEntryTime).getTime();
  var finishTime = calculateFinishTime(data);
  return {
    totalNetworkTime: totalNetworkTime,
    data: data,
    totalRequests: totalRequests,
    totalTransferredSize: totalTransferredSize,
    totalUncompressedSize: totalUncompressedSize,
    finishTime: finishTime
  };
};
var sortBy = function sortBy(data, key) {
  var isAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return data.sort(function (prev, next) {
    if (prev[key] < next[key]) {
      return isAsc ? -1 : 1;
    }

    if (prev[key] > next[key]) {
      return isAsc ? 1 : 1;
    }

    return 0;
  });
};
var filterCondition = function filterCondition(_ref11) {
  var filter = _ref11.filter,
      info = _ref11.info;

  switch (filter.name) {
    case 'error':
      return info.status >= 400 || info.error;

    case 'type':
    default:
      return filter.value.includes(info[filter.name]);
  }
};
var filterData = function filterData(_ref12) {
  var data = _ref12.data,
      errorFilter = _ref12.errorFilter,
      _ref12$filter = _ref12.filter,
      filter = _ref12$filter === void 0 ? {} : _ref12$filter,
      _ref12$search = _ref12.search,
      search = _ref12$search === void 0 ? {} : _ref12$search;
  var trimmedSearch = search.value && search.value.trim();
  return !trimmedSearch && !filter.name && !errorFilter ? data : data.filter(function (info) {
    var isSearchMatched = trimmedSearch ? info[search.name] && info[search.name].includes(trimmedSearch) : true;
    var isErrorMatched = errorFilter ? filterCondition({
      filter: {
        name: 'error'
      },
      info: info
    }) : true;
    var isFilterMatched = filter.name ? filterCondition({
      filter: filter,
      info: info
    }) : true;
    return isSearchMatched && isErrorMatched && isFilterMatched;
  });
};
var actionsWrapper = function actionsWrapper() {
  var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (dispatch, state) {
    return Object.keys(actions).reduce(function (modifiedActions, type) {
      return _objectSpread2(_objectSpread2({}, modifiedActions), {}, _defineProperty({}, type, actions[type](dispatch, state)));
    }, {});
  };
};
var parseTime = function parseTime(time) {
  if (!time) {
    return time;
  }

  if (time > 1000) {
    return "".concat((time / 1000).toFixed(2), " s");
  }

  return "".concat(time.toFixed(2), " ms");
};
var calcTotalTime = function calcTotalTime(data) {
  var total = Object.keys(data).filter(function (key) {
    return !['_blocked_queueing', 'startTime'].includes(key);
  }).reduce(function (acc, key) {
    return acc + data[key];
  }, 0);
  return total;
};
var prepareTooltipData = function prepareTooltipData(data) {
  return _objectSpread2({
    queuedAt: parseTime(data.startTime),
    startedAt: parseTime(data.startTime + data._blocked_queueing),
    totalTime: parseTime(calcTotalTime(data))
  }, Object.keys(data).reduce(function (acc, key) {
    acc[key] = parseTime(data[key]);
    return acc;
  }, {}));
};
var getStatusClass = function getStatusClass(_ref13) {
  var status = _ref13.status,
      error = _ref13.error;

  if (status === 0 && !error) {
    return 'pending';
  }

  if (status >= 400 || error) {
    return 'error';
  }

  return 'info';
};
var formatValue = function formatValue(key, value, unit) {
  var request = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  switch (key) {
    case 'time':
      return value === 0 && !request.error ? 'Pending' : parseTime(value);

    case 'status':
      if (request.error) {
        return '(failed)';
      }

      return value === 0 ? 'Pending' : value;

    default:
      return !unit ? value : "".concat(value, " ").concat(unit);
  }
};
var calcChartAttributes = function calcChartAttributes(data, maxTime, cx, index) {
  var cy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var startTimePercent = data.startTime / maxTime * 100;
  var previousX = 0;
  var previousWidth = 0;
  var chartAttributes = [];
  Object.keys(TIMINGS).forEach(function (key) {
    var timingInfo = TIMINGS[key];
    var value = data[timingInfo.dataKey];

    if (value <= 0) {
      return;
    }

    previousX += !previousWidth ? startTimePercent : previousWidth;
    previousWidth = value > 0 ? value / maxTime * 100 : 0;
    chartAttributes.push({
      width: "".concat(previousWidth, "%"),
      y: index ? index % 10 * (TIMELINE_DATA_POINT_HEIGHT + 1) + 40 : cy,
      x: "".concat(previousX, "%"),
      fill: timingInfo.fill,
      key: key
    });
  });
  return chartAttributes;
};
var findIndexNearTimestamp = function findIndexNearTimestamp(data, exactTimestamp) {
  return data.reduce(function (_ref14, _ref15) {
    var value = _ref14.value,
        index = _ref14.index;
    var currentValue = _ref15.startedDateTime,
        currentIndex = _ref15.index;
    return Math.abs(currentValue - exactTimestamp) < Math.abs(value - exactTimestamp) ? {
      value: currentValue,
      index: currentIndex
    } : {
      value: value,
      index: index
    };
  }, {
    value: 0,
    index: 0
  }).index;
};
var findIndexBeforeTimestamp = function findIndexBeforeTimestamp(data, exactTimestamp) {
  var resultIndex = data.reverse().findIndex(function (_ref16) {
    var startedDateTime = _ref16.startedDateTime;
    return startedDateTime <= exactTimestamp;
  });
  return resultIndex < 0 ? 0 : data.size - (resultIndex + 1);
};
var findIndexAfterTimestamp = function findIndexAfterTimestamp(data, exactTimestamp) {
  return data.findIndex(function (_ref17) {
    var startedDateTime = _ref17.startedDateTime;
    return startedDateTime >= exactTimestamp;
  });
};
var findRequestIndex = function findRequestIndex(_ref18) {
  var data = _ref18.data,
      timestamp = _ref18.timestamp,
      position = _ref18.position;

  switch (position) {
    case 'before':
      return findIndexBeforeTimestamp(data, timestamp);

    case 'after':
      return findIndexAfterTimestamp(data, timestamp);

    case 'near':
    default:
      return findIndexNearTimestamp(data, timestamp);
  }
};
var calculateTimings = function calculateTimings(pages) {
  return pages.reduce(function (_ref19, _ref20) {
    var DOMContentLoaded = _ref19.DOMContentLoaded,
        onLoad = _ref19.onLoad;
    var pageTimings = _ref20.pageTimings;
    return {
      DOMContentLoaded: DOMContentLoaded + pageTimings.onContentLoad,
      onLoad: onLoad + pageTimings.onLoad
    };
  }, {
    DOMContentLoaded: 0,
    onLoad: 0
  });
};
var getSummary = function getSummary(data) {
  return data.reduce(function (acc, req) {
    acc.totalTransferredSize += req.transferredSize;
    acc.totalUncompressedSize += req.uncompressedSize;
    return acc;
  }, {
    totalTransferredSize: 0,
    totalUncompressedSize: 0,
    totalRequests: data.size
  });
};
var parseRequestPayload = function parseRequestPayload(text) {
  var parsedJson = text;

  try {
    parsedJson = JSON.stringify(JSON.parse(text), null, 2);
  } catch (err) {
    parsedJson = text;
  }

  return parsedJson;
};

var UPDATE_DATA = 'UPDATE_DATA';
var UPDATE_SEARCH = 'UPDATE_SEARCH';
var UPDATE_SORT = 'UPDATE_SORT';
var UPDATE_FILTER = 'UPDATE_FILTER';
var UPDATE_ERROR_FILTER = 'UPDATE_ERROR_FILTER';
var UPDATE_ERROR_MESSAGE = 'UPDATE_ERROR_MESSAGE';
var UPDATE_SCROLL_TO_INDEX = 'UPDATE_SCROLL_TO_INDEX';
var SELECT_REQUEST = 'SELECT_REQUEST';
var FETCH_FILE = {
  REQUEST: 'FETCH_FILE_REQUEST',
  SUCCESS: 'FETCH_FILE_SUCCESS',
  FAILURE: 'FETCH_FILE_FAILURE'
};
var RESET = 'RESET';

var initialState = new immutable.Map({
  data: new immutable.List(),
  actualData: new immutable.List(),
  totalNetworkTime: null,
  dataSummary: new immutable.Map(),
  sort: {
    key: 'startedDateTime',
    isAcs: true
  },
  search: {
    name: 'url',
    value: ''
  },
  filter: {
    name: null,
    value: null
  },
  errorFilter: false,
  error: null,
  loading: false,
  scrollToIndex: null,
  selectedReqIndex: null,
  showReqDetail: false,
  reqDetail: null
});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case UPDATE_DATA:
      {
        return state.withMutations(function (newState) {
          var sort = state.get('sort');

          var _prepareViewerData = prepareViewerData(payload.entries),
              data = _prepareViewerData.data,
              totalNetworkTime = _prepareViewerData.totalNetworkTime,
              totalRequests = _prepareViewerData.totalRequests,
              totalTransferredSize = _prepareViewerData.totalTransferredSize,
              totalUncompressedSize = _prepareViewerData.totalUncompressedSize,
              finishTime = _prepareViewerData.finishTime;

          var sortedData = new immutable.List(sortBy(data, sort.key, sort.isAcs));
          newState.set('error', null).set('data', sortedData).set('actualData', sortedData).set('totalNetworkTime', totalNetworkTime).set('dataSummary', new immutable.Map({
            totalRequests: totalRequests,
            totalTransferredSize: totalTransferredSize,
            totalUncompressedSize: totalUncompressedSize,
            finishTime: finishTime,
            timings: calculateTimings(payload.pages),
            finish: finishTime
          }));
        });
      }

    case UPDATE_SEARCH:
      {
        return state.withMutations(function (newState) {
          var data = filterData({
            data: state.get('actualData'),
            filter: state.get('filter'),
            search: payload,
            errorFilter: state.get('errorFilter')
          });
          var summary = getSummary(data);
          newState.set('search', payload).set('data', data).setIn(['dataSummary', 'totalRequests'], summary.totalRequests).setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize).setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
        });
      }

    case UPDATE_FILTER:
      {
        return state.withMutations(function (newState) {
          var data = filterData({
            data: state.get('actualData'),
            filter: payload,
            search: state.get('search'),
            errorFilter: state.get('errorFilter')
          });
          var summary = getSummary(data);
          newState.set('filter', payload).set('data', data).setIn(['dataSummary', 'totalRequests'], summary.totalRequests).setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize).setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
        });
      }

    case UPDATE_ERROR_FILTER:
      {
        return state.withMutations(function (newState) {
          var data = filterData({
            data: state.get('actualData'),
            filter: state.get('filter'),
            search: state.get('search'),
            errorFilter: payload
          });
          var summary = getSummary(data);
          newState.set('errorFilter', payload).set('data', data).setIn(['dataSummary', 'totalRequests'], summary.totalRequests).setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize).setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
        });
      }

    case UPDATE_SORT:
      {
        return state.withMutations(function (newState) {
          newState.set('sort', payload).set('data', sortBy(state.get('data'), payload.key, payload.isAcs));
        });
      }

    case FETCH_FILE.REQUEST:
      {
        return state.withMutations(function (newState) {
          newState.set('error', null).set('loading', true);
        });
      }

    case FETCH_FILE.SUCCESS:
      {
        return state.withMutations(function (newState) {
          newState.set('error', null).set('loading', false);
        });
      }

    case FETCH_FILE.FAILURE:
    case UPDATE_ERROR_MESSAGE:
      {
        return state.withMutations(function (newState) {
          newState.set('error', payload).set('loading', false);
        });
      }

    case UPDATE_SCROLL_TO_INDEX:
      {
        return state.withMutations(function (newState) {
          newState.set('selectedReqIndex', payload ? payload.index : null).set('reqDetail', payload);
        });
      }

    case SELECT_REQUEST:
      {
        return state.withMutations(function (newState) {
          newState.set('selectedReqIndex', payload ? payload.index : null).set('reqDetail', payload).set('showReqDetail', !!payload);
        });
      }

    case RESET:
      {
        return initialState;
      }

    default:
      return state;
  }
};

var updateData = function updateData(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_DATA,
      payload: payload
    });
  };
};
var updateSearch = function updateSearch(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_SEARCH,
      payload: payload
    });
  };
};
var updateSort = function updateSort(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_SORT,
      payload: payload
    });
  };
};
var updateFilter = function updateFilter(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_FILTER,
      payload: payload
    });
  };
};
var updateErrorFilter = function updateErrorFilter(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_ERROR_FILTER,
      payload: payload
    });
  };
};
var fetchFileRequest = function fetchFileRequest(dispatch) {
  return function (payload) {
    return dispatch({
      type: FETCH_FILE.REQUEST,
      payload: payload
    });
  };
};
var fetchFileSuccess = function fetchFileSuccess(dispatch) {
  return function (payload) {
    return dispatch({
      type: FETCH_FILE.SUCCESS,
      payload: payload
    });
  };
};
var fetchFileFailure = function fetchFileFailure(dispatch) {
  return function (payload) {
    return dispatch({
      type: FETCH_FILE.FAILURE,
      payload: payload
    });
  };
};
var updateErrorMessage = function updateErrorMessage(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_ERROR_MESSAGE,
      payload: payload
    });
  };
};
var updateScrollToIndex = function updateScrollToIndex(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_SCROLL_TO_INDEX,
      payload: payload
    });
  };
};
var selectRequest = function selectRequest(dispatch) {
  return function (payload) {
    return dispatch({
      type: SELECT_REQUEST,
      payload: payload
    });
  };
};
var resetState = function resetState(dispatch) {
  return function (payload) {
    return dispatch({
      type: RESET,
      payload: payload
    });
  };
};
var fetchFile = function fetchFile(dispatch) {
  return function (file) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      withCredentials: true
    };
    fetchFileRequest(dispatch)();
    axios__default["default"].get(file, options).then(function (_ref) {
      var data = _ref.data;

      if (data && data.log) {
        updateData(dispatch)(data.log);
      }

      fetchFileSuccess(dispatch)();
    })["catch"](function (error) {
      return fetchFileFailure(dispatch)({
        title: 'Error while fetching file',
        description: error.message
      });
    });
  };
};

var NetworkContext = /*#__PURE__*/React__default["default"].createContext();
var useNetwork = function useNetwork() {
  var context = React.useContext(NetworkContext);

  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }

  var _context = _slicedToArray(context, 2),
      state = _context[0],
      dispatch = _context[1];

  var wrappedActions = actionsWrapper({
    updateData: updateData,
    updateSearch: updateSearch,
    updateSort: updateSort,
    updateFilter: updateFilter,
    updateErrorMessage: updateErrorMessage,
    selectRequest: selectRequest,
    updateScrollToIndex: updateScrollToIndex,
    updateErrorFilter: updateErrorFilter,
    resetState: resetState
  })(dispatch, state);
  return {
    state: state,
    dispatch: dispatch,
    actions: wrappedActions
  };
};

var NetworkProvider = function NetworkProvider(props) {
  var data = props.data,
      file = props.file,
      fetchOptions = props.fetchOptions,
      initialState = props.initialState,
      scrollTimeStamp = props.scrollTimeStamp,
      scrollRequestPosition = props.scrollRequestPosition,
      autoHighlightChange = props.autoHighlightChange,
      onDataLoaded = props.onDataLoaded,
      onDataError = props.onDataError;

  var _useReducer = React.useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var value = React.useMemo(function () {
    return [state, dispatch];
  }, [state]);
  var selectedReqIndex = value[0].get('selectedReqIndex');
  var requestData = value[0].get('data');
  var showReqDetail = value[0].get('showReqDetail');
  var actualData = value[0].get('actualData');
  var error = value[0].get('error'); // Update data onChange of network data

  React.useEffect(function () {
    if (data && data.log && data.log.entries) {
      updateData(dispatch)({
        entries: data.log.entries,
        pages: data.log.pages
      });
    }
  }, [data]); // Fetch HAR file onChange of file prop

  React.useEffect(function () {
    if (file) {
      fetchFile(dispatch)(file, fetchOptions);
    }
  }, [file]);
  React.useEffect(function () {
    if (actualData.size && onDataLoaded) {
      onDataLoaded(actualData);
    }
  }, [actualData]);
  React.useEffect(function () {
    if (error && onDataError) {
      onDataError(error);
    }
  }, [error]); // Find nearby request-rowId and update scrollIndex on scrollTimeStamp receive

  React.useEffect(function () {
    var shouldChangeHighlight = showReqDetail ? autoHighlightChange : true;

    if (scrollTimeStamp && shouldChangeHighlight) {
      var reqIndex = findRequestIndex({
        data: requestData,
        timestamp: scrollTimeStamp,
        position: scrollRequestPosition
      });

      if (reqIndex || reqIndex === 0) {
        updateScrollToIndex(dispatch)(requestData.get(reqIndex));
      }
    }
  }, [scrollTimeStamp, actualData]); // Scroll to request row onChange of scrollToIndex
  // setTimeout is required when reqDetail is visible,
  // it allows DOM to adjust before we scroll it to highlighted request

  React.useEffect(function () {
    if (selectedReqIndex) {
      setTimeout(function () {
        var element = document.getElementById(ROW_ID_PREFIX + selectedReqIndex);

        if (element) {
          element.scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, [selectedReqIndex]);
  return /*#__PURE__*/React__default["default"].createElement(NetworkContext.Provider, _extends({
    value: value
  }, props));
};

NetworkProvider.propTypes = {
  autoHighlightChange: PropTypes__default["default"].bool,
  data: PropTypes__default["default"].object,
  fetchOptions: PropTypes__default["default"].object,
  file: PropTypes__default["default"].string,
  initialState: PropTypes__default["default"].object,
  onDataError: PropTypes__default["default"].func,
  onDataLoaded: PropTypes__default["default"].func,
  scrollRequestPosition: PropTypes__default["default"].oneOf(['before', 'after', 'near']),
  scrollTimeStamp: PropTypes__default["default"].number
};
NetworkProvider.defaultProps = {
  autoHighlightChange: false,
  data: null,
  fetchOptions: {
    withCredentials: true
  },
  file: null,
  initialState: initialState,
  onDataError: null,
  onDataLoaded: null,
  scrollRequestPosition: 'near',
  scrollTimeStamp: null
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$n = ".ImportHAR-styles__drag-drop___vKhrH{align-items:center;border:2px dashed #ccc;border-radius:4px;color:#7f8892;cursor:pointer;display:flex;font-size:18px;height:100%;justify-content:center;margin:1rem;min-height:300px}.ImportHAR-styles__drag-drop___vKhrH:hover{border-color:#bfbfbf;color:#555}";
var Styles$n = {"brandBlue":"#1395f0","drag-drop":"ImportHAR-styles__drag-drop___vKhrH"};
styleInject(css_248z$n);

var css_248z$m = ".Button-styles__btn___i006u{background-color:#1395f0;background-image:none;border:1px solid transparent;border-radius:4px;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-size:1rem;font-weight:400;line-height:1.5;margin:0;padding:11px 32px;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.Button-styles__btn___i006u:hover{text-decoration:none}.Button-styles__btn___i006u:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.Button-styles__btn___i006u[disabled]{border-color:#d8dde3;color:#d8dde3;cursor:not-allowed}.Button-styles__btn___i006u[disabled] svg{fill:#d8dde3}.Button-styles__btn___i006u[disabled]:hover{border-color:#bac3ce}.Button-styles__btn-sm___r4rzq{font-size:.9rem;height:26px;padding:8px 16px}.Button-styles__btn-md-default___yoda3{align-items:center;border-radius:2px;display:inline-flex;font-weight:400;height:36px;letter-spacing:0;line-height:1;overflow:hidden;text-decoration:none;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);vertical-align:middle;will-change:box-shadow}.Button-styles__active___5vR9a.Button-styles__btn-md-default___yoda3,.Button-styles__btn-md-default___yoda3,.Button-styles__btn-md-default___yoda3:active,.Button-styles__btn-md-default___yoda3:disabled,.Button-styles__btn-md-default___yoda3:focus,.Button-styles__btn-md-default___yoda3:hover{background-color:transparent;border-color:transparent;outline:none}.Button-styles__btn-md-default___yoda3:disabled{color:#555}.Button-styles__btn-md-default___yoda3:hover{background-color:hsla(0,0%,62%,.2)}.Button-styles__btn-md-default___yoda3:active{background-color:hsla(0,0%,62%,.4)}.Button-styles__btn-md-default___yoda3:focus:not(:active){background-color:rgba(0,0,0,.12)}.Button-styles__btn-md-default___yoda3 svg{fill:currentColor}.Button-styles__btn-md-raised___QkOvQ{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.Button-styles__btn-md-raised___QkOvQ:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 2px 12px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.Button-styles__btn-md-default___yoda3{color:#7f8892}.Button-styles__btn-md-default-raised___ASbO-{background:#7f8892;color:#fff}.Button-styles__btn-md-default-raised___ASbO-:active,.Button-styles__btn-md-default-raised___ASbO-:focus:not(:active),.Button-styles__btn-md-default-raised___ASbO-:hover{background:#7f8892}.Button-styles__btn-md-default___yoda3.Button-styles__btn-sm___r4rzq{height:26px}";
var Styles$m = {"brandBlue":"#1395f0","btn":"Button-styles__btn___i006u","btn-sm":"Button-styles__btn-sm___r4rzq","btn-md-default":"Button-styles__btn-md-default___yoda3","active":"Button-styles__active___5vR9a","btn-md-raised":"Button-styles__btn-md-raised___QkOvQ","btn-md-default-raised":"Button-styles__btn-md-default-raised___ASbO-"};
styleInject(css_248z$m);

var _excluded = ["category", "children", "className", "disabled", "href", "material", "raised", "size"];
var context$b = classNames__default["default"].bind(Styles$m);

var Button = function Button(_ref) {
  var _context;

  var category = _ref.category,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      href = _ref.href,
      material = _ref.material,
      raised = _ref.raised,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  var combinedClasses = context$b('btn', className, (_context = {}, _defineProperty(_context, "btn-".concat(size), size), _defineProperty(_context, material ? "btn-md-".concat(category) : "btn-".concat(category), true), _defineProperty(_context, "btn-md-".concat(category, "-raised"), raised), _defineProperty(_context, 'btn-md-raised', raised), _context));
  var TagName = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React__default["default"].createElement(TagName, _extends({
    className: combinedClasses,
    disabled: disabled,
    href: href
  }, props), children);
};

Button.propTypes = {
  category: PropTypes__default["default"].oneOf(['default']),
  children: PropTypes__default["default"].node.isRequired,
  className: PropTypes__default["default"].any,
  disabled: PropTypes__default["default"].bool,
  href: PropTypes__default["default"].string,
  material: PropTypes__default["default"].bool,
  raised: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].oneOf([false, 'sm']),
  type: PropTypes__default["default"].oneOf(['submit', 'reset', 'button', 'menu'])
};
Button.defaultProps = {
  category: 'default',
  className: null,
  disabled: false,
  href: null,
  material: false,
  raised: false,
  size: false,
  type: 'button'
};

var DROP_FILE_CONFIG = {
  accept: '.har',
  multiple: false
};

var ImportHar = function ImportHar(_ref) {
  var showButton = _ref.showButton,
      className = _ref.className;

  var _useNetwork = useNetwork(),
      actions = _useNetwork.actions;

  var updateErrorMessage = actions.updateErrorMessage;

  var prepareData = function prepareData(newNetworkData) {
    return actions.updateData({
      entries: newNetworkData.log.entries,
      pages: newNetworkData.log.pages
    });
  };

  var onDrop = function onDrop(files) {
    var reader = new FileReader();

    reader.onabort = function () {
      return updateErrorMessage({
        title: 'file reading was aborted'
      });
    };

    reader.onerror = function () {
      return updateErrorMessage({
        title: 'file reading has failed'
      });
    };

    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        prepareData(data);
      } catch (error) {
        updateErrorMessage({
          title: 'Error while parsing HAR file'
        });
      }
    };

    reader.readAsText(files[0]);
  };

  var _useDropzone = reactDropzone.useDropzone(_objectSpread2(_objectSpread2({}, DROP_FILE_CONFIG), {}, {
    onDrop: onDrop
  })),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  return /*#__PURE__*/React__default["default"].createElement("div", getRootProps(), /*#__PURE__*/React__default["default"].createElement("input", getInputProps()), showButton ? /*#__PURE__*/React__default["default"].createElement(Button, {
    category: "default",
    className: className,
    material: true,
    raised: true,
    size: "sm"
  }, "Import HAR") : /*#__PURE__*/React__default["default"].createElement("p", {
    className: Styles$n['drag-drop']
  }, "Drag and drop HAR file here, or click to select file"));
};

ImportHar.propTypes = {
  className: PropTypes__default["default"].string,
  showButton: PropTypes__default["default"].bool
};
ImportHar.defaultProps = {
  className: null,
  showButton: true
};

var css_248z$l = ".Search-styles__search-container___GWC7-{align-items:stretch;display:flex;flex-wrap:wrap;margin:0;position:relative;width:100%}.Search-styles__search-container___GWC7- .Search-styles__prepend-dropdown___bvOJO{display:flex;margin-right:-1px}.Search-styles__search-container___GWC7- input{background-clip:padding-box;background-color:#fff;border:1px solid #ccc;border-radius:.2rem;border-bottom-left-radius:0;border-top-left-radius:0;color:#646464;flex:1 1 auto;font-size:.875rem;height:26px;line-height:1.5;margin-bottom:0;padding:.25rem .5rem;position:relative;width:1%}";
var Styles$l = {"brandBlue":"#1395f0","search-container":"Search-styles__search-container___GWC7-","prepend-dropdown":"Search-styles__prepend-dropdown___bvOJO"};
styleInject(css_248z$l);

var css_248z$k = ".Dropdown-styles__dropdown-container___933sg{position:relative}.Dropdown-styles__dropdown-container___933sg .Dropdown-styles__dropdown-toggle___tSAvA{border:1px solid #ccc;text-transform:uppercase}.Dropdown-styles__dropdown-container___933sg .Dropdown-styles__dropdown-toggle___tSAvA.Dropdown-styles__active___9Y0hK{border-color:transparent}.Dropdown-styles__dropdown-container___933sg .Dropdown-styles__dropdown-toggle___tSAvA:after{border-bottom:0;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:.3em solid;box-sizing:border-box;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.Dropdown-styles__dropdown-container___933sg .Dropdown-styles__list___oMgsl{background-clip:padding-box;background-color:#fff;border:1px solid #ccc;border-radius:.25rem;color:#212529;float:left;font-size:1rem;left:0;list-style:none;margin:.125rem 0 0;min-width:10rem;padding:0;position:absolute;text-align:left;top:0;transform:translate3d(-1px,23px,0);will-change:transform;z-index:1000}.Dropdown-styles__dropdown-container___933sg .Dropdown-styles__list-item___gX9rd{background:transparent;border:0;clear:both;display:block;font-weight:400;padding:0;text-align:inherit;white-space:nowrap;width:100%}.Dropdown-styles__dropdown-container___933sg .Dropdown-styles__list-item___gX9rd.Dropdown-styles__active___9Y0hK{background:#7f8892;color:#fff}.Dropdown-styles__dropdown-container___933sg .Dropdown-styles__item-text___c-WdT{cursor:pointer;display:block;padding:.25rem 1.5rem;text-transform:uppercase}";
var Styles$k = {"brandBlue":"#1395f0","dropdown-container":"Dropdown-styles__dropdown-container___933sg","dropdown-toggle":"Dropdown-styles__dropdown-toggle___tSAvA","active":"Dropdown-styles__active___9Y0hK","list":"Dropdown-styles__list___oMgsl","list-item":"Dropdown-styles__list-item___gX9rd","item-text":"Dropdown-styles__item-text___c-WdT"};
styleInject(css_248z$k);

var context$a = classNames__default["default"].bind(Styles$k);

var Dropdown = function Dropdown(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange,
      className = _ref.className;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isExpand = _useState2[0],
      setExpand = _useState2[1];

  var _useState3 = React.useState(selected !== null ? selected : items[0]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedKey = _useState4[0],
      setSelection = _useState4[1];

  var dropdownItemsRef = React.useRef(null);
  var isExpandRef = React.useRef(isExpand);

  var updateToggle = function updateToggle(toggleState) {
    setExpand(toggleState);
    isExpandRef.current = toggleState;
  };

  var handleItemSelection = function handleItemSelection(key) {
    setSelection(key);
    onChange(key);
    updateToggle(false);
  };

  var removeFocus = function removeFocus(_ref2) {
    var target = _ref2.target;

    if (isExpandRef.current && !dropdownItemsRef.current.contains(target)) {
      updateToggle(false);
    }
  };

  React.useEffect(function () {
    window.addEventListener('click', removeFocus);
    return function () {
      window.removeEventListener('click', removeFocus);
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    ref: dropdownItemsRef,
    className: context$a('dropdown-container', className, {
      expanded: isExpand
    })
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    category: "default",
    className: context$a('dropdown-toggle', {
      active: isExpand
    }),
    material: true,
    onClick: function onClick() {
      return updateToggle(!isExpand);
    },
    raised: isExpand,
    size: "sm"
  }, selectedKey), isExpand && /*#__PURE__*/React__default["default"].createElement("ul", {
    className: Styles$k.list
  }, items.map(function (text, index) {
    return /*#__PURE__*/React__default["default"].createElement("li", {
      key: text,
      className: context$a('list-item', {
        active: text === selectedKey
      })
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$k['item-text'],
      onClick: function onClick() {
        return handleItemSelection(text);
      },
      role: "button",
      tabIndex: index
    }, text));
  })));
};

Dropdown.propTypes = {
  className: PropTypes__default["default"].string,
  items: PropTypes__default["default"].array.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  selected: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
};
Dropdown.defaultProps = {
  className: null,
  selected: null
};

// @ts-nocheck
var SEARCH_CATEGORY = ['url', 'body'];

var Search = function Search(_ref) {
  var name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange;

  var handleInputChange = function handleInputChange(_ref2) {
    var target = _ref2.target;
    onChange({
      name: name,
      value: target.value
    });
  };

  var handleDropdownChange = function handleDropdownChange(selectedKey) {
    onChange({
      name: selectedKey,
      value: value
    });
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$l['search-container']
  }, /*#__PURE__*/React__default["default"].createElement(Dropdown, {
    className: Styles$l['prepend-dropdown'],
    items: SEARCH_CATEGORY,
    onChange: handleDropdownChange,
    selected: "url"
  }), /*#__PURE__*/React__default["default"].createElement("input", {
    className: Styles$l.input,
    onChange: handleInputChange,
    placeholder: "Filter",
    type: "text",
    value: value
  }));
};

Search.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  value: PropTypes__default["default"].string
};
Search.defaultProps = {
  value: ''
};

var css_248z$j = ".FilterContainer-styles__filters-container___c6XjX{background:#f7f7f7;border-bottom:1px solid #ccc;padding:8px 16px}.FilterContainer-styles__filters-button-group___7KFvT{display:inline-flex;justify-content:flex-end;vertical-align:middle;width:100%}.FilterContainer-styles__filters-button-group___7KFvT .FilterContainer-styles__addon-action-button___oqAMM,.FilterContainer-styles__filters-button-group___7KFvT .FilterContainer-styles__filter-button___gZgso{flex:1 1 auto;justify-content:center;padding:.25rem .5rem}.FilterContainer-styles__filters-button-group___7KFvT .FilterContainer-styles__filter-button___gZgso{color:#7f8892}.FilterContainer-styles__filters-button-group___7KFvT .FilterContainer-styles__addon-action-button___oqAMM{margin-left:16px}.FilterContainer-styles__filters-button-group___7KFvT .FilterContainer-styles__selected-filter___sqMKo{background:#ccc!important;box-shadow:none}";
var Styles$j = {"brandBlue":"#1395f0","filters-container":"FilterContainer-styles__filters-container___c6XjX","filters-button-group":"FilterContainer-styles__filters-button-group___7KFvT","filter-button":"FilterContainer-styles__filter-button___gZgso","addon-action-button":"FilterContainer-styles__addon-action-button___oqAMM","selected-filter":"FilterContainer-styles__selected-filter___sqMKo"};
styleInject(css_248z$j);

var ThemeContext = /*#__PURE__*/React__default["default"].createContext(NETWORK_VIEWER_DEFAULT_OPTIONS);
var useTheme = function useTheme() {
  var context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeContext');
  }

  return context;
};
var ThemeProvider = function ThemeProvider(props) {
  var options = props.options;

  var finalOptions = _objectSpread2(_objectSpread2({}, NETWORK_VIEWER_DEFAULT_OPTIONS), options);

  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.Provider, _extends({
    value: finalOptions
  }, props));
};
ThemeProvider.propTypes = {
  options: PropTypes__default["default"].object
};
ThemeProvider.defaultProps = {
  options: NETWORK_VIEWER_DEFAULT_OPTIONS
};

var css_248z$i = ".Checkbox-styles__checkbox-container___2RoHJ{min-width:110px;padding:2px 0 0 24px;text-align:right}.Checkbox-styles__checkbox-container___2RoHJ .Checkbox-styles__checkbox-label___RdNrQ{color:#7f8892;cursor:pointer;font-style:normal;font-weight:400;margin:0;text-transform:none}.Checkbox-styles__checkbox-container___2RoHJ .Checkbox-styles__checkbox___sPvLj{cursor:pointer;margin-right:4px}";
var Styles$i = {"brandBlue":"#1395f0","checkbox-container":"Checkbox-styles__checkbox-container___2RoHJ","checkbox-label":"Checkbox-styles__checkbox-label___RdNrQ","checkbox":"Checkbox-styles__checkbox___sPvLj"};
styleInject(css_248z$i);

// @ts-nocheck
var context$9 = classNames__default["default"].bind(Styles$i);

var Checkbox = function Checkbox(_ref) {
  var containerClassName = _ref.containerClassName,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: context$9('checkbox-container', containerClassName)
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: Styles$i['checkbox-label'],
    title: title
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    checked: isChecked,
    className: Styles$i.checkbox,
    onChange: onChange,
    type: "checkbox"
  }), children));
};

Checkbox.propTypes = {
  children: PropTypes__default["default"].any.isRequired,
  containerClassName: PropTypes__default["default"].string,
  isChecked: PropTypes__default["default"].bool,
  onChange: PropTypes__default["default"].func.isRequired,
  title: PropTypes__default["default"].string
};
Checkbox.defaultProps = {
  containerClassName: '',
  isChecked: false,
  title: ''
};

// @ts-nocheck

var ErrorFilter = function ErrorFilter(_ref) {
  var isError = _ref.isError,
      onChange = _ref.onChange;

  var handleChange = function handleChange() {
    onChange(!isError);
  };

  return /*#__PURE__*/React__default["default"].createElement(Checkbox, {
    isChecked: isError,
    onChange: handleChange,
    title: "error"
  }, "Errors Only");
};

ErrorFilter.propTypes = {
  isError: PropTypes__default["default"].bool.isRequired,
  onChange: PropTypes__default["default"].func.isRequired
};

// @ts-nocheck

var Reset = function Reset(_ref) {
  var className = _ref.className,
      onReset = _ref.onReset;

  var handleURLReset = function handleURLReset() {
    window.history.pushState({}, document.title, '/');
  };

  var handleReset = function handleReset() {
    handleURLReset();
    onReset();
  };

  return /*#__PURE__*/React__default["default"].createElement(Button, {
    category: "default",
    className: className,
    material: true,
    onClick: handleReset,
    raised: true,
    size: "sm"
  }, "Reset");
};

Reset.propTypes = {
  className: PropTypes__default["default"].string,
  onReset: PropTypes__default["default"].func.isRequired
};
Reset.defaultProps = {
  className: ''
};

var context$8 = classNames__default["default"].bind(Styles$j);

var FilterContainer = function FilterContainer() {
  var _useNetwork = useNetwork(),
      state = _useNetwork.state,
      actions = _useNetwork.actions;

  var _useTheme = useTheme(),
      showImportHAR = _useTheme.showImportHAR;

  var filter = state.get('filter');
  var filterByError = state.get('errorFilter');
  return /*#__PURE__*/React__default["default"].createElement("section", {
    className: Styles$j['filters-container']
  }, /*#__PURE__*/React__default["default"].createElement(reactFlexboxGrid.Row, null, /*#__PURE__*/React__default["default"].createElement(reactFlexboxGrid.Col, {
    md: 5,
    sm: 4,
    xs: 12
  }, /*#__PURE__*/React__default["default"].createElement(Search, _extends({}, state.get('search'), {
    onChange: actions.updateSearch
  }))), /*#__PURE__*/React__default["default"].createElement(reactFlexboxGrid.Col, {
    md: 7,
    sm: 8,
    xs: 12
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$j['filters-button-group']
  }, FILTERS.map(function (_ref) {
    var name = _ref.name,
        filterBy = _ref.filterBy;
    var selectedFilter = filterBy.value === filter.value;
    var buttonStyle = context$8('filter-button', {
      'selected-filter': selectedFilter
    });
    return /*#__PURE__*/React__default["default"].createElement(Button, {
      key: name,
      category: "default",
      className: buttonStyle,
      material: true,
      onClick: function onClick() {
        return actions.updateFilter(filterBy);
      },
      raised: selectedFilter,
      size: "sm"
    }, name);
  }), /*#__PURE__*/React__default["default"].createElement(ErrorFilter, {
    isError: filterByError,
    onChange: actions.updateErrorFilter
  }), showImportHAR && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ImportHar, {
    className: Styles$j['addon-action-button']
  }), /*#__PURE__*/React__default["default"].createElement(Reset, {
    className: Styles$j['addon-action-button'],
    onReset: actions.resetState
  }))))));
};

var css_248z$h = ".NetworkTableHeader-styles__value-cell___DGE7c .NetworkTableHeader-styles__value-text___lDrlz{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.NetworkTableHeader-styles__thead___7cRKo tr th{height:32px;text-align:left}.NetworkTableHeader-styles__value-cell___DGE7c{box-sizing:border-box;height:32px;width:7%}.NetworkTableHeader-styles__value-cell___DGE7c.NetworkTableHeader-styles__filename___lFfqP{width:30%}.NetworkTableHeader-styles__value-cell___DGE7c.NetworkTableHeader-styles__domain___OyKBe{max-width:10%}.NetworkTableHeader-styles__value-cell___DGE7c .NetworkTableHeader-styles__value-text___lDrlz{display:inline-block;width:100%}.NetworkTableHeader-styles__timeline-header___bOb6v{width:25%}tbody .NetworkTableHeader-styles__network-table-row___kCj0w{cursor:pointer}tbody .NetworkTableHeader-styles__network-table-row___kCj0w:nth-of-type(odd){background-color:#f7f7f7}tbody .NetworkTableHeader-styles__network-table-row___kCj0w.NetworkTableHeader-styles__pending___0b1Tu{color:#aaa}tbody .NetworkTableHeader-styles__network-table-row___kCj0w.NetworkTableHeader-styles__error___-tX9Y{color:#eb3f47}tbody .NetworkTableHeader-styles__network-table-row___kCj0w:hover{background:#e6e6e6}tbody .NetworkTableHeader-styles__network-table-row___kCj0w.NetworkTableHeader-styles__highlight___SlvFb{background:#5c7288;color:#fff}.NetworkTableHeader-styles__tooltip___3aS8o,.NetworkTableHeader-styles__url-tooltip___Y9Ald{background:#fff;border:1px solid #e6e6e6;border-radius:3px;color:#333;display:block;font-size:12px;height:auto;max-width:300px;opacity:1;padding:8px;width:auto;word-break:break-all}.NetworkTableHeader-styles__url-tooltip___Y9Ald{background:#000;color:#fff}";
var Styles$h = {"brandBlue":"#1395f0","value-cell":"NetworkTableHeader-styles__value-cell___DGE7c","value-text":"NetworkTableHeader-styles__value-text___lDrlz","thead":"NetworkTableHeader-styles__thead___7cRKo","filename":"NetworkTableHeader-styles__filename___lFfqP","domain":"NetworkTableHeader-styles__domain___OyKBe","timeline-header":"NetworkTableHeader-styles__timeline-header___bOb6v","network-table-row":"NetworkTableHeader-styles__network-table-row___kCj0w","pending":"NetworkTableHeader-styles__pending___0b1Tu","error":"NetworkTableHeader-styles__error___-tX9Y","highlight":"NetworkTableHeader-styles__highlight___SlvFb","tooltip":"NetworkTableHeader-styles__tooltip___3aS8o","url-tooltip":"NetworkTableHeader-styles__url-tooltip___Y9Ald"};
styleInject(css_248z$h);

var context$7 = classNames__default["default"].bind(Styles$h);

var NetworkTableHeader = function NetworkTableHeader() {
  return /*#__PURE__*/React__default["default"].createElement("thead", {
    className: Styles$h.thead
  }, /*#__PURE__*/React__default["default"].createElement("tr", null, Object.entries(VIEWER_FIELDS).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        datakey = _ref2[0],
        _ref2$ = _ref2[1],
        key = _ref2$.key,
        name = _ref2$.name;

    return /*#__PURE__*/React__default["default"].createElement("th", {
      key: datakey,
      className: context$7('value-cell', key)
    }, name);
  }), /*#__PURE__*/React__default["default"].createElement("th", {
    className: Styles$h['timeline-header']
  }, "Waterfall")));
};

var css_248z$g = ".TimeChartTooltip-styles__tooltip___zFYMC{background:#fff;border:1px solid #ccc;border-radius:3px;color:#555;display:block;font-size:12px;height:auto;opacity:1;padding:8px;width:300px}.Popover-tip{display:none}.TimeChartTooltip-styles__tooltip-info___Rqg2g{margin-bottom:16px}.TimeChartTooltip-styles__tooltip-info___Rqg2g .TimeChartTooltip-styles__time-info___JcI0E{margin:0}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y{border:0;width:100%}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-th___m-V0S,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-value___Rnz-6,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-th___m-V0S,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-value___Rnz-6{background:transparent;border:0;font-weight:400;padding:0;text-align:left}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-value___Rnz-6,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-value___Rnz-6{text-align:right}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-tr___qvMl1:nth-of-type(odd),.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-tr___qvMl1:nth-of-type(odd){background-color:#fff}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ{font-weight:700;padding:0 16px;position:relative}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ:before,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ:before{content:\"\";height:8px;left:0;position:absolute;top:4px;width:8px}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__blocked___QhwV0,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__blocked___QhwV0{color:#a1000c}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__blocked___QhwV0:before,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__blocked___QhwV0:before{background:#a1000c}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__dns___szlqD,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__dns___szlqD{color:#dcc9e5}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__dns___szlqD:before,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__dns___szlqD:before{background:#dcc9e5}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__ssl___mf6p1,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__ssl___mf6p1{color:#e78057}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__ssl___mf6p1:before,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__ssl___mf6p1:before{background:#e78057}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__connect___2fIv5,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__connect___2fIv5{color:#db8553}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__connect___2fIv5:before,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__connect___2fIv5:before{background:#db8553}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__send___iZcrq,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__send___iZcrq{color:#3c96c4}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__send___iZcrq:before,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__send___iZcrq:before{background:#3c96c4}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__wait___RX5sY,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__wait___RX5sY{color:#7ca0bf}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__wait___RX5sY:before,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__wait___RX5sY:before{background:#7ca0bf}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__receive___xkBHX,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__receive___xkBHX{color:#65b955}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__receive___xkBHX:before,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__receive___xkBHX:before{background:#65b955}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__queueing___fYnbb,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__queueing___fYnbb{color:#ccc}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__queueing___fYnbb:before,.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ.TimeChartTooltip-styles__queueing___fYnbb:before{background:#ccc}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-th___m-V0S{color:gray;padding-bottom:8px}.TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y .TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ .TimeChartTooltip-styles__waterfall-tooltip-th___m-V0S:nth-child(2){text-align:right}";
var Styles$g = {"brandBlue":"#1395f0","tooltip":"TimeChartTooltip-styles__tooltip___zFYMC","tooltip-info":"TimeChartTooltip-styles__tooltip-info___Rqg2g","time-info":"TimeChartTooltip-styles__time-info___JcI0E","waterfall-tooltip-table":"TimeChartTooltip-styles__waterfall-tooltip-table___4X09Y","waterfall-tooltip-tbody":"TimeChartTooltip-styles__waterfall-tooltip-tbody___AGrYb","waterfall-tooltip-value":"TimeChartTooltip-styles__waterfall-tooltip-value___Rnz-6","waterfall-tooltip-key":"TimeChartTooltip-styles__waterfall-tooltip-key___p55DQ","waterfall-tooltip-th":"TimeChartTooltip-styles__waterfall-tooltip-th___m-V0S","waterfall-tooltip-thead":"TimeChartTooltip-styles__waterfall-tooltip-thead___DA8SQ","waterfall-tooltip-tr":"TimeChartTooltip-styles__waterfall-tooltip-tr___qvMl1","blocked":"TimeChartTooltip-styles__blocked___QhwV0","dns":"TimeChartTooltip-styles__dns___szlqD","ssl":"TimeChartTooltip-styles__ssl___mf6p1","connect":"TimeChartTooltip-styles__connect___2fIv5","send":"TimeChartTooltip-styles__send___iZcrq","wait":"TimeChartTooltip-styles__wait___RX5sY","receive":"TimeChartTooltip-styles__receive___xkBHX","queueing":"TimeChartTooltip-styles__queueing___fYnbb"};
styleInject(css_248z$g);

// @ts-nocheck
var context$6 = classNames__default["default"].bind(Styles$g);
var DETAIL = [{
  title: 'Resource Scheduling',
  category: ['queueing']
}, {
  title: 'Connection Start',
  category: ['blocked', 'dns', 'ssl', 'connect']
}, {
  title: 'Request/Response',
  category: ['send', 'wait', 'receive']
}];

var TimeChartTooltip = function TimeChartTooltip(_ref) {
  var data = _ref.data;
  var tooltipData = React.useMemo(function () {
    return !data ? null : prepareTooltipData(data);
  }, [data]);

  if (!tooltipData) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$g.tooltip
  }, /*#__PURE__*/React__default["default"].createElement("section", {
    className: Styles$g['tooltip-info']
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: Styles$g['time-info']
  }, "Queued at ".concat(tooltipData.queuedAt)), /*#__PURE__*/React__default["default"].createElement("p", {
    className: Styles$g['time-info']
  }, "Started at ".concat(tooltipData.startedAt))), DETAIL.map(function (_ref2) {
    var title = _ref2.title,
        category = _ref2.category;
    return /*#__PURE__*/React__default["default"].createElement("section", {
      key: title,
      className: Styles$g['tooltip-info']
    }, /*#__PURE__*/React__default["default"].createElement("table", {
      className: Styles$g['waterfall-tooltip-table']
    }, /*#__PURE__*/React__default["default"].createElement("thead", {
      className: Styles$g['waterfall-tooltip-thead']
    }, /*#__PURE__*/React__default["default"].createElement("tr", {
      className: Styles$g['waterfall-tooltip-tr']
    }, /*#__PURE__*/React__default["default"].createElement("th", {
      className: Styles$g['waterfall-tooltip-th']
    }, title), /*#__PURE__*/React__default["default"].createElement("th", {
      className: Styles$g['waterfall-tooltip-th']
    }, "DURATION"))), /*#__PURE__*/React__default["default"].createElement("tbody", {
      className: Styles$g['waterfall-tooltip-tbody']
    }, category.map(function (key) {
      return /*#__PURE__*/React__default["default"].createElement("tr", {
        key: key,
        className: Styles$g['waterfall-tooltip-tr']
      }, /*#__PURE__*/React__default["default"].createElement("td", {
        className: context$6('waterfall-tooltip-key', key)
      }, TIMINGS[key].name), /*#__PURE__*/React__default["default"].createElement("td", {
        className: Styles$g['waterfall-tooltip-value']
      }, tooltipData[TIMINGS[key].dataKey]));
    }))));
  }), /*#__PURE__*/React__default["default"].createElement("section", {
    className: Styles$g['tooltip-info']
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: Styles$g['time-info']
  }, "Total time ".concat(tooltipData.totalTime))));
};

TimeChartTooltip.propTypes = {
  data: PropTypes__default["default"].object.isRequired
};

var TimeChart = function TimeChart(_ref) {
  var timings = _ref.timings,
      maxTime = _ref.maxTime;
  var chartAttributes = React.useMemo(function () {
    return calcChartAttributes(timings, maxTime);
  }, [timings, maxTime]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      updateOpen = _useState2[1];

  var displayPopover = function displayPopover() {
    return updateOpen(true);
  };

  var hidePopover = function hidePopover() {
    return updateOpen(false);
  };

  return /*#__PURE__*/React__default["default"].createElement(Popover__default["default"], {
    body: /*#__PURE__*/React__default["default"].createElement(TimeChartTooltip, {
      data: timings
    }),
    isOpen: isOpen,
    preferPlace: "below"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    onMouseOut: hidePopover,
    onMouseOver: displayPopover
  }, /*#__PURE__*/React__default["default"].createElement("svg", TIME_CHART_SVG_PROPS, /*#__PURE__*/React__default["default"].createElement("g", null, chartAttributes.map(function (chartProps) {
    return /*#__PURE__*/React__default["default"].createElement("rect", _extends({
      key: chartProps.key
    }, chartProps, TIME_CHART_DEFAULT_PROPS));
  })))));
};

TimeChart.propTypes = {
  maxTime: PropTypes__default["default"].number.isRequired,
  timings: PropTypes__default["default"].object.isRequired
};

var context$5 = classNames__default["default"].bind(Styles$h);

var NetworkCellValue = function NetworkCellValue(_ref) {
  var datakey = _ref.datakey,
      unit = _ref.unit,
      payload = _ref.payload;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      updateOpen = _useState2[1];

  var displayPopover = function displayPopover() {
    return updateOpen(true);
  };

  var hidePopover = function hidePopover() {
    return updateOpen(false);
  };

  var formattedValue = formatValue(datakey, payload[datakey], unit, payload);
  var shouldDisplayTooltip = datakey === VIEWER_FIELDS.file.key || payload.error;

  var getTitle = function getTitle() {
    if (datakey === VIEWER_FIELDS.file.key) {
      return payload.url;
    }

    if (payload.error) {
      return payload.error;
    }

    return formattedValue;
  };

  if (!shouldDisplayTooltip) {
    return /*#__PURE__*/React__default["default"].createElement("td", {
      className: context$5('value-cell', datakey)
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$h['value-text']
    }, formattedValue));
  }

  return /*#__PURE__*/React__default["default"].createElement("td", {
    className: context$5('value-cell', datakey)
  }, /*#__PURE__*/React__default["default"].createElement(Popover__default["default"], {
    body: /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$h['url-tooltip']
    }, getTitle()),
    isOpen: isOpen,
    preferPlace: "below"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: Styles$h['value-text'],
    onMouseOut: hidePopover,
    onMouseOver: displayPopover
  }, formattedValue)));
};

NetworkCellValue.propTypes = {
  datakey: PropTypes__default["default"].string.isRequired,
  payload: PropTypes__default["default"].object,
  unit: PropTypes__default["default"].string
};
NetworkCellValue.defaultProps = {
  payload: {},
  unit: null
};

var context$4 = classNames__default["default"].bind(Styles$h);

var NetworkTableRow = function NetworkTableRow(_ref) {
  var payload = _ref.payload,
      maxTime = _ref.maxTime,
      scrollHighlight = _ref.scrollHighlight,
      onSelect = _ref.onSelect;

  var handleSelectRequest = function handleSelectRequest() {
    onSelect(payload);
  };

  var rowProps = {
    className: context$4('network-table-row', getStatusClass(payload), {
      highlight: scrollHighlight
    }),
    id: ROW_ID_PREFIX + payload.index,
    onClick: handleSelectRequest
  };
  return /*#__PURE__*/React__default["default"].createElement("tr", rowProps, Object.entries(VIEWER_FIELDS).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        datakey = _ref3[0],
        _ref3$ = _ref3[1],
        key = _ref3$.key,
        unit = _ref3$.unit;

    return /*#__PURE__*/React__default["default"].createElement(NetworkCellValue, {
      key: datakey,
      datakey: key,
      payload: payload,
      unit: unit
    });
  }), /*#__PURE__*/React__default["default"].createElement("td", {
    className: Styles$h['timeline-header']
  }, payload.time ? /*#__PURE__*/React__default["default"].createElement(TimeChart, {
    maxTime: maxTime,
    timings: payload.timings
  }) : ''));
};

NetworkTableRow.propTypes = {
  maxTime: PropTypes__default["default"].number.isRequired,
  onSelect: PropTypes__default["default"].func.isRequired,
  payload: PropTypes__default["default"].object.isRequired,
  scrollHighlight: PropTypes__default["default"].bool.isRequired
};

var css_248z$f = ".NetworkTableContainer-styles__table-container___x-g7A{flex:1 1 auto;height:100%;overflow:auto}.NetworkTableContainer-styles__table-container___x-g7A.NetworkTableContainer-styles__limited-cols___KMDGB{max-width:300px}.NetworkTableContainer-styles__table-container___x-g7A.NetworkTableContainer-styles__limited-cols___KMDGB .NetworkTableContainer-styles__table___b7Qxa td,.NetworkTableContainer-styles__table-container___x-g7A.NetworkTableContainer-styles__limited-cols___KMDGB .NetworkTableContainer-styles__table___b7Qxa th{border-right:0}.NetworkTableContainer-styles__table-container___x-g7A.NetworkTableContainer-styles__limited-cols___KMDGB .NetworkTableContainer-styles__table___b7Qxa td:first-child,.NetworkTableContainer-styles__table-container___x-g7A.NetworkTableContainer-styles__limited-cols___KMDGB .NetworkTableContainer-styles__table___b7Qxa thead tr th:first-child{width:100%}.NetworkTableContainer-styles__table-container___x-g7A.NetworkTableContainer-styles__limited-cols___KMDGB .NetworkTableContainer-styles__table___b7Qxa td:first-child~td,.NetworkTableContainer-styles__table-container___x-g7A.NetworkTableContainer-styles__limited-cols___KMDGB .NetworkTableContainer-styles__table___b7Qxa th:first-child~th{display:none}.NetworkTableContainer-styles__table-container___x-g7A .NetworkTableContainer-styles__table___b7Qxa{border-collapse:collapse;border-right:0;table-layout:fixed;width:100%}.NetworkTableContainer-styles__table-container___x-g7A .NetworkTableContainer-styles__table___b7Qxa td,.NetworkTableContainer-styles__table-container___x-g7A .NetworkTableContainer-styles__table___b7Qxa th{padding:.3rem}.NetworkTableContainer-styles__table-container___x-g7A .NetworkTableContainer-styles__table___b7Qxa thead th{color:#aaa;vertical-align:bottom}";
var Styles$f = {"brandBlue":"#1395f0","table-container":"NetworkTableContainer-styles__table-container___x-g7A","limited-cols":"NetworkTableContainer-styles__limited-cols___KMDGB","table":"NetworkTableContainer-styles__table___b7Qxa"};
styleInject(css_248z$f);

var css_248z$e = ".ErrorMessage-styles__error-container___ASUzB{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:1rem;width:100%}.ErrorMessage-styles__error-container___ASUzB .ErrorMessage-styles__title___Bpv51{color:red;font-weight:300}";
var Styles$e = {"error-container":"ErrorMessage-styles__error-container___ASUzB","title":"ErrorMessage-styles__title___Bpv51"};
styleInject(css_248z$e);

// @ts-nocheck

var ErrorMessage = function ErrorMessage(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$e['error-container']
  }, title && /*#__PURE__*/React__default["default"].createElement("h4", {
    className: Styles$e.title
  }, title), description && /*#__PURE__*/React__default["default"].createElement("p", null, description));
};

ErrorMessage.propTypes = {
  description: PropTypes__default["default"].any,
  title: PropTypes__default["default"].any
};
ErrorMessage.defaultProps = {
  description: null,
  title: null
};

var css_248z$d = ".InputHAR-styles__input-har-container___6-ZHc{align-items:center;color:#7f8892;display:flex;flex-direction:column;margin:1rem}.InputHAR-styles__input-har-container___6-ZHc .InputHAR-styles__input-har-text___sj2wP{font-size:18px;font-weight:400}.InputHAR-styles__input-har-container___6-ZHc .InputHAR-styles__example-url___eRWW3{padding-left:4px;text-decoration:none}";
var Styles$d = {"brandBlue":"#1395f0","input-har-container":"InputHAR-styles__input-har-container___6-ZHc","input-har-text":"InputHAR-styles__input-har-text___sj2wP","example-url":"InputHAR-styles__example-url___eRWW3"};
styleInject(css_248z$d);

var css_248z$c = ".URLInput-styles__url-input-container___fI2ck{align-items:stretch;display:flex;flex-wrap:wrap;margin:0;max-width:992px;position:relative;width:100%}.URLInput-styles__url-input-container___fI2ck .URLInput-styles__postpend-button___esJj8{display:flex;height:auto;margin-left:-1px}.URLInput-styles__url-input-container___fI2ck .URLInput-styles__input___z4uBo{background-clip:padding-box;background-color:#fff;border:1px solid #ccc;border-radius:.2rem;border-bottom-right-radius:0;border-top-right-radius:0;color:#646464;flex:1 1 auto;font-size:.875rem;height:26px;line-height:1.5;margin-bottom:0;padding:.25rem .5rem;position:relative;width:1%}";
var Styles$c = {"brandBlue":"#1395f0","url-input-container":"URLInput-styles__url-input-container___fI2ck","postpend-button":"URLInput-styles__postpend-button___esJj8","input":"URLInput-styles__input___z4uBo"};
styleInject(css_248z$c);

var css_248z$b = ".CORSCheckbox-styles__cors-container___Kwuij{align-items:center;display:flex;min-width:50px;padding:0 1rem 0 0;width:auto}";
var Styles$b = {"cors-container":"CORSCheckbox-styles__cors-container___Kwuij"};
styleInject(css_248z$b);

// @ts-nocheck

var CORSCheckbox = function CORSCheckbox(_ref) {
  var isEnabled = _ref.isEnabled,
      onChange = _ref.onChange;

  var handleChange = function handleChange() {
    onChange(!isEnabled);
  };

  return /*#__PURE__*/React__default["default"].createElement(Checkbox, {
    containerClassName: Styles$b['cors-container'],
    isChecked: isEnabled,
    onChange: handleChange,
    title: "CORS Enable"
  }, "CORS");
};

CORSCheckbox.propTypes = {
  isEnabled: PropTypes__default["default"].bool.isRequired,
  onChange: PropTypes__default["default"].func.isRequired
};

var URLInput = function URLInput(_ref) {
  var onSubmit = _ref.onSubmit;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setURL = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isCORSEnabled = _useState4[0],
      setCORS = _useState4[1];

  var handleInputChange = function handleInputChange(_ref2) {
    var target = _ref2.target;
    setURL(target.value);
  };

  var handleSubmit = function handleSubmit() {
    onSubmit({
      file: url,
      isCORSEnabled: isCORSEnabled
    });
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$c['url-input-container']
  }, /*#__PURE__*/React__default["default"].createElement(CORSCheckbox, {
    isEnabled: isCORSEnabled,
    onChange: setCORS
  }), /*#__PURE__*/React__default["default"].createElement("input", {
    className: Styles$c.input,
    onChange: handleInputChange,
    placeholder: "HAR file URL",
    type: "text",
    value: url
  }), /*#__PURE__*/React__default["default"].createElement(Button, {
    category: "default",
    className: Styles$c['postpend-button'],
    material: true,
    onClick: handleSubmit,
    raised: true,
    size: "sm"
  }, "GO"));
};

URLInput.propTypes = {
  onSubmit: PropTypes__default["default"].func.isRequired
};

// @ts-nocheck
var SAMPLE_HAR_URL = 'https://raw.githubusercontent.com/saucelabs/zipy-web-network/main/examples/src/data/network.har';

var InputHAR = function InputHAR() {
  var handleURLSubmit = function handleURLSubmit(fetchInfo) {
    var _document$location = document.location,
        origin = _document$location.origin,
        pathname = _document$location.pathname;
    var newURL = "".concat(origin).concat(pathname, "?").concat(qs.stringify(fetchInfo));
    document.location.href = newURL;
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$d['input-har-container']
  }, /*#__PURE__*/React__default["default"].createElement("h4", {
    className: Styles$d['input-har-text']
  }, "OR add HAR file URL in the below input box"), /*#__PURE__*/React__default["default"].createElement(URLInput, {
    onSubmit: handleURLSubmit
  }), /*#__PURE__*/React__default["default"].createElement("p", null, /*#__PURE__*/React__default["default"].createElement("span", null, "For Example use this har file"), /*#__PURE__*/React__default["default"].createElement("a", {
    className: Styles$d['example-url'],
    href: SAMPLE_HAR_URL,
    rel: "noopener noreferrer",
    target: "_blank"
  }, SAMPLE_HAR_URL)));
};

// @ts-nocheck
var context$3 = classNames__default["default"].bind(Styles$f);

var NetworkTableContainer = function NetworkTableContainer(_ref) {
  var onRequestSelect = _ref.onRequestSelect;

  var _useNetwork = useNetwork(),
      state = _useNetwork.state,
      actions = _useNetwork.actions;

  var _useTheme = useTheme(),
      showImportHAR = _useTheme.showImportHAR;

  var actualData = state.get('actualData');
  var data = state.get('data');
  var totalNetworkTime = state.get('totalNetworkTime');
  var error = state.get('error');
  var selectedReqIndex = state.get('selectedReqIndex');
  var showReqDetail = state.get('showReqDetail');
  var containerClassName = context$3('table-container', {
    'limited-cols': showReqDetail
  });

  var handleReqSelect = function handleReqSelect(payload) {
    actions.updateScrollToIndex(payload.index);
    actions.selectRequest(payload);
    onRequestSelect(payload);
  };

  if (error) {
    return /*#__PURE__*/React__default["default"].createElement(ErrorMessage, error);
  }

  if (!actualData.size) {
    return /*#__PURE__*/React__default["default"].createElement("section", {
      className: Styles$f['table-container']
    }, showImportHAR && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ImportHar, {
      showButton: false
    }), /*#__PURE__*/React__default["default"].createElement(InputHAR, null)));
  }

  return /*#__PURE__*/React__default["default"].createElement("section", {
    className: containerClassName
  }, /*#__PURE__*/React__default["default"].createElement("table", {
    className: Styles$f.table
  }, /*#__PURE__*/React__default["default"].createElement(NetworkTableHeader, null), /*#__PURE__*/React__default["default"].createElement("tbody", {
    className: Styles$f['table-content']
  }, Array.from(data).map(function (rowInfo) {
    return /*#__PURE__*/React__default["default"].createElement(NetworkTableRow, {
      key: rowInfo.index,
      maxTime: totalNetworkTime,
      onSelect: handleReqSelect,
      payload: rowInfo,
      scrollHighlight: selectedReqIndex === rowInfo.index
    });
  }))));
};

NetworkTableContainer.propTypes = {
  onRequestSelect: PropTypes__default["default"].func
};
NetworkTableContainer.defaultProps = {
  onRequestSelect: function onRequestSelect() {}
};

var css_248z$a = ".LoaderContainer-styles__loader-container___AHhio{align-items:center;display:flex;justify-content:center;min-height:200px}.LoaderContainer-styles__spin___o3cfV{height:3rem;line-height:0;transform:translateZ(0);width:3rem}.LoaderContainer-styles__spin___o3cfV svg{-webkit-animation:LoaderContainer-styles__load___fgzl4 1.4s linear infinite;animation:LoaderContainer-styles__load___fgzl4 1.4s linear infinite}.LoaderContainer-styles__text___zYFWq{padding-left:15px}@-webkit-keyframes LoaderContainer-styles__load___fgzl4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes LoaderContainer-styles__load___fgzl4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";
var Styles$a = {"loader-container":"LoaderContainer-styles__loader-container___AHhio","spin":"LoaderContainer-styles__spin___o3cfV","load":"LoaderContainer-styles__load___fgzl4","text":"LoaderContainer-styles__text___zYFWq"};
styleInject(css_248z$a);

// @ts-nocheck

var LoaderContainer = function LoaderContainer(_ref) {
  var children = _ref.children,
      show = _ref.show,
      text = _ref.text;
  var spinnerColor = Styles$a.brandBlue;
  var uniqueId = "Gradient-".concat(Math.round(Math.random() * 10000000));
  return !show ? children : /*#__PURE__*/React__default["default"].createElement("section", {
    className: Styles$a['loader-container']
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$a.spin
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("linearGradient", {
    id: uniqueId
  }, /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: "0%",
    stopColor: spinnerColor
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: "75%",
    stopColor: spinnerColor,
    stopOpacity: "0"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: "100%",
    stopColor: spinnerColor,
    stopOpacity: "0"
  }))), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "transparent",
    r: "43",
    stroke: "url(#".concat(uniqueId, ")"),
    strokeWidth: "14"
  }))), text && /*#__PURE__*/React__default["default"].createElement("p", {
    className: Styles$a.text
  }, text));
};

LoaderContainer.propTypes = {
  children: PropTypes__default["default"].node,
  show: PropTypes__default["default"].bool,
  text: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].node])
};
LoaderContainer.defaultProps = {
  children: null,
  show: true,
  text: null
};

var css_248z$9 = ".ReqDetailContainer-styles__req-detail-container___ZyLd3{background:#fff;border-left:1px solid #ccc;flex:1 1 auto;height:100%;overflow:auto;position:absolute;right:0;width:calc(100% - 300px)}.ReqDetailContainer-styles__req-detail-container___ZyLd3 .ReqDetailContainer-styles__nav-tabs___R9ZEf{border:0;padding-left:35px}.ReqDetailContainer-styles__req-detail-container___ZyLd3 .ReqDetailContainer-styles__tab-link___5EnBU{border:0;border-bottom:2px solid transparent;color:#555}.ReqDetailContainer-styles__req-detail-container___ZyLd3 .ReqDetailContainer-styles__tab-link___5EnBU:hover{text-decoration:none}.ReqDetailContainer-styles__req-detail-container___ZyLd3 .ReqDetailContainer-styles__tab-link___5EnBU.ReqDetailContainer-styles__active___hxi6D{border:0;border-bottom:2px solid #333;color:#333}.ReqDetailContainer-styles__req-detail-container___ZyLd3 .ReqDetailContainer-styles__close-button___QrMvi{background:transparent;border:0;cursor:pointer;left:8px;position:absolute;top:8px}.ReqDetailContainer-styles__req-detail-container___ZyLd3 .ReqDetailContainer-styles__close-button___QrMvi .ReqDetailContainer-styles__close-icon___9yc3I{height:8px;width:8px}.ReqDetailContainer-styles__req-detail-container___ZyLd3 .ReqDetailContainer-styles__close-button___QrMvi .ReqDetailContainer-styles__close-icon___9yc3I g{stroke:#555}.ReqDetailContainer-styles__req-detail-container___ZyLd3 .ReqDetailContainer-styles__close-button___QrMvi:hover .ReqDetailContainer-styles__close-icon___9yc3I g{stroke:#000}.ReqDetailContainer-styles__req-detail-container___ZyLd3 .ReqDetailContainer-styles__tabs-container___4-YMi{display:flex;height:calc(100% - 35px);overflow:auto;padding:16px;width:100%}";
var Styles$9 = {"brandBlue":"#1395f0","req-detail-container":"ReqDetailContainer-styles__req-detail-container___ZyLd3","nav-tabs":"ReqDetailContainer-styles__nav-tabs___R9ZEf","tab-link":"ReqDetailContainer-styles__tab-link___5EnBU","active":"ReqDetailContainer-styles__active___hxi6D","close-button":"ReqDetailContainer-styles__close-button___QrMvi","close-icon":"ReqDetailContainer-styles__close-icon___9yc3I","tabs-container":"ReqDetailContainer-styles__tabs-container___4-YMi"};
styleInject(css_248z$9);

var css_248z$8 = ".Tabs-styles__nav-tabs___45Zdm{border-bottom:1px solid #e6e6e6;display:flex;flex-wrap:wrap;list-style:none;margin-bottom:0;padding-left:0}.Tabs-styles__tab-item___pvUQQ{background-color:transparent;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;color:#007bff;cursor:pointer;display:block;margin-bottom:-1px;padding:.5rem 1rem;text-decoration:none}.Tabs-styles__tab-item___pvUQQ:active,.Tabs-styles__tab-item___pvUQQ:focus{outline:none}.Tabs-styles__tab-item___pvUQQ.Tabs-styles__active___iuXOw{background-color:#fff;border-color:#e6e6e6 #e6e6e6 #fff;color:#646464}";
var Styles$8 = {"brandBlue":"#1395f0","nav-tabs":"Tabs-styles__nav-tabs___45Zdm","tab-item":"Tabs-styles__tab-item___pvUQQ","active":"Tabs-styles__active___iuXOw"};
styleInject(css_248z$8);

var context$2 = classNames__default["default"].bind(Styles$8);

var Tabs = function Tabs(_ref) {
  var onUpdate = _ref.onUpdate,
      selectedKey = _ref.selectedKey,
      defaultSelectedKey = _ref.defaultSelectedKey,
      children = _ref.children,
      navTabsClassName = _ref.navTabsClassName,
      tabsContainerClassName = _ref.tabsContainerClassName,
      navLinkClassName = _ref.navLinkClassName,
      activeClassName = _ref.activeClassName;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      updateItems = _useState2[1];

  React.useEffect(function () {
    var itemsCollection = [];
    React__default["default"].Children.forEach(children, function (element) {
      if ( /*#__PURE__*/React__default["default"].isValidElement(element)) {
        var _element$props = element.props,
            name = _element$props.name,
            key = _element$props.eventKey,
            component = _element$props.children;
        itemsCollection.push({
          name: name,
          key: key,
          component: component
        });
      }
    });
    updateItems(itemsCollection);
  }, [children]);

  var _useState3 = React.useState(defaultSelectedKey || (items && items.length ? items[0].key : null)),
      _useState4 = _slicedToArray(_useState3, 2),
      activeTab = _useState4[0],
      updateTab = _useState4[1];

  var handleUpdate = function handleUpdate(key) {
    updateTab(key);

    if (onUpdate) {
      onUpdate(key);
    }
  };

  var renderItem = function renderItem() {
    var selectedTab = items.find(function (_ref2) {
      var key = _ref2.key;
      return key === (selectedKey || activeTab);
    });
    return selectedTab ? selectedTab.component : null;
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("nav", {
    className: context$2('nav-tabs', navTabsClassName)
  }, items.map(function (_ref3, index) {
    var item = _ref3.key,
        name = _ref3.name;
    return /*#__PURE__*/React__default["default"].createElement("a", {
      key: item,
      className: context$2('tab-item', navLinkClassName, _defineProperty({}, activeClassName || Styles$8.active, activeTab === item)),
      onClick: function onClick() {
        return handleUpdate(item);
      },
      role: "tab",
      tabIndex: index
    }, name);
  })), /*#__PURE__*/React__default["default"].createElement("section", {
    className: context$2(tabsContainerClassName)
  }, renderItem()));
};

Tabs.propTypes = {
  activeClassName: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node.isRequired,
  defaultSelectedKey: PropTypes__default["default"].string,
  navLinkClassName: PropTypes__default["default"].string,
  navTabsClassName: PropTypes__default["default"].string,
  onUpdate: PropTypes__default["default"].func,
  selectedKey: PropTypes__default["default"].string,
  tabsContainerClassName: PropTypes__default["default"].string
};
Tabs.defaultProps = {
  activeClassName: null,
  defaultSelectedKey: null,
  navLinkClassName: null,
  navTabsClassName: null,
  onUpdate: null,
  selectedKey: null,
  tabsContainerClassName: null
};

var Tab = function Tab(_ref) {
  var children = _ref.children;
  return children;
};

Tab.propTypes = {
  children: PropTypes__default["default"].node.isRequired
};

var css_248z$7 = ".Headers-styles__headers-container___dobFw{width:100%}.Headers-styles__headers-container___dobFw .Headers-styles__header-info___Ty6Wi{border-bottom:1px solid #e6e6e6;margin-bottom:16px;padding-bottom:16px}.Headers-styles__headers-container___dobFw .Headers-styles__header-info___Ty6Wi:last-child{margin-bottom:0}.Headers-styles__headers-container___dobFw .Headers-styles__header-info___Ty6Wi.Headers-styles__active___CSHsb .Headers-styles__caret-icon___GOtGC{transform:translateY(-1px) translateX(-5px) rotate(180deg)}.Headers-styles__header-title___M--ry{cursor:pointer;display:inline-block;margin:0}.Headers-styles__header-title___M--ry .Headers-styles__caret-icon___GOtGC{display:inline-block;height:8px;transform:translateY(-1px) translateX(-5px) rotate(90deg);width:8px}.Headers-styles__header-title___M--ry .Headers-styles__encode-url___PRIdM{font-size:12px;margin-left:8px}.Headers-styles__header-title___M--ry span:focus,.Headers-styles__header-title___M--ry:focus{outline:none}.Headers-styles__header-detail___IrtOT{padding:16px 0 0 16px}.Headers-styles__header-detail___IrtOT .Headers-styles__info-row___lTHXX{font-size:12px;margin:0;padding-bottom:8px}.Headers-styles__header-detail___IrtOT .Headers-styles__info-row___lTHXX:last-child{padding-bottom:0}.Headers-styles__header-detail___IrtOT .Headers-styles__info-caption___1wI1u{font-weight:700;padding-right:8px}.Headers-styles__header-detail___IrtOT .Headers-styles__info-value___kg-5n{word-break:break-all}";
var Styles$7 = {"brandBlue":"#1395f0","headers-container":"Headers-styles__headers-container___dobFw","header-info":"Headers-styles__header-info___Ty6Wi","active":"Headers-styles__active___CSHsb","caret-icon":"Headers-styles__caret-icon___GOtGC","header-title":"Headers-styles__header-title___M--ry","encode-url":"Headers-styles__encode-url___PRIdM","header-detail":"Headers-styles__header-detail___IrtOT","info-row":"Headers-styles__info-row___lTHXX","info-caption":"Headers-styles__info-caption___1wI1u","info-value":"Headers-styles__info-value___kg-5n"};
styleInject(css_248z$7);

var General = function General(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$7['header-detail']
  }, Object.entries(GENERAL_HEADERS).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        dataKey = _ref3[0],
        _ref3$ = _ref3[1],
        key = _ref3$.key,
        name = _ref3$.name;

    return /*#__PURE__*/React__default["default"].createElement("p", {
      key: dataKey,
      className: Styles$7['info-row']
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-value']
    }, key === 'status' && data.error ? data.error : data[key]));
  }));
};

General.propTypes = {
  data: PropTypes__default["default"].object
};
General.defaultProps = {
  data: null
};

// @ts-nocheck

var Response$1 = function Response(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$7['header-detail']
  }, data.headers.response.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React__default["default"].createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles$7['info-row']
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-value']
    }, value));
  }));
};

Response$1.propTypes = {
  data: PropTypes__default["default"].object
};
Response$1.defaultProps = {
  data: null
};

// @ts-nocheck

var Request = function Request(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$7['header-detail']
  }, data.headers.request.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React__default["default"].createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles$7['info-row']
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-value']
    }, value));
  }));
};

Request.propTypes = {
  data: PropTypes__default["default"].object
};
Request.defaultProps = {
  data: null
};

// @ts-nocheck

var QueryString = function QueryString(_ref) {
  var data = _ref.data,
      isPayloadTransformed = _ref.isPayloadTransformed;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$7['header-detail']
  }, data.headers.queryString.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React__default["default"].createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles$7['info-row']
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-value']
    }, isPayloadTransformed ? decodeURIComponent(value) : value));
  }));
};

QueryString.propTypes = {
  data: PropTypes__default["default"].object,
  isPayloadTransformed: PropTypes__default["default"].bool.isRequired
};
QueryString.defaultProps = {
  data: null
};

// @ts-nocheck

var FormData = function FormData(_ref) {
  var data = _ref.data,
      isPayloadTransformed = _ref.isPayloadTransformed;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$7['header-detail']
  }, data.headers.postData.params.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React__default["default"].createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles$7['info-row']
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default["default"].createElement("span", {
      className: Styles$7['info-value']
    }, isPayloadTransformed ? decodeURIComponent(value) : value));
  }));
};

FormData.propTypes = {
  data: PropTypes__default["default"].object,
  isPayloadTransformed: PropTypes__default["default"].bool.isRequired
};
FormData.defaultProps = {
  data: null
};

// @ts-nocheck

var IconCaretUp = function IconCaretUp(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    className: className,
    height: "8",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 13 8",
    width: "13",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.547,8.008 C11.547,8.008 6.500,2.919 6.500,2.919 C6.500,2.919 1.453,8.008 1.453,8.008 C1.453,8.008 0.011,6.554 0.011,6.554 C0.011,6.554 6.500,0.011 6.500,0.011 C6.500,0.011 12.989,6.554 12.989,6.554 C12.989,6.554 11.547,8.008 11.547,8.008 Z",
    fillRule: "evenodd"
  })));
};

IconCaretUp.propTypes = {
  className: PropTypes__default["default"].string
};
IconCaretUp.defaultProps = {
  className: ''
};

// @ts-nocheck

var HeaderTitle = function HeaderTitle(_ref) {
  var _onClick = _ref.onClick,
      eventKey = _ref.eventKey,
      isEncodeEnabled = _ref.isEncodeEnabled,
      onPayloadTransform = _ref.onPayloadTransform,
      isPayloadTransformed = _ref.isPayloadTransformed,
      isParseEnabled = _ref.isParseEnabled;
  var payloadStatus = PAYLOAD_CAPTIONS[isParseEnabled ? 'parse' : 'encode'][isPayloadTransformed];
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$7['header-title']
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    onClick: function onClick() {
      return _onClick(HEADERS_TITLES[eventKey].key);
    },
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement(IconCaretUp, {
    className: Styles$7['caret-icon']
  }), HEADERS_TITLES[eventKey].name), (isEncodeEnabled || isParseEnabled) && /*#__PURE__*/React__default["default"].createElement("span", {
    className: Styles$7['encode-url'],
    onClick: onPayloadTransform,
    role: "button",
    tabIndex: 0
  }, "view ".concat(payloadStatus)));
};

HeaderTitle.propTypes = {
  eventKey: PropTypes__default["default"].string.isRequired,
  isEncodeEnabled: PropTypes__default["default"].bool,
  isParseEnabled: PropTypes__default["default"].bool,
  isPayloadTransformed: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func.isRequired,
  onPayloadTransform: PropTypes__default["default"].func.isRequired
};
HeaderTitle.defaultProps = {
  isEncodeEnabled: false,
  isParseEnabled: false,
  isPayloadTransformed: true
};

var context$1 = classNames__default["default"].bind(Styles$7);

var HeaderInfo = function HeaderInfo(_ref) {
  var eventKey = _ref.eventKey,
      data = _ref.data,
      component = _ref.component,
      isEncodeEnabled = _ref.isEncodeEnabled,
      isParseEnabled = _ref.isParseEnabled;

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      updateVisibleStates = _useState2[1];

  var _useState3 = React.useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isPayloadTransformed = _useState4[0],
      updateTransform = _useState4[1];

  var handlePayloadTransform = function handlePayloadTransform() {
    return updateTransform(!isPayloadTransformed);
  };

  var ChildComponent = function ChildComponent() {
    return component({
      data: data,
      isPayloadTransformed: isPayloadTransformed,
      onChangeEncode: handlePayloadTransform
    });
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: context$1('header-info', {
      active: isVisible
    })
  }, /*#__PURE__*/React__default["default"].createElement(HeaderTitle, {
    eventKey: eventKey,
    isEncodeEnabled: isEncodeEnabled,
    isParseEnabled: isParseEnabled,
    isPayloadTransformed: isPayloadTransformed,
    onClick: function onClick() {
      return updateVisibleStates(!isVisible);
    },
    onPayloadTransform: handlePayloadTransform
  }), isVisible && /*#__PURE__*/React__default["default"].createElement(ChildComponent, null));
};

HeaderInfo.propTypes = {
  component: PropTypes__default["default"].func.isRequired,
  data: PropTypes__default["default"].object,
  eventKey: PropTypes__default["default"].string.isRequired,
  isEncodeEnabled: PropTypes__default["default"].bool,
  isParseEnabled: PropTypes__default["default"].bool
};
HeaderInfo.defaultProps = {
  data: null,
  isEncodeEnabled: false,
  isParseEnabled: false
};

// @ts-nocheck

var RequestPayload = function RequestPayload(_ref) {
  var data = _ref.data,
      isPayloadTransformed = _ref.isPayloadTransformed;
  var payloadData = data.headers.postData.text;
  var parsedData = React.useMemo(function () {
    return parseRequestPayload(payloadData);
  }, [payloadData]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$7['header-detail']
  }, isPayloadTransformed ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$7['response-content']
  }, /*#__PURE__*/React__default["default"].createElement("pre", {
    className: Styles$7['log-body-colorless']
  }, parsedData)) : payloadData);
};

RequestPayload.propTypes = {
  data: PropTypes__default["default"].object,
  isPayloadTransformed: PropTypes__default["default"].bool.isRequired
};
RequestPayload.defaultProps = {
  data: null
};

// @ts-nocheck

var Headers = function Headers(_ref) {
  var data = _ref.data;
  return !data ? null : /*#__PURE__*/React__default["default"].createElement("section", {
    className: Styles$7['headers-container']
  }, /*#__PURE__*/React__default["default"].createElement(HeaderInfo, {
    component: General,
    data: data,
    eventKey: "general"
  }), /*#__PURE__*/React__default["default"].createElement(HeaderInfo, {
    component: Response$1,
    data: data,
    eventKey: "response"
  }), /*#__PURE__*/React__default["default"].createElement(HeaderInfo, {
    component: Request,
    data: data,
    eventKey: "request"
  }), data.headers.queryString && data.headers.queryString.length ? /*#__PURE__*/React__default["default"].createElement(HeaderInfo, {
    component: QueryString,
    data: data,
    eventKey: "queryString",
    isEncodeEnabled: true
  }) : null, data.headers.postData && data.headers.postData.params && /*#__PURE__*/React__default["default"].createElement(HeaderInfo, {
    component: FormData,
    data: data,
    eventKey: "formData",
    isEncodeEnabled: true
  }), data.headers.postData && data.headers.postData.text && /*#__PURE__*/React__default["default"].createElement(HeaderInfo, {
    component: RequestPayload,
    data: data,
    eventKey: "requestPayload",
    isParseEnabled: true
  }));
};

Headers.propTypes = {
  data: PropTypes__default["default"].object
};
Headers.defaultProps = {
  data: null
};

// @ts-nocheck

var IconCloseSign = function IconCloseSign(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    className: className,
    height: "16",
    viewBox: "0 0 17 16",
    width: "17"
  }, /*#__PURE__*/React__default["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "#ACB2B8",
    strokeLinecap: "round",
    transform: "translate(1)"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M0 0L15.2460858 15.2460858M15.2460858 0L0 15.2460858"
  })));
};

IconCloseSign.propTypes = {
  className: PropTypes__default["default"].string
};
IconCloseSign.defaultProps = {
  className: ''
};

var css_248z$6 = ".Response-styles__no-response___Z-apU{align-items:center;color:#7f8892;display:flex;font-size:18px;justify-content:center;width:100%}.Response-styles__response-content___nd8iS{font-size:12px;width:100%}";
var Styles$6 = {"brandBlue":"#1395f0","no-response":"Response-styles__no-response___Z-apU","response-content":"Response-styles__response-content___nd8iS"};
styleInject(css_248z$6);

// @ts-nocheck

var NoResponseText = function NoResponseText() {
  return /*#__PURE__*/React__default["default"].createElement("h4", {
    className: Styles$6['no-response']
  }, "This request has no response data available.");
};

var Response = function Response(_ref) {
  var data = _ref.data;
  var content = data && data.body ? data.body : null;

  if (!content) {
    return /*#__PURE__*/React__default["default"].createElement(NoResponseText, null);
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$6['response-content']
  }, /*#__PURE__*/React__default["default"].createElement("pre", {
    className: Styles$6['log-body-colorless']
  }, content));
};

Response.propTypes = {
  data: PropTypes__default["default"].object
};
Response.defaultProps = {
  data: null
};

// @ts-nocheck

var ReqDetailContainer = function ReqDetailContainer() {
  var _useNetwork = useNetwork(),
      actions = _useNetwork.actions,
      state = _useNetwork.state;

  var reqDetail = state.get('reqDetail');

  var handleCloseClick = function handleCloseClick() {
    actions.selectRequest(null);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$9['req-detail-container']
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: Styles$9['close-button'],
    onClick: handleCloseClick,
    type: "button"
  }, /*#__PURE__*/React__default["default"].createElement(IconCloseSign, {
    className: Styles$9['close-icon']
  })), /*#__PURE__*/React__default["default"].createElement(Tabs, {
    activeClassName: Styles$9.active,
    defaultSelectedKey: "headers",
    navLinkClassName: Styles$9['tab-link'],
    navTabsClassName: Styles$9['nav-tabs'],
    tabsContainerClassName: Styles$9['tabs-container']
  }, /*#__PURE__*/React__default["default"].createElement(Tab, {
    eventKey: "headers",
    name: "Headers"
  }, /*#__PURE__*/React__default["default"].createElement(Headers, {
    data: reqDetail
  })), /*#__PURE__*/React__default["default"].createElement(Tab, {
    eventKey: "response",
    name: "Response"
  }, /*#__PURE__*/React__default["default"].createElement(Response, {
    data: reqDetail
  }))));
};

var css_248z$5 = ".MainContainer-styles__main-container___RaOzF{display:flex;flex-direction:row;flex-wrap:wrap;height:calc(100% - 76px);position:relative}";
var Styles$5 = {"brandBlue":"#1395f0","main-container":"MainContainer-styles__main-container___RaOzF"};
styleInject(css_248z$5);

var css_248z$4 = ".TimelineContainer-styles__timeline-container___s-xm6{border-bottom:1px solid #d8dde3;width:100%}";
var Styles$4 = {"brandBlue":"#1395f0","timeline-container":"TimelineContainer-styles__timeline-container___s-xm6"};
styleInject(css_248z$4);

var css_248z$3 = ".TimelineChart-styles__chart-container___K5tij{margin:0 8px}.TimelineChart-styles__scatter-chart___EsuZV tspan{fill:gray;font-size:10px}";
var Styles$3 = {"brandBlue":"#1395f0","chart-container":"TimelineChart-styles__chart-container___K5tij","scatter-chart":"TimelineChart-styles__scatter-chart___EsuZV"};
styleInject(css_248z$3);

var TimelineDatapoint = function TimelineDatapoint(_ref) {
  var payload = _ref.payload,
      maxTime = _ref.maxTime,
      cx = _ref.cx,
      cy = _ref.cy,
      index = _ref.index;
  var timings = payload.timings;
  var chartAttributes = React.useMemo(function () {
    return calcChartAttributes(timings, maxTime, cx, index, cy);
  }, [timings, maxTime]);

  if (!payload) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement("g", null, chartAttributes.map(function (chartProps) {
    return /*#__PURE__*/React__default["default"].createElement("rect", _extends({
      key: chartProps.key
    }, chartProps, {
      height: TIMELINE_DATA_POINT_HEIGHT
    }));
  }));
};

TimelineDatapoint.propTypes = {
  cx: PropTypes__default["default"].number,
  cy: PropTypes__default["default"].number,
  index: PropTypes__default["default"].number,
  maxTime: PropTypes__default["default"].number.isRequired,
  payload: PropTypes__default["default"].object
};
TimelineDatapoint.defaultProps = {
  cx: 0,
  cy: 0,
  index: 0,
  payload: null
};

var css_248z$2 = ".TimelineTooltip-styles__tooltip___8OCNF{background:#fff;border:1px solid #e6e6e6;border-radius:3px;color:#555;display:block;font-size:12px;height:auto;opacity:1;padding:8px;width:300px}.TimelineTooltip-styles__content___JbXPQ{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
var Styles$2 = {"brandBlue":"#1395f0","tooltip":"TimelineTooltip-styles__tooltip___8OCNF","content":"TimelineTooltip-styles__content___JbXPQ"};
styleInject(css_248z$2);

var TimelineTooltip = function TimelineTooltip(_ref) {
  var payload = _ref.payload;

  if (!payload || !payload.length) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$2.tooltip
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$2.content
  }, payload[0].payload.filename), /*#__PURE__*/React__default["default"].createElement("div", null, "Started at: ".concat(formatTime(payload[0].payload.timings.startTime))));
};

TimelineTooltip.propTypes = {
  payload: PropTypes__default["default"].array
};
TimelineTooltip.defaultProps = {
  payload: null
};

var TimelineChart = function TimelineChart(_ref) {
  var chartData = _ref.chartData,
      totalNetworkTime = _ref.totalNetworkTime;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: Styles$3['chart-container']
  }, /*#__PURE__*/React__default["default"].createElement(recharts.ResponsiveContainer, {
    height: 100,
    width: "100%"
  }, /*#__PURE__*/React__default["default"].createElement(recharts.ScatterChart, {
    className: Styles$3['scatter-chart']
  }, /*#__PURE__*/React__default["default"].createElement(recharts.XAxis, {
    axisLine: false,
    dataKey: "timings.startTime",
    domain: [0, totalNetworkTime],
    interval: "preserveStartEnd",
    orientation: "top",
    tickCount: 10,
    tickFormatter: formatTime,
    tickLine: false,
    type: "number"
  }), /*#__PURE__*/React__default["default"].createElement(recharts.YAxis, {
    dataKey: "index",
    domain: ['min', 'max'],
    hide: true,
    reversed: true
  }), /*#__PURE__*/React__default["default"].createElement(recharts.Tooltip, {
    content: /*#__PURE__*/React__default["default"].createElement(TimelineTooltip, null)
  }), /*#__PURE__*/React__default["default"].createElement(recharts.Scatter, {
    data: chartData,
    shape: /*#__PURE__*/React__default["default"].createElement(TimelineDatapoint, {
      maxTime: totalNetworkTime
    })
  }))));
};

TimelineChart.propTypes = {
  chartData: PropTypes__default["default"].array.isRequired,
  totalNetworkTime: PropTypes__default["default"].number.isRequired
};

// @ts-nocheck

var TimelineContainer = function TimelineContainer() {
  var _useNetwork = useNetwork(),
      state = _useNetwork.state;

  var data = state.get('data');
  var actualData = state.get('actualData');
  var error = state.get('error');
  var totalNetworkTime = state.get('totalNetworkTime');

  if (error || !actualData.size) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement("section", {
    className: Styles$4['timeline-container']
  }, /*#__PURE__*/React__default["default"].createElement(TimelineChart, {
    chartData: data.toArray(),
    totalNetworkTime: totalNetworkTime
  }));
};

var css_248z$1 = ".NetworkTableFooter-styles__footer___QFVEO{background:#f7f7f7;border-top:1px solid #ccc;bottom:0;display:inline-flex;padding:8px;position:absolute;vertical-align:middle;width:100%}.NetworkTableFooter-styles__footer___QFVEO span{align-items:center;border-right:1px solid #ccc;display:inline-flex;flex:1 1 auto;justify-content:center}.NetworkTableFooter-styles__footer___QFVEO span:last-child{border-right:none}";
var Styles$1 = {"brandBlue":"#1395f0","footer":"NetworkTableFooter-styles__footer___QFVEO"};
styleInject(css_248z$1);

// @ts-nocheck
var context = classNames__default["default"].bind(Styles$1);

var NetworkTableFooter = function NetworkTableFooter(_ref) {
  var dataSummary = _ref.dataSummary,
      showAllInfo = _ref.showAllInfo;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: context('footer')
  }, showAllInfo ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("span", null, "".concat(dataSummary.get('totalRequests'), " requests")), /*#__PURE__*/React__default["default"].createElement("span", null, "".concat(formatSize(dataSummary.get('totalTransferredSize')), " transferred")), /*#__PURE__*/React__default["default"].createElement("span", null, "".concat(formatSize(dataSummary.get('totalUncompressedSize')), " resources")), /*#__PURE__*/React__default["default"].createElement("span", null, "Finished: ".concat(formatTime(dataSummary.get('finish')))), /*#__PURE__*/React__default["default"].createElement("span", null, "DOMContentLoaded: ".concat(formatTime(dataSummary.get('timings').DOMContentLoaded))), /*#__PURE__*/React__default["default"].createElement("span", null, "Load: ".concat(formatTime(dataSummary.get('timings').onLoad)))) : /*#__PURE__*/React__default["default"].createElement("span", null, "".concat(dataSummary.get('totalRequests'), " requests")));
};

NetworkTableFooter.propTypes = {
  dataSummary: PropTypes__default["default"].object.isRequired,
  showAllInfo: PropTypes__default["default"].bool
};
NetworkTableFooter.defaultProps = {
  showAllInfo: true
};

// @ts-nocheck

var MainContainer = function MainContainer(_ref) {
  var onRequestSelect = _ref.onRequestSelect;

  var _useNetwork = useNetwork(),
      state = _useNetwork.state;

  var _useTheme = useTheme(),
      showTimeline = _useTheme.showTimeline;

  var loading = state.get('loading');
  var showReqDetail = state.get('showReqDetail');
  var dataSummary = state.get('dataSummary');
  var actualData = state.get('actualData');
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(LoaderContainer, {
    show: loading,
    text: FETCH_FILE_LOAD_TEXT
  }, showTimeline && /*#__PURE__*/React__default["default"].createElement(TimelineContainer, null), /*#__PURE__*/React__default["default"].createElement(FilterContainer, null), /*#__PURE__*/React__default["default"].createElement("section", {
    className: Styles$5['main-container']
  }, /*#__PURE__*/React__default["default"].createElement(NetworkTableContainer, {
    onRequestSelect: onRequestSelect
  }), showReqDetail && /*#__PURE__*/React__default["default"].createElement(ReqDetailContainer, null)), actualData.size ? /*#__PURE__*/React__default["default"].createElement(NetworkTableFooter, {
    dataSummary: dataSummary
  }) : null));
};

MainContainer.propTypes = {
  onRequestSelect: PropTypes__default["default"].func
};
MainContainer.defaultProps = {
  onRequestSelect: function onRequestSelect() {}
};

var css_248z = ".ZipyWebNetwork-styles__zipy-web-network___Hp7Mq{height:100%}.ZipyWebNetwork-styles__zipy-web-network___Hp7Mq *{box-sizing:border-box}";
var Styles = {"zipy-web-network":"ZipyWebNetwork-styles__zipy-web-network___Hp7Mq"};
styleInject(css_248z);

// @ts-nocheck
var contextClassNames = classNames__default["default"].bind(Styles);

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
    React__default["default"].createElement("section", {
      className: contextClassNames('zipy-web-network', containerClassName)
    }, /*#__PURE__*/React__default["default"].createElement(ThemeProvider, {
      options: options
    }, /*#__PURE__*/React__default["default"].createElement(NetworkProvider, {
      autoHighlightChange: autoHighlightChange,
      data: data,
      fetchOptions: fetchOptions,
      file: file,
      onDataError: onDataError,
      onDataLoaded: onDataLoaded,
      scrollRequestPosition: scrollRequestPosition,
      scrollTimeStamp: scrollTimeStamp
    }, /*#__PURE__*/React__default["default"].createElement(MainContainer, {
      onRequestSelect: onRequestSelect
    }))))
  );
};

ZipyWebNetwork.propTypes = {
  autoHighlightChange: PropTypes__default["default"].bool,
  containerClassName: PropTypes__default["default"].string,
  data: PropTypes__default["default"].object,
  fetchOptions: PropTypes__default["default"].object,
  file: PropTypes__default["default"].string,
  onDataError: PropTypes__default["default"].func,
  onDataLoaded: PropTypes__default["default"].func,
  onRequestSelect: PropTypes__default["default"].func,
  options: PropTypes__default["default"].object,
  scrollRequestPosition: PropTypes__default["default"].oneOf(['before', 'after', 'near']),
  scrollTimeStamp: PropTypes__default["default"].number
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

exports.ZipyWebNetwork = ZipyWebNetwork;
//# sourceMappingURL=index.js.map
