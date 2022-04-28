<template>
  <div>
      <Sidebar />
     <div class="m-5">
         <div class="grid md:grid-cols-3 ">
            <div>
                
            </div>
            <div class="bg-white p-3 shadow-md rounded-sm">
                 <h1 class="text-center">Add Bill <fa icon="plus" /> </h1><br>
                  <div class="grid grid-cols-2 relative" v-if="addBill != '' ">
                     <div> <p>{{addBill}}</p></div>
                      <div class="absolute right-2"><p class="cursor-pointer" @click="clearMessage">&times;</p></div>
                  </div>
                 <form @submit.prevent="submitBill"> 
                     <div>
                         <label>Month</label><br>
                         <select v-model="month" class="bg-gray-300 p-2 w-full" required aria-placeholder="Select Month">
                             <option value="January">January</option>
                             <option value="Fabuary">Fabuary</option>
                             <option value="March">March</option>
                             <option value="April">April</option>
                             <option value="May">May</option>
                             <option value="June">June</option>
                             <option value="July">July</option>
                             <option value="August">August</option>
                             <option value="September">September</option>
                             <option value="October">October</option>
                             <option value="November">November</option>
                             <option value="December">December</option>
                         </select>
                     </div><br>
                     <div>
                         <label>Amount</label><br>
                         <input type="number" v-model="bill" class="bg-gray-300 p-2 w-full" placeholder="enter amount" required>
                     </div><br>
                     <div>
                         <label>Payed At <fa icon="arrow-down" /> </label><br>
                         <input type="date" v-model="payedAt" class="bg-gray-300 p-2 w-full" required>
                     </div><br>
                     <div>
                         <label >isPayed </label>
                         <input type="checkbox" v-model="isPayed" required >
                     </div><br>
                     <div>
                        <button type="submit"
                         class="bg-blue-700 p-3 w-full text-white hover:bg-yellow-500 hover:text-black transition ease-linear duration-300"
                         > Add </button>
                     </div>
                 </form>
            </div>
            <div>

            </div>
         </div>
     </div>
 </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import vueCookie from 'vue-cookie'
export default {
    components : {
        Sidebar
    },
 data () {
     return { 
         id : this.$route.params.id,
         month : '',
         bill : 0,
         payedAt : '',
         isPayed : false,
         addBill : ""
     }
 },
 computed : mapGetters["something"],
 methods : {
     ...mapActions["storeBill"],
    async submitBill() {
           const res = await axios.post(`/add/bill/${this.id}`, {
              month : this.month,
              bill : this.bill,
              isPayed : this.isPayed,
              payedAt : this.payedAt
           }, {
              headers : {
                  'Authorization' :  vueCookie.get("token")
              }
           })

           const data = await res.data
           if(data.error) {

               return this.addBil = "Error occured"
           }
          this.addBill = "Bill added successfully"
   },
   clearMessage() {
       this.addBill = ""
   }
 }
}
</script>

<style>

</style>