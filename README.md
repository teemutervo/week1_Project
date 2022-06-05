Week 1 exercises

Restaurant Menu

In this week you get the chance to look over some basic HTML tags and also introduce yourself to some JavaScript coding and DOM handling. All of this done while creating a simple restaurant menu in which the customer is able to leave some comments.

Requirements and Scoring

1. Hello World!

   Create a CodeSandbox repository using the guide on Moodle. Insert a header h1 element for your project inside the body of your index.html file. The header should have the text "Hello World!".

Note: If you do not want to use CodeSandbox, you have to install Node.js to your machine. Also, the project should have the same structure as in CodeSandbox Vanilla template, especially the package.json from the template should be copied. The project should be able to run with command "npm start" from the commandline.

2. Table

   Create a table element that would show the menu. The table should have two columns: The table should have headers "Name" and "Price". There should be at least five meals with their prices.

Example table:

Name Price

Meal 1 6,99€

Meal 2 14,89€

3. Creating new elements to a list

   Create an unordered list ul and a button with an id add-comment . In this assignment, the user should be able to add a new list item to the unordered list by pressing a button. This list will contain the comments that the user may leave.

Note: Make sure that you use the right ids! Otherwise, CodeGrade is not able to assess the element because it cannot find it.

4. Getting value from a element

   Now let's put some text to the comment. Create a textarea element to the HTML file. When the user has written some text to this element and presses the add-comment button, this text should be inserted to the list as li-element.

5. Removing DOM elements

   Now we want to remove all the list items inside the ul -element. Create a button with an id remove-comments. By pressing this button, there should not be any list items. Also, use confirm()- function to confirm that the user really wants to delete all the comments.

Note: Text inside the window.confirm() can be anything.
