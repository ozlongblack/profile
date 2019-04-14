import {
  call,
  put,
  takeLatest,
  SimpleEffect,
  PutEffectDescriptor,
} from 'redux-saga/effects';
import { List } from 'immutable';
import { Either, Right } from 'monet';
import { list as listActions } from 'actions';
import { PATHS } from 'consts';
import { listService } from 'services';
import { Action } from 'types/Action';
import { toList } from './list.transformers';

export function* getList(): Generator {
  yield put(listActions.requested());

  const result: Either<Error, { entries: any[] }> = yield call(
    listService.getList,
  );
  yield result
    .flatMap(
      (data: { entries: any[] }): Either<Error, any> => Right(data.entries),
    )
    .flatMap((data: any[]): Either<Error, List<any>> => Right(toList(data)))
    .bimap(
      (error: Error): Action => listActions.failed(error),
      (data: List<any>): Action => listActions.completed(data),
    )
    .cata(
      (error): SimpleEffect<'PUT', PutEffectDescriptor<Action>> => put(error),
      (action): SimpleEffect<'PUT', PutEffectDescriptor<Action>> => put(action),
    );
}

export default function* listWatcher(): Generator {
  yield takeLatest(PATHS.ROOT, getList);
  yield takeLatest(listActions.FETCH, getList);
}
