<template>
  <div>
       <div>
             <transition name="fade">
            <div class="sidebarMenu w-full md:w-72  h-screen md:bg-blue-800 fixed" v-if="sidebarToggle">
                <div class="top flex justify-between text-white pt-3 ">
                    <div class="ml-2">
                        <h3> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 inline-block" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg>
                             Ali</h3>
                    </div>
                    <div>  
                        <p class="mr-2 text-xl cursor-pointer hover:text-red-600 transform hover:scale-90" @click="toggleBar">&times;</p>
                    </div>
                </div>
              <hr class="mt-3">
              <div class="mt-3 text-white p-5">
                 <ul class="list-none ">
                     <li>
                         <fa class="mr-2" icon="school" />
                          <router-link to="/dashboard">Dashboard</router-link>
                     </li>
                      <br>
                     <li>
                        <fa icon="plus" class="mr-2"/>
                        <router-link to="/add/student">Add Student</router-link> </li><br>

                         <li>
                        <fa icon="plus" class="mr-2"/>
                        <router-link to="/add/teacher">Add Teacher</router-link> </li><br>

                          <li>
                             <fa icon="money-check-alt" class="mr-2" />
                             <a href="#">Fines</a>
                         </li><br>
                         <li>
                             <fa icon="hamburger" class="mr-2" />
                             <a href="#">Mess managment</a>
                         </li>
                         <br>
                          <li>
                             <fa icon="volleyball-ball" class="mr-2" />
                             <a href="#">Sports Events</a>
                         </li>
                         <br>
                          <li>
                             <fa icon="user-lock" class="mr-2" />
                             <a href="#">Guards</a>
                         </li><br>
                          <li>
                             <fa icon="hand-sparkles" class="mr-2" />
                             <a href="#">Cleaners</a>
                         </li>
                 </ul>
              </div>
             <div class="flex ">
                  <div class="absolute left-40 bottom-3 md:left-12 ">
                  <button class="hover:bg-white hover:text-black px-10 py-1 rounded-full bg-yellow-700 text-white transition ease-linear duration-300" @click="logout"> <fa icon="power-off" /> Logout</button>
              </div>
             </div>
            </div>  
   </transition>
       </div>
          <div class="flex justify-between md:grid md:grid-cols-3 bg-white p-5">
             <div>
                    <svg @click="toggleBar"  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
             </div>
             <div class="text-center">
                 <h3>
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
</svg>
                    <span class="font-bold"> HMS</span></h3>
             </div>
         </div>

    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import vueCookie from 'vue-cookie'
export default {
  data() {
      return {
          sidebarToggle : false,
      
      }
  },
  methods : {
      ...mapActions(["logoutAction"]),
      toggleBar() {
          this.sidebarToggle = !this.sidebarToggle
      },
      logout() {
         this.logoutAction()
      }
  }
}
</script>

<style scoped>
.sidebarMenu {
      background-color: #0b223a;
}
.fade-enter-from{
    transform: translateX(-280px);
}
.fade-enter-to{
    transform: translateX(0);
}
.fade-enter-active{
    transition: all 0.8s ease;
}
.fade-leave-from{
    transform: translateX(0);
}
.fade-leave-to{
    transform: translateX(-280px);
}
.fade-leave-active{
    transition: all 0.8s ease;
}
</style>