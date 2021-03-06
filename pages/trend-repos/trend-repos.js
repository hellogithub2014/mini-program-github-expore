const filterBehavior = require('../../behaviors/base.js');

Component({
  behaviors: [filterBehavior],
  data: {
    filter: {
      rangeIndex: 1,
      languageIndex: 0,
    },
    api: 'https://github-trending-api.now.sh/repositories',
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
      const { author, name } = this.data.list[index];
      wx.navigateTo({
        url: `../repo-detail/repo-detail?owner=${author}&repo=${name}`,
      });
    },
  },
});
