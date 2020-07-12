import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../modules/Recommend/store/index';
import { reducer as singersReducer } from '../modules/Singers/store/index';
import { reducer as rankReducer } from '../modules/Rank/store/index';
import { reducer as albumReducer } from '../modules/Ablum/store/index';
import { reducer as singerInfoReducer } from '../modules/Singer/store/index';
import { reducer as playerReducer } from "../modules/Player/store/index";
import { reducer as searchReducer } from "../modules/Search/store/index";

export default combineReducers({
  // 之后开发具体功能模块的时候添加reducer
  recommend: recommendReducer,
  singers: singersReducer ,
  rank: rankReducer,
  album: albumReducer,
  singerInfo: singerInfoReducer,
  player: playerReducer,
  search: searchReducer,
});