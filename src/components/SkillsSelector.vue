<template>
  <div class="skills-selector">
    <p class="skills-selector__desription">
      Select one or more skills to highlight related experiences:
    </p>
    <div class="skills-selector__section" v-for="category in categories" :key="category">
      <div class="skills-selector__subtitle">
        <span>{{ category }}</span>
      </div>
      <v-chip
        class="skills-selector__skill-chip"
        v-for="skill in skillsInCategory(category).sort()"
        :key="skill"
        :prepend-icon="getPrependIcon(skill)"
        :color="getChipColor(skill)"
        density="compact"
        size="small"
        @click="onSkillClick(skill)"
        >{{ getSkillDisplayName(skill) }}</v-chip
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiCheck } from '@mdi/js'
import { SkillCategory, SkillsMap } from '@/enums'
import { useExperiencesStore } from '@/stores/useExperiencesStore'
import type { AllSkills } from '@/types/skills'
import { getSkillDisplayName } from '@/utils/skillsHelper'

const categories = ref(Object.keys(SkillCategory))

const { highlightSkills, toggleHighlightSkills } = useExperiencesStore()

const skillsInCategory = (category: string) => {
  return Object.keys((SkillsMap as any)[category]) as Array<AllSkills>
}

const onSkillClick = (skill: AllSkills) => {
  toggleHighlightSkills(skill)
}

const getPrependIcon = (skill: AllSkills) => {
  return isSkillSelected(skill) ? mdiCheck : undefined
}

const getChipColor = (skill: AllSkills) => {
  return isSkillSelected(skill) ? 'success' : undefined
}

const isSkillSelected = (skill: AllSkills) => {
  return highlightSkills.includes(skill)
}
</script>

<style lang="scss">
.skills-selector {
  padding: 8px 16px;
}
.skills-selector__desription {
  font-size: 12px;
  margin: 4px 0;
}
.skills-selector__section {
  margin-bottom: 16px;
}
.skills-selector__subtitle {
  position: relative;
  font-size: 12px;
  z-index: 1;
  text-transform: uppercase;
  color: rgb(var(--v-theme-text-color-grey));

  &:before {
    border-top: 1px solid rgb(var(--v-theme-border-light-2));
    content: '';
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }
  span {
    background: rgb(var(--v-theme-surface));
    padding: 0 4px;
    margin-left: 8px;
  }
}
.skills-selector__skill-chip {
  margin-right: 4px;
}
</style>
