<template>
  <div>
    <shy-icon :color="'skyblue'" :size="50"><EditIcon /></shy-icon>
    <hr />
    <shy-button type="danger" disabled>Danger</shy-button>
    <shy-button>按钮</shy-button>
    <shy-button type="primary">Primary</shy-button>
    <shy-button type="success" plain>Success</shy-button>
    <shy-button type="info" round>Info</shy-button>
    <shy-button type="warning" circle>Warning</shy-button>
    <shy-button type="danger" disabled loading>Danger</shy-button>
    <shy-button size="large" ref="buttonRef">
      <template #icon><EditIcon /></template>
    </shy-button>
    <shy-button size="small" @click="handleClick" :icon="EditIcon"></shy-button>
  </div>
</template>

<script setup lang="ts">
import EditIcon from './components/EditIcon.vue';
// import ShyIcon from '@shy-design/components/icon';
// import '@shy-design/theme-chalk/src/index.scss';
import { ref, nextTick } from 'vue';

const buttonRef = ref();
nextTick(() => {
  console.log(buttonRef.value.button);
});

const handleClick = (e: MouseEvent) => {
  console.log(e.target);
};
</script>

<style lang="scss" scoped></style>
