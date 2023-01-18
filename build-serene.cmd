@echo off

:check_dependencies
if not exist "%ProgramFiles%\dotnet\dotnet.exe" (
    echo ERROR: dotnet not found. Please install dotnet to continue.
    goto end
)
if "%VSINSTALLDIR%"=="" (
	set VSINSTALLDIR=%ProgramFiles%\Microsoft Visual Studio\2022\Community
)

if not exist "%VSINSTALLDIR%\MSBuild\Current\Bin\msbuild.exe" (
    echo ERROR: "%VSINSTALLDIR%\MSBuild\Current\Bin\msbuild.exe" not found. Please install Visual Studio to continue.
    goto end
)

for /F "tokens=4 delims=\\" %%G in ("%VSINSTALLDIR%") do set "vsversion=%%G"
if %vsversion% LSS 2022 (
    echo ERROR: This script requires Visual Studio 2022 or newer. You are using version %vsversion%.
    goto end
)

goto run_build

:run_build
echo *** RUNNING BUILD ***
dotnet run --project build\build-serene.csproj --no-dependencies
if %ERRORLEVEL% GEQ 1 GOTO :error
goto build_nuget_package

:build_nuget_package
echo *** BUILDING NUGET PACKAGE ***
dotnet pack --no-dependencies vsix\Serene.Templates\Serene.Templates.csproj
if %ERRORLEVEL% GEQ 1 GOTO :error
goto build_vsix_package

:build_vsix_package
echo *** BUILDING VSIX PACKAGE ***
"%VSINSTALLDIR%\MSBuild\Current\Bin\MSBuild.exe" "vsix\Serene.VSIX.sln" -verbosity:m
if %ERRORLEVEL% GEQ 1 GOTO :error
start vsix\bin\Serene.Template.vsix
goto push_confirmation

:push_confirmation

dir /b vsix\.nupkg\*.nupkg
echo.
choice /C PC /N /M "[P]ush NuGet Package, or [C]ancel?: "
if errorlevel 2 goto end
if errorlevel 1 goto push

:push
nuget push -source https://www.nuget.org/api/v2/package .\vsix\.nupkg\Serene.Templates*.nupkg
if %ERRORLEVEL% GEQ 1 GOTO :error
start https://visualstudiogallery.msdn.microsoft.com/559ec6fc-feef-4077-b6d5-5a99408a6681/edit?newSession=True
goto end

:error
echo ERROR: An error occurred during the build process.
echo ERROR CODE: %ERRORLEVEL%
pause
goto end

:end
exit /B 0