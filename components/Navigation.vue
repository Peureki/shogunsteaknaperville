<template>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/menu">Menu</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li>
                    <NuxtLink to="/">
                        <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1667 18.375H15.125L16.7084 12.0417H11.1667V8.875C11.1667 7.24416 11.1667 5.70833 14.3334 5.70833H16.7084V0.388331C16.1922 0.320248 14.2431 0.166664 12.1848 0.166664C7.88604 0.166664 4.83337 2.79025 4.83337 7.60833V12.0417H0.083374V18.375H4.83337V31.8333H11.1667V18.375Z" fill="white"/>
                        </svg>
                    </NuxtLink>
                </li>
            </ul>
            
            <button class="cta">
                <svg class="cta-circle" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="50" fill="#DB0505"/>
                </svg>
                <div class="cta-phone-container">
                    <NuxtLink to="/">Call to Reserve</NuxtLink> 
                    <NuxtLink to="/" class="phone">630-416-0871</NuxtLink>
                </div>
                
            </button>
        </nav>
    </header>
</template>

<style scoped>
header {
    margin-inline: var(--margin-page);
    margin-top: 50px; 
    margin-bottom: 50px;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    gap: 50px;
}
li {
    font-family: var(--font-family-archivo);
    font-size: var(--font-size-nav);
    font-weight: var(--font-weight-archivo);
}
.cta-phone-container{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.cta-phone-container > .phone {
    font-size: var(--font-size-p);
}


</style>