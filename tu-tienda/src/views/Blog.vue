<template>
<div>
    <navbar/>
    <blog-interno/>
    <footer/>
</div>
    
</template>


<script>
import BlogInterno from '../components/BlogInterno.vue'
import Pie from '../components/Pie.vue'
import Navbar from '../components/Navbar.vue'

export default {
        components:
        {BlogInterno, Navbar, Pie}
    }

</script>