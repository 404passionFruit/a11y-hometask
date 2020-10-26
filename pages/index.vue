<template>
  <main tabindex="-1">
    <h1 class="visually-hidden">{{ $t('pages.homepage.h1') }}</h1>

    <TabList
      :selected-tab="123"
      :tabs="[
        { id: 123, title: '1' },
        { id: 223, title: '2' },
        { id: 213, title: '3' },
      ]"
    >
      <!-- TODO: translation -->
      <template slot="heading">Выставки и события</template>
      <template v-slot:content="slotProps">
        <p v-if="slotProps.tab.id === 123">123 контент</p>
        <p v-if="slotProps.tab.id === 223">аааа контент</p>
        <p v-if="slotProps.tab.id === 213">аааапппппп контент</p>
      </template>
    </TabList>
  </main>
</template>

<script>
import TabList from '@/components/TabList'
export default {
  components: { TabList },
  head() {
    return {
      title: this.$t('pages.homepage.h1'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.homepage.desc'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
//
</style>
