### Steps to Follow in the Exam (In Order)

**Step 1: Edit `package.json`**

Add the following property at the top level:

```json
"homepage": "/proxy/8081",
```

Add the following entries inside `devDependencies`:

```json
"devDependencies": {
  "@rushstack/eslint-patch": "1.5.1",
  "jest-fetch-mock": "^3.0.3"
}
```

**Step 2: Install Dependencies**

Run these commands in the terminal:

```bash
rm -rf node_modules package-lock.json
npm install
```

**Step 3: Create `src/setupProxy.js`**

Create a new file named `setupProxy.js` inside the `src` folder and paste the following code:

```javascript
module.exports = function (app) {
  app.use((req, res, next) => {
    const prefix = "/proxy/8081";

    if (!req.url.startsWith(prefix)) {
      req.url = prefix + req.url;
    }

    next();
  });
};
```

**Step 4: Start the Application**

Run the following command in the terminal:

```bash
npm start
```
DISABLE_ESLINT_PLUGIN=true


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suresh's Kids' Sketch Pad</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>Suresh's Kids' Sketch Pad</h1>

        <canvas id="sketchPad" width="500" height="300"></canvas>

        <div class="controls">
            <button id="defaultBtn" class="btn btn-dark" type="button">Default</button>
            <button id="redBtn" class="btn btn-danger" type="button">Red</button>
            <button id="blueBtn" class="btn btn-primary" type="button">Blue</button>
            <button id="greenBtn" class="btn btn-success" type="button">Green</button>
            <button id="eraserBtn" class="btn btn-secondary" type="button">Eraser</button>
            <button id="clearBtn" class="btn btn-warning" type="button">Clear Canvas</button>
        </div>

        <p class="color-display">
            Current Drawing Color:
            <strong id="currentColor">Black</strong>
        </p>
    </div>

    <script src="script.js"></script>
</body>
</html>

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("sketchPad");
    var ctx = canvas.getContext("2d");

    var redBtn = document.getElementById("redBtn");
    var blueBtn = document.getElementById("blueBtn");
    var greenBtn = document.getElementById("greenBtn");
    var eraserBtn = document.getElementById("eraserBtn");
    var clearBtn = document.getElementById("clearBtn");
    var defaultBtn = document.getElementById("defaultBtn");
    var currentColorDisplay = document.getElementById("currentColor");

    var drawing = false;

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    function getMousePosition(event) {
        var rect = canvas.getBoundingClientRect();

        return {
            x: (event.clientX - rect.left) * (canvas.width / rect.width),
            y: (event.clientY - rect.top) * (canvas.height / rect.height)
        };
    }

    function startDrawing(event) {
        var position = getMousePosition(event);

        if (
            position.x < 0 ||
            position.x > canvas.width ||
            position.y < 0 ||
            position.y > canvas.height
        ) {
            return;
        }

        drawing = true;

        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
    }

    function draw(event) {
        if (!drawing) {
            return;
        }

        var position = getMousePosition(event);

        if (
            position.x < 0 ||
            position.x > canvas.width ||
            position.y < 0 ||
            position.y > canvas.height
        ) {
            return;
        }

        ctx.lineTo(position.x, position.y);
        ctx.stroke();
    }

    function stopDrawing() {
        if (drawing) {
            ctx.closePath();
        }

        drawing = false;
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    redBtn.addEventListener("click", function () {
        ctx.strokeStyle = "#ff0000";
        currentColorDisplay.textContent = "Red";
    });

    blueBtn.addEventListener("click", function () {
        ctx.strokeStyle = "#0000ff";
        currentColorDisplay.textContent = "Blue";
    });

    greenBtn.addEventListener("click", function () {
        ctx.strokeStyle = "#008000";
        currentColorDisplay.textContent = "Green";
    });

    eraserBtn.addEventListener("click", function () {
        ctx.strokeStyle = "#ffffff";
        currentColorDisplay.textContent = "White (Eraser)";
    });

    defaultBtn.addEventListener("click", function () {
        ctx.strokeStyle = "#000000";
        currentColorDisplay.textContent = "Black";
    });

    clearBtn.addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "#000000";
        currentColorDisplay.textContent = "Black";
    });
});
