<template>
  <div>
   <div class="flex flex-col m-5">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name / Roll No
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class / Department
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Shift
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hostel
              </th>
               <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Operations
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200" v-for="student in studentsClass" :key="student.id">
                  <tr >
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <fa class="h-10 w-10 rounded-full" icon="user" />
                   <!-- /*
                    h-10 w-10 rounded-full
                   */ -->
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {{student.name}}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{student.rollNo}}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{student.department}}</div>
                <div class="text-sm  text-red-500">{{student.className}}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap ">
                  <span>
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-black-800" >
                   {{student.shift}}
                </span>
                  </span>
                    
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{student.hostel}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium ">
               <router-link :to="{name : 'student', params : {id : student._id}}" class="text-indigo-600 hover:text-indigo-900">Details</router-link>
              </td>
            </tr>

            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { mapgetters, mapActions, mapGetters } from 'vuex'
export default {
 data() {
     return {
         department : this.$route.params.department
     }
 },
 computed : mapGetters(["studentsClass"]),
 methods : {
   ...mapActions(["getStudents"])
 },
 created() {
    this.getStudents(this.department)
 }
}
</script>

<style>

</style>