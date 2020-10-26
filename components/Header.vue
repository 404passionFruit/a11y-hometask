<template>
  <header>
    <SkipLink />
    <LangSwitch />
    <MainNav />
  </header>
</template>

<script>
import SkipLink from '@/components/Header/SkipLink'
import LangSwitch from '@/components/Header/LangSwitch'
import MainNav from '@/components/Header/MainNav'

export default {
  components: { SkipLink, LangSwitch, MainNav },
}
</script>

<style lang="scss">
//
</style>
