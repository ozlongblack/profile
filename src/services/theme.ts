import { Either } from 'monet';

export default {
  get(id: string): Promise<Either<Error, {}>> {
    const themes = {
      default: {
        header: {
          fontColor: '#6c7a89',
        },
        footer: {
          backgroundColor: 'transparent',
          fontColor: '#6c7a89',
        },
        general: {
          backgroundColor: 'transparent',
          placeholderColor: '#f5f5f5',
          fontTitleColor: '#333',
          fontLabelColor: '#6c7a89',
          fontDescriptionColor: '#999',
          borderColor: '#eee',
        },
        chart: {
          strokeColor: '#eee',
          guideColor: '#ddd',
        },
      },
      dark: {
        header: {
          fontColor: '#ddd',
        },
        footer: {
          backgroundColor: '#424242',
          fontColor: '#ddd',
        },
        general: {
          backgroundColor: '#303030',
          placeholderColor: 'transparent',
          fontTitleColor: '#333',
          fontLabelColor: '#f5f5f5',
          fontDescriptionColor: '#ccc',
          borderColor: '#6c7a89',
        },
        chart: {
          strokeColor: '#eee',
          guideColor: '#6c7a89',
        },
      },
    };

    return new Promise(
      (resolve: Function): NodeJS.Timeout =>
        setTimeout((): void => {
          resolve(Either.Right(themes[id]));
        }, 0),
    );
  },
};
