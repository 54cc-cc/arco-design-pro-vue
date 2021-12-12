import { store as settings, SettingStore, State as SettingState } from './modules/settings';
import { store as tabs, TabsStore, State as TabsState } from './modules/tabs';
import { store as user, UserStore, State as UserState } from './modules/user';
import { createStore } from 'vuex';
import { App } from 'vue';
import createPersistedState from 'vuex-persistedstate';

export type RootState = {
  settings: SettingState;
  tabs: TabsState;
  user: UserState;
};

export type Store = SettingStore<Pick<RootState, 'settings'>> &
  TabsStore<Pick<RootState, 'tabs'>> &
  UserStore<Pick<RootState, 'user'>>;

const store = createStore<RootState>({
  modules: {
    settings,
    tabs,
    user,
  },
  plugins: [
    createPersistedState({
      storage: localStorage,
      key: 'store',
      reducer(state, paths) {
        console.log(state, paths);
        return { ...state, ...paths };
      },
    }),
  ],
  // strict: process.env.NODE_ENV !== 'production',
});

export function useStore(): Store {
  return store as Store;
}

export function setupStore(app: App<Element>) {
  app.use(store);
}

export default store;
