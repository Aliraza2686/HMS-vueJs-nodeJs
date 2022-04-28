<template>
  <div class="">
      <div class="container grid md:grid-cols-3">
        <div></div>
        <div class="bg-white  p-5 mt-20  shadow-xl w-100 h-80  overflow-hidden rounded-lg  ">
             <h3 class="flex justify-center font-bold text-lg">Login </h3><br>
              <div v-if="loginState.error" >
                  <div class="flex justify-between">
                 <div>
                      <p class="mb-2 text-red-500">{{loginState.error}}.</p>
                 </div>
                 <div>
                   <span class="cursor-pointer text-lg " @click="removeError"> &times;</span>
                 </div>
            </div>
              </div>
           <form @submit.prevent="loginAction">
           <input type="email" v-model="email" class="h-12 p-2 w-full bg-gray-300" required placeholder="Enter email"><br>
           <input type="password" class="h-12 w-full p-2 bg-gray-300 mt-3" v-model="password" required placeholder="Enter password"><br>
           <button type="submit"
           class="bg-blue-800 w-full py-3 mt-5 text-white hover:bg-yellow-400 hover:text-black transition ease-linear duration-300 ">Submit</button>
          <p class="mt-3">Dont have an account ? <router-link to="/register" class="text-blue-500 transform ">Create Account</router-link></p>
           </form>
     </div>
     <div></div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vueCookie from 'vue-cookie'
export default {
  name: 'Home',
  data(){
    return {
        email : '',
        password : '',
        token : ''
    }
  },
  computed : mapGetters(["loginState"]),
   methods : {
      ...mapActions(["login", "clearError"]),
      loginAction() {
        const { email, password } = this

        this.login({email, password})
      },
      removeError() {
         this.clearError()
      }
    },
    created() {
    
    }
  }

</script>
