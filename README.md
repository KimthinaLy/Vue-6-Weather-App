# Weather App

A weather forecast app built with Vue 3 and TypeScript — created to practice async patterns by building something real.

---

## About

Weather App lets you search any city and instantly see current weather conditions and a 7-day forecast powered by the Open-Meteo API (free, no API key required).

**Why I built this:** I'm learning Vue by doing — not just reading docs. This project covers async composables, sequential API fetching, TypeScript generics, loading/error/success state handling, and component architecture in a practical context.

---

## Tech Stack

| Tool           | Version |
| -------------- | ------- |
| Vue            | 3       |
| TypeScript     | 5       |
| Vite           | 5       |
| Open-Meteo API | free    |

---

## Setup

**Requirements:**

- Node.js 18+
- VS Code with [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension

**Install and run:**

```bash
npm install
npm run dev
```

---

## Features

- Search any city by name
- Display current temperature and weather condition
- 7-day forecast with daily high and low temperatures
- Loading state while fetching
- Error handling for invalid cities and network failures
- Reusable `useFetch<T>()` composable for any future project
