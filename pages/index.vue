<template>
  <main>
    {{ $t('hello') }}
    <LangSwitch />
  </main>
</template>

<script>
import LangSwitch from '@/components/LangSwitch'
export default {
  components: { LangSwitch },
}
</script>

<style lang="scss">
//
</style>
