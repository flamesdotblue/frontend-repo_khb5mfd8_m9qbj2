import { MapPin, Clock, Shield } from "lucide-react";

export default function PlanVisit() {
  return (
    <section id="plan" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">
              Plan your visit
            </h2>
            <p className="mt-3 text-emerald-800/90">
              The sanctuary is protected. Always confirm entry rules and travel
              with authorized guides. Respect wildlife and local communities.
            </p>
          </div>

          <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-100 p-5">
              <div className="flex items-center gap-2 text-emerald-800">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Getting There</span>
              </div>
              <p className="mt-2 text-sm text-emerald-700/80">
                Marayoor lies about 40 km from Munnar, on the Munnar–Udumalpet
                road. Nearby attractions include Chinnar Wildlife Sanctuary and
                Kanthalloor.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 p-5">
              <div className="flex items-center gap-2 text-emerald-800">
                <Clock className="h-5 w-5" />
                <span className="font-medium">Best Time</span>
              </div>
              <p className="mt-2 text-sm text-emerald-700/80">
                October to February offers crisp skies and pleasant weather.
                Early mornings are magical year-round.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 p-5">
              <div className="flex items-center gap-2 text-emerald-800">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Guidelines</span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-emerald-700/80">
                <li>No plucking or damaging trees — sandalwood is protected.</li>
                <li>Stick to marked trails; follow guide instructions.</li>
                <li>Carry water; avoid littering and plastics.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-100 p-5">
              <div className="flex items-center gap-2 text-emerald-800">
                <span className="font-medium">Contacts</span>
              </div>
              <p className="mt-2 text-sm text-emerald-700/80">
                For the latest permits and guided tours, contact local tourism
                offices in Munnar or the Forest Department help desk in Marayoor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
