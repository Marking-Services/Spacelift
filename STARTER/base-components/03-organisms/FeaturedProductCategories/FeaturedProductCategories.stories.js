import React from 'react';

import FeaturedProductCategories from './FeaturedProductCategories.twig';

import FeaturedProductCategoriesData from './FeaturedProductCategories.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Featured Product Categories' };

export const featuredProductCategories = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: FeaturedProductCategories(FeaturedProductCategoriesData),
    }}
  />
);
