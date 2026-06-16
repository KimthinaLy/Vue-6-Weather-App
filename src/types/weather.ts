export interface CurrentWeatherData {
  temperature_2m: number
  weathercode: number
}

export interface DailyForecast {
  time: string[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  weathercode: number[]
}

export interface WeatherResponse {
  timezone: string
  current: CurrentWeatherData
  daily: DailyForecast
}
