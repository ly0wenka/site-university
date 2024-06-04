@echo off
REM Создание директорий
mkdir project

REM Создание HTML файлов
type nul > project\index.html
type nul > project\about.html

REM Создание CSS файла
type nul > project\styles.css

REM Создание JS файла
type nul > project\scripts.js