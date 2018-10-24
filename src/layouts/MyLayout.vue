<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Taxi Take Me To
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item to="/" exact>
          <q-item-side icon="home" />
          <q-item-main label="Home" />
        </q-item>
        <q-item to="/test">
          <q-item-main label="Test" />
        </q-item>
        <q-item to="/connect">
          <q-item-main label="Connection" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-tabs>
      <!-- Tabs - notice slot="title" -->
      <q-tab default count="5" slot="title" name="tab-1" icon="message" />
      <q-tab disable slot="title" name="tab-2" icon="fingerprint" />
      <q-tab alert slot="title" name="tab-3" icon="account_box" />
      <q-tab slot="title" name="tab-4" icon="accessibility" />
      <q-tab slot="title" name="tab-5" icon="build" />

      <!-- Targets -->
      <q-tab-pane name="tab-1">Tab One</q-tab-pane>
      <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
      <q-tab-pane name="tab-3">Tab Three</q-tab-pane>
      <q-tab-pane name="tab-4">Tab Four</q-tab-pane>
      <q-tab-pane name="tab-5">Tab Five</q-tab-pane>
    </q-tabs>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
