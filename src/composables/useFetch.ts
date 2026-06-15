import { ref } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(true)

  async function fetchData() {
    try {
      loading.value = true
      const response = await fetch(url)
      if (response.ok) {
        data.value = await response.json()
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { data, loading, error }
}
