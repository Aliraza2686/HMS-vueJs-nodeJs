import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import Addstd from '../views/Addstd.vue'
import Students from '../views/Students.vue'
import Student from '../views/Student.vue'
import Bills from '../views/Bills.vue'
import AddBill from '../views/AddBill.vue'
import UpdateBill from '../views/UpdateBill.vue'
import Search from '../views/Search.vue'
import AddTeach from '../views/AddTeach.vue'
import TeacherDet from '../views/TeacherDet.vue'
import UpdateTeach from '../views/UpdateTeach.vue'
import UpdateStd from '../views/UpdateStd.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path : '/register',
    name : 'register',
    component : RegisterView
  },
  {
    path : '/dashboard',
    name : 'dashboard', 
    component : DashboardView
  },
  {
    path : '/add/student',
    name : 'addstd',
    component : Addstd
  }, {
    path : '/students/:department',
    name : 'studentsClass',
    component : Students
  },
  {
    path : '/student/:id',
    name : 'student',
    component : Student
  },
  {
    path : '/messBills/:id',
    name : 'messBills',
    component : Bills
  }, 
  {
    path : '/addBill/:id',
    name : 'addBill',
    component : AddBill
  }, 
  {
    path : '/update/bill/:id/:bid',
    name : 'updateBill',
    component : UpdateBill
  },
  {
    path : '/search/:term',
    name : 'search',
    component : Search
  }, 
  {
    path : '/add/teacher',
    name : 'addTeacher',
    component : AddTeach
  },
  {
    path : '/teacher/details/:id',
    name : 'teacherDetails',
    component : TeacherDet
  }, 
  {
    path : '/update/teacher/:id',
    name : 'updateTeacher',
    component : UpdateTeach
  },
  {
    path : '/update/student/:id',
    name : 'updateStudent',
    component : UpdateStd
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
