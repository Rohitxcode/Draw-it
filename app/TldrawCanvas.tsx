// app/TldrawCanvas.tsx
"use client";

import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

export default function TldrawCanvas() {
  return (
    <div className="fixed inset-0 bg-transparent">
      <Tldraw colorScheme="system" />
    </div>
  );
}