import { mechanism } from "@/lib/site";

/**
 * Nuci's mechanism — understand, guide, then resolve or escalate. The third
 * beat is the differentiator, so it is the only one that carries the fork.
 */
export function MechanismStrip() {
  return (
    <ol className="stagger grid gap-px lg:grid-cols-3">
      {mechanism.map((beat, index) => (
        <li
          key={beat.step}
          className={`border-t border-white/15 pt-8 ${
            index > 0 ? "mt-12 lg:mt-0" : ""
          } lg:pr-10`}
        >
          <p className="eyebrow text-iliac-cyan">{beat.step}</p>
          <h3 className="mt-5 font-jakarta text-h2 font-semibold text-white">
            {beat.name}
          </h3>
          <p className="mt-4 max-w-[52ch] text-body text-white/70">
            {beat.body}
          </p>

          {index === mechanism.length - 1 && (
            <div className="relative mt-8 pl-10">
              {/* The fork itself: one line in, two ways out. */}
              <span
                aria-hidden="true"
                className="absolute bottom-3 left-0 top-3 w-px bg-iliac-cyan"
              />
              <ul className="space-y-5">
                {["Resolve", "Escalate"].map((outcome) => (
                  <li key={outcome} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-10 top-1/2 h-px w-10 bg-iliac-cyan"
                    />
                    <span className="eyebrow text-white">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
