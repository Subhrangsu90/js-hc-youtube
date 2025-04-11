# 🚀 Micro Frontend Architecture in Angular

## ✅ What is Micro Frontend Architecture?

**Micro Frontend Architecture** is an architectural style where a large frontend application is divided into smaller, self-contained, and independently deployable units called **micro frontends**.

Each micro frontend is owned by a feature team and is responsible for a specific business functionality. These micro frontends are then integrated into a **main shell (host) application** at runtime using tools like **Webpack Module Federation** or **Single-SPA**.

---

## 📌 Why Micro Frontends in Angular?

- 🧩 **Scalable architecture** for large enterprise apps  
- 👥 **Multiple teams** can work independently on different modules (e.g., authentication, dashboard, analytics)  
- 🔁 Enables **incremental upgrades** of legacy apps  
- 🚀 Supports **independent deployment** and **versioning**

---

## 🧰 Tools & Tech Stack for Angular Micro Frontends

- **@angular-architects/module-federation** – Simplifies Webpack Module Federation for Angular
- **Nx Monorepo** – (Optional) Efficient management of multiple Angular apps/libraries in one repo

---

## 💡 Example Scenario: E-Learning Platform

For example, in an e-learning platform:

- 🛡️ `auth-app` handles login/signup  
- 📚 `course-app` displays course listings  
- ⚙️ `admin-app` is used for managing content  

These micro frontends are loaded into a main container or **shell application** called `shell-app`.

---

## ⚙️ How It Works (Technical Insight)

1. Each micro frontend is built and deployed **separately**
2. The **shell app** loads them dynamically at runtime via **remoteEntry.js**
3. Communication between micro frontends is handled using:
   - Shared services
   - Custom events
   - RxJS or state management libraries

---

## 🏠 What is Host or Shell in Micro Frontends?

A **Host** (or **Shell**) application is the central Angular app that acts as a container or main entry point. It loads and displays multiple remote micro frontends (like authentication, dashboard, etc.) at runtime. It is responsible for:

- Bootstrapping the entire application
- Dynamically loading remote modules (micro frontends)
- Managing global routing, layout, and shared dependencies

The shell app typically imports remote modules using **Webpack Module Federation** and exposes them via routes or components inside the shell.

```ts
// Example from module-federation.config.js in shell
remotes: {
  authApp: 'authApp@http://localhost:4201/remoteEntry.js',
  courseApp: 'courseApp@http://localhost:4202/remoteEntry.js',
}
