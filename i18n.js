import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Expo from 'expo';

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
    type: 'languageDetector',
    async: true, // flags below detection to be async
    detect: (callback) => { return /*'en'; */ Expo.Util.getCurrentLocaleAsync().then(lng => { callback(lng.replace('_', '-')); }) },
    init: () => {},
    cacheUserLanguage: () => {}
}

i18n
    .use(languageDetector)
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'en',

        resources: {
            en: {
                home: {
                    heading: 'Welcome to the ZRM App!',
                    introduction: 'This is an app to guide you through the process of ZRM\n' +
                    '                            (Zürcher Ressourcenmodell). It is\n' +
                    '                            a process which uses images and symbols to increase self management abilities.',

                },
                common: {
                    currentLanguage: 'The current language is "{{lng}}"',
                    actions: {
                        toggleToGerman: 'Deutsch',
                        toggleToEnglish: 'English',
                        goToPage2: 'Open page 2'
                    },
                    infoText: "<0><0>Eins </O><1>Zwei </1><2>Drei </2><3>Vier </3><4>Fünf</4></O>"
                }
            },
            de: {
                home: {
                    heading: 'Willkommen zur ZRM App!',
                    introduction: 'Dies ist eine App, um dich durch den Prozess des ZRM zu führen. Es ist ein Prozess, der mit Hilfe von Bildern und Symbolen das Selbstmanagement steigern soll.',
                },
                common: {
                    currentLanguage: 'Die Sprache ist auf "{{lng}}" gesetzt',
                    actions: {
                        toggleToGerman: 'Deutsch',
                        toggleToEnglish: 'English',
                        goToPage2: 'Öffne Seite 2'
                    }
                }
            }
        },

        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        debug: true,

        // cache: {
        //   enabled: true
        // },

        interpolation: {
            escapeValue: false, // not needed for react as it does escape per default to prevent xss!
        }
    });


export default i18n;
