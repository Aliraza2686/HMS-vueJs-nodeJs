import axios from 'axios'
import router from '../../router'
import vueCookie from 'vue-cookie'

export default {
    state : {
        registerState : [{
            error : ''
        }]
    },
    mutations : {
        registerError : (state, error) => state.registerState.error = error,
        removeRegisterError : (state) => state.registerState.error = ''
    },
    actions : {
      async registerAction ({commit}, { name, email, password }) {
             const res = await axios.post('/register', {
                 name,
                 email,
                 password
             }, {
                 withCredentials : true
             })
             const data = await res.data
             if(data.error) {
                 console.log(data.error)
                 return commit("registerError", data.error)
             }
             vueCookie.set("token", data)
             router.push('/dashboard')
        },
        removeError({commit}) {
            commit("removeRegisterError")
        }
    },
    getters : {
        registerState : (state) => state.registerState
    }
}