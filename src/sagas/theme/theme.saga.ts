import {
  call,
  put,
  select,
  takeLatest,
  PutEffectDescriptor,
  SimpleEffect,
} from 'redux-saga/effects';
import { Either, Right } from 'monet';
import { theme as themeActions, darkMode as darkModeActions } from 'actions';
import { PATHS } from 'consts';
import { themeService } from 'services';
import { Action } from 'types/Action';
import { Profile } from 'types/Profile';
import { toMap } from './theme.transformers';

function* setTheme(): Generator {
  yield put(themeActions.requested());

  const darkMode: any = yield select(
    (state: { darkMode: boolean }): boolean => state.darkMode,
  );
  const theme = darkMode ? 'dark' : 'default';

  const result: any = yield call(themeService.get, theme);
  yield result
    .flatMap(
      (data: Profile): Either<Error, Map<string, any>> => Right(toMap(data)),
    )
    .bimap(
      (error: Error): Action => themeActions.failed(error),
      (data: Map<string, any>): Action => themeActions.completed(data),
    )
    .cata(
      (error: any): SimpleEffect<'PUT', PutEffectDescriptor<Action>> =>
        put(error),
      (action: any): SimpleEffect<'PUT', PutEffectDescriptor<Action>> =>
        put(action),
    );
}

export default function* themeWatcher(): Generator {
  yield takeLatest(PATHS.ROOT, setTheme);
  yield takeLatest(darkModeActions.SET, setTheme);
}
