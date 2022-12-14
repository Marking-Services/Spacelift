import React from 'react';

import FilterClear from './FilterClear.twig';

import FilterClearData from './FilterClear.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/FilterClear' };

export const filterClear = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: FilterClear(FilterClearData),
    }}
  />
);
