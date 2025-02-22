# Job Applications Dashboard

This project is a React-based dashboard for managing job applications. It features filtering, sorting, pagination, editing, and deletion of applications. The UI includes a smooth light/dark mode toggle, responsive design, and smooth animations to deliver a modern, interactive experience.

## Features

- **Dashboard Layout:**  
  Displays job applications in a clean, modern interface.
- **Filtering & Searching:**  
  - Search bar to filter applications by title or company.
  - Filter buttons to filter by application status (Applied, Interviewing, Rejected, Offer Received).
- **Sorting:**  
  - Dropdown to sort applications by date (newest first or oldest first).
- **Interactivity:**  
  - Edit button to update the status of an application.
  - Delete button to remove an application.
- **Pagination:**  
  - Divides the application list into multiple pages for easier navigation.
- **Theme Toggle:**  
  - Smooth light/dark mode toggle with React Icons and CSS transitions.
- **Data Persistence:**  
  - Uses local storage to save changes, so edits and deletions persist on page reload.

## Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) and npm installed on your system.

### Installation Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

### Install Dependencies

```bash
npm install
```

### Run the Application
```bash
npm start
```
The app will run at http://localhost:3000

## Deployment
The project is deployed on [Netlify/Vercel]. You can view the live demo here:
https://job-dashboard-sb.vercel.app/

## Assumptions & Challenges
**Data Persistence:**
The application uses local storage to persist data. If local storage is empty or invalid, the app falls back to loading data from a JSON file located in public/data/applications.json.

**Responsive Design:**
The UI is designed to work seamlessly on both desktop and mobile devices.

**Smooth Animations:**
Animations are implemented using CSS transitions and Framer Motion to create a modern and engaging user experience.

**Development Challenges:**
Integrating pagination, filtering, and sorting with data persistence was challenging. Ensuring that the UI remains responsive and interactive during theme changes also required careful testing and debugging.

## Technologies Used
1) React for building the UI.
2) React Icons for iconography.
3) CSS (or Styled Components) for styling.
4) Local Storage for data persistence.git 

