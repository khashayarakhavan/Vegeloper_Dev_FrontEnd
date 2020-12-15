import { createSelector } from 'reselect';

const selectVegeloper = state => state.vegeloper;

export const selectMenuOpen = createSelector(
  [selectVegeloper],
  (pageState) => pageState.menuOpen
);
