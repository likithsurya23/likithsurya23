const fs = require('fs')

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
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=26&pause=1000&color=00F0FF&multiline=true&width=650&height=80&lines=Hi+there!+%F0%9F%90%8B+I'm+Likith+Surya;Full-Stack+Engineer+%26+AI+Developer;Building+Scalable+Cloud+%26+IoT+Solutions" alt="Typing Banner" />
  
  <p align="center">
    <b>✨ Turning Complex Ideas into Scalable, User-Centric Software ✨</b>
  </p>

  <p align="center">
    <a href="https://www.linkedin.com/in/likith--d" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
    &nbsp;
    <a href="https://x.com/SaintxL" target="_blank">
      <img src="https://img.shields.io/badge/X%20/%20Twitter-000000?style=for-the-badge&logo=x&logoColor=white" alt="X / Twitter" />
    </a>
    &nbsp;
    <a href="mailto:likithsurya555@gmail.com">
      <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>
  </p>

  <br />

  <p>⏳ <b>${thisYear} Year Progress:</b> <code>${progressBarOfThisYear}</code> <b>${(progressOfThisYear * 100).toFixed(2)}%</b> (as of ${currentDateStr})</p>
</div>

<br />

---

### 🚀 About Me

<table align="center" width="100%">
  <tr>
    <td width="50%" valign="top">
      <h4>⚡ Quick Snapshot</h4>
      <ul>
        <li>🔭 <b>Currently Building:</b> AI-powered Web Apps & Cloud Solutions</li>
        <li>🌱 <b>Learning & Exploring:</b> Distributed Systems, PyTorch & Next.js 14</li>
        <li>💬 <b>Ask Me About:</b> React, Next.js, Node.js, Python, OpenAI, Cloud Architecture</li>
        <li>⚡ <b>Fun Fact:</b> I love pairing hardware IoT devices with cloud APIs!</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h4>🎯 Core Focus Areas</h4>
      <ul>
        <li>🌐 <b>Full-Stack Engineering:</b> High-performance SPA & SSR web apps</li>
        <li>🤖 <b>AI Integration:</b> OpenAI GPT APIs, IBM Watson, Computer Vision</li>
        <li>☁️ <b>Cloud & DevOps:</b> Scalable microservices, AWS deployment, CI/CD</li>
        <li>🗄️ <b>Data Infrastructure:</b> Relational & NoSQL database architecture</li>
      </ul>
    </td>
  </tr>
</table>

---

### 💻 Technologies & Ecosystem

<div align="center">
  <p><b>🛠️ High-Density Skill Matrix</b></p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,nodejs,express,py,django,flask,aws,docker,postgres,mysql,mongodb,tailwind,figma,java,c,cpp,githubactions,html,css&perline=11" alt="Likith's Skill Icons Grid" />
  </a>
</div>

<br />

<details open>
<summary><b>🔍 Detailed Categorized Skillset</b></summary>

<br />

- **Core & Languages:**  
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
  ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
  ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
  ![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)
  ![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

- **Frontend & UI:**  
  ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
  ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)

- **Backend, Cloud & Databases:**  
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
  ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
  ![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)
  ![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)
  ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
  ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
  ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

- **AI, ML & Developer Tools:**  
  ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
  ![IBM Watson](https://img.shields.io/badge/IBM_Watson-052147?style=flat-square&logo=ibm&logoColor=white)
  ![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
  ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
  ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
  ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)

</details>

---

### 📊 GitHub Telemetry & Analytics

<div align="center">
  <img src="https://github-readme-stats-fast.vercel.app/api?username=likithsurya23&theme=tokyonight&show_icons=true&hide_border=true&count_private=true" height="170" alt="Likith's GitHub Stats" />
  &nbsp;
  <img src="https://streak-stats.demolab.com/?user=likithsurya23&theme=tokyonight&hide_border=true" height="170" alt="Likith's Streak Stats" />
</div>

<br />

<div align="center">
  <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=likithsurya23&theme=tokyonight&layout=compact&hide_border=true" height="165" alt="Likith's Top Languages" />
</div>

---

### 🏆 GitHub Trophies Showcase

<div align="center">
  <img src="https://github-trophies.vercel.app/?username=likithsurya23&theme=tokyonight&no-frame=true&no-bg=true&margin-w=4" alt="Likith's GitHub Trophies" />
</div>

---

### 💬 Daily Dev Inspiration

<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight" alt="Daily Dev Quote" />
</div>

<br />

---

<div align="center">
  <p>⚡ <b>Profile Visitor Counter</b> ⚡</p>
  <a href="https://github.com/likithsurya23">
    <img src="https://komarev.com/ghpvc/?username=likithsurya23&color=00f0ff&style=for-the-badge&label=PROFILE+VIEWS" alt="Profile Views" />
  </a>
</div>
`

fs.writeFileSync('README.md', readme, 'utf8')
console.log('README.md successfully generated in UTF-8 format!')
