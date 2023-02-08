const { I18n } = require('i18n');

const i18n = new I18n({
  locales: ['en', 'tw'],
  defaultLocale: 'en',
  autoReload: true,
  extension: '.json',
  staticCatalog: {
    tw: require('./lang/zh-TW.json'),
    en: require('./lang/en.json'),
  },
  defaultLocale: 'tw'
});

module.exports = i18n;