"use client";

import { motion } from "framer-motion";
import { caseStudies, type Metric } from "@/lib/caseStudies";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

function MetricRow({ metric }: { metric: Metric }) {
  return (
    <div className="flex flex-col gap-2 border-t hairline py-4 first:border-t-0 first:pt-0">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm text-text-dim">{metric.label}</span>
        <span
          className={`text-sm ${metric.positive ? "text-accent-2" : "text-text-dim"}`}
        >
          {metric.change}
        </span>
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-text-dim/70 text-base line-through decoration-line">
          {metric.before}
        </span>
        <span className="text-text-dim">→</span>
        <span className="font-display text-2xl text-text">{metric.after}</span>
      </div>
      {metric.note && (
        <p className="text-sm text-text-dim/80">{metric.note}</p>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-t hairline py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-4 text-sm text-text-dim">Some of the work I&rsquo;ve done</div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl font-display text-3xl leading-snug text-text md:text-4xl"
        >
          Case studies — proof the SEO and web strategy work actually moves numbers.
        </motion.h2>

        <div className="mt-16 flex flex-col gap-16">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="rounded-2xl border hairline bg-surface p-8 md:p-12"
            >
              <div className="flex flex-col gap-2 border-b hairline pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl text-text md:text-3xl">
                    {study.company}
                  </h3>
                  <p className="mt-1 text-sm text-accent-2">{study.role}</p>
                </div>
                <div className="text-sm text-text-dim">
                  <span className="line-through decoration-line">{study.before}</span>
                  <span className="mx-2">vs</span>
                  <span className="text-text">{study.after}</span>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-text-dim">{study.summary}</p>

              <div className="mt-10 rounded-xl border hairline bg-surface-2 p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-lg text-text">What we rebuilt</h4>
                  <span className="rounded-full border hairline px-3 py-1 text-xs text-accent-2">
                    {study.build.platform}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-text-dim">{study.build.summary}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {study.build.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-text-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {study.build.images ? (
                  <div className="mt-6">
                    <BeforeAfterSlider
                      before={study.build.images.before}
                      after={study.build.images.after}
                    />
                    <p className="mt-2 text-xs text-text-dim/70">
                      Drag to compare the previous site against the rebuild.
                    </p>
                  </div>
                ) : (
                  <p className="mt-5 text-xs text-text-dim/70">
                    Before/after screenshots of the redesign coming soon.
                  </p>
                )}
              </div>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                {study.metricGroups.map((group) => (
                  <div key={group.label}>
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-display text-lg text-text">{group.label}</h4>
                      <span className="text-xs text-text-dim">{group.source}</span>
                    </div>
                    <div className="mt-4">
                      {group.metrics.map((metric) => (
                        <MetricRow key={metric.label} metric={metric} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
