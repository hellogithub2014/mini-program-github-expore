//index.js
//获取应用实例
const app = getApp();
const { RANGE } = require('../../const/filters.js');
const LANGUAGES = require('../../const/languages.js');

Page({
  data: {
    trends: [],
    filter: {
      rangeIndex: 1,
      languageIndex: 0,
    },

    filterOptions: {
      range: Object.values(RANGE),
      language: LANGUAGES,
    },
  },

  onLoad: function() {
    this.getList();
  },
  getList() {
    const { filterOptions, filter } = this.data;
    wx.request({
      url: 'https://github-trending-api.now.sh/repositories',
      data: {
        since: filterOptions.range[filter.rangeIndex].value,
        language: filterOptions.language[filter.languageIndex].urlParam,
      },
      success: (res = {}) => {
        const { statusCode, errMsg, data = [] } = res;
        if (statusCode === 200) {
          console.log(data);
          this.setData({
            trends: data,
          });
        } else {
          console.error(errMsg);
        }
      },
      fail(err) {
        console.error(err);
      },
    });
  },
  handleRangeChange(e) {
    this.setData({
      'filter.rangeIndex': +e.detail.value,
    });
    this.getList();
  },
  handleLanguageChange(e) {
    this.setData({
      'filter.languageIndex': +e.detail.value,
    });
    this.getList();
  },
});
