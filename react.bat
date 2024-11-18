@echo off

:: Enter folder name
set /p folderName="Enter Folder name: "

:: Set the text color to green (color code 0A)
color 0A

:: Echo folder name for debugging
echo Creating folder: "%folderName%"

:: Create the folder
md "%folderName%"

:: Check if the folder was created successfully
if exist "%folderName%" (
    echo Folder created successfully.

     if not exist "demo" (
      :: creating react
      npm creat vite@latest demo

     :: change to demo
     cd demo

     :: npm installing
     npm install

    :: change to main
    cd ..
    )

    if exist "demo" (

    :: Change to the newly created directory
    cd "%folderName%"
    
    
    :: copy folder
    xcopy /E /I "..\demo\*" .\
    )
    
    :: Open the project in Visual Studio Code
    code .

   pause    
   color
   cls

) else (
    echo Failed to create the folder. Please check the folder name and try again.
)

