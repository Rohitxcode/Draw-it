"use client";

import { useEffect, useMemo } from "react";
import { Tldraw } from "tldraw";
import { useSyncDemo } from "@tldraw/sync";
import "tldraw/tldraw.css";

export default function TldrawCanvas() {

  const roomId = useMemo(() => {
    if (typeof window === "undefined") return "loading-room";

    let room = window.location.hash.replace("#", "");

    if (!room) {
      room = `rohit-draw-${crypto.randomUUID().slice(0, 8)}`;
    }

    return room;
  }, []);


  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.location.hash.replace("#", "") !== roomId) {
      window.location.hash = roomId;
    }
  }, [roomId]);

  const store = useSyncDemo({ roomId });

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("Share this link with your friend!");
  };

  return (
    <div className="relative h-screen w-screen">
      <button
        onClick={copyLink}
        className="absolute top-4 left-4 z-50 rounded-lg bg-black px-4 py-2 text-white shadow-lg hover:bg-gray-800"
      >
        🔗 Copy Share Link
      </button>

      <Tldraw store={store} autoFocus />
    </div>
  );
}