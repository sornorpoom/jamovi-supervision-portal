# 📊 jamovi CAR: การประยุกต์ใช้ jamovi กับการวิจัยในชั้นเรียน

เว็บแอปพลิเคชันและคู่มือเชิงปฏิบัติการฉบับสมบูรณ์ (5 ตอน + ภาคผนวก) สำหรับการวิเคราะห์ข้อมูลงานวิจัยปฏิบัติการในชั้นเรียน (Classroom Action Research: CAR) ด้วยโปรแกรมสถิติโอเพนซอร์ส **jamovi** เพื่อเป็นแหล่งเรียนรู้สำหรับผู้บริหาร ศึกษานิเทศก์ และเพื่อนครู

---

## 🌟 จุดเด่นของระบบ (Key Features)

1. **Dual Perspective (มุมมอง 2 กลุ่มเป้าหมาย):**
   - 👔 **สำหรับผู้บริหาร & ศึกษานิเทศก์:** Dashboard เชิงนโยบาย, ความคุ้มค่าทางงบประมาณ, การขับเคลื่อน PLC และเกณฑ์การประเมินเล่มงานวิจัย (CAR Rubric)
   - 👩‍🏫 **สำหรับครูผู้สอน:** คู่มือ Step-by-Step 5 ตอน, การตั้งค่าตัวแปร, การคลีนข้อมูล, สถิติบรรยาย, คุณภาพเครื่องมือ, การทดสอบสมมติฐาน และการนำผลไปเขียนรายงาน
2. **One-Click Word Export (แม่แบบตาราง APA 7th):**
   - มีปุ่มคลิกเดียวคัดลอกตารางผลลัพธ์ในรูปแบบ HTML สามารถนำไป Paste (Ctrl+V) ลงใน Microsoft Word ได้ทันที โดยตารางมีเส้นบน-ล่าง-หัวตาราง ตัวเอียงสัญลักษณ์สถิติ (*M, SD, t, p, r*) ครบถ้วน
3. **Interactive Research Tools:**
   - โปรแกรมคำนวณประสิทธิภาพสื่อนวัตกรรมการเรียนรู้ ($E_1/E_2$) ตามเกณฑ์มาตรฐาน $80/80$, $85/85$, $90/90$ ของ ศ.ดร.ชัยยงค์ พรหมวงศ์
   - เครื่องมือแปลผลค่าความยากง่าย ($p$) และค่าอำนาจจำแนก ($r$) อิงเกณฑ์ Ebel & Frisbie
4. **Download Center:**
   - แจกฟรีชุดข้อมูลตัวอย่าง `.csv` จากกรณีศึกษาวิทยาศาสตร์ ป.6 เพื่อใช้ฝึกปฏิบัติตามคู่มือได้ทันที
5. **Verified Academic References:**
   - รวบรวมแหล่งอ้างอิงทางวิชาการและมาตรฐานสากล (APA 7th, jamovi, Kemmis & McTaggart, Cronbach, Cohen) ตรวจสอบได้จริง

---

## 🚀 โครงสร้างเนื้อหาทั้ง 5 ตอน

- **ตอนที่ 1:** การเตรียมและจัดกระทำข้อมูลก่อนการวิเคราะห์ (Data Preparation & Management)
- **ตอนที่ 2:** สถิติบรรยายและสถิติพื้นฐาน (Descriptive Statistics)
- **ตอนที่ 3:** สถิติตรวจสอบคุณภาพเครื่องมือและประสิทธิภาพนวัตกรรม (Quality & Efficiency Statistics)
- **ตอนที่ 4:** สถิติอ้างอิงเพื่อการทดสอบสมมติฐาน (Inferential Statistics)
- **ตอนที่ 5:** การนำผลลัพธ์จาก jamovi สู่การเขียนรายงานวิจัยในชั้นเรียน (Reporting & Research Exporting)
- **ภาคผนวก:** การติดตั้ง jamovi (Solid vs Current), การเปิด R Syntax Mode และการติดตั้ง Library Modules

---

## 🛠️ วิธีการติดตั้งและรันในเครื่อง (Local Development)

```bash
# 1. ติดตั้ง Dependencies
npm install

# 2. เริ่มต้นเซิร์ฟเวอร์ทดสอบ
npm run dev

# 3. สั่ง Build สำหรับ Production
npm run build
```

---

## 🌐 วิธีการนำขึ้น GitHub และ Vercel (Deployment Guide)

### 1. นำขึ้น GitHub
```bash
git init
git add .
git commit -m "Initial commit: jamovi CAR platform"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

### 2. นำขึ้น Vercel (ฟรี 100%)
1. เข้าไปที่ [vercel.com](https://vercel.com) แล้วเข้าสู่ระบบด้วย GitHub
2. คลิกปุ่ม **"Add New..." ➔ "Project"**
3. เลือก Repository ที่เพิ่ง Push ขึ้นไป
4. กดปุ่ม **"Deploy"** ระบบจะสร้างเว็บไซต์พร้อม URL ออนไลน์ให้ทันที!

---

## 📚 แหล่งอ้างอิงทางวิชาการ (Academic References)

- **American Psychological Association.** (2020). *Publication manual of the American Psychological Association* (7th ed.). https://doi.org/10.1037/0000165-000
- **Brahmawong, C.** (2013). Developmental testing of media and instructional package. *Silpakorn Educational Research Journal*, 5(1), 7-20.
- **Navarro, D. J., & Fox, D. R.** (2022). *Learning statistics with jamovi: A tutorial for psychology students and other beginners* (Version 0.75). https://doi.org/10.24384/k9fv-m340
- **The jamovi project.** (2024). *jamovi* (Version 2.5) [Computer Software]. https://www.jamovi.org
- **Cronbach, L. J.** (1951). Coefficient alpha and the internal structure of tests. *Psychometrika*, 16(3), 297–334.
- **Cohen, J.** (1988). *Statistical power analysis for the behavioral sciences* (2nd ed.). Lawrence Erlbaum Associates.
- **Kemmis, S., & McTaggart, R.** (1988). *The action research planner* (3rd ed.). Deakin University Press.
