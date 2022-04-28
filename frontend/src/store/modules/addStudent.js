import router from '../../router'
import vueCookie from 'vue-cookie'
import axios from 'axios'

export default {
    state : {
        addStudentState : '',
        addBill : ''
    },
    mutations : {
        addStudentMute : (state, data) => state.addStudentState = data,
        clearAddStudentAlert : (state) => state.addStudentState = '',
        pushBill : (state, data) => state.addBill = data 
    },
    actions : {
     async addStudentAction({commit}, { 
        name,
        rollNo,
        className,
        department,
        memberSince,
        phone,
        location,
        parentsNo,
        hostel,
        shift}) {
            const token = vueCookie.get("token")
 
            console.log(token)
          
            const res = await axios.post('/add/student', {
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
            },{
                headers : {
                    'Authorization': token
                }
            })

            const data = await res.data
            console.log(data)
            if(data.error) {
                console.log(data.error)
            }
            commit("addStudentMute", data)
        },
        removeAddStudentAlert({commit}){
            commit("clearAddStudentAlert")
        },
        async addBill({commit}, {month, bill, isPayed, payedAt, id}) {
           const res = await axios.post(`/add/bill/:${id}`, {
             month,
             bill,
             isPayed,
             payedAt
           }, {
               headers : {
                   'Authorization' : vueCookie.get("token") 
               }
           })

           const data = await res.data
           if(data.error) {
               return router.push('/')
           }
           commit("pushBill", data)
        } 

    },
    getters : {
        addStudentGetter : (state) => state.addStudentState,
        addBill : (state) => state.addBill
    }
}

