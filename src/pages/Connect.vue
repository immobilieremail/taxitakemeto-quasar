<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-11">
        <h4>Se connecter</h4>
        <form @submit.prevent="login()">
          <div>
            <q-field>
              <q-input v-model="username" float-label="Adresse email"/>
            </q-field>
            <q-field>
              <q-input v-model="password" type="password" float-label="Mot de passe" />
            </q-field>
            <br>
          </div>
          <div class="row justify-end">
            <q-btn
              label="Connexion"
              type="submit"
              color="primary"
              />
          </div>
        </form>
      </div>
    </div>
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
  computed: {
    userdata: {
      get () {
        return this.$store.state.userdata.token
      },
      set (val) {
        this.$store.commit('userdata/updateUserDataState', val)
      }
    }
  },
  methods: {
    redirectHome: function () {
      this.$router.push({ path: '/' })
    },
    login: function () {
      this.$axios.post('/api/login', {
        email: this.username,
        password: this.password
      }).then(response => {
        // Gather user data
        let userData = {
          token: response.data.success.token,
          displayname: response.data.success.displayname,
          connected: true
        }
        this.userdata = userData
        // Throw positive notification
        let self = this
        this.$q.notify({
          timeout: 500,
          message: 'Connected',
          color: 'positive',
          onDismiss () {
            self.redirectHome()
          }
        })
      }).catch(error => {
        // Analyze possible error response
        let errorMessage = ''
        if (undefined === error.response) {
          errorMessage = 'Network error'
        } else {
          errorMessage = error.response.data.error
        }
        // Throw negative notification
        this.$q.notify({
          timeout: 500,
          message: errorMessage,
          color: 'negative'
        })
      })
    }
  }
}
</script>
