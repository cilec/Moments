/* eslint-disable */

import IconIconShichangjianguanju from './IconIconShichangjianguanju';
import IconDianzan from './IconDianzan';
import IconXinxi1 from './IconXinxi1';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon_shichangjianguanju':
      return <IconIconShichangjianguanju {...rest} />;
    case 'dianzan':
      return <IconDianzan {...rest} />;
    case 'xinxi-1':
      return <IconXinxi1 {...rest} />;

  }

  return null;
};

export default IconFont;
