const projects = [
  {
    title: "CRM Dashboard",
    problem: "Company relied on Jira for internal workflow tracking but wanted a secure, purpose-built internal system.",
    role: "Designed the SQL Server schema and built the Angular UI with role-based dashboards (SuperAdmin, Admin, Employee).",
    decision: "Used SignalR for real-time task/notification updates without page refresh, plus role-based queries so each user only sees what their role permits.",
    result: "Replaced Jira with a secure, purpose-built internal system used daily by the company's team across 5,000+ client records.",
    stack: ["Angular", ".NET Core", "SQL Server", "SignalR", "MailKit"],
    demoUrl: null,
    repoUrl: null,
    videoUrl: "",
    screenshots: [
      { src: "/projects/crm/admin-dashboard.png", caption: "Admin/SuperAdmin dashboard — company-wide 'All Tasks' view across 35 active tasks, filterable by category, status, and priority." },
      { src: "/projects/crm/employee-dashboard.png", caption: "Employee-level dashboard — role-based UI shows only that user's assigned tasks and hides admin-only menu items like Reports and Employee Management." },
      { src: "/projects/crm/remarks.png", caption: "Task remarks — a built-in comment thread on each task lets the team communicate directly, instead of over email." },
      { src: "/projects/crm/notifications.png", caption: "Real-time notifications — task assignments, reassignments, and new comments push to the bell icon instantly via SignalR, no page refresh." },
      { src: "/projects/crm/client-list.png", caption: "Client management — full CRUD for client records with category tagging, search/filter, and Excel/PDF export." },
    ],
    architecture: [
      {
        layer: "Frontend", bullets: [
          "Built a role-based Angular CRM dashboard with separate functionality for SuperAdmins, Admins, and Employees.",
          "Implemented My Tasks and All Tasks views, with task visibility and functionality based on the authenticated user's role.",
          "Developed interfaces for task management, client management, employee management, task assignment/reassignment, and remarks/comments.",
          "Integrated SignalR for real-time task and notification updates without requiring page refreshes.",
          "Used Angular services and a centralized TaskStore to manage task and status data across dashboard components."
        ]
      },
      {
        layer: "Backend", bullets: [
          "Developed a RESTful ASP.NET Core Web API (.NET) for authentication, users, clients, tasks, remarks, notifications, and reporting/summary functionality.",
          "Implemented role-based authorization to control access to CRM operations and data.",
          "Built CRUD APIs for managing clients, tasks, remarks/comments, and related CRM entities.",
          "Integrated SignalR Task Hub to broadcast real-time events such as task assignments, reassignments, updates, and comments.",
          "Implemented background processing for overdue-task management and automated task-related operations.",
          "Built an SMTP-based email notification system using MailKit, so users receive email alerts for key task events (e.g. new assignments) alongside in-app SignalR notifications."
        ]
      },
      {
        layer: "Database", bullets: [
          "Designed and managed a SQL Server relational database using Entity Framework Core.",
          "Structured data for users, roles, clients, tasks, statuses, priorities, service categories, client categories, activities, remarks, and notifications.",
          "Implemented server-side data filtering based on authenticated users and roles to ensure employees access only relevant task data.",
          "Used Entity Framework Core migrations and relationships to maintain database schema and data integrity.",
          "Designed the system to handle thousands of clients and tasks while maintaining controlled access through the backend."
        ]
      },
    ]
  },
  {
    title: "Employee Management System",
    problem: "Company needed a centralized way to track employee records and performance reviews.",
    role: "Built the Angular front-end and integrated it with the .NET Core REST API.",
    decision: "Internship project — code is private, happy to walk through the architecture on request.",
    result: "Used internally to manage employee records and performance tracking.",
    stack: ["Angular", ".NET Core", "SQL Server"],
    demoUrl: null,
    repoUrl: null,
    videoUrl: "",
    screenshots: []
  },
  {
    title: "Expense Tracker",
    problem: "Users needed a simple way to record expenses, categorize spending, and visualize financial habits without using spreadsheets.",
    role: "Built the entire application independently, including the Python Flask backend, Firebase Firestore integration, authentication system, dashboard, and responsive UI.",
    decision: "Used Firebase Firestore for cloud data storage and Flask sessions for authentication. Implemented dynamic expense charts and category filtering to provide users with instant insights into spending patterns.",
    result: "Developed a full-stack expense management application that supports authentication, expense tracking, category-based analysis, reporting, and interactive dashboards.",
    stack: [
      "Python",
      "Flask",
      "Firebase Firestore",
      "HTML",
      "CSS",
      "JavaScript",
      "Matplotlib"
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Bluehairami/expense-tracker.git",
    screenshots: [
      {
        src: "/projects/tracker/2.png",
        caption: "Secure login and registration system using Flask sessions and Firebase authentication."
      },
      {
        src: "/projects/tracker/5.png",
        caption: "Dashboard displaying expense summaries, total records, categories, and spending visualization charts."
      },
      {
        src: "/projects/tracker/4.png",
        caption: "Expense management interface supporting creation, editing, categorization, and date tracking."
      },
      {
        src: "/projects/tracker/3.png",
        caption: "Expense editing functionality with real-time updates to Firestore records."
      }
    ],
    architecture: [
      {
        layer: "Frontend",
        bullets: [
          "Designed a responsive dark-themed user interface using HTML, CSS, and JavaScript.",
          "Built pages for user authentication, dashboard analytics, expense"
        ]},
    ]
  }
];
  export default projects;
