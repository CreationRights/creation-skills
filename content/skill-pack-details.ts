import { cskillsImages } from "./images";

export type SkillPackDetail = {
  slug: string;
  name: string;
  description: string;
  image: string;
  badges: string[];
  ecosystem: string[];
  overview: {
    enables: string;
    bestFor: string;
    clientOutcome: string;
  };
  definition: {
    action: string;
    tools: string;
    allowedAssets: string;
    restrictedAssets: string;
    brandRules: string;
    rightsRules: string;
    outputRules: string;
  };
  inputs: {
    sourceAssets: string[];
    referenceMaterials: string[];
    requiredMetadata: string[];
    accessLevel: string;
    destinations: string[];
  };
  rules: {
    approvalGates: string[];
    brandReview: string;
    rightsReview: string;
    escalation: string;
    blocked: string[];
  };
  evidence: string[];
  examples: {
    name: string;
    input: string;
    output: string;
    checks: string;
  }[];
  crChecks: string[];
};

export const skillPackDetails: SkillPackDetail[] = [
  {
    slug: "ai-video-generation",
    name: "AI Video Generation Skill Pack",
    description: "Defines approved use of video generation tools, source assets, likeness limits, review gates, evidence capture, and Creation Rights release checks.",
    image: cskillsImages.capabilities.productionAgentSkills,
    badges: ["Video", "Model-assisted creation", "Sample Pack", "Client setup available", "Creation Rights ready"],
    ecosystem: ["Runway", "LTX", "fal.ai", "ComfyUI", "Adobe Firefly"],
    overview: {
      enables: "Governed video generation from text prompts, image inputs, or video-to-video transformations using client-approved models. Teams can produce media at scale while maintaining brand compliance, rights protections, and full evidence capture.",
      bestFor: "Enterprise creative teams, production studios, and brand teams producing video content using generative models and needing full governance from brief to release.",
      clientOutcome: "A complete operating file that defines which video models your team can use, what inputs are allowed, what approval gates apply, what evidence is captured, and what Creation Rights checks before release.",
    },
    definition: {
      action: "Generate, edit, or transform video assets using approved generative models within defined brand and rights boundaries.",
      tools: "LTX Video, Runway Gen-3, fal.ai video endpoints, ComfyUI AnimateDiff, Adobe Firefly Motion \u2014 client-approved model list only.",
      allowedAssets: "Source briefs, storyboards, reference frames, brand motion templates, approved audio guides, product photography for video-from-image.",
      restrictedAssets: "Unlicensed reference footage, competitor brand assets, talent imagery without consent, assets from non-approved libraries.",
      brandRules: "All outputs must pass Brand Profile motion check. Tone, pacing, color grading, and visual language must match approved motion guidelines.",
      rightsRules: "NILP\u00AE review required for any output containing recognizable likeness, voice, or persona elements. Consent verification before render.",
      outputRules: "Minimum 1080p resolution. Metadata must include model ID, prompt hash, generation parameters, and timestamp. Maximum 60s per generation without escalation.",
    },
    inputs: {
      sourceAssets: ["Approved storyboards", "Reference frames from brand library", "Product photography", "Audio reference tracks", "Motion style guides"],
      referenceMaterials: ["Brand motion guidelines", "Tone and pacing references", "Color grading LUTs", "Previous approved outputs"],
      requiredMetadata: ["Brief ID", "Campaign reference", "Target format and duration", "Intended distribution channel"],
      accessLevel: "Production team with creative lead oversight. Model access restricted to approved endpoint list.",
      destinations: ["Internal review system", "Frame.io for approval", "DAM for approved outputs", "Release pipeline"],
    },
    rules: {
      approvalGates: ["Creative lead review before any external use", "Brand sign-off on first output per campaign", "Rights check before render if talent-adjacent", "Final approval before release pipeline entry"],
      brandReview: "Automated Brand Profile motion check on all outputs. Manual review for edge cases or new visual territory. Escalation to brand lead for contested outputs.",
      rightsReview: "NILP\u00AE scan for likeness, voice, or persona elements. Consent verification against rights database. Usage scope confirmation per talent agreement.",
      escalation: "Any output flagged by NILP\u00AE check escalates to rights team. Contested brand outputs escalate to brand lead. Unresolved items escalate to legal.",
      blocked: ["Generation of recognizable individuals without consent", "Use of non-approved models", "Outputs exceeding licensed territory scope", "Content that violates brand tone guidelines", "Generation from unlicensed reference material"],
    },
    evidence: [
      "Source asset references and brief ID",
      "Prompt or instruction text (hashed)",
      "Model ID and version used",
      "Generation parameters and seed",
      "Render timestamp and duration",
      "Reviewer identity and approval status",
      "Brand Profile check result",
      "NILP\u00AE check result",
      "Metadata schema compliance",
      "Output file hash and format",
      "Release destination assignment",
      "Creation Rights handoff status",
    ],
    examples: [
      {
        name: "Product launch video from storyboard",
        input: "6-frame storyboard + brand motion guide + product photography",
        output: "15s product video at 1080p with brand-compliant motion and color",
        checks: "Brand Profile pass, no NILP\u00AE flags, metadata complete, approved for social release",
      },
      {
        name: "Localized campaign cutdown",
        input: "Approved master video + locale brief + translated overlay text",
        output: "9:16 vertical cutdown with localized text and adapted pacing",
        checks: "Rights inheritance confirmed, locale review passed, talent consent valid for territory",
      },
      {
        name: "Product demo from reference frames",
        input: "Product photos + motion style reference + script outline",
        output: "30s product demonstration video with branded transitions",
        checks: "No talent likeness, Brand Profile pass, product claims review cleared",
      },
    ],
    crChecks: [
      "Brand Profile match confirmed",
      "Rights & NILP\u00AE rules satisfied",
      "Approved tool/model from permitted list",
      "Metadata schema complete and validated",
      "All approval gates completed",
      "Evidence artifacts saved and linked",
      "Release Proof assembled",
      "Release Manifest populated",
      "Release Destination rules confirmed",
      "Protected Record created",
    ],
  },
  {
    slug: "voice-and-localization",
    name: "Voice and Localization Skill Pack",
    description: "Defines consent rules, persona protections, locale requirements, and evidence capture for voice and dubbed content.",
    image: cskillsImages.capabilities.rightsSafeProduction,
    badges: ["Voice", "Persona protection", "Localization", "Sample Pack", "Creation Rights ready"],
    ecosystem: ["ElevenLabs", "Dubbing tools", "Translation systems", "DDEX", "Rights & NILP\u00AE"],
    overview: {
      enables: "Governed voice generation, cloning, dubbing, and localization with full consent verification, persona protection, and evidence capture across languages and markets.",
      bestFor: "Enterprise media teams producing voiced content, dubbed media, or localized assets where talent consent, persona rights, and cultural review are critical.",
      clientOutcome: "A complete operating file that defines which voice tools your team can use, what consent must be verified, what persona protections apply, and what evidence is captured per locale.",
    },
    definition: {
      action: "Generate, clone, adapt, or dub voice content using approved providers within defined consent and persona boundaries.",
      tools: "ElevenLabs, Azure TTS, Play.ht, dubbing platforms, translation memory systems \u2014 client-approved voice providers only.",
      allowedAssets: "Approved scripts, talent reference recordings with valid consent, locale specifications, cultural guidelines, music and audio metadata references.",
      restrictedAssets: "Voice recordings without consent, persona elements from non-consenting talent, assets exceeding territorial rights scope.",
      brandRules: "Voice tone and delivery must match Brand Profile audio guidelines. Cultural sensitivity review required per market. Consistency check across locales.",
      rightsRules: "NILP\u00AE persona check required for all voice outputs. Consent boundary verification per talent agreement. Usage scope confirmation per territory.",
      outputRules: "Audio quality minimum standards per format. Metadata must include voice model ID, consent record reference, locale version, and talent attribution.",
    },
    inputs: {
      sourceAssets: ["Approved scripts per locale", "Talent voice profiles with consent", "Reference recordings", "Cultural guidelines per market", "Pronunciation guides"],
      referenceMaterials: ["Brand audio guidelines", "Previous approved voice outputs", "Talent agreements and consent records", "Market-specific tone references"],
      requiredMetadata: ["Script version", "Target locale", "Talent consent reference", "Campaign and brief ID"],
      accessLevel: "Voice team with rights oversight. Voice model access restricted to consented profiles only.",
      destinations: ["Internal review for quality", "Cultural sensitivity review", "DAM for approved audio", "Video assembly pipeline"],
    },
    rules: {
      approvalGates: ["Talent consent verification before generation", "Persona review on all cloned outputs", "Cultural sensitivity check per locale", "Rights team sign-off before external use"],
      brandReview: "Brand audio tone check against approved voice guidelines. Delivery pace and emotion alignment review. Cross-locale consistency check.",
      rightsReview: "Consent validity verification against talent agreement. Persona boundary check for voice cloning outputs. Territory scope confirmation per locale.",
      escalation: "Any persona concern escalates to rights team immediately. Cultural sensitivity flags escalate to market lead. Consent gaps escalate to legal.",
      blocked: ["Voice cloning without explicit talent consent", "Persona use exceeding agreement scope", "Generation for territories not covered by consent", "Outputs that misrepresent talent identity"],
    },
    evidence: [
      "Script version and locale identifier",
      "Voice model ID and provider",
      "Talent consent record reference",
      "Persona check result",
      "Cultural review status",
      "Generation parameters",
      "Reviewer identity and approval",
      "Locale adaptation log",
      "Territory scope confirmation",
      "Output quality validation",
      "Metadata schema compliance",
      "Creation Rights handoff status",
    ],
    examples: [
      {
        name: "Product voiceover in 5 locales",
        input: "Approved English script + 5 locale translations + brand voice profile",
        output: "5 voiced audio files matching brand tone with locale-specific pacing",
        checks: "Talent consent valid for all territories, persona check clear, cultural review passed",
      },
      {
        name: "Voice clone for brand character",
        input: "Consented talent recording + character brief + script",
        output: "Character voiceover with consistent persona across campaign",
        checks: "Explicit consent on file, persona boundaries respected, usage scope within agreement",
      },
    ],
    crChecks: [
      "Brand Profile audio match confirmed",
      "Rights & NILP\u00AE persona check passed",
      "Talent consent valid and in scope",
      "Approved voice provider from permitted list",
      "Metadata complete per locale",
      "All approval gates completed",
      "Evidence artifacts saved per territory",
      "Release Proof assembled",
      "Release Manifest populated with locale data",
      "Protected Record created per territory",
    ],
  },
  {
    slug: "metadata-enrichment",
    name: "Metadata Enrichment Skill Pack",
    description: "Defines metadata schema requirements, provenance fields, and validation rules for media assets before release or archive.",
    image: cskillsImages.engagements.review,
    badges: ["Metadata", "Provenance", "Sample Pack", "Client setup available", "Creation Rights ready"],
    ecosystem: ["IPTC", "C2PA", "Content Credentials", "DDEX", "DAM/MAM systems"],
    overview: {
      enables: "Governed metadata enrichment across media assets with schema validation, provenance chain integrity, and release readiness verification before handoff to DAM or release systems.",
      bestFor: "Enterprise teams managing large asset libraries who need consistent metadata standards, provenance tracking, and Creation Rights field population across all media types.",
      clientOutcome: "A complete operating file that defines your metadata schema requirements, validation rules, provenance fields, and the enrichment checks every asset must pass before release.",
    },
    definition: {
      action: "Enrich, validate, and complete metadata fields on media assets using approved schemas and taxonomy systems.",
      tools: "Metadata schema validators, AI-assisted tagging tools, taxonomy systems, IPTC writing tools, C2PA signing \u2014 client metadata stack.",
      allowedAssets: "All media assets in production or post-production requiring metadata enrichment before release, archive, or handoff.",
      restrictedAssets: "Assets without clear provenance chain. Assets from unauthorized sources. Outputs that have bypassed approval gates.",
      brandRules: "Metadata must reference the Brand Profile applied. Category and taxonomy values must align with brand information architecture.",
      rightsRules: "Rights fields must reflect current consent status. NILP\u00AE status per element. Expiry dates and territory restrictions must be populated.",
      outputRules: "All required schema fields must be populated. Provenance chain must be intact. Validation score must meet minimum threshold before handoff.",
    },
    inputs: {
      sourceAssets: ["Media assets pending metadata enrichment", "Existing partial metadata records", "Provenance chain data", "Taxonomy references"],
      referenceMaterials: ["Client metadata schema documentation", "IPTC field mapping", "C2PA assertion templates", "Taxonomy hierarchy"],
      requiredMetadata: ["Asset origin", "Creation method", "Tools used", "Rights status", "Approval state"],
      accessLevel: "Metadata team with schema owner oversight. Write access to metadata fields on approved assets only.",
      destinations: ["DAM system for enriched assets", "Archive for completed records", "Release pipeline for validated outputs"],
    },
    rules: {
      approvalGates: ["Schema owner validation on new field definitions", "Quality spot-check on enriched batches", "Completeness verification before handoff"],
      brandReview: "Category taxonomy alignment check. Brand Profile reference validation. Information architecture compliance.",
      rightsReview: "Rights field accuracy verification. Consent status currency check. Territory and expiry date validation.",
      escalation: "Schema validation failures escalate to metadata lead. Rights field conflicts escalate to rights team. Provenance gaps escalate for investigation.",
      blocked: ["Writing metadata on assets without clear provenance", "Overwriting rights fields without authorization", "Releasing assets with incomplete required fields"],
    },
    evidence: [
      "Asset identifier and version",
      "Schema version applied",
      "Fields enriched (list)",
      "Validation status and score",
      "Provenance chain integrity check",
      "Rights fields populated and verified",
      "Taxonomy alignment confirmed",
      "Completeness score",
      "Enrichment timestamp",
      "Operator or system identity",
      "Quality check result",
      "Creation Rights handoff readiness",
    ],
    examples: [
      {
        name: "Batch enrichment for product photography",
        input: "200 product images with partial metadata + schema template",
        output: "Complete metadata records with IPTC fields, provenance, and rights status",
        checks: "Schema validation 100%, provenance intact, rights fields current, ready for DAM handoff",
      },
      {
        name: "C2PA credential attachment",
        input: "Final approved video + provenance assertions + signing certificate",
        output: "Video with embedded C2PA manifest and content credentials",
        checks: "Credential chain valid, provenance complete, release authorized",
      },
    ],
    crChecks: [
      "Metadata schema fully populated",
      "Provenance chain intact and verified",
      "Rights fields current and accurate",
      "Brand Profile reference validated",
      "NILP\u00AE status fields populated",
      "All approval gates completed",
      "Evidence of enrichment saved",
      "Release Proof metadata section complete",
      "Release Manifest fields mapped",
      "Protected Record metadata layer ready",
    ],
  },
  {
    slug: "dam-handoff",
    name: "DAM Handoff Skill Pack",
    description: "Defines governed handoff rules for moving approved media into DAM systems with full metadata, evidence records, and release status.",
    image: cskillsImages.engagements.implementationOffice,
    badges: ["Asset systems", "Handoff governance", "Sample Pack", "Client setup available", "Creation Rights ready"],
    ecosystem: ["AEM Assets", "Bynder", "S3", "Internal DAM/MAM"],
    overview: {
      enables: "Governed media handoff to DAM and MAM systems with full metadata validation, evidence chain confirmation, and release status verification before ingestion.",
      bestFor: "Enterprise teams with large asset libraries who need structured handoff rules, naming conventions, folder hierarchies, and metadata completeness checks before assets enter their DAM.",
      clientOutcome: "A complete operating file that defines your DAM handoff rules, metadata requirements, naming conventions, folder structures, and the validation checks every asset must pass before ingestion.",
    },
    definition: {
      action: "Validate, package, and hand off approved media assets to DAM systems with complete metadata and evidence records.",
      tools: "Bynder, Adobe AEM Assets, Canto, Brandfolder, S3 \u2014 client DAM system and ingestion APIs.",
      allowedAssets: "Release-approved media with complete metadata records, evidence chains, and approval confirmations.",
      restrictedAssets: "Assets without release approval. Assets with incomplete metadata. Assets missing evidence records. Draft or work-in-progress files.",
      brandRules: "Naming conventions must follow brand information architecture. Folder placement must align with approved taxonomy. Asset variants must reference parent.",
      rightsRules: "Rights status must be confirmed before handoff. Territory restrictions must be encoded in metadata. Expiry dates must be set where applicable.",
      outputRules: "All required DAM fields must be populated. File format must match destination requirements. Naming convention must be validated. Evidence chain must be linked.",
    },
    inputs: {
      sourceAssets: ["Release-approved media files", "Complete metadata records", "Evidence chain artifacts", "Approval confirmation records"],
      referenceMaterials: ["DAM taxonomy documentation", "Naming convention rules", "Folder hierarchy map", "Required field mapping"],
      requiredMetadata: ["Asset title", "Category", "Rights status", "Territory scope", "Expiry date", "Creator attribution", "Approval chain"],
      accessLevel: "DAM operations team with admin oversight. Write access to approved ingestion folders only.",
      destinations: ["Primary DAM system", "Archive storage", "CDN for distribution-ready assets", "Backup and redundancy systems"],
    },
    rules: {
      approvalGates: ["Metadata completeness verification", "Evidence chain confirmation", "DAM admin acceptance", "Post-ingestion validation"],
      brandReview: "Naming convention compliance check. Taxonomy placement validation. Parent-variant relationship verification.",
      rightsReview: "Rights status confirmation at time of handoff. Territory encoding validation. Expiry date verification.",
      escalation: "Metadata validation failures return to production team. Rights status conflicts escalate to rights team. Ingestion errors escalate to DAM admin.",
      blocked: ["Handoff of unapproved assets", "Assets with incomplete metadata", "Files without evidence chain", "Assets exceeding territory or time scope"],
    },
    evidence: [
      "Asset identifier and file hash",
      "Handoff manifest (full field list)",
      "Metadata validation record",
      "DAM ingestion confirmation",
      "Naming convention check result",
      "Folder placement validation",
      "Rights status at handoff time",
      "Evidence chain link confirmation",
      "Approval chain reference",
      "Post-ingestion verification",
      "Distribution readiness status",
      "Creation Rights handoff complete",
    ],
    examples: [
      {
        name: "Campaign asset batch handoff",
        input: "48 approved campaign assets + metadata records + evidence artifacts",
        output: "Assets ingested in DAM with correct taxonomy, naming, and linked evidence",
        checks: "Metadata 100% complete, rights confirmed, evidence linked, taxonomy correct",
      },
      {
        name: "Product photography refresh",
        input: "New product images + updated metadata + supersedes records",
        output: "New assets ingested, old versions archived with relationship links preserved",
        checks: "Version relationships maintained, rights current, old assets marked superseded",
      },
    ],
    crChecks: [
      "Release status confirmed before handoff",
      "Metadata schema fully validated",
      "Evidence chain complete and linked",
      "Rights status current and encoded",
      "Brand taxonomy compliance verified",
      "All approval gates satisfied",
      "Handoff manifest generated",
      "Release Manifest updated with destination",
      "DAM ingestion confirmed",
      "Protected Record updated with handoff status",
    ],
  },
  {
    slug: "rights-and-nilp-check",
    name: "Rights & NILP\u00AE Check Skill Pack",
    description: "Defines how NILP\u00AE (Name, Image, Likeness, and Persona) constraints are verified, consent is confirmed, and rights status is checked before media moves forward.",
    image: cskillsImages.capabilities.rightsSafeProduction,
    badges: ["Rights", "NILP\u00AE", "Persona protection", "Sample Pack", "Creation Rights ready"],
    ecosystem: ["Rights & NILP\u00AE", "Consent systems", "Creation Rights"],
    overview: {
      enables: "Governed verification of NILP\u00AE status, consent boundaries, and rights constraints across all media outputs containing talent, likeness, voice, or persona elements.",
      bestFor: "Enterprise media teams producing content that includes talent, voice actors, brand ambassadors, or any persona elements requiring consent verification and rights protection.",
      clientOutcome: "A complete operating file that defines your NILP\u00AE check process, consent verification steps, rights database requirements, escalation paths, and the evidence captured at each stage.",
    },
    definition: {
      action: "Verify NILP\u00AE status, confirm consent boundaries, check rights constraints, and produce evidence of verification before media can proceed to release.",
      tools: "Rights database, consent management system, NILP\u00AE verification checks, talent agreement references \u2014 client rights infrastructure.",
      allowedAssets: "All media outputs containing recognizable talent, likeness, voice, or persona elements requiring rights verification.",
      restrictedAssets: "Outputs where talent has not consented. Assets exceeding territorial or temporal scope. Content using persona elements beyond agreement boundaries.",
      brandRules: "Talent usage must align with brand positioning. Persona representation must match brand guidelines. No unauthorized association between talent and brand claims.",
      rightsRules: "Every element containing Name, Image, Likeness, or Persona must be individually verified. Consent must be current, in-scope, and documented. Territory and time restrictions must be confirmed.",
      outputRules: "NILP\u00AE status must be recorded per element. Consent chain must be documented. Rights expiry dates must be set. Verification evidence must be saved.",
    },
    inputs: {
      sourceAssets: ["Media outputs pending rights review", "Talent agreements and consent records", "Previous NILP\u00AE check results", "Usage scope documentation"],
      referenceMaterials: ["Talent agreement database", "Consent record system", "Territory and time scope references", "Brand representation guidelines"],
      requiredMetadata: ["Talent identifier", "Asset identifier", "Intended use scope", "Target territories", "Intended duration"],
      accessLevel: "Rights team with legal oversight. Read access to consent records and talent agreements. Write access to NILP\u00AE status fields.",
      destinations: ["Approved assets pipeline (if passed)", "Hold queue (if flagged)", "Legal escalation (if contested)", "Evidence storage"],
    },
    rules: {
      approvalGates: ["Initial NILP\u00AE scan on all outputs with talent elements", "Consent verification against talent agreement", "Usage scope confirmation per territory and time", "Rights team sign-off on contested or edge cases"],
      brandReview: "Talent-brand association review. Persona representation alignment check. No unauthorized claims or endorsement implications.",
      rightsReview: "Consent validity and currency check. Territory scope verification. Time scope verification. Usage type confirmation against agreement terms.",
      escalation: "Any element without clear consent escalates immediately. Expired agreements escalate to rights team. Contested persona use escalates to legal. Territory conflicts require market-specific review.",
      blocked: ["Use of talent without documented consent", "Persona elements exceeding agreement scope", "Content in territories not covered by rights", "Outputs after consent expiry date", "Unauthorized likeness manipulation or combination"],
    },
    evidence: [
      "Talent identifier per element",
      "NILP\u00AE status (Name, Image, Likeness, Persona) per element",
      "Consent record reference and validity date",
      "Territory scope confirmed",
      "Time scope confirmed",
      "Usage type matched to agreement",
      "Reviewer identity and sign-off",
      "Escalation record (if applicable)",
      "Rights database query timestamp",
      "Verification result (pass/flag/block)",
      "Evidence artifacts saved",
      "Creation Rights handoff status",
    ],
    examples: [
      {
        name: "Campaign video with brand ambassador",
        input: "60s video featuring signed ambassador + campaign brief + territory list",
        output: "NILP\u00AE verified: consent valid, territory scope confirmed, persona use within agreement",
        checks: "Consent current, 12 territories confirmed, likeness use within scope, no manipulation",
      },
      {
        name: "AI-generated content with likeness elements",
        input: "Generated image referencing talent style + consent documentation",
        output: "NILP\u00AE flagged: likeness boundary review required before release",
        checks: "Escalated to rights team, likeness threshold assessment, legal confirmation required",
      },
      {
        name: "Voice clone consent verification",
        input: "Cloned voice output + original talent consent + usage scope",
        output: "NILP\u00AE verified: persona consent valid for stated use and territories",
        checks: "Voice consent explicit, persona boundary respected, territory and time confirmed",
      },
    ],
    crChecks: [
      "NILP\u00AE status confirmed per element",
      "Consent validity verified and current",
      "Territory scope matches intended distribution",
      "Time scope within agreement boundaries",
      "Usage type approved per talent agreement",
      "No unauthorized likeness manipulation",
      "All escalations resolved",
      "Evidence of verification saved",
      "Release Proof NILP\u00AE section complete",
      "Protected Record persona layer ready",
    ],
  },
];
