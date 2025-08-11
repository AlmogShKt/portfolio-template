# Portfolio Template

This repository contains a template for a portfolio website designed for Computer Science students or recent graduates. The template is easy to configure and customize, allowing users to showcase their projects, skills, and personal information.

## Project Structure

The project is organized as follows:

```
portfolio-template
├── index.html          # Main HTML file for the portfolio
├── css
│   └── styles.css      # CSS styles for the website
├── js
│   ├── data.js         # JavaScript file containing content data
│   └── main.js         # JavaScript file for dynamic content loading
├── assets
│   ├── images          # Directory for images (e.g., profile pictures, project screenshots)
│   └── icons           # Directory for icons (e.g., social media icons)
├── .nojekyll           # Prevents Jekyll processing on GitHub Pages
└── README.md           # Documentation for the project
```

## Getting Started

To use this template, follow these steps:

1. **Clone the Repository**: Download or clone this repository to your local machine.

2. **Edit `data.js`**: Open the `js/data.js` file and modify the content to include your personal information, project details, and any other relevant data. This file exports an object that will be used to populate the portfolio.

   **Important for Students:**

   - **Avatar**: Leave `avatarUrl` empty (`""`) to hide the profile image entirely - no placeholder will be shown
   - **Experience**: If you don't have work experience yet, keep the `experience` array empty (`[]`) and the entire experience section will be automatically hidden
   - **Resume**: Leave `resumeUrl` empty if you don't have a resume yet - the button will be hidden

3. **Customize `styles.css`**: Open the `css/styles.css` file to change the layout, colors, fonts, and overall design of your portfolio. Feel free to modify the styles to match your personal branding.

4. **Add Images and Icons**: Place any images or icons you want to use in the `assets/images` and `assets/icons` directories, respectively. Update the paths in `data.js` or `index.html` as necessary.

5. **Deploy to GitHub Pages**: Once you have customized your portfolio, you can host it using GitHub Pages:
   - Push your changes to your GitHub repository
   - Go to repository Settings → Pages
   - Select "Deploy from a branch" and choose your main branch
   - Your site will be available at `https://yourusername.github.io/repository-name`

## License

This project is open-source and available for anyone to use and modify. Feel free to contribute or suggest improvements!
