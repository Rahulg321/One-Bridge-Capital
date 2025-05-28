import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Skeleton */}
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>

            {/* Navigation Skeleton */}
            <nav className="hidden md:flex space-x-8">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-18" />
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-24" />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="relative">
        {/* Background Image Skeleton */}
        <Skeleton className="h-[600px] w-full" />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 bg-slate-900/60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white space-y-6">
              {/* Main Headline Skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-12 w-80 bg-white/20" />
                <Skeleton className="h-12 w-32 bg-white/20" />
              </div>

              {/* Subtitle Skeleton */}
              <div className="space-y-3">
                <Skeleton className="h-4 w-full bg-white/20" />
                <Skeleton className="h-4 w-full bg-white/20" />
                <Skeleton className="h-4 w-3/4 bg-white/20" />
                <Skeleton className="h-4 w-1/2 bg-white/20" />
              </div>

              {/* CTA Link Skeleton */}
              <Skeleton className="h-6 w-48 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Services Section Skeleton */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-4 w-96 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </section>

        {/* About Section Skeleton */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>
          <Skeleton className="h-80 w-full" />
        </section>

        {/* Team Section Skeleton */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Skeleton className="h-8 w-48 mx-auto" />
            <Skeleton className="h-4 w-80 mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center space-y-4">
                <Skeleton className="h-32 w-32 rounded-full mx-auto" />
                <Skeleton className="h-5 w-24 mx-auto" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Skeleton */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Skeleton className="h-4 w-80" />
            <div className="flex space-x-4">
              <Skeleton className="h-6 w-6 rounded" />
              <Skeleton className="h-6 w-6 rounded" />
            </div>
          </div>
        </div>
      </footer>

      {/* Loading Indicator */}
      <div className="fixed bottom-8 right-8">
        <div className="flex items-center space-x-2 bg-background border rounded-lg px-4 py-2 shadow-lg">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
          <span className="text-sm text-muted-foreground">Loading...</span>
        </div>
      </div>
    </div>
  );
}
