import { Store } from 'redux';
import { i18n as i18nActions } from 'actions';

export default function i18n(store: Store): void {
  store.dispatch(i18nActions.get());
}
