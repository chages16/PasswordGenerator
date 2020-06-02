# Homework Week 3

This project is a working password generator that selects a psuedo-random password based on the input criteria of the user.

## Goals

My goal was to create a password generator that would:
- Allow the user to input their own phrase within the password
- Allow the user to choose whether special characters may be included
- Allow the user to determine whether or not Capital Letters may be included
- Allow the user to determine if any numbers should be included
- Allow the user to select the password length from 8-128 letters.

## Steps

Using Javascript and the skills from class, I used arrays, If functions and loops, and Math.Random formulas to generate the characters required.

Using confirm prompts, I allowed the user to select what customisation they can add to their password. The basic password are random lower case letters. Based on the criteria the user selects, each character has a certian % chance of becoming a symbol/ capital or number.

At the end, if the user wanted a phrase, I utilised a replace function in order to replace the existing characters of the password with the phrase input by the user. I used the phrase length and the password length to ensure that the phrase would always fit within the password.

## Deployment

The repository can be found here: https://github.com/chages16/PasswordGenerator

The website, can be found here: https://chages16.github.io/PasswordGenerator/

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)

## Versioning

1.0.0 

## Authors

* **Chris Hage** - *Password Generator* - [Chages16](https://github.com/chages16/)

## Acknowledgments

* Bootstrap
* Uni SA Coding Bootcamp
