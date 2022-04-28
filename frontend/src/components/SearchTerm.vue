<template>
  <div>
      <Sidebar />
      <div v-if="studentClass.length">
           <div class="m-5">
               <router-link to="/dashboard"> 
                       <fa icon="arrow-left" /> Back
                   </router-link>
           </div>
        <div >
             
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
          <tbody class="bg-white divide-y divide-gray-200" v-for="student in studentClass" :key="student.id">
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
      </div>

          <div v-if="msg != '' " class="m-5"> 
            <div class=" bg-blue-600 text-white w-full h-72">
                <div class="text-center pt-20">
                   <fa icon="search" class="text-6xl" /> <h1 class=" ">{{msg}}</h1><br>
                   <router-link to="/dashboard"> 
                       <fa icon="arrow-left" /> Back
                   </router-link>
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
  data() {
      return {
          term : this.$route.params.term,
          studentClass : [],
          msg : ""
      }
  },
  components : {
      Sidebar
  },
  created() {
      const getSearch = async() => {
        const res = await axios.get(`/search/${this.term}`, {
            headers : {
                'Authorization' : vueCookie.get("token")
            }
        })
        const data = await res.data
        if(data.error) {
           this.msg = "No match found"
           return
        }

        this.studentClass = data
      }
      getSearch()
  }
}
</script>

<style>

</style>