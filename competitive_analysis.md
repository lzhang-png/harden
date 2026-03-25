# Harden.run Competitive Analysis

**Date:** 2026-03-21  
**Goal:** Understand the current AI security, identity, and governance landscape, identify where competitors are clustered, and clarify where `Harden.run` has a differentiated position.

## Harden In One Sentence
`Harden.run` wraps vibe-coded and agent-built apps in enterprise-grade runtime governance without requiring code changes, and deploys in the customer's environment.

## Core Product Snapshot
- Enterprise IAM plus security and compliance policy adherence.
- Runs in the customer's environment, so production data and secrets stay inside their VPC.
- Multiple deployment modes depending on trust requirements.
- App can be deployed without code changes.
- Source-agnostic: works with Cursor, Replit, Lovable, or internal agents.
- Produces approval-grade evidence: what the app connects to, what credentials it uses, what changed, and where uncertainty remains.
- Preserves builder velocity with reviewable diffs and minimal infrastructure expertise required.
- Compliance-ready audit trail for every approval decision.

## Executive Summary
The market is noisy. More than 50 companies now claim some version of "AI security," but most are point solutions focused on one slice of the problem: agent behavior, prompt guardrails, auth, scanning, or posture visibility. Very few are building a full horizontal platform.

`Harden.run` is differentiated because it governs the full lifecycle of generated apps, not just the model, the prompt, or the source code. It is closest to a new category: secure runtime governance for vibe-coded apps, especially apps that arrive with little or no built-in auth, policy, or deployment hygiene.

### Key Insight
Enterprise buyers will hear the phrase "AI app security" from dozens of vendors, but they are usually buying coverage for only one layer. A team may buy prompt-injection defense and still ship an app with:

- Hardcoded secrets
- Open outbound network access
- No authentication
- No audit trail
- No runtime controls

That is the gap `Harden.run` fills.

## Sales Stat Battery

| Stat | Source |
| --- | --- |
| 2.74x more security flaws in AI-generated code vs human-written code | CodeRabbit / Forbes |
| 96% of enterprise permissions go unused, and AI agents inherit all of them | Oso + Cyera |
| 63% of orgs cannot stop their own AI from exfiltrating data | Kiteworks |
| 24.4% of orgs have visibility into which AI agents communicate | AGAT / Gravitee |
| 1 in 8 AI security breaches is now linked to agentic systems | HiddenLayer |
| 492 exposed MCP servers were found with zero authentication | Trend Micro |
| 82:1 machine-to-human identity ratio in enterprises | Microsoft |

## Market Structure

### The 7 Segments

| Segment | Category | What They Secure | Example Players | Threat To Harden |
| --- | --- | --- | --- | --- |
| S1 | AI app builders | App generation and hosting | Lovable, Cursor, Replit, Bolt, v0, Emergent | Low |
| S2 | Enterprise-readiness APIs | SSO, SCIM, RBAC, audit logs | WorkOS, Frontegg, Clerk, Descope | High |
| S3 | Authorization engines | Fine-grained permissions | Permit.io, Oso, Cerbos, OpenFGA | Medium |
| S4 | Internal tool platforms | Build + deploy inside a controlled platform | Retool, Superblocks, Appsmith | High |
| S5 | Agent guardrails | Prompt, output, and MCP/LLM traffic protection | Arthur AI, Operant, Guardrails AI, Prompt Security, Vijil | Medium |
| S6 | AISPM + agent identity | Discovery, posture, non-human identity, governance | Noma, Zenity, Oasis, Okta, Microsoft | Medium-High |
| S7 | App runtime governance | Security and control for the running generated app | `Harden.run` | Open category |

### Category View
- Segments `S1-S6` are real, funded, and increasingly crowded.
- Segment `S7` is the open wedge.
- `Harden.run` is best described as a `S5 + S7 hybrid` for agentic apps:
  it can complement semantic guardrails while also enforcing runtime security around the app itself.

## Segment-by-Segment Analysis

### S1. AI App Builders
**What they do:** generate apps and often host them on their own infrastructure.

**Why they matter:** they create demand for downstream governance because customers still need secure deployment and policy controls.

**Relationship to Harden:**
- Upstream demand creators
- Potential channel partners
- Potential acquisition or integration targets

**Threat level:** Low

**Why threat is limited:** most builder platforms monetize their own hosting, while `Harden.run` is differentiated by BYOC and customer-VPC deployment.

### S2. Enterprise-Readiness APIs
**What they do:** bolt on enterprise features like SSO, SCIM, RBAC, and audit logs.

**Key insight:** they cover part of Day 2 operations, but not the full runtime stack.

| Company | Covers | Does Not Cover | Threat |
| --- | --- | --- | --- |
| WorkOS | SSO, SCIM, RBAC, audit logs | Runtime security, SBOM, egress, containers, BYOC | High |
| Frontegg | Auth, SSO, entitlements | Same gaps, less enterprise traction | Medium |
| Clerk | Auth, user management, UI components | Enterprise runtime security | Low |
| Descope | Passwordless, SSO, MFA | Auth-only scope | Low |
| Stytch | Auth infrastructure | Infrastructure governance | Low |

#### WorkOS Deep Dive
WorkOS is the strongest threat in this segment because it is already positioning itself as the enterprise-readiness layer for vibe-coded apps.

**Likely expansion path:**
- Today: SSO, SCIM, RBAC, audit logs
- Next: deployment features, cost tracking, compliance reporting
- Unlikely soon: container hardening, egress proxy, surrogate credentials, kernel-level isolation

**Harden counter-position:** WorkOS requires application integration. `Harden.run` wraps raw generated code without relying on the app to call an API.

### S3. Authorization Engines
**What they do:** solve "what can this user do?" with policy engines and fine-grained access control.

**Key difference:** these tools assume the app already has auth hooks. `Harden.run` is valuable even when the generated app has zero auth structure.

| Company | Approach | Why Watch |
| --- | --- | --- |
| Permit.io | Authz-as-a-service built on OPA/OPAL | Fast-growing, developer-friendly |
| Oso | Embedded policy engine | Strong thought leadership |
| Cerbos | Self-hosted policy engine | OSS and policy-as-code appeal |
| Aserto | Directory + policy model | Enterprise orientation |
| AuthZed / OpenFGA | Zanzibar-style permissions | Adoption and ecosystem momentum |

**Threat level:** Medium

### S4. Internal Tool Platforms
**What they do:** own generation, deployment, and governance within their own product boundary.

| Company | Enterprise Story | BYOC | Threat |
| --- | --- | --- | --- |
| Retool | Strong security story plus AI app generation | Self-hosted option | High |
| Superblocks | Positioning around enterprise vibe coding | Managed + on-prem | Medium |
| Appsmith | OSS and self-hosted appeal | Yes | Low |
| Palantir AIP | Deep enterprise credibility | On-prem | Low |
| ServiceNow AI | Incumbent distribution and governance story | On-prem option | Medium |

#### Retool Deep Dive
Retool is the strongest platform threat because it can plausibly claim "generated apps are already enterprise-ready" when built inside Retool.

**Risk indicator:** if Retool adds import of external code and can govern that code, it starts to move closer to Harden's position.

**Harden counter-position:** Retool only governs Retool apps. Enterprises already have generated apps coming from many sources. `Harden.run` governs all of them.

### S5. Agent Security and Guardrails
**What they do:** secure the AI conversation, including prompt filtering, output validation, jailbreak defense, MCP protection, and LLM cost controls.

**Important split within the category:**
- `Library-based`: guardrails run inside the app process.
- `Gateway/proxy-based`: guardrails run out of process, which is more durable.

| Company | Type | Threat |
| --- | --- | --- |
| Arthur AI | Gateway / AI firewall | Medium-High |
| Operant AI | MCP gateway | Medium |
| Guardrails AI | In-app library | Low |
| NVIDIA NeMo Guardrails | OSS in-app library | Low |
| Prompt Security | MCP gateway + prompt protection | Medium |
| Lakera | Prompt injection defense | Low |
| Lasso Security | OSS MCP security gateway | Low-Medium |

**Threat level:** Medium

**Most important dynamic:** gateway players could expand from "protect LLM traffic" to "protect broader outbound traffic." That is a real risk, but becoming `Harden.run` would still require them to add auth, deployment, container hardening, SBOM, fleet management, and evidence workflows.

**Core sales line:** you may already have an AI firewall for your model calls. `Harden.run` is about the other 90% of the app.

### S6. AISPM and Agent Identity
**What they do:** discover AI assets, map risk, manage agent identity, and assess posture.

#### AISPM / Governance
| Company | Wedge | Status |
| --- | --- | --- |
| Noma Security | Full AI lifecycle and agentic risk mapping | Category leader |
| Zenity | Low-code and agent governance | Strong Microsoft relationship |
| WitnessAI | Visibility and behavior-based governance | Rising profile |
| Kore.ai | Agent management platform | Expanding |
| Pillar Security | Full AI lifecycle | Early stage |

#### Agent Identity / NHI
| Company | Wedge | Status |
| --- | --- | --- |
| Oasis Security | Agentic access management | Well-funded |
| Astrix | NHI platform expanding to agents | Category leader |
| Aembit | Identity-first workload control plane | Differentiated |
| CyberArk | PAM incumbent extending to agents | Credible incumbent |
| Microsoft Entra Agent ID | First-party Microsoft ecosystem play | Massive distribution |
| 1Password | Unified access management | Cross-category expansion |
| Okta | Conditional access for AI agents | Major incumbent |
| Silverfort | Unified identity protection | Expanding |

#### Runtime Agent Protection / MCP Security
| Company | Wedge |
| --- | --- |
| Operant AI | MCP gateway |
| Manifold | AI-native detection and response for endpoint agents |
| Lasso Security | OSS MCP security gateway |

**Threat level:** Medium-High, mostly because of buyer confusion.

**Harden counter-position:** these companies govern the agent's posture or identity. `Harden.run` governs the app the agent produced.

### S7. Vibe-Coded App Runtime Governance
This is the strategic opening.

Every other category secures one of the following:
- The model
- The agent
- The prompt
- The identity
- The source code

Very few secure the running generated application as a governed system.

`Harden.run` is strongest where apps arrive with:
- No auth
- No egress controls
- No secure credential boundary
- No deployment hardening
- No runtime auditability

For static generated apps, `Harden.run` provides auth, egress policy, SBOM, and audit.  
For agentic apps, it adds AI guardrails, tool-use enforcement, and cost controls at the infrastructure layer.

## Adjacent and Direct Competitors

### Code Scanning and Retro-Fitted AppSec
These companies improve code posture but do not govern the runtime.

| Company | Approach | Gap |
| --- | --- | --- |
| Aikido Security | All-in-one DevSecOps | Scans code, does not wrap runtime |
| Snyk | Secure AI-generated code messaging | Finds vulns, does not enforce runtime policy |
| GitGuardian | Secrets detection | Secrets only |
| Semgrep | OSS code analysis | Rules engine, not runtime |
| Checkmarx | Enterprise SAST/DAST | Scanning only |
| Wiz | Cloud security with emerging vibe-coding positioning | Adjacent, worth monitoring |

### Closest Direct Competitors
| Company | Why It Matters | Harden Difference |
| --- | --- | --- |
| `major.build` | Integrated app generation with enterprise controls | Governs what is built inside its platform; `Harden.run` governs apps from any source |
| `Vijil` | Agent-security-focused platform with runtime and telemetry story | Hardens the agent; `Harden.run` hardens the app the agent produced |
| `WorkOS` | Enterprise-readiness for generated apps | Strong on auth and identity, weak on full runtime governance |

## Cloud Platform Threats
The biggest long-term threat is bundling by cloud providers.

| Company | Product | Covers | Does Not Cover |
| --- | --- | --- | --- |
| Microsoft | Agent 365, Entra Agent ID, Purview for AI | Governance and identity inside Microsoft ecosystem | Cross-platform generated apps |
| AWS | Bedrock Guardrails, AgentCore | Content filtering and agent hosting | App-level runtime governance for custom generated code |
| Google | AI Studio, Model Armor | Generation plus basic guardrails | Cross-source runtime governance |
| Cloudflare | AI Security for Apps | Network-level AI traffic filtering | Full app governance |

**Threat level:** Highest if they ever bundle broadly across ecosystems, but execution risk remains slower than startup entrants because they optimize for their own stacks.

## Harden Positioning

### Capability Matrix
Legend: `Yes` = meaningful native coverage, `Partial` = partial or adjacent support, `No` = not core.

| Capability | WorkOS | Permit / Oso | Retool | Vijil | Snyk / Aikido | Cloud Platforms | Harden |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SSO / SCIM | Yes | No | Yes | No | No | Partial | Yes |
| Fine-grained authz | Partial | Yes | Yes | No | No | Partial | Yes |
| Immutable audit logs | Yes | Partial | Yes | Partial | No | Partial | Yes |
| Runtime egress enforcement | No | No | No | No | No | No | Yes |
| Surrogate credentials | No | No | No | No | No | No | Yes |
| Container hardening | No | No | No | Partial | No | No | Yes |
| SBOM generation | No | No | No | No | Yes | No | Yes |
| Dependency scanning + auto-fix | No | No | No | No | Yes | No | Yes |
| AI guardrails | No | No | No | Yes | No | Partial | Yes |
| Works with any code source | Partial | Partial | No | Partial | Partial | No | Yes |
| BYOC / customer cloud | No | Yes | Yes | No | No | No | Yes |
| Handles code with zero auth | No | No | Yes, inside platform | No | No | No | Yes |
| Risk score and before/after narrative | No | No | No | No | Partial | No | Yes |

## Durable Differentiators
- **Source-agnostic runtime governance:** generated code does not need to be modified.
- **BYOC by default:** sensitive data and secrets remain inside the customer's environment.
- **Broad product surface:** auth, egress, credentials, container controls, SBOM, audit, and governance in one system.
- **Cross-builder relevance:** not limited to one generation platform.
- **Out-of-process enforcement:** controls remain durable even if app code is compromised.
- **Surrogate credentials:** the app never holds real keys.

## Where The Moat Could Erode

| Risk | Likelihood | Timeline | Mitigation |
| --- | --- | --- | --- |
| WorkOS expands down the stack | Medium-High | 6-12 months | Own the runtime narrative early |
| Retool governs imported external code | Medium | 6-12 months | Monitor product movement closely |
| Cloud providers bundle governance | High intent, lower execution speed | 12-24 months | Lean into cross-platform story |
| Vijil expands from agent to app governance | Low-Medium | 12+ months | Maintain infrastructure-led differentiation |
| Wiz enters app runtime governance | Medium | 6-12 months | Watch messaging and move quickly |

## Competitive Summary

| Segment | Example Players | Threat | Relationship |
| --- | --- | --- | --- |
| S1: AI app builders | Lovable, Cursor, Replit, Bolt, Google AI Studio | Low | Demand creators and channel opportunities |
| S2: Enterprise-readiness APIs | WorkOS, Frontegg, Clerk | High | Auth overlap, possible near-term partners |
| S3: Authorization engines | Permit.io, Oso, Cerbos | Medium | Overlap on authz, narrower scope |
| S4: Internal tool platforms | Retool, Superblocks, Appsmith | High | Direct competitors inside walled gardens |
| S5: Agent guardrails | Guardrails AI, Arthur AI, Operant, Vijil | Medium | Mostly complementary |
| S6: AISPM + agent identity | Noma, Zenity, Oasis, Okta, Microsoft | Medium-High | Different layer, but creates category confusion |
| S7: App runtime governance | `Harden.run` | Open | Core owned wedge |
| Cloud platforms | Microsoft, AWS, Google | Highest | Ecosystem-bundling risk |

## M&A Wave
The market is consolidating.

| Target | Acquirer | When | Signal |
| --- | --- | --- | --- |
| Protect AI | Palo Alto Networks | Apr 2025 | ML supply chain security |
| Lakera | Check Point | Sep 2025 | Prompt injection defense |
| CalypsoAI | F5 Networks | 2025 | Guardrails for regulated environments |
| Robust Intelligence | Cisco | 2025 | Validation and red-teaming |
| Veza | ServiceNow | 2025 | Identity security for the AI era |
| Zenity | Rumored Microsoft interest | TBD | Low-code and agent governance |

**Implication:** large security platforms are buying AI security wedges quickly. This validates demand and also reduces the number of independent startups in adjacent categories.

## Recent Market Validation Signals

| Signal | Source | Date | Why It Matters |
| --- | --- | --- | --- |
| "Vibe Coding Has A Massive Security Problem" | Forbes | 03-20 | Mainstream validation of the problem |
| Google enters vibe coding market | Google Blog | 03-20 | TAM validation |
| "The AI Coding Hangover" | InfoWorld | Week of 03-17 | Strong framing of the Day 2 problem |
| "Build, Deployment, Runtime" framework | Security Boulevard | 03-18 | External validation of Harden's architectural framing |
| 1 in 8 AI breaches is agentic | HiddenLayer | 03-18 | Incident signal is real |
| Postmark-MCP attack | Forbes Tech Council / OWASP | 03-20 | Strong narrative for egress enforcement |
| CISOs are actively investing in agentic defenses | EY / PRNewswire | 03-19 | Clear buying signal |
| Vibe coding creates dangerous complacency | Futurist.com / Anthropic coverage | 03-08 | Executive-level concern |

## Messaging Framework

### One-Liner
`Harden.run` does AI governance, deployment, and maintenance end to end. Most others cover one piece.

### Positioning Statement
Every enterprise already has vibe-coded apps in production, whether they admit it or not. Those apps were built in tools like Cursor, Lovable, Replit, or internal workflows, and many of them ship with hardcoded secrets, open egress, weak auth, and no audit trail. `Harden.run` wraps those apps in enterprise-grade security without changing a line of code. One command. Any source. Your cloud.

### Differentiation Ladder

| When They Say | You Say |
| --- | --- |
| "We have WorkOS for SSO." | WorkOS covers auth. Who governs outbound traffic, SBOM, runtime policy, and evidence? |
| "We use Retool, it's governed." | Retool governs Retool apps. What governs everything your teams built elsewhere? |
| "We bought an AI security tool." | You may have secured the agent. Did you secure what the agent built? |
| "Microsoft Agent 365 covers us." | It governs Microsoft agents inside Microsoft. What governs your custom app running elsewhere? |
| "Snyk scans our code." | Scanning finds issues. Runtime governance prevents them from becoming production behavior. |
| "We'll build it ourselves." | You are signing up to build auth proxy, egress proxy, AI guardrails, credential boundaries, SBOM, hardening, audit, policy, and drift detection. |

### Quote To Lead With
> "AI-generated code has 2.74x more security flaws than human-written code."  
> — Forbes, March 2026

## Recommended Actions

### Immediate
- Add the Forbes `2.74x` stat to the hero section and core pitch materials.
- Publish a LinkedIn response while the story is still in-cycle.
- Draft a content piece around the Postmark-MCP incident and zero-auth MCP servers.
- Prepare an RSAC one-pager on why existing funded AI security layers do not cover custom AI apps.

### Next 2 Weeks
- Create battlecards vs `WorkOS`, `Retool`, and `Microsoft Agent 365`.
- Publish a piece owning the `Build -> Deployment -> Runtime` framing.
- Develop a sharper counter-message to "we'll just use existing enterprise APIs."
- Explore partnership positioning with `Manifold` around detection plus prevention.

### Next Month
- Monitor `Retool` MCP server evolution.
- Monitor `Wiz` messaging around vibe-coded apps.
- Watch new YC launches for claims around runtime governance or enforcement.
- Push pre-conference thought leadership before industry noise ramps up.

---

# Potential Brand Identity Directions For Harden.run

## Brand Principles
Based on the competitive landscape, the brand should feel:

- Trustworthy, but not old-enterprise boring
- Technical, but not developer-tool cute
- Serious, but not fear-based
- Precise, not vague
- Cross-platform, not tied to a single ecosystem
- Calm under pressure

### Strategic Brand Role
`Harden.run` is not just another "AI security" vendor. The brand should communicate:

- Runtime control
- Invisible protection
- Deployment confidence
- Evidence and accountability
- Infrastructure-level seriousness

## Direction 1: Quiet Fortress
**Positioning:** Invisible strength for high-stakes apps.

**Core idea:** `Harden.run` is the layer that makes risky generated software safe enough to trust, without drama and without slowing teams down.

**Brand traits:**
- Calm
- Precise
- Confident
- Durable
- Enterprise-native

**Visual world:**
- Deep charcoal, graphite, slate, and one sharp signal accent like electric teal or icy blue
- Minimal shapes, strong spacing, hard edges, subtle line systems
- Imagery inspired by containment, boundaries, trusted infrastructure, and controlled flow

**Typography direction:**
- A technical grotesk or neo-grotesk sans for the main brand
- A monospaced secondary style for product and technical moments

**Logo cues:**
- A hardened perimeter
- Layered shield abstraction
- Boundary or enclosure motif
- Subtle "H" geometry built from protected lanes or walls

**Voice and messaging:**
- "Secure what ships."
- "Runtime governance for generated apps."
- "One command. Any source. Your cloud."

**Best for:** enterprise buyers, infrastructure teams, security leadership

## Direction 2: Mission Control
**Positioning:** The command layer for AI-built software.

**Core idea:** `Harden.run` is the control plane that turns chaotic AI-generated output into something reviewable, governable, and production-ready.

**Brand traits:**
- Operational
- Intelligent
- Authoritative
- Systems-oriented
- Modern

**Visual world:**
- Dark UI-inspired palette
- Grid systems, telemetry lines, route maps, dashboards, node graphs
- Motion language based on scanning, routing, verification, and policy gates

**Typography direction:**
- Sharp, modern sans with a more contemporary product feel
- Technical data styling in mono or tabular numerals

**Logo cues:**
- Orbital paths
- Routed signals
- Control nodes
- A directional mark that suggests orchestration

**Voice and messaging:**
- "Control what AI ships."
- "From generated code to governed runtime."
- "The operating layer for vibe-coded apps."

**Best for:** platform teams, DevOps, product-led enterprise positioning

## Direction 3: Proof Engine
**Positioning:** Security you can verify, not just claim.

**Core idea:** while competitors talk about safety abstractly, `Harden.run` produces evidence, auditability, and review-grade clarity.

**Brand traits:**
- Verifiable
- Rational
- Auditable
- High-integrity
- Decision-grade

**Visual world:**
- White, bone, steel, ink, and one assertive accent like cobalt or emerald
- Documentation aesthetics mixed with high-end technical diagrams
- Seals, signatures, chains, hashes, proofs, approval marks

**Typography direction:**
- Editorial serif or high-contrast display face paired with a technical sans
- Strong hierarchy that feels like a board memo, not a startup landing page

**Logo cues:**
- Stamp or seal abstractions
- Signed chain motifs
- Checkpoint or evidence markers

**Voice and messaging:**
- "Approval-grade security for AI-built apps."
- "Evidence for every decision."
- "From code to proof."

**Best for:** security leadership, compliance-heavy industries, regulated enterprise sales

## Direction 4: Industrial Runtime
**Positioning:** Built for the real environment, not just the demo.

**Core idea:** `Harden.run` is what takes AI-generated apps out of toy mode and into production reality.

**Brand traits:**
- Rugged
- Grounded
- Practical
- Unromantic
- High-performance

**Visual world:**
- Iron, rust, black, sand, concrete, with one vivid warning accent
- Materials language: steel, structure, reinforcement, machinery
- Strong editorial photography or abstract 3D forms with weight and density

**Typography direction:**
- Condensed industrial sans or engineered grotesk
- Strong all-caps moments, but used sparingly

**Logo cues:**
- Structural beams
- Reinforcement patterns
- Hardened casing
- Monogram with industrial geometry

**Voice and messaging:**
- "Make generated apps production-hard."
- "Built for runtime reality."
- "Not just secure in theory."

**Best for:** a bolder, more differentiated category-creation brand

## Recommended Direction
If `Harden.run` wants to sell into enterprise security and platform teams quickly, the strongest path is a blend of:

- `Quiet Fortress` for trust and seriousness
- `Mission Control` for modern product clarity
- `Proof Engine` for differentiated credibility

That combination gives the brand three things competitors often lack:

1. A calm enterprise tone instead of generic cyber drama
2. A modern systems feel instead of old governance software
3. A strong evidence-first story instead of vague "AI safety" language

## Suggested Brand Territory

### Brand Essence
**Confidence at runtime**

### Brand Promise
`Harden.run` turns generated apps into governed, production-ready systems without slowing builders down.

### Possible Taglines
- `Ship AI-built apps with guardrails that hold.`
- `Runtime governance for generated software.`
- `From vibe-coded to enterprise-ready.`
- `One command. Any source. Your cloud.`
- `Secure what AI ships.`
- `Proof-grade runtime security.`

## Naming And Verbal Notes
The name `Harden.run` already gives you a strong strategic frame:

- `Harden` implies strengthening, reinforcement, and operational resilience.
- `.run` implies execution, deployment, and runtime, which is exactly where the company is strongest.

That means the brand should lean into **runtime confidence**, not abstract AI ethics or generic cybersecurity tropes.

## Design System Starter
If you want a first-pass design system, I would start here:

- **Primary colors:** graphite, black, steel, cloud gray
- **Accent color:** electric teal or signal blue
- **Typography:** one clean enterprise sans + one restrained mono
- **UI motifs:** routes, boundaries, approvals, evidence, controlled flows
- **Avoid:** padlocks, hooded hacker imagery, glowing neon cyberpunk clichés, generic shield icons, and overly playful dev-tool branding

## Fast Creative Routes To Explore Next
- A homepage moodboard for `Quiet Fortress`
- A second moodboard for `Mission Control`
- A logo exploration around protected flow / bounded pathways
- A messaging system with hero lines, proof points, and audience-specific variants
- A visual language for "evidence," "runtime," and "policy enforcement"
