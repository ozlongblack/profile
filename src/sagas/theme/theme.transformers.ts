import { Map } from 'immutable';
import { Theme } from 'types/Theme';

export const toMap: Function = (data: Theme): Map<string, any> => Map(data);
