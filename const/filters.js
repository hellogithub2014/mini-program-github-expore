const LANGUAGES = require('./languages.js');

exports.RANGE = {
  DAILY: {
    label: '每日',
    value: 'daily',
  },
  WEEKLY: {
    label: '每周',
    value: 'weekly',
  },
  MONTHLY: {
    label: '每月',
    value: 'monthly',
  },
};

exports.LANG_MAP = LANGUAGES.reduce((result, cur) => {
  result[cur.name] = cur.urlParam;
  return result;
}, {});
