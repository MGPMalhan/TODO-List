<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1>TODO List Project</h1>

  <p>A simple TODO list application built with React with vite and styled using Tailwind CSS. This project allows users to add, complete, and delete tasks. It also supports categorizing tasks into "Personal" and "Professional" groups, with visual indicators for the active group.</p>

  <h2>Features</h2>
  <ul>
    <li>Add new tasks to your TODO list.</li>
    <li>Mark tasks as complete or incomplete.</li>
    <li>Delete tasks from the list.</li>
    <li>Categorize tasks into "Personal" and "Professional" groups.</li>
    <li>Responsive design with a modern gradient background.</li>
  </ul>

  <h2>Installation</h2>
  <p>To get started with this project, follow these steps:</p>
  <ol>
    <li><strong>Clone the repository:</strong></li>
    <pre><code>git clone &lt;repository-url&gt;</code></pre>
    <li><strong>Navigate to the project directory:</strong></li>
    <pre><code>cd &lt;project-directory&gt;</code></pre>
    <li><strong>Install dependencies:</strong></li>
    <pre><code>npm install</code></pre>
    <li><strong>Start the development server:</strong></li>
    <pre><code>npm start</code></pre>
    <p>Open your browser and go to <code>http://localhost:3000</code> to see the application in action.</p>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li><strong>Add a Task:</strong> Type your task in the input bar and click the plus icon (<i>+</i>) or press Enter.</li>
    <li><strong>Complete a Task:</strong> Click the circle icon next to the task to mark it as complete. The task will be crossed out and its opacity reduced.</li>
    <li><strong>Delete a Task:</strong> Click the trash icon next to the task to remove it from the list.</li>
    <li><strong>Switch Categories:</strong> Click on the "Personal" or "Professional" group to filter tasks. The active group will have a black underline.</li>
  </ol>

  <h2>Customization</h2>
  <ul>
    <li><strong>Tailwind CSS Configuration:</strong> Custom utilities and theme extensions can be added in <code>tailwind.config.js</code>.</li>
  </ul>

  <h2>File Structure</h2>
  <ul>
    <li><code>src/</code></li>
    <ul>
      <li><code>components/</code></li>
      <ul>
        <li><code>Todo.js</code> - Main TODO list component.</li>
        <li><code>TodoItems.js</code> - Component for individual TODO items.</li>
      </ul>
      <li><code>index.css</code> - Tailwind CSS configuration and global styles.</li>
      <li><code>App.js</code> - Main application component.</li>
    </ul>
    <li><code>tailwind.config.js</code> - Tailwind CSS configuration file.</li>
  </ul>

  <h2>Contributing</h2>
  <p>Feel free to submit issues and pull requests. If you want to contribute to this project, please follow these guidelines:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch for your changes.</li>
    <li>Commit your changes and push to your forked repository.</li>
    <li>Open a pull request to merge your changes.</li>
  </ol>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

  <h2>Acknowledgements</h2>
  <ul>
    <li><strong>React With Vite</strong> - JavaScript library for building user interfaces.</li>
    <li><strong>Tailwind CSS</strong> - Utility-first CSS framework.</li>
  </ul>

</body>
</html>
