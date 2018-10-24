<template>
  <q-page class="flex flex-center">
    <div v-if="$q.platform.is.cordova">
      Battery status is: <strong>{{ batteryStatus }}</strong>
    </div>
    <div v-else>COIN</div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      batteryStatus: 'determining...'
    }
  },
  methods: {
    updateBatteryStatus (status) {
      this.batteryStatus = `Level: ${status.level}, plugged: ${status.isPlugged}`
    }
  },
  created () {
    if (this.$q.platform.is.mobile) {
      // we register the event like on plugin's doc page
      window.addEventListener('batterystatus', this.updateBatteryStatus, false)
    }
  },
  beforeDestroy () {
    if (this.$q.platform.is.mobile) {
      // we do some cleanup;
      // we need to remove the event listener
      window.removeEventListener('batterystatus', this.updateBatteryStatus, false)
    }
  }
}
</script>
