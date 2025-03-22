<script setup>
defineProps({
    title:String,
    title2:String,
    img:String,
    p1:String,
    p2:String,
    p3:String,
    p4:String,
    p5:String,
})
const heroAnimation = () => {
  setTimeout(() => {

  
    
    bottomToTopAnimation({ element:'.container_bottom_to_top_1',element2: '.bottom_to_top_1' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_2',element2: '.bottom_to_top_2' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_3',element2: '.bottom_to_top_3' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_4',element2: '.bottom_to_top_4' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_5',element2: '.bottom_to_top_5' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_6',element2: '.bottom_to_top_6' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_7',element2: '.bottom_to_top_7' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_8',element2: '.bottom_to_top_8' })


    
  

    

   }, 1);
}

// initialize components based on data attribute selectors
onMounted(() => {
    heroAnimation()
})

</script>
<template>
    <Hero :title="`${title}`"/>
<SectionTitle :title="`${title}`"/>
 
<!-- <div class="container p-8 mx-auto xl:px-4  flex flex-wrap pb-20 lg:gap-10 lg:flex-nowrap container_bottom_to_top_1">
                <div class="flex items-center justify-center w-full lg:w-2/2 lg:order-1 bottom_to_top_1">
                    <div>
                        <img :src="`/${img}`" alt="" srcset="" class="object-fit h-[400px] w-[400px] lg:h-[521px] lg:w-[521px]">

                    </div>

                </div>
</div> -->
<div class="container_bottom_to_top_2">
    
</div>
<div class="bottom_to_top_2">
    <SectionTitle :subtitle="`${title2}`"/>

</div>

<div class="md:container md:mx-auto md:flex md:flex-wrap md:justify-center md:flex-row  px-2 xl:px-8 flex flex-col gap-15 mb-20">
    <p className="bottom_to_top_2 py-4 text-lg leading-normal text-gray-500 lg:text-lg 2xl:text-2xl w-4/4">
        {{ p1 }}
    </p>

        <p className="bottom_to_top_2 py-4 text-lg leading-normal text-gray-500 lg:text-lg 2xl:text-2xl w-4/4">
            {{ p2 }}
        </p>
            <p className="bottom_to_top_2 py-4 text-lg leading-normal text-gray-500 lg:text-lg 2xl:text-2xl w-4/4">
                {{ p3 }}
            </p>
            <p className="bottom_to_top_2 py-4 text-lg leading-normal text-gray-500 lg:text-lg 2xl:text-2xl w-4/4">
                {{ p4 }}
            </p>
            <p className="bottom_to_top_2 py-4 text-lg leading-normal text-gray-500 lg:text-lg 2xl:text-2xl w-4/4">
                {{ p5 }}
            </p>
</div>
 <ContactReminder/>
 <Footer/>
</template>
