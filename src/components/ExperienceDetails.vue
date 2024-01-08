<template>
  <div class="work-experience-details">
    <h3 class="work-experience-details__company">{{ company }}</h3>
    <div class="work-experience-details__position">
      <div class="work-experience-details__title">{{ position }}</div>
      <div class="work-experience-details__period">({{ start }} ~ {{ end || 'PRESENT' }})</div>
    </div>
    <ul class="work-experience-details__achievements">
      <li
        v-for="(achievement, index) in achievements"
        :key="index"
        :class="{
          'work-experience-details__achievement--highlighted':
            isAchievementHighlighted(achievement),
          'work-experience-details__achievement--muted': isAchievementMuted(achievement)
        }"
      >
        {{ achievement.description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useExperiencesStore } from '@/stores/useExperiencesStore'
import type { WorkAchievement } from '@/types'

const { company, position, achievements, start, end } = defineProps({
  company: String,
  position: String,
  start: String,
  end: String,
  achievements: Array<WorkAchievement>
})

const { highlightSkills } = useExperiencesStore()

function isAchievementHighlighted(achievement: WorkAchievement) {
  return (
    highlightSkills.length > 0 &&
    highlightSkills.filter((highlightSkill) => achievement.skills.includes(highlightSkill))
      .length === highlightSkills.length
  )
}

function isAchievementMuted(achievement: WorkAchievement) {
  const isHighlighted = isAchievementHighlighted(achievement)
  return highlightSkills.length > 0 && !isHighlighted
}
</script>

<style scoped lang="scss">
.work-experience-details__position {
  display: flex;
  gap: 8px;
}
.work-experience-details__title {
  font-size: 14px;
  font-style: italic;
}
.work-experience-details__period {
  font-size: 13px;
  font-style: italic;
  color: rgb(var(--v-theme-text-color-grey));
}
.work-experience-details__achievements {
  margin-top: 16px;
  margin-left: 16px;
  font-size: 14px;
}
.work-experience-details__achievement--highlighted {
  color: rgb(var(--v-theme-primary));
}
.work-experience-details__achievement--muted {
  color: rgb(var(--v-theme-text-color-muted));
}
</style>
