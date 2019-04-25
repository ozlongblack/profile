import { i18n as i18nActions } from 'actions';
import { head, split } from 'lodash/fp';
import { Maybe } from 'monet';
import { put, select, takeLatest } from 'redux-saga/effects';
import { Action } from 'types/Action';

export function* setI18n(): Generator {
  const i18nState: string = yield select(
    (state: { i18n: string }): string => state.i18n,
  );
  const action: Action = yield Maybe.fromNull(i18nState || null)
    .orElse(Maybe.Some(head(split('-')(navigator.language)) || 'en'))
    .flatMap((language: string): Maybe<Function> => i18nActions.set(language));

  yield put(action);
}

export default function* i18nWatcher(): Generator {
  yield takeLatest(i18nActions.GET, setI18n);
}
