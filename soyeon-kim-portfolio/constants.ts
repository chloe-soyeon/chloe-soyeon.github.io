import { ContentData } from './types';

// Common Data (Unchanged between languages)
const COMMON_SKILLS = [
  {
    category: "Backend",
    items: ["Spring Boot", "Spring Cloud", "Go", "JPA/MyBatis", "FastAPI", "MSA"],
    level: 85
  },
  {
    category: "Data & Analytics",
    items: ["MariaDB", "MongoDB", "Redis", "R", "Alteryx", "Vector DB"],
    level: 80
  },
  {
    category: "Infra",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
    level: 70
  }
];

const COMMON_PROFILE_BASE = {
  nameKor: "김소연",
  nameEng: "Soyeon Kim",
  email: "soyeon96129@gmail.com",
  github: "https://github.com/chloe-soyeon",
  location: "Seoul, South Korea",
  philosophy: "Technology connects, and connections create change.",
};

// ==========================================
// KOREAN DATA
// ==========================================
export const DATA_KO: ContentData = {
  profile: {
    ...COMMON_PROFILE_BASE,
    title: "Backend Engineer",
    summary: "비즈니스의 언어와 기술의 논리를 연결하여 가치를 창출하는 백엔드 엔지니어입니다. 인문학적 소통과 경영학적 통찰을 기술에 녹여내어, 단순한 기능 개발을 넘어 비즈니스의 핵심 니즈를 꿰뚫는 견고한 아키텍처를 설계합니다.",
    heroTitle: "Architecting the Invisible Flow",
    heroDescription: "견고한 구조는 끊김 없는 연결을 만듭니다. 복잡성을 안정성으로 바꾸는 확장 가능한 백엔드 시스템과 데이터 파이프라인을 설계합니다."
  },
  skills: COMMON_SKILLS,
  experience: [
    {
      id: 1,
      company: "프리랜서 / 프로젝트 팀",
      position: "Backend Developer",
      period: "2024.03 - 현재",
      description: "다양한 애플리케이션을 위한 확장 가능한 백엔드 시스템 및 데이터 파이프라인 개발, MSA 및 성능 최적화에 중점."
    }
  ],
  certifications: [
    { title: "정보처리기사", date: "2025.12.24", issuer: "한국산업인력공단" },
    { title: "데이터아키텍처 준전문가 (DAsP)", date: "2025.04.18", issuer: "한국데이터산업진흥원" },
    { title: "SQL 개발자 (SQLD)", date: "2024.06.21", issuer: "한국데이터산업진흥원" },
    { title: "데이터 분석 준전문가 (ADsP)", date: "2024.03.22", issuer: "한국데이터산업진흥원" },
    { title: "구매자재관리사", date: "2022.12.12", issuer: "K.P.M" },
    { title: "유통관리사 2급", date: "2018.12.05", issuer: "대한상공회의소" },
    { title: "컴퓨터활용능력 1급", date: "2018.12.28", issuer: "대한상공회의소" }
  ],
  projects: [
    {
      id: 1,
      title: "CueCode",
      subtitle: "AI 비언어 커뮤니케이션 플랫폼",
      period: "2025.10",
      role: "Lead Engineer",
      description: "WebFlux 기반의 비동기 처리와 Spring Cloud Gateway를 활용한 MSA 아키텍처 구축.",
      awards: "2025 새싹 해커톤 대상",
      techStack: {
        backend: ["Spring Cloud Gateway", "Spring WebFlux", "Spring Security", "FastAPI"],
        frontend: [],
        db: ["MongoDB", "Redis"],
        infra: ["K-PaaS", "Kubernetes"],
        ai: ["MediaPipe", "DTW Algorithm"]
      },
      details: [
        "기획서, 기술 명세서, 비즈니스 로직 설계 100% 단독 수행",
        "Spring Cloud Gateway & Config Server로 마이크로서비스 통합 관리",
        "WebSocket과 WASM을 활용한 실시간 모션 스트리밍 파이프라인",
        "Redis 캐싱 및 비동기 처리를 통한 응답 속도 최적화"
      ],
      feedbacks: [
        {
          author: "NewsSense (알록달록팀)",
          comment: "동작으로 소통할 수 있다는 점이 좋은 아이디어입니다. 상용화된다면 센터 도움 없이도 환자의 니즈를 파악할 수 있어 큰 도움이 될 것 같아 기대됩니다."
        },
        {
          author: "guswnd043 (AIQ팀)",
          comment: "기획서 구조가 기술적으로 매우 탄탄합니다. 비언어적 표현을 언어적 표현으로 변환하는 아이디어를 기술적으로 실현시킨 점이 인상적입니다."
        },
        {
          author: "fefefe",
          comment: "얼굴 표정과 손 동작을 실시간으로 인식해 변환하는 기능은 꼭 필요하며, 웹캠만으로 접근 가능하다는 점이 실제 사용성을 크게 높일 것 같습니다."
        },
        {
          author: "전기통닭 (고등어향 아기고양이팀)",
          comment: "기술 스택 고도화에 대한 노력이 잘 드러나 있습니다. 꼭 상용화되어 사회 소외계층에게 보탬이 되었으면 좋겠습니다."
        }
      ],
      demoUrl: "https://youtu.be/63pMRV7HN-g?si=gurr7WzjFZ7NiQP5"
    },
    {
      id: 2,
      title: "TradeMon",
      subtitle: "금융 데이터 통합 & RAG 플랫폼",
      period: "2025.03 - 09",
      role: "Sole Developer",
      description: "증권/가상화폐 데이터를 실시간 통합하고 Hybrid RAG(Vector+Keyword) 검색 구현.",
      awards: "졸업 작품 경진대회 우수상",
      techStack: {
        backend: ["Spring Boot", "FastAPI", "Whoosh"],
        frontend: [],
        db: ["MariaDB", "ChromaDB", "MongoDB"],
        infra: ["AWS EC2"],
        ai: ["Hybrid RAG", "OpenAI API"]
      },
      details: [
        "Vector(Chroma)와 Keyword(Whoosh)를 결합한 고정밀 하이브리드 검색 엔진",
        "KRX, 한국투자증권, 업비트 등 이기종 외부 API 실시간 연동",
        "관계형 데이터(자산)와 비정형 데이터(뉴스) 분리 저장 (Polyglot Persistence)"
      ],
      demoUrl: "https://youtu.be/m7D_TF1TVJQ?si=2flbj98nxGyjf_2H"
    },
    {
      id: 3,
      title: "전남와따",
      subtitle: "미디어 기반 여행 일정 생성기",
      period: "2025.06",
      role: "Backend Lead",
      description: "영상위원회 데이터 크롤링 및 GPT 기반의 여행 코스 자동 생성/PDF 변환 시스템.",
      awards: "공공빅데이터 공모전 장려상",
      techStack: {
        backend: ["Spring Boot", "Crawling"],
        frontend: [],
        db: ["MongoDB"],
        infra: [],
        ai: ["GPT Prompt Eng", "Papago API"]
      },
      details: [
        "300여 곳의 촬영지 데이터 ETL(추출/변환/적재) 파이프라인 구축",
        "GPT API를 활용한 자연어 분석 및 맞춤형 여행 코스 생성 로직",
        "다국어(4개국어) 번역 지원 및 iText/OpenPDF 기반 리포트 생성"
      ],
      demoUrl: "https://youtu.be/cNQ0l3HYPWE?si=iaDp1-7vzgFR6FJS"
    },
    {
      id: 4,
      title: "다문화 진로 지원",
      subtitle: "다국어 학과 추천 플랫폼",
      period: "2024.08 - 12",
      role: "Backend Dev",
      description: "언어 장벽 해소를 위한 실시간 번역 및 커리어넷 API 기반 맞춤형 정보 매핑.",
      awards: "",
      techStack: {
        backend: ["Spring Boot", "JavaMail"],
        frontend: [],
        db: ["MariaDB"],
        infra: [],
        ai: ["Papago API", "ChatGPT API"]
      },
      details: [
        "CareerNet API 데이터 구조화 및 다국어 매핑 테이블 설계",
        "사용자 맞춤형 진로 정보를 PDF로 변환하여 이메일 발송 자동화",
        "학부모-자녀 간 정보 공유를 위한 데이터 모델링"
      ],
      demoUrl: "https://youtu.be/Ki0Wv941R3c?si=Ur0o7EHF-LYUpjOK"
    },
    {
      id: 5,
      title: "동화 게이미피케이션",
      subtitle: "모션/음성 인식 에듀테크",
      period: "2024.03 - 12",
      role: "Backend Dev",
      description: "Teachable Machine 모델과 연동된 아동 발달 분석 및 인증 시스템.",
      awards: "한이음 공모전 입선",
      techStack: {
        backend: ["Spring Boot", "Auth"],
        frontend: [],
        db: ["MariaDB"],
        infra: [],
        ai: ["Teachable Machine", "annyang.js"]
      },
      details: [
        "Teachable Machine 기반 자세 분류 모델 학습 및 annyang.js 음성 인식 연동",
        "영유아 건강검진 기준을 적용한 발달 상태 분석 알고리즘 및 시각화",
        "Bootstrap 기반 반응형 웹 및 아동 친화적 UX(색상, 피드백) 설계"
      ],
      demoUrl: "https://youtu.be/RncvDUjt1Fc?si=O8cJQqsfbxclh4k3"
    }
  ],
  awards: [
    { 
      date: "2025.11", 
      title: "2025 새싹 해커톤 대상 - 서울특별시장상", 
      issuer: "서울시/SBA",
      description: "AC/VC 및 AI 전문가 평가를 통해 비즈니스 타당성 및 데이터 활용성 검증"
    },
    { 
      date: "2025.11", 
      title: "프로젝트 작품 경진대회 우수상 - TradeMon", 
      issuer: "한국폴리텍대학",
      description: "통합 금융 데이터 분석 및 모의투자 플랫폼 개발"
    },
    { 
      date: "2025.09", 
      title: "2025년 전라남도 공공빅데이터 활용 아이디어 공모전 장려상", 
      issuer: "(재)전남정보문화산업진흥원",
      description: "외부 공공데이터 수집 및 가공, 조회 기능 구현"
    },
    { 
      date: "2024.12", 
      title: "2024 한이음 ICT 공모전 입선", 
      issuer: "한국정보산업연합회",
      description: "모션 캡쳐, 음성 인식 기술 활용 에듀테크 플랫폼 기능 구현"
    }
  ],
  education: [
    { school: "한국폴리텍대학", major: "빅데이터과", period: "2024.03 ~ 2026.02" },
    { school: "건국대학교", major: "영어영문학 / 경영학", period: "2015.03 ~ 2019.08" }
  ],
  paper: {
    title: "아동 발달 상태 측정을 위한 독서 에듀테크 플랫폼 연구",
    conference: "한국정보처리학회",
    date: "2024.10",
    role: "제1저자"
  },
  ui: {
    nav: {
      profile: "Profile",
      stack: "Stack",
      work: "Work",
      contact: "Contact Me"
    },
    hero: {
      badge: "Available for Opportunities",
      role1: "Robust Architecture",
      role2: "Scalable MSA",
      role3: "System Stability"
    },
    about: {
      label: "About Me",
      title: "Backend Profile",
      philosophyTitle: "Engineer's Philosophy",
      educationTitle: "Education",
      awardsTitle: "Awards",
      certTitle: "Certifications",
      paperTitle: "Research Paper",
      paperLabel: "Research Paper"
    },
    skills: {
      proficiency: "Proficiency"
    },
    projects: {
      label: "Selected Works",
      title: "System Architecture",
      description: "복잡한 비즈니스 요구사항을 견고한 백엔드 엔지니어링으로 해결합니다.",
      roleLabel: "Role",
      techLabel: "Tech Stack",
      awardLabel: "Award",
      feedbackLabel: "예선 평가 피드백",
      demoLabel: "시연 영상 보기"
    },
    contact: {
      title: "Connect.",
      subtitle: "기술은 연결을 만들고, 연결은 변화를 만듭니다.\n함께 더 나은 구조를 설계할 기회를 기다립니다.",
      emailLabel: "Send me an email",
      githubLabel: "Check out my code",
      copyright: "Soyeon Kim. All rights reserved."
    }
  }
};

// ==========================================
// ENGLISH DATA
// ==========================================
export const DATA_EN: ContentData = {
  profile: {
    ...COMMON_PROFILE_BASE,
    title: "Backend Engineer",
    summary: "I am a backend engineer who bridges the gap between business strategy and technical implementation. By integrating humanistic communication and strategic insight with data-driven engineering, I translate complex business requirements into robust, scalable architectures.",
    heroTitle: "Architecting the Invisible Flow",
    heroDescription: "Solid structures create seamless connections. I design scalable backend systems and data pipelines that turn complexity into stability."
  },
  skills: COMMON_SKILLS,
  experience: [
    {
      id: 1,
      company: "Freelance / Project Team",
      position: "Backend Developer",
      period: "2024.03 - Present",
      description: "Developing scalable backend systems and data pipelines for various applications, focusing on MSA and performance optimization."
    }
  ],
  certifications: [
    { title: "Engineer Information Processing", date: "2025.12.24", issuer: "HRDK Korea" },
    { title: "DAsP (Data Architecture Semi-Professional)", date: "2025.04.18", issuer: "K-DATA" },
    { title: "SQLD (SQL Developer)", date: "2024.06.21", issuer: "K-DATA" },
    { title: "ADsP (Data Analysis Semi-Professional)", date: "2024.03.22", issuer: "K-DATA" },
    { title: "Certified Purchasing & Materials Management", date: "2022.12.12", issuer: "K.P.M" },
    { title: "Distribution Manager Grade 2", date: "2018.12.05", issuer: "KCCI" },
    { title: "Computer Specialist Grade 1", date: "2018.12.28", issuer: "KCCI" }
  ],
  projects: [
    {
      id: 1,
      title: "CueCode",
      subtitle: "AI Non-verbal Communication Platform",
      period: "2025.10",
      role: "Lead Engineer",
      description: "Built MSA architecture using Spring Cloud Gateway and WebFlux for asynchronous processing.",
      awards: "2025 SeSAC Hackathon Grand Prize",
      techStack: {
        backend: ["Spring Cloud Gateway", "Spring WebFlux", "Spring Security", "FastAPI"],
        frontend: [],
        db: ["MongoDB", "Redis"],
        infra: ["K-PaaS", "Kubernetes"],
        ai: ["MediaPipe", "DTW Algorithm"]
      },
      details: [
        "Solely authored 100% of project proposal, technical specs, and business logic design",
        "Integrated microservices using Spring Cloud Gateway & Config Server",
        "Real-time motion streaming pipeline using WebSocket and WASM",
        "Optimized response speed via Redis caching and async processing"
      ],
      feedbacks: [
        {
          author: "NewsSense",
          comment: "Great idea for gesture communication. It would be extremely helpful to understand patients' needs directly if commercialized."
        },
        {
          author: "guswnd043",
          comment: "The technical structure is solid. Impressive realization of converting non-verbal expressions into language."
        },
        {
          author: "fefefe",
          comment: "Real-time recognition is essential, and webcam accessibility significantly enhances usability."
        },
        {
          author: "ElectricChicken",
          comment: "The effort in tech stack optimization is evident. I hope it contributes to society upon commercialization."
        }
      ],
      demoUrl: "https://youtu.be/63pMRV7HN-g?si=gurr7WzjFZ7NiQP5"
    },
    {
      id: 2,
      title: "TradeMon",
      subtitle: "Integrated Financial Data & RAG Platform",
      period: "2025.03 - 09",
      role: "Sole Developer",
      description: "Real-time integration of stock/crypto data and Hybrid RAG (Vector+Keyword) search implementation.",
      awards: "Graduation Project Contest Excellence Award",
      techStack: {
        backend: ["Spring Boot", "FastAPI", "Whoosh"],
        frontend: [],
        db: ["MariaDB", "ChromaDB", "MongoDB"],
        infra: ["AWS EC2"],
        ai: ["Hybrid RAG", "OpenAI API"]
      },
      details: [
        "High-precision hybrid search engine combining Vector(Chroma) and Keyword(Whoosh)",
        "Real-time integration of heterogeneous external APIs (KRX, KIS, Upbit)",
        "Polyglot Persistence: Relational (Assets) vs Non-relational (News)"
      ],
      demoUrl: "https://youtu.be/m7D_TF1TVJQ?si=2flbj98nxGyjf_2H"
    },
    {
      id: 3,
      title: "Jeonnam Watta",
      subtitle: "Media-based Travel Itinerary Generator",
      period: "2025.06",
      role: "Backend Lead",
      description: "Crawling film commission data and GPT-based automatic travel course generation/PDF conversion system.",
      awards: "Public Big Data Contest Participation Prize",
      techStack: {
        backend: ["Spring Boot", "Crawling"],
        frontend: [],
        db: ["MongoDB"],
        infra: [],
        ai: ["GPT Prompt Eng", "Papago API"]
      },
      details: [
        "ETL pipeline construction for 300+ filming location data points",
        "Natural language analysis and custom itinerary generation logic using GPT API",
        "Multilingual support (4 languages) and OpenPDF-based report generation"
      ],
      demoUrl: "https://youtu.be/cNQ0l3HYPWE?si=iaDp1-7vzgFR6FJS"
    },
    {
      id: 4,
      title: "Career Path Support",
      subtitle: "Multilingual Major Recommendation Platform",
      period: "2024.08 - 12",
      role: "Backend Dev",
      description: "Real-time translation to bridge language barriers and CareerNet API-based custom information mapping.",
      awards: "",
      techStack: {
        backend: ["Spring Boot", "JavaMail"],
        frontend: [],
        db: ["MariaDB"],
        infra: [],
        ai: ["Papago API", "ChatGPT API"]
      },
      details: [
        "CareerNet API data structuring and multilingual mapping table design",
        "Automated email delivery of custom career info converted to PDF",
        "Data modeling for information sharing between parents and children"
      ],
      demoUrl: "https://youtu.be/Ki0Wv941R3c?si=Ur0o7EHF-LYUpjOK"
    },
    {
      id: 5,
      title: "Fairytale Gamification",
      subtitle: "Motion/Voice Recognition Edutech",
      period: "2024.03 - 12",
      role: "Backend Dev",
      description: "Child development analysis and authentication system integrated with Teachable Machine models.",
      awards: "Hanium ICT Contest Selection",
      techStack: {
        backend: ["Spring Boot", "Auth"],
        frontend: [],
        db: ["MariaDB"],
        infra: [],
        ai: ["Teachable Machine", "annyang.js"]
      },
      details: [
        "Teachable Machine pose classification model training and annyang.js integration",
        "Development analysis algorithm based on infant health checkup standards",
        "Bootstrap-based responsive web and child-friendly UX design"
      ],
      demoUrl: "https://youtu.be/RncvDUjt1Fc?si=O8cJQqsfbxclh4k3"
    }
  ],
  awards: [
    { 
      date: "2025.11", 
      title: "2025 SeSAC Hackathon Grand Prize (Seoul Mayor Award)", 
      issuer: "Seoul City/SBA",
      description: "Validated business feasibility and data utilization through AC/VC & AI expert evaluation"
    },
    { 
      date: "2025.11", 
      title: "Project Works Contest Excellence Award - TradeMon", 
      issuer: "Korea Polytechnic University",
      description: "Development of integrated financial data analysis and mock investment platform"
    },
    { 
      date: "2025.09", 
      title: "2025 Jeonnam Public Big Data Idea Contest Participation Prize", 
      issuer: "Jeonnam ICT Industry Promotion Agency",
      description: "Implementation of public data collection, processing, and inquiry functions"
    },
    { 
      date: "2024.12", 
      title: "2024 Hanium ICT Mentoring Contest Selection", 
      issuer: "FKII",
      description: "Implementation of Edutech platform functions utilizing motion capture and voice recognition"
    }
  ],
  education: [
    { school: "Korea Polytechnic University", major: "Big Data Dept.", period: "2024.03 ~ 2026.02" },
    { school: "Konkuk University", major: "English Lit. / Business Admin.", period: "2015.03 ~ 2019.08" }
  ],
  paper: {
    title: "Study on Reading Edutech Platform for Child Development Measurement",
    conference: "KIPS (Korea Information Processing Society)",
    date: "2024.10",
    role: "1st Author"
  },
  ui: {
    nav: {
      profile: "Profile",
      stack: "Stack",
      work: "Work",
      contact: "Contact Me"
    },
    hero: {
      badge: "Available for Opportunities",
      role1: "Robust Architecture",
      role2: "Scalable MSA",
      role3: "System Stability"
    },
    about: {
      label: "About Me",
      title: "Backend Profile",
      philosophyTitle: "Engineer's Philosophy",
      educationTitle: "Education",
      awardsTitle: "Awards",
      certTitle: "Certifications",
      paperTitle: "Research Paper",
      paperLabel: "Research Paper"
    },
    skills: {
      proficiency: "Proficiency"
    },
    projects: {
      label: "Selected Works",
      title: "System Architecture",
      description: "Solving complex problems with robust backend engineering.",
      roleLabel: "Role",
      techLabel: "Tech Stack",
      awardLabel: "Award",
      feedbackLabel: "Peer Review",
      demoLabel: "Watch Demo"
    },
    contact: {
      title: "Connect.",
      subtitle: "Technology connects, and connections create change.\nI await the opportunity to architect better structures together.",
      emailLabel: "Send me an email",
      githubLabel: "Check out my code",
      copyright: "Soyeon Kim. All rights reserved."
    }
  }
};