@echo off
title Push Kratika Portfolio to GitHub
cd /d "%~dp0"
echo ===================================================
echo   Pushing Kratika Website to GitHub
echo   Repository: https://github.com/neeraj1980-hue/Kratika-Website.git
echo ===================================================
echo.
git push -u origin main
echo.
pause
