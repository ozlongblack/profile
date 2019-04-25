import { all, fork } from 'redux-saga/effects';
import i18nWatcher from './i18n/i18n.saga';
import profileWatcher from './profile/profile.saga';
import themeWatcher from './theme/theme.saga';

export default function* rootSaga(): IterableIterator<any> {
  yield all([fork(i18nWatcher), fork(profileWatcher), fork(themeWatcher)]);
}
