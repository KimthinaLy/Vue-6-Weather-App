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
      } else {
        error.value = `Error: ${response.status} ${response.statusText}`
      }
    } catch (err) {
      //only come to fetch, if there's a network failure — like no internet, or the URL is completely unreachable.
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { data, loading, error }
}
