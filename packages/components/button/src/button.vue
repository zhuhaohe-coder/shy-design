<template>
  <button
    ref="button"
    :class="[
      namespace.b(),
      namespace.m(_type),
      namespace.m(_size),
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
import { ref, inject, computed } from 'vue';
import { useNamespace } from '@shy-design/hooks';
import { buttonEmits, buttonProps } from './button';
import { buttonGroupContextKey } from '@shy-design/tokens';

defineOptions({ name: 'ShyButton' });

const props = defineProps(buttonProps);

const emit = defineEmits(buttonEmits);

const namespace = useNamespace('button');

const button = ref<HTMLButtonElement>();

const handleClick = (e: MouseEvent) => {
  emit('click', e);
};
// 使用 inject 取出祖先组件提供的依赖
const buttonGroupContext = inject(buttonGroupContextKey, null);
// 使用 computed 进行缓存计算
const _size = computed(() => props.size || buttonGroupContext?.size);
const _type = computed(() => props.type || buttonGroupContext?.type);

defineExpose({
  button,
});
</script>

<style lang="scss" scoped></style>
