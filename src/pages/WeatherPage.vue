<script setup lang="ts">
import { ref } from 'vue';
import CurrentWeather from '@/components/CurrentWeather.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';
import type { GeocodingResponse } from '@/types/geocode';
import type { WeatherResponse } from '@/types/weather';
import { useFetch } from '@/composables/useFetch';

const weatherData = ref<WeatherResponse | null>(null)
const weatherLoading = ref(false)
const weatherError = ref<string | null>(null)

const inputLocation = ref('')

async function onSearch() {
    weatherLoading.value = true
    try {
        const geo = useFetch<GeocodingResponse>(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(inputLocation.value)}&count=1`)
        await geo.fetchData()
        if (geo.error.value) {
            weatherError.value = geo.error.value
            return
        }

        const geoData = geo.data.value
        const firstResult = geoData?.results?.[0]
        if (!firstResult) {
            weatherError.value = 'City not found'
            return
        }

        const { latitude, longitude } = firstResult

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia/Bangkok`
        const weather = useFetch<WeatherResponse>(weatherUrl)
        await weather.fetchData()

        if (weather.error.value) {
            weatherError.value = weather.error.value
            return
        } else {
            weatherData.value = weather.data.value
        }
    } finally {
        weatherLoading.value = false
    }
}
</script>
<template>
    <div class="weather-page">
        <h1>Weather Page</h1>
        <p>This is where the weather information will be displayed.</p>
        <input v-model="inputLocation" type="text" placeholder="Enter a location..." />
        <button @click="onSearch" type="button">Get Weather</button>
        <div v-if="weatherLoading">Loading...</div>
        <div v-else-if="weatherError" class="error">{{ weatherError }}</div>
        <div v-else-if="weatherData">
            <CurrentWeather :data="weatherData.current" />
            <WeatherForecast :data="weatherData.daily" />
        </div>
        <div v-else>
            <p>Enter a location to see the weather information.</p>
        </div>

    </div>
</template>