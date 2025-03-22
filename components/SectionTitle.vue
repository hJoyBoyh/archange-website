<script setup>
defineProps({
    title:String,
    subtitle:String,
    description:String
})
</script>
<template>

<div class="container p-4 mx-auto px-2 xl:px-8 flex w-full flex-col pt-10 items-center justify-center text-center ">
    <p className=" mt-3 text-lg font-bold leading-snug tracking-tight text-[#23ACC4] lg:leading-tight lg:text-2xl ">
     {{title}}
    </p>
    <h2 className=" mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
{{subtitle}}       </h2>
        <p className="py-4 text-md leading-normal text-gray-500 2xl:text-xl  ">
{{description}} </p></div>
</template>
<style scoped>
</style>