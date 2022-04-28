import { createStore } from 'vuex'
import axios from 'axios'
import vueCookie from 'vue-cookie'
import router from '../router'
import register from './modules/register'
import addStudent from './modules/addStudent'
import studentsClass from './modules/studentsClass'
import billing  from './modules/billing'

export default createStore({
  state: {
      loginState : [{
        error : ''
      }],
      loginUser : '',

  },
  mutations: {
    pushError : (state, error) => state.loginState.error = error,
    clearError : (state) => state.loginState.error = '',
    userName : (state, name) => state.loginUser = name
  },
  actions: {
   
    async login({commit}, {email, password}) {
         const res = await axios.post('/login', {
           email,
           password
         }, {
           withCredentials : true
         })
         const data = await res.data
         if(data.error) {
          return commit("pushError", data.error)
         }
         vueCookie.set("token", data)
         router.push('/dashboard')
    },
    clearError({commit}) {
      commit("clearError")
    },
    async loggedInUser({commit}) {
      const token = vueCookie.get("token")
      const res = await axios.get('/loggedIn/user', {
        headers : {
            'auth-token' : token
        }
      })
      const data = await res.data
      commit("userName", data)
    },
    logoutAction() {
      vueCookie.set("token", '')
      router.push('/')
    },
   somethin() {
     console.log('function run')
   }
  },
  getters : {
    loginState : (state) => state.loginState,
    loggedInUserName : (state) => state.loginUser,
 
  },
  modules: {
    register,
    addStudent,
    studentsClass,
   billing
  }
})
