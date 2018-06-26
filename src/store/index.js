import Vue from 'vue';
import Vuex from 'vuex';
import { state } from "./state";
import { mutations} from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

Vue.use(Vuex);

let options = {
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()]
};

if (!isLocalStorageSupported()) {
  options.plugins = [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ];
}

function isLocalStorageSupported () {
  let testKey = 'test';
  let storage = window.sessionStorage;
  try {
    storage.setItem(testKey, 'testValue');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}
export default new Vuex.Store(options);
