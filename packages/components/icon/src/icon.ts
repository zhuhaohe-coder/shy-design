import type { PropType, ExtractPropTypes } from 'vue';

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
} as const;

export type Props = ExtractPropTypes<typeof iconProps>;

import type Icon from './icon.vue';
export type IconInstance = InstanceType<typeof Icon>;
