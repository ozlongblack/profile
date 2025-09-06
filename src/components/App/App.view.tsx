import React, { FunctionComponent, lazy, ReactNode, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { Loading } from 'components';
import messagesEn from 'translations/en.json';
import messagesKo from 'translations/ko.json';
import { Intl } from 'types/Intl';
import { AppProps } from './App.props';

const messages: Intl = {
  en: messagesEn,
  ko: messagesKo,
};

const Home = lazy((): Promise<any> => import(`../../containers/Home/Home`));

const App: FunctionComponent<AppProps> = (props: AppProps): ReactNode => (
  <IntlProvider locale={props.i18n!} messages={messages[props.i18n!]}>
    <Suspense fallback={<Loading isLoading={true} />}>
      <Home />
    </Suspense>
  </IntlProvider>
);

export default App;
