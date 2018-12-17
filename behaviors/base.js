const { RANGE } = require('../const/filters.js');
const LANGUAGES = require('../const/languages.js');

module.exports = Behavior({
  data: {
    list: [],
    range: Object.values(RANGE),
    languages: LANGUAGES,
  },
  methods: {
    handleRangeChange(e) {
      this.setData({
        'filter.rangeIndex': +e.detail,
      });
      this.getList();
    },
    handleLanguageChange(e) {
      this.setData({
        'filter.languageIndex': +e.detail,
      });
      this.getList();
    },
    getList() {
      const { api } = this.data;
      const param = this.paramGen();

      wx.showLoading();
      wx.request({
        url: api,
        data: param,
        success: (res = {}) => {
          const { statusCode, errMsg, data = [] } = res;
          if (statusCode === 200) {
            this.setData({
              list: data,
            });
          } else {
            console.error(errMsg);
          }
        },
        fail(err) {
          console.error(err);
        },
        complete() {
          wx.hideLoading();
        },
      });
    },
  },
});
