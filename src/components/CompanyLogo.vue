<template>
  <div class="company-logo">
    <img v-if="companyLogoImg" :src="companyLogoImg" />
    <v-icon
      v-if="!companyLogoImg"
      :icon="mdiBriefcaseVariantOutline"
      size="large"
      color="text-color-grey"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import diligentImg from '@/assets/companyLogos/diligent.png'
import central1Img from '@/assets/companyLogos/central1.png'
import { mdiBriefcaseVariantOutline } from '@mdi/js'

const { company } = defineProps({ company: String })
const companyLogoImgMap: Record<string, any> = {
  central1: central1Img,
  diligent: diligentImg
}
const companyLogoImg = computed(() => (company ? companyLogoImgMap[company] : null))
</script>

<style scoped lang="scss">
.company-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid rgb(var(--v-theme-border-light-1));
  border-radius: 8px;
}
</style>
