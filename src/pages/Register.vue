<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-11">
        <h4>Créer un compte</h4>
        <form @submit.prevent="register()">
          <div>
            <q-field>
              <q-input v-model="user.detail.firstname" float-label="Prénom"/>
            </q-field>
            <q-field>
              <q-input v-model="user.detail.lastname" float-label="Nom"/>
            </q-field>
            <q-field>
              <q-input v-model="user.email" float-label="Adresse email"/>
            </q-field>
            <q-select
                v-model="user.detail.country"
                float-label="Pays"
                :options="countryOptions"
                />
            <br>
            <q-field>
              <password
                v-model="user.password"
                :toggle="true"
              />
            </q-field>
          </div>
          <div class="row q-mt justify-end">
            <q-btn
              label="Créer le compte"
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
import Password from 'vue-password-strength-meter'

export default {
  name: 'Connect',
  components: { Password },
  data () {
    return {
      user: {
        email: '',
        name: '',
        password: '',
        detail: {
          firstname: '',
          lastname: '',
          country: false
        }
      },
      countryOptions: [
        {
          label: 'France',
          value: 'fr'
        },
        {
          label: '中华',
          value: 'cn'
        },
        {
          label: 'Deutschland',
          value: 'de'
        },
        {
          label: 'United Kingdom',
          value: 'uk'
        }
      ]
    }
  },
  watch: {
    username (val) {
      this.user.name = val
    }
  },
  computed: {
    username () {
      return this.user.detail.firstname + this.user.detail.lastname
    },
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
    register: function () {
      this.$axios.post('/api/register', {
        user: this.user
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
          message: 'Your account was successfully created',
          color: 'positive',
          onDismiss () {
            self.redirectHome()
          }
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
