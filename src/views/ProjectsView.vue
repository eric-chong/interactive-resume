<template>
  <div class="projects-view">
    <DrawerPanel />
    <PersonalProjects />
  </div>
</template>

<script setup lang="ts">
import PersonalProjects from '@/components/PersonalProjects.vue'
import DrawerPanel from '@/components/DrawerPanel.vue'
</script>

<style scoped lang="scss">
.projects-view {
  position: relative;
}
</style>
