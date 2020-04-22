import Vue from 'vue';
import Vuex from 'vuex';
import {IAppState} from './modules/app';
import {UserState} from './modules/user';

Vue.use(Vuex);

export interface IRootState {
  app: IAppState;
  user: UserState;
}

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   },
// });

export default new Vuex.Store<IRootState>({});
