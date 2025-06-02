# 💸 Expense Wallet - Full Stack Mobile Application

A Full Stack Mobile Expense Tracker built using React Native with Expo, Node.js, Clerk, PostgreSQL(Neon), and Redis.

Track your daily expenses, monitor your wallet balance, and manage your finances on the go - securely and in real time.

---

## 🔗 Preview

![Dashboard Preview](/mobile/assets/images/Preview.png) 

---

## 📱 Mobile Frontend

Built with **React Native** and powered by **Expo**, the mobile app provides a seamless and responsive user experience across both iOS and Android.

### 🔧 Tech Stack
- **React Native**: Cross-platform mobile development.
- **Expo**: Simplifies React Native development and deployment.
- **Expo Router**: File-based routing and navigation.
- **@clerk/clerk-expo**: Authentication and user session management.
- **@expo/vector-icons**: Beautiful, consistent icon set.
- **Custom Hooks & Components**: Modular architecture for handling:
  - Transactions
  - Authentication
  - Theming and UI elements

---

## 🧠 Backend API Server

Built with **Node.js** and **Express**, this RESTful API is optimized for performance and scalability using **PostgreSQL** and **Upstash Redis**.

### 🧱 Backend Stack
- **Node.js**: JavaScript runtime.
- **Express.js**: Minimal and flexible backend web framework.
- **PostgreSQL**: Persistent relational database for storing transactions.
- **@neondatabase/serverless**: Serverless Postgres driver for scalable DB access.
- **dotenv**: Secure environment variable management.
- **Upstash Redis**:
  - `@upstash/redis`: Redis client for caching.
  - `@upstash/ratelimit`: Rate limiting to protect endpoints.
- **cron**: Scheduled background tasks (e.g., keep-alive pings).
- **CORS**: Secure cross-origin API access.

---

## 🚀 Features

### 🔥 Core Features

- 📱 **Cross-Platform App**: Built with React Native & Expo  
- 🔐 **Authentication**: Signup & login with Clerk  
- 📩 **Email Verification**: Secure 6-digit code flow before accessing the app  
- 🏠 **5 Screens**: Signup, Login, Verify Email, Home, and Create Transaction  
- 💸 **Expense Tracker**: Add income or expenses and manage financial entries  
- 📊 **Balance Updates**: Live calculation of current balance based on transactions  
- 🗑️ **Delete Transactions**: Remove old entries with a single tap  
- 🔄 **Pull to Refresh**: Classic refresh gesture implemented from scratch  
- 🚪 **Logout Functionality**: Easily switch accounts or sign out  
- 🧰 **Backend with Express**: RESTful API connected to Neon-hosted Postgres  
- ⏱️ **Rate Limiting**: Protect your API using Redis-based limiter  



