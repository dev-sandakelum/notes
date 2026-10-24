import type { ChapterData } from "@/content/types";

const chapter: ChapterData = {
  "meta": {
    "slug": "09-securing-information-systems",
    "number": 9,
    "title": "Securing information systems",
    "subtitle": "Lecture 09 · Threats & vulnerabilities, controls, encryption, firewalls, laws & audits",
    "kind": "topic",
    "words": 2548,
    "minutes": 13
  },
  "blocks": [
    {
      "type": "heading",
      "depth": 3,
      "id": "security-and-controls-definitions",
      "text": "Security and controls: definitions"
    },
    {
      "type": "paragraph",
      "html": "Two precise definitions open the lecture and both are directly examinable. <b>Security</b> refers to the <b>policies, procedures, and technical measures used to prevent unauthorized access, alteration, theft, or physical damage to information systems</b>. <b>Controls</b> are the <b>methods, policies, and organizational procedures that ensure the safety of the organization's assets, the accuracy and reliability of its accounting records, and operational adherence to management standards</b>. In short: security prevents bad things from happening; controls are the broader methods that keep the whole organization safe and accurate."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "why-systems-are-vulnerable",
      "text": "Why systems are vulnerable"
    },
    {
      "type": "paragraph",
      "html": "Contemporary security challenges exist everywhere a web application touches: a web client, a server, corporate information systems linked to databases, each component has vulnerabilities, and floods, fires, power failures and other electrical problems can disrupt the network at any point. The lecture lists six general reasons systems are vulnerable: <b>(1) accessibility of networks</b>, <b>(2) hardware problems</b> (breakdowns, configuration errors, damage from improper use or crime), <b>(3) software problems</b> (programming errors, installation errors, unauthorized changes), <b>(4) disasters</b>, <b>(5) use of networks/computers outside the firm's control</b>, and <b>(6) loss and theft of portable devices</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "internet-and-wireless-vulnerabilities",
      "text": "Internet & wireless vulnerabilities"
    },
    {
      "type": "paragraph",
      "html": "The Internet is <b>open to anyone</b>, and its size means abuses can have wide impact. The use of <b>fixed Internet addresses with cable/DSL modems creates fixed targets for hackers</b>. Unencrypted VoIP can be intercepted; e-mail and P2P carry interception risks, attachments with malicious software, and the risk of transmitting trade secrets. Wireless adds more: <b>radio frequency bands are easy to scan</b>. <b>SSIDs (service set identifiers)</b> identify access points, are <b>broadcast multiple times</b>, and can be detected by sniffer programs. <b>War driving</b> means eavesdroppers drive by buildings trying to detect the SSID and gain access to the network and its resources. Once an access point is breached, an intruder can use the operating system to access networked drives and files."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "malware-malicious-software",
      "text": "Malware (malicious software)"
    },
    {
      "type": "table",
      "head": [
        "Malware type",
        "How it works"
      ],
      "rows": [
        [
          "<b>Virus</b>",
          "Rogue program that <b>attaches itself to other software programs or data files</b> to be executed"
        ],
        [
          "<b>Worm</b>",
          "<b>Independent programs that copy themselves</b> from one computer to others over a network"
        ],
        [
          "<b>Trojan horse</b>",
          "Software that <b>appears benign but does something other than expected</b>"
        ],
        [
          "<b>SQL injection attack</b>",
          "Hackers submit data to web forms that <b>exploit the site's unprotected software</b> and send a rogue SQL query to the database"
        ],
        [
          "<b>Ransomware</b>",
          "Encrypts or seizes the victim's data and <b>demands payment</b> to release it"
        ],
        [
          "<b>Spyware</b>",
          "Small programs that install themselves <b>surreptitiously</b> to monitor web surfing and serve advertising, may reset browser home pages, redirect searches, slow the computer"
        ],
        [
          "<b>Key loggers</b>",
          "Record <b>every keystroke</b> to steal serial numbers, passwords and launch Internet attacks"
        ]
      ]
    },
    {
      "type": "paragraph",
      "html": "Viruses and worms spread through <b>downloads (including drive-by downloads), e-mail and IM attachments, and downloads on web sites and social networks</b>. Even <b>smartphones are as vulnerable as computers</b>, one study found <mark>13,000 types of smartphone malware</mark>."
    },
    {
      "type": "callout",
      "variant": "exam",
      "title": "Virus vs worm: the classic MCQ",
      "html": "A <b>virus needs a host file/program</b> to attach to; a <b>worm is independent</b> and copies itself across the network. Trojan = disguised as benign. Spyware/keyloggers = surveillance. SQL injection attacks the <b>database through web forms</b>."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "hackers-and-computer-crime",
      "text": "Hackers and computer crime"
    },
    {
      "type": "paragraph",
      "html": "<b>Hackers vs crackers</b>: hacking activities include <b>system intrusion, system damage, and cyber vandalism</b>; the intentional disruption, defacement, or destruction of a web site or corporate information system. Key attack techniques: <b>Spoofing</b>: misrepresenting oneself using fake e-mail addresses or masquerading as someone else, or redirecting a web link to an address different from the intended one with the site masquerading as the intended destination. A <b>sniffer</b> is an <b>eavesdropping program that monitors information traveling over a network</b>, enabling hackers to steal proprietary information such as e-mail and company files."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "denial-of-service-attacks-and-botnets",
      "text": "Denial-of-service attacks & botnets"
    },
    {
      "type": "paragraph",
      "html": "A <b>denial-of-service (DoS) attack</b> floods a server with <b>thousands of false requests</b> to crash the network, attackers gain nothing except the satisfaction of halting service. A <b>distributed denial-of-service (DDoS)</b> attack uses <b>numerous computers to launch the DoS</b>. <b>Botnets</b> are networks of <b>\"zombie\" PCs infiltrated by bot malware</b>; botnets deliver <mark>90 percent of the world's spam and 80 percent of its malware</mark>. The <b>Mirai botnet</b> is the lecture's named example. DDoS traffic typically comes from these zombie machines, which makes the attacker hard to trace."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "computer-crime-target-vs-instrument",
      "text": "Computer crime: target vs instrument"
    },
    {
      "type": "paragraph",
      "html": "Computer crime is <b>\"any violation of criminal law that involves a knowledge of computer technology for its perpetration, investigation, or prosecution.\"</b> The computer may be the <b>target of crime</b>, breaching confidentiality of protected computerized data, accessing a system without authority, knowingly accessing a protected computer to commit fraud, intentionally causing damage, transmitting damaging code, or threatening damage. Or the computer may be the <b>instrument of crime</b>, theft of trade secrets, unauthorized copying of software or copyrighted IP (articles, books, music, video), schemes to defraud, e-mail threats or harassment, intercepting electronic communications, illegal access to stored e-mail/voice mail, or transmitting child pornography."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "identity-theft-phishing-and-friends",
      "text": "Identity theft, phishing & friends"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Identity theft</div><div class=\"f-b\">Theft of personal information (social security ID, driver's license, credit card numbers) <b>to impersonate someone else</b></div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Phishing</div><div class=\"f-b\">Setting up <b>fake web sites or sending e-mail that looks like legitimate businesses</b> to trick users into revealing confidential personal data</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Evil twins</div><div class=\"f-b\">Wireless networks that <b>pretend to offer trustworthy Wi-Fi</b> connections</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Pharming</div><div class=\"f-b\"><b>Redirects users to a bogus web page</b> even when they type the correct address into their browser</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Click fraud</div><div class=\"f-b\">Person or program <b>fraudulently clicks online ads</b> with no intention of learning about the advertiser or purchasing</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Cyberterrorism / cyberwarfare</div><div class=\"f-b\">Politically motivated attacks on systems and infrastructure to intimidate or disable</div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "internal-threats-and-software-vulnerability",
      "text": "Internal threats & software vulnerability"
    },
    {
      "type": "paragraph",
      "html": "Security threats often <b>originate inside the organization</b>: employees have <b>inside knowledge</b>, and <b>sloppy security procedures</b> and user lack of knowledge compound the risk. <b>Social engineering</b> means tricking employees into revealing their passwords by pretending to be legitimate members of the company who need information. On the software side, commercial software contains <b>hidden bugs (program code defects)</b> that create vulnerabilities. <b>zero defects cannot be achieved</b> because complete testing is impossible for large programs. <b>Patches</b> are small pieces of software that repair flaws, but <b>exploits are often created faster than patches can be released and implemented</b>. Even <b>microprocessor designs</b> can be faulty, poor security designs of chips let hackers access \"protected\" data, affecting nearly every computer chip manufactured in the last 20 years."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "business-value-of-security-and-control",
      "text": "Business value of security and control"
    },
    {
      "type": "paragraph",
      "html": "Failed computer systems can lead to <b>significant or total loss of business function</b>. Firms are more vulnerable than ever because they hold <b>confidential personal and financial data, trade secrets, new products and strategies</b>. A security breach may <b>cut into a firm's market value almost immediately</b>, and inadequate security brings issues of <b>liability</b>. Legal and regulatory requirements for electronic records management and privacy include: <b>HIPAA</b> (medical security and privacy rules and procedures), the <b>Gramm-Leach-Bliley Act</b> (requires financial institutions to ensure the security and confidentiality of customer data), and the <b>Sarbanes-Oxley Act</b> (imposes responsibility on companies and their management to safeguard the accuracy and integrity of financial information used internally and released externally)."
    },
    {
      "type": "table",
      "head": [
        "Law",
        "Domain",
        "Requires"
      ],
      "rows": [
        [
          "<b>HIPAA</b>",
          "Healthcare",
          "Medical security and privacy rules and procedures"
        ],
        [
          "<b>Gramm-Leach-Bliley Act</b>",
          "Financial institutions",
          "Ensure security and confidentiality of customer data"
        ],
        [
          "<b>Sarbanes-Oxley Act</b>",
          "Public companies",
          "Safeguard accuracy and integrity of financial information (internal &amp; external)"
        ]
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "electronic-evidence-and-computer-forensics",
      "text": "Electronic evidence & computer forensics"
    },
    {
      "type": "paragraph",
      "html": "<b>Electronic evidence</b>: evidence for white-collar crimes is often in digital form, data on computers, e-mail, instant messages, e-commerce transactions, and proper control of data can save time and money when responding to legal <b>discovery requests</b>. <b>Computer forensics</b> is the <b>scientific collection, examination, authentication, preservation, and analysis of data from computer storage media</b> that can be used as evidence in a court of law; it includes recovery of ambient and hidden data."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "information-systems-controls",
      "text": "Information systems controls"
    },
    {
      "type": "paragraph",
      "html": "Information systems controls are both manual and automated, and split into two families. <b>General controls</b> govern the design, security and use of computer programs and the security of data files <b>throughout the organization's IT infrastructure</b>; they apply to <b>all computerized applications</b> and combine hardware, software and manual procedures to create the overall control environment. <b>Application controls</b> are <b>specific to each computerized application</b> (such as payroll or order processing), include both automated and manual procedures, and ensure that <b>only authorized data are completely and accurately processed</b> by that application."
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">6 types of general controls</div><div class=\"f-b\">1· Software controls · 2· Hardware controls · 3· Computer operations controls · 4· Data security controls · 5· Implementation controls · 6· Administrative controls</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Application controls</div><div class=\"f-b\"><b>Input controls</b> (data is accurate &amp; authorized on entry) · <b>Processing controls</b> · <b>Output controls</b></div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "the-organizational-framework-for-security-and-control",
      "text": "The organizational framework for security and control"
    },
    {
      "type": "paragraph",
      "html": "<b>Risk assessment</b> determines the level of risk to the firm if a specific activity or process is not properly controlled, considering the <b>types of threat, probability of occurrence during the year, potential losses (value of the threat), and the expected annual loss</b>. A <b>security policy</b> ranks information risks, identifies acceptable security goals, and identifies mechanisms for achieving those goals. It drives other policies such as the <b>acceptable use policy (AUP)</b>, defining acceptable uses of the firm's information resources and computing equipment, and <b>authorization policies</b>, determining differing <b>levels of user access</b> to information assets."
    },
    {
      "type": "paragraph",
      "html": "<b>Identity management</b> refers to the business processes and tools for <b>identifying valid users of the system and controlling their access</b>, identifying and authorizing different categories of users, specifying which portions of the system each may access, and authenticating users while protecting their identities. Identity management systems <b>capture access rules for different levels of users</b> (e.g. security profiles in a personnel system). <b>Disaster recovery planning</b> devises plans for the <b>restoration of disrupted services</b>, while <b>business continuity planning</b> focuses on <b>restoring business operations</b> after a disaster. Both identify the firm's <b>most critical systems</b>, use <b>business impact analysis</b> to determine the impact of an outage, and management must determine <b>which systems are restored first</b>. An <b>information systems audit</b> examines the firm's overall security environment and the controls governing individual information systems, reviewing technologies, procedures, documentation, training and personnel; it may even <b>simulate a disaster</b> to test the response of technology and staff, and it lists, ranks and estimates the probability of control weaknesses and their financial and organizational impact."
    },
    {
      "type": "callout",
      "variant": "tip",
      "title": "Memory hook: recovery vs continuity",
      "html": "<b>Disaster recovery = restore the SYSTEMS/services; business continuity = restore the BUSINESS operations.</b> Both plans are needed, both start from business impact analysis."
    },
    {
      "type": "heading",
      "depth": 3,
      "id": "tools-and-technologies-for-safeguarding-information-resources",
      "text": "Tools and technologies for safeguarding information resources"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "1-authentication-and-identity-management-software",
      "text": "1 · authentication & identity management software"
    },
    {
      "type": "paragraph",
      "html": "Identity management software automates keeping track of all users and privileges, authenticating users, protecting identities and controlling access. <b>Authentication</b> methods include <b>password systems, tokens, smart cards, biometric authentication, and two-factor authentication</b> (combining two independent methods, e.g. password + OTP token)."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "2-firewalls-intrusion-detection-and-antivirus",
      "text": "2 · firewalls, intrusion detection & antivirus"
    },
    {
      "type": "paragraph",
      "html": "A <b>firewall</b> is a combination of <b>hardware and software that prevents unauthorized users from accessing private networks</b>, placed between the firm's private network and the public Internet. Its technologies include <b>static packet filtering, stateful inspection, network address translation (NAT), and application proxy filtering</b>. <b>Intrusion detection systems (IDS)</b> monitor hot spots on corporate networks to detect and deter intruders, examining <b>events as they happen</b> to discover attacks in progress. <b>Antivirus and antispyware software</b> check computers for the presence of malware and can often eliminate it, but require <b>continual updating</b>. <b>Unified threat management (UTM)</b> systems combine multiple security functions in a single appliance."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "3-securing-wireless-networks",
      "text": "3 · securing wireless networks"
    },
    {
      "type": "paragraph",
      "html": "WEP security can provide some protection by <b>assigning a unique name to the network's SSID and not broadcasting the SSID</b>, and by using WEP together with <b>VPN technology</b>. The Wi-Fi Alliance finalized the <b>WPA2 specification, replacing WEP with stronger standards</b>, continually changing keys and an <b>encrypted authentication system with a central server</b>."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "4-encryption",
      "text": "4 · encryption"
    },
    {
      "type": "paragraph",
      "html": "<b>Encryption</b> is the process of <b>transforming text or data into cipher text that cannot be read by unintended recipients</b>. Two methods for encryption on networks are <b>Secure Sockets Layer (SSL)</b> and its successor <b>Transport Layer Security (TLS)</b>, and <b>Secure Hypertext Transfer Protocol (S-HTTP)</b>. There are also two ways to encrypt the data itself:"
    },
    {
      "type": "htmlFigure",
      "html": "<div class=\"fgrid\">\n    <div class=\"fcard\"><div class=\"f-t\">Symmetric key encryption</div><div class=\"f-b\">Sender and receiver use a <b>single, shared key</b>, fast, but the key must be exchanged securely</div></div>\n    <div class=\"fcard\"><div class=\"f-t\">Public key encryption</div><div class=\"f-b\"><b>Two mathematically related keys</b>: the sender encrypts with the recipient's <b>public key</b>; the recipient decrypts with their <b>private key</b></div></div>\n  </div>",
      "alt": "Formula reference cards"
    },
    {
      "type": "paragraph",
      "html": "A <b>digital certificate</b> is a <b>data file used to establish the identity of users and electronic assets</b> for protection of online transactions. It uses a <b>trusted third party, a certification authority (CA)</b>, to validate a user's identity; the CA verifies identity, stores the information in its server, and generates an encrypted digital certificate containing the owner's ID information and a <b>copy of the owner's public key</b>. <b>Public key infrastructure (PKI)</b> is the use of public key cryptography working with a certificate authority, widely used in e-commerce."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "5-availability-network-traffic-and-outsourcing",
      "text": "5 · availability, network traffic & outsourcing"
    },
    {
      "type": "paragraph",
      "html": "Ensuring <b>system availability</b> matters because online transaction processing requires <b>100% availability, no downtime</b>. <b>Fault-tolerant computer systems</b> provide continuous availability (e.g. stock markets) using <b>redundant hardware, software and power supply components</b> so service continues uninterrupted through failures. <b>Deep packet inspection (DPI)</b> controls network traffic, examining data files and sorting low-priority material, and able to block video and music downloads. <b>Security outsourcing</b> uses <b>managed security service providers (MSSPs)</b> to run security operations."
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "6-cloud-mobile-and-software-quality",
      "text": "6 · cloud, mobile & software quality"
    },
    {
      "type": "paragraph",
      "html": "For <b>cloud security</b>, responsibility resides with the <b>company owning the data</b>. Firms must ensure providers give adequate protection: where data are stored, meeting corporate requirements and legal privacy laws, <b>segregation of data from other clients</b>, audits and security certifications, governed by <b>service level agreements (SLAs)</b>. For <b>mobile platforms</b>, security policies must cover mobile devices with guidelines for platforms and applications; <b>mobile device management (MDM)</b> tools handle authorization, inventory records, control updates, <b>lock down/erase lost devices</b> and encryption; software can segregate corporate data on devices. Finally, <b>ensuring software quality</b> uses <b>software metrics</b>, objective, quantified measurements of the system (number of transactions, online response time, payroll checks printed per hour, known bugs per hundred lines of code), plus <b>early and regular testing</b>, <b>walkthroughs</b> (review of specification or design documents by a small group of qualified people) and <b>debugging</b> (the process by which errors are eliminated)."
    },
    {
      "type": "example",
      "title": "Worked example: build a defense-in-depth plan",
      "bodyHtml": "<p>A bank's online system holds customer records and transaction data. For each threat, name the best tool from this lecture: (a) attackers flooding the web server with false requests from thousands of machines; (b) an employee tricked into revealing a password over the phone; (c) interception of customer logins on a public Wi-Fi hotspot; (d) the bank needing proof of transactions for court.</p>",
      "solutionHtml": "<ul>\n        <li><b>(a) Firewall (with stateful inspection / DPI) + DDoS-aware design</b>. DoS/DDoS floods the server with false requests; botnets of zombie PCs launch it.</li>\n        <li><b>(b) Security awareness / anti-social-engineering training + AUP</b>, social engineering tricks employees into revealing passwords by pretending to be legitimate members of the company.</li>\n        <li><b>(c) Encryption. SSL/TLS (or S-HTTP)</b> and caution against \"evil twin\" hotspots that pretend to offer trustworthy Wi-Fi.</li>\n        <li><b>(d) Computer forensics + electronic evidence controls</b>, scientific collection, examination, authentication, preservation and analysis of data for use as evidence in court.</li>\n      </ul>"
    },
    {
      "type": "quiz",
      "title": "Topic 9 Quiz: Securing Information Systems",
      "count": 12,
      "quizSlug": "09-securing-information-systems"
    }
  ]
};

export default chapter;
