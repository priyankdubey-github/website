# Priyank Dubey — personal website (plain HTML/CSS/JS)

No build step. Open `index.html` in a browser, or upload the folder to any static host
(GitHub Pages: put these files in a repo named `<username>.github.io`).

- `index.html` – all page content (Home, Research, Publications views; switch with #home, #research, #publications)
- `css/style.css` – styling (same look as the academic-homepage Jekyll template)
- `js/data.js` – **edit this** to add news items and publications
- `js/main.js` – navigation, menu, rendering, generated cover images
- `assets/images/photos/Priyank.png` – portrait

To add a paper figure as a cover, put the image in `assets/images/covers/` and add
`cover: "assets/images/covers/name.jpg"` to that publication in `js/data.js`.
