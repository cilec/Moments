/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconIconShichangjianguanju = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M553.472 260.608l53.248-38.912c3.072-2.048 1.536-6.656-2.048-6.656h-66.048c-1.536 0-3.072-1.024-3.584-2.56l-19.968-62.976c-1.024-3.584-6.144-3.584-7.168 0l-19.968 62.976c-0.512 1.536-2.048 2.56-3.584 2.56h-66.56c-3.584 0-5.12 4.608-2.048 6.656l53.248 38.912c1.536 1.024 2.048 2.56 1.536 4.096l-20.48 62.976c-1.024 3.584 2.56 6.144 5.632 4.096l53.248-38.912c1.536-1.024 3.072-1.024 4.608 0l53.248 38.912c3.072 2.048 6.656-0.512 5.632-4.096l-20.48-62.976c-0.512-1.536 0-3.072 1.536-4.096z m-216.064 45.056L327.68 283.136c-1.536-3.072-6.144-3.072-7.168 0.512l-5.12 23.552c-0.512 1.536-1.536 2.56-3.072 3.072l-24.064 2.048c-3.584 0.512-4.608 5.12-1.536 6.656l20.992 12.288c1.536 1.024 2.048 2.56 1.536 4.096l-5.632 23.552c-1.024 3.584 3.584 6.144 6.144 3.584l18.432-15.872c1.024-1.024 3.072-1.024 4.096-0.512l20.992 12.8c3.072 2.048 6.656-1.536 5.12-4.608l-9.216-22.528c-0.512-1.536 0-3.072 1.024-4.096l17.92-15.872c2.56-2.56 1.024-6.656-2.56-6.656l-24.064 2.56c-2.048 0.512-3.584-0.512-4.096-2.048z m113.152 87.04l-15.36 18.432c-1.024 1.024-2.56 1.536-4.096 1.024l-22.528-9.216c-3.072-1.536-6.656 2.56-4.608 5.632l12.8 20.48c1.024 1.536 0.512 3.072-0.512 4.608l-15.872 18.432c-2.56 2.56 0 6.656 3.584 6.144l23.552-5.632c1.536-0.512 3.072 0.512 4.096 1.536l12.8 20.48c2.048 3.072 6.656 2.048 6.656-1.536l1.536-24.064c0-1.536 1.024-3.072 3.072-3.584l23.552-5.632c3.584-1.024 4.096-5.632 0.512-7.168l-22.528-9.216c-1.536-0.512-2.56-2.048-2.56-3.584l2.048-24.064c0.512-3.584-4.096-5.632-6.144-3.072z m165.888 9.728l-22.528 9.216c-1.536 0.512-3.072 0-4.096-1.024l-15.872-18.432c-2.56-2.56-6.656-1.024-6.656 2.56l2.048 24.576c0 1.536-1.024 3.072-2.048 3.584l-22.016 9.216c-3.072 1.536-3.072 6.144 0.512 7.168l23.552 5.632c1.536 0.512 2.56 1.536 3.072 3.072l2.048 24.064c0.512 3.584 5.12 4.608 6.656 1.536l12.288-20.992c1.024-1.536 2.56-2.048 4.096-1.536l23.552 5.632c3.584 1.024 6.144-3.584 3.584-6.144l-15.872-18.432c-1.024-1.024-1.024-3.072-0.512-4.096l12.8-20.992c2.048-2.56-1.024-6.144-4.608-4.608z m90.624-93.696l-5.632-23.552c-1.024-3.584-5.632-4.096-7.168-0.512l-9.216 22.528c-0.512 1.536-2.048 2.56-3.584 2.56l-24.576-1.536c-3.584 0-5.632 4.096-2.56 6.656l18.432 15.36c1.024 1.024 1.536 2.56 1.024 4.096l-9.216 22.528c-1.536 3.072 2.56 6.656 5.632 4.608l20.48-12.8c1.536-1.024 3.072-0.512 4.096 0.512l18.432 15.36c2.56 2.048 6.656 0 6.144-3.584l-5.632-24.064c-0.512-1.536 0.512-3.072 1.536-4.096l20.48-12.8c3.072-2.048 2.048-6.656-1.536-6.656l-24.064-1.536c-1.536-0.512-2.56-1.536-3.072-3.072z m0.512 2.56"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M553.472 262.144l53.248-38.912c3.072-2.048 1.536-6.656-2.048-6.656h-66.048c-1.536 0-3.072-1.024-3.584-2.56l-19.968-62.976c-1.024-3.584-6.144-3.584-7.168 0l-19.968 62.976c-0.512 1.536-2.048 2.56-3.584 2.56h-66.56c-3.584 0-5.12 4.608-2.048 6.656l53.248 38.912c1.536 1.024 2.048 2.56 1.536 4.096l-20.48 62.976c-1.024 3.584 2.56 6.144 5.632 4.096l53.248-38.912c1.536-1.024 3.072-1.024 4.608 0l53.248 38.912c3.072 2.048 6.656-0.512 5.632-4.096l-20.48-62.976c-0.512-1.536 0-3.584 1.536-4.096z m-216.064 44.544L327.68 284.16c-1.536-3.072-6.144-3.072-7.168 0.512l-5.12 23.552c-0.512 1.536-1.536 2.56-3.072 3.072l-24.064 2.048c-3.584 0.512-4.608 5.12-1.536 6.656l20.48 12.8c1.536 1.024 2.048 2.56 1.536 4.096l-5.632 23.552c-1.024 3.584 3.584 6.144 6.144 3.584L327.68 348.16c1.024-1.024 3.072-1.024 4.096-0.512l20.992 12.8c3.072 2.048 6.656-1.536 5.12-4.608l-9.216-22.528c-0.512-1.536 0-3.072 1.024-4.096l17.92-15.872c2.56-2.56 1.024-6.656-2.56-6.656l-24.064 2.56c-1.536 0-3.072-1.024-3.584-2.56zM450.56 394.24l-15.36 18.432c-1.024 1.024-2.56 1.536-4.096 1.024L408.064 404.48c-3.072-1.536-6.656 2.56-4.608 5.632l12.8 20.48c1.024 1.536 0.512 3.072-0.512 4.608l-15.872 18.432c-2.56 2.56 0 6.656 3.584 6.144l23.552-5.632c1.536-0.512 3.072 0.512 4.096 1.536l12.8 20.48c2.048 3.072 6.656 2.048 6.656-1.536l1.536-24.064c0-1.536 1.024-3.072 3.072-3.584l23.552-5.632c3.584-1.024 4.096-5.632 0.512-7.168L456.704 424.96c-1.536-0.512-2.56-2.048-2.56-3.584l2.048-24.064c1.024-4.096-3.584-6.144-5.632-3.072z m165.888 9.216l-22.528 9.216c-1.536 0.512-3.072 0-4.096-1.024l-15.872-18.432c-2.56-2.56-6.656-1.024-6.656 2.56l2.048 24.576c0 1.536-1.024 3.072-2.048 3.584l-22.016 9.216c-3.072 1.536-3.072 6.144 0.512 7.168l23.552 5.632c1.536 0.512 2.56 1.536 3.072 3.072l2.048 24.064c0.512 3.584 5.12 4.608 6.656 1.536l12.288-20.992c1.024-1.536 2.56-2.048 4.096-1.536l23.552 5.632c3.584 1.024 6.144-3.584 3.584-6.144l-15.872-18.432c-1.024-1.024-1.024-3.072-0.512-4.096l12.8-20.992c2.048-2.56-1.024-6.144-4.608-4.608z m90.624-93.696l-5.632-23.552c-1.024-3.584-5.632-4.096-7.168-0.512l-9.216 22.528c-0.512 1.536-2.048 2.56-3.584 2.56l-24.576-1.536c-3.584 0-5.632 4.096-2.56 6.656l18.432 15.36c1.024 1.024 1.536 2.56 1.024 4.096l-9.216 22.528c-1.536 3.072 2.56 6.656 5.632 4.608l20.48-12.8c1.536-1.024 3.072-0.512 4.096 0.512l18.432 15.36c2.56 2.048 6.656 0 6.144-3.584l-5.632-24.064c-0.512-1.536 0.512-3.072 1.536-4.096l20.48-12.8c3.072-2.048 2.048-6.656-1.536-6.656l-24.064-1.536c-1.536 0-2.56-1.536-3.072-3.072z m0.512 3.072"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M844.8 836.096c89.6-87.552 145.92-209.92 145.92-345.6 0-259.584-205.312-470.528-462.848-480.256C244.224 0 12.288 239.104 30.72 522.24c8.192 121.856 61.44 231.424 143.36 311.808l-19.968 96.768c0 40.96 33.792 89.6 74.752 89.6h562.176c40.96 0 74.752-48.64 74.752-89.6l-20.992-94.72zM510.976 849.92C313.344 849.92 153.6 690.176 153.6 493.056s159.744-357.376 357.376-357.376 357.376 159.744 357.376 357.376S708.096 849.92 510.976 849.92z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M356.352 577.536v108.032c0 1.024 0.512 1.536 1.024 2.048L450.56 741.376c2.048 1.024 4.096-1.024 3.072-3.072l-93.184-161.792c-1.024-2.048-4.096-1.536-4.096 1.024zM248.832 741.376l93.184-53.76c0.512-0.512 1.024-1.024 1.024-2.048v-107.52c0-2.56-3.072-3.072-4.096-1.024L245.76 737.792c-1.024 2.048 1.024 4.608 3.072 3.584zM348.672 698.88l-94.208 54.272c-2.048 1.024-1.024 4.096 1.024 4.096h188.928c2.56 0 3.072-3.072 1.024-4.096l-94.208-54.272h-2.56z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <path
        d="M506.88 756.224v-108.032c0-1.024-0.512-1.536-1.024-2.048l-93.184-53.76c-2.048-1.024-4.096 1.024-3.072 3.072l93.184 161.792c0.512 2.56 4.096 1.536 4.096-1.024zM614.4 592.384l-93.184 53.76c-0.512 0.512-1.024 1.024-1.024 2.048v107.52c0 2.56 3.072 3.072 4.096 1.024l93.184-161.28c1.024-1.536-1.024-4.096-3.072-3.072zM514.56 634.88l94.208-54.272c2.048-1.024 1.024-4.096-1.024-4.096H418.816c-2.56 0-3.072 3.072-1.024 4.096L512 634.88h2.56z"
        fill={getIconColor(color, 4, '#333333')}
      />
      <path
        d="M683.008 577.536v108.032c0 1.024 0.512 1.536 1.024 2.048l93.184 53.76c2.048 1.024 4.096-1.024 3.072-3.072l-93.184-161.792c-1.024-2.048-4.096-1.536-4.096 1.024zM575.488 741.376l93.184-53.76c0.512-0.512 1.024-1.024 1.024-2.048v-107.52c0-2.56-3.072-3.072-4.096-1.024l-93.184 161.28c-1.536 1.536 1.024 4.096 3.072 3.072zM675.328 698.88l-94.208 54.272c-2.048 1.024-1.024 4.096 1.024 4.096h188.928c2.56 0 3.072-3.072 1.024-4.096l-94.208-54.272h-2.56z"
        fill={getIconColor(color, 5, '#333333')}
      />
    </svg>
  );
};

IconIconShichangjianguanju.defaultProps = {
  size: 18,
};

export default IconIconShichangjianguanju;
