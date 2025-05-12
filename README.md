# 📢 CampaignGenius – AI-Powered Campaign & Customer Segmentation Platform

Welcome to **CampaignGenius**, your intelligent assistant for campaign management and customer segmentation. Built with a modern React frontend, AI integration, and intuitive dashboards, this project empowers businesses to understand and engage with their audience efficiently.

## 🚀 Features

### 🔐 Authentication
- **Secure login** flow using state-based handling.
- Automatically redirects unauthenticated users to the login screen.

### 🧠 AI-Powered Segment Creation
- Just type in natural language like:  
  *"Customers who spent over ₹5000 and haven’t purchased in 90 days"*
- Our NLP model converts it into customer segmentation rules.
- Instant audience count preview and creation navigation.

### 📊 Interactive Dashboard
- **Key Metrics at a Glance**:
  - Total customers, revenue, average order value, campaign stats.
- **Data Visualizations** powered by `Recharts`:
  - Monthly revenue trends (Area Chart)
  - Customer segment distribution (Pie Chart)
  - Campaign performance metrics (Bar Chart)

### 🛠 Campaign Management
- Create, schedule, and analyze campaigns.
- View sent, draft, and scheduled campaigns.

## 🧪 Tech Stack

| Category     | Tech Used                                  |
|--------------|---------------------------------------------|
| Frontend     | React, Vite, TailwindCSS, ShadCN UI         |
| Routing      | React Router DOM                            |
| Charts       | Recharts                                    |
| State Mgmt   | useState, useNavigate (React Hooks)


## 💡 How AI Integration Works

The project includes a simple NLP-to-rule engine:
- Parses input like: `"customers who bought more than 3 times in the last 60 days"`
- Converts it to a customer filter rule using internal logic
- Retrieves count of matching customers dynamically

> 🔍 *Can be extended using GPT-4 APIs, vector databases, or LangChain for production AI logic.*

## 📸 UI Preview

> [Insert Screenshots or a short Loom video demo here]

## 🧰 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/campaign-genius.git
cd campaign-genius

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

```

🙋 About the Developer
Built with ❤️ by Prince Keshri, a passionate full-stack developer focused on building intelligent, user-centric solutions.

💼 LinkedIn: [linkedin.com/in/princekeshri1](https://www.linkedin.com/in/princekeshri1/)

📫 Email: pr.prince.3068@gmail.com

📃 License
MIT License — Free to use and modify.