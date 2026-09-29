# Engineering portfolio — free GitHub Pages website

A responsive, dark engineering portfolio template. No frameworks, paid services or build steps required.

## Preview locally

Open `index.html` in your browser. If your browser restricts local scripts, run `python -m http.server 8000` from this folder and open http://localhost:8000.

## Edit your portfolio

- **Name, introduction, experience, skills, email, LinkedIn:** edit `index.html` (search for `YOUR NAME`, `your.email@example.com` and `https://www.linkedin.com/`).
- **Projects, descriptions, results, images:** edit `projects.js`. Each project is one object. Add, remove or reorder them freely.
- **Project photos/renders:** copy files into `assets/`, then change `image` and optionally `gallery` paths in `projects.js`. Example: `image: "assets/my-bike.jpg", gallery: ["assets/cad.jpg", "assets/testing.jpg"]`.
- **CV:** save your public CV as `assets/cv.pdf`. The existing download link will work.
- **Colors, typography, spacing:** edit `styles.css`; main accent color is `--accent:#c4ff4d`.
- **Language:** currently English, aimed at international employers.

## Publish for free on GitHub Pages

1. Sign in to GitHub and create a **public** repository called `YOURUSERNAME.github.io` (replace YOURUSERNAME with your exact GitHub username).
2. Choose **Add file → Upload files** and upload `index.html`, `styles.css`, `script.js`, `projects.js` and the complete `assets` folder. Commit the changes. (You can alternatively use Git.)
3. In repository **Settings → Pages**, under **Build and deployment**, select **Deploy from a branch**, then branch **main**, folder **/(root)** and Save.
4. Your website should appear at `https://YOURUSERNAME.github.io/` after GitHub finishes publishing. It may take a few minutes.
5. Add that URL to your LinkedIn Featured section and CV.

If you prefer a repository with any other name, your website URL is `https://YOURUSERNAME.github.io/REPOSITORYNAME/` and this template's relative asset paths support it.

## Important: confidentiality

The supplied UAV and composite sections are deliberately generic. **Only publish employer-approved photographs, drawings, CAD models, test results, and technical details**, especially for aerospace and defense projects. Review all project claims before publishing.

## Notes

- Google Fonts require internet; system fallbacks are provided.
- Contact works with a mailto link, no paid form backend.
- The portfolio uses placeholder SVG illustrations, not actual project images.
