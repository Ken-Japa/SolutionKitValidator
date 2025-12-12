import { Idea } from './types';

export const ideasEn: Idea[] = [
  // --- BATCH 1: Retail/Services Operations ---

  // 1. Confirmador de PIX -> Fake Receipt Detector (Global adaptation)
  {
    id: 'pix',
    slug: 'fake-payment-receipt-detector',
    seoTitle: 'Instant Payment Verification & Fake Receipt Detector | SolutionKit',
    hero: {
      title: 'Stop falling for Fake Payment scams in your store',
      subtitle: 'The automated solution that validates real bank transfers and alerts your staff in 1 second.',
    },
    pain: {
      heading: 'Do you waste time checking banking apps while the line grows?',
      description: [
        'Staff currently has to stop service, open the bank app, login, and verify funds. Meanwhile, customers get impatient.',
        'Scammers show edited screenshots, scheduled transfers, or fake app interfaces to steal your merchandise.',
      ],
    },
    solution: {
      heading: 'Green Flash on TV: Money Verified. Fraud Eliminated.',
      description: [
        'Our system connects directly to your bank API. When a customer pays (Zelle, Bank Transfer, QR), we validate the transaction in milliseconds.',
        'Place a tablet facing the counter. If it flashes green, release the goods. No bank passwords in employees\' hands.',
      ],
    },
    features: [
      { title: 'Visual & Audio Alert', description: 'Green screen and cash register sound only when funds actually hit the account.', icon: 'zap' },
      { title: 'Zero Account Access', description: 'Read-only connection. No one can move your money.', icon: 'shield' },
      { title: 'Line Busting', description: 'Verification in <1 second. Serve the next customer faster.', icon: 'clock' },
      { title: 'Daily Reconciliation', description: 'Know exactly how much digital revenue came in at closing.', icon: 'check' },
    ],
    pricing: {
      value: '9.90',
      period: 'mo',
      comparison: 'Less than the cost of a single scam',
    },
    cta: 'PROTECT MY REVENUE',
  },

  // 2. Ponto Doméstica -> Household Staff Tracker
  {
    id: 'maid-point',
    slug: 'household-staff-time-tracking',
    seoTitle: 'Simple Time Tracking for Housekeepers & Nannies | SolutionKit',
    hero: {
      title: 'Protect yourself from household labor lawsuits',
      subtitle: 'Track hours, overtime, and days off via WhatsApp. 100% Secure and creates a legal paper trail.',
    },
    pain: {
      heading: 'A notebook log won\'t hold up in court',
      description: [
        'Do you trust manual notes? In a labor dispute, "I think she arrived at 9" counts for nothing. The risk of back-paying overtime is huge.',
        'Spreadsheets are tedious, and corporate HR software is too expensive for a single domestic employee.',
      ],
    },
    solution: {
      heading: 'Clock in via WhatsApp with GPS verification',
      description: [
        'Your employee simply texts "Hi" to our system upon arrival and departure. We record the timestamp and GPS location.',
        'At month-end, get a PDF ready for signature, with overtime and time-off automatically calculated.',
      ],
    },
    features: [
      { title: 'WhatsApp Check-in', description: 'No app download needed. Works on any phone.', icon: 'zap' },
      { title: 'Auto Calculation', description: 'Overtime and time-bank calculated without math errors.', icon: 'clock' },
      { title: 'Legal Protection', description: 'Auditable digital history for labor compliance.', icon: 'shield' },
      { title: 'Smart Reminders', description: 'System alerts you if they forget to clock in.', icon: 'check' },
    ],
    pricing: {
      value: '7.90',
      period: 'mo',
      comparison: 'Price of a coffee per day',
    },
    cta: 'TRY FREE FOR 7 DAYS',
  },

  // 3. Orçamento Reforma -> Construction Estimate
  {
    id: 'construction-quote',
    slug: 'construction-estimate-generator',
    seoTitle: 'Construction & Renovation PDF Estimate Generator | SolutionKit',
    hero: {
      title: 'Stop losing jobs by sending quotes via text message',
      subtitle: 'Create professional PDF estimates in 2 minutes and close more deals.',
    },
    pain: {
      heading: 'Informal quotes look amateur and create distrust',
      description: [
        'You send a messy text price. The client ignores it. You lost the job to a competitor who sent a proper document.',
        'Without a formal scope, clients demand "extras" mid-project and refuse to pay. You end up working for free.',
      ],
    },
    solution: {
      heading: 'Professionalism that justifies your price',
      description: [
        'Input items on your phone, and we generate a sleek PDF with your logo, itemized costs, and warranty terms.',
        'Send a professional link. The client feels secure and signs with you, even if you charge a premium.',
      ],
    },
    features: [
      { title: 'Instant PDF', description: 'Generates a polished document ready to send.', icon: 'check' },
      { title: 'Material List', description: 'Auto-generates the shopping list for the client.', icon: 'clock' },
      { title: 'Liability Terms', description: 'Basic legal text protecting your service scope.', icon: 'shield' },
      { title: 'Client History', description: 'Track exactly what you charged for previous jobs.', icon: 'zap' },
    ],
    pricing: {
      value: '4.90',
      period: 'mo',
      comparison: 'One extra job pays for 10 years',
    },
    cta: 'CREATE MY ESTIMATE',
  },

  // 4. Placa de Obra -> Construction Sign
  {
    id: 'construction-sign',
    slug: 'construction-site-signage-generator',
    seoTitle: 'City Standard Construction Sign Generator | SolutionKit',
    hero: {
      title: 'Is your site shut down due to missing signage?',
      subtitle: 'Generate mandatory construction site signage compliant with local codes in 30 seconds.',
    },
    pain: {
      heading: 'Inspectors love to fine for lack of proper signage',
      description: [
        'You need to break ground but don\'t know the required font size, permit display rules, or mandatory technical data.',
        'Hiring a designer is slow and expensive. The city fine, however, is immediate.',
      ],
    },
    solution: {
      heading: 'Fill, Download, Print at the Copy Shop',
      description: [
        'Select your location, enter the Permit Number and Contractor details.',
        'System generates a high-res file (PDF/Vector) meeting legal standards. Just send it to a banner printer.',
      ],
    },
    features: [
      { title: 'Code Compliant', description: 'Templates follow standard building codes.', icon: 'check' },
      { title: 'QR Code Ready', description: 'Auto-generates permit link if required.', icon: 'zap' },
      { title: 'Print Ready', description: 'High-resolution file for large canvas printing.', icon: 'shield' },
      { title: 'Multi-Role', description: 'List Engineer, Architect, and Contractor clearly.', icon: 'check' },
    ],
    pricing: {
      value: '9.90',
      period: 'sign',
      comparison: '10x cheaper than a designer',
    },
    cta: 'GENERATE SIGNAGE',
  },

  // 5. Otimizador Fotos Marketplace -> Photo Optimizer
  {
    id: 'photo-optimizer',
    slug: 'marketplace-photo-optimizer',
    seoTitle: 'eCommerce Photo Background Remover & Resizer | SolutionKit',
    hero: {
      title: 'Ads suppressed due to "poor image quality"?',
      subtitle: 'Automatic white background and dimension standardization for Amazon, eBay, and Shopify.',
    },
    pain: {
      heading: 'You lose sales while manually editing photos',
      description: [
        'Snap photo, upload to PC, open Photoshop, remove background... that\'s 20 minutes per SKU.',
        'Marketplaces reject listings if the background isn\'t RGB 255 White or resolution is off. Your visibility drops to zero.',
      ],
    },
    solution: {
      heading: 'Drag, Drop, and Sell',
      description: [
        'Upload raw phone photos. Our AI removes the background, centers the product, and standardizes to 1200x1200px (Gold Standard).',
        'Download in bulk and upload to your store. Listings gain immediate algorithm relevance.',
      ],
    },
    features: [
      { title: 'Pure White Bg', description: 'AI removal without jagged edges.', icon: 'zap' },
      { title: 'Zoom Optimized', description: 'High resolution triggers the "Zoom" feature on listings.', icon: 'check' },
      { title: 'Batch Processing', description: 'Edit 50 photos at once while grabbing coffee.', icon: 'clock' },
      { title: 'No Watermark', description: 'Clean, commercial-ready images.', icon: 'shield' },
    ],
    pricing: {
      value: '12.90',
      period: 'mo',
      comparison: 'Unlimited photos',
    },
    cta: 'OPTIMIZE MY LISTINGS',
  },

  // 6. Agendamento Pet Shop -> Grooming Scheduling
  {
    id: 'pet-schedule',
    slug: 'pet-grooming-scheduling-app',
    seoTitle: 'Simple Pet Grooming Scheduling System | SolutionKit',
    hero: {
      title: 'Eliminate chaos in your Grooming Salon',
      subtitle: 'Ditch the paper notebook. Online booking that sends automatic reminders to pet owners.',
    },
    pain: {
      heading: 'No-shows kill your profitability',
      description: [
        'You booked a slot, client forgot. You lose revenue and time that you can\'t get back.',
        'Answering calls to book appointments interrupts your work and delays the dogs\' baths.',
      ],
    },
    solution: {
      heading: 'Full schedule, Zero gaps',
      description: [
        'Send a booking link. Clients choose a free slot and book themselves.',
        'System sends an auto-text 24h and 2h before: "Fluffy has a bath today!". Drastically reduces no-shows.',
      ],
    },
    features: [
      { title: 'Auto Reminders', description: 'Reduces no-shows by up to 80% via SMS/WhatsApp.', icon: 'zap' },
      { title: 'Pet Profile', description: 'Track vaccination expiry and grooming preferences.', icon: 'check' },
      { title: 'Revenue Track', description: 'See daily/weekly earnings at a glance.', icon: 'clock' },
      { title: 'Booking Link', description: 'Add to Instagram bio and stop manual scheduling.', icon: 'check' },
    ],
    pricing: {
      value: '9.90',
      period: 'mo',
      comparison: 'Recover cost with 1 saved appointment',
    },
    cta: 'ORGANIZE MY SALON',
  },

  // 7. Termo Consentimento -> MedSpa Consent
  {
    id: 'aesthetic-consent',
    slug: 'medspa-consent-form-generator',
    seoTitle: 'MedSpa & Aesthetic Clinic Consent Forms | SolutionKit',
    hero: {
      title: 'Protect your clinic from "bad result" lawsuits',
      subtitle: 'Generate bulletproof digital consent and liability waivers for Botox, Laser, and Fillers.',
    },
    pain: {
      heading: 'Client claims "I wasn\'t warned" and sues you',
      description: [
        'Aesthetic procedures carry risks. If a client has a reaction and didn\'t sign a specific waiver, you are liable.',
        'Generic internet templates don\'t hold up in court and don\'t cover social media image rights.',
      ],
    },
    solution: {
      heading: 'Legal Documentation in 1 Click',
      description: [
        'Select the procedure. System generates a detailed form explaining specific risks, aftercare, and photo usage rights.',
        'Client signs on a tablet. PDF is stored securely in the cloud. You are legally covered.',
      ],
    },
    features: [
      { title: 'E-Signature', description: 'Paperless. Sign on screen, auto-email copy to client.', icon: 'zap' },
      { title: 'Specific Waivers', description: 'Templates for Injectables, Lasers, Microblading.', icon: 'check' },
      { title: 'Photo Release', description: 'Clear clauses for posting Before/After on Socials.', icon: 'shield' },
      { title: 'HIPAA/GDPR', description: 'Secure handling of sensitive client health data.', icon: 'check' },
    ],
    pricing: {
      value: '14.90',
      period: 'mo',
      comparison: 'Lawyers charge $300/hour',
    },
    cta: 'SHIELD MY CLINIC',
  },

  // 8. Calculadora Frete -> LTL Freight Calc
  {
    id: 'freight-calc',
    slug: 'ltl-freight-calculator',
    seoTitle: 'LTL Freight Quote Calculator for Carriers | SolutionKit',
    hero: {
      title: 'Freight quotes in 5 seconds, not 5 hours',
      subtitle: 'Eliminate complex spreadsheets. Let sales reps (or clients) calculate exact shipping costs instantly.',
    },
    pain: {
      heading: 'Slow quotes kill conversion rates',
      description: [
        'Client calls for a price. You fumble through 3 Excel sheets (density, fuel surcharge, tolls).',
        'Miscalculate, and you lose profit. Delay, and the client books with a competitor.',
      ],
    },
    solution: {
      heading: 'Complex Rate Tables, Simple Interface',
      description: [
        'Upload your rate sheets once. The system handles the logic.',
        'Enter Zip Codes and Weight. Get an instant, bindable quote with all surcharges included.',
      ],
    },
    features: [
      { title: 'Density Calc', description: 'Auto-calculates volumetric vs actual weight.', icon: 'check' },
      { title: 'Surcharges', description: 'Includes fuel, liftgate, and residential fees.', icon: 'clock' },
      { title: 'Client Portal', description: 'Embed on your site for self-service quotes.', icon: 'zap' },
      { title: 'Zone Management', description: 'Handle different tariffs by region.', icon: 'check' },
    ],
    pricing: {
      value: '22.90',
      period: 'mo',
      comparison: 'For independent carriers',
    },
    cta: 'TRY CALCULATOR',
  },

  // 9. Gestão Chaves -> Key Control
  {
    id: 'key-control',
    slug: 'property-key-management',
    seoTitle: 'Building & Property Key Control System | SolutionKit',
    hero: {
      title: 'Who has the Master Key right now?',
      subtitle: 'Ditch the illegible logbook. Track key loans and property access digitally.',
    },
    pain: {
      heading: 'Lost keys and zero accountability',
      description: [
        'A maintenance key is missing. The night guard didn\'t log who took it. Now you have to re-key the building.',
        'Paper logs get torn, lost, or are impossible to read. Security is compromised.',
      ],
    },
    solution: {
      heading: 'Digital Check-in / Check-out',
      description: [
        'Guard selects the key and the contractor. System logs the timestamp.',
        'If not returned by X time, system alerts management. Full audit trail of custody.',
      ],
    },
    features: [
      { title: 'Photo Verify', description: 'Snap a pic of the person taking the key.', icon: 'shield' },
      { title: 'Overdue Alert', description: 'Notification if key isn\'t back by end of shift.', icon: 'clock' },
      { title: 'Audit Trail', description: 'Search history: "Who had Key #4 last Tuesday?"', icon: 'check' },
      { title: 'Cloud Based', description: 'Runs on any front-desk PC or tablet.', icon: 'zap' },
    ],
    pricing: {
      value: '12.90',
      period: 'mo',
      comparison: 'Tiny cost per unit',
    },
    cta: 'SECURE MY KEYS',
  },

  // 10. Contador de Peças -> Inventory Count
  {
    id: 'stock-counter',
    slug: 'inventory-counting-app',
    seoTitle: 'Fast Warehouse Inventory Counting App | SolutionKit',
    hero: {
      title: 'Stock takes without losing count (or your mind)',
      subtitle: 'Rapid scanning app for retail and warehouse. Scan, count, export.',
    },
    pain: {
      heading: '1, 2, 3... lost count!',
      description: [
        'Annual inventory with clipboards is a nightmare. Manual errors create "phantom stock" and accounting write-offs.',
        'ERP modules are clunky and slow. You need speed on the floor.',
      ],
    },
    solution: {
      heading: 'Turn your phone into a PDT Scanner',
      description: [
        'Use the camera to scan barcodes or tap quick-add buttons (+1, +10).',
        'Finished the aisle? Export to CSV and upload to your main ERP. Brutally fast.',
      ],
    },
    features: [
      { title: 'Camera Scan', description: 'Uses phone camera with rapid autofocus.', icon: 'zap' },
      { title: 'Offline Mode', description: 'Count in WiFi dead zones without data loss.', icon: 'shield' },
      { title: 'CSV Export', description: 'Universal format compatible with any software.', icon: 'check' },
      { title: 'Multi-Location', description: 'Separate counts by Bin, Aisle, or Shelf.', icon: 'clock' },
    ],
    pricing: {
      value: '7.90',
      period: 'mo',
      comparison: 'Cheaper than renting scanners',
    },
    cta: 'START COUNTING',
  },

  // --- BATCH 2: Compliance & Logistics ---

  // 11. Gerador Contrato Freelance -> Contractor Agreement
  {
    id: 'freelance-contract',
    slug: 'contractor-agreement-generator',
    seoTitle: 'Freelance & Contractor Agreement Generator (B2B) | SolutionKit',
    hero: {
      title: 'Hire contractors without worker misclassification risk',
      subtitle: 'Generate legally solid Independent Contractor Agreements in 3 minutes.',
    },
    pain: {
      heading: 'Vague agreements invite tax and labor audits',
      description: [
        'Using generic templates that don\'t specify "non-subordination" creates risk of the IRS/Gov classifying them as employees.',
        'Lawyers charge $500+ to draft a simple service agreement.',
      ],
    },
    solution: {
      heading: 'Bulletproof B2B Contracts',
      description: [
        'Answer simple prompts (scope, deliverables, rate). We generate a contract focused on results, not hours.',
        'Clauses designed to protect your IP and clarify contractor status. Ready for e-signature.',
      ],
    },
    features: [
      { title: 'Safety Clauses', description: 'Language defining independent status clearly.', icon: 'shield' },
      { title: 'E-Sign Ready', description: 'Send link to sign immediately.', icon: 'zap' },
      { title: 'Niche Templates', description: 'Dev, Marketing, Design, Consulting.', icon: 'check' },
      { title: 'Cloud Archive', description: 'Never lose a signed contract again.', icon: 'clock' },
    ],
    pricing: {
      value: '9.90',
      period: 'mo',
      comparison: 'Cheaper than 5 mins of legal counsel',
    },
    cta: 'GENERATE CONTRACT',
  },

  // 12. Conciliador Taxas -> Merchant Fee Auditor
  {
    id: 'card-reconciler',
    slug: 'merchant-fee-auditor',
    seoTitle: 'Credit Card Processing Fee Auditor | SolutionKit',
    hero: {
      title: 'Is your payment processor skimming your profit?',
      subtitle: 'Automatically audit every transaction to ensure fees match your contract.',
    },
    pain: {
      heading: 'Hidden fees eat 5-10% of your margins',
      description: [
        'You sell $100, contract says 2% fee, but only $96 hits the bank. Over a year, that leakage is massive.',
        'Reconciling statement-by-statement is humanly impossible.',
      ],
    },
    solution: {
      heading: 'Automated Interchange Audit',
      description: [
        'Connect your processor (Stripe, Square, Merchant Bank). We match sales vs. deposits.',
        'If the charged fee exceeds the contract rate, we flag the exact amount for you to claim.',
      ],
    },
    features: [
      { title: 'Leak Detection', description: 'Flags hidden markups or erroneous tiers.', icon: 'zap' },
      { title: 'Deposit Forecast', description: 'Know exactly what hits the bank tomorrow.', icon: 'clock' },
      { title: 'Multi-Processor', description: 'View Stripe and POS terminal in one dashboard.', icon: 'check' },
      { title: 'Claim Report', description: 'PDF evidence ready to email support.', icon: 'shield' },
    ],
    pricing: {
      value: '12.90',
      period: 'mo',
      comparison: 'Finds money every month',
    },
    cta: 'AUDIT MY FEES',
  },

  // 13. Validador Delivery -> Delivery Radius Calc
  {
    id: 'delivery-area',
    slug: 'delivery-radius-calculator',
    seoTitle: 'Delivery Fee & Radius Calculator by Zip | SolutionKit',
    hero: {
      title: 'Stop losing money on long-distance deliveries',
      subtitle: 'Define your profitable zone and automate courier fee calculation.',
    },
    pain: {
      heading: 'Delivering too far erodes your margins',
      description: [
        'Customer asks "do you deliver here?". Staff guesses. Driver charges extra for distance, and you eat the cost.',
        'Third-party apps take 30%. Running your own fleet requires precise zone pricing.',
      ],
    },
    solution: {
      heading: 'Smart Logistics Map',
      description: [
        'Draw your zone on the map. Set tiers by radius (miles) or Zip Code.',
        'Enter address/zip. System replies: "In Zone. Fee: $5.00". Zero ambiguity.',
      ],
    },
    features: [
      { title: 'Instant Quote', description: 'Immediate yes/no and price output.', icon: 'zap' },
      { title: 'Visual Zones', description: 'Draw polygons on the map for precise edges.', icon: 'check' },
      { title: 'Distance Pricing', description: 'Dynamic pricing based on driving distance.', icon: 'clock' },
      { title: 'Safety Block', description: 'Exclude specific neighborhoods or zones.', icon: 'shield' },
    ],
    pricing: {
      value: '7.90',
      period: 'mo',
      comparison: 'Prevents unprofitable runs',
    },
    cta: 'SET DELIVERY ZONES',
  },

  // 14. Anamnese -> Patient Intake Form
  {
    id: 'anamnesis-form',
    slug: 'digital-patient-intake-form',
    seoTitle: 'Digital Patient Intake Forms for Wellness | SolutionKit',
    hero: {
      title: 'Ditch the clipboard and paper files',
      subtitle: 'Secure, digital intake forms for Chiropractors, Physio, and Nutritionists.',
    },
    pain: {
      heading: 'Paper files are insecure and hard to search',
      description: [
        'Finding a client file from last year takes time. Paper clutter looks unprofessional.',
        'Leaving health info on a desk is a compliance risk.',
      ],
    },
    solution: {
      heading: 'Patient history on your tablet',
      description: [
        'Send a link before the appointment. Client fills it out at home.',
        'Add treatment notes, progress photos, and digital signatures. Everything encrypted and searchable.',
      ],
    },
    features: [
      { title: 'Remote Fill', description: 'Save lobby time. Forms done before arrival.', icon: 'zap' },
      { title: 'Progress Photos', description: 'Attach unlimited photos to the record.', icon: 'check' },
      { title: 'Instant Search', description: 'Find "John Doe" in 1 second.', icon: 'clock' },
      { title: 'Encrypted', description: 'Secure cloud storage for sensitive data.', icon: 'shield' },
    ],
    pricing: {
      value: '14.90',
      period: 'mo',
      comparison: 'A paperless front desk',
    },
    cta: 'GO PAPERLESS',
  },

  // 15. Rotulos -> Nutrition Label
  {
    id: 'food-label',
    slug: 'nutrition-label-generator',
    seoTitle: 'FDA Style Nutrition & Allergen Label Generator | SolutionKit',
    hero: {
      title: 'Sell your baked goods legally',
      subtitle: 'Generate professional labels with nutrition facts and mandatory allergen alerts.',
    },
    pain: {
      heading: 'Labeling errors can cause recalls or fines',
      description: [
        'Food laws require specific formatting and allergen bolding. Doing this manually is risky.',
        'Retailers won\'t stock your product without a professional barcode and facts panel.',
      ],
    },
    solution: {
      heading: 'Automatic Food Scientist',
      description: [
        'Input your recipe (e.g., 500g flour, 200g sugar). System calculates calories and macros based on USDA data.',
        'Generates a print-ready label with "CONTAINS: WHEAT, MILK" bolded automatically.',
      ],
    },
    features: [
      { title: 'USDA Database', description: 'Accurate macro calculations.', icon: 'check' },
      { title: 'Allergen Detection', description: 'Auto-flags the Big 9 allergens.', icon: 'shield' },
      { title: 'Compliance Ready', description: 'Proper font sizes and layout.', icon: 'check' },
      { title: 'Thermal Print', description: 'Export for Rollo/Zebra printers.', icon: 'zap' },
    ],
    pricing: {
      value: '7.90',
      period: 'mo',
      comparison: 'Unlimited labels',
    },
    cta: 'CREATE LABELS',
  },

  // 16. XML Organizer -> Invoice Organizer
  {
    id: 'xml-organizer',
    slug: 'supplier-invoice-central',
    seoTitle: 'Supplier Invoice & Purchase Order Organizer | SolutionKit',
    hero: {
      title: 'Never lose a Supplier Invoice again',
      subtitle: 'Centralize, tag, and organize all your incoming bills and receipts.',
    },
    pain: {
      heading: 'Missing receipts drive accountants crazy',
      description: [
        'Invoices get lost in email threads. At tax time, you are scrambling to find proof of expense.',
        'Lost invoices mean missed tax deductions and higher tax bills.',
      ],
    },
    solution: {
      heading: 'Inbox for your bills',
      description: [
        'Forward invoices to your custom email address. We extract the data and file it.',
        'Auto-export a zip file to your accountant monthly. Zero stress.',
      ],
    },
    features: [
      { title: 'Email Capture', description: 'Forward PDF bills and we handle the rest.', icon: 'zap' },
      { title: 'Approval Flow', description: 'Mark bills as "Approved to Pay".', icon: 'shield' },
      { title: 'Audit Archive', description: '7-year storage for tax compliance.', icon: 'clock' },
      { title: 'One-Click Export', description: 'Send everything to bookkeeping instantly.', icon: 'check' },
    ],
    pricing: {
      value: '9.90',
      period: 'mo',
      comparison: 'Peace of mind at tax time',
    },
    cta: 'ORGANIZE INVOICES',
  },

  // 17. Cert Expiry -> Permit Tracker
  {
    id: 'cert-expiry',
    slug: 'business-license-tracker',
    seoTitle: 'Business License & Permit Expiry Tracker | SolutionKit',
    hero: {
      title: 'Don\'t let operations stop due to an expired permit',
      subtitle: 'Track validity of Business Licenses, Insurance, and Health Permits.',
    },
    pain: {
      heading: 'A lapsed license means fines or shutdowns',
      description: [
        'If your liquor license or health permit expires, you close doors. The revenue loss is massive.',
        'Renewing last minute involves panic and rush fees.',
      ],
    },
    solution: {
      heading: 'Automated Compliance Alert',
      description: [
        'Log your critical docs. System builds a timeline.',
        'Get aggressive alerts (Email, SMS) 60, 30, and 7 days before expiry. Impossible to ignore.',
      ],
    },
    features: [
      { title: 'Omni-Alerts', description: 'Notifications reach you wherever you are.', icon: 'zap' },
      { title: 'Traffic Light UI', description: 'Green (Good), Yellow (Soon), Red (Expired).', icon: 'check' },
      { title: 'Multi-Location', description: 'Manage docs for 10 franchises in one view.', icon: 'shield' },
      { title: 'Requirements', description: 'Note down what is needed for renewal.', icon: 'clock' },
    ],
    pricing: {
      value: '4.90',
      period: 'mo',
      comparison: 'Cheaper than a late fee',
    },
    cta: 'TRACK EXPIRIES',
  },

  // 18. Coworking -> Room Booking
  {
    id: 'coworking-booking',
    slug: 'meeting-room-booking-system',
    seoTitle: 'Meeting Room Booking System for Shared Offices | SolutionKit',
    hero: {
      title: 'Who booked the conference room?',
      subtitle: 'End schedule conflicts and double-bookings in your shared office.',
    },
    pain: {
      heading: 'Spreadsheets lead to "Get out, I booked this" fights',
      description: [
        'Two teams show up for the same room because the sheet wasn\'t synced.',
        'Tracking usage hours for billing is a manual headache.',
      ],
    },
    solution: {
      heading: 'Real-Time Visual Schedule',
      description: [
        'Members log in, see availability, and book. The slot is instantly blocked for everyone else.',
        'Generates a monthly usage report for accurate billing.',
      ],
    },
    features: [
      { title: 'QR Check-in', description: 'Scan code on door to claim the room.', icon: 'zap' },
      { title: 'Credit System', description: 'Limit hours based on membership tier.', icon: 'shield' },
      { title: 'Lobby Display', description: 'Show current bookings on a TV.', icon: 'check' },
      { title: 'Calendar Sync', description: 'Works with Google/Outlook calendars.', icon: 'clock' },
    ],
    pricing: {
      value: '12.90',
      period: 'mo',
      comparison: 'For up to 5 rooms',
    },
    cta: 'MANAGE ROOMS',
  },

  // 19. Tax Simulator -> Tax Estimator
  {
    id: 'tax-simulator',
    slug: 'small-business-tax-estimator',
    seoTitle: 'Small Business Sales Tax & VAT Estimator | SolutionKit',
    hero: {
      title: 'How much tax do I owe next month?',
      subtitle: 'Simple estimator to predict tax liability and protect cash flow.',
    },
    pain: {
      heading: 'Tax bills shouldn\'t be a surprise',
      description: [
        'Revenue fluctuates, and so does tax liability. Spending tax money by accident is a fatal mistake.',
        'Waiting for the accountant\'s quarterly report is too late to adjust.',
      ],
    },
    solution: {
      heading: 'Real-time Liability Tracking',
      description: [
        'Input revenue as it comes in. System applies your estimated tax rate.',
        'Know exactly how much cash to set aside. Simulate "What if" scenarios.',
      ],
    },
    features: [
      { title: 'Rate Brackets', description: 'Customizable tax rate settings.', icon: 'check' },
      { title: 'Bracket Alert', description: 'Warns if revenue pushes you to a higher tax tier.', icon: 'shield' },
      { title: 'Profit First', description: 'Calculate net income after estimated tax.', icon: 'zap' },
      { title: 'Annual View', description: 'Project liability for the full year.', icon: 'clock' },
    ],
    pricing: {
      value: '7.90',
      period: 'mo',
      comparison: 'Financial clarity',
    },
    cta: 'ESTIMATE TAXES',
  },

  // 20. PR CRM -> Journalist CRM
  {
    id: 'pr-crm',
    slug: 'pr-media-list-crm',
    seoTitle: 'PR & Media Relations CRM for Freelancers | SolutionKit',
    hero: {
      title: 'Your media list, organized and active',
      subtitle: 'A simple CRM for freelance publicists and boutique PR agencies.',
    },
    pain: {
      heading: 'Pitching to dead emails burns bridges',
      description: [
        'Journalists change jobs often. Maintaining an Excel sheet is a full-time job.',
        'Enterprise PR tools cost thousands/month, pricing out freelancers.',
      ],
    },
    solution: {
      heading: 'Niche Media Relationships',
      description: [
        'Store contacts with tags (e.g., "Tech", "Vogue", "Crypto").',
        'Log interactions: Who posted? Who needs a follow-up? Who said "pass"?',
      ],
    },
    features: [
      { title: 'Interaction Log', description: 'See when you last pitched a reporter.', icon: 'clock' },
      { title: 'Smart Tags', description: 'Filter "NYC Food Bloggers" instantly.', icon: 'check' },
      { title: 'Link Tracking', description: 'Track coverage links in one profile.', icon: 'zap' },
      { title: 'Privacy Focused', description: 'Secure contact management.', icon: 'shield' },
    ],
    pricing: {
      value: '17.90',
      period: 'mo',
      comparison: 'Fraction of enterprise tool cost',
    },
    cta: 'ORGANIZE MEDIA LIST',
  },

  // --- BATCH 3: HR, Real Estate & Niche Finance ---

  // 21. Rastreador Férias -> PTO Tracker
  {
    id: 'vacation-tracker',
    slug: 'team-pto-tracker',
    seoTitle: 'Team PTO & Vacation Tracker | SolutionKit',
    hero: {
      title: 'Stop vacation conflicts before they happen',
      subtitle: 'Visual absence calendar. Prevent understaffing and approve time-off fast.',
    },
    pain: {
      heading: 'Two key people off at the same time = Chaos',
      description: [
        'Without a visual calendar, you accidentally approve overlapping vacations.',
        'Tracking remaining PTO days in spreadsheets is prone to errors.',
      ],
    },
    solution: {
      heading: 'First come, first served (with approval)',
      description: [
        'Employees check the calendar and request dates. System flags conflicts instantly.',
        'Timeline view shows exactly who is "In" and "Out" for the next month.',
      ],
    },
    features: [
      { title: 'Conflict Alert', description: 'Warns if department coverage is too low.', icon: 'shield' },
      { title: 'Team View', description: 'Unified calendar for the whole company.', icon: 'clock' },
      { title: '1-Click Approve', description: 'Approve requests directly from email.', icon: 'check' },
      { title: 'Balance Track', description: 'Auto-deducts days from annual allowance.', icon: 'zap' },
    ],
    pricing: {
      value: '7.90',
      period: 'mo',
      comparison: 'Up to 10 employees',
    },
    cta: 'TRACK PTO',
  },

  // 22. Timesheet -> Timesheet
  {
    id: 'timesheet',
    slug: 'consultant-timesheet-generator',
    seoTitle: 'Professional Consultant Timesheet Generator | SolutionKit',
    hero: {
      title: 'Prove your work hours and get paid faster',
      subtitle: 'Generate professional PDF timesheets to attach to your invoices.',
    },
    pain: {
      heading: 'Clients question "What did you do all week?"',
      description: [
        'You worked hard, but the client feels the bill is high. Without a log, it\'s your word vs. theirs.',
        'Sending a raw Excel file looks amateur.',
      ],
    },
    solution: {
      heading: 'Transparency builds trust',
      description: [
        'Log hours or use the timer. Add descriptions (e.g., "Debugged Login API").',
        'Generate a branded PDF report. Indisputable proof of effort.',
      ],
    },
    features: [
      { title: 'Easy Timer', description: 'Start/Stop tracker on desktop or mobile.', icon: 'clock' },
      { title: 'PDF Report', description: 'Clean, professional format.', icon: 'check' },
      { title: 'Project Segments', description: 'Separate hours by Client or Project.', icon: 'zap' },
      { title: 'Rate Calc', description: 'Auto-calculates total: Hours x Rate.', icon: 'shield' },
    ],
    pricing: {
      value: '4.90',
      period: 'mo',
      comparison: 'Time is money',
    },
    cta: 'START TRACKING',
  },

  // 23. Rent Calc -> Rent Inflation
  {
    id: 'rent-calc',
    slug: 'rent-inflation-calculator',
    seoTitle: 'Rent Increase & Inflation Calculator | SolutionKit',
    hero: {
      title: 'Calculate rent increases fairly and legally',
      subtitle: 'Pull official inflation data (CPI) and generate a notification letter.',
    },
    pain: {
      heading: 'Arbitrary increases upset tenants',
      description: [
        'Texting "Rent is going up $50" feels greedy. Tenants push back.',
        'Forgetting to adjust for inflation means you effectively lose money every year.',
      ],
    },
    solution: {
      heading: 'Data-Backed Adjustments',
      description: [
        'Select the inflation index (e.g., CPI) and date range. System calculates the exact allowed increase.',
        'Generates a formal PDF notice citing the data source. Professional and objective.',
      ],
    },
    features: [
      { title: 'Official Data', description: 'Linked to government inflation statistics.', icon: 'check' },
      { title: 'Formal Notice', description: 'Template letter ready to print/email.', icon: 'shield' },
      { title: 'Portfolio', description: 'Save calculations for multiple units.', icon: 'zap' },
      { title: 'Renewal Alert', description: 'Reminds you 60 days before lease end.', icon: 'clock' },
    ],
    pricing: {
      value: '3.90',
      period: 'unit',
      comparison: 'Per year',
    },
    cta: 'CALCULATE INCREASE',
  },

  // 24. Recibo -> Invoice Gen
  {
    id: 'receipt-gen',
    slug: 'freelance-invoice-generator',
    seoTitle: 'Freelancer Invoice & Receipt Generator | SolutionKit',
    hero: {
      title: 'Get paid like a professional business',
      subtitle: 'Create clean invoices and payment receipts in seconds.',
    },
    pain: {
      heading: '"Just Venmo me" looks unprofessional',
      description: [
        'Corporate clients need a proper invoice for their taxes. Without one, payment gets delayed.',
        'Creating Word docs from scratch every time is a waste of life.',
      ],
    },
    solution: {
      heading: 'Instant Invoicing',
      description: [
        'Enter service details and amount. System adds tax if needed.',
        'Generates a PDF link to send via email or text. Look professional, get paid faster.',
      ],
    },
    features: [
      { title: 'Tax Config', description: 'Add VAT or Sales Tax easily.', icon: 'check' },
      { title: 'Mobile Sign', description: 'Sign the receipt on your phone screen.', icon: 'zap' },
      { title: 'Share Link', description: 'Lightweight link, no heavy attachments.', icon: 'clock' },
      { title: 'Records', description: 'Keep a history of all billed amounts.', icon: 'shield' },
    ],
    pricing: {
      value: '7.90',
      period: 'mo',
      comparison: 'Unlimited invoices',
    },
    cta: 'CREATE INVOICE',
  },

  // 25. Password Manager -> Access Vault
  {
    id: 'password-manager',
    slug: 'agency-password-vault',
    seoTitle: 'Client Access & Password Manager for Agencies | SolutionKit',
    hero: {
      title: 'Stop texting client passwords to your team',
      subtitle: 'Encrypted vault designed for agencies to share access securely without revealing credentials.',
    },
    pain: {
      heading: 'Spreadsheets are a security breach waiting to happen',
      description: [
        'If your Google Sheet leaks, your clients get hacked and you get sued.',
        'When an employee quits, do you really change 50 client passwords manually?',
      ],
    },
    solution: {
      heading: 'Share access, not secrets',
      description: [
        'Store credentials in the vault. Share "Access" with staff via browser extension.',
        'They log in without ever seeing the actual password. Revoke instantly.',
      ],
    },
    features: [
      { title: 'Zero Knowledge', description: 'Encryption means even we can\'t see your data.', icon: 'shield' },
      { title: 'Client Buckets', description: 'Group logins by Client Account.', icon: 'check' },
      { title: 'Auto-Fill', description: 'Browser extension fills login forms.', icon: 'zap' },
      { title: 'Audit Logs', description: 'See exactly who accessed which account and when.', icon: 'clock' },
    ],
    pricing: {
      value: '14.90',
      period: 'mo',
      comparison: 'For up to 5 users',
    },
    cta: 'SECURE ACCESS',
  },
];