<template>
  <div class="drawer-panel">
    <div class="drawer-pane__wrapper" :class="{ opened: isOpen }">
      <div class="drawer-panel__toggle-icons">
        <v-icon
          class="drawer-panel__toggle-highlight"
          :icon="mdiFormatColorHighlight"
          @click="toggleDrawer('highlight')"
        />
        <v-icon
          v-if="false"
          class="drawer-panel__toggle-bubble"
          :icon="mdiChartBubble"
          @click="toggleDrawer('chart')"
        />
      </div>
      <div class="drawer-panel__content">
        <h4 class="drawer-panel__content-header">
          {{ drawerName === 'highlight' ? 'Select skills' : 'Skills Bubble' }}
        </h4>
        <v-divider />
        <div class="drawer-panel__content-body">
          <SkillsSelector v-if="drawerName === 'highlight'" />
          <div v-if="drawerName === 'chart'">Bubble chart</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiFormatColorHighlight, mdiChartBubble } from '@mdi/js'
import SkillsSelector from './SkillsSelector.vue'

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
  right: -250px;
  position: relative;
  transition: right 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  &.opened {
    right: 0;
  }
}
.drawer-panel__toggle-icons {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  i {
    padding: 8px 2px;
    width: 26px;
    height: 40px;
    border-left: 1px solid rgb(var(--v-theme-border-light-2));
    border-top: 1px solid rgb(var(--v-theme-border-light-2));
    border-bottom: 1px solid rgb(var(--v-theme-border-light-2));
    &.drawer-panel__toggle-highlight {
      background: rgb(var(--v-theme-background-red));
    }
    &.drawer-panel__toggle-bubble {
      background: rgb(var(--v-theme-background-orange));
    }
    &:first-of-type {
      border-top-left-radius: 4px;
    }
    &:last-of-type {
      border-bottom-left-radius: 4px;
    }
  }
}
.drawer-panel__content {
  background: rgb(var(--v-theme-surface));
  border-left: 1px solid rgb(var(--v-theme-border-light-2));
  width: 250px;
}
.drawer-panel__content-header {
  font-size: 16px;
  padding: 8px 16px;
  height: 40px;
}
.drawer-panel__content-body {
  height: calc(100% - 41px);
  overflow: auto;
}
</style>
