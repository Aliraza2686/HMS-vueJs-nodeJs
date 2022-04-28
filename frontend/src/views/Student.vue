<template>
  <div>
    <Sidebar />
    <StudentProfile />
  </div>
</template>

<script>
import StudentProfile from '../components/StudentProfile.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
 components : {
     StudentProfile,
     Sidebar
 }
}
</script>

<style>

</style>