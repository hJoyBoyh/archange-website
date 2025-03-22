<template>
    <section class=" text-black w-full lg:w-1/2 flex  items-center bottom_to_top_7">
  <div class=" flex flex-col justify-start  w-full">
    <div class="flex flex-col ">
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline w-full">Quel sont vos services les plus populaires ?</summary>
        <div class="px-4 pb-4">
          <p>Nos services les plus populaires incluent le nettoyage Airbnb, le nettoyage résidentiel, le nettoyage de bureaux, ainsi que le nettoyage commercial. Chaque service est adapté aux besoins spécifiques de nos clients pour garantir des résultats impeccables. Pour en savoir plus ou discuter de vos besoins particuliers, n'hésitez pas à prendre rendez-vous avec nous.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Combien coûtent vos services de nettoyage ?</summary>
        <div class="px-4 pb-4">
          <p>Tous nos coûts varient en fonction de la superficie à nettoyer et des besoins spécifiques de chaque client. Pour obtenir une estimation personnalisée et discuter de vos besoins, nous vous invitons à prendre rendez-vous. Nous serons ravis de vous fournir plus de détails.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Equipement et fourniture ?</summary>
        <div class="px-4 pb-4">
          <p>Nous offrons les équipements et les fournitures nécessaires pour réaliser les prestations de nettoyage (aspirateurs, produits d'entretien, chiffons, etc.) et nous établissons un plan d'approvisionnement.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Quelle est votre flexibilité en termes d'horaires ?</summary>
        <div class="px-4 pb-4">
          <p>Nous sommes flexibles en termes d'horaires et disponibles de 8h à 20h en semaine. Bien que nous soyons généralement fermés les week-ends, nous pouvons parfois effectuer des travaux pour certains clients particuliers. N'hésitez pas à prendre rendez-vous pour discuter de vos besoins et vérifier nos disponibilités.</p>
        </div>
      </details>
  
     
      
    </div>
  </div>
  
</section>

</template>
<style scoped>
summary {
  list-style: none;
  display: flex; /* also removes the list marker */
  align-items: center;
  padding: 10px;
  font-weight: bold;
  justify-content: space-between;
  border-bottom: 2px solid #23ACC4; /* Adds the blue line */

}

summary::after {
  content: '';
  width: 18px;
  height: 10px;
  background: url('https://uploads.sitepoint.com/wp-content/uploads/2023/10/1697699669arrow.svg') no-repeat;
  background-size: cover;
  margin-left: .75em;
  transition: 0.2s;
  
  
  filter: invert(18%) sepia(89%) saturate(3946%) hue-rotate(354deg) brightness(94%) contrast(112%); /* #D92328 */

}

details[open] > summary::after {
  transform: rotate(180deg);
  filter: invert(18%) sepia(89%) saturate(3946%) hue-rotate(354deg) brightness(94%) contrast(112%); /* #D92328 */

  
}

summary::-webkit-details-marker {
    color: #e162bf;
}

summary {

  color: #30353b;
  
  
}

details[open] summary {
   
 }

details {
 
}

/* extra styles */

* {box-sizing: border-box;}
body {font-family: system-ui, sans-serif; margin: 20px; background: #fff9f1;}
h1 {font-size: 1.2em;}
article > *:first-child {margin: 0;}
article > * + * {margin: 0.75em 0 0 0;}
pre {color: white;  padding: 1em; }
article {padding: 10px; margin: 0;}
details code {font-size: 1.1em;}</style>
<script setup></script>