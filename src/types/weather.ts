interface CurrentWeather {
  temperature_2m: number
  weathercode: number
}

interface DailyForcast {
  time: string[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  weathercode: number[]
}

interface WeatherResponse {
  timezone: string
  current: CurrentWeather
  daily: DailyForcast
}
