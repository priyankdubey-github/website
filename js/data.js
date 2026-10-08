/* =========================================================
   Site content that appears in lists. Edit here to add news
   or publications; the pages update automatically.
   ========================================================= */

// Authors: `me: true` makes the name bold; `url` links the name.
window.AUTHORS = {
  "Priyank Dubey": { me: true },
  "Daniel Selva": { url: "https://www.selva-research.com/" },
  "Andreas M. Hein": {},
  "Bilal Shah": {},
  "Loveneesh Rana": {},
  "A. F. Bühler": {},
  "Spyridon Gouvalas": {},
  "Alesia Herasimenka": {},
  "J. Bahlmann": {},
  "Dipak Kumar Giri": {},
  "Arya Das": {},
  "B. Soumya": {},
  "V. Saini": {},
  "C. Sikarwar": {},
  "Abhijeet": {},
  "N. Jaggi": {},
  "A. Prakash": {},
  "Gaurav": {},
  "K. Basak": {},
  "T. K. Kumar": {},
};

// News, newest first. `date` is YYYY-MM. HTML is allowed in `text`.
window.NEWS = [
  { date: "2026-10", text: "Paper on Renormalization Group methods for cislunar space situational awareness accepted to the <strong>2027 IEEE Aerospace Conference</strong> (Big Sky, MT)." },
  { date: "2026-09", text: "Presented <strong>QSearchNet</strong> at IEEE Quantum Week (QCE26) in Toronto, at the NSF Workshop on Signal and Information Processing in the Quantum Era. Supported by an NSF Student Travel Grant." },
  { date: "2026-08", text: "Led the <em>Quantum Algorithms for Optimization</em> breakout session and presented two works at the US CLIVAR Workshop on Quantum Computing and Sensing for Weather and Climate (ONR &amp; UCAR, Boulder)." },
  { date: "2026-06", text: "Mentoring students at <strong>Camp SOAR</strong> and building a spacecraft concurrent-design web platform for the program." },
  { date: "2025-04", text: "Joined <strong>NASA Jet Propulsion Laboratory</strong> (SDMC Group) to develop Simulated Quantum Annealing for Deep Space Network scheduling." },
  { date: "2024-08", text: "Started my Ph.D. in Systems Engineering at <strong>Texas A&amp;M University</strong> in the SEAK Lab with Dr. Daniel Selva." },
  { date: "2023-10", text: "Presented three papers at the <strong>74th International Astronautical Congress</strong> (IAC 2023) in Baku, Azerbaijan." },
];

// Publications, newest first. `selected: true` shows it on the homepage.
// Optional: `cover: "assets/images/covers/x.jpg"` (otherwise a generated pattern is drawn)
//           `links: { Paper: "https://...", Slides: "https://..." }`
window.PUBLICATIONS = [
  {
    year: 2027, selected: true,
    title: "A Renormalization Group Inspired Approach for Cislunar Space Situational Awareness",
    authors: ["Priyank Dubey", "Daniel Selva"],
    venue: "IEEE Aerospace Conference", venueNote: ", Big Sky, MT, 2027",
    badge: { text: "Forthcoming", kind: "info" },
    abstract: "Uses Renormalization Group theory to keep only the degrees of freedom that matter for cislunar space situational awareness, producing compact models that fit near-term quantum hardware while preserving classical solution quality.",
  },
  {
    year: 2026, selected: true,
    title: "QSearchNet: A Quantum Walk Search Framework for Link Prediction",
    authors: ["Priyank Dubey", "Daniel Selva"],
    venue: "IEEE International Conference on Quantum Computing and Engineering (QCE26)", venueNote: ", Toronto, ON, Canada, 2026",
    abstract: "Combines topology-aware discrete-time quantum walks with Grover amplitude amplification for link prediction. On the HeaRT hard-negative benchmark it outperforms classical heuristics including Common Neighbors, Adamic-Adar, Resource Allocation, Shortest Path, and Katz.",
    links: { arXiv: "https://arxiv.org/abs/2510.00325", PDF: "https://arxiv.org/pdf/2510.00325" },
  },
  {
    year: 2026, selected: false,
    title: "Can Teleportation Enhance Quantum Walks on Complex Networks?",
    authors: ["Priyank Dubey", "Daniel Selva"],
    venue: "Poster presented at NSF-SIPQ, IEEE Quantum Week (QCE26)", venueNote: ", Toronto, ON, Canada, 2026",
    badge: { text: "Poster", kind: "info" },
    abstract: "Explores whether adaptive quantum teleportation can improve quantum-walk methods on sparse complex networks by capturing long-range correlations while preserving local structure.",
  },
  {
    year: 2026, selected: true,
    title: "Quantum-accelerated coverage optimization for weather and climate satellite constellations",
    authors: ["Priyank Dubey", "Daniel Selva"],
    venue: "US CLIVAR Workshop on Quantum Computing and Sensing for Weather and Climate Applications", venueNote: ", UCAR, Boulder, CO, 2026",
    badge: { text: "Presentation", kind: "success" },
    abstract: "Formulates coverage optimization for weather and climate satellite constellations so it can be solved with quantum and hybrid quantum-classical methods.",
  },
  {
    year: 2026, selected: false,
    title: "Critical Analysis of Heterogeneous Earth Observation Networks as a Pathway to Quantum-Accelerated Climate Monitoring",
    authors: ["Priyank Dubey", "Daniel Selva"],
    venue: "US CLIVAR Workshop on Quantum Computing and Sensing for Weather and Climate Applications", venueNote: ", UCAR, Boulder, CO, 2026",
    badge: { text: "Poster", kind: "info" },
    abstract: "Analyzes heterogeneous Earth observation networks to identify where quantum acceleration can improve climate monitoring.",
  },
  {
    year: 2024, selected: false,
    title: "Novel Lunar Mission Architecture Design: Deployment of a Prototype Completely Autonomous Oxygen Production Facility on the Moon",
    authors: ["Loveneesh Rana", "A. F. Bühler", "Spyridon Gouvalas", "Priyank Dubey", "J. Bahlmann", "Alesia Herasimenka", "Andreas M. Hein"],
    venue: "IAF Space Exploration Symposium, 75th International Astronautical Congress (IAC 2024)", venueNote: ", 2024",
    abstract: "Conceptual design of the Lunar Oxygen Autonomous Plant (LOAP), a fully autonomous ISRU architecture that extracts and cryogenically stores oxygen from lunar regolith, integrating rover, lander, relocatable solar power, and launch systems.",
    links: { Record: "https://hdl.handle.net/10993/67400" },
  },
  {
    year: 2023, selected: true,
    title: "Satellite Routing with Quantum Annealing: Collecting Space Debris and On-orbit Servicing",
    authors: ["Priyank Dubey", "Andreas M. Hein"],
    venue: "Proceedings of the 74th International Astronautical Congress (IAC-2023)", venueNote: ", Baku, Azerbaijan, 2023",
    abstract: "Maps satellite routing for debris collection and on-orbit servicing to a form solvable by quantum annealing.",
  },
  {
    year: 2023, selected: false,
    title: "Quantum Computing for Space: Exploring Quantum Circuits on Programmable Nanophotonic Chips",
    authors: ["Priyank Dubey", "Andreas M. Hein"],
    venue: "Proceedings of the 74th International Astronautical Congress (IAC-2023)", venueNote: ", Baku, Azerbaijan, 2023",
    abstract: "Explores quantum circuits on programmable nanophotonic chips as a route to quantum computing on board spacecraft.",
  },
  {
    year: 2023, selected: false,
    title: "Secure CubeSat-to-CubeSat Communication using Quantum Key Distribution for Information Updates and Risk Alerts",
    authors: ["Priyank Dubey", "Andreas M. Hein"],
    venue: "Proceedings of the 74th International Astronautical Congress (IAC-2023)", venueNote: ", Baku, Azerbaijan, 2023",
    abstract: "Applies quantum key distribution to secure inter-CubeSat links for information updates and risk alerts.",
  },
  {
    year: 2022, selected: true,
    title: "Deep Speech Based End-to-End Automated Speech Recognition (ASR) for Indian-English Accents",
    authors: ["Priyank Dubey", "Bilal Shah"],
    venue: "arXiv preprint arXiv:2204.00977", venueNote: ", 2022",
    abstract: "Uses transfer learning and fine-tuning of Mozilla DeepSpeech on Indic TTS data to improve end-to-end ASR for Indian-English accents, addressing poor generalization from American-English training data.",
    links: { arXiv: "https://arxiv.org/abs/2204.00977", PDF: "https://arxiv.org/pdf/2204.00977" },
  },
  {
    year: 2022, selected: false,
    title: "Design, Development and Analysis of Gear Based Variable Speed Control Moment Gyros (VSCMGs)",
    authors: ["Priyank Dubey", "Arya Das", "Dipak Kumar Giri"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Designs and analyzes a gear-based variable-speed control moment gyro architecture for spacecraft attitude control.",
  },
  {
    year: 2022, selected: false,
    title: "Novel Gear based Actuation Mechanism for Spacecraft Attitude Control",
    authors: ["Priyank Dubey", "Arya Das", "Dipak Kumar Giri"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Proposes a gear-based actuation mechanism for spacecraft attitude control under actuator constraints and failures.",
  },
  {
    year: 2022, selected: false,
    title: "Bald Eagle Search Optimization based Bioinspired Spacecraft Rendezvous-Docking and Space Debris Mitigation",
    authors: ["Priyank Dubey", "Arya Das", "Dipak Kumar Giri"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Applies Bald Eagle Search optimization to bioinspired spacecraft rendezvous-docking and debris-mitigation trajectories.",
  },
  {
    year: 2022, selected: false,
    title: "Mitigation of Nuclear Space Debris using Advanced Vitrification and Pot Calcination Process: Mission Design and Feasibility Study",
    authors: ["Priyank Dubey", "B. Soumya", "Arya Das", "Dipak Kumar Giri"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Mission design and feasibility study for mitigating nuclear space debris via advanced vitrification and pot calcination.",
  },
  {
    year: 2022, selected: false,
    title: "Artificial Intelligence based 6D Pose Estimation of Uncooperative Targets from Monocular Images",
    authors: ["Arya Das", "Priyank Dubey", "Dipak Kumar Giri"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Estimates 6D pose of uncooperative space targets from monocular imagery using AI methods for rendezvous and docking.",
  },
  {
    year: 2022, selected: false,
    title: "Design and Development of Spacecraft Simulator Testbed: Platform for Validating Maneuvering Control Strategies in Frictionless Environment",
    authors: ["V. Saini", "Arya Das", "C. Sikarwar", "Priyank Dubey", "Dipak Kumar Giri"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Develops a frictionless spacecraft simulator testbed for validating maneuvering and control strategies on the ground.",
  },
  {
    year: 2022, selected: false,
    title: "MagLev based 3-DOF Experimental Platform for Autonomous Spacecraft Rendezvous and Docking",
    authors: ["N. Jaggi", "A. Prakash", "Gaurav", "Priyank Dubey", "Dipak Kumar Giri"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Presents a magnetic-levitation 3-DOF experimental platform for studying autonomous spacecraft rendezvous and docking.",
  },
  {
    year: 2022, selected: false,
    title: "Optimal Trade-Off between Solar Energy and Control Input while Rendezvous and Docking of a CubeSat with a Rotating Target Spacecraft",
    authors: ["Abhijeet", "Dipak Kumar Giri", "Priyank Dubey"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Studies the trade-off between solar energy collection and control effort for CubeSat rendezvous and docking with a rotating target.",
  },
  {
    year: 2022, selected: false,
    title: "A Comparison Study on the Feasibility of Two Low Sloshing Configurations for Small Satellite Magnetic Fluid Actuation",
    authors: ["Priyank Dubey", "K. Basak", "T. K. Kumar", "Arya Das", "Dipak Kumar Giri"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Compares two low-sloshing configurations for magnetic fluid actuation on small satellites.",
  },
  {
    year: 2022, selected: false,
    title: "Design and Path Optimization of a Spacecraft for Space Debris Removal by Burning it into the Earth's Atmosphere",
    authors: ["Dipak Kumar Giri", "Priyank Dubey"],
    venue: "Proceedings of the 73rd International Astronautical Congress (IAC-2022)", venueNote: ", Paris, France, 2022",
    abstract: "Designs and optimizes spacecraft paths for active debris removal via controlled atmospheric re-entry burn-up.",
  },
];
