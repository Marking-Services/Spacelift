import React from 'react';

import CustomizationCalloutVariation from './CustomizationCalloutVariation.twig';

import CustomizationCalloutVariationData from './CustomizationCalloutVariation.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Customization Callout Variation' };

export const customizationCalloutVariation = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: CustomizationCalloutVariation(CustomizationCalloutVariationData),
    }}
  />
);
