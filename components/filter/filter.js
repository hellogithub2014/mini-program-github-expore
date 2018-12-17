const filterBehavior = require('../../behaviors/base.js');

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
    showLang: {
      type: Boolean,
      value: true,
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
