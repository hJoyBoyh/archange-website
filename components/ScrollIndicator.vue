<template>
    <div class='mouse-container'>
       
    <div class="mouse-scroll hidden">
       
    </div>
    <div class="arrow-scroll">
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>
        </div>
        <p>scroll</p>
</div>
</template>
<style scoped>
.mouse-container {
    display:flex;
    margin:0;
    justify-content:space-evenly;
    align-items: center;
    flex-direction: column;
   
    height: 20vh;
}
.mouse-scroll{
    width:2.1em;
    height: 4em;
    border: solid 2px white;
    border-radius: 30px;
    position: relative;
}
.mouse-scroll::before{
    content: '';
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    background: #99AAB5;
    position: absolute;
    left:50%;
    transform:translateX(-50%);
    animation: scroll 2.5s infinite;
}

.arrow-scroll{
    position: relative;
    height: 4em;
    
}

.arrow{
    border:solid white;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding:12px;
    position: absolute;
    top:0;
    left:50%;
    transform: translateX(-50%) rotate(45deg);
}

.arrow:nth-child(2){
    animation:
    arrow1 1.5s
    ease-in-out infinite
}
.arrow:nth-child(3){
    animation:
    arrow2 1.5s
    ease-in-out infinite
}
@keyframes scroll{
    0%{
        bottom:80%;
        opacity: 1;
    }
    100%{
        bottom:20%;
        opacity: 0;
    }
}
@keyframes arrow1{
    100%{
        
        opacity: 0;
        top:100%
    }
}
@keyframes arrow2{
    100%{
        
        opacity: 0;
        top:50%
    }
}
</style>