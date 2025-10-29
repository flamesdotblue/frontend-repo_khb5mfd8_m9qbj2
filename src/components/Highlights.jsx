import { Camera, MapPin, Star, Mountain } from "lucide-react";

const items = [
  {
    icon: Star,
    title: "Sandalwood Valley",
    desc:
      "Walk among naturally growing sandalwood trees and learn about their ecology and conservation.",
  },
  {
    icon: Camera,
    title: "Muniyara Dolmens",
    desc:
      "Ancient stone burial chambers scattered across the hills — a glimpse into prehistoric culture.",
  },
  {
    icon: Mountain,
    title: "Shola & Grasslands",
    desc:
      "Classic Western Ghats mosaic of evergreen sholas nestled amidst rolling grasslands.",
  },
  {
    icon: MapPin,
    title: "Sugarcane & Trails",
    desc:
      "Picturesque farms, sandalwood depot visits, and scenic routes linking Munnar and Chinnar.",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-emerald-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">
          Highlights & Experiences
        </h2>
        <p className="mt-3 max-w-2xl text-emerald-800/90">
          From fragrant forest walks to archaeological wonders, Marayoor is rich
          with stories and landscapes worth exploring.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-emerald-700/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
