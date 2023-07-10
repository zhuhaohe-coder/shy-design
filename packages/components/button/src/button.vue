<template>
  <button
    ref="button"
    :class="[
      namespace.b(),
      namespace.m(type),
      namespace.m(size),
      namespace.is('disabled', disabled),
      namespace.is('plain', plain),
      namespace.is('circle', circle),
      namespace.is('round', round),
    ]"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNamespace } from '@shy-design/hooks';
import { buttonEmits, buttonProps } from './button';

defineOptions({ name: 'ShyButton' });

defineProps(buttonProps);

const emit = defineEmits(buttonEmits);

const namespace = useNamespace('button');

const button = ref<HTMLButtonElement>();

const handleClick = (e: MouseEvent) => {
  emit('click', e);
};

defineExpose({
  button,
});
</script>

<style lang="scss" scoped></style>
