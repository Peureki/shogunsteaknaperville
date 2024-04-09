<template>
    <div class="hours-container">
        <h5>Hours</h5>
        <ul class="hours">
            <li><p>Monday</p><p>Closed</p></li>
            <li><p>Tuesday</p><p>Closed</p></li>
            <li><p>Wednesday</p><p>1-3PM, 4-30:9PM</p></li>
            <li><p>Thursday</p><p>1-3PM, 4:30-9PM</p></li>
            <li><p>Friday</p><p>1-3PM, 4:30-9PM</p></li>
            <li><p>Saturday</p><p>1-9PM</p></li>
            <li><p>Sunday</p><p>4-8:30PM</p></li>
        </ul>
    </div>
</template>

<style scoped>
ul{
    padding: 0;
    margin: 0;
}
.hours li{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: var(--gap-grid-column);
    grid-template-areas: 
        'day day time time'
    ;
}
.hours li > p:first-child{
    grid-area: day;
}
.hours li > p:last-child{
    grid-area: time;
}
@media screen and (max-width: 768px){
    .hours li{
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 10px;
        grid-template-areas: 
            'day day time time time time'
        ;
    }
}
</style>