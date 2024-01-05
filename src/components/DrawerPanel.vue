<template>
  <div class="drawer-panel">
    <div class="drawer-pane__wrapper" :class="{ opened: isOpen }">
      <div class="drawer-panel__toggle-icons">
        <v-icon :icon="mdiFormatColorHighlight" @click="toggleDrawer('highlight')" />
        <v-icon :icon="mdiChartBubble" @click="toggleDrawer('chart')" />
      </div>
      <div class="drawer-panel__content">
        <div v-if="drawerName === 'highlight'">Highlighter</div>
        <div v-if="drawerName === 'chart'">Bubble chart</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiFormatColorHighlight, mdiChartBubble } from '@mdi/js'

const isOpen = ref(false)
const drawerName = ref('highlight')

const toggleDrawer = (name: string) => {
  if (!isOpen.value || (isOpen.value && drawerName.value === name)) {
    isOpen.value = !isOpen.value
  }
  drawerName.value = name
}
</script>

<style lang="scss">
.drawer-panel {
  display: flex;
  position: absolute;
  right: 0;
  z-index: 9;
  height: 100%;
  overflow-x: hidden;
}
.drawer-pane__wrapper {
  display: flex;
  right: -200px;
  position: relative;
  transition: right 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  &.opened {
    right: 0;
  }
}
.drawer-panel__toggle-icons {
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  i {
    padding: 8px;
    width: 40px;
    height: 40px;
    border-left: 1px solid rgb(var(--v-theme-border-light-2));
    border-top: 1px solid rgb(var(--v-theme-border-light-2));
    border-bottom: 1px solid rgb(var(--v-theme-border-light-2));
    &:first-of-type {
      border-top-left-radius: 4px;
      background: rgb(var(--v-theme-background-red));
    }
    &:last-of-type {
      border-bottom-left-radius: 4px;
      background: rgb(var(--v-theme-background-orange));
    }
  }
}
.drawer-panel__content {
  background: rgb(var(--v-theme-surface));
  border-left: 1px solid rgb(var(--v-theme-border-light-2));
  width: 200px;
}
</style>
