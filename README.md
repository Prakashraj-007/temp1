1. Edit package.json

Add homepage at the top level, and add the eslint-patch pin in devDependencies:



json
"homepage": "/proxy/8081",


json
"devDependencies": {
  "@rushstack/eslint-patch": "1.5.1",
  "jest-fetch-mock": "^3.0.3"
}
2. Install dependencies



bash
rm -rf node_modules package-lock.json
npm install
3. Create src/setupProxy.js



js
module.exports = function (app) {
  app.use((req, res, next) => {
    const prefix = "/proxy/8081";
    if (!req.url.startsWith(prefix)) {
      req.url = prefix + req.url;
    }
    next();
  });
};
4. Start the app



bash
npm start
