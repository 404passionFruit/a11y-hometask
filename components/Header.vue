<template>
  <header>
    <div>
      <SkipLink />
      <LogoLink />
      <SearchBar />
      <LangSwitch />
      <Modal />
    </div>
    <MainNav />
  </header>
</template>

<script>
import SkipLink from '@/components/Header/SkipLink'
import LangSwitch from '@/components/Header/LangSwitch'
import MainNav from '@/components/Header/MainNav'
import LogoLink from '@/components/Header/LogoLink'
import SearchBar from '@/components/Header/SearchBar'
import Modal from '@/components/Modal'

export default {
  components: { SkipLink, LangSwitch, MainNav, Modal, LogoLink, SearchBar },
}
</script>

<style lang="scss">
//
.filler {
  height: 900px;
}
</style>
