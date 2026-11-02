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
