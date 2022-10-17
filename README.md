# password-generate

## Description

The objective of the assignment is to create a working password generator. The display, along with the HTMl and CSS elements, have been already established, so it is my job to make the page functional. 

No installation required. 

## User Story

* **AS AN** employee with access to sensitive data
* **I WANT** to randomly generate a password that meets certain criteria
* **SO THAT** I can create a strong password that provides greater security


## Acceptance Criteria

* **GIVEN** I need a new, secure password
* **WHEN** I click the button to generate a password
* **THEN** I am presented with a series of prompts for password criteria
* **WHEN** prompted for password criteria
* **THEN** I select which criteria to include in the password
* **WHEN** prompted for the length of the password
* **THEN** I choose a length of at least 8 characters and no more than 128 characters
* **WHEN** asked for character types to include in the password
* **THEN** I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* **WHEN** I answer each prompt
* **THEN** my input should be validated and at least one character type should be selected
* **WHEN** all prompts are answered
* **THEN** a password is generated that matches the selected criteria
* **WHEN** the password is generated
* **THEN** the password is either displayed in an alert or written to the page


## Assignment Completion

To make the function writePassword work, we need to fill out the password variable through the generatePassword() function. There are a lot of conditions that need to be met, all under the generatePassword() function.
* I started with the prompts, since those will be what a user accesses to get the password they want. I use window.prompt for length, and use an if statemet to determine if the length matches the necessary criteria (between 8 and 128 characters)and that it is in numerical form. 
* For the types of characters, I switch from prompt to confirm, since we need a boolean system to determine what to include and what not to. If a user clicks ok, it will include the characters within the designated array. 
* Next, we need to ensure that the final array we pull from only contains the okay characters. We use an if statement under a new variable (possChar) to determine what will be included in the new array using the concat element. 
* For the final section, we need to create a for loop that will repeatedly select a random character from the possChar array. I create 2 new variables - numChar (for the number of characters in the new array) and randomIndex (to generate a random character via the associated number in the array). Using the console.log, you can see that it is registering a random array of a certain length, but it still does not display on the page - only undefined. 
* Lastly, you must make sure to return the final value of the generatePassword function. I could not get the random code to display until I remembered that I did not return the function. 

## Screenshot

Here is the screenshot of the deployed webpage.

![Password Generate Screenshot](./Users/connorbazil/Desktop/password-generate/cbazil114.github.io_password-generate_.png)

## Link

The deployed application can be reached at: https://cbazil114.github.io/password-generate/

## Credits

Thank you to Natasha Mann, the tutor who supported me during this assignment, and the learning assistants who answered my other questions. 