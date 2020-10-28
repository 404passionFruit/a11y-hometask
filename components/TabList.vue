<template>
  <section class="tabs-wrapper">
    <!-- TODO: set heading level via props -->
    <h2><slot name="heading" /></h2>
    <div role="tablist" class="tabs-list">
      <button
        v-for="tab in tabs"
        :id="`tabs-${tab.id}`"
        :key="tab.id"
        ref="tabButton"
        role="tab"
        :aria-selected="tab.id === currentTab"
        :aria-controls="`tabs-${tab.id}`"
        :tabindex="tab.id === currentTab ? '0' : '-1'"
        @click="moveToContent(tab)"
        @keyup.right.prevent="moveToNext"
        @keyup.left.prevent="moveToPrev"
        @keyup.home.prevent="moveToFirst"
        @keyup.end.prevent="moveToLast"
        v-text="tab.title"
      />
    </div>
    <div
      v-for="tab in tabs"
      ref="tabContent"
      :key="tab.id"
      :hidden="tab.id === currentTab ? false : 'true'"
      :aria-labelledby="`tabs-${tab.id}`"
      tabindex="0"
    >
      <slot name="content" :tab="tab" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // TODO: use ids for selected tabs
    tabs: {
      type: Array,
      required: true,
    },
    selectedTab: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      currentTab: this.selectedTab,
    }
  },

  computed: {
    currentTabIndex() {
      return this.tabs.findIndex((t) => t.id === this.currentTab)
    },
  },

  methods: {
    moveToContent(tab) {
      this.currentTab = tab.id
      this.$refs.tabContent[this.currentTabIndex].focus()
    },

    moveTo(index) {
      this.currentTab = this.tabs[index].id
      this.$nextTick(() => {
        this.$refs.tabButton[index].focus()
      })
    },

    moveToNext() {
      if (this.currentTabIndex === this.tabs.length - 1) {
        return
      }
      this.moveTo(this.currentTabIndex + 1)
    },

    moveToPrev() {
      if (this.currentTabIndex === 0) {
        return
      }
      this.moveTo(this.currentTabIndex - 1)
    },

    moveToFirst() {
      this.moveTo(0)
    },

    moveToLast() {
      this.moveTo(this.tabs.length - 1)
    },
  },
}
</script>

<style lang="scss">
.tabs-wrapper {
  margin: $s-xxl 0;

  h2,
  .tabs-list {
    max-width: $w-content-max - ($s-xl * 2);
    padding: 0 $s-xl;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: $s-l;
  }

  button {
    display: inline-block;
    color: #cc05ad;
    font-size: 2.2rem;
    border: none;
    text-decoration: underline;
    background: transparent;
    box-shadow: none;
    cursor: pointer;

    &:hover {
      color: blue;
    }

    &:focus {
      outline: none;
      border-color: $c-out;
    }

    + * {
      margin-left: $s-s;
    }
  }

  button[aria-selected] {
    color: #000;
    background: #c7d2e9;
    border-radius: 4px;
    text-decoration: none;
    padding: $s-xs $s-s;
    border: 2px solid #c7d2e9;
    transition: color 0.25s ease, background 0.25s ease;

    @media (prefers-reduced-motion) {
      transition: none;
    }

    &:focus {
      outline: none;
      border-color: $c-out;
    }

    &:hover {
      background: #0036f4;
      border-color: #0036f4;
      color: #fff;
    }
  }
}
</style>
