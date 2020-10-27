<template>
  <header class="header">
    <div class="header-row">
      <SkipLink />
      <LogoLink />
      <SearchBar class="search-group" />
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
.header {
  max-width: $w-content-max - ($s-xl * 2);
  padding: $s-xl;
  margin: auto;
}
.header-row {
  display: flex;

  > * + * {
    padding-left: $s-m;
  }
}

.search-group {
  flex: 1 1 auto;
  text-align: right;
}
</style>
