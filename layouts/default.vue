<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: COLOR.PRIMARY,
      },
    }"
  >
    <slot />
  </a-config-provider>
</template>

<script lang="js" setup>
import { liff } from '@line/liff'
import { COLOR } from '~/config/color.config'

onMounted(() => {
  liff
    .init({ liffId: '1661497871-y6Xp2go9' })
    .then(() => {
      if (!liff.isLoggedIn()) {
        liff.login()
      }
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
