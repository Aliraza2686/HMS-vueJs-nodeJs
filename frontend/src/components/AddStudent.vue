<template>
 <div>
   <Sidebar />
    <div class="md:grid md:grid-cols-3">
      <div>

      </div>
     <div class="container my-5">
        <form @submit.prevent="addStudent">
            <h3 class="text-center">Add Student <fa icon="plus" /></h3>
                   <div v-if="addStudentGetter" >
                  <div class="flex justify-between">
                 <div>
                      <p v-if="addStudentGetter.error">{{addStudentGetter.error}}</p>
                      <p class="mb-2 text-red-500">{{addStudentGetter}}</p>
                 </div>
                 <div>
                   <span class="cursor-pointer text-lg " @click="removeAlert"> &times;</span>
                 </div>
            </div>
              </div>

            <div class="mt-3 p-5">
                <label>Name :</label>
                <br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="name" required>
                <br><br>
                <label>Roll No : </label><br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="rollNo" required>
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
                 <select v-model="department" class="w-full h-12 bg-gray-300 p-3" required>
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
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="memberSince" required>
                <br><br>
                 <label>Phone : </label><br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="phone" required>
                <br><br>
                 <label>Location : </label><br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="location" required>
                <br><br>
                 <label>Parents No : </label><br>
                <input type="text" class="bg-gray-300 p-3 w-full h-12" v-model="parentsNo" required>
                <br><br>
                 <label>Hostel : </label><br>
               <select v-model="hostel" class="w-full h-12 bg-gray-300">
                  <option value="Old Hostel">Old Hostel</option>
                  <option value="New Hostel">New Hostel</option>
               </select>
                <br><br>
                <br>
                <button type="submit" class="bg-blue-700 p-3 w-full text-white hover:bg-yellow-500 hover:text-black transition ease-linear duration-300">Submit</button>
            </div>
        </form>
     </div>
     <div></div>
  </div>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Sidebar from './Sidebar.vue'
export default {
 components : {
   Sidebar
 },
 data() {
     return {
         name : '',
         rollNo : '',
         className : '',
         department : '',
         memberSince : '',
         phone : '',
         location : '',
         parentsNo : '',
         hostel : '',
         shift : ''
     }
 },
 computed : mapGetters(["addStudentGetter"]),
 methods : {
  ...mapActions(["addStudentAction", "removeAddStudentAlert"]),
  addStudent() {
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
      this.addStudentAction({
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
      })

  },
  removeAlert() {
       this.removeAddStudentAlert()
  }
 }
}
</script>

<style>

</style>