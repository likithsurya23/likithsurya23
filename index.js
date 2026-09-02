const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

const monthNames = ["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug", "Sep", "Oct","Nov","Dec"];

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const currentDateStr = `${new Date().getDate()} ${monthNames[new Date().getMonth()]} ${new Date().getFullYear()}`

const readme = `\
<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=00F0FF&center=true&vcenter=true&width=500&lines=Hi+%F0%9F%90%8B+I'm+Likith+Surya;Full-Stack+%26+AI+Developer;Building+Scalable+Cloud+%26+IoT+Apps" alt="Typing SVG" />
</div>

<p align="center">
  <a href="https://www.linkedin.com/in/likith--d" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://x.com/SaintxL" target="_blank">
    <img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X / Twitter" />
  </a>
  &nbsp;
  <a href="mailto:likithsurya555@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

<div align="center">
  <p>⏳ <b>${thisYear} Progress:</b> <code>${progressBarOfThisYear}</code> <b>${(progressOfThisYear * 100).toFixed(2)}%</b> (as of ${currentDateStr})</p>
</div>

---

### 🚀 About Me

\`\`\`
┌─────────────────────────────────────────────────────────────────────────┐
│  ⚡ Passionate Full-Stack Engineer & AI Solutions Architect               │
│  💻 Building modern, responsive web apps with React, Next.js & Node.js   │
│  🤖 Integrating AI capabilities powered by OpenAI & IBM Watson           │
│  ☁️ Scalable backend services, cloud architecture (AWS) & IoT solutions   │
│  🎯 Focused on clean code, system performance, and user-first UX          │
└─────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

### 💻 Technical Stack & Ecosystem

#### 🌐 Core & Languages
<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

#### 🎨 Frontend Architecture
<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
</p>

#### ⚡ Backend & APIs
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
  <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
  <img src="https://img.shields.io/badge/REST_APIs-0055DA?style=for-the-badge&logo=postman&logoColor=white" alt="REST APIs" />
</p>

#### 🤖 AI, Data & IoT
<p>
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI" />
  <img src="https://img.shields.io/badge/IBM_Watson-052147?style=for-the-badge&logo=ibm&logoColor=white" alt="IBM Watson" />
  <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" />
  <img src="https://img.shields.io/badge/Anaconda-44A833?style=for-the-badge&logo=anaconda&logoColor=white" alt="Anaconda" />
  <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
  <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
</p>

#### ☁️ Cloud, Databases & DevOps
<p>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
</p>

---

### 📊 GitHub Insights & Performance

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=likithsurya23&theme=radical&show_icons=true&hide_border=false&count_private=true" height="165" alt="Likith's GitHub Stats" />
  &nbsp;
  <img src="https://nirzak-streak-stats.vercel.app/?user=likithsurya23&theme=radical&hide_border=false" height="165" alt="Likith's Streak Stats" />
</div>

<br />

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=likithsurya23&theme=radical&layout=compact&hide_border=false" height="165" alt="Likith's Top Languages" />
</div>

---

### 🏆 GitHub Trophies

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=likithsurya23&theme=radical&no-frame=false&no-bg=false&margin-w=4" alt="Likith's GitHub Trophies" />
</div>

---

### 💬 Daily Dev Quote

<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Dev Quote" />
</div>

---

<div align="center">
  <p>👁️ <b>Profile Views:</b></p>
  <a href="https://github.com/likithsurya23">
    <img src="https://visitcount.itsvg.in/api?id=likithsurya23&icon=0&color=0" alt="Visit Count" />
  </a>
</div>
`
console.log(readme)
