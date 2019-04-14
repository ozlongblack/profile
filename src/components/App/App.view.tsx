import React, { FunctionComponent } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import { Router } from 'components';
import Components from 'routes';
import messagesEn from 'translations/en.json';
import messagesKo from 'translations/ko.json';
import { Intl } from 'types/Intl';
import { AppProps } from './App.props';

addLocaleData([...en, ...ko]);

const messages: Intl = {
  en: messagesEn,
  ko: messagesKo,
};

const App: FunctionComponent<AppProps> = (props: AppProps): JSX.Element => (
  <IntlProvider locale={props.i18n} messages={messages[props.i18n]}>
    <Router components={Components} />
  </IntlProvider>
);

export default App;
