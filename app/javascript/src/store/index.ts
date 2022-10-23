import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

const store: StoreOptions<object> = {
  strict:
    process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "staging",
  state: {},
  modules: {},
  plugins: [],
};

export default new Vuex.Store<object>(store);
