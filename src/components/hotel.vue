<template>
  <div>
    <h4><router-link :to="{ name: 'hotel', params: { id: hotel.id }}">{{ hotel.name }}</router-link></h4>
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
