import { MapPin, Camera, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1974&auto=format&fit=crop"
          alt="Sandalwood forest canopy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Leaf className="h-4 w-4 text-emerald-200" />
            <span className="text-emerald-100">Kerala • Western Ghats</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
            Marayoor Sandalwood Forest
          </h1>
          <p className="mt-4 text-lg text-emerald-100">
            Step into India’s only natural sandalwood valley. Wander through
            fragrant groves, ancient dolmens, and rolling hills where mist
            meets the canopy.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#plan"
              className="rounded-lg bg-white px-5 py-3 font-medium text-emerald-900 shadow hover:shadow-md transition"
            >
              Plan your visit
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition"
            >
              <Camera className="h-5 w-5" /> View gallery
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-emerald-100/90">
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Marayoor, Idukki
            </div>
            <div>Open year-round • Best Oct–Feb</div>
          </div>
        </div>
      </div>
    </section>
  );
}
