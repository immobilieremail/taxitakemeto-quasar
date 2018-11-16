<template>
  <q-page class="">
    <h1>{{ $route.params.id }}</h1>
    <hotel v-bind:hotel="hotel"></hotel>
  </q-page>
</template>

<style>
</style>

<script>
import Hotel from '../components/hotel.vue'
export default {
  name: 'Hotels',
  components: {
    'hotel': Hotel
  },
  data () {
    return {
      hotel: null
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.$axios.get('/api/hotels/' + this.$route.params.id)
        .then((response) => { this.hotel = response.data })
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
