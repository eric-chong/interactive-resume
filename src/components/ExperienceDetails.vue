<template>
  <div class="work-experience-details">
    <h3 class="work-experience-details__company">{{ company }}</h3>
    <div class="work-experience-details__position">{{ position }}</div>
    <ul class="work-experience-details__achievements">
      <li v-for="(achievement, index) in achievements" :key="index">
        {{ achievement.description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { type WorkAchievement } from '@/types'

const { company, position, achievements } = defineProps({
  company: String,
  position: String,
  achievements: Array<WorkAchievement>
})
</script>

<style scoped lang="scss">
.work-experience-details__position {
  font-size: 14px;
  font-style: italic;
}
.work-experience-details__achievements {
  margin-top: 16px;
  margin-left: 16px;
  font-size: 14px;
}
</style>
