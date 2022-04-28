<template>
  <div>

    <Sidebar />
        <div class=" m-5">
          <router-link :to="{name : 'addBill', params : {id : id}}"> <fa icon="plus" />  Add Bill</router-link>
        </div>

     <div class="m-5">
     <div class="grid grid-cols-2 relative "  v-if="message != '' ">
                     <div> <p>{{message}}</p></div>
                      <div class="absolute right-8"><p class="cursor-pointer" @click="clearMsg">&times;</p></div>
                  </div>
     </div>
        <div class="container md:m-5">
          <div class="grid md:grid-cols-3 p-5 bg-gray-300 gap-10">
            <div v-for="bill in bills" :key="bill._id">
           <div>
              <div class="card bg-white rounded shadow p-5">
                  <h1 class="text-center"> <fa icon="calendar" class="text-red-500" />  {{bill.month}}</h1>
                  <br>
                  <div>
                    <h1 class="text-center text-4xl">{{bill.bill}}</h1>
                  </div>
                  <div class="">
            
                      <p class="text-center p-5"> Payed : <i  v-if="bill.isPayed"><fa class="text-red-500" icon="check" /></i> <i v-else> &times;</i>  </p>
                  </div>
                  <div>
                     <p class="text-center"> {{bill.payedAt}}</p>
                  </div><br><hr>
                  <br>
                  <div class="grid grid-cols-2">
                   <div>
                      <button  @click="deleteBill(bill._id)"
                      class="bg-blue-500 w-full text-white py-1 hover:bg-yellow-500 hover:text-black transition ease-linear duration-300 "><fa class="text-xs" icon="trash" /> </button>
                   </div>
                   <div>
                        <router-link  :to="{name : 'updateBill',  params : { id : id, bid : bill._id}}">
                           <button class="bg-yellow-500 w-full text-white py-1 hover:bg-blue-500 hover:text-white transition ease-linear duration-300 ">
                      <fa  class="text-xs" icon="pencil-alt" />
                                            </button>
                      </router-link>

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
import axios from 'axios'
import vueCookie from 'vue-cookie'
import Sidebar from './Sidebar.vue'
export default {
  components : {
    Sidebar
  },
  data() {
    return {
      id : this.$route.params.id,
      bills : [],
      message : ''
    }
  },
  async created() {
    const res = await axios.get(`/bills/${this.id}`, {
     headers : {
       'Authorization' : vueCookie.get("token")
     }
    })

    const data = await res.data
    if(data.error) {
       return this.bills.push({error : data.error})
    }
    this.bills = data
  },
  methods : {
    async deleteBill(d) {

       const res = await axios.delete(`/delete/bill/${this.id}/${d}`, {
         headers : {
           'Authorization' : vueCookie.get("token")
         }
       })
       const data = await res.data
       const bil = this.bills.find((b) => b.id === d)
       const index = this.bills.indexOf(bil)
       this.bills.splice(index, 1)
      if(data.success) {
        this.message = data.success
      }else if(data.error) {
      this.message = data.error
      }
    },
    clearMsg() {
      this.message = ''
    }

  }
}
</script>

<style>

</style>