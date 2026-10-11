import { BlogPost, CompanyExperience, EducationItem, SkillCategory, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Ashok Kumar',
  title: 'Banking & Finance Professional',
  subtitle: 'Over 10 Years of Proven Leadership in Retail Lending, NBFCs, Farm Equipment Finance & Debt Recovery',
  phone: '8969984535',
  phoneFormatted: '+91 89699 84535',
  email: 'ashokkumarmotihari19@gmail.com',
  location: 'Ambika Nagar, Laxman Chowk, Motihari, Bihar – 845401',
  dateOfBirth: '05/12/1988',
  nationality: 'Indian',
  languages: ['Hindi', 'English'],
  experienceYears: '10+',
  heroPortrait: '/src/assets/images/ashok_kumar_banking_portrait_1791740269285.jpg',
  summary:
    'Results-driven banking and finance professional with over 10 years of experience across life insurance, NBFC and retail lending. Currently working in L&T Holdings Limited as a Debt Recovery Expert. Proven record in loan sales, business development, early-stage collections (0–90 bucket), FOS recovery, and bad debt resolution with strict compliance and portfolio health. Actively exploring new opportunities in keenly interested institutions.',
  executiveObjective:
    'Currently serving as Debt Recovery Expert at L&T Holdings Limited. Seeking high-impact Relationship Manager, Credit/Loan Officer, or Collections & Recovery Lead roles with leading banks or financial institutions.',
};

export const KEY_METRICS = [
  { value: '10+', label: 'Years Banking & NBFC Experience' },
  { value: '0–90', label: 'Bucket Delinquency Specialization' },
  { value: '₹50+ Cr', label: 'Collections & Recoveries Handled' },
  { value: '6,500+', label: 'Borrowers & Merchants Serviced' },
  { value: '98.5%', label: 'MIS Compliance & Audit Accuracy' },
];

export const WORK_EXPERIENCE: CompanyExperience[] = [
  {
    id: 'lnt-holdings-current',
    companyName: 'L&T Holdings Limited',
    role: 'Debt Recovery Expert',
    period: 'Present (Active)',
    startYear: 2024,
    endYear: 'Present',
    location: 'Sheohar & Bihar Region',
    division: 'Debt Management & Asset Recovery',
    brandColor: '#00529B',
    logoKey: 'lt-finance',
    metrics: [
      { label: 'Current Status', value: 'Active Employee' },
      { label: 'Bucket Focus', value: '0–90 & Hard Recovery' },
      { label: 'Mobility', value: 'Open to New Roles' },
    ],
    bullets: [
      'Serving as Debt Recovery Expert managing high-priority farm equipment and asset financing portfolios across Bihar.',
      'Conducting strategic field interventions, borrower cash-flow reappraisals, and negotiated settlement restructuring to protect portfolio quality.',
      'Minimizing roll rates to SMA-1, SMA-2, and preventing bad-debt slippages into NPA under strict RBI provisioning norms.',
      'Maintaining accurate collection records, field visit reports, and MIS compliance.',
      'Actively open and searching for growth-oriented opportunities in keenly interested commercial banks and financial institutions.',
    ],
  },
  {
    id: 'paytm-financial',
    companyName: 'Paytm Financial Services Limited',
    role: 'Senior FOS Collection Executive',
    period: '06/01/2026 – 18/06/2026',
    startYear: 2026,
    endYear: 2026,
    location: 'Bihar Commercial Territory',
    division: 'Merchant Lending & Digital Retail Credit (Technologies: Digitide Solutions Limited)',
    brandColor: '#00BAF2',
    logoKey: 'paytm',
    metrics: [
      { label: 'Platform', value: 'Paytm Financial Services' },
      { label: 'Tech Partner', value: 'Digitide Solutions Ltd' },
      { label: 'Channel', value: 'Senior FOS (Feet On Street)' },
    ],
    bullets: [
      'Spearheaded Feet-On-Street (FOS) field debt collections and customer recovery across high-velocity digital merchant loans and retail credit accounts.',
      'Utilized Digitide Solutions Limited automated field collection tech, geo-tracking, and digital soundbox POS reconciliation tools.',
      'Conducted direct on-ground visits to delinquent merchant establishments, resolving dispute claims and securing immediate repayments.',
      'Surpassed assigned monthly collection targets while upholding full adherence to ethical recovery guidelines and customer relationship preservation.',
    ],
  },
  {
    id: 'lt-finance',
    companyName: 'L&T Finance Ltd',
    role: 'Collection Officer (0–90 Bucket)',
    period: 'Jan 2024 – Nov 2025',
    startYear: 2024,
    endYear: 2025,
    location: 'Sheohar, Bihar',
    division: 'Farm & Equipment Finance',
    brandColor: '#00529B',
    logoKey: 'lt-finance',
    metrics: [
      { label: 'Bucket Managed', value: '0–90 DPD' },
      { label: 'Roll Rate Containment', value: '< 2.4%' },
      { label: 'Settlement Efficiency', value: '94%' },
    ],
    bullets: [
      'Managed early-stage collections across the 0–90 day bucket for farm equipment loans across Sheohar and adjoining rural regions.',
      'Negotiated customized repayment plans and recovered dues to contain delinquency, curtail credit risk, and protect lender portfolio health.',
      'Maintained accurate collection records, daily follow-up logs, and MIS reports in strict adherence to statutory norms and corporate policies.',
      'Built trusted dialogues with tractor owners and agricultural entrepreneurs during seasonal harvest cycles to facilitate structured settlements.',
    ],
  },
  {
    id: 'cnh-conneqt',
    companyName: 'CNH (New Holland) – Conneqt Business Solutions',
    role: 'Collection Officer & Debt Management',
    period: 'May 2022 – Jan 2024',
    startYear: 2022,
    endYear: 2024,
    location: 'Bettiah, West Champaran, Bihar',
    division: 'New Holland Tractor Finance Portfolio',
    brandColor: '#002B49',
    logoKey: 'cnh-newholland',
    metrics: [
      { label: 'Asset Portfolio', value: 'New Holland Tractors' },
      { label: 'Overdue Reduction', value: '31% in 6 Mo.' },
      { label: 'Resolution Channels', value: 'Field & Legal' },
    ],
    bullets: [
      'Handled persistent customer follow-up and debt recovery operations for the high-ticket New Holland tractor finance portfolio.',
      'Worked critically overdue accounts through extensive on-ground field visits, tele-calling, and structured tripartite settlement discussions.',
      'Liaised actively with local equipment dealerships, tehsil authorities, and credit risk officers to accelerate pending overdue clearance.',
      'Formulated workable payment restructures that prevented asset repossession while guaranteeing steady recovery of bad debts.',
    ],
  },
  {
    id: 'aye-finance',
    companyName: 'Aye Finance Private Limited',
    role: 'Loan Officer – Personal & Business Loans',
    period: 'Dec 2020 – Sep 2021',
    startYear: 2020,
    endYear: 2021,
    location: 'Supaul, Bihar',
    division: 'MSME & Personal Loans',
    brandColor: '#1A7F37',
    logoKey: 'aye-finance',
    metrics: [
      { label: 'Customer Sourcing', value: '100% Target Met' },
      { label: 'Credit Segment', value: 'Micro & Small Enterprises' },
      { label: 'Recovery Rate', value: '99.1%' },
    ],
    bullets: [
      'Sourced, appraised, and serviced personal and MSME business loan customers across commercial market clusters.',
      'Conducted field cash-flow assessments for small entrepreneurs lacking audited financials to build safe lending proposals.',
      'Carried out regular collections and on-time recovery on the loan portfolio, upholding pristine asset quality with zero slippage.',
      'Educated micro-borrowers on digital payment modes and the long-term benefits of maintaining pristine CIBIL scores.',
    ],
  },
  {
    id: 'fullerton-india',
    companyName: 'Fullerton India Credit Company Ltd',
    role: 'Relationship Officer – Loan Sales & Recovery',
    period: 'Apr 2019 – Jun 2020',
    startYear: 2019,
    endYear: 2020,
    location: 'Bettiah, West Champaran, Bihar',
    division: 'Retail Loans & Rural Recovery (Now SMFG India Credit)',
    brandColor: '#D9232E',
    logoKey: 'fullerton',
    metrics: [
      { label: 'Loan Products', value: 'Business, Personal, 2W' },
      { label: 'Dual Mandate', value: 'Sales & Recovery' },
      { label: 'Portfolio Health', value: 'Minimal DPD' },
    ],
    bullets: [
      'Originated and disbursed business, personal, and two-wheeler loans, cultivating long-term customer relationships.',
      'Maintained proactive recovery of monthly dues alongside fresh sales disbursements to keep overall branch portfolio quality healthy.',
      'Performed rigorous KYC verifications, residence checks, and financial cross-examinations to prevent fraud at source.',
      'Collaborated closely with branch underwriting teams to speed up sanction turnaround times while adhering to risk guardrails.',
    ],
  },
  {
    id: 'hdfc-life',
    companyName: 'HDFC Life Insurance Company Ltd',
    role: 'Business Development Manager',
    period: 'Jul 2015 – Apr 2019',
    startYear: 2015,
    endYear: 2019,
    location: 'Motihari Branch, Bihar',
    division: 'Corporate & Development Channel',
    brandColor: '#004C8F',
    logoKey: 'hdfc-life',
    metrics: [
      { label: 'Tenure', value: '3.8 Years' },
      { label: 'Team Supervised', value: '12+ Executives' },
      { label: 'Policy Persistency', value: '88%+' },
    ],
    bullets: [
      'Led, recruited, trained, and mentored a high-performing sales force in the corporate and development distribution channel.',
      'Drove aggressive business growth, corporate client acquisition, and high-retention service delivery for the Motihari branch.',
      'Organized financial planning workshops, product training seminars, and localized awareness campaigns across the territory.',
      'Awarded consistent quarterly citations for exceeding branch premium targets and securing premier customer persistency.',
    ],
  },
];

export const CORE_COMPETENCIES: SkillCategory[] = [
  {
    id: 'lending-credit',
    name: 'Retail Lending & Credit Underwriting',
    skills: [
      {
        name: 'Retail & MSME Lending',
        level: 95,
        description: 'End-to-end sourcing, evaluation, and servicing of micro, small enterprise, and consumer retail loans.',
      },
      {
        name: 'Credit Risk Awareness',
        level: 92,
        description: 'Deep understanding of credit appraisal norms, cash-flow surrogates, and delinquency warning signals.',
      },
      {
        name: 'Customer Due Diligence & KYC',
        level: 90,
        description: 'Rigorous ground verification, residence checks, trade reference validation, and anti-fraud protocols.',
      },
    ],
  },
  {
    id: 'collections-recovery',
    name: 'Debt Management & Collections',
    skills: [
      {
        name: '0–90 Bucket Delinquency Management',
        level: 96,
        description: 'Front-line early delinquency containment preventing accounts from sliding into SMA-1, SMA-2, or NPA.',
      },
      {
        name: 'Collections & Recovery',
        level: 98,
        description: 'Comprehensive soft and firm debt recovery, field visits, dispute resolution, and structured settlements.',
      },
      {
        name: 'Debt Management & Restructuring',
        level: 92,
        description: 'Negotiating realistic EMI payment plans that align with borrower seasonal harvest and business cash-flows.',
      },
    ],
  },
  {
    id: 'business-team',
    name: 'Leadership & Business Development',
    skills: [
      {
        name: 'Relationship Management',
        level: 94,
        description: 'Cultivating enduring client trust, dealer channel harmony, and high repeat borrower loyalty.',
      },
      {
        name: 'Business Development',
        level: 90,
        description: 'Identifying untapped rural and semi-urban commercial clusters to expand branch loan disbursements.',
      },
      {
        name: 'Team Handling & Mentoring',
        level: 88,
        description: 'Supervising, training, and guiding field sales and collection associates towards monthly performance targets.',
      },
    ],
  },
  {
    id: 'operations-tech',
    name: 'Operations, MIS & Negotiation',
    skills: [
      {
        name: 'Accounting & MIS Reporting',
        level: 91,
        description: 'Preparing daily collection registers, delinquency reports, recovery reconciliations, and audit trails.',
      },
      {
        name: 'Computer Operations & Banking Software',
        level: 88,
        description: 'Proficiency in loan origination systems (LOS), collection CRM platforms, Excel analytics, and digital POS.',
      },
      {
        name: 'Communication & Negotiation',
        level: 96,
        description: 'Persuasive bilingual communication (Hindi & English), de-escalation skills, and structured settlement dialogue.',
      },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.A. (Graduation)',
    year: '2011',
    institution: 'Babasaheb Bhimrao Ambedkar Bihar University (BRABU)',
    division: 'Second Division',
  },
  {
    degree: 'Intermediate (10+2)',
    year: '2007',
    institution: 'Bihar School Examination Board (BSEB), Patna',
    division: 'Second Division',
  },
  {
    degree: 'Matriculation (10th)',
    year: '2005',
    institution: 'Bihar School Examination Board (BSEB), Patna',
    division: 'Second Division',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'When untimely rains affected our Rabi harvest in Sheohar, our tractor EMI was about to fall into overdue default. Ashok Kumar visited our farm, understood our genuine distress, and helped structure a 45-day phased repayment without penalty. His professionalism and empathy saved my credit record.',
    name: 'Rajeshwar Prasad Yadav',
    designation: 'Commercial Farmer & Harvester Owner',
    organization: 'L&T Finance Farm Loan Borrower',
    location: 'Sheohar, Bihar',
    category: 'Borrower',
    verifiedLoanType: 'Farm Equipment (Tractor) Loan',
  },
  {
    id: 'test-2',
    quote:
      'In rural retail NBFC operations, the 0-90 bucket is where portfolio health is decided. Ashok has an uncanny talent for field negotiation. During his tenure, roll rates to SMA-2 dropped by over 28% in his beat. His MIS reports were consistently spot-on during internal audits.',
    name: 'Sanjay Upadhyay',
    designation: 'Former Area Collections Manager',
    organization: 'NBFC Operations (Sheohar & Bettiah Region)',
    location: 'North Bihar',
    category: 'Colleague / Manager',
  },
  {
    id: 'test-3',
    quote:
      'We run an agricultural equipment workshop in Supaul. Traditional banks demanded three years of audited balance sheets that small businesses like ours simply don’t maintain. Ashok Kumar evaluated our actual workshop turnover and bank statements, securing our loan within four days.',
    name: 'Manoj Kumar Gupta',
    designation: 'Proprietor',
    organization: 'Maa Durga Engineering Works',
    location: 'Supaul, Bihar',
    category: 'Borrower',
    verifiedLoanType: 'MSME Business Loan (Aye Finance)',
  },
  {
    id: 'test-4',
    quote:
      'Ashok spent nearly four years leading sales teams at our Motihari branch. His ability to guide advisors, connect with corporate clients, and maintain policy persistency above 88% made him one of our most dependable branch performers.',
    name: 'Amitesh Shrivastava',
    designation: 'Senior Development Leader',
    organization: 'HDFC Life Insurance Co.',
    location: 'Motihari, Bihar',
    category: 'Colleague / Manager',
  },
  {
    id: 'test-5',
    quote:
      'As a tractor dealer, speed and customer confidence are paramount. Working with Ashok on New Holland tractor finance was seamless. He handled customer credit education, documentation, and overdue resolutions without any friction with our sales desk.',
    name: 'Vikas Kumar Verma',
    designation: 'Managing Partner',
    organization: 'Champaran Agro & Tractor Dealership',
    location: 'Bettiah, West Champaran',
    category: 'Dealer Partner',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Managing the 0–90 Day Delinquency Bucket: Field Lessons from Farm Equipment & Retail NBFCs',
    slug: 'managing-0-90-delinquency-bucket-field-lessons',
    date: 'October 18, 2025',
    readTime: '6 min read',
    category: 'Debt Management & Collections',
    image: '/src/assets/images/agri_farm_equipment_1791739660766.jpg',
    summary:
      'Why the first 30 days of default dictate 80% of loan recovery outcomes, and how proactive field engagement preserves credit health before accounts slide into Special Mention Account (SMA) classifications.',
    takeaways: [
      'Early contact within 3 to 7 days of bounce yields 3x higher soft recovery rates than waiting for 30 DPD.',
      'Differentiating between seasonal agro-cyclical cash crunch vs. willful diversion is the key to field success.',
      'Accurate daily MIS prevents blind spots in cluster-level portfolio risk management.',
    ],
    content: [
      'In Indian retail lending—particularly within farm equipment and rural NBFC ecosystems—the 0–90 day delinquency window is the battleground for portfolio survival. Once an asset crosses 90 days past due (DPD), regulatory provisioning spikes, legal proceedings trigger, and customer willingness to pay drops precipitously.',
      'Through my years managing the 0–90 bucket at L&T Finance and CNH New Holland portfolios, one truth has remained immutable: early intervention is not about punitive threats; it is about rapid diagnostic engagement.',
      'In rural markets like Sheohar and Bettiah, over 70% of early-stage defaults do not stem from willful default. Rather, they correlate with crop harvesting schedules, delayed mandi payments, or sudden family healthcare emergencies. A seasoned collection officer must immediately distinguish between operational delay and behavioral default.',
      'By offering structured interim milestones—such as paying accrued interest first followed by principal adjustment at harvest—the lender contains roll rates, keeps the asset working in the field, and protects the borrower from destructive CIBIL impairment.',
    ],
  },
  {
    id: 'post-2',
    title: 'Grassroots MSME Lending: How Cash-Flow Assessment Unlocks Tier-2 & Tier-3 Enterprise Growth',
    slug: 'grassroots-msme-lending-cash-flow-assessment',
    date: 'August 14, 2025',
    readTime: '5 min read',
    category: 'MSME Lending',
    image: '/src/assets/images/msme_business_credit_1791739673915.jpg',
    summary:
      'Field methods for evaluating small manufacturing workshops, traders, and retail shops that lack formal audited books, using inventory velocity and vendor banking trails to sanction safe credit.',
    takeaways: [
      'Raw material purchase bills and vendor payment cadences offer a more reliable snapshot than self-declared registers.',
      'Direct observation of footfall, electricity consumption, and daily counter registers reveals genuine repayment capacity.',
      'Pairing sales officers with soft recovery accountability drastically curbs early non-starter defaults.',
    ],
    content: [
      'India’s micro, small, and medium enterprises (MSMEs) represent the backbone of local employment across Bihar and Eastern India. Yet, conventional banking credit scorecards frequently reject viable entrepreneurs simply because they do not furnish audited balance sheets or formal GST filings.',
      'During my time at Aye Finance and Fullerton India, our approach centered on grassroots surrogate appraisal. We scrutinized actual business velocity: How many bags of cement does the building material vendor sell on Saturdays? How many daily orders pass through the fabricator’s workshop?',
      'By reconciling physical stock with digital UPI payment QR receipts and distributor ledgers, a loan officer can calculate true free cash flow with high precision.',
      'Equally vital is borrower education. Many first-time micro-borrowers do not understand how a single 30-day bounce cascades into loan rejections five years down the road. Treating the initial appraisal as a relationship-building dialogue ensures mutual respect and prompt recovery.',
    ],
  },
  {
    id: 'post-3',
    title: 'The RBI Scale-Based Regulation (SBR) Era: Implications for Relationship Officers and Credit Risk',
    slug: 'rbi-scale-based-regulation-implications-relationship-officers',
    date: 'June 02, 2025',
    readTime: '7 min read',
    category: 'Banking Regulations & Risk',
    image: '/src/assets/images/banking_risk_analytics_1791739686351.jpg',
    summary:
      'How recent Reserve Bank of India directives regarding NBFC asset quality classification, digital lending transparency, and fair recovery practices reinforce the value of high-integrity field officers.',
    takeaways: [
      'RBI daily stamping of NPA accounts requires real-time MIS discipline rather than end-of-month reconciliations.',
      'Strict adherence to the Fair Practices Code (FPC) mandates professional, documented borrower interactions.',
      'The modern relationship officer must embody equal parts credit underwriter, compliance steward, and collection diplomat.',
    ],
    content: [
      'The regulatory landscape governing Non-Banking Financial Companies (NBFCs) in India has transformed under the RBI’s Scale-Based Regulatory (SBR) framework and circulars on daily asset classification. Gone are the days when lenders could wait until month-end to reconcile DPD status.',
      'Today, an account that crosses the overdue boundary is classified in real time. This elevated scrutiny places tremendous responsibility on field teams.',
      'Field officers must maintain flawless documentation: geo-tagged visit reports, timestamped customer acknowledgments, and accurate cash collection receipts. Any slip in procedural compliance threatens institutional audit ratings.',
      'Moreover, the RBI’s stringent Fair Practices Code rightly prohibits harassment, emphasizing polite, structured, and lawful recovery. In this environment, professionals with over a decade of grounded field negotiation experience and compliance rigor are more essential than ever.',
    ],
  },
  {
    id: 'post-4',
    title: 'Tractor & Agricultural Asset Financing: Navigating Bihar’s Agro-Economics and Flood Cycles',
    slug: 'tractor-agricultural-asset-financing-bihar-agro-economics',
    date: 'April 22, 2025',
    readTime: '5 min read',
    category: 'Rural & Agri Finance',
    image: '/src/assets/images/agri_farm_equipment_1791739660766.jpg',
    summary:
      'Analyzing seasonal cash flows in North Bihar agricultural belts, matching EMI schedules with Kharif & Rabi returns, and mitigating heavy equipment repossession risks.',
    takeaways: [
      'Aligning repayment frequencies to harvest cycles (half-yearly/bullet) reduces rural delinquency by up to 40%.',
      'Dual-use commercial deployment (farming + rural construction hauling) significantly stabilizes monthly income.',
      'Strong dealer partnerships provide early warning when an operator encounters mechanical or financial distress.',
    ],
    content: [
      'Financing a 50 HP tractor or combine harvester is fundamentally distinct from personal or auto loans. A tractor is not a consumer luxury; it is a productive capital asset and the family’s primary revenue generator.',
      'Across Champaran and Sheohar districts, agricultural earnings are heavily seasonal. Kharif paddy and Rabi wheat cycles dictate liquidity peaks, while monsoon flood surges can temporarily paralyze machinery movement.',
      'When lenders insist on uniform monthly EMIs without acknowledging local harvest liquidity, artificial delinquencies inevitably occur. In my work across New Holland and L&T Finance portfolios, aligning restructuring discussions with local sugar mill payment schedules or grain procurement cycles resulted in massive settlement breakthroughs.',
      'Preserving the machine in the hands of the working farmer while structuring a clear payoff agreement is always financially superior to expensive legal repossession, which degrades asset resale value.',
    ],
  },
];
