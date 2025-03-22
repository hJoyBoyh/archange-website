<script setup>
defineProps({
    title:String,
    
    description:String
})</script>
<template>

    <div  class="bottom_to_top_3 w-[90vw] flex flex-col items-center bg-white border border-gray-200 rounded-[40px] p-8 shadow md:flex-row md:max-w-xl card-service ">
        <div class=" w-full flex flex-col items-center md:items-start justify-between p-4 leading-normal gap-5">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900  ">{{ title }}</h5>
            <p class="mb-2 text-xl  tracking-tight text-gray-900  max-sm:text-center">
                {{description}}
            </p>
          
        </div>
    </div>
    
    
    </template>
    <style scoped>
    .card-service{
        background-image: url("/public/valeur-card-bg.png");
        background-repeat: no-repeat;
        background-size: 100%;
    }
    </style>