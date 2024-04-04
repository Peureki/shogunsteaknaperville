<template>
    <div class="combination-container">
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
        <ul class="food-list-container">
            <li v-for="(items, index) in comboItems" :key="index">
                <span class="main-food">{{ items.main }}</span>
                <ul class="combo-item-container">
                    <li v-for="(combo, subIndex) in items.combo" :key="subIndex" class="food-row">
                        <span class="food-container">
                            <span class="combo">And {{ items.combo[subIndex] }}</span>
                            <span v-if="items.sideNote[subIndex]" class="side-note">({{ items.sideNote[subIndex] }})</span>
                        </span>
                        
                        <span class="price">{{ items.price[subIndex] }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    desc: String,
    comboItems: Object,
})

console.log(props.comboItems);

</script>

<style scoped>
.combination-container{
    display: flex;
    flex-direction: column;
    gap: var(--gap-grid-row);
}
.main-food, .price{
    font-weight: bold;
    color: var(--clr-text);
}
.food-list-container{
    display: flex;
    flex-direction: column;
    gap: var(--gap-menu-row);
}

.food-row{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: var(--gap-grid-row);
    grid-column-gap: var(--gap-grid-column);
    grid-template-areas: 
        '. food food food food price'
    ;
}
.food-container{
    display: flex;
    grid-area: food;
    gap: 10px;
}
.price{
    grid-area: price;
}

</style>