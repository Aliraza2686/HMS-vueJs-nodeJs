<template>
  <div>
    <div class="profile">
      <div class="content text-center pt-10">
          <h1 class="text-4xl"><fa icon="user-tie" /> {{studentProfile.name}}</h1>
           <br>
             <button class="bg-red-700 px-5 rounded" @click="deleteStudent"><fa icon="trash-alt" /></button>
                   <router-link :to="{name : 'updateStudent', params : {id : id}}">
                       <button class="bg-yellow-400 px-5 ml-5 rounded text-black"><fa icon="pencil-alt" /></button>
                   </router-link>
      </div>
    </div>
    <!-- <div>
      {{studentProfile}}
    </div> -->
    <div class="top m-5 grid grid-cols-2">
      <div>
        <router-link to="/dashboard">
          <fa icon="arrow-left" /> Go Back
          </router-link>
         
        </div>
      <div class="relative">
          <router-link :to="{ name : 'messBills', params : { id : id}}" class="absolute right-5 bg-yellow-400 p-3 hover:bg-red-300">  <fa icon="money-check-alt"/> Mess Bills</router-link>
      </div>
    </div><br>
    <div class="details mt-3 p-5 m-5 bg-gray-300 ">
        <div class="card bg-white shadow-xl rounded-sm">
            <div class="content grid md:grid-cols-7 p-5">
               <div>
                   <h1 class="font-bold">Name</h1><br>
                   <p>{{studentProfile.name}}</p>
               </div>
               <div>
                 <h1 class="font-bold">Roll No</h1><br>
                 <p>{{studentProfile.rollNo}}</p>
               </div>
               <div>
                  <h1 class="font-bold">Class Name</h1><br>
                  <p>{{studentProfile.className}}</p>
               </div>
               <div>
                 <h1 class="font-bold">Shift</h1><br>
                  <p>{{studentProfile.shift}}</p>
               </div>
               <div>
                 <h1 class="font-bold">Department</h1><br>
                 <p>{{studentProfile.department}}</p>
               </div>
               <div>
                 <h1 class="font-bold">Member Since</h1><br>
                 <p>{{studentProfile.memberSince}}</p>
               </div>
               <div>
                
                 <h1 class="font-bold">Phone</h1><br>
                 <p>{{studentProfile.phone}}</p>
               </div>
            </div>
            <hr>
            <div class="grid md:grid-cols-7 p-5 shadow-md-rounded-sm ">
             <div>
                 <h1 class="font-bold">Parents Phone</h1><br>
                 <p>{{studentProfile.parentsNo}}</p>
               </div>
              <div>
                <h1 class="font-bold">Location</h1><br>
                <p>{{studentProfile.location}}</p>
              </div>
              <div>
                <h1 class="font-bold">Hostel</h1><br>
                 <p>{{studentProfile.hostel}}</p>
              </div>
              <div>
                <h1 class="font-bold">

                </h1>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import vueCookie from 'vue-cookie'
export default {
  data() {
      return {
          id : this.$route.params.id
      }
  },
 computed : mapGetters(["studentProfile"]), 
 methods : {
   ...mapActions(["getStudent"]),
   async deleteStudent() {
     const res = await axios.delete(`/delete/student/${this.id}`, {
       headers : {
         'Authorization' : vueCookie.get("token")
       }
     })
     const data = await res.data
     if(data.error) {
       return false
     }
     this.$router.push('/dashboard')
   }
 },
 created () {
    this.getStudent(this.id)
 }

}
</script>

<style scoped>
 .profile {
   height: 30vh;
   width: 100%;
   background-color: rgb(32, 2, 59);
   color: #fff;

 }
.line {
  height: 2px;
  width: 20%;
}
.smal {
  height: 2px;
  width: 100%;
}
</style>