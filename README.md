# READ THIS FIRST

## Setting Up

Install **Markdown All in One** and **Markdown Preview Enhanced** extension for VS Code to preview this file properly.

To install all dependencies, run: `npm install`

To auto build SCSS and minify JS, run `npm run start` or `npm start`

## Folder

All JS files should be stored in `/1/PA_esf-ca-app-content/content/indonesia/pws-2.0/js/`, except for the *content* js which contains content for the specific page.

All CSS files should be stored in `/1/PA_esf-ca-app-content/content/indonesia/pws-2.0/css/`

Assets for specific page (images, etc.) should be stored in `/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/FOLDER_NAME`.
`FOLDER_NAME` should be assigned for product/proposition line. For example `hsbc-premier` for HSBC Premier assets. 

For development, html file can be save at the root directory. No need to save it in the `FOLDER_NAME`. Although saving it on the `FOLDER_NAME` shouldn't cause any problem.

## Reference and guide

2 layout templates/guide are provided.

1. Fixed, non-auto-hidden, header: `layout-template-01.html`
2. Auto-hidden header: `layout-template-02.html`

## Blank canvas

Similarly, two blank canvas are provided.

1. Fixed, non-auto-hidden, header blank canvas: `__blank-template-without-apply-bar.html`
2. Auto-hidden header blank canvas: `__blank-template-with-apply-bar.html`

Page contents should be put within the `<main>` and `</main>` tag. Except for the auto-hidden apply-bar.
