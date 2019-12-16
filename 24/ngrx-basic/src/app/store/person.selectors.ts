import * as fromPersonReducer from './person.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const peopleState = createFeatureSelector<fromPersonReducer.PeopleState>('people');


export const {
    selectIds,
    selectEntities,
    selectAll,
} = fromPersonReducer.peopleAdapter.getSelectors(peopleState);