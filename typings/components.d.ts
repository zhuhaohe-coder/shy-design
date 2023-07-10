import type Icon from '@shy-design/components/icon';
// For this project development
import '@vue/runtime-core';

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ShyIcon: typeof Icon;
  }
}

export {};
/** 当我们的 tsconfig.json 中的 isolatedModules 设置为 true 时，如果某个 ts 文件中没有一个
import or export 时，ts 则认为这个模块不是一个 ES Module 模块，它被认为是一个全局的脚本，
这个时候在文件中添加任意一个 import or export 都可以解决这个问题。
**/
