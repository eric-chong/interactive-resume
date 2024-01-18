<template>
  <div class="personal-projects">
    <InfoRow
      v-for="(project, index) in projects"
      :key="index"
      :listItems="project.highlights"
      :isRowHighlighted="isProjectHighlighted(project)"
    >
      <template v-slot:icon>
        <RowIcon :iconKey="project.icon" />
      </template>
      <template v-slot:title>
        {{ project.title }}
      </template>
      <template v-slot:subtitle>
        {{ project.description }}
      </template>
      <template v-slot:period> ({{ project.year }}) </template>
    </InfoRow>
  </div>
</template>

<script setup lang="ts">
import projects from '@/stores/projectsData'
import { useExperiencesStore } from '@/stores/useExperiencesStore'
import type { Project } from '@/types/Project'
import RowIcon from './RowIcon.vue'
import InfoRow from './InfoRow.vue'

const { highlightSkills } = useExperiencesStore()

function isProjectHighlighted(project: Project) {
  return (
    highlightSkills.length > 0 &&
    highlightSkills.filter((highlightSkill) => project.skills?.includes(highlightSkill)).length ===
      highlightSkills.length
  )
}
</script>

<style lang="scss">
.personal-projects {
  padding: 16px 0;
}
</style>
