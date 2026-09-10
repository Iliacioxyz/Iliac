import { p, sub, ul, type LegalDocument } from "@/lib/legal/types";

/**
 * Transcribed from "Nuci Privacy Policy.pdf" as supplied.
 *
 * Numbering note: the source runs 1 to 19, then 29, then 20 to 27. Section 29
 * is printed where it appears in the source because Section 10.3 refers to
 * "Section 29 (Your Privacy Rights)". Moving or renumbering it would break
 * that reference.
 */
export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  effectiveDate: null,
  lastUpdated: null,
  sections: [
    {
      number: "1",
      blocks: [
        p("This Privacy Policy applies to personal data processed by ILIAC in connection with:"),
        ul(
          "the Nuci web application and any associated mobile, desktop or agent-based software distributed by ILIAC;",
          "accounts created by Enterprise Customers and the individual employees or personnel (“Users”) to whom those Enterprise Customers grant access;",
          "communications between ILIAC and Users, prospective customers, Enterprise Customers and website visitors; and",
          "the Nuci website, to the extent it collects personal data.",
        ),
        p("This Privacy Policy does not apply to third-party websites, applications or services that Nuci may link to or interoperate with, which are governed by their own privacy notices. It also does not apply to personal data that ILIAC processes in contexts unrelated to Nuci, such as personal data relating to ILIAC’s own employees, contractors or job applicants, which is addressed in separate internal policies."),
      ],
    },
    {
      number: "2",
      blocks: [
        p("Nuci is a web-based, AI-powered enterprise IT-support platform. It is designed primarily for use by businesses and other organizations (Enterprise Customers), which create accounts for their employees and personnel (Users). Nuci is not, at this time, marketed or offered as a direct-to-consumer product."),
        p("Nuci helps Users diagnose and troubleshoot technical and information-technology problems. Depending on the functionality enabled by a User’s organization, Nuci may:"),
        ul(
          "engage in a conversational, chat-based interaction with the User to understand a reported technical issue;",
          "analyze information provided by the User, and, where technically applicable, diagnostic or device information, to identify likely causes of the issue;",
          "guide the User step-by-step through troubleshooting actions intended to resolve the issue; and",
          "where the issue cannot be resolved through self-service troubleshooting, offer the User the option to escalate the matter to a human support function.",
        ),
        p("Nuci is a troubleshooting and IT-support tool. It is not a substitute for professional IT, cybersecurity, legal, medical, financial or other professional advice, and it does not guarantee that any technical issue will be resolved. Users should exercise their own judgment, and consult qualified professionals or their organization’s designated personnel, in respect of matters of significant technical, security, legal or business consequence."),
      ],
    },
    {
      number: "3",
      blocks: [
        p("We collect personal data that is necessary, relevant and proportionate to providing, securing, supporting and improving Nuci. The specific categories of personal data collected in respect of a given User will depend on how that User’s organization has configured and enabled Nuci’s functionality, and on how the User interacts with the Service. We do not collect every category described below in respect of every User or every deployment of Nuci."),
      ],
    },
    {
      number: "3.1",
      blocks: [
        p("When an Enterprise Customer provides a Nuci account for a User, or when a User registers for or accesses Nuci, we may collect:"),
        ul(
          "Full name — to identify the User within the platform and in communications and support records;",
          "Work email address — used as the User’s account identifier, for authentication, and for service and support communications;",
          "Password (or credential/authentication data) — stored in hashed form, used to authenticate the User’s access to their account;",
          "Company size / number of employees — collected at the organizational (Enterprise Customer) level, generally in connection with account setup, tiering and billing, and not typically personal data about an identified individual, though it may be provided by an individual administrator.",
        ),
      ],
    },
    {
      number: "3.2",
      heading: "Technical and Device Information",
      blocks: [
        p("Depending on how you use Nuci and the troubleshooting functionality enabled by your organization, we may collect technical and device information that is necessary to diagnose issues, provide support, secure the Service, and understand how Nuci is used. This may include, where technically applicable and where reasonably necessary for the purpose at hand:"),
        ul(
          "IP address; browser type and version; operating system; device type and model; hardware specifications; device identifiers;",
          "network information and network diagnostics relevant to a reported connectivity issue;",
          "installed software, system configuration, application information and software versions relevant to a reported issue;",
          "error logs, crash reports, diagnostic information, system status information, and device performance information;",
          "security-related technical information relevant to diagnosing or resolving a reported security or access issue;",
          "screenshots, uploaded technical information, and file names or metadata, where a User voluntarily provides these to illustrate or support a troubleshooting request;",
          "other diagnostic information reasonably generated during the course of troubleshooting a specific reported issue.",
        ),
        p("We only seek to collect technical and device information that is necessary, relevant and proportionate to the troubleshooting, security, or support purpose for which it is collected. Where a User uses an ILIAC-provided local support agent or application with elevated system access (for example, to read system event logs for diagnostic purposes), that functionality operates under the human-in-the-loop consent framework."),
      ],
    },
    {
      number: "3.3",
      blocks: [p("Nuci stores the conversations Users have with the platform.")],
    },
    {
      number: "3.4",
      blocks: [
        p("We collect information about how Nuci is used, including features accessed, session timing and duration, support-request volumes, resolution outcomes, and escalation rates, in order to operate, secure and improve the Service and to provide reporting to Enterprise Customer administrators."),
      ],
    },
    {
      number: "3.5",
      blocks: [
        p("Where Nuci is a paid service, payment-related information (such as billing contact details and transaction records) may be collected in connection with subscription billing. Card and other sensitive payment credentials are intended to be processed directly by a third-party payment processor rather than stored by ILIAC."),
      ],
    },
    {
      number: "3.6",
      blocks: [
        p("If you contact us, including through support@iliac.xyz, we collect the information you provide in that communication, together with records of our correspondence."),
      ],
    },
    {
      number: "4",
      blocks: [
        p("We collect personal data from the following sources:"),
        ul(
          "Directly from Enterprise Customers, when an administrator provisions accounts for Users or provides company-level information during onboarding;",
          "Directly from Users, when they register, log in, submit a support request, converse with Nuci, upload files or screenshots, or otherwise interact with the Service;",
          "Automatically, through the operation of the Service itself (for example, technical and diagnostic information generated during a troubleshooting session, or usage and analytics information generated as Nuci is used).",
        ),
      ],
    },
    {
      number: "5",
      blocks: [
        p("We use personal data for the following purposes:"),
        ul(
          "creating, administering and authenticating accounts;",
          "providing Nuci, including its chat-based troubleshooting functionality;",
          "diagnosing technical issues and generating troubleshooting recommendations;",
          "managing and tracking support requests and their resolution;",
          "operating the human Escalation process;",
          "communicating with Users and Enterprise Customer administrators about the Service, including service notices, security notices, and responses to inquiries;",
          "providing customer support;",
          "providing Enterprise Customer administrators with account-level administration tools, analytics and reporting, as described;",
          "usage analytics and product analytics, to understand how Nuci is used;",
          "product improvement and service development, including improving troubleshooting accuracy and the underlying AI systems;",
          "security, fraud prevention and abuse prevention;",
          "debugging and system monitoring;",
          "legal compliance, including compliance with applicable data-protection, tax, corporate and sector-specific laws;",
          "enforcement of our Terms of Service and other applicable agreements;",
          "business continuity, including backups and disaster recovery;",
          "evaluating and, where applicable, carrying out corporate transactions;",
          "responding to lawful requests from courts, regulators and law-enforcement authorities; and",
          "protecting the rights, property, safety and security of ILIAC, our Users, Enterprise Customers and third parties.",
        ),
      ],
    },
    {
      number: "6",
      blocks: [
        p("Personal data collected by Nuci is processed fairly, transparently, and only for legitimate and clearly stated purposes. We collect and use Personal Data only when necessary to provide, improve, and secure our services."),
      ],
    },
    {
      number: "7",
      blocks: [
        p("Nuci uses artificial intelligence and machine learning technology to interpret a User’s description of a technical problem, ask clarifying questions, propose troubleshooting steps, and, where the Service and the User’s organization support it, take or propose limited technical actions with the User’s consent."),
        p("To do this, Nuci transmits relevant portions of a User’s conversation and, where applicable, associated technical or diagnostic information, to one or more third-party AI model providers that process this information on ILIAC’s behalf in order to generate a response. Nuci’s architecture is built so that the underlying AI provider can, in principle, be changed or supplemented over time."),
        p("Where Nuci’s functionality extends to taking system-level diagnostic or remedial actions on a User’s device (for example, reading system event logs, or executing a proposed remediation script), such actions are governed by a human-in-the-loop consent framework: the User is presented with the proposed action and must affirmatively approve it before it is carried out, and, where applicable, the action can be reviewed or reversed. Nuci is not designed to take autonomous, irreversible technical actions on a User’s systems without the User’s specific approval at that step."),
      ],
    },
    {
      number: "8",
      blocks: [
        p("Nuci stores the conversations Users have with the platform, together with associated support-request records. Depending on the content of a given conversation, this may include:"),
        ul(
          "the questions and descriptions of technical problems submitted by the User;",
          "troubleshooting steps already attempted by the User, and the steps proposed by Nuci;",
          "device, technical and diagnostic information submitted or generated in the course of the conversation;",
          "the support history associated with the User’s account, including prior tickets and their resolution status; and",
          "any other information the User voluntarily provides in the course of the conversation.",
        ),
        p("Users should avoid submitting personal data about third parties, or sensitive personal data of any kind, that is not necessary to describe or resolve the technical issue at hand."),
      ],
    },
    {
      number: "8.1",
      blocks: [
        p("We may use stored conversations for the following purposes:"),
        ul(
          "providing and operating the Nuci Service, including maintaining a record of a User’s support history so that Nuci and, where escalated, human support staff can pick up an issue with context;",
          "diagnosing technical problems and generating troubleshooting recommendations;",
          "improving Nuci’s troubleshooting capabilities, service quality, and product development generally;",
          "security and abuse prevention, including detecting misuse of the Service;",
          "analytics, including understanding common issue types, resolution rates and escalation patterns;",
          "internal research and development; and",
          "training or otherwise improving the AI systems used to power Nuci, where legally permissible and where ILIAC has operationally implemented such use.",
        ),
        sub("Important disclosure regarding notice at the point of use."),
        p("ILIAC does not currently provide a User with a separate, individualized notification each time a specific conversation is used for service improvement or AI/model-improvement purposes. This Privacy Policy is intended to serve as the mechanism by which this processing is disclosed to Users on an ongoing basis. ILIAC does not conceal or selectively omit this processing from this Privacy Policy."),
      ],
    },
    {
      number: "8.2",
      blocks: [
        p("We rely on the following bases, as applicable, for the processing described above:"),
        ul(
          "Necessary to provide the Service — storing and using a conversation to generate a response, maintain support history, and enable Escalation is necessary to perform our contract with the Enterprise Customer and to deliver the functionality the User is actively using.",
          "Legitimate interests — using conversation data in de-identified, aggregated or otherwise risk-reduced form for service-quality improvement, troubleshooting-capability improvement, product development, security and analytics is carried out on the basis of ILIAC’s legitimate interest in operating and improving a safe, effective and secure Service, balanced against the interests and reasonable expectations of Users.",
          "Consent — where applicable law requires consent for a particular use (for example, certain uses of conversation content for AI/model training in jurisdictions that require opt-in consent for such use, or the Escalation of a specific conversation to a human recipient), we will obtain that consent through the applicable mechanism before undertaking that specific processing.",
          "Legal obligation — where retention or disclosure of conversation data is required to comply with applicable law, regulatory requests, or legal process.",
        ),
        sub("Objecting to processing / withdrawing consent."),
        p("Where processing of conversation data is based on ILIAC’s legitimate interests, Users or Enterprise Customers may contact support@iliac.xyz to object to that processing, and we will consider the request in light of applicable law, which may permit us to continue processing where we have compelling legitimate grounds that override the individual’s interests, or where necessary to establish, exercise or defend legal claims. Where processing is based on consent (such as a specific Escalation), that consent may be withdrawn at the point. Withdrawing consent does not affect the lawfulness of processing carried out before the withdrawal, and may limit or prevent ILIAC’s ability to provide the specific functionality that depended on that consent."),
      ],
    },
    {
      number: "9",
      blocks: [
        p("Nuci may collect technical and device information that is necessary to diagnose and resolve a reported issue, secure the Service, and understand Service performance. We collect this information on a purpose-limited basis: information is collected because it is relevant to a specific troubleshooting session, a security or performance concern, or a User-initiated diagnostic action, rather than as a matter of continuous, unbounded system surveillance."),
        p("ILIAC is not able, at the point of publication of this Privacy Policy, to represent that every category is collected for every deployment of Nuci; the categories actually collected in a given deployment will depend on the functionality enabled by the relevant Enterprise Customer and the nature of the issue being diagnosed."),
      ],
    },
    {
      number: "10",
      blocks: [
        p("A central feature of Nuci is its human Escalation pathway. Nuci is designed so that, where it cannot appropriately resolve a technical problem through self-service troubleshooting, the User may be offered the option to escalate the issue to a human support function, rather than being left without a path to resolution."),
      ],
    },
    {
      number: "10.1",
      blocks: [
        p("Escalation is the process by which an unresolved issue, together with relevant supporting information, is transferred from the Nuci AI system to a human recipient for further handling. Depending on the Enterprise Customer’s configuration:"),
        ul(
          "where the Enterprise Customer has its own internal IT team, the matter may be escalated to that internal IT team; or",
          "where the Enterprise Customer does not have an internal IT team, the matter may be escalated to ILIAC’s own human support personnel.",
        ),
      ],
    },
    {
      number: "10.2",
      blocks: [
        p("Where a User chooses to escalate an issue, the following categories of information may be transferred to the receiving human support function:"),
        ul(
          "the User’s name;",
          "the User’s company/Enterprise Customer;",
          "the User’s work email address;",
          "the support ticket and a description of the problem;",
          "troubleshooting steps already attempted;",
          "relevant device information; and",
          "relevant technical or diagnostic information gathered during the troubleshooting session.",
        ),
        p("This information is shared because it is necessary for the receiving human support function to understand and act on the issue without requiring the User to repeat information already provided to Nuci."),
      ],
    },
    {
      number: "10.3",
      blocks: [
        p("Escalation requires the User’s consent. Nuci will not transfer a User’s conversation and associated information to a human recipient (whether the Enterprise Customer’s internal IT team or ILIAC) unless the User affirmatively agrees to the Escalation at the point it is offered. If a User declines Escalation, the conversation is not transferred to the human recipient on that basis, and the User’s issue remains unresolved through that channel (the User may, of course, seek assistance through other means available to them, such as directly contacting their organization’s IT function)."),
        p("A User may withdraw consent to a proposed Escalation at any point before the transfer of information to the human recipient is completed, by declining or cancelling the Escalation prompt. Once information has been transferred to the receiving human support function as a result of a completed Escalation, withdrawal of consent does not retroactively undo that transfer, though the User may separately request deletion or correction of the transferred information from the recipient, subject to Section 29 (Your Privacy Rights) and Section 6."),
      ],
    },
    {
      number: "10.4",
      blocks: [
        p("Following an Escalation, ILIAC and/or the Enterprise Customer’s internal IT team (as applicable) may retain a record of the escalated issue, the information transferred, and its resolution, for the purposes of providing support, maintaining a support history, addressing any follow-up issues, and for the retention purposes."),
      ],
    },
    {
      number: "11",
      blocks: [
        p("Nuci’s customer is, in the ordinary case, an organization (the Enterprise Customer), which creates accounts for its employees or other authorized personnel (Users). This structure means that, for many categories of data, there are two organizations with a relationship to a User’s personal data: ILIAC (which operates the Service) and the Enterprise Customer (which employs or engages the User and has authorized the User’s access to Nuci)."),
        p("Enterprise Customer administrators may, through Nuci’s administrative dashboard, have access to:"),
        ul(
          "employee names and account/roster information;",
          "usage information (for example, which Users are actively using the Service);",
          "aggregate analytics (issue volumes, categories, and trends);",
          "support metrics (ticket counts, average handling information);",
          "resolution metrics (rates and timeliness of issue resolution); and",
          "escalation metrics (rates and categories of escalated issues).",
        ),
        p("At present, Enterprise Customer administrators are provided with analytics and aggregate/metric-level information rather than the contents of an individual User’s conversations. Administrators do not, as a matter of current Nuci functionality, have standing access to read the substantive content of a specific User’s troubleshooting conversation with Nuci, unless and until that issue is escalated to the Enterprise Customer’s own internal IT team, in which case the internal IT team receives the specific Escalation-related information for that escalated matter. This may change if Nuci’s functionality, or the contractual arrangement with a given Enterprise Customer, later provides for broader administrator access to conversation content (for example, for audit, compliance or security purposes); any such change would be reflected in the applicable product functionality and contractual terms, and, where required by applicable law, in an updated version of this Privacy Policy."),
        p("Depending on the administrative controls made available in the Service, Enterprise Customer administrators may also be able to deactivate or delete a User’s account and associated data through administrative controls, subject to the retention and legal obligations."),
      ],
    },
    {
      number: "12",
      blocks: [
        p("ILIAC does not sell personal data. We do not disclose personal data to third parties in exchange for monetary or other valuable consideration in a manner that would constitute a “sale” under applicable law."),
        p("We may share personal data in the following circumstances:"),
        ul(
          "With the Enterprise Customer’s internal IT team, where a User has requested and consented to Escalation;",
          "With ILIAC’s own human support personnel, where a User has requested and consented to Escalation and the Enterprise Customer does not have an internal IT team;",
          "With service providers and Subprocessors that perform functions on ILIAC’s behalf in connection with operating Nuci, such as cloud hosting, AI model processing, security, analytics, email delivery, customer support tooling, and payment processing;",
          "With professional advisers, such as lawyers, auditors and accountants, on a confidential, need-to-know basis;",
          "With regulators and legal or governmental authorities, where required to comply with applicable law, legal process, or a lawful request;",
          "In connection with a corporate transaction; and",
          "With the Enterprise Customer, in the form of the analytics and administrative information.",
        ),
        p("We require that third-party service providers and Subprocessors that process personal data on our behalf be contractually bound to confidentiality, security and data-protection obligations appropriate to the nature of the personal data and processing involved, and to use the personal data only for the purposes for which it was disclosed to them."),
      ],
    },
    {
      number: "13",
      blocks: [
        p("We retain Personal Data for as long as necessary to fulfil the purposes for which it was collected, including to provide and improve the Service, maintain security, resolve disputes, support legitimate business purposes, or for other necessary purposes. Personal Data may be retained for an appropriate period based on our operational, business, or other legitimate needs."),
      ],
    },
    {
      number: "14",
      blocks: [
        p("ILIAC uses secure cloud infrastructure to host and operate Nuci and seeks to implement technical and organizational measures designed to protect the confidentiality, integrity and availability of personal data against unauthorized access, loss, misuse, alteration or destruction, taking into account the nature, scope and sensitivity of the personal data processed and the risks involved."),
      ],
    },
    {
      number: "15",
      blocks: [
        p("In the event of a security incident involving Personal Data, ILIAC will take reasonable steps appropriate to the nature and severity of the incident to detect, contain, investigate, and remediate the incident, and will make any required notifications in accordance with applicable requirements."),
      ],
    },
    {
      number: "16",
      blocks: [
        p("ILIAC may, now or in the future, send marketing communications relating to Nuci, such as product updates, service announcements, newsletters, promotional communications, and beta/feature announcements. ILIAC does not currently represent that a marketing-communications program is fully operational; this section is included to describe how such communications will be handled once implemented."),
        p("Marketing communications are distinct from service or transactional communications (such as account notices, security notices, billing notices, and support correspondence), which we may send as necessary to operate the Service and are not considered marketing."),
        p("Where we send marketing communications, we will provide a means to unsubscribe or opt out (for example, an unsubscribe link in the relevant communication, or by contacting support@iliac.xyz), and will process such requests in accordance with applicable law."),
      ],
    },
    {
      number: "17",
      blocks: [
        p("Where Nuci is offered as a paid subscription, payment processing will generally be handled by Paystack or another third-party payment service provider designated by ILIAC, rather than being processed directly by ILIAC. Users may be required to provide certain payment or billing information to the applicable payment provider in order to complete a transaction. Such information may include payment card details, billing information, transaction details, and other information required to process or verify a payment. ILIAC does not intend to directly store or process Users’ full payment card details where payment processing is handled by the third-party provider. The collection, processing, storage, and security of payment information by the payment provider will be subject to that provider’s own terms and privacy practices. Users are encouraged to review the applicable payment provider’s policies before providing payment information."),
      ],
    },
    {
      number: "18",
      blocks: [
        p("Nuci is strictly intended for enterprise use by adult employees and other authorized personnel of Enterprise Customers, in a workplace IT-support context. Nuci is not designed, directed at, or knowingly offered to children."),
        p("We do not collect personal data from children through Nuci. If ILIAC becomes aware that it has inadvertently collected personal data from a child in a manner inconsistent with applicable law, it will take steps to delete that information."),
      ],
    },
    {
      number: "19",
      blocks: [
        p("Nuci is not designed to collect sensitive Personal Data, and Users should not submit sensitive Personal Data or Personal Data relating to third parties unless it is necessary for resolving a specific technical issue and the User is authorized to do so."),
        p("Users are solely responsible for reviewing any information, screenshots, files, or other content before submitting it to Nuci and ensuring that they have the necessary rights and permissions to share such information. Nuci shall not be responsible for any sensitive Personal Data or third-party Personal Data that a User voluntarily or inadvertently submits, including where such information is included in screenshots, files, descriptions, or other diagnostic materials."),
      ],
    },
    {
      number: "29",
      heading: "Your Privacy Rights",
      blocks: [
        p("You may have some or all of the following rights in respect of your personal data, subject to applicable exceptions and limitations:"),
        ul(
          "Right to be informed — to be told, in a clear and transparent manner, how your personal data is processed;",
          "Right of access — to request confirmation of whether we process your personal data, and to obtain a copy of it;",
          "Right to rectification — to request correction of inaccurate or incomplete personal data;",
          "Right to restrict processing — to request that we limit how we use your personal data in certain circumstances;",
          "Right to object — to object to certain processing, including processing based on legitimate interests;",
          "Right to data portability — to request your personal data in a structured, commonly used, machine-readable format, where applicable;",
          "Right to withdraw consent — where processing is based on consent, to withdraw that consent at any time, without affecting the lawfulness of processing carried out before the withdrawal;",
          "Rights relating to automated decision-making — to the extent applicable law grants rights in respect of solely automated decisions with legal or similarly significant effects, noting that Nuci is not designed to make such decisions; and",
          "Right to lodge a complaint — with the NDPC or another applicable supervisory authority.",
        ),
        p("These rights are not absolute and may be subject to exceptions and limitations under applicable law, including where the personal data in question relates primarily to your employer’s (the Enterprise Customer’s) own controller obligations, in which case we may direct you to raise the request with your organization in the first instance."),
      ],
    },
    {
      number: "20",
      blocks: [
        p("To exercise any of the rights, please send an email to support@iliac.xyz."),
        p("To help us process your request, please include:"),
        ul(
          "your full name and the email address associated with your Nuci account;",
          "your organization/Enterprise Customer, where applicable;",
          "a description of the right you wish to exercise and the personal data concerned; and",
          "any information that may help us verify your identity.",
        ),
      ],
    },
    {
      number: "20.1",
      blocks: [
        p("Before fulfilling a request, we may need to verify the identity of the requester, to protect against unauthorized access to or deletion of personal data. Depending on the nature of the request, we may ask for additional information to confirm your identity or your authority to act on behalf of another individual."),
      ],
    },
    {
      number: "20.2",
      blocks: [
        p("We aim to respond to verified requests within a reasonable time and in accordance with any timeframe required under applicable law."),
      ],
    },
    {
      number: "20.3",
      blocks: [
        p("We may decline or limit a request, in whole or in part, where permitted by applicable law — for example, where fulfilling the request would infringe the rights of another individual, where an exemption applies, where the request is manifestly unfounded or excessive, or where we are unable to verify the identity of the requester. Where we decline or limit a request, we will, where required by applicable law, explain the reason."),
      ],
    },
    {
      number: "20.4",
      blocks: [
        p("If you are not satisfied with our response to a request, you may ask us to review the response by replying to our correspondence. We will take reasonable steps to resolve and respond to your issues, where necessary."),
      ],
    },
    {
      number: "21",
      heading: "Enterprise Customer Responsibilities",
      blocks: [
        p("Because Nuci operates within an enterprise relationship, Enterprise Customers have their own responsibilities in respect of the personal data of their Users, including to:"),
        ul(
          "properly authorize and manage which employees or personnel are granted access to Nuci, and promptly deprovision access when appropriate;",
          "provide employees or personnel with any privacy notice required by applicable law regarding their organization’s own use of Nuci and processing of their personal data as an employer;",
          "use Nuci in compliance with applicable law and ILIAC’s Terms of Service;",
          "instruct their personnel not to upload or submit sensitive or otherwise unnecessary personal data to Nuci beyond what is required to resolve a technical issue;",
          "manage employee accounts and administrator permissions responsibly, including limiting administrative access to those who need it;",
          "ensure their personnel use the Service appropriately and in accordance with the Enterprise Customer’s own internal policies.",
        ),
      ],
    },
    {
      number: "22",
      blocks: [
        p("ILIAC may, in the future, be involved in a merger, acquisition, financing, restructuring, sale of assets, bankruptcy, or other corporate reorganization or transaction. In connection with any such transaction, personal data may be disclosed to, or transferred to, another entity, subject to applicable law and, where reasonably practicable, appropriate confidentiality and data-protection safeguards. Where such a transaction results in personal data being handled by a different entity under materially different terms, ILIAC will, where required by applicable law, provide notice of the change, including through an updated Privacy Policy."),
      ],
    },
    {
      number: "23",
      blocks: [
        p("Nuci uses artificial intelligence to analyze technical problems described by Users and to generate troubleshooting recommendations and, where enabled, proposed remedial actions. Users should be aware that:"),
        ul(
          "AI-generated troubleshooting recommendations may not always be correct or complete, and Users should exercise their own judgment and verify important recommendations, particularly before taking any action with material technical, security, financial or operational consequences;",
          "human escalation is available where Nuci’s automated troubleshooting does not resolve an issue; and",
          "where Nuci proposes to take a system-level technical action, that action is subject to a human-in-the-loop consent step requiring the User’s approval.",
        ),
        p("Nuci is not intended to, and does not, make automated decisions that produce legal effects concerning individuals or similarly significantly affect them. In particular, Nuci does not make automated decisions concerning an individual’s eligibility for employment, credit, insurance, healthcare, education, housing, or other comparable high-impact outcomes. Nuci’s function is limited to technical IT troubleshooting and support. If Nuci’s functionality is expanded in a way that could constitute automated decision-making with legal or similarly significant effects under applicable law, this Privacy Policy will need to be updated to reflect the applicable safeguards and data-subject rights."),
      ],
    },
    {
      number: "24",
      blocks: [
        p("ILIAC seeks to embed privacy considerations into the design and operation of Nuci, including through:"),
        ul(
          "data minimization — collecting only the categories of personal data, calibrated to what is necessary for the purpose at hand;",
          "purpose limitation — using personal data for the purposes they are meant to and not for materially incompatible purposes;",
          "access controls — limiting internal access to personal data;",
          "limited retention — working toward defined retention periods;",
          "security safeguards;",
          "respecting user rights;",
          "privacy review — considering privacy implications when developing new Nuci functionality, particularly functionality involving new categories of data collection or new AI capability.",
        ),
      ],
    },
    {
      number: "25",
      blocks: [
        p("If you have a concern or complaint about how ILIAC has handled your personal data, please contact us first at support@iliac.xyz, with the subject line “Privacy Complaint,” so that we can review and attempt to resolve the matter directly."),
      ],
    },
    {
      number: "26",
      blocks: [
        p("We may update this Privacy Policy from time to time to reflect changes in our practices, the Service, applicable law, or for other operational, legal or regulatory reasons. When we make changes, we will update the “Last Updated” date at the top of this Privacy Policy."),
        p("Where a change is material — for example, a change that expands the categories of personal data we collect, introduces a new purpose of processing, or otherwise meaningfully affects your rights — we will provide notice appropriate to the circumstances, which may include prominent notice on the Service, direct communication to Enterprise Customer administrators, or another mechanism reasonably designed to bring the change to affected individuals’ attention, in addition to updating this document. Your continued use of Nuci after a change takes effect constitutes acceptance of the updated Privacy Policy, to the extent permitted by applicable law."),
      ],
    },
    {
      number: "27",
      heading: "How to Contact Us",
      blocks: [
        p("If you have questions about this Privacy Policy or ILIAC’s data-protection practices, please contact us at:"),
        ul("Privacy / Data Protection Contact: support@iliac.xyz"),
      ],
    },
  ],
};
