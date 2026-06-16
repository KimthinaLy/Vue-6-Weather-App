<script setup lang="ts">
import type { DailyForecast } from '@/types/weather'
import { getWeatherCondition } from '@/utils/weatherCodeMap'

const props = defineProps<{ data: DailyForecast }>()

</script>
<template>

    <div class="weather-forecast">
        <h2>7-Day Forecast</h2>
        <div class="forecast-grid">
            <div v-for="(day, index) in data.time" :key="index" class="forecast-day">
                <p>{{ new Date(day).toLocaleDateString() }}</p>
                <p>Max: {{ data.temperature_2m_max[index] }}°C</p>
                <p>Min: {{ data.temperature_2m_min[index] }}°C</p>
                <p>Condition: {{ getWeatherCondition(data.weathercode[index]) }}</p>
            </div>
        </div>
    </div>
</template>