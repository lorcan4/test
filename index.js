const express = require('express');
const path = require('path'); // ✅ إضافة path
const app = express();
const port = 3000;

// ضبط EJS كمحرك القوالب
app.set('view engine', 'ejs');
app.set('views', __dirname);


// الصفحة الرئيسية
app.get('/', (req, res) => {
    res.render('home', { title: 'مرحبا بك', message: 'هذه صفحة EJS بسيطة!' });
});

// تشغيل الخادم
app.listen(port, () => {
    console.log(`الخادم يعمل على http://localhost:${port}`);
});

module.exports = app; // ✅ إضافة هذا إذا كنت تستخدم Serverless Functions في Vercel
