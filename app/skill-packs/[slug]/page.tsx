import { notFound } from "next/navigation";
import Image from "next/image";
import { skillPackDetails } from "@/content/skill-pack-details";
import Button from "@/components/ui/Button";
import PackTabs from "@/components/ui/PackTabs";

export function generateStaticParams() {
  return skillPackDetails.map((pack) => ({ slug: pack.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const pack = skillPackDetails.find((p) => p.slug === slug);
    if (!pack) return {};
    return {
      title: `${pack.name} | Creation Skills`,
      description: pack.description,
    };
  });
}

export default async function SkillPackDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pack = skillPackDetails.find((p) => p.slug === slug);
  if (!pack) notFound();

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="spd-panel">
          <div className="spd-panel__grid">
            <div className="spd-block">
              <h3 className="spd-block__title">What this pack enables</h3>
              <p className="spd-block__text">{pack.overview.enables}</p>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Best for</h3>
              <p className="spd-block__text">{pack.overview.bestFor}</p>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Ecosystem examples</h3>
              <div className="spd-chips">
                {pack.ecosystem.map((e) => (
                  <span key={e} className="spd-chip">{e}</span>
                ))}
              </div>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Client outcome</h3>
              <p className="spd-block__text">{pack.overview.clientOutcome}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "definition",
      label: "Pack Definition",
      content: (
        <div className="spd-panel">
          <p className="spd-panel__intro">What a Media Skill Pack defines.</p>
          <div className="spd-def-grid">
            <div className="spd-def">
              <span className="spd-def__label">Skill action</span>
              <p className="spd-def__value">{pack.definition.action}</p>
            </div>
            <div className="spd-def">
              <span className="spd-def__label">Approved tools and models</span>
              <p className="spd-def__value">{pack.definition.tools}</p>
            </div>
            <div className="spd-def">
              <span className="spd-def__label">Allowed assets</span>
              <p className="spd-def__value">{pack.definition.allowedAssets}</p>
            </div>
            <div className="spd-def">
              <span className="spd-def__label">Restricted assets</span>
              <p className="spd-def__value">{pack.definition.restrictedAssets}</p>
            </div>
            <div className="spd-def">
              <span className="spd-def__label">Brand Profile rules</span>
              <p className="spd-def__value">{pack.definition.brandRules}</p>
            </div>
            <div className="spd-def">
              <span className="spd-def__label">Rights &amp; NILP&reg; rules</span>
              <p className="spd-def__value">{pack.definition.rightsRules}</p>
            </div>
            <div className="spd-def">
              <span className="spd-def__label">Output rules</span>
              <p className="spd-def__value">{pack.definition.outputRules}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "inputs",
      label: "Inputs & Assets",
      content: (
        <div className="spd-panel">
          <div className="spd-panel__grid">
            <div className="spd-block">
              <h3 className="spd-block__title">Source assets</h3>
              <ul className="spd-list">
                {pack.inputs.sourceAssets.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Reference materials</h3>
              <ul className="spd-list">
                {pack.inputs.referenceMaterials.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Required metadata</h3>
              <ul className="spd-list">
                {pack.inputs.requiredMetadata.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Asset access level</h3>
              <p className="spd-block__text">{pack.inputs.accessLevel}</p>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Destination systems</h3>
              <ul className="spd-list">
                {pack.inputs.destinations.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "rules",
      label: "Rules & Approvals",
      content: (
        <div className="spd-panel">
          <div className="spd-panel__grid">
            <div className="spd-block">
              <h3 className="spd-block__title">Human approval gates</h3>
              <ul className="spd-list spd-list--numbered">
                {pack.rules.approvalGates.map((g, i) => <li key={i}>{g}</li>)}
              </ul>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Brand review</h3>
              <p className="spd-block__text">{pack.rules.brandReview}</p>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Rights review</h3>
              <p className="spd-block__text">{pack.rules.rightsReview}</p>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Escalation path</h3>
              <p className="spd-block__text">{pack.rules.escalation}</p>
            </div>
            <div className="spd-block">
              <h3 className="spd-block__title">Blocked use cases</h3>
              <ul className="spd-list spd-list--blocked">
                {pack.rules.blocked.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "evidence",
      label: "Evidence Returned",
      content: (
        <div className="spd-panel">
          <p className="spd-panel__intro">Evidence captured and returned by this Skill Pack at every execution.</p>
          <div className="spd-evidence-grid">
            {pack.evidence.map((item, i) => (
              <div key={i} className="spd-evidence-item">
                <span className="spd-evidence-item__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="spd-evidence-item__text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "examples",
      label: "Examples",
      content: (
        <div className="spd-panel">
          <p className="spd-panel__intro">Sample scenarios showing how this pack operates in production.</p>
          <div className="spd-examples">
            {pack.examples.map((ex, i) => (
              <div key={i} className="spd-example">
                <div className="spd-example__header">
                  <span className="spd-example__num">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="spd-example__name">{ex.name}</h4>
                </div>
                <div className="spd-example__fields">
                  <div className="spd-example__field">
                    <span className="spd-example__label">Input</span>
                    <span className="spd-example__value">{ex.input}</span>
                  </div>
                  <div className="spd-example__field">
                    <span className="spd-example__label">Output</span>
                    <span className="spd-example__value">{ex.output}</span>
                  </div>
                  <div className="spd-example__field">
                    <span className="spd-example__label">Checks</span>
                    <span className="spd-example__value">{ex.checks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "cr-check",
      label: "Creation Rights Check",
      content: (
        <div className="spd-panel">
          <p className="spd-panel__intro">Before release, Creation Rights checks:</p>
          <div className="spd-cr-grid">
            {pack.crChecks.map((check, i) => (
              <div key={i} className="spd-cr-item">
                <span className="spd-cr-item__icon" />
                <span className="spd-cr-item__text">{check}</span>
              </div>
            ))}
          </div>
          <div className="spd-cr-footer">
            <p>C/Skills defines the pack. Creation Rights controls the proof.</p>
          </div>
        </div>
      ),
    },
    {
      id: "client",
      label: "Client Library",
      content: (
        <div className="spd-panel">
          <div className="spd-client-preview">
            <div className="spd-client-preview__badge">Sample Preview</div>
            <h3 className="spd-client-preview__title">Public view shows sample pack structure only.</h3>
            <p className="spd-client-preview__desc">Client teams access the full operating files, approved tool lists, prompt templates, asset access rules, Brand Profile references, Rights &amp; NILP&reg; rules, approval paths, metadata schemas, evidence checklists, example runs, rollout notes, and Creation Rights handoff rules for this pack.</p>
            <div className="spd-client-preview__items">
              <span>Full operating file</span>
              <span>Approved tools and model list</span>
              <span>Prompt templates</span>
              <span>Asset access rules</span>
              <span>Brand Profile references</span>
              <span>Rights &amp; NILP&reg; rules</span>
              <span>Approval path</span>
              <span>Metadata schema</span>
              <span>Evidence checklist</span>
              <span>Example runs</span>
              <span>Rollout notes</span>
              <span>Creation Rights handoff rules</span>
            </div>
            <div style={{ marginTop: "var(--space-32)" }}>
              <Button href="/contact">Request Client Library Preview</Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="spd-header">
        <div className="spd-header__container">
          <div className="spd-header__content">
            <div className="spd-header__meta">
              <span className="spd-header__label">Sample Pack</span>
            </div>
            <h1 className="spd-header__title">{pack.name}</h1>
            <p className="spd-header__desc">{pack.description}</p>
            <div className="spd-header__badges">
              {pack.badges.map((badge) => (
                <span key={badge} className="spd-header__badge">{badge}</span>
              ))}
            </div>
            <div className="spd-header__ecosystem">
              <span className="spd-header__eco-label">Ecosystem examples:</span>
              <div className="spd-header__eco-chips">
                {pack.ecosystem.map((e) => (
                  <span key={e} className="spd-chip">{e}</span>
                ))}
              </div>
            </div>
            <div className="spd-header__ctas">
              <Button href="/book-review">Book a C/Skills Review</Button>
              <Button href="/contact" variant="secondary">Request Client Library Preview</Button>
            </div>
          </div>
          <div className="spd-header__image">
            <Image
              src={pack.image}
              alt={pack.name}
              width={560}
              height={380}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="spd-main">
        <div className="spd-main__container">
          <PackTabs tabs={tabs} />
        </div>
      </section>
    </>
  );
}
