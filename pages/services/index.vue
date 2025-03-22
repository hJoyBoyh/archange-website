<template>
       <div v-if="isHydrated === true">
    <Navbar2/>
    <Hero title="NOS SERVICES"/>
    <div class="container_bottom_to_top_services">

</div>
<div class=" bottom_to_top_services opacity-100 pb-20">
  <SectionTitle title="NOS SERVICES" 
    subtitle="Des services de nettoyage personnalisés pour tous vos espaces résidentiels, commerciaux, et plus encore !" 
    description="Chez Archange Propreté, nous offrons des solutions de nettoyage complètes et sur mesure pour répondre à vos besoins spécifiques. Basés à Montréal et actifs dans les environs, notre équipe d'experts se consacre à offrir un service de haute qualité, que ce soit pour l'entretien régulier de vos espaces résidentiels, commerciaux ou pour un nettoyage post-rénovation. Explorez notre gamme de services et laissez-nous vous aider à maintenir des environnements propres, sains et accueillants. Faites confiance à notre savoir-faire pour un nettoyage irréprochable à chaque intervention."
    /></div>
  
    
    
    <div id="residentiel" class="container p-8 mx-auto px-2 xl:px-10  flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap container_bottom_to_top_service">
            <div   class="flex items-center justify-center w-full lg:w-1/2 lg:order-1 ">
                <div class="bottom_to_top_service">
                  <img src="/public/finance-img.jpg" alt="" srcset="" class="object-fit h-[400px] w-[500px] lg:h-[521px] lg:w-[621px] rounded-2xl">

                
                </div>

            </div>
            <div class="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end ">
                <div className="flex flex-col  items-center lg:items-start w-full mt-4 gap-4">
                 
                    <h3 className=" mt-3 text-xl font-bold text-gray-800 lg:leading-tight lg:text-4xl 2xl:text-4xl bottom_to_top_service ">
                        Nettoyage résidentiel
                    </h3>
      
                    <p className=" py-4 text-md text-center leading-normal text-gray-500 lg:text-lg xl:text-lg  w-full lg:w-3/4 lg:text-left bottom_to_top_service">
                      Archange Propreté propose des services de nettoyage résidentiel, nous prenons en charge le nettoyage du sol et du mobilier , le nettoyage des tapis, le nettoyage des vitres, des miroirs, des murs, des rampes d’escalier, nous nettoyons les chambres,les toilettes,les cuisines,les salons,vos sous-sols et bien plus encore.

                    </p>
                    <div className="flex  items-center justify-center xl:items-start space-y-3 space-x-4 space-y-0  flex-row lg:justify-start lg:items-start">
                        <!-- <NuxtLink
                          to="/about"
                          class="text-white bg-[#0A63A0]  duration-300 border-2 border-[#0A63A0] hover:bg-blue-800 hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          EN SAVOIR PLUS
                        </NuxtLink> -->
                     
                        
                      </div>
                </div>
                

            </div>

        </div>
        <div id="commercial" class="container p-8 mx-auto px-2 pl-10 max-md:pl-2  flex flex-wrap mb-20 lg:gap-20 lg:flex-nowrap container_bottom_to_top_service_2">
            <div class="flex items-center justify-center w-full lg:w-1/2 lg:bottom_to_top_2 ">
                <div class="bottom_to_top_service_2">
                    <img src="/public/img-commercial.png" alt="" srcset="" class="object-fit h-[400px] w-[500px] lg:h-[521px] lg:w-[621px] rounded-2xl bottom_to_top_service">

                </div>

            </div>
            <div class="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end">
                <div  className="flex flex-col  items-center lg:items-start w-full mt-4 gap-4">
                   
                    <h3 className=" mt-3 text-xl font-bold text-gray-800 lg:leading-tight lg:text-4xl 2xl:text-4xl bottom_to_top_service_2">
                        Nettoyage commercial
                    </h3>
      
                    <p className=" py-4 text-md text-center leading-normal text-gray-500 lg:text-lg xl:text-lg  w-full lg:w-3/4 lg:text-left bottom_to_top_service_2">
                      Archange Propretépropose des services de nettoyage commercial, nous prenons en charge le nettoyage de la façade de bâtiments, le nettoyage des vitres, des miroirs, des murs, des rampes d’escalier, des boutons d’ascenseur, des interrupteurs ,des poignées de portes et entretien des parkings.

   </p>
                    <div className="flex  items-center justify-center xl:items-start space-y-3 space-x-4 space-y-0  flex-row lg:justify-start lg:items-start">
                        <!-- <NuxtLink
                          to="/about"
                          class="text-white bg-[#0A63A0]  duration-300 border-2 border-[#0A63A0] hover:bg-blue-800 hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          EN SAVOIR PLUS
                        </NuxtLink>
                      -->
                        
                      </div>
                </div>
                

            </div>

        </div>
        <div id="finance"  class="container p-8 mx-auto px-2 xl:px-10  flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap container_bottom_to_top_service_3">
            <div class="flex items-center justify-center w-full lg:w-1/2 lg:order-1 bottom_to_top_2">
                <div class="bottom_to_top_service_3">
                  <img src="/public/compatabilite-img.jpg" alt="" srcset="" class="object-fit h-[400px] w-[500px] lg:h-[521px] lg:w-[621px] rounded-2xl bottom_to_top_service">

                </div>

            </div>
            <div class="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end bottom_to_top_2">
                <div  className="flex flex-col  items-center lg:items-start w-full mt-4 gap-4">
                 
                    <h3 className=" mt-3 text-xl font-bold   text-gray-800 lg:leading-tight lg:text-4xl 2xl:text-4xl bottom_to_top_service_3">
                        Nettoyage de bureaux
                    </h3>
      
                    <p className=" py-4 text-md text-center leading-normal text-gray-700 lg:text-lg xl:text-lg  w-full lg:w-3/4 lg:text-left bottom_to_top_service_3 ">
                      
                      Archange Propreté propose des services nettoyage de bureaux, nous prenons en charge le dépoussiérage, le nettoyage des surfaces, des sols, des vitres, ect. Nos équipes adaptent leurs interventions à vos besoins. En choisissant Archange Propreté, vous bénéficiez de services professionnels ,rapide et efficace.                    </p>
                    <div className="flex  items-center justify-center xl:items-start space-y-3 space-x-4 space-y-0  flex-row lg:justify-start lg:items-start">
                        <!-- <NuxtLink
                          to="/about"
                          class="text-white bg-[#0A63A0]  duration-300 border-2 border-[#0A63A0] hover:bg-blue-800 hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          EN SAVOIR PLUS
                        </NuxtLink> -->
                     
                        
                      </div>
                </div>
                

            </div>

        </div>
        <div id="garderie" class="container p-8 mx-auto px-2 pl-10 max-md:pl-2  flex flex-wrap mb-20 lg:gap-20 lg:flex-nowrap container_bottom_to_top_service_2">
            <div class="flex items-center justify-center w-full lg:w-1/2 lg:bottom_to_top_2 ">
                <div class="bottom_to_top_service_2">
                    <img src="/public/fiscalite-img.jpg" alt="" srcset="" class="object-fit h-[400px] w-[500px] lg:h-[521px] lg:w-[621px] rounded-2xl">

                </div>

            </div>
            <div class="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end">
                <div  className="flex flex-col  items-center lg:items-start w-full mt-4 gap-4">
                   
                    <h3 className=" mt-3 text-xl font-bold text-gray-800 lg:leading-tight lg:text-4xl 2xl:text-4xl bottom_to_top_service_2">
                        Nettoyage Garderie
                    </h3>
      
                    <p className=" py-4 text-md text-center leading-normal text-gray-500 lg:text-lg xl:text-lg  w-full lg:w-3/4 lg:text-left bottom_to_top_service_2">
                      Les garderies et les CPE sont des lieux sensibles qui nécessitent un entretien rigoureux pour garantir un environnement propre et sûr pour les enfants. Le nettoyage des garderies et CPE demande une attention particulière en raison de la fragilité des jeunes enfants, plus vulnérables aux bactéries et virus. Archange Propreté propose des services spécialisée en nettoyage garderie ,une solution idéale pour maintenir un haut niveau d’hygiène. <br>Chaque aspect du nettoyage des garderies et CPE est pris en charge avec soin : désinfection des tables, chaises et jouets, nettoyage des cuisines, des cantines et des salles d’ateliers, ainsi que le nettoyage en profondeur des salles de bains, des tapis, des murs et des espaces de jeux. Nos services comprennent également le décapage et récurage des planchers, pour un environnement parfaitement hygiénique.       </p>
                    <div className="flex  items-center justify-center xl:items-start space-y-3 space-x-4 space-y-0  flex-row lg:justify-start lg:items-start">
                        <!-- <NuxtLink
                          to="/about"
                          class="text-white bg-[#0A63A0]  duration-300 border-2 border-[#0A63A0] hover:bg-blue-800 hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          EN SAVOIR PLUS
                        </NuxtLink>
                      -->
                        
                      </div>
                </div>
                

            </div>

        </div>
    
      
    <ContactReminder/>
    <Footer/>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const isHydrated = ref(false);

const heroAnimation = () => {
  setTimeout(() => {
    bottomToTopAnimation({ element:'.container_bottom_to_top_services ',element2: '.bottom_to_top_services ' })

    bottomToTopAnimation({ element:'.container_bottom_to_top_1',element2: '.bottom_to_top_1' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_2',element2: '.bottom_to_top_2' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_3',element2: '.bottom_to_top_3' })
    bottomToTopAnimation({ element:'.container_bottom_to_top_4',element2: '.bottom_to_top_4' })

   }, 1);
}

// initialize components based on data attribute selectors
onMounted(() => {
    heroAnimation()
    isHydrated.value = true;
    useFlowbite(() => {
        initFlowbite();
    })
})

</script>