<template>
  <div>
       <Sidebar />

       <div>
         <div class="m-5 grid md:grid-cols-3">
            <div>
                <div class="mx-5 my-3 md:my-1">
                            <router-link to="/dashboard" ><fa icon="arrow-left" /> back</router-link>
                </div>
            </div>
            <div>
                 <div class="bg-white shadow-md rounded p-5 ">
                      <h1 class="text-center">Add Teacher <fa icon="plus" /></h1>
                         <div class="grid grid-cols-2 relative m-2" v-if="msg != '' ">
                     <div> <p>{{msg}}</p></div>
                      <div class="absolute right-2"><p class="cursor-pointer" @click="clearMsg">&times;</p></div>
                  </div>
                      <form @submit.prevent="addTeacher">
                         <div>
                              <label>Name</label><br>
                          <input type="text" v-model="name" class="bg-gray-300 w-full p-2" placeholder="Enter Teacher Name" required>
                         </div><br>
                            <div>
                              <label>Department</label><br>
                          <input type="text" v-model="department" class="bg-gray-300 w-full p-2" placeholder="Enter Teacher Department" required>
                         </div><br>
                         <div>
                             <label>Type</label><br>
                             <select class="bg-gray-300 w-full p-2" aria-placeholder="Enter Teacher Department" v-model="type" required>
                               
                                 <option value="CTI">CTI</option>
                                 <option value="HOD">HOD</option>
                                 <option value="Permanant">Permanant</option>
                                 <option value="Daily Wages">Daily Wages</option>
                             </select>
                         </div>
                         <br>
                           <div>
                              <label>Phone</label><br>
                          <input type="text" v-model="phone" class="bg-gray-300 w-full p-2" placeholder="Enter Teacher Phone" required>
                         </div><br>
                         <div>
                             <label>Date Joined</label>
                             <br>
                             <input type="date" class="bg-gray-300 w-full p-2" v-model="dateJoined" required>
                         </div><br>
                         <div>
                               <button type="submit" class="bg-blue-700 p-3 w-full text-white hover:bg-yellow-500 hover:text-black transition ease-linear duration-300">Add</button>
                         </div>
                      </form>
                 </div>
            </div>
            <div>

            </div>
         </div> 
       </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import axios from 'axios'
import vueCookie from 'vue-cookie'
export default {
 components : {
     Sidebar
 },
 data() {
     return {
         name : "",
         department : "",
         type : "",
         phone : "",
         dateJoined : "",
         msg : ""
     }
 },
 methods : {
     async addTeacher() {

         const res = await axios.post('/add/teacher', {
             name : this.name,
             department : this.department,
             type : this.type,
             phone : this.phone,
             dateJoined : this.dateJoined
         }, {
             headers : {
                 'Authorization' : vueCookie.get("token")
             }
         })

         const data = await res.data
         if(data.error) {
             this.msg = "Error occured"
         }
         this.msg = data.success
     },
     clearMsg() {
         this.msg = ""
     }
 },
 created() {
  
 }
}
</script>

<style>

</style>