import { withInstall, withNoopInstall } from '@shy-design/utils';
import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';

export const ShyButton = withInstall(Button, { ButtonGroup });
export const ElButtonGroup = withNoopInstall(ButtonGroup);
export default ShyButton;
export * from './src/button';
