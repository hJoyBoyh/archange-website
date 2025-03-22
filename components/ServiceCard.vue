<template>

<NuxtLink  :to="`/${link}`" class="w-[90vw] flex flex-col items-center bg-white border border-gray-200 rounded-[27px] shadow md:flex-row md:max-w-xl card-service ">
    <img class="object-cover  rounded-t-lg h-96 md:h-auto max-md:w-[90vw] md:rounded-none md:rounded-s-lg" :src="`/${img}`" alt="">
    <div class=" w-full flex flex-col items-center md:items-start justify-between p-4 leading-normal gap-5">
        <img src="/public/cleaning-icon.png" alt="" srcset="" class="h-[40px] w-[40px]">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900  uppercase max-sm:text-center">{{title}}</h5>
        <NuxtLink :to="`/${link}`"
                    class=" w-[50%] text-black border-2   border-[#23ACC4] hover:bg-[#23ACC4] hover:border-white  duration-200 hover:text-white     focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  p-4 text-center ">
                    VOIR
        </NuxtLink>
    </div>
</NuxtLink>


</template>
<script setup>
defineProps({
    img:String,
    title:String,
  link:String
})
</script>
<style scoped>
.card-service{
    background-image: url("/public/card-service-bg.png");
}
</style>