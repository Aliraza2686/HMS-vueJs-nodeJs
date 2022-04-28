<template>
  <div>
     
      <div class="m-5">
        <h2 class="font-bold text-xl ml-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
          Dashboard</h2>
          
          <div class="mt-3">
               
                <div class=" md:grid md:grid-cols-4 gap-5 md:p-5">
                 
                 <div class="teachers">
                       <div>
                         <h4 class="text-center">
                           <fa icon="chalkboard-teacher" />
                           Teachers</h4>

                       </div>

                       <div class="bg-white p-3 mt-3 shadow grid gap-3">
                        
                        <div v-for="teacher in teachers" :key="teacher._id">
                            <div class="wardan bg-blue-700 text-white hover:text-black p-3 rounded flex justify-between hover:bg-gray-300 transition ease-linear duration-300 ">
                             <div>
                               <h3> <fa icon="user-tie" /> {{teacher.name}}</h3>
                             </div>
                             <div>
                                <router-link :to="{name : 'teacherDetails', params : {id : teacher._id}}">
                                  <i class=" bg-yellow-500 px-3 p-1 text-black cursor-pointer rounded  hover:bg-black hover:text-white"><fa icon="arrow-right" class="text-sm" /></i>
                                  </router-link>
                             </div>

                          </div>
                          
                        </div>
                             <!-- <div>
                                  <button class="w-full p-3 bg-blue-700 text-white hover:bg-yellow-700 hover:text-black transition ease-linear duration-300">View All</button>
                             </div> -->
                       </div>
                    </div>


                 
                            <div class="md:col-span-3">
                         
                              <div class="filter mx-5 m-5 grid  grid-cols-3 ">
                                  <div class="col-span-2">
                                     <input type="text" required v-model="term" placeholder="Enter search term" class="inp bg-white shadow-md py-2 px-1 border-yellow-900 focus:outline-none w-full">
                                  </div>
                                  <div class="px-5">
                                    
                                         <button @click="searchFun"
                                          class="bg-blue-700 md:px-5 px-3 py-2 md:py-2 text-white hover:bg-yellow-600 transition ease-linear duration-300">Search <fa icon="search" /></button>
                               
                                  </div>
                             </div>

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
         term : '',
         studentClass : [],
         teachers : []
      }
   },
  computed : {

  }, 
  components : {

  },
  methods : {
    searchFun() {
       if(this.term == "") {
          return false
       }
       this.$router.push(`/search/${this.term}`)
 
    }
  },
  created() {

    const getTeachers = async () => {
    
      const respon = await axios.get('/all/teachers', {
        headers : {
          'Authorization' : vueCookie.get("token")
        }
      })

      const datas = await respon.data
      if(datas.error) {
        return false
      }
      this.teachers = datas
    }
    getTeachers()

    const getStudents = async () => {
        const res = await axios.get('/all/students', {
           headers : {
              'Authorization' : vueCookie.get("token")
           }
        })
        
        const data =  await res.data
        if(!data.error) {
           this.studentClass = data
        }
    }
    getStudents()

   
  }
}
</script>

<style scoped>
 .filter input {
    border-color:  2px solid red;
 }
</style>