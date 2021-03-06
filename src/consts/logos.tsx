import React from 'react';
import { Logo } from 'types/Logo';
import { ReactComponent as AngularLogo } from 'assets/images/angular-logo.svg';
import { ReactComponent as AwsLogo } from 'assets/images/aws-logo.svg';
import { ReactComponent as ChromeLogo } from 'assets/images/chrome-logo.svg';
import { ReactComponent as CodesandboxLogo } from 'assets/images/codesandbox-logo.svg';
import { ReactComponent as CssLogo } from 'assets/images/css-logo.svg';
import { ReactComponent as D3Logo } from 'assets/images/d3-logo.svg';
import { ReactComponent as FireFoxLogo } from 'assets/images/firefox-logo.svg';
import { ReactComponent as FlowLogo } from 'assets/images/flow-logo.svg';
import { ReactComponent as GithubLogo } from 'assets/images/github-logo.svg';
import { ReactComponent as GoogleCloudLogo } from 'assets/images/google-cloud-logo.svg';
import { ReactComponent as HtmlLogo } from 'assets/images/html-logo.svg';
import { ReactComponent as IllustratorLogo } from 'assets/images/illustrator-logo.svg';
import { ReactComponent as JavascriptLogo } from 'assets/images/javascript-logo.svg';
import { ReactComponent as JestLogo } from 'assets/images/jest-logo.svg';
import { ReactComponent as LinkedIn } from 'assets/images/linkedin-logo.svg';
import { ReactComponent as LodashLogo } from 'assets/images/lodash-logo.svg';
import { ReactComponent as NodejsLogo } from 'assets/images/nodejs-logo.svg';
import { ReactComponent as PhotoshopLogo } from 'assets/images/photoshop-logo.svg';
import { ReactComponent as PostgresLogo } from 'assets/images/postgres-logo.svg';
import { ReactComponent as ReactLogo } from 'assets/images/react-logo.svg';
import { ReactComponent as ReduxLogo } from 'assets/images/redux-logo.svg';
import { ReactComponent as RxjsLogo } from 'assets/images/rxjs-logo.svg';
import { ReactComponent as SafariLogo } from 'assets/images/safari-logo.svg';
import { ReactComponent as SassLogo } from 'assets/images/sass-logo.svg';
import { ReactComponent as SketchLogo } from 'assets/images/sketch-logo.svg';
import { ReactComponent as StorybookLogo } from 'assets/images/storybook-logo.svg';
import { ReactComponent as TypescriptLogo } from 'assets/images/typescript-logo.svg';

export const Logos: any = {
  angular: (props: Logo): JSX.Element => <AngularLogo {...props} />,
  aws: (props: Logo): JSX.Element => <AwsLogo {...props} />,
  chrome: (props: Logo): JSX.Element => <ChromeLogo {...props} />,
  codesandbox: (props: Logo): JSX.Element => <CodesandboxLogo {...props} />,
  css: (props: Logo): JSX.Element => <CssLogo {...props} />,
  d3: (props: Logo): JSX.Element => <D3Logo {...props} />,
  firefox: (props: Logo): JSX.Element => <FireFoxLogo {...props} />,
  flow: (props: Logo): JSX.Element => <FlowLogo {...props} />,
  github: (props: Logo): JSX.Element => <GithubLogo {...props} />,
  googleCloud: (props: Logo): JSX.Element => <GoogleCloudLogo {...props} />,
  html: (props: Logo): JSX.Element => <HtmlLogo {...props} />,
  illustrator: (props: Logo): JSX.Element => <IllustratorLogo {...props} />,
  javascript: (props: Logo): JSX.Element => <JavascriptLogo {...props} />,
  jest: (props: Logo): JSX.Element => <JestLogo {...props} />,
  linkedin: (props: Logo): JSX.Element => <LinkedIn {...props} />,
  lodash: (props: Logo): JSX.Element => <LodashLogo {...props} />,
  nodejs: (props: Logo): JSX.Element => <NodejsLogo {...props} />,
  photoshop: (props: Logo): JSX.Element => <PhotoshopLogo {...props} />,
  postgres: (props: Logo): JSX.Element => <PostgresLogo {...props} />,
  react: (props: Logo): JSX.Element => <ReactLogo {...props} />,
  redux: (props: Logo): JSX.Element => <ReduxLogo {...props} />,
  rxjs: (props: Logo): JSX.Element => <RxjsLogo {...props} />,
  safari: (props: Logo): JSX.Element => <SafariLogo {...props} />,
  sass: (props: Logo): JSX.Element => <SassLogo {...props} />,
  sketch: (props: Logo): JSX.Element => <SketchLogo {...props} />,
  storybook: (props: Logo): JSX.Element => <StorybookLogo {...props} />,
  typescript: (props: Logo): JSX.Element => <TypescriptLogo {...props} />,
};
