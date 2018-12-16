const filterBehavior = require('../../behaviors/filter.js');

Component({
  behaviors: [filterBehavior],

  properties: {
    rangeIndex: {
      type: Number,
      value: 0,
    },
    languageIndex: {
      type: Number,
      value: 0,
    },
  },
  methods: {
    onRangeChange(e) {
      this.triggerEvent('range-update', +e.detail.value);
    },
    onLanguageChange(e) {
      this.triggerEvent('language-update', +e.detail.value);
    },
  },
});
