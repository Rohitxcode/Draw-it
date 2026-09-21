export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-zinc-700 border-t-green-500" />

      <h1 className="mt-6 text-4xl font-bold">Draw It</h1>

      <p className="mt-2 text-zinc-400">
        Preparing your infinite canvas...
      </p>
    </main>
  );
}