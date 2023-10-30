# Kanban Board Application

Welcome to the Kanban Board Application GitHub repository. This application is built using React JS and interacts with the provided API from [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment). It allows users to manage and view tickets in a Kanban board format with various grouping and sorting options.

## Features

### Grouping Options

The Kanban board application offers three distinct ways to group the data:

1. **By Status**: Tickets are grouped based on their current status.
2. **By User**: Tickets are arranged according to the assigned user.
3. **By Priority**: Tickets are grouped based on their priority level.

### Sorting Options

Users can sort the displayed tickets in two ways:

1. **Priority**: Arrange tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order based on their title.

### Priority Levels

The priority levels for the tickets are as follows:

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

### Design

The Kanban board is designed to be responsive and visually appealing, with a design similar to the provided screenshots.

### User State Persistence

The application is built to save the user's view state even after a page reload. This ensures that users can continue their work seamlessly.

## Usage

To run the application locally, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone <repository-url>
   ```

2. Install the required dependencies.

   ```bash
   npm install
   ```

3. Start the development server.

   ```bash
   npm start
   ```

4. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- React JS
- JavaScript
- HTML
- CSS

## Dependencies

- React
- Axios (for API interactions)
