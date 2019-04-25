import { Map } from 'immutable';
import { Profile } from 'types/Profile';

export const toMap: Function = (data: Profile): Map<string, any> => Map(data);
