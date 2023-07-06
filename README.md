# README - Installation of twitter-test project

This document provides instructions on how to install the "twitter-test" project after cloning it from a Git repository. Make sure you have Node.js installed on your system before starting the installation process.

## Prerequisites

Before installing the project, make sure you have the following prerequisites installed on your system:

- Node.js: The "twitter-test" project requires Node.js to run. You can download the latest stable version of Node.js from [its official website](https://nodejs.org).
- Google Chrome: The "twitter-test" project requires Google Chrome version 114 to be installed on your system.

## Installation Steps

Follow these steps to install the "twitter-test" project on your local machine:

1. Clone the project repository to your local machine using the following command in your terminal:

   ```
   git clone <REPOSITORY_URL>
   ```

2. Navigate to the project directory by running the following command:

   ```
   cd <NAME_CLONE_PROJECT>
   ```

3. Install the project dependencies using npm (Node Package Manager). Run the following command in your terminal:

   ```
   npm install
   ```

   This will install all the necessary dependencies specified in the `package.json` file, including `chance`, `selenium-webdriver`, and `mocha`.

4. Navigate to the project directory by running the following command:

   ```
   cd Twitter
   ```

5. Once all the dependencies have been successfully installed, you can run the project's test scripts. Use the following command to run the tests with Mocha:

   ```
   mocha test
   ```

   This will execute the automated tests using Mocha and display the results in your terminal.

Congratulations! You have now installed the "twitter-test" project and successfully run the tests.

## License

This project is licensed under the ISC License. Refer to the `LICENSE` file for more details.

## Contact

If you have any questions or inquiries related to this project, feel free to contact the author.

Enjoy using the "twitter-test" project!
