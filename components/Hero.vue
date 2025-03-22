<script setup>
defineProps({
    title:String,
   
})
const heroAnimation = () => {
  setTimeout(() => {
    bottomToTopAnimation({ element:'.container_bottom_to_top',element2: '.bottom_to_top' })
   }, 1);
}
onMounted(() => {
    heroAnimation()
   
    
})

</script>
<template>
<!-- <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div class="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
      <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
      <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
    </div>
  </div>
   -->
   <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 container_bottom_to_top">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="/public/cleaning-video-poly.mp4" type="video/mp4" autoplay muted loop playsinline></video>
    </div>
    <div class="video-content space-y-2 pt-20">
        <h1 class="font-light text-8xl font-bebas bottom_to_top opacity-100  max-lg:text-6xl">{{ title }}</h1>
        <div class="bottom_to_top opacity-100">
          <ScrollIndicator/>
        </div>
    
    </div>
</section>


</template>
<style scoped>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(10, 99, 160, 0.5);
  z-index: 1;
}

.video-content {
  z-index: 2;
}
</style>

