<template>
  <header>
    <SkipLink />
    <LangSwitch />

    <div class="filler"></div>
    <Modal />
    <MainNav />
  </header>
</template>

<script>
import SkipLink from '@/components/Header/SkipLink'
import LangSwitch from '@/components/Header/LangSwitch'
import MainNav from '@/components/Header/MainNav'
import Modal from '@/components/Modal'

export default {
  components: { SkipLink, LangSwitch, MainNav, Modal },
}
</script>

<style lang="scss">
//
.filler {
  height: 900px;
}
</style>
