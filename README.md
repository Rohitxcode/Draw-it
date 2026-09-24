# 🎨 Draw It

> A real-time collaborative whiteboard built with **Next.js 16**, **TypeScript**, **tldraw**, and **Bun**.

Draw It lets multiple users join the same canvas through a shared link and collaborate on an infinite whiteboard in real time. Inspired by tools like Excalidraw Live, it focuses on a clean drawing experience with instant room creation and multiplayer synchronization.

---
> [!IMPORTANT]
> ### ⚠️ Production Deployment Note (tldraw Licensing)
>
> This project was originally built using **tldraw** for its excellent whiteboard experience and real-time collaboration. However, **tldraw now requires a commercial/production license for deploying collaborative applications on platforms like Vercel**.
>
> If you're building a similar collaborative whiteboard for learning or personal projects, consider using **Excalidraw** instead. Excalidraw is open source, production-friendly for many use cases, and supports real-time collaboration through **Yjs + WebRTC** (or other Yjs providers) without the same production licensing restriction.
>
> **Recommended alternative stack:**
>
> - 🎨 **Excalidraw** — Whiteboard engine
> - 🔄 **Yjs** — CRDT-based real-time synchronization
> - 🌐 **y-webrtc** — Peer-to-peer collaboration
> - ⚡ **Next.js + TypeScript** — Application framework
>
> The overall architecture of this project can be recreated with Excalidraw while remaining easier to deploy for production and portfolio projects.
---


## ✨ Features

* 🎨 Infinite whiteboard powered by **tldraw**
* 👥 Real-time multiplayer collaboration
* 🔗 One-click room creation with shareable links
* 🖊️ Freehand drawing, shapes, arrows, text, and sticky notes
* ⚡ Instant synchronization across connected users
* 🌙 Responsive full-screen canvas with system theme support
* 📋 Copy Share Link button for quick collaboration

---

## 🛠️ Tech Stack

| Technology          | Purpose                              |
| ------------------- | ------------------------------------ |
| **Next.js 16**      | React framework using the App Router |
| **TypeScript**      | Type-safe development                |
| **tldraw**          | Whiteboard and drawing engine        |
| **@tldraw/sync**    | Real-time collaboration layer        |
| **Tailwind CSS v4** | Styling                              |
| **Bun**             | Package manager and runtime          |

---

## 📁 Project Structure

```text
draw-it/
├── app/
│   ├── page.tsx               # Application entry page
│   ├── layout.tsx             # Root layout
│   ├── loading.tsx            # Loading screen
│   ├── globals.css            # Global styles
│   └── TldrawCanvas.tsx       # Collaborative whiteboard component
│
├── public/                    # Static assets
├── package.json
├── bun.lock
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git git clone https://github.com/Rohitxcode/Draw-it.git
cd draw-it
```

### 2. Install dependencies

Using **Bun** (recommended):

```bash
bun install
```

Or using **npm**:

```bash
npm install
```

### 3. Start the development server

```bash
bun run dev
```

Open your browser at:

```text
http://localhost:3000
```

---

## 🤝 How Multiplayer Works

1. Open the application.
2. A unique room ID is generated automatically and stored in the URL hash.
3. Click **Copy Share Link**.
4. Send the copied link to another user.
5. Both users join the same collaborative whiteboard and can draw simultaneously.

---

## 💻 Available Scripts

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run linting
bun run lint
```

---

## 📌 Current Functionality

* [x] Infinite collaborative canvas
* [x] Room creation through URL hash
* [x] Shareable collaboration link
* [x] Live synchronized drawing
* [x] Responsive full-screen interface

---

## 🚧 Planned Features

* 🎙️ Voice chat using WebRTC
* 💬 Real-time chat panel
* 👤 User presence and avatars
* 🔒 Private rooms with authentication
* 💾 Save whiteboards to a database
* 📁 Export drawings as PNG, SVG, and JSON
* 🕘 Whiteboard history and versioning

---

## 🎯 Learning Goals

This project is part of my journey to learn **Next.js by building real-world applications** instead of following tutorials. It explores:

* Next.js App Router architecture
* Real-time collaboration concepts
* Multiplayer synchronization
* URL-based room management
* Component-driven UI design
* TypeScript in production applications

---


---

## 👨‍💻 Author

**Rohit Kumar**

Computer Science Engineering Graduate (2026)

Passionate about Full-Stack Development, System Design, and building real-time web applications with Next.js and TypeScript.
