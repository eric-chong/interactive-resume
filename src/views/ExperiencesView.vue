<template>
  <div class="experiences-view">
    <DrawerPanel />
    <WorkExperiences />
  </div>
</template>

<script setup lang="ts">
import WorkExperiences from '@/components/WorkExperiences.vue'
import DrawerPanel from '@/components/DrawerPanel.vue'
</script>

<style lang="scss">
.experiences-view {
  position: relative;
}
</style>
