var WxParse = require('../../lib/wxParse/wxParse.js');
const { atob } = require('../../utils/base64.js');

// 使用 Component 构造器构造页面
// https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
// markdown解析： https://github.com/icindy/wxParse
Component({
  properties: {
    owner: String,
    repo: String,
  },
  data: {
    content: '',
  },
  methods: {
    onLoad: function() {
      wx.showLoading();

      const { owner, repo } = this.data;

      wx.request({
        url: `https://api.github.com/repos/${owner}/${repo}/readme`,
        data: {
          access_token: 'b5c63341482899acd49c5b8ab2e7888fb3df583c',
        },
        success: (res = {}) => {
          const { statusCode, errMsg, data = {} } = res;
          if (statusCode === 200) {
            this.parse(atob(data.content || ''));
          } else {
            this.setData({
              content: errMsg,
            });
            console.error(errMsg);
          }
        },
        fail(err) {
          this.setData({
            content: errMsg,
          });
          console.error(err);
        },
        complete() {
          wx.hideLoading();
        },
      });
    },
    parse(readme) {
      WxParse.wxParse('content', 'md', readme, this, 5);
    },
  },
});
