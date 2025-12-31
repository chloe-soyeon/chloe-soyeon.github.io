@echo off
REM run Vite dev server and redirect stdout/stderr to vite.log
cd /d %~dp0
npm run dev > vite.log 2>&1

