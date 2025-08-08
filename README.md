# Flex UI

Flex UI is a minimalist component library built for modern web applications. It provides clean, accessible, and open-source React components designed to speed up your development workflow and create stunning user interfaces.

## Features and Functionality

*   **Ready-to-use UI Components:** A collection of pre-built, customizable components for React applications.
*   **Dark/Light Theme Support:** Utilizes `next-themes` to provide seamless dark and light theme switching.
*   **Responsive Design:** Components are designed to be responsive and adapt to different screen sizes.
*   **Accessible Components:** Focus on accessibility to ensure usability for all users.
*   **Card Reveal Component:** A card component with a reveal effect, displaying a question and its solution (implemented in `app/components/(view)/Card_reveal/Card.tsx`).
*   **Navbar and Footer:** Standard navigation and footer components for a consistent user experience.

## Technology Stack

*   **Next.js:** React framework for building server-rendered and static web applications.
*   **React:** JavaScript library for building user interfaces.
*   **Tailwind CSS:** Utility-first CSS framework for styling components.
*   **`motion/react`:** Library for creating animations, specifically used in the `Card` component.
*   **`lucide-react`:** Library of icons.
*   **`next-themes`:** Library for adding dark mode support.
*   **`class-variance-authority` (cva):** Utility for creating type-safe component variants.
*   **`clsx`:** Utility for conditionally joining class names.
*   **`tailwind-merge`:** Utility to merge Tailwind CSS classes.

## Prerequisites

*   Node.js (version 18 or higher recommended)
*   npm or yarn package manager

## Installation Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/deveshru2712/Flex_Ui.git
    cd Flex_Ui
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

## Usage Guide

1.  Start the development server:

    ```bash
    npm run dev  # or yarn dev
    ```

    This will start the Next.js development server, typically running on `http://localhost:3000`.

2.  Explore the components:

    Navigate to `/components` to see a demonstration of the available components.

3.  Using the `Card` component:

    *   Import the `Card` component and the `data` array from `app/components/(view)/Card_reveal/index.ts`.

        ```javascript
        import Card from "@/app/components/(view)/Card_reveal/Card";
        import { data } from "@/app/components/(view)/Card_reveal/index";
        ```

    *   Map over the `data` array to render the `Card` components. The `data` array contains objects with `id`, `question`, `description`, and `answer` properties.

        ```jsx
        {data.map((element) => (
          <Card key={element.id} {...element} />
        ))}
        ```

## API Documentation

This project focuses on UI components, and as such, does not expose a traditional API. However, the properties for the `Card` component are defined as follows:

```typescript
interface CardProps {
  id: number;
  question: string;
  description: string;
  answer: string;
}
```

These properties are required when using the `Card` component.

## Contributing Guidelines

Contributions are welcome! To contribute to Flex UI, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Test your changes thoroughly.
5.  Submit a pull request to the `master` branch.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License Information

The license for this project is not specified. Please contact the repository owner for more information.

## Contact/Support Information

For questions or support, please contact the repository owner: deveshru2712

You can also reach out through the GitHub repository's issue tracker.