import { Either } from 'monet';

export default {
  get(): Promise<Either<Error, {}>> {
    return new Promise((resolve: Function): any =>
      setTimeout((): void => {
        resolve(
          Either.Right({
            name: 'Kihwan',
            role: 'Front-end Developer',
            startYear: '2011',
            keywords: [
              'Javascript',
              'Angular',
              'React',
              'Data visualization',
              'UI/UX',
            ],
            location: 'Sydney',
            links: {
              github: 'https://github.com/ozlongblack',
              linkedin: 'https://www.linkedin.com/in/kihwan-cho-88440470/',
            },
            features: [
              {
                title: 'Functional Programming',
                summary:
                  'My favorite language is JavaScript, where I embrace Functional Programming principles to strengthen immutability and readability.',
              },
              {
                title: 'UI/UX',
                summary:
                  'I am passionate about crafting beautiful user interfaces, guided by the Golden Ratio as a foundation for systematic and scientific design.',
              },
              {
                title: 'Data Visualization',
                summary:
                  'Visualizing correlations in complex data adds clarity and depth, enriching applications with meaningful insights.',
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
                name: 'typescript',
                label: 'Typescript',
                type: 'Type Checker',
                link: 'https://www.typescriptlang.org/',
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
                name: 'html',
                label: 'HTML',
                type: 'Front-end',
                link: 'https://en.wikipedia.org/wiki/HTML',
              },

              {
                name: 'css',
                label: 'CSS',
                type: 'Front-end',
                link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
              },
              {
                name: 'lodash',
                label: 'Lodash/FP',
                type: 'Front-end',
                link: 'https://lodash.com',
              },
              {
                name: 'figma',
                label: 'Figma',
                type: 'UI/UX',
                link: 'https://www.figma.com/',
              },
              {
                name: 'jest',
                label: 'Jest',
                type: 'Test',
                link: 'https://jestjs.io/',
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
            ],
            experience: [
              {
                id: 'winning',
                startDate: '20190701',
                company: 'Winning Group',
                location: 'Sydney, Australia',
                role: 'Senior Front-end Developer',
                summary: [
                  'As the Lead Front-end Developer for Appliances Online (https://www.appliancesonline.com.au), I oversee all aspects of web application feature development. My responsibilities include:',
                  'Feature Development: Managing the end-to-end development of various e-commerce features and UIs.',
                  'Performance Optimization: Actively engaged in performance tuning initiatives, including:',
                  '- Maintaining the application with the latest Angular versions and features.',
                  '- Migrating to Angular standalone components and a zoneless app architecture.',
                  '- Implementing state management using Angular Signals and NGRX Signal Store.',
                  '- Improving styling efficiency with CSS custom properties (CSS variables).',
                  '- Enhancing component reusability across multiple web applications using NX monorepo.',
                ],
              },
              {
                id: 'stationfive',
                startDate: '20171001',
                endDate: '20190630',
                company: 'StationFive',
                location: 'Sydney, Australia',
                role: 'Front-end Developer',
                summary: [
                  'Successfully delivered client-facing web applications using frameworks like React/Redux and Angular 6/RxJS.',
                  'Led the front-end development of a new Business Intelligence application, including the implementation of advanced data visualization using D3.js.',
                  'Managed the successful productization and launch of a web application for Woolworths.',
                  'Advocated for and applied Functional Programming and Test-Driven Development principles to improve code quality and maintainability.',
                ],
              },
              {
                id: 'skplanet',
                startDate: '20150823',
                endDate: '20170630',
                company: 'SK Planet',
                location: 'Pangyo, Korea',
                role: 'Front-end Developer',
                summary: [
                  'Developed and managed multiple web applications to deliver Open APIs to a large user base of over 7,000 internal employees and external customers.',
                  'Led front-end development for the Platform Architecture team, utilizing React and AngularJS.',
                  'Designed and implemented user interfaces with a focus on Responsive Web Design for a seamless user experience.',
                  'Provided technical support to enhance customer satisfaction.',
                ],
              },
              {
                id: 'ibm',
                startDate: '20110101',
                endDate: '20150823',
                company: 'IBM Korea',
                location: 'Seoul, Korea',
                role: 'Software Engineer',
                summary: [
                  'Engineered and delivered web-based integrated systems for major Korean companies, including LG Electronics, Korean Air Lines, and Kyobo Life Insurance.',
                  'Leveraged IBM Watson Explorer to analyze diverse datasets and extract valuable insights using Natural Language Processing (NLP).',
                  'Contributed to a best-practice integrated NLP solution for Korean Air Lines, which was featured as an IBM case study.',
                  'Designed and implemented multiple web-based dashboard applications using JavaScript, dojo, jQuery, and IBM Cognos BI.',
                ],
              },
            ],
          }),
        );
      }, 0),
    );
  },
};
