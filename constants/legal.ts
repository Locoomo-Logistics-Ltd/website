/**
 * Verbatim legal copy for /terms and /privacy.
 * This text is authored by the business (and doubles as the ground truth
 * for what the product actually does — roles, tracking, cancellation
 * windows, etc.) — do not rewrite or "improve" it here. Update it only
 * when the source Terms of Service / Privacy Policy document changes.
 */

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDoc {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
}

export const TERMS_OF_SERVICE: LegalDoc = {
  title: "Terms of Service",
  effectiveDate: "22 August 2026",
  intro: [
    "These Terms of Service (“Terms”) govern your access to and use of the Locoomo application, website, and related services (together, the “App”), operated by Locoomo Ltd (“Locoomo,” “we,” “us”), a company registered in Nigeria under CAC number 8562367, with its registered address at 16 Ehighieda Street, off Ekosodin Road, Benin City, Edo State, Nigeria. By creating an account or otherwise using the App, you agree to these Terms. If you do not agree, do not use the App.",
  ],
  sections: [
    {
      heading: "1. Definitions",
      list: [
        "Consumer — a user who books deliveries through the App.",
        "Rider — a user who, after verification, transports parcels between Nodes.",
        "Node Operator — a user who operates a physical Node on the network.",
        "Node — a physical drop-off/collection location run by a Node Operator.",
        "Order — a single booked delivery, from creation through collection or cancellation.",
        "Handoff Code — the one-time numeric code used to verify each physical custody transfer of a parcel.",
        "Content — any information, images, or documents you submit through the App, including verification documents and parcel descriptions.",
      ],
    },
    {
      heading: "2. Eligibility",
      paragraphs: [
        "You must be at least 18 years old and capable of forming a binding contract under Nigerian law to use the App. By registering, you represent that the information you provide is accurate and that you meet these requirements. We do not currently verify age at registration.",
      ],
    },
    {
      heading: "3. Account Registration",
      paragraphs: [
        "Each role (Consumer, Rider, Node Operator) is self-registered using your name, email, phone number, and a password. Rider and Node Operator accounts additionally require a verification step — Rider identity/license information and a supporting document; Node Operator business details — which we review before granting full access. Admin accounts are provisioned only by invitation from an existing Admin. You may not register using another person’s identity or on behalf of a business you are not authorized to represent.",
      ],
    },
    {
      heading: "4. Account Responsibilities",
      paragraphs: [
        "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately at info@locoomo.com if you suspect unauthorized access. We are not liable for losses caused by your failure to safeguard your credentials.",
      ],
    },
    {
      heading: "5. User Roles & Permissions",
      list: [
        "Consumers can create and track their own deliveries, and see the status and route of their own orders only.",
        "Riders can view and accept available jobs, and see the information needed to complete a job — but never the receiver’s name, email, or phone.",
        "Node Operators can process handoffs and collections at their own Node, but never see a Rider’s personal identity — only the handoff code exchange.",
        "Admins have platform-wide visibility for approvals, disputes, pricing, and support, and must use that access only for legitimate operational reasons.",
      ],
    },
    {
      heading: "6. Acceptable Use",
      paragraphs: [
        "You agree to use the App only for its intended purpose — booking, fulfilling, or facilitating legitimate parcel deliveries — and in compliance with applicable Nigerian law.",
      ],
    },
    {
      heading: "7. Prohibited Activities",
      paragraphs: ["You must not:"],
      list: [
        "Ship or attempt to ship illegal, hazardous, prohibited, or dangerous items, including firearms, explosives, illicit drugs, and items prohibited under Nigerian customs or postal law;",
        "Misrepresent the contents, value, or size of a parcel;",
        "Share, sell, or misuse a handoff or collection code outside its intended purpose;",
        "Attempt to circumvent the App’s verification, payment, or approval processes;",
        "Use another user’s account or impersonate any person or business;",
        "Reverse-engineer, scrape, or interfere with the App’s normal operation; or",
        "Upload false, fraudulent, or misleading verification documents.",
      ],
    },
    {
      heading: "8. User Content",
      paragraphs: [
        "You retain ownership of Content you submit. By submitting it, you grant Locoomo a limited license to use, store, and share that Content strictly as needed to operate the App — for example, showing a parcel description to the Rider and Node Operators handling that specific order, or a verification document to the Admin reviewing your application. You are responsible for ensuring you have the right to submit any Content you upload.",
      ],
    },
    {
      heading: "9. Intellectual Property",
      paragraphs: [
        "The App, including its name, logo, design, and underlying software, is the property of Locoomo or its licensors. Nothing in these Terms grants you rights to Locoomo’s trademarks or branding beyond what is necessary to use the App as intended.",
      ],
    },
    {
      heading: "10. Third-Party Services",
      paragraphs: [
        "The App relies on Paystack for payment processing, Cloudinary for secure document storage, and Geoapify for maps and address lookup. Your use of features backed by these services is also subject to those providers’ own terms. We are not responsible for the availability or performance of third-party services outside our control.",
      ],
    },
    {
      heading: "11. Payments & Fees",
      paragraphs: [
        "Delivery fees are calculated at checkout and payable in full before a delivery is dispatched. Payment is processed by Paystack; Locoomo does not receive or store your card details.",
        "Refund & Cancellation Policy. Orders can be cancelled and refunded before the package is handed over to a Locoomo Pickup Station or Rider. Once the delivery is in transit, cancellation is no longer permitted. Refunds for eligible cancellations or failed deliveries will be processed to the original payment method within 5–10 business days.",
      ],
    },
    {
      heading: "12. Transactions Between Parties",
      paragraphs: [
        "Locoomo operates a technology platform connecting Consumers, Riders, and Node Operators. Riders and Node Operators are independent service providers operating on their own account and are not employees, agents, or representatives of Locoomo, except where expressly agreed otherwise in writing. Each Rider and Node Operator is responsible for determining how they perform their services, subject to Locoomo’s platform rules, safety, security, and service standards.",
      ],
    },
    {
      heading: "13. Service Availability",
      paragraphs: [
        "The App is provided on an ongoing basis but is not guaranteed to be available at all times. We may suspend access for maintenance, updates, or issues beyond our reasonable control.",
      ],
    },
    {
      heading: "14. Security",
      paragraphs: [
        "We use reasonable technical and organizational measures to protect your account and data, including signed, time-limited access to uploaded documents and encrypted transport for App traffic. No system is perfectly secure, and you are responsible for keeping your own device and credentials secure.",
      ],
    },
    {
      heading: "15. Account Suspension & Termination",
      paragraphs: [
        "We may suspend or terminate your account if you violate these Terms, provide false information during verification, or engage in fraudulent or unsafe conduct. You may stop using the App at any time — see our Privacy Policy for how to request account and data deletion.",
      ],
    },
    {
      heading: "16. Data and Privacy",
      paragraphs: [
        "Our collection and use of your personal data is described in our Privacy Policy, which forms part of these Terms.",
      ],
    },
    {
      heading: "17. Disclaimers",
      paragraphs: [
        "The App is provided “as is” and “as available.” We are not responsible for the accuracy of information provided by other users (for example, a parcel’s declared contents or a receiver’s details) or for the acts or omissions of independent Riders and Node Operators.",
      ],
    },
    {
      heading: "18. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by Nigerian law, Locoomo’s total aggregate liability arising out of or relating to your use of the App or any delivery arranged through the App shall not exceed the total delivery fees actually paid by you for the specific transaction giving rise to the claim. Locoomo shall not be liable for any indirect, incidental, special, consequential, or punitive loss, including loss of profits, revenue, business, goodwill, or anticipated savings. Nothing in these Terms excludes or limits any liability that cannot lawfully be excluded or limited under applicable Nigerian law.",
        "Package Loss or Damage. Where Locoomo is directly responsible for the loss or damage of a package while it is in Locoomo’s custody or under a delivery arranged through the Platform, Locoomo’s liability shall be limited to the applicable compensation limit stated in the relevant delivery terms, subject to any exclusions or limitations permitted by law.",
      ],
    },
    {
      heading: "19. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold Locoomo harmless from claims, losses, or damages arising from your violation of these Terms, misuse of the App, or the contents of a parcel you shipped or received.",
      ],
    },
    {
      heading: "20. Dispute Resolution & Governing Law",
      paragraphs: [
        "If a dispute arises, you agree to first contact Locoomo at info@locoomo.com and make a good-faith effort to resolve the dispute informally. These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute that cannot be resolved informally shall be subject to the exclusive jurisdiction of the competent courts of Lagos State, Nigeria.",
      ],
    },
    {
      heading: "21. Handoff & Collection Codes",
      paragraphs: [
        "The App verifies custody of a parcel using one-time numeric codes rather than identity documents. You are responsible for keeping any code shown to you confidential until the moment of a legitimate handoff — sharing a code prematurely is treated the same as physically handing over the parcel.",
      ],
    },
    {
      heading: "22. Changes to These Terms",
      paragraphs: [
        "We may update these Terms from time to time. Material changes will be communicated through the App or by email before they take effect.",
      ],
    },
    {
      heading: "23. Contact",
      paragraphs: ["Questions about these Terms can be sent to info@locoomo.com."],
    },
  ],
};

export const PRIVACY_POLICY: LegalDoc = {
  title: "Privacy Policy",
  effectiveDate: "22 August 2026",
  intro: [
    "Locoomo Ltd (“Locoomo,” “we,” “us”) operates the Locoomo App and acts as the data controller for the personal information described below, under the Nigeria Data Protection Act, 2023 (“NDPA”). Our registered address is 16 Ehighieda Street, off Ekosodin Road, Benin City, Edo State, Nigeria (CAC registration number 8562367).",
  ],
  sections: [
    {
      heading: "1. Scope",
      paragraphs: [
        "This Policy applies to everyone who uses the App — Consumers, Riders, Node Operators, and Admins — and to the personal data of receivers that Consumers provide to us when booking a delivery.",
      ],
    },
    {
      heading: "2. Information We Collect",
      paragraphs: ["Information you provide directly:"],
      list: [
        "Account information — first name, last name, email, phone number, password.",
        "Rider verification — current employer, license number, and an uploaded identity/rating-screenshot document.",
        "Node Operator onboarding — business name, address, city, state, country, GPS coordinates, capacity, and operating hours.",
        "Delivery details — parcel description and size, and the receiver’s full name, email, and phone number (provided by the Consumer).",
        "Team member information, for Admin-invited staff — name, email, phone.",
      ],
    },
    {
      heading: "Information collected automatically",
      list: [
        "A session cookie and a locally cached copy of your session, used only to keep you signed in.",
        "Your device’s location, only if you actively search for nearby Nodes — never collected in the background.",
        "We do not use analytics, advertising, or tracking cookies of any kind.",
      ],
    },
    {
      heading: "From third parties",
      paragraphs: [
        "We do not currently receive personal data about you from any third party, including social login providers — Google sign-in is present in the App’s code but is not active and collects nothing today.",
      ],
    },
    {
      heading: "3. How We Use Information",
      list: [
        "To create and secure your account, and authenticate you when you sign in.",
        "To operate the delivery lifecycle: matching Riders to jobs, coordinating Node handoffs, notifying receivers, and tracking an order’s status.",
        "To verify Rider and Node Operator eligibility before approving them to operate on the network.",
        "To process payments through Paystack.",
        "To detect fraud, confirm correct parcel recipients, and maintain a safe platform.",
        "To respond to support requests and, where applicable, resolve disputes.",
      ],
    },
    {
      heading: "4. Legal Bases for Processing",
      paragraphs: [
        "Under the NDPA, we rely on: your consent (given at registration); the necessity of processing to perform our contract with you (booking and fulfilling deliveries); our legitimate interests in preventing fraud and keeping the platform secure; and, where applicable, legal obligations we must comply with.",
      ],
    },
    {
      heading: "5. How Information Is Shared",
      paragraphs: ["We limit what each role can see of another user’s data by design:"],
      list: [
        "Riders never see a receiver’s name, email, or phone.",
        "Node Operators never see a Rider’s personal identity — only the handoff code exchange.",
        "A receiver’s collection code is emailed only to the receiver.",
        "A Node Operator does record the receiver’s name at the point of physical collection, as an identity/fraud check.",
        "Admins have platform-wide visibility for approvals, support, and dispute resolution.",
      ],
    },
    {
      heading: "6. Service Providers We Use",
      list: [
        "Cloudinary — securely stores Rider verification document images, uploaded directly from your browser using a time-limited signed link.",
        "Paystack — processes payments; we never receive or store your card details.",
        "Geoapify — provides maps and converts addresses you search into coordinates.",
        "Vercel — hosts our frontend infrastructure.",
        "Railway — hosts our backend infrastructure.",
      ],
    },
    {
      heading: "7. International Data Transfers",
      paragraphs: [
        "Locoomo may use third-party service providers that process personal data outside Nigeria. Where personal data is transferred outside Nigeria, we will take appropriate steps to ensure that the transfer and processing are carried out in accordance with the Nigeria Data Protection Act (NDPA) and applicable data-protection requirements. We require appropriate safeguards to protect personal data and will only transfer data where permitted by applicable law.",
      ],
    },
    {
      heading: "8. Cookies & Similar Technologies",
      paragraphs: [
        "We use one essential session cookie to keep you signed in, and browser storage to cache your session and, briefly, a pending payment reference. We do not use cookies for advertising, analytics, or cross-site tracking.",
      ],
    },
    {
      heading: "9. Data Retention",
      paragraphs: [
        "We retain personal data only for as long as reasonably necessary to provide our services, maintain your account, process transactions, prevent fraud, resolve disputes, enforce our agreements, and comply with applicable legal, regulatory, and accounting obligations.",
        "Different categories of information may be retained for different periods. Account and profile information may be retained while your account remains active and for a reasonable period thereafter. Order, transaction, and payment records may be retained for as long as required for accounting, tax, legal, and regulatory purposes. KYC and verification records are retained only for as long as necessary to satisfy applicable legal, regulatory, and fraud-prevention requirements.",
        "When personal data is no longer required, we will securely delete it or anonymize it where appropriate, subject to any legal obligation requiring continued retention.",
      ],
    },
    {
      heading: "10. Data Security",
      paragraphs: [
        "We use signed, time-limited links for uploaded documents, encrypted transport for all App traffic, and cookie-based authentication. No method of storage or transmission is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "11. Your Rights",
      paragraphs: [
        "Under the NDPA, you have the right to access, correct, or request deletion of your personal data; object to or restrict certain processing; request a portable copy of your data; and withdraw consent at any time.",
      ],
    },
    {
      heading: "12. Access, Correction & Deletion Requests",
      paragraphs: [
        "You can update most of your own profile information directly within the App. For anything you cannot change yourself, or to request a copy or deletion of your data, email info@locoomo.com. We will respond within a reasonable time and consistent with NDPA requirements.",
      ],
    },
    {
      heading: "13. Account Deletion",
      paragraphs: [
        "The App does not currently offer a self-service “delete my account” option. To request that your account and associated personal data be deleted, email info@locoomo.com. We will confirm the request and let you know what, if anything, we are required to retain and for how long.",
      ],
    },
    {
      heading: "14. Marketing Communications",
      paragraphs: [
        "We do not currently send marketing emails. We only send transactional messages required to operate the App — account verification, password resets, and delivery/collection notifications. If we introduce marketing communications in future, we will provide a clear way to opt out.",
      ],
    },
    {
      heading: "15. Children’s Privacy",
      paragraphs: [
        "The App is intended for users 18 and older. We do not knowingly collect personal data from children below that age. The App does not currently verify age at registration; if you believe a child has provided us with personal data, contact info@locoomo.com so we can remove it.",
      ],
    },
    {
      heading: "16. User-Generated Content",
      paragraphs: [
        "Parcel descriptions and uploaded verification documents are visible only to the users and Admins who need them to complete a specific function.",
      ],
    },
    {
      heading: "17. Automated Decision-Making",
      paragraphs: [
        "The App calculates delivery fares automatically based on route and delivery method, but this is a pricing calculation, not a decision that produces a legal or similarly significant effect about you, and it does not involve profiling. We do not currently use AI features that make decisions about your account or eligibility.",
      ],
    },
    {
      heading: "18. Data Breach Notification",
      paragraphs: [
        "If a security incident affecting your personal data occurs, we will assess it and, where required under the NDPA, notify the Nigeria Data Protection Commission and affected users within the applicable timeframe.",
      ],
    },
    {
      heading: "19. Changes to This Policy",
      paragraphs: [
        "We may update this Policy from time to time. Material changes will be communicated through the App or by email before they take effect.",
      ],
    },
    {
      heading: "20. Data Protection Officer",
      paragraphs: [
        "Locoomo is in the process of designating a Data Protection Officer (DPO) in accordance with applicable data-protection requirements. Once appointed, the DPO’s contact details will be made available in this Privacy Policy. In the meantime, privacy-related enquiries may be directed to info@locoomo.com.",
      ],
    },
    {
      heading: "21. Contact",
      paragraphs: [
        "General questions and privacy/data-protection requests: info@locoomo.com. Postal address: 16 Ehighieda Street, off Ekosodin Road, Benin City, Edo State, Nigeria.",
      ],
    },
  ],
};
