const express = require('express');
const path = require('path'); // ✅ إضافة path
const app = express();
const port = 3000;

// ضبط EJS كمحرك القوالب
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // الآن استخدام مجلد `views`

app.get('/', (req, res) => {
    res.send('Welcome');
});

// الصفحة التي تحتوي على القالب EJS
app.get('/home', (req, res) => {
    res.render('home', { title: 'مرحبا بك', message: 'هذه صفحة EJS بسيطة!' });
});
app.get('/home', (req, res) => {
    res.sendFile('./ds.html');
});

// تشغيل الخادم
app.listen(port, () => {
    console.log(`الخادم يعمل على http://localhost:${port}`);
});

module.exports = app;
