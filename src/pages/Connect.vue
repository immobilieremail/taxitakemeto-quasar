<template>
  <q-page class="" padding="5">
    <q-field label="Chercher une adresse" >
      <q-input v-model="model" />
    </q-field>
    <q-btn label="Chercher cette adresse" />

    <h4>Créer un compte</h4>
    <div>
      <q-field>
        <q-input v-model="model" float-label="Adresse email"/>
      </q-field>
      <q-field>
        <q-input v-model="text" type="password" float-label="Mot de passe" />
      </q-field>
    </div>
    <div>
      <q-btn
        :label="`Count ${count}`"
        @click="count++"
        :repeat-timeout="100"
        color="primary"
        />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Connect',
  data () {
    return {count: 0}
  }
}
</script>
