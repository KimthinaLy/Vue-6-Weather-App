<script setup lang="ts">
import type { CurrentWeatherData } from '@/types/weather';
import { getWeatherCondition } from '@/utils/weatherCodeMap'

const props = defineProps<{ data: CurrentWeatherData }>()


</script>
<template>
    <div class="current-weather">
        <h2>Current Weather</h2>
        <p>Temperature: {{ props.data.temperature_2m }}°C</p>
        <p>Condition: {{ getWeatherCondition(props.data.weathercode) }}</p>
    </div>
</template>