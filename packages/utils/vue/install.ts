import type { App, Plugin } from 'vue';
import { NOOP } from '@vue/shared';

export type SFCWithInstall<T> = T & Plugin;
export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  (main as SFCWithInstall<T>).install = (app: App) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      // 将来可以通过基础组件访问同组别的其他组件，例如：ElButton.ButtonGroup 同样可减少用户需要手动引用的代码量
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};
export const withNoopInstall = <T>(component: T) => {
  // NOOP 的类型其实就是 () => void 表示不返回任何内容的函数
  (component as SFCWithInstall<T>).install = NOOP;

  return component as SFCWithInstall<T>;
};
