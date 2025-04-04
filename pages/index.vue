<template>
    <div v-if="isHydrated === true">
    <img src="/poly-union-home-background.png" alt="home-bg" class="h-[140vh] max-2xl:h-[120vh] w-screen z-10 absolute top-0"/>
    <Navbar/>
    <div class="relative top-32 z-20">

        <!-- hero -->
        <div class=" p-8 mx-auto xl:mx-8 flex flex-wrap ">
            <div className="flex items-center w-full max-lg:justify-center lg:w-1/2 show opacity-0 ">
                <div className=" mb-8">
                    <h1 className=" font-bebas text-center text-black lg:text-left text-4xl font-bold leading- tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl 2xl:text-8xl xl:leading-10  pb-5 max-xl:pb-0 max-lg:pb-0">
                        UN SERVICE DE NETTOYAGE              
                    </h1>
                    <h1 className="text-center font-bebas  lg:text-left text-4xl font-bold leading-snug tracking-tight text-black -rotate-3 w-auto lg:text-5xl lg:leading-tight xl:text-6xl 2xl:text-8xl xl:leading-leading-10 ">
                        <span class="bg-[#23ACC4] px-3 text-white xl:relative xl:bottom-2">PROFESSIONNEL</span>            
                      </h1>
                      <h1 className=" font-bebas lg:text-left text-center text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl 2xl:text-8xl xl:leading-leading-10  pt-7 max-xl:pt-3 max-lg:pt-0">
                        RAPIDE ET EFFICACE        
                
                    </h1>
                  <p className="py-5 text-xl max-lg:text-center leading-normal text-black lg:text-xl xl:text-xl max-w-2xl">
                    Archange Propreté nettoyage garanti une Qualité supérieure, un service client exceptionnel, une flexibilité et personnalisation, des prix compétitifs, les technologies et innovation, une conformité au règlement et votre sécurité.
                </p>
        
                  <div className="flex flex-col items-start max-lg:justify-center space-y-3 sm:space-x-4 sm:space-y-0 max-md:items-center sm:flex-row">
                    <NuxtLink to="#soumission"
                   
                    class="text-white bg-[#23ACC4] cursor-pointer border-2 border-[#23ACC4] hover:bg-[#2DDBFA] hover:border-black hover:text-black duration-300   font-medium rounded-lg text-sm px-10 py-5  text-center ">
                    OBTENIR UNE DEVIS
                    </NuxtLink>
                    <NuxtLink to="/contact"
                    
                    class="text-black border-2 border-[#23ACC4]  duration-300 hover:bg-[#2DDBFA] hover:border-black hover:text-black cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-5  text-center ">
                    CONTACTEZ-NOUS
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end w-full lg:w-1/2">
                <div className="">
                 <img src="/public/poly-union-hero-img.png" alt="" srcset="" class=" max-md:h-[400px] h-[500px] w-[500px] 2xl:h-[1000px] w-full">
                </div>
              </div>
        
        </div>

          <!-- form -->
    <div id="soumission" class=" h-auto w-screen   relative  flex items-center justify-center container_bottom_to_top">
       
        
        <form class="flex h-auto bottom_to_top opacity-100" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="68FB3211-5656-4C34-B167-2C610E9C7815">

            <!-- <input type="hidden" name="redirect" value="https://polyunionnettoyage.netlify.app/thanks"> -->



            <div class="">
               <div>
                
                  <div class="bg-[#23ACC4] rounded-3xl shadow md:w-screen lg:w-[50vw] p-2">
                     <div class="w-full flex items-center justify-center">
                        <div class="flex w-full flex-1 py-10 pl-5 overflow-hidden justify-center">
                           
                           <h1 class=" text-center text-4xl font-bold  text-white">Obtenir une soumission</h1>
                        </div>
                     </div>
                     <div class="px-5 pb-5">
                        <div class="flex py-2">
                           <div class="flex-grow w-1/2 pr-2"><input type="text" name="nom" id="nom" required   placeholder="Nom" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                           <div class="flex-grow  w-1/2 ">
                            <select id="type-de-demande" name="type-de-demande" required class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                <option value="" disabled selected hidden>Type de demande</option>
                                <option value="Demande de soumission">Demande de soumission</option>
                                <option value="Embauche">Embauche</option>
                                <option value="Question et autre">Question et autre</option>
                              </select> </div>
                        </div>
                        <div class="flex py-2">
                           <div class="flex-grow w-1/2 pr-2"><input type="text" name="prenom" id="prenom" placeholder="Prénom" required class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                           <div class="flex-grow  w-1/2 "><input type="text" name="nom-entreprise" id="nom-entreprise"  placeholder="Nom de l'entreprise *(falcutatif)" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                        </div>
                        <div class="flex py-2">
                           <div class="flex-grow w-1/2 pr-2"><input  type="tel" name="telephone" id="telephone"  required placeholder="Teléphone" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                           <div class="flex-grow  w-1/2 "><input type="text" name="m2" id="m2" placeholder="M2 approximatif *(falcutatif)" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                        </div>
                        <div class="flex ">
                          <div class="flex flex-col w-1/2 ">
                           <div class="flex-grow w-full pr-2 py-2"><input type="email" name="courriel" id="courriel"  required  placeholder="Courriel" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                           <div class="flex-grow  w-full pr-2 "><input type="text" pattern="[A-Za-z0-9]{6}" name="code-postal" id="code-postal"  required placeholder="Code postal" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                          </div>
                          <div class="flex-grow w-1/2 py-2 "><textarea name="message" id="message"  placeholder="Message"  required class=" text-black placeholder-gray-600 w-full  px-4 py-8 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></textarea></div>
        
                        </div>
                        <div class="flex items-center justify-center py-10 gap-5">
                          <img src="/public/vector_left.png" alt="" srcset="" class="max-sm:hidden">
                        <button type="submit" class="text-white bg-[#F34A4F] border-2 border-[#F34A4F] duration-300 hover:bg-[#2DDBFA] hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-5 text-center ">ENVOYEZ</button>
                        <img src="/public/vector_right.png" alt="" srcset="" class="max-sm:hidden">
                        </div>
                        <div class="flex flex-col items-center justify-center  text-white gap-2">
        <p class="font-bold">OU APPELEZ-NOUS DIRECTEMENT.</p>
        <a href="tel:+15147970335" class="hover:underline">514-797-0335</a>
        <p>ou</p>
        <a href="tel:+14389333206" class="hover:underline">438-933-3206</a>

                        </div>
                        
                     </div>
                     
                    
                   
                  </div>
                
               </div>
            </div>
        </form>
        
            </div>
<!-- section services -->
<div class="mx-2 lg:mx-20  mx-auto flex max-lg:flex-col max-lg:mx-32 max-md:mx-20 max-sm:mx-10 justify-center gap-5 2xl:gap-5 mt-20 container_bottom_to_top_1">
    <HomeServiceCard title="Nettoyage Bureaux" number="1" link="services/nettoyage-bureaux"/>
    <HomeServiceCard title="Nettoyage Commercial" number="2"  link="services/nettoyage-commercial"/>

    <HomeServiceCard title="Service de Conciergerie" number="3" link="services/service-conciergerie"/>
    <HomeServiceCard title="Nettoyage Airbnb" number="4" link="services/nettoyage-airbnb"/>

</div>
<!--  -->
<div class="w-screen flex justify-center items-center mt-10  bottom_to_top_1 opacity-100">
    <Button title="VOIR TOUT LES SERVICES" link="services"/>

</div>
            <!-- a propso -->
            <div class="container p-8 mx-auto px-2 xl:px-8  flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap container_bottom_to_top_2">
                <div class="flex items-center justify-center w-full lg:w-1/2 lg:order-1 bottom_to_top_2">
                    <div>
                        <img src="/public/polygone-poly.png" alt="" srcset="" class="object-fit h-[400px] w-[400px] lg:h-[521px] lg:w-[521px]">

                    </div>

                </div>
                <div class="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end bottom_to_top_2">
                    <div className="flex flex-col  items-center lg:items-start w-full mt-4">
                        <p className=" mt-3 text-lg font-bold leading-snug tracking-tight text-[#23ACC4] lg:leading-tight lg:text-xl 2xl:text-2xl ">
                            A PROPOS DE NOUS
                        </p>
                        <h3 className=" mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl 2xl:text-5xl ">
                            Votre propreté, notre priorité
                        </h3>
          
                        <p className=" py-4 text-md text-center leading-normal text-gray-500 lg:text-lg xl:text-lg  w-full lg:w-3/4 lg:text-left ">
                            Vous recherchez une solution de ménage à domicile à Montréal qui combine qualité et expertise ? Archange Propreté est votre partenaire de confiance pour garder votre maison impeccable. Conscients que chaque foyer a des besoins uniques en matière de nettoyage, nous offrons des services d'entretien ménager résidentiel personnalisés à Montréal et dans les environs.
                        </p>
                        <div className="flex  items-center justify-center xl:items-start space-y-3 space-x-4 space-y-0  flex-row lg:justify-start lg:items-start">
                            <NuxtLink
                              to="/about"
                              class="text-white bg-[#23ACC4]  duration-300 border-2 border-[#23ACC4] hover:bg-[#2DDBFA] hover:border-black hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-5  text-center ">
                              EN SAVOIR PLUS
                            </NuxtLink>
                         
                            
                          </div>
                    </div>
                    

                </div>

            </div>
            <!-- NETTOYAGE DE BUREAUZ -->
            <div class="container p-8 mx-auto px-2 xl:px-8  flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap container_bottom_to_top_3">
                <div class="flex items-center justify-center w-full lg:w-1/2 bottom_to_top_3 opacity-100">
                    <div>
                        <img src="/public/polygone-poly-2.png" alt="" srcset="" class="object-fit h-[400px] w-[400px] lg:h-[521px] lg:w-[521px] ">

                    </div>

                </div>
                <div class="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end bottom_to_top_3 opacity-100">
                    <div className="flex flex-col  items-center lg:items-start w-full mt-4">
                        <p className=" mt-3 text-lg font-bold leading-snug tracking-tight text-[#23ACC4] lg:leading-tight  lg:text-xl 2xl:text-2xl ">
                            NETTOYAGE DE BUREAUX
                        </p>
                        <h3 className=" mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl 2xl:text-5xl ">
                            Un environnement propre et sain
                        </h3>
          
                        <p className=" py-4 text-md text-center leading-normal text-gray-500 lg:text-lg xl:text-lg  w-full lg:w-3/4 lg:text-left ">
                            Archange Propreté propose des services nettoyage de bureaux, nous prenons en charge le dépoussiérage, le nettoyage des surfaces, des sols, des vitres, ect. Nos

                            équipes adaptent leurs interventions à vos besoins. En choisissant Archange Propreté, vous bénéficiez de services professionnels ,rapide et efficace. </p>

                    </div>

                </div>

            </div>
            <!-- NETTOYAGE COMMERCIAL -->
            <div class="container p-8 mx-auto px-2 xl:px-8  flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap container_bottom_to_top_4">
                <div class="flex items-center justify-center w-full lg:w-1/2 lg:order-1 bottom_to_top_4 opacity-100">
                    <div>
                        <img src="/public/polygone-poly-3.png" alt="" srcset="" class="object-fit h-[400px] w-[400px] lg:h-[521px] lg:w-[521px] ">

                    </div>

                </div>
                <div class="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end bottom_to_top_4 opacity-100">
                    <div className="flex flex-col  items-center lg:items-start w-full mt-4">
                        <p className=" mt-3 text-lg font-bold leading-snug tracking-tight text-[#23ACC4] lg:leading-tight  lg:text-xl 2xl:text-2xl ">
                            NETTOYAGE COMMERCIAL
                        </p>
                        <h3 className=" mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl 2xl:text-5xl ">
                            Excellence assurée pour vos projets                        </h3>
          
                            <p className=" py-4 text-md text-center leading-normal text-gray-500 lg:text-lg xl:text-lg  w-full lg:w-3/4 lg:text-left ">
                                Archange Propreté propose des services de nettoyage commercial, nous prenons en charge le nettoyage de la façade de bâtiments, le nettoyage des vitres, des miroirs, des murs, des rampes d’escalier, des boutons d’ascenseur, des interrupteurs ,des poignées de portes et entretien des parkings. De plus nos équipes adaptent leurs interventions à vos

besoins. En choisissant Archange Propreté, vous bénéficiez de services professionnels ,rapide et efficace.

Lieux cible : des commerces, des magasins, des restaurants, des garderies, des cliniques etc.</p>
                        
                    </div>
                    

                </div>

            </div>
            

            <!-- TEMOINAGNE -->
            
             <div class="container_bottom_to_top_5">

             </div>
             <!-- <div class=" bottom_to_top_5 opacity-100">
                <SectionTitle title="TÉMOIGNAGE" subtitle="Expertise et fiabilité pour un service irréprochable" description="Chez Archange Propreté, la satisfaction de nos clients est notre priorité. Nous sommes fiers des relations solides que nous avons construites et de la qualité exceptionnelle de nos services. Découvrez les témoignages de nos clients satisfaits, qu'il s'agisse de nettoyage résidentiel, commercial ou après construction. Leur expérience est le reflet de notre engagement envers l'excellence."/>
            </div> -->
             <!-- rating -->
             <!-- <div class="w-screen flex justify-center items-center flex-col gap-8 container_bottom_to_top_6 ">
                <img src="/public/google-logo.png" alt="" srcset="" class=" bottom_to_top_6 opacity-100">
                <img src="/public/5-starts-google.png" alt="" class=" bottom_to_top_6 opacity-100">
        
            </div> -->
            <!-- <div class="pt-10 bottom_to_top_6 opacity-100">
                <Carousel/>

            </div> -->
            <!-- <div class="w-screen flex justify-center pt-10 bottom_to_top_6 opacity-100 ">
                <NuxtLink
               to="https://polyunionnettoyage.setmore.com/reviews"
                class="text-black border-2 border-[#F34A4F] hover:bg-[#F34A4F] hover:text-white duration-300 font-medium rounded-lg text-sm px-10 py-5  text-center ">
                LAISSER UN COMMENTAIRE
                </NuxtLink>
            </div> -->
            <!-- faq -->
             <div class="container_bottom_to_top_7">

             </div>
<div class="bottom_to_top_7 opacity-100">
    <SectionTitle title="FAQ : QUESTION FRÉQUEMENT POSÉES" subtitle="Tout ce que vous devez savoir sur nos Services de Nettoyage"/>

</div>

            <div class="container p-8 mx-auto xl:px-4 flex flex-wrap  ">
                <div class="flex items-center justify-center  w-full lg:w-1/2 lg:order-1 bottom_to_top_7 opacity-100">
                    <div>
                        <img src="/public/polygone-poly-4.png" alt="" srcset="" class="object-fit h-[400px] 2-[400px] lg:h-[521px] lg:w-[521px]">
                    </div>
        
                </div>
                <FAQ/>
            </div>
             
            <!-- contact reminder -->
             <ContactReminder/>
             <!-- footer -->
             <!-- <div class="h-[150vh] bg-black w-full px-10 flex flex-col justify-center items-center   max-lg:w-full">
              
                   
                <Carousel/>
              
          </div> -->
              
             <Footer/>


    </div>
</div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';
import { ref } from 'vue';

const isHydrated = ref(false);

const heroAnimation = () => {
  setTimeout(() => {

  
    contentAnimation({ element: '.animation' })
    showAnimation({ element: '.show' })
    rightToLeftAnimation({ element:'.container_right_to_left',element2: '.right_to_left' })
    bottomToTopAnimation({ element:'.container_bottom_to_top',element2: '.bottom_to_top' })
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
    isHydrated.value = true;
    useFlowbite(() => {
        initFlowbite();
    })
})
</script>
<style >
@font-face {
    font-family: BebasNeue;
    src: url('../assets/fonts/BebasNeue-Regular.ttf');
}


@font-face {
    font-family: OdorMeanChey-Regular;
    src: url('../assets/fonts/OdorMeanChey-Regular.ttf');
}

html,body{
   scroll-behavior: auto;
}

.font-bebas{
    font-family: BebasNeue;

}
.font-odor{
    font-family: OderMeanChey;

}
</style>