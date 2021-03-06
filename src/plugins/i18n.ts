// 注册i8n实例并引入语言文件
import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import zh_CN from '@/locale/zh-CN';
import en_US from '@/locale/en-US';
import { storage } from '@/utils/storage/storage';

const localeData = {
  legacy: false, // composition API
  locale: storage.get('app-lang'),
  globalInjection: true,

  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,

  messages: {
    'zh-CN': zh_CN,
    'en-US': en_US,
  },
};

export const i18n = createI18n(localeData);

export const { t, ...methods } = i18n.global;

// setup i18n instance with glob
export function setupI18n(app: App) {
  app.use(i18n);
}
