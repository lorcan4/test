const express = require('express');
const app = express();
const port = 3000;

// ضبط EJS كمحرك القوالب
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './'));
// الصفحة الرئيسية
app.get('/', (req, res) => {
    res.render('home', { title: 'مرحبا بك', message: 'هذه صفحة EJS بسيطة!' });
});

app.listen(port, () => {
    console.log(`الخادم يعمل على http://localhost:${port}`);
});
