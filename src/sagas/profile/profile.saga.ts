import {
  call,
  put,
  takeLatest,
  PutEffectDescriptor,
  SimpleEffect,
} from 'redux-saga/effects';
import { Either, Right } from 'monet';
import { profile as profileActions } from 'actions';
import { PATHS } from 'consts';
import { profileService } from 'services';
import { Action } from 'types/Action';
import { Profile } from 'types/Profile';
import { toMap } from './profile.transformers';

function* setProfile(): Generator {
  yield put(profileActions.requested());

  const result: Either<Error, Profile> = yield call(profileService.get);
  yield result
    .flatMap(
      (data: Profile): Either<Error, Map<string, any>> => Right(toMap(data)),
    )
    .bimap(
      (error: Error): Action => profileActions.failed(error),
      (data: Map<string, any>): Action => profileActions.completed(data),
    )
    .cata(
      (error): SimpleEffect<'PUT', PutEffectDescriptor<Action>> => put(error),
      (action): SimpleEffect<'PUT', PutEffectDescriptor<Action>> => put(action),
    );
}

export default function* profileWatcher(): Generator {
  yield takeLatest(PATHS.ROOT, setProfile);
}
