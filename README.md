# Southern Enterprise IT Solution Partner - Next.js Project

A premium enterprise-grade corporate website for an IT Solution Provider and Technology Partner operating in Southern Thailand, partnering with NebulaSoft Enterprise.

## Technologies Used
- **Frontend**: Next.js 14, React 18, TailwindCSS, Framer Motion, GSAP, Lucide React Icons.
- **Design Elements**: Dark navy & blue theme, neon cyan accents, glassmorphism, dynamic timeline, data visualization dashboard.
- **Languages**: Multi-language support (Thai & English) using React Context.

---

## Local Development Instructions

Since Node.js is not in the system's path by default, follow these steps to run the Next.js application:

### Step 1: Install Node.js
1. Go to [Node.js Official Website](https://nodejs.org/).
2. Download and install the **LTS (Long Term Support)** version for Windows.
3. Once installed, verify the installation by opening PowerShell/Command Prompt and running:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Dependencies
Open your terminal inside this project directory (`C:\Users\utain.ni\.gemini\antigravity\scratch\southern-enterprise-it`) and run:
```bash
npm install
```

### Step 3: Run the Development Server
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

---

## Folder Structure
```
├── src/
│   ├── app/
│   │   ├── layout.js       # Core layout with fonts & SEO
│   │   ├── page.js         # Single-page dashboard container
│   │   └── globals.css     # Tailwind overrides & custom animations
│   ├── components/         # Section components (Hero, Solutions, Partner, etc.)
│   ├── context/
│   │   └── TranslationContext.js # Multi-language switcher context
│   └── constants/
│       └── translations.js # TH/EN dictionary for copy
├── preview.html            # Standalone single-file HTML preview (Instant open)
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## Standalone Preview
For an instant preview of the design, hover animations, responsive layouts, and Thai/English translation without installing Node.js:
- Locate the **`preview.html`** file in this directory.
- **Right-click** it and select **Open with** -> **Google Chrome** (or Microsoft Edge).
- Click the Language Switcher button in the top right header to switch between Thai and English!
