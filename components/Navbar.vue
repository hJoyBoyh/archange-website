<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'

const isActive = ref(true)
const activeClass = ref('burger-container')
const errorClass = ref('change')
const toggleMenu = () => {

    let tl = gsap.timeline()
    let tl2 = gsap.timeline()
    isActive.value = !isActive.value
    if (isActive.value === false) {
        tl.to('.burger-container',0.1, {
            pointerEvents: 'none',
        })
        tl.to('.menu-phone-container',0.1, {
            display:'flex',
           
            transformOrigin: 'top center',
            duration: 1,
            ease: 'power2.inOut',
        })
        tl.to('.menu-phone-1', 0.8, {
            scaleX: 1,
            transformOrigin: 'left center',
            
            ease: 'power2.inOut',

        },'start')
        tl.to('.menu-phone-2', 0.8, {
            scaleX: 1,
            transformOrigin: 'right center',
            
            ease: 'power2.inOut',

        },'start')
        tl.from('.menu-phone-title', 0.5, {
           opacity:0,
           
            ease: 'expo.out',

        })
        tl.from('.li-phone', 0.5, {
            y: 250,
           
            ease: 'expo.out',

        })
        tl.to('.burger-container',0.1, {
            pointerEvents: 'auto',
        })
    }
    if (isActive.value === true) {
        tl.to('.burger-container',0.1, {
            pointerEvents: 'none',
        })
        tl.to('.li-phone-container', 0.5, {
            opacity: 0,
            ease: 'expo.out',

        })
        tl.to('.menu-phone-title', 0.5, {
           opacity:0,
           
            ease: 'expo.out',

        })
        tl.to('.menu-phone-1', 0.8, {
            scaleX: 0,
            transformOrigin: 'left center',
            
            ease: 'power2.inOut',

        },'start')
        tl.to('.menu-phone-2', 0.8, {
            scaleX: 0,
            transformOrigin: 'right center',
            
            ease: 'power2.inOut',

        },'start')
      
        setTimeout(() => {
            tl.to('.li-phone-container', 0.1, {
            opacity: 1,
            ease: 'expo.out',

        })
        tl.to('.menu-phone-title', 0.1, {
           opacity:1,
           
            ease: 'expo.out',

        })
        tl.to('.menu-phone-container',0.1, {
            display:'none',
           
            
        }) 
        tl.to('.burger-container',0.1, {
            pointerEvents: 'auto',
        })
        }, 800);
        
    }
}
definePageMeta({
    layout: 'mainlayout'
})

</script>

<template>
  <div class="  px-10 bg-[#F34A4F] h-10 fixed w-full z-40 top-0 start-0  flex justify-center max-sm:justify-center items-center text-white  text-center text-sm lg:text-lg">
  
        <a href="tel:+15148856457" class="">&nbsp;438-933-3206 | </a>
       
        <a href="mailto:polyunion@example.com">&nbsp;archangeproprete@example.com </a>
        <p class="max-md:hidden">&nbsp;| &nbsp;8h - 20h Du lundi au vendredi | Samedi et Dimanche sur demande</p>


 
</div> 

        <!-- <button type="button" class="max-md:hidden text-white bg-[#0A63A0] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">OBTENIR UN DEVIS</button> -->

<nav class="  fixed w-full z-50 top-10 start-0  h-15">
    <!-- max-w-screen-2xl -->
    <div class=" flex flex-wrap w-full items-center justify-between mx-auto  p-4 ">
        <NuxtLink to="/"class="flex items-center space-x-3 rtl:space-x-reverse" :class="[!isActive ? 'opacity-0 duration-700' : 'opacity-100 duration-1000']">
    
        <img src="/logo-archange.png" class="  h-[100px] " alt="Flowbite Logo">
        
    
</NuxtLink>

    <div class="flex justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-7 jsp">
      <Button title="OBTENIR UN DEVIS" class="max-md:hidden" :class="[!isActive ? 'opacity-0 duration-700' : 'opacity-100 duration-1000']" link="#soumission"/>
        <div :class="[!isActive ? errorClass : '', activeClass]" @click="toggleMenu()" >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>

    </div>
   
    </div>
  </nav>
  <!-- <div class=" flex flex-wrap items-center justify-between mx-auto  p-4 fixed top-10 w-screen z-50 ">
    <NuxtLink to="/"class="flex items-center space-x-3 rtl:space-x-reverse ">

    <img src="/logo-poly-union.png" class="  h-[60px] " alt="Flowbite Logo">
    

</NuxtLink>
<div class="flex justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-7 ">
  <Button title="OBTENIR UN DEVIS" class="max-md:hidden"/>
    <div :class="[!isActive ? errorClass : '', activeClass]" @click="toggleMenu()" >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>

</div>

</div> -->

<div class="menu-phone-container fixed top-0 left-0 h-screen w-screen  z-[40] hidden justify-center">
    <div class="menu-phone-1 bg-[#23ACC4] h-screen w-1/2 flex justify-center items-center font-bebas text-[5em] 2xl:text-[15em]  text-[#EDEDED] max-lg:hidden">
        <h1 class="menu-phone-title">MENU</h1>

    </div>
    <div class="menu-phone-2 bg-[#23ACC4] h-screen w-1/2 flex gap-10 justify-center items-start max-2xl:items-center flex-col max-2xl:w-full text-center  font-bebas text-5xl max-lg:text-5xl max-xl:text-6xl  2xl:text-7xl">
        <div class="li-phone-container ">
            <li class="li-phone  " @click="toggleClass">
                <NuxtLink to="/">- Accueil</NuxtLink>
            </li>
        </div>
        <div class="li-phone-container" @click="toggleClass">
            <li class="li-phone">
                <NuxtLink to="/services">- Services</NuxtLink>
            </li>
        </div>
        <!-- <div class="li-phone-container" @click="toggleClass">
            <li class="li-phone">
                <NuxtLink to="/about">- A propos</NuxtLink>
            </li>
        </div> -->
        <!-- <div class="li-phone-container" @click="toggleClass">
            <li class="li-phone">
                <NuxtLink to="/careers">- Carrières</NuxtLink>
            </li>
        </div> -->
        
        <div class="li-phone-container" @click="toggleClass">
            <li class="li-phone">
                <NuxtLink to="/contact">- Contact</NuxtLink>
            </li>
        </div>

</div>

</div>
  
  <!-- <div class="menu-phone h-screen w-screen bg-white fixed top-0 left-0 z-50 text-black text-5xl flex justify-center items-center">
    <div class=" h-3/4   flex gap-5 w-1/4 justify-around items-center flex-col max-2xl:w-full text-center  relative z-60 font-bebas">
        <div class="li-phone-container ">
            <li class="li-phone " @click="toggleClass">
                <NuxtLink to="/">accueil</NuxtLink>
            </li>
        </div>
        <div class="li-phone-container " @click="toggleClass">
            <li class="li-phone">
                <NuxtLink to="/menu">menu</NuxtLink>
            </li>
        </div>
        <div class="li-phone-container" @click="toggleClass">
            <li class="li-phone">
                <NuxtLink to="/gallery">gallerie</NuxtLink>
            </li>
        </div>
        
        <div class="li-phone-container" @click="toggleClass">
            <li class="li-phone">
                <NuxtLink to="/contact">contact</NuxtLink>
            </li>
        </div>
       
        <div class="li-phone-container" @click="toggleClass">
            <li class="li-phone">
                <div class="h-1/6 bg-white border-2 border-black p-2 text-xl  flex justify-center items-center text-black font-bold rounded-xl hover:bg-black hover:text-white duration-300  ">
                    <NuxtLink to="https://griotplus.setmore.com/">
                    <div>
                        <p>RÉSERVER NOTRE SALLE</p>
            
                    </div>
                </NuxtLink>
                   </div>
            </li>
        </div>
        <div class="li-phone-container" @click="toggleClass">
            <li class="li-phone">
                <div class="h-1/6 bg-white border-2 border-black p-2 text-xl  flex justify-center items-center text-black font-bold rounded-xl hover:bg-black hover:text-white duration-300  ">
                    <NuxtLink to="https://www.doordash.com/store/griot-plus-montr%C3%A9al-30587905/">
                        <div>
                        <p>COMMANDER EN LIGNE</p>
            
                    </div>
                </NuxtLink>
                   </div>
            </li>
        </div>
    </div>
   </div>
   -->

</template>

<style scoped>
.burger-container {
    display: inline-block;
    cursor: pointer;
    position: relative;
    z-index: 100;
    background-color: #23ACC4;
    padding: 15px 12px;
    border-radius: 60px;


  }
  .jsp .change   {
    background-color:#F34A4F;
    transition:0.3S
  }
  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 2px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
  }
  
  .change .bar1 {
    transform: translate(0, 9px) rotate(-45deg);
    background-color: white;
  }
  
  .change .bar2 {opacity: 0;}
  
  .change .bar3 {
    transform: translate(0, -8px) rotate(45deg);
    background-color: white;

  }
  .change .burger-container{
    background-color: #F34A4F;

  }
  .menu-phone-container {
    z-index: 45;
    
}
.menu-phone-1,.menu-phone-2 {
    transform: scaleX(0)
}
.li-phone-container {
    overflow: hidden;
    
    list-style-type: none;
    transition: 0.2s;
    color: #BABABA
}
.li-phone-container:hover {
    color: #F34A4F;
    transition: 0.2s;
    
  
}
.router-link-active {
   color: white
}
</style>