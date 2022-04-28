<template>
  <div>
      <Sidebar />
      <div class="container">
          <div class="m-5">
         <div class="grid md:grid-cols-3 ">
            <div>
                
            </div>
            <div class="bg-white p-3 shadow-md rounded-sm">
                 <h1 class="text-center">Update Bill <fa icon="pencil-alt" /> </h1><br>
                  <div class="grid grid-cols-2 relative" v-if="msg != '' ">
                     <div> <p>{{msg}}</p></div>
                      <div class="absolute right-2"><p class="cursor-pointer" @click="clearMsg">&times;</p></div>
                  </div>
                 <form @submit.prevent="updateBill"> 
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
                         > Update </button>
                     </div>
                 </form>
            </div>
            <div>

            </div>
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
          id : this.$route.params.id,
          bid : this.$route.params.bid,
          month : "",
          bill : 0,
          payedAt : "",
          isPayed : false,
          msg : ""
      }
  },
created() {
    const getBill =  async () => {
           const res = await axios.get(`/bill/${this.id}/${this.bid}`, {
         headers : {
             'Authorization' : vueCookie.get("token")
         }
      })

      const data = await res.data

      if(data.error) {
         this.msg = "Error occured"
         return
      }
      this.month = data.month
      this.bill = data.bill
      this.payedAt = data.payedAt
      this.isPayed = data.isPayed
      }
     getBill()
  },
  methods : {
      clearMsg() {
          this.msg = ""
      },
      async updateBill() {
          const res = await axios.patch(`/update/bill/${this.id}/${this.bid}`, {
              month : this.month,
              bill : this.bill,
              payedAt : this.payedAt,
              isPayed : this.isPayed
          }, {
              headers : {
                  'Authorization' : vueCookie.get("token")
              }
          })
         const data = await res.data
          if(data.error) {
             this.msg = data.error
             return
          }
          this.msg = data.success
      }
  }
}
</script>

<style>

</style>