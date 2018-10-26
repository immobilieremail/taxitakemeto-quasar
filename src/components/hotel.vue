<template>
  <div>
    <h4>{{ hotel.i18n.en.name }}</h4>
    <p>{{ hotel.streetnumber }} {{ hotel.street }} {{ hotel.postalcode }}</p>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'hotel',
  props: ['hotel']
}
</script>
