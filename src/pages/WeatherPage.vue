<script setup lang="ts">
import CurrentWeather from '@/components/CurrentWeather.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';



</script>
<template>
    <div class="weather-page">
        <h1>Weather Page</h1>
        <p>This is where the weather information will be displayed.</p>
        <CurrentWeather />
        <WeatherForecast />
    </div>
</template>