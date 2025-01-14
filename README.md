# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup Instructions

1. Clone the repository:
    ```bash
   git clone https://github.com/budhah282/form-builder-system.git


## Technology Choices and Rationale

- **React**: React is used for building interactive user interfaces in a declarative way. It allows easy creation of components and efficient updates to the DOM.
- **react-dnd**: This library enables drag-and-drop functionality in the form builder.
- **react-hook-form**: Used for handling form submission, validation, and management in a clean and performant way.
- **Zod**: A TypeScript-first schema validation library for input validation.
- **HTML, CSS, and JavaScript**: These are the core technologies for structuring, styling, and adding interactivity to the project.

## Known Limitations / Trade-offs

- **Limited Drag-and-Drop Components**: The form builder supports only a basic set of components (text input, select, radio buttons), and lacks more advanced components.
- **Browser Compatibility**: Some older browsers may not fully support drag-and-drop features.
- **Mobile Responsiveness**: The project is not optimized for mobile views yet, which may impact usability on smaller screens.

## Future Improvements

- **Mobile Responsiveness**: Enhance the form builder to work seamlessly on mobile devices.
- **More Components**: Add more form components like checkboxes, date pickers, and file uploaders.
- **Custom Validation**: Implement more advanced validation features to support complex form rules.
- **Enhanced User Interface**: Improve the user interface for a better user experience, such as adding drag-and-drop indicators or preview functionality.

## Live Demo

You can view the live demo of the project here:  
[Live Demo](https://your-project-name.netlify.app)
