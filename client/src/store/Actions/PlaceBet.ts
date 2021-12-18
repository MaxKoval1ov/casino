import { PLACEBET } from '../Constants/ActionTypes';

export const PlaceBet = (cash) => ({
    type: PLACEBET,
    cash
})