<template>
    <div class=" h-[80vh] max-md:h-auto 2xl:h-[50vh] flex bg-blue-400 container_bottom_to_top_100">
        <img src="/public/poly-union-contact-reminder.png" alt="" srcset="" class="h-[80vh] 2xl:h-[50vh] w-screen absolute object-cover max-md:hidden ">
        <div class=" relative top-0 container p-8 mx-auto xl:px-10  flex flex-wrap items-center mb-20 lg:gap-10 lg:flex-nowrap ">
          
            <div class="flex flex-wrap items-center  w-full justify-center">
                <div className="flex flex-col w-full mt-4">
                    <!-- <p className=" mt-3 text-lg md:text-xl  max-md:text-center font-bold leading-snug tracking-tight text-white  opacity-70 lg:leading-tight lg:text-2xl ">
                       BESOIN D'UN ESPACE PROPRE ET IMPECCABLE ?
                    </p> -->
                    <h3 className=" mt-3 max-sm:text-xl text-3xl  text-center  font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-5xl bottom_to_top_100 ">
RÉDUIT LA SALETÉ EN METTANT LA FRAÎCHEUR ! 
                    </h3>
      
                    <p className=" py-4 max-sm:text-md text-lg  text-center leading-normal   max-md:text-center  text-white lg:text-xl xl:text-lg  w-full bottom_to_top_100">
                        Prenez rendez-vous dès aujourd'hui.</p>
                    <div className="flex  items-center justify-center xl:items-start space-y-3 space-x-4 space-y-0  flex-row  bottom_to_top_100">
                        <NuxtLink
                          to="https://www.setmore.com/fr"
                         
                          class="text-white bg-[#F34A4F] border-2 border-[#F34A4F] hover:bg-[#2DDBFA]  duration-300  hover:border-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-5  text-center  ">
                          PRENDRE UN RENDEZ-VOUS
                        </NuxtLink>
                     
                        
                      </div>
                </div>
                

            </div>

        </div>
     </div>
</template>
<script setup>
const heroAnimation = () => {
  setTimeout(() => {

  
    contentAnimation({ element: '.animation' })
    showAnimation({ element: '.show' })
    
    bottomToTopAnimation({ element:'.container_bottom_to_top_100',element2: '.bottom_to_top_100' })


    
  

    

   }, 1);
}

// initialize components based on data attribute selectors
onMounted(() => {
    heroAnimation()
   
})
</script>