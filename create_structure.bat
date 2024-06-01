@echo off
REM Create directories
mkdir university-website
mkdir university-website\css
mkdir university-website\js
mkdir university-website\pages

REM Create CSS files
type nul > university-website\css\style.css
type nul > university-website\css\header.css
type nul > university-website\css\footer.css
type nul > university-website\css\home.css
type nul > university-website\css\departments.css
type nul > university-website\css\news.css
type nul > university-website\css\admissions.css
type nul > university-website\css\contact.css

REM Create JS files
type nul > university-website\js\main.js
type nul > university-website\js\router.js

REM Create HTML files
type nul > university-website\index.html
type nul > university-website\pages\home.html
type nul > university-website\pages\departments.html
type nul > university-website\pages\news.html
type nul > university-website\pages\admissions.html
type nul > university-website\pages\contact.html

echo Directory structure and files created successfully.
pause



