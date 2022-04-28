import axios from 'axios'
import router from '../../router'
import VueCookie from 'vue-cookie'
export default {
    state : {
        students : [],
        student : {}
    },
    mutations : {
        pushStudents : (state, students) => state.students = students,
        pushStudent : (state, student) => state.student = student
    },
    actions : {
    async getStudents  ({commit}, department) {
          const res = await axios.get(`/students/${department}`, {
              headers : {
                  'Authorization' : VueCookie.get("token")
              }
          })
          const data = await res.data
          if(data.error) {
             return router.push('/dashboard')
          }
          commit("pushStudents", data)
       },
    async getStudent ({commit}, id) {
        const res = await axios.get(`/student/${id}`, {
            headers : {
                'Authorization' : VueCookie.get("token")
            }
        })

        const data = await res.data
        if(data.error) {
            router.push('/')
            return
        }
        commit("pushStudent", data)
    }  
    },
    getters : {
      studentsClass : (state) => state.students,
      studentProfile : (state) => state.student
    }
}