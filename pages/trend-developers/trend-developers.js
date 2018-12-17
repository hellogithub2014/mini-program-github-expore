const filterBehavior = require('../../behaviors/base.js');

Component({
  behaviors: [filterBehavior],
  data: {
    filter: {
      rangeIndex: 1,
      languageIndex: 0,
    },
    api: 'https://github-trending-api.now.sh/developers',
  },
  methods: {
    onLoad: function() {
      this.getList();
    },
    paramGen() {
      const { range, languages, filter } = this.data;

      return {
        since: range[filter.rangeIndex].value,
        language: languages[filter.languageIndex].urlParam,
      };
    },
    naviToReadme(e) {
      const { index } = e.currentTarget.dataset;
      const {
        username,
        repo: { name },
      } = this.data.list[index];
      wx.navigateTo({
        url: `../repo-detail/repo-detail?owner=${username}&repo=${name}`,
      });
    },
  },
});
