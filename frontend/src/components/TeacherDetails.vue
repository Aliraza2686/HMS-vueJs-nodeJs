<template>
  <div>
      <Sidebar />
         <div class="profile bg-blue-800 h-60">
      <div class="content text-center pt-10">
          <h1 class="text-4xl mt-10 text-white"><fa icon="user-tie" /> {{teacher.name}}</h1>
          <br>
          <router-link to="/dashboard"><fa icon="arrow-left" /> Back</router-link>
          <div class="text-center">
            <div class="bg-yellow-500 sm:smal md:line mt-3"></div>
          </div>
      </div>
    </div>
     <div class="grid grid-cols-2 relative m-2" v-if="msg != '' ">
                     <div> <p>{{msg}}</p></div>
                      <div class="absolute right-2"><p class="cursor-pointer" @click="clearMsg">&times;</p></div>
                  </div>
      <div class="container md:m-5 bg-gray-300 p-5 ">
           <div class="grid grid-cols-5 rounded shadow-sm bg-white p-5">
               <div>
                   <h1 class="font-bold">Name</h1><br>
                   <p>{{teacher.name}}</p>
               </div>
               <div>
                   <h1 class="font-bold">Department / Type</h1>
                   <br>
                    <p>{{teacher.department}} / {{teacher.type}}</p>
               </div>
              
               <div>
                   <h1 class="font-bold">Phone</h1><br>
                   <p>{{teacher.phone}}</p>
               </div>
               <div>
                   <h1 class="font-bold">Date Joined</h1><br>
                   <p>{{teacher.dateJoined}}</p>
               </div>
               <div>
                   <h1 class="font-bold">Operations</h1>
                   <br>
                   <button class="bg-red-700 p-1 trash" @click="deleteTeacher"><fa icon="trash-alt" /></button>
                   <router-link :to="{name : 'updateTeacher', params : {id : id}}">
                       <button class="bg-yellow-400 p-1 ml-5 rounded"><fa icon="pencil-alt" /></button>
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
          id : this.$route.params.id,
          teacher : {},
          msg : ""
      }
  },
  components : {
      Sidebar
  },
  created() {
      const fetchTeacher = async () => {
         const res = await axios.get(`/teacher/${this.id}`, {
             headers : {
                 'Authorization' : vueCookie.get("token")
             }
         })
         const data = await res.data
         if(data.error) {
             return false
         }
         this.teacher = data
      }
      fetchTeacher()
  },
  methods : {
      async deleteTeacher () {
          const res = await axios.delete(`/delete/teacher/${this.id}`, {
              headers : {
                  'Authorization' : vueCookie.get("token")
              }
          })
          const data = await res.data
          if(data.error) {
              this.msg = "operation cant be performed"
          }
          this.teacher= {}
          this.msg = data.success
      },
      clearMsg() {
          this.msg = ""
      }
  }
}
</script>

<style scoped>
.trash {
    border-radius: 10%;
    color: white;
}
</style>