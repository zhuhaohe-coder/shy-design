import type { InjectionKey } from 'vue';
import type { ButtonProps } from '@shy-design/components/button';

export interface ButtonGroupContext {
  size?: ButtonProps['size'];
  type?: ButtonProps['type'];
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol('buttonGroupContextKey');
