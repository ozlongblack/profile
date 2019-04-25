import { Either } from 'monet';

export default {
  get(): Promise<Either<Error, {}>> {
    return new Promise(
      (resolve: Function): NodeJS.Timeout =>
        setTimeout((): void => {
          resolve(
            Either.Right({
              name: 'Kihwan',
              role: 'Front-end Developer',
              startYear: '2011',
              keywords: [
                'Javascript',
                'React',
                'Data visualization',
                'UI/UX',
                'Animations',
              ],
              location: 'Sydney',
              links: {
                codesandbox: 'https://codesandbox.io/u/ozlongblack/sandboxes',
                github: 'https://github.com/ozlongblack',
                linkedin: 'https://www.linkedin.com/in/kihwan-cho-88440470/',
              },
              features: [
                {
                  title: 'Functional Programming',
                  summary:
                    'JavaScript is my favorite language. I follow Functional Programming principles in order to improve Immutability and Readability.',
                },
                {
                  title: 'UI/UX',
                  summary:
                    'I love beautiful user interfaces. I believe that the Golden Ratio is the key factor for systematic and scientific designs.',
                },
                {
                  title: 'Data Visualization',
                  summary:
                    'Informaton is beautiful. Visualizing correlations in complex data enriches our applications.',
                },
              ],
              stack: [
                {
                  name: 'javascript',
                  label: 'Javascript',
                  type: 'Front-end',
                  link: 'https://en.wikipedia.org/wiki/JavaScript',
                },
                {
                  name: 'react',
                  label: 'React',
                  type: 'Front-end',
                  link: 'https://reactjs.org/',
                },
                {
                  name: 'redux',
                  label: 'Redux',
                  type: 'Front-end',
                  link: 'https://redux.js.org/',
                },
                {
                  name: 'd3',
                  label: 'D3',
                  type: 'Front-end',
                  link: 'https://d3js.org/',
                },
                {
                  name: 'angular',
                  label: 'Angular',
                  type: 'Front-end',
                  link: 'https://angular.io/',
                },
                {
                  name: 'rxjs',
                  label: 'RxJS',
                  type: 'Front-end',
                  link: 'http://reactivex.io/',
                },
                {
                  name: 'html',
                  label: 'HTML',
                  type: 'Front-end',
                  link: 'https://en.wikipedia.org/wiki/HTML',
                },
                {
                  name: 'lodash',
                  label: 'Lodash/FP',
                  type: 'Front-end',
                  link: 'https://lodash.com',
                },
                {
                  name: 'css',
                  label: 'CSS',
                  type: 'Front-end',
                  link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
                },
                {
                  name: 'sass',
                  label: 'Sass',
                  type: 'Front-end',
                  link: 'https://sass-lang.com/',
                },
                {
                  name: 'storybook',
                  label: 'Storybook',
                  type: 'Front-end',
                  link: 'https://storybook.js.org/',
                },
                {
                  name: 'nodejs',
                  label: 'Node.js',
                  type: 'Back-end',
                  link: 'https://nodejs.org',
                },
                {
                  name: 'aws',
                  label: 'AWS',
                  type: 'CI/CD',
                  link: 'https://aws.amazon.com/',
                },
                {
                  name: 'googleCloud',
                  label: 'Google Cloud',
                  type: 'CI/CD',
                  link: 'https://cloud.google.com',
                },
                {
                  name: 'flow',
                  label: 'Flow',
                  type: 'Type Checker',
                  link: 'https://flow.org/',
                },
                {
                  name: 'typescript',
                  label: 'Typescript',
                  type: 'Type Checker',
                  link: 'https://www.typescriptlang.org/',
                },
                {
                  name: 'jest',
                  label: 'Jest',
                  type: 'Test',
                  link: 'https://jestjs.io/',
                },
                {
                  name: 'sketch',
                  label: 'Sketch',
                  type: 'UI/UX',
                  link: 'https://www.sketch.com/',
                },
                {
                  name: 'photoshop',
                  label: 'Photoshop',
                  type: 'UI/UX',
                  link: 'https://www.adobe.com',
                },
                {
                  name: 'illustrator',
                  label: 'Illustrator',
                  type: 'UI/UX',
                  link: 'https://www.adobe.com',
                },
              ],
            }),
          );
        }, 1000),
    );
  },
};
