<template>
  <div :class="namespace.b('group')">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, toRef } from 'vue';
import { useNamespace } from '@shy-design/hooks';
import { buttonGroupProps } from './button-group';
import { buttonGroupContextKey } from '@shy-design/tokens';

defineOptions({ name: 'ShyButtonGroup' });
const namespace = useNamespace('button');

const props = defineProps(buttonGroupProps);

provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  }),
);
</script>

<style lang="scss" scoped></style>
