

export const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    // { name: "Testimonials", link: "/testimonials" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Client collaboration is at the heart of our approach",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "flex items-center",
      // img: "/DSC_1.jpg", //changed
      spareImg: "",
    },
    {
      id: 2,
      title: "We are flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "flex justify-center items-start",
      img: "/Grid2Bg_1.png",
      spareImg: "",
    },
    {
      id: 3,
      title: "Our Tech Stack",
      // description: "We Know",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "w-200 h-full",
      titleClassName: "justify-center ",
      img: "/Stackbg.png",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiasts with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "flex justify-center items-center",
      img: "/development_1.gif",
      // spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on: Richmand Collage Cricket Web site",
      description: "",
      className: "md:col-span-3 md:row-span-2",
      // imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      imgClassName: "absolute inset-0 m-auto w-full h-full object-contain",
      titleClassName: "flex justify-start md:justify-start lg:justify-start",
      // img: "/MockupView.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Let's build somthing great together",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Car Attendance System",
      des: "Struggling to manage vehicle attendance? Get real-time tracking and comprehensive reports effortlessly!",
      img: "/CarAttendance2.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/",
    },
    {
      id: 2,
      title: "Fleet Tracking System",
      des: "Struggling to track your fleet? Get real-time updates and comprehensive reports effortlessly",
      img: "/FleetTracking2.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/",
    },
    {
      id: 3,
      title: "DOCCAFE",
      des: "You want a eligant web application? for your business. Contact with us and enhance your business...",
      img: "/DocCafeBreak.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/",
    },
    {
      id: 4,
      title: "Car Shop",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/Carshop2.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/",
    },
  ];

  export const allProjects = [
    {
      id: 1,
      title: "Salon Appointment Management System",
      des1: "Appointment Scheduling: Book, modify, and cancel appointments.",
      des2: "Client Management: Store client profiles with history and preferences.",
      des3: "Staff Management: Assign staff, manage schedules, and track performance.",
      des4: "Service Catalog: List services with pricing and availability.",
      des5: "Automated Reminders: SMS or email reminders for clients.",
      des6: "Payment Integration: Accept multiple payment methods (cash, card, online)",
      des7: "Reporting & Analytics: Sales, appointments, and customer satisfaction.",
      img: "/CarAttendance2.png",
    },
    {
      id: 2,
      title: "Car Service Station Management System",
      des1: "Appointment Scheduling: Service bookings and repair appointments.",
      des2: "Service History: Track vehicle service records and parts used.",
      des3: "Inventory Management: Manage spare parts stock and reorders.",
      des4: "Billing and Invoicing: Generate service bills and provide payment options.",
      des5: "Customer Management: Store customer and vehicle details.",
      des6: "Job Cards: Track mechanic assignments and work progress.",
      des7: "Notifications: Service completion and maintenance reminders.",
      img: "/CarAttendance2.png",
    },
    {
      id: 3,
      title: "Rent-a-Car Service Management System",
      des1: "Car Listings: Vehicle availability, descriptions, and pricing.",
      des2: "Booking System: Reserve, modify, or cancel bookings.",
      des3: "Customer Management: Maintain customer profiles and rental history.",
      des4: "Fleet Management: Monitor vehicle conditions, service schedules, and availability.",
      des5: "Payment Integration: Multiple payment options and invoicing.",
      des6: "Contract Management: Digital rental agreements with e-signatures.",
      des7: "Notifications: Reminders for vehicle return and payment due.",
    },
    {
      id: 4,
      title: "Expense Tracker",
      des1: "Income/Expense Recording: Log and categorize income and expenses.",
      des2: "Budgeting: Set and track budgets for categories.",
      des3: "Reporting & Analysis: Expense summaries, trends, and budget insights.",
      des4: "Multi-Currency Support: Track expenses in different currencies.",
      des5: "Integration with Banks: Automatic bank statement imports.",
      des6: "Expense Split: Shared expense management for families or teams.",
      des7: "Notifications: Alerts for overspending or upcoming bills.",
    },
    {
      id: 5,
      title: "Small Business Smart Billing System",
      des1: "Invoice Generation: Create and send invoices electronically.",
      des2: "Client Management: Track clients and their billing history.",
      des3: "Recurring Billing: Automated recurring invoices for repeat services.",
      des4: "Tax Calculation: Automated tax computations and invoicing.",
      des5: "Payment Tracking: Monitor paid, unpaid, and overdue invoices.",
      des6: "Multi-Currency Invoicing: Support for international transactions.",
      des7: "Reporting & Analytics: Sales, revenue, and client analysis.",
    },
    {
      id: 6,
      title: "Restaurant POS System",
      des1: "Order Management: Manage orders from dine-in and delivery channels.",
      des2: "Menu Management: Update menu items, pricing, and availability.",
      des3: "Inventory Tracking: Manage ingredients and stock levels.",
      des4: "Billing & Payment: Split bills, accept multiple payments, and generate receipts.",
      des5: "Table Reservations: Allow customers to reserve tables.",
      des6: "Employee Management: Staff scheduling, performance, and tips tracking.",
      des7: "Reports: Daily sales, popular dishes, and stock analysis.",
    },
    {
      id: 7,
      title: "School Cricket Management System",
      des1: "Player Profiles: Maintain records of players' performance and stats.",
      des2: "Team Management: Create, modify, and track teams and schedules.",
      des3: "Match Scheduling: Schedule matches and practice sessions.",
      des4: "Stat Tracking: Detailed player and team performance tracking.",
      des5: "Notifications: Match reminders, results, and announcements.",
      des6: "Reports: Match performance, individual stats, and win/loss records.",
    },
    {
      id: 8,
      title: "Corporate Websites Development",
      des1: "Responsive Design: Websites that work across devices (desktop, mobile).",
      des2: "Content Management: Easy content updates through a CMS.",
      des3: "SEO Optimization: Search engine-friendly structures.",
      des4: "Integration: Social media, CRM, and business software integration.",
      des5: "Custom Forms: Contact, lead generation, or service request forms.",
      des6: "Analytics Integration: Google Analytics and tracking tools.",
      des7: "Security: SSL certificates, data encryption, and secure login.",
    },
    {
      id: 9,
      title: "Tuition Class Management System",
      des1: "Student Profiles: Manage student data and academic history.",
      des2: "Attendance Tracking: Mark and track attendance for classes.",
      des3: "Fee Management: Track fees, issue invoices, and send reminders.",
      des4: "Class Scheduling: Organize and manage class timetables.",
      des5: "Notifications: Alerts for classes, fees, and updates.",
      des6: "Assessment: Track test results, grades, and progress.",
      des7: "Reports: Attendance, fee collection, and performance reports.",
    },
    {
      id: 10,
      title: "Inventory Management System",
      des1: "Stock Management: Real-time tracking of inventory levels.",
      des2: "Reordering Alerts: Notifications for low stock levels.",
      des3: "Product Catalog: Organize products by categories and pricing.",
      des4: "Supplier Management: Manage vendor details and purchase orders.",
      des5: "Inventory Reports: Track stock movements and overstocking.",
      des6: "Barcode Scanning: Fast data entry with barcode support.",
      des7: "Multi-location Support: Manage inventory across locations.",
    },
    {
      id: 11,
      title: "ERP Solutions for Small Scale Businesses",
      des1: "Financial Management: Handle accounting, invoicing, and payroll.",
      des2: "Inventory Management: Track products and stock levels.",
      des3: "HR Management: Employee records, attendance, and payroll.",
      des4: "Sales & CRM: Manage customer relationships and leads.",
      des5: "Purchasing: Track purchase orders and supplier management.",
      des6: "Reporting: Real-time business performance and KPIs.",
      des7: "Customization: Tailored modules for specific needs.",
    },
    {
      id: 12,
      title: "NOC OPS System",
      des1: "Network Monitoring: Real-time monitoring of infrastructure.",
      des2: "Alert Management: Instant alerts for failures or breaches.",
      des3: "Incident Tracking: Log incidents and assign to teams.",
      des4: "Performance Metrics: Analyze network performance and uptime.",
      des5: "Reporting: Detailed system performance and resolutions.",
      des6: "Integration: With ticketing and IT service management tools.",
    },
    {
      id: 13,
      title: "Ticketing System for Helpdesk",
      des1: "Ticket Creation: Log, track, and prioritize service requests.",
      des2: "Automated Workflows: Auto-assign tickets based on criteria.",
      des3: "Customer Portal: Self-service portal for issues.",
      des4: "Knowledge Base: FAQs and guides for common problems.",
      des5: "SLA Management: Track service level agreements.",
      des6: "Reporting: Resolution times and customer satisfaction.",
    },
    {
      id: 14,
      title: "Document Management System",
      des1: "Document Storage: Securely store and organize documents.",
      des2: "Version Control: Track document revisions and history.",
      des3: "Access Control: Define user permissions for access.",
      des4: "Search & Retrieval: Easy search with metadata and keywords.",
      des5: "Collaboration: Multiple users collaborate on documents.",
      des6: "Integration: With CRM, ERP, or file storage solutions.",
      des7: "Audit Trails: Track who accessed or edited documents.",
    },
    {
      id: 15,
      title: "Attendance Management System with Hardware Solutions",
      des1: "Biometric Integration: RFID, fingerprint, and card-based attendance.",
      des2: "Employee Profiles: Maintain attendance records.",
      des3: "Leave Management: Track leave requests and approvals.",
      des4: "Shift Scheduling: Create and manage employee shifts.",
      des5: "Overtime Tracking: Calculate overtime hours automatically.",
      des6: "Reports: Attendance, punctuality, and overtime reports.",
    },
    {
      id: 16,
      title: "Vehicle Access Management System with Hardware Solutions",
      des1: "RFID Integration: Track vehicle entry and exit.",
      des2: "Access Control: Grant or restrict access permissions.",
      des3: "Vehicle Tracking: Monitor vehicles in real-time.",
      des4: "Reports: Entry/exit logs and access violations.",
      des5: "Integration: With security cameras and surveillance.",
      des6: "Alerts: Notifications for unauthorized access.",
    },
    {
      id: 17,
      title: "Corporate Employee Recruitment Management System",
      des1: "Job Postings: Create and manage job listings.",
      des2: "Application Tracking: Monitor applications and progress.",
      des3: "Resume Parsing: Extract information from resumes.",
      des4: "Interview Scheduling: Schedule interviews and feedback.",
      des5: "Onboarding: Track onboarding processes for successful candidates.",
      des6: "Reports: Recruitment metrics like time to hire, applications per job",
    },
    {
      id: 18,
      title: "Payroll Management System",
      des1: "Salary Calculation: Automate salaries and deductions.",
      des2: "Tax Filing: Generate tax forms and ensure compliance.",
      des3: "Employee Profiles: Track salary history and bonuses.",
      des4: "Leave Integration: Link leave data to payroll.",
      des5: "Payslips: Generate and distribute digital payslips.",
      des6: "Reporting: Payroll summaries and tax reports.",
    },
    {
      id: 19,
      title: "Medical Center Management System",
      des1: "Patient Registration: Manage patient demographics and history.",
      des2: "Appointment Scheduling: Schedule appointments with reminders.",
      des3: "Electronic Medical Records: Manage medical records digitally.",
      des4: "Prescription Management: Create and print prescriptions.",
      des5: "Billing and Invoicing: Automated billing with payments.",
      des6: "Lab Test Management: Track lab orders and results.",
      des7: "Inventory Management: Manage supplies and restocking alerts.",
      des8: "Doctor and Staff Management: Track doctor schedules, patient loads, and performance analytics.",
    },
  ];

  
  // data/index.ts
  export const cards = [
    {
      id: 1,
      image: "/DSC_9366.jpg", // Replace with actual image path
    },
    {
      id: 2,
      image: "/DSC_9447 copy.jpg", // Replace with actual image path
    },
    {
      id: 3,
      image: "/DSC_9641 copy.jpg", // Replace with actual image path
    },
    {
      id: 4,
      image: "/DSC_9495 copy.jpg", // Replace with actual image path
    },
  ];




  // export const people = [
  //   {
  //     id: 1,
  //     name: "Nimesh",
  //     designation: "Software Engineer",
  //     image:
  //       "/Nimesh.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Nuwani",
  //     designation: "Product Manager",
  //     image:
  //       "/Nuwani.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Yeran",
  //     designation: "Data Scientist",
  //     image:
  //       "/Yeran.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Lahiru",
  //     designation: "UX Designer",
  //     image:
  //       "/Lahiru.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Chenuka",
  //     designation: "Soap Developer",
  //     image:
  //       "/Chenuka.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "Umaya",
  //     designation: "The Explorer",
  //     image:
  //       "/Nethu.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Pamitha",
  //     designation: "The Explorer",
  //     image:
  //       "/Pamitha.jpg",
  //   },
  // ];

  export const people = [
    {
      id: 1,
      name: "W.Lakmali",
      designation: "Senior Software Engineer",
      image:
        "/lakmali.png",
    },
    // {
    //   id: 0,
    //   name: "Mallawaarachchi",
    //   designation: "Deputy of ICT",
    //   image:
    //     "/Mallawarachchi.jpg",
    // },
    {
      id: 2,
      name: "S.A.N.R Gunasekara",
      designation: "IOT Software Engineer",
      image:
        "/Nirmitha.png",
    },
    {
      id: 3,
      name: "R.A.N.P. Perara",
      designation: "Software Engineer",
      des: "",
      image:"/nilusha.png",
    },
    {
      id: 4,
      name: "Lahiru Jayasinghe",
      designation: "Intern UI/UX Engineer",
      image:
        "/Loottaa.png",
    },
    {
      id: 5,
      name: "Nimesh",
      designation: "Associate Software Engineer",
      image:
        "/nimesh.png",
    },
    {
      id: 6,
      name: "S.K. Gamage",
      designation: "Software Engineer",
      des: "",
      image: "/Gamage.png",
    },
  ];

  export const teamDetails = [
    {
      id: 1,
      name: "Mr. Rohan De Silva",
      designation: "General Manager",
      des: "Joined Colombo Dockyard PLC in 1988 and has 35 years of experience in the field of finance and Management Accounting. Master of Business Management from Institute of Chartered Financial Analyst India. Member of the Association of Business Executives (UK). Member of Certified Professional Managers. Trained in General Management at National University of Singapore (NUS). He has served in Colombo Dockyard PLC and its subsidiary for 36 years, holding number of senior management positions in Finance and Administration activies.",
      image:"/Rohan.png",
    },
    {
      id: 2,
      name: "S.A.M.D Samaraweera",
      // designation: "Head of ICT - (Colombo Dockyard PLC & DTS ICT Centre)",
      designation: "Head Of IT",
      des: "Highly self-motivated Software Architect with the ability to be proactive in project execution. This includes 12+ years of experience and passion for software development and learning new technologies while empowering the team whith designing software system using agile software development. And participated, contributed, and provided leadership in multiple capacities to multiple technology and process transformations in software product and development over the years.",
      image:"/Samaraweera.png",
    },
    {
      id: 3,
      name: "A.U Mallawaarachchi",
      designation: "Head of Section - (Colombo Dockyard PLC ICT Centre)",
      des: "Started the journey with capabilities of software development and served the company by developing many mission critical applications with the passion of exploring new areas. Skilled at operating in a wide range of system platforms with excellent industrial-oriented technical skills and human resource management skills with a reputation for resolving mission-critical problems and improving customer satisfaction by helping them on achieving company objectives. Strongly lead to the result-oriented work scope with best communication methods",
      image:"/Mallawarachchi.jpg",
    },
    {
      id: 4,
      name: "W.L.H.M.A.A. Bandara",
      designation: "Senior Software Engineer",
      des: "Software Engineer with 11 years of working experience in IT sector (BSc Hons. Information Technology) expertise in system development, web designing, and web development.",
      image:"/Bandara.jpg",
    },
    {
      id: 5,
      name: "K.V.L. Chathuranga",
      designation: "Senior Software Engineer",
      des: "Highly self-motivated Software Architect with the ability to be proactive in project execution. This includes 12+ years of experience and passion for software development and learning new technologies while empowering the team whith designing software system using agile software development. And participated, contributed, and provided leadership in multiple capacities to multiple technology and process transformations in software product and development over the years.",
      image:"/chathuranga.png",
    },
    {
      id: 6,
      name: "P.H.P.D. Gamlath",
      designation: "Senior Software Engineer",
      des: "Highly motivated IT professional with over 8+ years of experience in IT industry as well as a holder of BSc. (Hons) Computer Science. Expertised in Oracle Database administration, and a strong team player strive to bring creativity to problem solving, training and developing junior DBA trainees.",
      image:"/Gamlath.jpg",
    },
    {
      id: 7,
      name: "L.P.A.D. Pathirathne",
      designation: "Senior Software Engineer",
      des: "A highly motivated Software Engineer with BSc. (Hons) Software Engineering along with 6+ years of working experience in proven ability to leverage full-stack knowledge and experience to develop wide-range of applications.",
      image:"/Pathirathne.jpg",
    },
    {
      id: 8,
      name: "P.C.P. Karunanayake",
      designation: "Systems Administrator (Networks & ICT Infrastructure)",
      des: "System Administrator, Microsoft Specialized Technology Specialist (MCTS) - Windows Vista, Configurations and Advanced Diploma Holder in Entrepreneurial Business Management. over 20+ years working experience in Network and ICT Infrastructure.",
      image:"/Karunanayake.jpg",
    },
    {
      id: 9,
      name: "K.P.D.D.I. Dharmarthne",
      designation: "Systems Administrator (Information Security And ICT Infrastructure)",
      des: "Experienced and detail-oriented IT professional with 5 years of experience in the information security and system administration field who is skilled at operating in a wide range of system platforms.",
      image:"/Dharmarthne.jpg",
    },
    {
      id: 10,
      name: "U.S. Mapalagama",
      designation: "Systems Administrator (Information Systems)",
      des: "System Administrator ( Information Systems) - BSc (Hons) Information Systems, Highly motivated team player with hands-on experience in large system architecture development and administration, as well as network design and configurations.",
      image:"/Mapalagama.jpg",
    },
    {
      id: 11,
      name: "B.R. Tharanga",
      designation: "Assistant Systems Administrator (Networks & ICT Infrastructure)",
      des: "Self driven and dedicated System Administrator (Hardware) - Over 20+ years of experience in IT sector, expertised in Hardware maintenance, troubleshooting, configuring and maintaining servers.",
      image:"/Tharanga.jpg",
    },
    {
      id: 12,
      name: "P. L. N. Lakshitha",
      designation: "Software Tech Lead",
      des: "Accomplished Software Engineer (Team Lead). 5+ years of experience in both front end and backend development using industry demanded techniques and languages. Highly capable of driving the team towards the common goals ensuring the team's efficiency and effectiveness. Hand in experience of delivering large scale applications and pivotal contributions to the architecture of open-source projects.",
      image:"/Lahiru.jpg",
    },
    {
      id: 13,
      name: "W. Lakmali",
      designation: "Senior Software Engineer",
      des: "",
      image:"/lakmali.png",
    },
    {
      id: 14,
      name: "R.A.N.P. Perara",
      designation: "Software Engineer",
      des: "",
      image:"/nilusha.png",
    },
    {
      id: 15,
      name: "S.A.N.R. Gunasekara",
      designation: "IOT Software Engineer",
      des: "",
      image:"/Nirmitha.png",
    },
    {
      id: 16,
      name: "R.W.P. Chanaka",
      designation: "Software Engineer",
      des: "",
      image:"/Lahiru.jpg",
    },
    {
      id: 17,
      name: "J.O.M.D.S. Rupasinghe",
      designation: "Software Engineer",
      des: "",
      image:"/Lahiru.jpg",
    },
    {
      id: 18,
      name: "B.I.E. Mendis",
      designation: "Software Engineer",
      des: "",
      image:"/Lahiru.jpg",
    },
    {
      id: 19,
      name: "Y.A.D.I. Yapa",
      designation: "Software Engineer",
      des: "",
      image:"/Yapa.png",
    },
    {
      id: 20,
      name: "U.S.T. Perera",
      designation: "",
      des: "",
      image:"/Lahiru.jpg",
    },
    {
      id: 21,
      name: "K.D.B.N. Thilakarathne",
      designation: "Associate Software Engineer (IOT)",
      des: "",
      image:"/Binura.png",
    },
    {
      id: 22,
      name: "I.L.D.S. Imbulana",
      designation: "Associate QA Engineer",
      des: "",
      image:"/Lahiru.jpg",
    },
    {
      id: 23,
      name: "Rajitha Rajapaksha",
      designation: "Head Of Section",
      des: "Experienced ICT leader with over 34 years in the industry, driving technological excellence and innovation. Proven track record of implementing cutting-edge solutions, optimizing IT infrastructure, and leading high-performing teams. A visionary strategist adept at aligning technology with business goals to achieve operational efficiency and competitive advantage.",
      image:"/Rajitha.png",
    },
    {
      id: 24,
      name: "S.K. Gamage",
      designation: "Software Engineer",
      des: "",
      image: "/Gamage.png",
    },
    {
      id: 25,
      name: "Anumi Gunarathne",
      designation: "Associate Software Engineer(QA)",
      image:"/Anumi Gunarathna.png",
    },
    {
      id: 26,
      name: "Sachit Jayasundara",
      designation: "Associate Software Engineer",
      image:"/Sachith.png",
    },
    {
      id: 27,
      name: "Randeera Withanage",
      designation: "Associate Software Engineer",
      image:"/Randeera.png",
    },
    {
      id: 28,
      name: "Chenuka Kuruppu	",
      designation: "Associate Software Engineer",
      image:"/chenuka.png",
    },
    {
      id: 29,
      name: "Yeran Fernando",
      designation: "Associate Software Engineer",
      image:"/yeran.png",
    },
    {
      id: 30,
      name: "Kavindu Nimesh",
      designation: "Associate Software Engineer",
      image:"/nimesh.png",
    },
    {
      id: 31,
      name: "Umaya Nethmi",
      designation: "Associate Software Engineer",
      image:"/nethmi.png",
    },
    {
      id: 32,
      name: "Kushan Nalinka",
      designation: "Associate Software Engineer",
      image:"/Kushan.png",
    },
    {
      id: 33,
      name: "Nuwani Maheesha",
      designation: "Associate Software Engineer",
      image:"/nuwani_1.png",
    },
    {
      id: 34,
      name: "Pamitha Pankaja",
      designation: "Associate Software Engineer",
      image:"/pamitha.png",
    },
    {
      id: 35,
      name: "Duhithu Sakuni",
      designation: "QA Intern",
      image:"/Duhithu.png",
    },
    {
      id: 36,
      name: "Lahiru Jayasinghe",
      designation: "Intern UI/UX Engineer",
      image:
        "/Loottaa.png",
    },

  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
      nameClassName: "text-black-100"
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Successful Project Deliveries",
      desc: "Managed and delivered high-profile projects on time and within budget, demonstrating our expertise in handling complex software solutions.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Diverse Client Portfolio",
      desc: "Provided tailored software solutions to clients across various industries, including healthcare, finance, and e-commerce, showcasing versatility and industry knowledge.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Large-Scale Deployments",
      desc: "Successfully executed large-scale software deployments, including cloud migrations and enterprise-level software rollouts, ensuring robust and scalable solutions.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Innovation and R&D",
      desc: "Committed to continuous improvement through R&D, leading to innovative solutions that incorporate emerging technologies like AI, ML, and blockchain.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/twitterPurple.svg",
      url: "https://x.com/homex_nft?lang=en"
      
    },
    {
      id: 2,
      img: "/linkedinPurple.svg",
      url: "https://www.linkedin.com/company/dockyard-total-solutions/posts/?feedView=all"
    },
    {
      id: 3,
      img: "/facebookPurple.svg",
      url: "https://www.facebook.com/share/YfU1To7QSmnZtYW3/"
    },
  ];

  export const contactDetails = [
    {
      id: 1,
      title: "Call Us",
      desc: "+94 77 697 0808",
      className: "md:col-span-2",
      thumbnail: "/telephone-call-hand-hover-pinch.json",
      
    },
    {
      id: 2,
      title: "Mail Us",
      desc: "info@dockyardsolutions.lk",
      className: "md:col-span-2",
      thumbnail: "/mail.json",
      
    },
    {
      id: 3,
      title: "Meet Us",
      desc: "223 Jayantha Mallimarachchi Mawatha, Colombo 01400",
      className: "md:col-span-2",
      thumbnail: "/location.json",
      
    },
  ];



  // dtslife21@gmail.com