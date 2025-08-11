# מדריך מפורט: Fork והתאמה אישית של `portfolio-template`

המטרה של קובץ זה היא לעזור לך (או לכל אחד אחר) ליצור עותק (Fork) של התבנית, להתאים אותה אישית כפורטפוליו אישי, ולשמור על היכולת למשוך עדכונים עתידיים מהמאגר המקורי.

---

## תוכן עניינים
1. מבוא
2. דרישות מקדימות
3. יצירת Fork
4. שכפול (Clone) מקומי
5. הגדרת `upstream` לסנכרון עתידי
6. התקנת תלויות (אם יש)
7. מבנה הפרויקט (סקירה)
8. התאמה אישית ראשונית (פרטים אישיים)
9. הוספת / עדכון פרויקטים
10. התאמות עיצוב (CSS / Theme)
11. הפעלת GitHub Pages
12. שמירת הסנכרון עם המאגר המקורי
13. פריסה אלטרנטיבית (Netlify / Vercel)
14. בדיקה מקומית (Live Preview)
15. ניקיון והקשחה (Performance / SEO)
16. שאלות נפוצות (FAQ)
17. רישוי וקרדיט
18. תרומה חזרה (אופציונלי)

---

## 1. מבוא
`portfolio-template` היא תבנית מודרנית ורספונסיבית להצגת פרויקטים, מיומנויות וקישורים מקצועיים.  
Fork מאפשר לך להפוך את המאגר לעותק עצמאי בחשבון שלך – עם אפשרות לשינויים מלאים.

---

## 2. דרישות מקדימות
- חשבון GitHub פעיל
- Git מותקן מקומית (`git --version`)
- עורך קוד (VS Code מומלץ)
- ידע בסיסי ב-HTML / CSS / JavaScript (רצוי)

---

## 3. יצירת Fork
1. נווט למאגר המקורי:  
   https://github.com/AlmogShKt/portfolio-template
2. לחץ על הכפתור Fork (בצד ימין למעלה).
3. בחר שם (אפשר להשאיר כברירת מחדל) ולחץ Create Fork.

המאגר החדש יופיע אצלך בכתובת:  
`https://github.com/<your-username>/portfolio-template`

---

## 4. שכפול (Clone) מקומי
```bash
git clone https://github.com/<your-username>/portfolio-template.git
cd portfolio-template
```

---

## 5. הגדרת `upstream` לסנכרון עתידי
כדי שתוכל למשוך עדכונים מהמקור:
```bash
git remote add upstream https://github.com/AlmogShKt/portfolio-template.git
git remote -v
```
פלט צפוי:
```
origin   https://github.com/<your-username>/portfolio-template.git (fetch)
origin   https://github.com/<your-username>/portfolio-template.git (push)
upstream https://github.com/AlmogShKt/portfolio-template.git (fetch)
upstream https://github.com/AlmogShKt/portfolio-template.git (push)
```

---

## 6. התקנת תלויות
אם הפרויקט הוא סטטי בלבד – אין צורך.  
אם בעתיד יתווסף `package.json`, תריץ:
```bash
npm install
```

---

## 7. מבנה הפרויקט (דוגמה משוערת)
(התאם לפי מה שקיים בפועל – עדכן חלק זה אם המבנה משתנה)
```
.
├── index.html
├── assets/
│   └── icons/
├── css/
│   └── styles.css
├── js/
│   ├── data.js
│   └── main.js
├── README.md
└── (קבצים נוספים)
```

---

## 8. התאמה אישית ראשונית
פתח את `js/data.js` וערך את הפרטים האישיים:
```javascript
const portfolioData = {
  name: "שם מלא",
  title: "תיאור מקצועי קצר",
  about: "תיאור אישי מפורט יותר על הרקע והיעדים שלך",
  avatarUrl: "", // השאר ריק אם אין תמונה
  resumeUrl: "", // קישור לקורות חיים
  
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile/",
    website: "https://your-website.com",
    twitter: "",
  },
  
  skills: [
    "JavaScript",
    "Python", 
    "React",
    // הוסף את הטכנולוגיות שלך
  ],
  // ...
};
```

שדות אופייניים לשינוי:
- שם מלא
- תיאור כללי / תקציר מקצועי
- קישורים לרשתות (GitHub, LinkedIn, Email)
- תמונת פרופיל (החלף ב־`assets/icons/`)

---

## 9. הוספת / עדכון פרויקטים
ב-`js/data.js`, ערך את מערך הפרויקטים:
```javascript
projects: [
  {
    title: "שם הפרויקט",
    description: "תיאור קצר של הפרויקט ומה הוא עושה",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/your-username/project-name",
    liveUrl: "https://project-demo.com", // אופציונלי
    imageUrl: "assets/icons/project-image.png" // אופציונלי
  },
  // הוסף פרויקטים נוספים...
]
```
טיפים:
- שמור על אחידות.
- השתמש ב־Stack קצר (3–5 טכנולוגיות).
- הוסף פרויקטים משמעותיים; הסר placeholders.

---

## 10. התאמות עיצוב
פתח `css/styles.css` וחפש משתני Root (אם קיימים):
```css
:root {
  --bg-color: #ffffff;
  --accent: #2f6feb;
  --text-color: #222;
}
```
שנה ערכות צבעים (הקפד על ניגודיות).  
ניתן ליצור Dark Mode עם מחלקה `dark` על `body`:
```css
body.dark {
  --bg-color: #121212;
  --text-color: #f5f5f5;
}
```

---

## 11. הפעלת GitHub Pages
1. היכנס למאגר שלך ב-GitHub.
2. Settings → Pages.
3. Source: בחר Branch: `main`, Folder: `/ (root)` → Save.
4. המתן 1–3 דקות.  
האתר יעלה בכתובת:  
`https://<your-username>.github.io/portfolio-template/`  
(שקול לשנות שם מאגר ל־`portfolio` כדי לקבל URL קצר יותר.)

Tip: אם שינית שמות קבצים, ודא שאין שבירת נתיבים יחסיים.

---

## 12. סנכרון עם שינויים עתידיים
כשתרצה למשוך עדכונים מהמאגר המקורי:
```bash
git fetch upstream
git checkout main
git merge upstream/main
# פתר קונפליקטים אם יש, ואז:
git commit
git push origin main
```
אפשר גם Rebase (מתקדם):
```bash
git fetch upstream
git rebase upstream/main
git push origin main --force-with-lease
```

---

## 13. פריסה אלטרנטיבית
**Netlify:**
1. התחבר ל-Netlify עם GitHub
2. Import repository
3. אם סטטי – אין Build Command. פתח Deploy.

**Vercel:**
1. התחבר עם GitHub
2. Import
3. פרויקט סטטי – יאותר אוטומטית.

---

## 14. בדיקה מקומית (Live Preview)
אפשר להשתמש ב־VS Code Extension: Live Server.  
או ידנית:
```bash
python -m http.server 8080
# גלוש ל: http://localhost:8080
```

---

## 15. ניקיון והקשחה
**Performance:**
- כווץ תמונות (TinyPNG / Squoosh).
- הסר ספריות JS שאינן בשימוש.

**SEO:**
- עדכן `<title>` ו-`<meta name="description">` ב-`index.html`.
- הוסף OpenGraph:
```html
<meta property="og:title" content="שם מלא - Portfolio">
<meta property="og:description" content="מפתח תוכנה המתמחה ב-...">
<meta property="og:image" content="https://<domain>/assets/icons/preview.png">
```

**נגישות:**
- השתמש ב־alt לתמונות.
- הקפד על יחס ניגודיות 4.5:1.

---

## 16. שאלות נפוצות

**ש: למה האתר לא נטען אחרי הפעלת Pages?**  
ת: בדוק שהסניף main ושאין תיקיית build שגויה.

**ש: שברו לי קישורי תמונות.**  
ת: ודא שהנתיבים יחסיים נכונים (`./assets/icons/...`).

**ש: איך משנים את כתובת הפרויקט?**  
ת: שנה שם מאגר ואחר כך פתח מחדש Pages.

---

## 17. רישוי וקרדיט
אם תרצה להשאיר קרדיט למקור, הוסף בגוף האתר שורה דיסקרטית:
```html
<footer>
  <small>Based on <a href="https://github.com/AlmogShKt/portfolio-template">portfolio-template</a></small>
</footer>
```
(בדוק אם יתווסף רישיון בהמשך; אם אין רישיון – מומלץ לציין Attribution.)

---

## 18. תרומה חזרה (אופציונלי)
אם ביצעת שיפור כללי (לא אישי), ניתן:
1. למשוך עדכונים
2. ליצור Branch:
   ```bash
   git checkout -b feature/improve-accessibility
   ```
3. לבצע Commit:
   ```bash
   git commit -m "Improve accessibility: add ARIA labels"
   git push origin feature/improve-accessibility
   ```
4. לפתוח Pull Request למאגר המקורי.

---

## סיכום
המדריך נותן לך את כל שלבי העבודה – מהעתקת הפרויקט ועד התאמה מלאה ותחזוקה מתמשכת.  
שמור על הפשטות, עדכן תכנים משמעותיים והקפד על תחזוקה שוטפת.

בהצלחה!