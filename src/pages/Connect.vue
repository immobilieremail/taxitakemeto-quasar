<template>
  <q-page class="padding">
    <form>
      <q-field label="Chercher une adresse" >
        <q-input v-model="model" />
      </q-field>
      <q-btn label="Chercher cette adresse" />
    </form>

    <h4>Créer un compte</h4>
    <form @submit.prevent="login()">
      <div>
        <q-field>
          <q-input v-model="username" float-label="Adresse email"/>
        </q-field>
        <q-field>
          <q-input v-model="password" type="password" float-label="Mot de passe" />
        </q-field>
      </div>
      <div>
        <q-btn
          :label="`Count ${count}`"
          @click="count++"
          :repeat-timeout="100"
          type="submit"
          color="primary"
          />
      </div>
    </form>
  </q-page>
</template>

<style scoped>
  .padding {
    padding-left: 50px;
    padding-right: 50px;
  }
</style>

<script>
export default {
  name: 'Connect',
  data () {
    return {
      count: 0,
      username: '',
      password: '',
      model: ''
    }
  },
  methods: {
    login: function () {
      this.$axios.post('/api/login', {
        email: this.email,
        password: this.password
      }).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error.response)
      })
    }
  }
}
</script>
