<template>
  <div>
     <Sidebar />
      <div class="container">
        <div class="md:grid md:grid-cols-3">
      <div>
        <div class="mx-5 mt-5">
            <router-link to="/dashboard"><fa icon="arrow-left" /> Back</router-link>
        </div>
      </div>
     <div class="container my-5 bg-white p-5">
        <form @submit.prevent="updateStudent">
            <h3 class="text-center">Update Student <fa icon="pencil-alt" /></h3>
               <div class="grid grid-cols-2 relative m-2" v-if="msg != '' ">
                     <div> <p>{{msg}}</p></div>
                      <div class="absolute right-2"><p class="cursor-pointer" @click="clearMsg">&times;</p></div>
                  </div>

            <div class="mt-3 p-5">
                <label>Name :</label>
                <br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="name" >
                <br><br>
                <label>Roll No : </label><br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="rollNo" >
                <br><br>
                 <label>Class Name : </label><br>
                 <select v-model="className" class="w-full h-12 bg-gray-300">
                   <option value="part_One">Part One</option>
                   <option value="part_Two">Part Two</option>
                   <option value="BS">BS</option>
                 </select>
                <br><br>
                <label>Shift</label><br>
                 <select v-model="shift" class="w-full bg-gray-300 h-12">
                   <option value="Morning">Morning</option>
                   <option value="Evening">Evening</option>
                 </select>
                 <label>Department :</label>
                 <br>
                 <select v-model="department" class="w-full h-12 bg-gray-300 p-3" >
                      <option value="English">English</option>
                      <option value="IT">IT</option>
                      <option value="Eco">Economics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="FA">FA</option>
                      <option value="ICS">ICS</option>
                      <option value="Pre_Eng">Pre Engineering</option>
                      <option value="Pre_Medical">Pre Medical</option>
                 </select><br><br>
                  <label>Member Since : </label><br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="memberSince" >
                <br><br>
                 <label>Phone : </label><br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="phone" >
                <br><br>
                 <label>Location : </label><br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="location" >
                <br><br>
                 <label>Parents No : </label><br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="parentsNo" >
                <br><br>
                 <label>Hostel : </label><br>
               <select v-model="hostel" class="w-full h-12 bg-gray-300">
                  <option value="Old Hostel">Old Hostel</option>
                  <option value="New Hostel">New Hostel</option>
               </select>
                <br><br>
                <br>
                <button type="submit" class="bg-blue-700 p-3 w-full text-white hover:bg-yellow-500 hover:text-black transition ease-linear duration-300">Update</button>
            </div>
        </form>
     </div>
     <div></div>
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
         id : this.$route.params.id,
         name : '',
         rollNo : '',
         className : '',
         department : '',
         memberSince : '',
         phone : '',
         location : '',
         parentsNo : '',
         hostel : '',
         shift : '',
         msg : ""
     }
 },
 created () {
     const fetchStd = async () => {
         const res = await axios.get(`/student/${this.id}`, {
             headers : {
                 'Authorization' : vueCookie.get("token")
             }
         })
         const data = await res.data
         if(data.error) {
             return false
         }
         this.name = data.name
         this.rollNo = data.rollNo
         this.className = data.className
         this.department = data.department
         this.memberSince = data.memberSince
         this.phone = data.phone
         this.location = data.location
         this.parentsNo = data.parentsNo
         this.hostel = data.hostel
         this.shift = data.shift
     }
     fetchStd()
 },
 methods : {
    async updateStudent() {
          const {
        name,
        rollNo,
        className,
        department,
        memberSince,
        phone,
        location,
        parentsNo,
        hostel,
        shift
      } = this
         const res = await axios.patch(`/update/student/${this.id}`, {
                name,
                rollNo,
                className,
                department,
                memberSince,
                phone,
                location,
                parentsNo,
                hostel,
                shift
         }, {
             headers : {
                 'Authorization' : vueCookie.get("token")
             }
         })
         const data = await res.data 
         if(data.error) {
             this.msg = "Action cannot be done this time"
         }
         this.msg = data.success
     },
     clearMsg() {
         this.msg = ""
     }
 }
}
</script>

<style>

</style>