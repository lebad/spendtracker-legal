# Legal draft review — October 27, 2026

Version 0.2 replaces the September 30 draft. The privacy policy is available in English, Russian and Serbian Latin with a language switcher. The publisher confirmed Serbia as the intended market. Explicit statutory names and article references were removed from the policy at the publisher’s request; applicable legal duties remain unchanged. Existing URLs and styling remain intact. No publication or app changes are included.

## Decisions before publication

- The intended market is Serbia; this does not establish the publisher's legal residence. Name/email are confirmed. The privacy address placeholder was removed at the publisher's request. Confirm separately any address/business disclosures required for the terms or distribution.
- Verify the Serbian transfer basis and safeguards for each overseas provider, including RevenueCat; its EU-oriented contractual clauses alone do not prove a valid Serbian transfer basis. Confirm processor arrangements, whether a Serbian representative is needed if the publisher is established outside Serbia, and whether a DPO is required. Do not infer EU/UK representative duties from a Serbia-only target market.
- What retention schedule will actually be used for support and RevenueCat records, and how will anonymous purchase records be located and deleted? Do not publish invented retention promises.
- Terms version 0.3 is the shortened English version (October 27, 2026). It keeps the confirmed 16+ minimum and relies on Apple’s Standard EULA instead of a separate supplemental liability cap. Counsel should review the lifetime-purchase scope and enforceability before publication. No additional arbitration or exclusive forum was added.
- Confirm the no-sale/no-advertising statements against any RevenueCat dashboard integrations and other production configuration not represented in the repo.
- Set the effective date, remove draft notices/placeholders, and obtain legal review. Update the app's `LegalDocument.acknowledgementVersion` when the final documents require acceptance; it currently remains `2026-09-30-draft-0.1`. Do not present these publication drafts as an effective agreement.

## Evidence from SpendTracker

- `Package.resolved`: AppAuth 2.1.0 and RevenueCat 5.75.0. `PurchaseService.swift`: generated RevenueCat identity, receipt/entitlement handling, monthly/annual/non-consumable plans and conditional seven-day annual trial. Production dashboard settings were not inspected.
- `AppDependencies.swift`: The app is not yet released and uses IMAP with an app password. The publisher confirmed Google sign-in is not an offered feature; dormant OAuth code is excluded from the policy. Pro gates iCloud. Local transaction cache is separate from cloud user-data storage.
- `CloudRepository.swift`: user data includes edits, hints, cancellation/bill links, card assignments, rules, savings, planning, settings and saved periods; do not claim that no financial information leaves the device.
- `TransactionCacheRepository.swift`, `MailCredentialsStore.swift`: encrypted local cache; device-only Keychain mail credentials. `IMAPClient.swift`: EXAMINE and BODY.PEEK read without changing messages.
- `SettingsViewModel.disconnect()`: stops polling and removes credentials; does not erase records. Cloud revision history and recovery copies mean deleting visible entries is not necessarily complete erasure. No universal erase command found.
- No first-party privacy manifest was found in the app source search. SDK manifests, the archived build and App Store Connect labels still need verification; this drafting task does not establish submission compliance.

## Sources and release checks

- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/), 5.1.1(i): truthful data practices, provider protection, retention/deletion and accessible policy links; 3.1.2: subscription disclosures. Verify the purchase UI and App Store metadata separately.
- [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/): retained for the software license; the new terms supplement it rather than creating a custom EULA.
- [RevenueCat App Privacy](https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy): purchase history disclosure for functionality and analytics; anonymous identities do not automatically imply advertising tracking. Check actual App Store labels; do not select Data Not Collected for this purchase integration.
- [RevenueCat privacy information](https://www.revenuecat.com/privacy) and [DPA](https://www.revenuecat.com/dpa): processor role, purchase/technical information, deletion and transfer framework. Verify the agreement applicable to the actual account.
- [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement): hosting/request processing.
- Reassess GDPR scope if there is an EU establishment, EU targeting or relevant monitoring there; Serbia targeting alone does not establish that GDPR applies.
- Keep all language versions consistent and understandable for the intended audience.

Not legal advice or a certification of compliance. Have counsel review the final documents and the actual operating practices before publication.
