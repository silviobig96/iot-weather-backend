# iot-weather-backend

Cloud-based IoT Weather Station backend built with **NestJS** and **MongoDB**.

This service receives environmental data from simulated or real **ESP32/ESP8266** devices via REST API, stores it in MongoDB, and exposes endpoints for data visualization and analytics. It is designed to work both with **Wokwi** simulations and physical hardware.

---

## Features

- 🌡️ Receive temperature, humidity, and pressure readings from IoT devices
- 🌐 REST API for sensor data ingestion
- 📊 Endpoints to query latest readings and historical data
- 🗄️ MongoDB persistence with Mongoose
- ⚙️ Modular NestJS architecture (readings, devices, etc.)
- 🧪 Ready to extend with authentication, WebSockets, and more

---

## Tech Stack

- **Runtime:** Node.js 22
- **Backend Framework:** NestJS
- **Database:** MongoDB
- **ORM/ODM:** Mongoose
- **Language:** TypeScript

---

## Architecture Overview

The backend exposes an API that IoT devices (ESP32/ESP8266) can call via HTTP:

```text
[ESP32 / ESP8266 / Wokwi] --> [NestJS API] --> [MongoDB]
                                       \
                                        --> [React UI / Dashboards]
```
