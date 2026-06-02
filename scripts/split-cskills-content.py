from pathlib import Path
import re
import unicodedata

ROOT = Path(__file__).resolve().parents[1]
MASTER = ROOT / "docs/master/creation-skills-master.md"
REPORT = ROOT / "docs/master/split-report.md"

text = MASTER.read_text(encoding="utf-8")

def slugify(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = value.replace("®", "")
    value = value.replace("&", "and")
    value = re.sub(r"[^\w\s/-]", "", value)
    value = value.strip().lower()
    value = re.sub(r"[\s_/]+", "-", value)
    value = re.sub(r"-+", "-", value)
    return value.strip("-") or "untitled"

page_map = {
    "Home": "content/pages/core/home.md",
    "What We Do": "content/pages/core/what-we-do.md",
    "Engagements": "content/pages/core/engagements.md",
    "Who We Help": "content/pages/core/who-we-help.md",
    "Method": "content/pages/core/method.md",
    "Thinking": "content/pages/core/resources.md",
    "Resources": "content/pages/core/resources.md",
    "About": "content/pages/core/about.md",
    "Book a C/Skills Review": "content/pages/core/book-review.md",
    "Creation Rights Readiness": "content/pages/core/creation-rights-readiness.md",
    "FAQ": "content/pages/core/faq.md",
    "Contact": "content/pages/core/contact.md",

    "C/Skills Review": "content/pages/engagements/cskills-review.md",
    "Operating Model Design": "content/pages/engagements/operating-model-design.md",
    "Agent Operating Blueprint": "content/pages/engagements/agent-operating-blueprint.md",
    "Governance Blueprint": "content/pages/engagements/governance-blueprint.md",
    "Pilot Transformation": "content/pages/engagements/pilot-transformation.md",
    "Implementation Office": "content/pages/engagements/implementation-office.md",

    "Privacy Notice": "content/pages/utility/privacy.md",
    "Terms of Use": "content/pages/utility/terms.md",
    "Cookie Policy": "content/pages/utility/cookies.md",
    "Accessibility Statement": "content/pages/utility/accessibility.md",
    "404": "content/pages/utility/404.md",
    "Legal Notice / Company Information": "content/pages/utility/legal-notice.md",

    "Sitemap / Index Plan": "content/pages/internal/sitemap-index-plan.md",
    "Final Launch Sitemap": "content/pages/internal/final-launch-sitemap.md",
    "Final Menu Structure": "content/pages/internal/final-menu-structure.md",
    "Final Build Prompt": "content/pages/internal/final-build-prompt.md",
    "Final Build Prompt for Gemini / Claude Code": "content/pages/internal/final-build-prompt.md",
    "Page Cutdown Plan": "content/pages/internal/page-cutdown-plan.md",
    "Master Document Assembly Guide": "content/pages/internal/master-document-assembly-guide.md",
    "Master Page Status Index": "content/pages/internal/master-page-status-index.md",
    "Final QA Checklist": "content/pages/internal/final-qa-checklist.md",
    "Content Freeze Build Handoff": "content/pages/internal/content-freeze-build-handoff.md",
    "Content Freeze and Build Handoff": "content/pages/internal/content-freeze-build-handoff.md",
    "Future Publishing Queue": "content/pages/internal/future-publishing-queue.md",
    "SEO Metadata and URL Map": "content/pages/internal/seo-metadata-url-map.md",
    "Form Routing and Intake Plan": "content/pages/internal/form-routing-intake-plan.md",
    "Component and Template Map": "content/pages/internal/component-template-map.md",
    "Visual System and Art Direction": "content/pages/internal/visual-system-art-direction.md",
    "Copy Style Guide and Messaging Rules": "content/pages/internal/copy-style-guide.md",
    "Build File Structure and Route Map": "content/pages/internal/build-file-structure-route-map.md",
    "Analytics and Measurement Plan": "content/pages/internal/analytics-measurement-plan.md",
    "Legal Review Tracker and Counsel Handoff": "content/pages/internal/legal-review-tracker.md",
    "Launch Readiness, Staging, and Deployment Plan": "content/pages/internal/launch-readiness-staging-deployment-plan.md",
    "Content Maintenance and Governance Plan": "content/pages/internal/content-maintenance-governance-plan.md",
}

pattern = re.compile(r"^# (?!\*\*)(.+?)\s*$", re.MULTILINE)
matches = list(pattern.finditer(text))

written = []
unmapped = []

for index, match in enumerate(matches):
    title = match.group(1).strip()
    start = match.start()
    end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
    chunk = text[start:end].strip() + "\n"

    rel = page_map.get(title)
    if not rel:
        rel = f"content/pages/unmapped/{slugify(title)}.md"
        unmapped.append((title, rel))

    out = ROOT / rel
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(chunk, encoding="utf-8")
    written.append((title, rel))

report = [
    "# Creation Skills Markdown Split Report",
    "",
    f"Total top-level pages found: {len(matches)}",
    f"Total files written: {len(written)}",
    f"Unmapped files written: {len(unmapped)}",
    "",
    "## Written Files",
    "",
]

for title, rel in written:
    report.append(f"- {title} → `{rel}`")

if unmapped:
    report += ["", "## Unmapped Headings", ""]
    for title, rel in unmapped:
        report.append(f"- {title} → `{rel}`")

REPORT.write_text("\n".join(report) + "\n", encoding="utf-8")

print(f"Wrote {len(written)} page files.")
print(f"Unmapped: {len(unmapped)}")
print(f"Report: {REPORT.relative_to(ROOT)}")
