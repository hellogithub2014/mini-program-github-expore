const filterBehavior = require('../../behaviors/base.js');

Component({
  behaviors: [filterBehavior],
  data: {
    filter: {
      rangeIndex: 1,
      languageIndex: 0,
    },
    api: 'https://github-trending-api.now.sh/languages',
  },
  methods: {
    onLoad: function() {
      this.getList();
    },
    paramGen() {
      return {};
    },
  },
});
