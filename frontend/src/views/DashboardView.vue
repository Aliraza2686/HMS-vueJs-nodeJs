<template>
   <div>
       <Sidebar />
       <Dashboard />
   </div>
</template>

<script>

import Dashboard from '../components/Dashboard.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
    components : {
        Dashboard,
        Sidebar
    }
}
</script>

<style>

</style>