<template>
<div>
    <navbar/>
    <productos-int />
</div>
    
</template>


<script>
import ProductosInt from '../components/ProductosInt.vue'
import Navbar from "../components/Navbar.vue"

export default {
        components:
        {ProductosInt, Navbar},
}
    
    </script>