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
        <q-item to="/hotels">
          <q-item-main label="Hotels" />
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
      <router-view :connected="isUserConnected" />
    </q-page-container>
    <q-layout-footer>
      <q-page-sticky expand position="bottom">
        <q-tabs animated align="justify" glossy class="flex">
            <q-route-tab
              icon="lock"
              to="/connect"
              label="Se connecter"
              exact
              slot="title"
              v-if="isUserConnected === false"
            />
            <q-route-tab
              icon="home"
              to="/"
              label="Accueil"
              exact
              slot="title"
              v-else
            />
          <q-tab slot="title" name="tab-2" label="Créer un compte" icon="fingerprint" />
          <q-tab slot="title" name="tab-3" label="À propos" icon="account_box" />
        </q-tabs>
      </q-page-sticky>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    ...mapGetters('userdata', [
      'isUserConnected'
    ])
  },
  methods: {
  }
}
</script>

<style scoped>
  .q-tabs {
    width: 100%;
  }
</style>
