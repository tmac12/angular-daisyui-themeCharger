# angular-daisyui-themeCharger

Change theme in an angular web app with daisyUI library.

## Descrizione

This web app was developed using Angular v18 and the daisyUI library. The application is a practical example of how to manage the switch between light and dark themes, with the user's preference saved in localStorage. This allows the theme choice to persist even after the browser is restarted.


### Features

- **Angular v18**: Uses the latest version of Angular to ensure modern performance and functionality.
- **daisyUI**: Integrates the daisyUI library for simple and intuitive theme management.
- **LocalStorage**: Saves the theme preference in localStorage for persistence between sessions.

### Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the application with `ng serve`.

### Contributions

Contributions are welcome! Feel free to open issues or pull requests to improve the application.

### GitHub Actions

This project includes a GitHub Action workflow to automatically publish the app to GitHub Pages.

#### Workflow File

The workflow file is located at `.github/workflows/deploy.yml` and contains the necessary configuration to build and deploy the application.

#### Steps to Enable GitHub Pages

1. Ensure the repository is public or has GitHub Pages enabled for private repositories.
2. Go to the repository settings on GitHub.
3. Under the "Pages" section, set the source to the `gh-pages` branch.
4. Save the settings.

The application will be automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch.