<template>
  <i :class="namespace.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { useNamespace } from '@shy-design/hooks';
import { iconProps } from './icon';
// CSSProperties 是 Vue3 提供的 CSS 属性的类型
import type { CSSProperties } from 'vue';
import { computed } from 'vue';

defineOptions({ name: 'ShyIcon' });
const namespace = useNamespace('icon');
const props = defineProps(iconProps);

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {};
  return {
    fontSize: props.size ? addUnit(props.size) : undefined,
    '--color': props.color,
  };
});

const addUnit = (value: string | number) => {
  if (!value) return undefined;
  return `${value}px`;
};
</script>

<style lang="scss" scoped></style>
