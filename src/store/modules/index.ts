const allModules = import.meta.globEager('./*/index.ts');

const modules = {} as any;
Object.keys(allModules).forEach((path) => {
  const fileName = path.split('/')[1];
  modules[fileName] = allModules[path][fileName] || allModules[path].default || allModules[path];
});

import { useUserStore } from './users';
import { useTabStore } from './tabs';
import { useSettingStore } from './settings';

export default {
  useUserStore,
  useTabStore,
  useSettingStore,
};
