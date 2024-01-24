import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import languageReducer from '@containers/Language/reducer';

import registerReducer, { storedKey as storedRegisterState } from '@pages/Register/reducer';
import loginReducer, { storedKey as storedLoginState } from '@pages/Login/reducer';
import profileReducer, { storedKey as storedProfileState } from '@pages/Profile/reducer';

import homeReducer, { storedKey as storedPostState } from '@pages/Home/reducer';
import createReducerPage, { storedKey as storedCreateState } from '@pages/Create/reducer';

import bookmarkReducer, { storedKey as storedBookmarkState } from '@pages/Bookmark/reducer';

import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },

  register: { reducer: registerReducer, whitelist: storedRegisterState },
  login: { reducer: loginReducer, whitelist: storedLoginState },
  profile: { reducer: profileReducer, whitelist: storedProfileState },

  home: { reducer: homeReducer, whitelist: storedPostState },
  create: { reducer: createReducerPage, whitelist: storedCreateState },

  bookmark: { reducer: bookmarkReducer, whitelist: storedBookmarkState },
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
