<template>
    <div v-if="isHydrated === true">
 <Navbar2/>
 <Hero title="CONTACT"/>

 
<div class="container p-4 mx-auto px-2 xl:px-8 flex w-full flex-col mt-4 items-center md:items-start justify-center ">
  
    
    <h2 className=" mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
        Contact information   </h2>
        <p className="py-4 text-xl leading-normal text-gray-500 2xl:text-xl md:w-1/2 w-full text-center md:text-start   ">
            Cher client, si vous souhaitez discuter de futurs projets ou avez d'autres questions, n'hésitez pas à nous contacter. Nous avons hâte d'avoir de vos nouvelles.</p>
</div>
<div class="container p-4 mx-auto px-0 xl:px-8 flex flex-col md:flex-row w-full  mt-4 items-start justify-center mb-20">
    <div class="px-2">
        <h2 class="mb-6 text-xl font-bold text-black uppercase ">Legal</h2>
        <ul class="text-gray-500  font-medium">
          <li class="mb-4 flex items-center justify-start gap-2">
              <svg viewBox="0 0 12 20" fill="none" class="w-7 h-7 bg-[#F34A4F] p-1 rounded-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.166 15.8335H1.83268V4.16683H10.166M10.166 0.833496H1.83268C0.907682 0.833496 0.166016 1.57516 0.166016 2.50016V17.5002C0.166016 17.9422 0.34161 18.3661 0.654171 18.6787C0.966731 18.9912 1.39065 19.1668 1.83268 19.1668H10.166C10.608 19.1668 11.032 18.9912 11.3445 18.6787C11.6571 18.3661 11.8327 17.9422 11.8327 17.5002V2.50016C11.8327 2.05814 11.6571 1.63421 11.3445 1.32165C11.032 1.00909 10.608 0.833496 10.166 0.833496Z" fill="white"/>
                  </svg>
                  
                  <a href="tel:+15147970335" class="hover:underline">514-797-0335 |</a>
                  <a href="tel:+14389333206" class="hover:underline">438-933-3206</a>          </li>
          <li class="mb-4 flex items-center justify-start gap-2">
              
              <svg  viewBox="0 0 20 20" class="w-7 h-7 bg-[#F34A4F] p-1 rounded-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33268 16.6668C2.87435 16.6668 2.48213 16.5038 2.15602 16.1777C1.8299 15.8516 1.66657 15.4591 1.66602 15.0002V5.00016C1.66602 4.54183 1.82935 4.14961 2.15602 3.8235C2.48268 3.49738 2.8749 3.33405 3.33268 3.3335H16.666C17.1243 3.3335 17.5168 3.49683 17.8435 3.8235C18.1702 4.15016 18.3332 4.54238 18.3327 5.00016V15.0002C18.3327 15.4585 18.1696 15.851 17.8435 16.1777C17.5174 16.5043 17.1249 16.6674 16.666 16.6668H3.33268ZM9.99935 10.6877C10.0688 10.6877 10.1418 10.6771 10.2185 10.656C10.2952 10.6349 10.368 10.6038 10.4368 10.5627L16.3327 6.87516C16.4438 6.80572 16.5271 6.71905 16.5827 6.61516C16.6382 6.51127 16.666 6.39655 16.666 6.271C16.666 5.99322 16.548 5.78488 16.3118 5.646C16.0757 5.50711 15.8327 5.51405 15.5827 5.66683L9.99935 9.16683L4.41602 5.66683C4.16602 5.51405 3.92296 5.51072 3.68685 5.65683C3.45074 5.80294 3.33268 6.00766 3.33268 6.271C3.33268 6.40988 3.36046 6.53155 3.41602 6.636C3.47157 6.74044 3.5549 6.82016 3.66602 6.87516L9.56185 10.5627C9.63129 10.6043 9.70435 10.6357 9.78102 10.6568C9.85768 10.6779 9.93046 10.6882 9.99935 10.6877Z" fill="white"/>
                  </svg>
                  <a href="mailto:info@archangepropreté.ca" class="hover:underline">info@archangepropreté.ca</a>
                </li> 
        <!-- <li class="mb-4 flex items-center justify-start gap-2">
            <svg class="w-7 h-7 bg-[#F34A4F] p-1 rounded-full" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.6654 16.9997C33.6654 7.79967 26.1987 0.333008 16.9987 0.333008C7.7987 0.333008 0.332031 7.79967 0.332031 16.9997C0.332031 25.0663 6.06536 31.783 13.6654 33.333V21.9997H10.332V16.9997H13.6654V12.833C13.6654 9.61634 16.282 6.99967 19.4987 6.99967H23.6654V11.9997H20.332C19.4154 11.9997 18.6654 12.7497 18.6654 13.6663V16.9997H23.6654V21.9997H18.6654V33.583C27.082 32.7497 33.6654 25.6497 33.6654 16.9997Z" fill="white"/>
                </svg>
                
            <svg class="w-7 h-7 bg-[#F34A4F] p-1 rounded-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9987 3.33301H26.9987C32.332 3.33301 36.6654 7.66634 36.6654 12.9997V26.9997C36.6654 29.5634 35.6469 32.0222 33.8341 33.835C32.0212 35.6479 29.5625 36.6663 26.9987 36.6663H12.9987C7.66536 36.6663 3.33203 32.333 3.33203 26.9997V12.9997C3.33203 10.4359 4.35048 7.97716 6.16333 6.16431C7.97618 4.35146 10.4349 3.33301 12.9987 3.33301ZM12.6654 6.66634C11.0741 6.66634 9.54794 7.29848 8.42272 8.4237C7.29751 9.54892 6.66536 11.075 6.66536 12.6663V27.333C6.66536 30.6497 9.3487 33.333 12.6654 33.333H27.332C28.9233 33.333 30.4495 32.7009 31.5747 31.5756C32.6999 30.4504 33.332 28.9243 33.332 27.333V12.6663C33.332 9.34967 30.6487 6.66634 27.332 6.66634H12.6654ZM28.7487 9.16634C29.3012 9.16634 29.8311 9.38583 30.2218 9.77654C30.6125 10.1672 30.832 10.6971 30.832 11.2497C30.832 11.8022 30.6125 12.3321 30.2218 12.7228C29.8311 13.1135 29.3012 13.333 28.7487 13.333C28.1962 13.333 27.6663 13.1135 27.2756 12.7228C26.8849 12.3321 26.6654 11.8022 26.6654 11.2497C26.6654 10.6971 26.8849 10.1672 27.2756 9.77654C27.6663 9.38583 28.1962 9.16634 28.7487 9.16634ZM19.9987 11.6663C22.2088 11.6663 24.3285 12.5443 25.8913 14.1071C27.4541 15.6699 28.332 17.7895 28.332 19.9997C28.332 22.2098 27.4541 24.3294 25.8913 25.8922C24.3285 27.455 22.2088 28.333 19.9987 28.333C17.7886 28.333 15.6689 27.455 14.1061 25.8922C12.5433 24.3294 11.6654 22.2098 11.6654 19.9997C11.6654 17.7895 12.5433 15.6699 14.1061 14.1071C15.6689 12.5443 17.7886 11.6663 19.9987 11.6663ZM19.9987 14.9997C18.6726 14.9997 17.4008 15.5265 16.4632 16.4641C15.5255 17.4018 14.9987 18.6736 14.9987 19.9997C14.9987 21.3258 15.5255 22.5975 16.4632 23.5352C17.4008 24.4729 18.6726 24.9997 19.9987 24.9997C21.3248 24.9997 22.5966 24.4729 23.5342 23.5352C24.4719 22.5975 24.9987 21.3258 24.9987 19.9997C24.9987 18.6736 24.4719 17.4018 23.5342 16.4641C22.5966 15.5265 21.3248 14.9997 19.9987 14.9997Z" fill="white"/>
                </svg>
                
        </li> -->
        </ul>
    </div>
       
        
        <form id="contact-form" class="flex h-auto bottom_to_top opacity-100" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="68fb3211-5656-4c34-b167-2c610e9c7815">
         


<!-- ✅ Correct. Full URL with https:// -->
<!-- <input type="hidden" name="redirect" value="https://polyunionnettoyage.netlify.app/thanks"> -->


            <div class="">
               <div>
                
                  <div class="bg-[#23ACC4] rounded-3xl shadow lg:w-[50vw] p-2">
                     <div class="w-full flex items-center justify-center">
                        <div class="flex w-full flex-1 py-10 pl-5 overflow-hidden justify-center">
                           
                           <h1 class=" text-center text-4xl font-bold  text-white">Contactez-nous</h1>
                        </div>
                     </div>
                     <div class="px-5 pb-5">
                        <div class="flex py-2">
                           <div class="flex-grow w-1/2 pr-2"><input   type="text" name="nom" id="nom"  required placeholder="Nom" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                           <div class="flex-grow  w-1/2 ">
                              <select id="type-de-demande" name="type-de-demande" required class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                  <option value="" disabled selected hidden>Type de demande</option>
                                  <option value="Demande de soumission">Demande de soumission</option>
                                  <option value="Embauche">Embauche</option>
                                  <option value="Question et autre">Question et autre</option>
                                </select> </div>
                          </div>
                        <div class="flex py-2">
                           <div class="flex-grow w-1/2 pr-2"><input type="text" name="prenom"  id="prenom" required  placeholder="Prénom" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                           <div class="flex-grow  w-1/2 "><input type="text" name="nom-entreprise" id="nom-entreprise" placeholder="Nom de l'entreprise *(falcutatif) " class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                        </div>
                        <div class="flex py-2">
                           <div class="flex-grow w-1/2 pr-2"><input type="tel" name="telephone"  required  placeholder="Teléphone" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                           <div class="flex-grow  w-1/2 "><input type="text" name="m2" id="m2" placeholder="M2 approximatif *(falcutatif)" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                        </div>
                        <div class="flex ">
                          <div class="flex flex-col w-1/2 ">
                           <div class="flex-grow w-full pr-2 py-2"><input type="email" name="courriel" id="courriel"  required placeholder="Courriel" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                           <div class="flex-grow  w-full pr-2 "><input type="text" pattern="[A-Za-z0-9]{6}" name="code-postal" id="code-postal"  required placeholder="Code postal" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></div>
                          </div>
                          <div class="flex-grow w-1/2 py-2 "><textarea name="message" id="message"  required placeholder="Message" class=" text-black placeholder-gray-600 w-full  px-4 py-8 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></textarea></div>
        
                        </div>
                        <div class="flex items-center justify-center py-10 gap-5">
                          <img src="/public/vector_left.png" alt="" srcset="" class="max-sm:hidden">
                          <!-- <Button title="ENVOYEZ"/> -->
                          <button type="submit" class="text-white bg-[#F34A4F] border-2 border-[#F34A4F] duration-300 hover:bg-blue-900 hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-5 text-center ">ENVOYEZ</button>
                          <img src="/public/vector_right.png" alt="" srcset="" class="max-sm:hidden">
                        </div>
                        <div class="flex flex-col items-center justify-center  text-white gap-2">
        <p class="font-bold">OU APPELEZ-NOUS DIRECTEMENT.</p>
        <a href="tel:+15147970335" class="hover:underline">514-797-0335</a>
        <p>ou</p>
        <a href="tel:+14389333206" class="hover:underline">438-933-3206</a>                        </div>
                        
                     </div>
                     
                    
                   
                  </div>
                
               </div>
            </div>
        </form>
        
          

</div>


 
 
 
 <Footer/>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const isHydrated = ref(false);

// Le hook onMounted s'exécute côté client après l'hydratation
onMounted(() => {
isHydrated.value = true;
});

</script>