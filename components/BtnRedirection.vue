<template>
    <NuxtLink :to="redirection" >
      <div
        class=" h-14 w-56 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-black hover:from-blue-500 hover:to-cyan-500  hover:duration-300 duration-300 rounded-3xl flex justify-center items-center text-white text-2xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
    <p>{{title}}</p>
        
      </div>
    </NuxtLink>
</template>
<script setup>
defineProps({
    title: String,
    redirection : String
})
</script>