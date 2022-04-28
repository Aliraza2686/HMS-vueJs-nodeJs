
export default {
    state : {
        data : "something"
    },
    mutations : {},
    actions : {
      storeBill ({commit}) {
        console.log("function run ")
      }
    },
    getters : {
      something : (state) => state.data
    }
}