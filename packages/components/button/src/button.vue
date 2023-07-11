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
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <shy-icon v-else :class="namespace.is('loading')">
        <component :is="loadingIcon" />
      </shy-icon>
    </template>
    <shy-icon v-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon"></slot>
    </shy-icon>
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
