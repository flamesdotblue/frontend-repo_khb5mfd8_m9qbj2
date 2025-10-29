import { Shield, Info, Leaf } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">
              About the Sandalwood Sanctuary
            </h2>
            <p className="mt-4 text-emerald-800/90">
              Marayoor hosts one of the last remaining natural sandalwood forests
              in India. The region is famed for its unique microclimate, ancient
              dolmens (Muniyaras), sugarcane fields, and the exquisite aroma of
              Santalum album trees swaying across the hills.
            </p>
            <p className="mt-4 text-emerald-800/90">
              The forest is carefully protected, and guided access ensures the
              ecosystem remains pristine. Visitors can learn about sustainable
              harvesting, conservation, and the cultural heritage that surrounds
              sandalwood in Kerala.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-100 p-4">
                <div className="flex items-center gap-2 text-emerald-800">
                  <Leaf className="h-5 w-5" />
                  <span className="font-medium">Natural Heritage</span>
                </div>
                <p className="mt-2 text-sm text-emerald-700/80">
                  Home to native sandalwood groves, shola forests, and rich
                  biodiversity of the Western Ghats.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 p-4">
                <div className="flex items-center gap-2 text-emerald-800">
                  <Shield className="h-5 w-5" />
                  <span className="font-medium">Protected & Guided</span>
                </div>
                <p className="mt-2 text-sm text-emerald-700/80">
                  Entry is regulated. Always follow forest rules and travel with
                  authorized guides.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1472141521881-95bbf4f0a5c8?q=80&w=2070&auto=format&fit=crop"
              alt="Morning light across forested hills"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/30 via-transparent to-transparent" />
            <div className="absolute bottom-3 right-3 rounded-md bg-white/80 px-3 py-1 text-xs text-emerald-900 backdrop-blur">
              Western Ghats landscape
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
