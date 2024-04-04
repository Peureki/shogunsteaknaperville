<template>
    <div class="menu-container">
        <h3>{{ title }}</h3>
        <p v-if="desc">{{ desc }}</p>
        <ul class="food-list-container">
            <li class="food-row" v-for="(food, index) in items" :key="index">
                <span class="food-container">
                    <span class="name">{{ food[0] }}</span>
                    <span class="side-note" v-if="food[1]"> ({{ food[1] }})</span>
                </span> 
                <span class="price">{{ food[2] }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    desc: String,
    items: Array,
})

</script>

<style scoped>
.menu-container{
    display: flex;
    flex-direction: column;
    gap: var(--gap-grid-row);
}
.food-list-container{
    display: flex;
    flex-direction: column;
    gap: var(--gap-menu-row);
}
.food-row{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: 
        'food food food food food price'
    ;
    grid-column-gap: var(--gap-grid-column);
}
.food-container{
    grid-area: food;
}
.name, .price{
    font-weight: bold;
    color: var(--clr-text);
}
.side-note{
    font-style: italic;
}
.price{
    grid-area: price;
}



</style>