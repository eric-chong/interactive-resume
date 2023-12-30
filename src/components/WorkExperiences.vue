<template>
  <div class="work-experiences">
    <div
      class="work-experience__item"
      v-for="(workExperience, index) in workExperiences"
      :key="index"
    >
      <pre>{{ JSON.stringify(workExperience) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExperiencesStore } from '@/stores/useExperiencesStore'

const { workExperiences } = useExperiencesStore()
</script>

<style lang="scss"></style>
