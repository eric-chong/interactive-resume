<template>
  <div class="row-icon">
    <img v-if="iconImg" :src="iconImg" />
    <v-icon
      v-if="!iconImg"
      :icon="mdiBriefcaseVariantOutline"
      size="large"
      color="text-color-grey"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import central1Img from '@/assets/companyLogos/central1.png'
import diligentImg from '@/assets/companyLogos/diligent.png'
import ibmSvg from '@/assets/companyLogos/ibm.svg'
import liFungImg from '@/assets/companyLogos/lifung.png'
import meanjsImg from '@/assets/logoIcons/meanjs.png'
import vueSvg from '@/assets/logoIcons/vue.svg'
import { mdiBriefcaseVariantOutline } from '@mdi/js'

const { iconKey } = defineProps({ iconKey: String })
const imgMap: Record<string, any> = {
  central1: central1Img,
  diligent: diligentImg,
  lifung: liFungImg,
  meanjs: meanjsImg,
  ibm: ibmSvg,
  vue: vueSvg
}
const iconImg = computed(() => (iconKey ? imgMap[iconKey] : null))
</script>

<style scoped lang="scss">
.row-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid rgb(var(--v-theme-border-light-1));
  border-radius: 8px;

  img {
    width: 26px;
    height: 26px;
  }
}
</style>
