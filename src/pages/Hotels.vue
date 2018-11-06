<template>
  <q-page class="">
    <form @submit.prevent="search">
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
      userQuery: this.$route.query.search
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    search: function () {
      this.$router.push({path: '/hotels', query: {search: this.userQuery}})
    },
    fetchData: function () {
      this.$axios.post('/api/hotels/search', {userQuery: this.userQuery})
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
  },
  watch: {
    '$route' (to, from) {
      if (to.query.search !== from.query.search) {
        this.userQuery = to.query.search
        this.fetchData()
      }
    }
  }
}
</script>
