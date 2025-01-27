import { theme } from '@primeuix/styles/overlaybadge';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-overlaybadge'
};

export default BaseStyle.extend({
    name: 'overlaybadge',
    theme,
    classes
});
