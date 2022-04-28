<template>
  <div class="">
      <div class="container grid md:grid-cols-3">
        <div></div>
        <div class="bg-white  p-5 mt-20  shadow-xl w-100 h-90  overflow-hidden rounded-lg  ">
           <h3 class="flex justify-center font-bold text-lg">Register </h3><br>
 
             <div v-if="registerState.error" >
                  <div class="flex justify-between">
                 <div>
                      <p class="mb-2 text-red-500">{{registerState.error}}</p>
                 </div>
                 <div>
                   <span class="cursor-pointer text-lg " @click="removeText"> &times;</span>
                 </div>
            </div>
              </div>

           <form @submit.prevent="register">
            <input type="text" class="h-12 w-full bg-gray-300 p-2"  placeholder="Enter your name" required v-model="name">   
           <input type="email" v-model="email" class="h-12 w-full bg-gray-300 p-2 mt-3" required placeholder="Enter Email"><br>
           <input type="password" class="h-12 w-full bg-gray-300 mt-3 p-2" v-model="password" required  placeholder="Enter password"><br>
           <button type="submit"
           class="bg-blue-800 w-full py-3 mt-5 text-white hover:bg-yellow-400 hover:text-black transition ease-linear duration-300 ">Submit</button>
          <p class="mt-3">Already have an account ? <router-link to="/" class="text-blue-500 transform  ">Login Here</router-link></p>
           </form>
     </div>
     <div></div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
 data() {
    return {
         name : '',
         email : '',
         password : ''
    }
 },
 computed : mapGetters(["registerState"]),
 methods : {
   ...mapActions(["registerAction", "removeError"]),
   register() {
     const{
       name,
       email,
       password
     } = this
     this.registerAction({name, email, password})
   },
   removeText() {
     this.removeError()
   }
 }
}
</script>

<style>

</style>