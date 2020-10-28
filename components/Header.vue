<template>
  <header class="header">
    <div class="header-row">
      <SkipLink />
      <LogoLink class="logo-link" />
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
.header-row {
  display: flex;
  flex-wrap: wrap;
  max-width: $w-content-max - ($s-xl * 2);
  margin: auto;
  padding: $s-xl $s-m;

  > * + * {
    padding-left: $s-m;
    margin-bottom: $s-s;
  }
}

.logo-link {
  max-width: 24rem;
}

.search-group {
  width: 22rem;
  justify-content: flex-end;
}

@media screen and (min-width: 54rem) {
  .header-row {
    > * + * {
      margin-bottom: 0;
    }
  }

  .search-group {
    flex: 1 1 auto;
    width: 34rem;
  }
}
</style>
