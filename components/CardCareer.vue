<template>
    <div class="w-full h-24 flex  items-center justify-center  ">
        <div
            class="h-32 w-full  flex flex-col items-center justify-between pt-10  text-5xl ">

            <div class="h-3/4 w-full  flex items-center justify-between pb-10 pb-2 px-5">
                <h1 class="max-xl:text-3xl max-md:text-xl" >{{title}}</h1>
                <BtnRedirection title="Postuler" :redirection="redirection" />
            </div>


            <div class="w-full h-0.5 bg-black"></div>
        </div>

    </div>
</template>
<script setup>

defineProps({
    title: String,
    redirection: String
})
</script>
<style scoped>
.img-project:hover {}
</style>