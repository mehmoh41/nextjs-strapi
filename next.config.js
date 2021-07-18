const path = require("path");
const { i18n } = require('./next-i18next.config')

    module.exports = {
        i18n: {
            defaultLocale: 'en',
            locales: ['en', 'fa'],
            defaultLanguage: 'en',
            fallbackLng: ['en'],
          },
        images: {
            domains: ['localhost']
        },
        webpack: config => {
            config.resolve.alias['components'] = path.join(__dirname , 'components')
            config.resolve.alias['public'] = path.join(__dirname , 'public')
            return config;
        }
            
    };
    