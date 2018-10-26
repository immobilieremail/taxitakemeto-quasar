<template>
  <q-page class="">
    <form @submit.prevent="fetchData">
      <q-input v-model="userQuery" />
      <q-btn type="submit" label="Search" />
    </form>
    <hotel v-for="hotel in hotels" v-bind:key="hotel.id" v-bind:hotel="hotel"></hotel>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Hotels',
  data () {
    return {
      hotels: null,
      userQuery: ''
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.$axios.post('/api/search', {userQuery: this.userQuery})
        .then((response) => { this.hotels = response.data })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
    }
  }
}
</script>
