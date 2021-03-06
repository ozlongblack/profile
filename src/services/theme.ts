import { Either } from 'monet';

export default {
  get(id: string): Promise<Either<Error, {}>> {
    const themes: any = {
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
          strokeColor: '#ddd',
          guideColor: '#eee',
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
          strokeColor: '#6c7a89',
          guideColor: '#555',
        },
      },
    };

    return new Promise((resolve: Function): any =>
      setTimeout((): void => {
        resolve(Either.Right(themes[id]));
      }, 0),
    );
  },
};
