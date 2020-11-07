import React, { FunctionComponent, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { Loading, Router } from 'components';
import Components from 'routes';
import messagesEn from 'translations/en.json';
import messagesKo from 'translations/ko.json';
import { Intl } from 'types/Intl';
import { AppProps } from './App.props';

const messages: Intl = {
  en: messagesEn,
  ko: messagesKo,
};

const App: FunctionComponent<AppProps> = (props: AppProps): JSX.Element => (
  <IntlProvider locale={props.i18n!} messages={messages[props.i18n!]}>
    <Suspense fallback={<Loading isLoading={true} />}>
      <Router components={Components} />
    </Suspense>
  </IntlProvider>
);

export default App;
