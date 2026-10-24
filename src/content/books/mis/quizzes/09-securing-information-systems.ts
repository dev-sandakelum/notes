import type { QuizData } from "@/content/types";

const quiz: QuizData = {
  "slug": "09-securing-information-systems",
  "title": "Topic 9 Quiz — Securing Information Systems",
  "questions": [
    {
      "prompt": "1. Which statement best defines information systems <b>security</b>?",
      "options": [
        "Methods ensuring accuracy of accounting records",
        "Policies, procedures and technical measures preventing unauthorized access, alteration, theft or physical damage to IS",
        "Backing up data every night",
        "Encrypting all e-mail messages"
      ],
      "answer": 1,
      "explanation": "Security = policies, procedures and technical measures to prevent unauthorized access, alteration, theft or physical damage. Controls = methods, policies and organizational procedures ensuring safety of assets, accuracy/reliability of accounting records and adherence to management standards."
    },
    {
      "prompt": "2. An independent program that copies itself from computer to computer over a network is a:",
      "options": [
        "Virus",
        "Trojan horse",
        "Worm",
        "Sniffer"
      ],
      "answer": 2,
      "explanation": "Worms are independent and self-copying over networks. Viruses attach to other programs or data files; trojans appear benign but misbehave; sniffers eavesdrop on network traffic."
    },
    {
      "prompt": "3. \"War driving\" refers to:",
      "options": [
        "Eavesdroppers driving by buildings to detect SSIDs and gain network access",
        "Stealing laptops from parked cars",
        "Racing to exploit patches before release",
        "Aggressive marketing of rogue antivirus software"
      ],
      "answer": 0,
      "explanation": "War driving: driving by buildings and trying to detect the SSID (broadcast multiple times, findable by sniffer programs) to access network resources. Once an access point is breached, intruders can reach networked drives and files."
    },
    {
      "prompt": "4. A DDoS attack differs from a DoS attack because it:",
      "options": [
        "Deletes data permanently",
        "Targets only wireless networks",
        "Sends only one false request",
        "Uses numerous computers (often a botnet) to launch the attack"
      ],
      "answer": 3,
      "explanation": "DDoS = distributed — many machines (zombie PCs in botnets, which deliver ~90% of spam and ~80% of malware; e.g. Mirai) flood the target with false requests."
    },
    {
      "prompt": "5. Setting up fake web sites or e-mails that look like legitimate businesses to obtain confidential personal data is:",
      "options": [
        "Pharming",
        "Phishing",
        "Spoofing",
        "Click fraud"
      ],
      "answer": 1,
      "explanation": "Phishing = fake sites/e-mails that look legitimate to harvest confidential data. Pharming redirects users to a bogus page even when they type the correct address; spoofing = misrepresenting identity; click fraud = fraudulent ad clicks."
    },
    {
      "prompt": "6. \"Theft of trade secrets using e-mail\" is an example of the computer as:",
      "options": [
        "Target of crime",
        "Evidence",
        "Instrument of crime",
        "Witness"
      ],
      "answer": 2,
      "explanation": "When the computer facilitates the crime (stealing trade secrets, e-mail threats, fraud schemes, illegal interception), it is the instrument. When the computer itself is attacked (unauthorized access, data breaches, damaging code), it is the target."
    },
    {
      "prompt": "7. Which law requires financial institutions to ensure the security and confidentiality of customer data?",
      "options": [
        "Gramm-Leach-Bliley Act",
        "HIPAA",
        "Sarbanes-Oxley Act",
        "Acceptable Use Act"
      ],
      "answer": 0,
      "explanation": "Gramm-Leach-Bliley = financial institutions' customer data. HIPAA = medical security/privacy. Sarbanes-Oxley = accuracy and integrity of financial information."
    },
    {
      "prompt": "8. Input, processing and output controls are examples of:",
      "options": [
        "General controls",
        "Administrative controls",
        "Security policies",
        "Application controls"
      ],
      "answer": 3,
      "explanation": "Application controls are unique to each computerized application (payroll, order processing) and include input, processing and output controls. General controls (software, hardware, computer operations, data security, implementation, administrative) apply to all applications."
    },
    {
      "prompt": "9. In public key encryption, the sender encrypts the message using:",
      "options": [
        "The sender's private key",
        "The recipient's public key",
        "A single shared key",
        "The recipient's private key"
      ],
      "answer": 1,
      "explanation": "Public key encryption uses two mathematically related keys: sender encrypts with the recipient's PUBLIC key (found in a directory); recipient decrypts with their PRIVATE key. A single shared key = symmetric encryption."
    },
    {
      "prompt": "10. A certification authority (CA) in a digital certificate system:",
      "options": [
        "Hosts the company web site",
        "Manages firewalls for e-commerce sites",
        "Acts as a trusted third party validating a user's identity and issuing encrypted digital certificates",
        "Audits the firm's general controls annually"
      ],
      "answer": 2,
      "explanation": "The CA verifies the user's identity, stores the information in its server, and generates an encrypted digital certificate containing the owner's ID information and a copy of the owner's public key. PKI = public key cryptography + CA, widely used in e-commerce."
    },
    {
      "prompt": "11. A stock market system with redundant hardware, software and power supplies that provides continuous, uninterrupted service is:",
      "options": [
        "A fault-tolerant computer system",
        "A botnet",
        "A managed security service provider",
        "A deep packet inspection system"
      ],
      "answer": 0,
      "explanation": "Fault-tolerant systems contain redundant hardware, software and power supply components creating an environment of continuous, uninterrupted service — required where online transaction processing demands 100% availability."
    },
    {
      "prompt": "12. \"Known bugs per hundred lines of code\" and \"online response time\" are examples of:",
      "options": [
        "Service level agreements",
        "Risk assessment metrics",
        "Audit findings",
        "Software metrics"
      ],
      "answer": 3,
      "explanation": "Software metrics are objective assessments of systems in the form of quantified measurements — transactions, response time, payroll checks printed per hour, known bugs per hundred lines of code. They support early/regular testing, walkthroughs and debugging."
    }
  ]
};

export default quiz;
