To run the project you must first install graphicsmagick.
```
On Windows use the choclatey package manager.
```
choco install graphicsmagick
Remove-Item -Path Alias:gm  -Force
$Env:PATH += ";C:\Program Files\GraphicsMagick-1.3.36-Q8"
$env:path -split ";"
```
Install the dependencies
```
npm install
```
Run the unit tests
```
npm run test
```
Run an individual test
```
npm run test:module-3
```
Test:
cd C:\Users\marc\scratch\node-express-image-processing-server
const gm = require('gm');
gm("C:\\Users\\marc\\scratch\\node-express-image-processing-server\\api\\uploads\\ullr.png").resize(100, 100).write("C:\\Users\\marc\\scratch\\node-express-image-processing-server\\api\\uploads\\ullr_resize.png", (error) => {console.log(error);})
