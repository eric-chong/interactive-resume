<template>
  <div class="work-experiences">
    <div
      class="work-experience__item"
      v-for="(workExperience, index) in workExperiences"
      :key="index"
    >
      <div class="work-experience__icon">
        <CompanyLogo :company="workExperience.icon" />
      </div>

      <ExperienceDetails
        :company="workExperience.company"
        :position="workExperience.position"
        :start="workExperience.start"
        :end="workExperience.end"
        :achievements="workExperience.achievements"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExperiencesStore } from '@/stores/useExperiencesStore'
import CompanyLogo from './CompanyLogo.vue'
import ExperienceDetails from './ExperienceDetails.vue'

const { workExperiences } = useExperiencesStore()
</script>

<style lang="scss">
.work-experiences {
  padding: 16px 0;
}
.work-experience__item {
  display: flex;
  position: relative;
}

.work-experience__details {
  flex: 1;
  margin-left: 1rem;
}

$logo-top-position: 15px;
$logo-left-position: 25px;
$logo-width: 50px;
$logo-height: 50px;

@media (min-width: 1024px) {
  .work-experience__item {
    margin-top: 0;
    padding: 15px 20px 15px 90px;
  }

  .work-experience__icon {
    top: $logo-top-position;
    left: $logo-left-position;
    position: absolute;
  }

  .work-experience__item:before {
    content: ' ';
    border-left: 1px solid rgb(var(--v-theme-border-light-1));
    position: absolute;
    left: $logo-left-position + ($logo-width / 2);
    top: 0;
    height: $logo-top-position;
  }

  .work-experience__item:after {
    content: ' ';
    border-left: 1px solid rgb(var(--v-theme-border-light-1));
    position: absolute;
    left: $logo-left-position + ($logo-width / 2);
    top: $logo-top-position + $logo-height;
    height: calc(100% - $logo-top-position - $logo-height);
  }

  .work-experience__item:first-of-type:before {
    display: none;
  }

  .work-experience__item:last-of-type:after {
    display: none;
  }
}
</style>
