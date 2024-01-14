<template>
  <div class="work-experiences">
    <InfoRow
      v-for="(workExperience, index) in workExperiences"
      :key="index"
      :listItems="workExperience.achievements"
    >
      <template v-slot:icon>
        <CompanyLogo :company="workExperience.icon" />
      </template>
      <template v-slot:title>
        {{ workExperience.company }}
      </template>
      <template v-slot:subtitle>
        {{ workExperience.position }}
      </template>
      <template v-slot:period>
        ({{ workExperience.start }} ~ {{ workExperience.end || 'PRESENT' }})
      </template>
    </InfoRow>
  </div>
</template>

<script setup lang="ts">
import workExperiences from '@/stores/workExperiencesData'
import CompanyLogo from './CompanyLogo.vue'
import InfoRow from './InfoRow.vue'
</script>

<style lang="scss">
.work-experiences {
  padding: 16px 0;
}
</style>
