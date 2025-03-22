<script setup>
defineProps({
    title:String,
    subtitle:String,
    description:String,
    link:String
})
</script>
<template>
    <NuxtLink :to="`${link}`"
    class="text-white bg-[#23ACC4] cursor-pointer border-2 border-[#23ACC4] hover:bg-[#2DDBFA] hover:border-black hover:text-black duration-300   font-medium rounded-lg text-sm px-10 py-5  text-center ">
        <span
          class="">
          {{ title}}
          </span
        >
    </NuxtLink>
                              <!-- <button type="button" class="text-white bg-[#D92328] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-5 text-center ">ENVOYEZ</button> -->

</template>
<style scoped>
/* From Uiverse.io by adamgiebl */ 
.cssbuttons-io {
    position: relative;
    font-family: inherit;
    font-weight: 500;
    
    letter-spacing: 0.05em;
    border-radius: 0.8em;
    cursor: pointer;
    border: none;
    background: linear-gradient(to right, #0A2E72, #4a00e0);
    color: ghostwhite;
    overflow: hidden;
  }
  
  .cssbuttons-io svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
  }
  
  .cssbuttons-io span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 1.25em 2.5em 1.25em 2.5em;
  }
  
  .cssbuttons-io::before,
  .cssbuttons-io::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  
  }
  
  .cssbuttons-io::before {
    content: "";
   
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }
  
  .cssbuttons-io:hover::before {
    transform: translate3d(100%, 0, 0);
  }
  
  .cssbuttons-io:active {
    transform: scale(0.95);
  }
  
</style>