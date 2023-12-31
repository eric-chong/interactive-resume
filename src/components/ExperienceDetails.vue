<template>
  <div class="work-experience-details">
    <div class="work-experience-details__company">{{ company }}</div>
    <div class="work-experience-details__position">{{ position }}</div>
    <ul>
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

<style lang="scss"></style>
