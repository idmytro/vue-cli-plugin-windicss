'use strict';

var WindiCSSWebpackPlugin = require('windicss-webpack-plugin');
var defu = require('defu');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var WindiCSSWebpackPlugin__default = /*#__PURE__*/_interopDefaultLegacy(WindiCSSWebpackPlugin);
var defu__default = /*#__PURE__*/_interopDefaultLegacy(defu);

var plugin = function plugin(api, options) {
  var _options$pluginOption, _options$pluginOption2;

  var defaultConfig = {
    root: api.getCwd(),
    scan: {
      dirs: ['src', 'public', 'views'],
      exclude: ['node_modules', '.git'],
      include: []
    }
  };
  var config = defu__default['default'].arrayFn((_options$pluginOption = (_options$pluginOption2 = options.pluginOptions) === null || _options$pluginOption2 === void 0 ? void 0 : _options$pluginOption2.windicss) !== null && _options$pluginOption !== void 0 ? _options$pluginOption : {}, defaultConfig); // extend the base webpack configuration

  api.chainWebpack(function (webpackConfig) {
    // @ts-ignore
    webpackConfig.plugin('windicss').use(WindiCSSWebpackPlugin__default['default'], [config]);
  });
  return true;
};

module.exports = plugin;
