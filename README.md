# Portfolio website

Static site (HTML/CSS/JS, no build step). Free hosting on GitHub Pages at `https://anubhavdogra1.github.io`.

## 1. Edit your content
- `data.js`: projects, experience, skills, typing-effect phrases
- `index.html`: name, about text, stats, social links (search for `YOUR_`)
- Add your `resume.pdf` to this folder

Preview locally: `python3 -m http.server 8000` then open http://localhost:8000

## 2. Make the contact form work (free)
1. Go to https://web3forms.com, enter your email, and get an access key.
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `index.html`.

## 3. Publish for free
1. Create a GitHub account, then a **public** repo named exactly `anubhavdogra1.github.io`.
2. Upload these files (or `git init && git add . && git commit -m "site" && git remote add origin <url> && git push -u origin main`).
3. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Live in ~1 minute at `https://anubhavdogra1.github.io`.

Alternatives, also free with no domain purchase: Netlify (`name.netlify.app`), Cloudflare Pages (`name.pages.dev`), Vercel (`name.vercel.app`).
