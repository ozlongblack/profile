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
            experience: [
              {
                id: 'winning',
                startDate: '20190701',
                company: 'Winning Group',
                location: 'Sydney, Australia',
                role: 'Senior Front-end Developer',
                summary: [
                  'Develop and manage Appliances Online (https://www.appliancesonline.com.au/).',
                  'Leading front-end development using the latest version of Angular/NGRX',
                  'Working closely with Back-end developers and design team.',
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
                  'Developed and provided web applications using React/Redux and Angular 6/RXJS to multiple clients.',
                  'Led front-end development to build a Business Intelligence application.',
                  'Successfully productized a web application for Woolworths.',
                  'Led data visualization implementation using d3.js.',
                  'Followed Functional Programming and Test-Driven Development pattern.',
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
                  'Developed and managed multiple web applications to provide internal/external Open APIs to over 2,000 internal employees and over 5,000 customers.',
                  'Contributed to customer satisfaction with technical support.',
                  'Led front-end development using React and Angularjs in Platform architecture team.',
                  'Designed User Interface and implemented Responsive Web Design.',
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
                  'Successfully developed and provided web-based integrated systems using Javascript and IBM solutions across multiple major companies in Korea (LG Electronics, Korean Air Lines, Kyobo Life Insurance).',
                  'Analyzed a variety of data and utilized Natural Language Processing to find valuable insights using IBM Watson Explorer.',
                  'My team made a best practice providing an integrated NLP solution to Korean Air Lines. (https://www.ibm.com/case-studies/koreanairlines)',
                  'Implemented multiple web-based dashboard applications using Javascript, dojo, jQuery and IBM Cognos BI solution.',
                ],
              },
            ],
          }),
        );
      }, 0),
    );
  },
};
