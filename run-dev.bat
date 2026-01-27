@echo off
REM Run dev server from workspace root by delegating into the project folder
REM Usage: double-click or run in cmd.exe: run-dev.bat
SET PROJECT_DIR=%~dp0soyeon-kim-portfolio
cd /d "%PROJECT_DIR%" || (
  echo Could not change directory to %PROJECT_DIR%
  pause
  exit /b 1
)
if not exist package.json (
  echo package.json not found in %CD%
  pause
  exit /b 1
)
echo Installing (if needed) and starting dev server in %CD%
npm install
npm run dev

