<template>
    <img :src="svgPath" alt="SVG Icon" v-if="svgPath" />
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue'
  
  const props = defineProps({
    svgPath: {
      type: String,
      required: true
    }
  })
  
  const svgContent = ref(null)
  
  watchEffect(() => {
    if (props.svgPath) {
      svgContent.value = require(`~/public/${props.svgPath}`)
    }
  })
  </script>
  