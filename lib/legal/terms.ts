import { p, sub, ul, type LegalDocument } from "@/lib/legal/types";

/**
 * Transcribed from "Reorganized Terms of Services.pdf" as supplied.
 *
 * Numbering note: the source jumps from 3 to 6, and several clauses refer to
 * section numbers that do not match where the clause now sits (Section 6 cites
 * "Section 19 (Limitation of Liability)" while limitation of liability is
 * printed as 17, for example). Numbers and cross-references are reproduced
 * exactly as written rather than silently corrected: these are operative terms,
 * and quietly repointing a reference changes what the document says.
 */
export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  effectiveDate: null,
  lastUpdated: null,
  sections: [
    {
      number: "1",
      blocks: [
        p("Nuci is a chat-based, AI-powered technical support assistant designed for use by employees of Customer. When an End User describes a technical issue, Nuci analyses the input and provides step-by-step diagnostic guidance intended to help the End User resolve the issue themselves. Where Nuci is unable to resolve an issue, it will facilitate escalation of the issue to Customer’s internal IT team."),
        p("Nuci is currently accessible only via web application. As of the Effective Date, Nuci does not autonomously execute fixes, scripts, or commands on any device, and does not request or require elevated system permissions, administrative access, or the ability to read system logs. Nuci’s role is limited to providing conversational, text-based guidance."),
        p("Customer’s designated Company Admin(s) have access to a reporting dashboard showing aggregate usage statistics. As of the Effective Date, the dashboard does not display individual End Users’ raw chat content or conversation transcripts to Company Admins."),
      ],
    },
    {
      number: "2",
      blocks: [
        p("The Service is currently offered exclusively on a business-to-business (B2B) basis to Customers acting in the course of their trade, business, or profession, and to their authorised End Users. Individual consumers may not independently register for or use the Service at this time."),
        p("Should ILIAC in the future make the Service, or any part of it, available directly to individual consumers, such access will be conditioned on the individual being at least 18 years of age, and these Terms will be updated accordingly prior to such launch."),
        p("The Service is not directed at, and may not be used by, anyone under the age of 18. ILIAC does not knowingly permit use of the Service by minors."),
        p("You may not access or use the Service if you are located in, or are a national or resident of, any country subject to comprehensive trade sanctions administered by the Federal Republic of Nigeria or other applicable authorities, or if you are listed on any applicable restricted-party or denied-persons list."),
      ],
    },
    {
      number: "3",
      blocks: [
        p("End Users register for the Service using a valid work email address associated with Customer. Registrations are subject to approval by Customer’s Company Admin (or by ILIAC where no Company Admin has yet been designated) before access is granted."),
        p("Authentication is currently performed via email and password. Each End User is responsible for maintaining the confidentiality of their login credentials and for all activity that occurs under their account. End Users must notify ILIAC promptly at legal@iliac.xyz if they suspect unauthorised access to their account."),
        p("Company Admins are responsible for managing End User access within Customer’s organisation, including the timely removal of End Users who are no longer authorised to use the Service (for example, upon an employee’s departure from Customer)."),
        p("ILIAC is not responsible for any loss or damage arising from Customer’s or an End User’s failure to safeguard login credentials or to promptly deprovision former employees."),
      ],
    },
    {
      number: "6",
      blocks: [
        p("ILIAC may, at its discretion, offer Customer a free trial or pilot period during which the Service (or a specified tier of the Service) is made available at no charge for a defined duration (a “Trial”)."),
        p("At the end of a Trial, Customer may elect to (a) continue using any free or limited tier of the Service that ILIAC then makes generally available, or (b) upgrade to a paid subscription tier by agreeing to the applicable fees. Access does not automatically convert to a paid subscription, and Customer will not be charged without first agreeing to paid terms."),
        p("ILIAC may modify, suspend, or terminate a Trial, or a Customer’s participation in it, at any time and for any reason, including at the end of the trial period, without liability, except as set out in Section 19 (Limitation of Liability)."),
      ],
    },
    {
      number: "7",
      blocks: [
        p("Customer is the contracting party under these Terms and is responsible for its End Users’ compliance with these Terms. Customer represents that it has all necessary rights and authority to permit its End Users to use the Service and to submit Customer Data to the Service."),
        p("Customer is responsible for ensuring that its End Users are informed of, and agree to comply with, these Terms and Customer’s own internal policies regarding acceptable use of the Service, including the restrictions in Section 9 (Acceptable Use Policy)."),
        p("Nothing in these Terms creates any contractual relationship between ILIAC and an individual End User distinct from Customer’s account; ILIAC’s relationship with End Users is solely as users authorised under Customer’s account."),
      ],
    },
    {
      number: "8",
      heading: "Acceptable Use Policy",
      blocks: [
        p("Customer and its End Users must not, and must not permit any third party to:"),
        ul(
          "Reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code, underlying models, system prompts, or architecture of Nuci;",
          "Use the Service to develop, train, or improve a product or service that competes with Nuci;",
          "Submit malicious code, scripts, or content to Nuci, or attempt to use Nuci to generate, test, or deploy malware, exploits, or other harmful code;",
          "Upload, submit, or transmit any content that is unlawful, infringing, defamatory, or that violates the rights of any third party;",
          "Attempt to interfere with, overload, or disrupt the Service, including through excessive automated requests or attempts to circumvent rate limits;",
          "Impersonate any person or entity, or misrepresent an affiliation with any person or entity;",
          "Attempt to gain unauthorised access to the Service, other End Users’ accounts, or ILIAC’s systems.",
        ),
        p("Nuci does not currently support the upload of files, screenshots, system logs, or similar attachments; interaction with Nuci is limited to text-based chat."),
        sub("Sensitive information"),
        p("End Users must not enter passwords, API keys, access tokens, credentials, or customer personally identifiable information (PII) into the Nuci chat interface. Nuci is a diagnostic assistant, not a secure credential vault or PII processing tool, and any such information voluntarily entered by an End User is entered at Customer’s own risk. Customer is responsible for training its End Users on this restriction."),
        p("ILIAC may suspend or terminate access for any Customer or End User that violates this Acceptable Use Policy, in accordance with Section 21 (Term and Termination)."),
      ],
    },
    {
      number: "9.1",
      blocks: [
        p("Nuci’s Output is generated using artificial intelligence, including third-party large language models. AI-generated Output may be incomplete, inaccurate, outdated, or inapplicable to Customer’s specific environment, and may occasionally be entirely incorrect (commonly referred to as a “hallucination”). Output is provided for general guidance and troubleshooting assistance only and does not constitute a guaranteed diagnosis, fix, or professional advice of any kind."),
      ],
    },
    {
      number: "9.2",
      blocks: [
        p("ILIAC does not warrant or guarantee that Nuci will successfully identify, diagnose, or resolve any technical issue. Human IT escalation remains available at all times specifically because Nuci’s guidance is not guaranteed to be the final word on any issue, and Customer and its End Users should treat escalation as a normal and expected part of using the Service, not as a failure of it."),
      ],
    },
    {
      number: "9.3",
      blocks: [
        p("Nuci must not be used as the sole or final method of resolving issues affecting mission-critical, production, safety-related, or otherwise high-stakes systems, without independent verification by qualified personnel before any guidance is acted upon in such an environment."),
      ],
    },
    {
      number: "9.4",
      blocks: [
        p("Because Nuci provides guidance rather than performing actions itself, any step suggested by Nuci is carried out by the End User. ILIAC is not liable for any damage to devices, systems, or software, or for any loss of data, downtime, or other harm resulting from an End User following Nuci’s guidance, except to the extent such damage or loss is caused by ILIAC’s gross negligence or wilful misconduct. End Users are encouraged to back up important data and to exercise their own judgment, particularly before performing any irreversible action."),
      ],
    },
    {
      number: "9.5",
      blocks: [
        p("Nuci’s guidance may reference third-party software, operating systems, or hardware. ILIAC is not affiliated with, and does not warrant, endorse, or accept responsibility for, any third-party software or systems referenced in Nuci’s Output."),
      ],
    },
    {
      number: "10",
      blocks: [
        p("As between the parties, ILIAC owns all right, title, and interest in and to the Service, including Nuci’s software, underlying AI models and system prompts, Output (excluding Customer Data contained within it), documentation, and all associated trademarks, logos, and branding (collectively, “ILIAC IP”). Subject to Customer’s compliance with these Terms, ILIAC grants Customer a limited, non-exclusive, non-transferable, revocable licence to access and use the Service during the applicable subscription term, solely for Customer’s internal business purposes."),
        p("No rights are granted to Customer or any End User other than those expressly set out in these Terms. Customer must not use ILIAC’s name, logos, or trademarks without ILIAC’s prior written consent, except as reasonably necessary to use the Service as permitted."),
        p("The Service may incorporate third-party open-source software components, which are licensed to ILIAC (and, where applicable, sublicensed to Customer) under their own respective open-source licence terms."),
        sub("Customer references"),
        p("ILIAC may wish to identify Customer as a user of the Service (including in marketing materials or case studies) using Customer’s name and logo, but will only do so with Customer’s prior written consent obtained on a case-by-case basis."),
      ],
    },
    {
      number: "11",
      blocks: [
        p("As between the parties, Customer owns and retains all right, title, and interest in and to Customer Data. Customer grants ILIAC a limited, non-exclusive licence to access, process, store, and use Customer Data solely as necessary to provide, maintain, secure, and improve the Service, and to comply with applicable law."),
        sub("AI model training"),
        p("As of the Effective Date, ILIAC does not use Customer Data to train or fine-tune any AI model, whether operated by ILIAC or a third-party provider. Should this change in the future, ILIAC will provide advance notice and will not use Customer Data for model training purposes without Customer’s opt-in consent."),
        p("Upon termination or expiry of Customer’s subscription, ILIAC will delete Customer Data within ninety (90) days, except to the extent retention is required by applicable law or as set out in the Privacy Policy. Further detail on data handling, retention, and international transfer is set out in ILIAC’s Privacy Policy, which is incorporated into these Terms by reference."),
      ],
    },
    {
      number: "12",
      blocks: [
        p("If Customer or an End User submits feedback, suggestions, or ideas about the Service to ILIAC, ILIAC may use, modify, and incorporate that feedback into the Service without restriction, compensation, or attribution, and without any obligation to Customer or the End User providing it."),
      ],
    },
    {
      number: "13",
      blocks: [
        p("The Service does not currently offer third-party integrations (such as ticketing systems, messaging platforms, or single sign-on providers) as a generally available feature. Where ILIAC makes such integrations available in the future, use of them may be subject to additional terms, including those of the relevant third-party provider, and ILIAC is not responsible for the acts, omissions, or availability of third-party services that Customer chooses to connect to the Service."),
      ],
    },
    {
      number: "14",
      blocks: [
        p("ILIAC does not currently offer a public or developer-facing API for third parties to build upon. Should ILIAC introduce API access in the future, such access will be governed by separate API terms of use, including applicable rate limits, authentication requirements, and acceptable use restrictions."),
      ],
    },
    {
      number: "14.1",
      blocks: [
        p("ILIAC will use commercially reasonable efforts to make the Service available and to maintain its performance, but does not guarantee that the Service will be uninterrupted, error-free, or available at all times. The Service may be temporarily unavailable for scheduled maintenance (which ILIAC will endeavour to provide reasonable advance notice of, where practicable) or due to factors outside ILIAC’s reasonable control."),
      ],
    },
    {
      number: "14.2",
      blocks: [
        p("ILIAC may from time to time make beta, preview, or experimental features available (“Beta Features”). Beta Features are provided “as is,” without warranty of any kind, may be modified or discontinued at any time without notice, and may be less reliable than generally available features. Section 19 (Limitation of Liability) applies with full force to Beta Features."),
      ],
    },
    {
      number: "15",
      blocks: [
        p("Each party agrees to protect the other party’s Confidential Information using at least the same degree of care it uses to protect its own confidential information of a similar nature, and not less than a reasonable degree of care, and to use such Confidential Information only as necessary to perform its obligations or exercise its rights under these Terms. This obligation does not apply to information that is or becomes publicly available through no fault of the receiving party, was rightfully known to the receiving party prior to disclosure, or is independently developed without reference to the disclosing party’s Confidential Information."),
      ],
    },
    {
      number: "16",
      blocks: [
        p("ILIAC processes Customer Data, including personal data of End Users, in accordance with its Privacy Policy and applicable data protection law, including the Nigeria Data Protection Act and the Nigeria Data Protection Regulation (“NDPR”)."),
        p("For the purposes of applicable data protection law, ILIAC acts as a data processor (or equivalent role) with respect to personal data submitted by Customer’s End Users in the course of using the Service, and Customer (as the employer of its End Users) acts as the data controller. ILIAC will:"),
        ul(
          "process personal data only as necessary to provide the Service and in accordance with Customer’s instructions as reflected in these Terms;",
          "maintain appropriate technical and organisational measures designed to protect personal data, as further described in the Privacy Policy;",
          "engage Sub-processors only as necessary to provide the Service, and remain responsible for their compliance with data protection obligations substantially equivalent to those set out here;",
          "notify Customer without undue delay upon becoming aware of a confirmed personal data breach affecting Customer Data.",
        ),
      ],
    },
    {
      number: "17",
      heading: "Limitation of Liability",
      blocks: [
        p("To the fullest extent permitted by applicable law, in no event will either party be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or business opportunity, arising out of or in connection with these Terms or the Service, even if advised of the possibility of such damages."),
        p("To the fullest extent permitted by applicable law, ILIAC’s total aggregate liability arising out of or in connection with these Terms or the Service will not exceed the greater of: (a) the total fees paid by Customer to ILIAC in the twelve (12) months immediately preceding the event giving rise to the claim; or (b) 50,000 (fifty thousand Naira)."),
        p("The limitations in this Section 19 do not apply to: (a) either party’s gross negligence or wilful misconduct; (b) a party’s breach of its confidentiality obligations under Section 17; (c) a party’s indemnification obligations under Section 20; or (d) Customer’s payment obligations."),
      ],
    },
    {
      number: "18",
      heading: "Indemnification",
      blocks: [
        p("Customer agrees to indemnify, defend, and hold harmless ILIAC from and against any third-party claims, damages, liabilities, and reasonable expenses (including legal fees) arising out of: (a) Customer’s or its End Users’ breach of these Terms, including the Acceptable Use Policy; (b) Customer Data, including any claim that Customer Data infringes or misappropriates a third party’s rights or violates applicable law; or (c) Customer’s or an End User’s misuse of the Service."),
        p("ILIAC agrees to indemnify, defend, and hold harmless Customer from and against any third-party claims, damages, liabilities, and reasonable expenses (including legal fees) arising out of a claim that the Service, as provided by ILIAC and used in accordance with these Terms, infringes a third party’s intellectual property rights, subject to Customer providing prompt written notice and reasonable cooperation."),
      ],
    },
    {
      number: "19",
      heading: "Term and Termination",
      blocks: [
        p("These Terms remain in effect for as long as Customer maintains an active account or subscription, unless terminated earlier in accordance with this Section."),
        p("Customer may terminate these Terms at any time by ceasing use of the Service and providing written notice to support@iliac.xyz, subject to any minimum term or notice period specified in an applicable order form or the Subscriptions and Fees section once completed."),
        p("ILIAC may suspend or terminate Customer’s or an End User’s access to the Service, in whole or in part, if: (a) Customer or an End User materially breaches these Terms, including the Acceptable Use Policy, and fails to cure such breach within a reasonable period after notice (where curable); (b) required to do so by law; or (c) continued provision of the Service would expose ILIAC to material legal or security risk."),
        p("Upon termination, Customer’s and its End Users’ right to access the Service ceases immediately. Customer Data will be handled in accordance with Section 12 (Customer Data) and the Privacy Policy. Sections that by their nature should survive termination — including Intellectual Property, Confidentiality, Limitation of Liability, Indemnification, and Governing Law — will survive."),
      ],
    },
    {
      number: "20",
      heading: "Governing Law",
      blocks: [
        p("These Terms are governed by, and construed in accordance with, the laws of the Federal Republic of Nigeria, without regard to conflict-of-laws principles."),
        p("The parties will first attempt in good faith to resolve any dispute arising out of or relating to these Terms through the Lagos Multi-Door Courthouse (LMDC), or a similar mediation or alternative dispute resolution mechanism. If a dispute is not resolved within a reasonable period through such process, it will be referred to and finally resolved by arbitration in Lagos, Nigeria, in accordance with the Arbitration and Mediation Act (or successor legislation), and the courts of Lagos State will have exclusive jurisdiction over any matter not subject to arbitration."),
      ],
    },
    {
      number: "21.1",
      blocks: [
        p("ILIAC may update these Terms from time to time. Where changes are material, ILIAC will provide reasonable advance notice (such as by email to Company Admins or an in-product notice) before the changes take effect. Continued use of the Service after the effective date of updated Terms constitutes acceptance."),
      ],
    },
    {
      number: "21.2",
      blocks: [
        p("Neither party may assign these Terms without the other party’s prior written consent, except that either party may assign these Terms in connection with a merger, acquisition, or sale of substantially all of its assets."),
      ],
    },
    {
      number: "21.3",
      blocks: [
        p("Neither party will be liable for any failure or delay in performance resulting from circumstances beyond its reasonable control, including natural disasters, internet or telecommunications failures, power outages, or acts of government."),
      ],
    },
    {
      number: "21.4",
      blocks: [
        p("If any provision of these Terms is held unenforceable, the remaining provisions will continue in full force and effect, and the unenforceable provision will be modified to the minimum extent necessary to make it enforceable."),
      ],
    },
    {
      number: "21.5",
      blocks: [
        p("These Terms, together with the Privacy Policy and any applicable order form or pilot agreement, constitute the entire agreement between the parties regarding the Service and supersede all prior agreements or understandings on the subject."),
      ],
    },
  ],
};
