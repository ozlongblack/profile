import axios from 'axios';
import { Either, Left, Maybe, Right } from 'monet';

const BASE_URL: string = Maybe.fromNull(process.env.REACT_APP_API_URL).orSome(
  '',
);

export default {
  getList(): Promise<Either<Error, {}>> {
    return axios
      .get(`${BASE_URL}/entries?category=animals&https=true`)
      .then((result: { data: any[] }): Either<Error, {}> => Right(result.data))
      .catch((error: Error): Either<Error, {}> => Left(error));
  },
};
