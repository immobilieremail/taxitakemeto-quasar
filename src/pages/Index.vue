<template>
  <q-page class="">
    <div class="row justify-center">
      <div class="col-11">
        <h4>TTmTo</h4>
        <div class="row">
          <div class="col-8 align-end">
            <q-field>
              <q-input v-model="search" float-label="Rechercher une adresse"/>
            </q-field>
          </div>
          <div class="col-4 align-end">
            <q-btn
              label="->"
              type="submit"
              color="primary"
              />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      search: '',
      isUserConnected: false
    }
  },
  created () {
    this.isUserConnected = this.$store.getters['userdata/isUserConnected']
  }
}
</script>
