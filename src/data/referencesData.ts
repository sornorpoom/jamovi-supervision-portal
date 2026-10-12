import { AcademicReference } from '../types';

export const academicReferences: AcademicReference[] = [
  {
    id: 'apa7',
    citationAPA: 'American Psychological Association. (2020). Publication manual of the American Psychological Association (7th ed.). https://doi.org/10.1037/0000165-000',
    titleTh: 'คู่มือการเขียนและการจัดรูปแบบรายงานวิชาการ มาตรฐาน APA ฉบับพิมพ์ครั้งที่ 7',
    type: 'Standard',
    description: 'มาตรฐานสากลสำหรับการจัดทำตารางผลลัพธ์ทางสถิติ (เส้นแนวนอน 3 เส้น ไม่มีเส้นแนวตั้ง ตัวเอียงสัญลักษณ์สถิติ M, SD, t, p, r, F) และการเขียนรายงานวิจัย',
    url: 'https://apastyle.apa.org/products/publication-manual-7th-edition',
    doi: '10.1037/0000165-000',
    tags: ['APA 7th', 'ตารางมาตรฐาน', 'การรายงานผล']
  },
  {
    id: 'jamovi-team',
    citationAPA: 'The jamovi project. (2024). jamovi (Version 2.5) [Computer Software]. Retrieved from https://www.jamovi.org',
    titleTh: 'โปรแกรมสถิติโอเพนซอร์ส jamovi และคู่มือการใช้งานอย่างเป็นทางการ',
    type: 'Manual',
    description: 'ซอฟต์แวร์สถิติเสรี (Open Source) ทำงานบนฐานของภาษา R สำหรับการวิเคราะห์สถิติพื้นฐานและขั้นสูง มีหน้าต่างโต้ตอบแบบ Real-time และเชื่อมต่อ R Syntax',
    url: 'https://www.jamovi.org',
    tags: ['jamovi', 'Open Source', 'R-based']
  },
  {
    id: 'navarro-fox',
    citationAPA: 'Navarro, D. J., & Fox, D. R. (2022). Learning statistics with jamovi: A tutorial for psychology students and other beginners (Version 0.75). https://doi.org/10.24384/k9fv-m340',
    titleTh: 'การเรียนรู้สถิติด้วย jamovi: คู่มือปฏิบัติการสำหรับผู้เริ่มต้นและนักวิจัย',
    type: 'Book',
    description: 'ตำราหลักการวิเคราะห์สถิติและการทดสอบสมมติฐานด้วย jamovi อธิบายแนวคิด Descriptive Stats, t-test, ANOVA, Regression และการตรวจสอบสมมติฐานเบื้องต้น (Normality, Homogeneity)',
    url: 'https://www.learnstatswithjamovi.com/',
    doi: '10.24384/k9fv-m340',
    tags: ['สถิติวิจัย', 'ทฤษฎีสถิติ', 't-test', 'Regression']
  },
  {
    id: 'brahmawong',
    citationAPA: 'Brahmawong, C. (2013). Developmental testing of media and instructional package. Silpakorn Educational Research Journal, 5(1), 7-20.',
    titleTh: 'การทดสอบประสิทธิภาพสื่อและชุดการสอน (E1/E2) โดย ศาสตราจารย์ ดร.ชัยยงค์ พรหมวงศ์',
    type: 'Journal',
    description: 'หลักการและสูตรคำนวณประสิทธิภาพของสื่อนวัตกรรมทางการศึกษา E1 (ประสิทธิภาพกระบวนการ) และ E2 (ประสิทธิภาพผลลัพธ์) พร้อมเกณฑ์มาตรฐาน 80/80 หรือ 85/85',
    url: 'https://so05.tci-thaijo.org/index.php/sueduresearchjournal/article/view/28419',
    tags: ['E1/E2', 'ประสิทธิภาพนวัตกรรม', 'ชัยยงค์ พรหมวงศ์']
  },
  {
    id: 'kemmis-mctaggart',
    citationAPA: 'Kemmis, S., & McTaggart, R. (1988). The action research planner (3rd ed.). Deakin University Press.',
    titleTh: 'วงจรการวิจัยเชิงปฏิบัติการ (Action Research Spiral: Plan-Act-Observe-Reflect)',
    type: 'Book',
    description: 'กรอบแนวคิดวงจรการวิจัยปฏิบัติการในชั้นเรียน (Classroom Action Research: CAR) เพื่อการแก้ปัญหาและการพัฒนาผู้เรียนอย่างต่อเนื่องเป็นเกลียววงสะท้อนผล',
    tags: ['CAR', 'วิจัยในชั้นเรียน', 'เกลียวสะท้อนผล']
  },
  {
    id: 'cronbach',
    citationAPA: 'Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests. Psychometrika, 16(3), 297–334. https://doi.org/10.1007/BF02310555',
    titleTh: 'สัมประสิทธิ์แอลฟาของครอนบาค (Cronbach’s Alpha Reliability)',
    type: 'Journal',
    description: 'ทฤษฎีการหาความเชื่อมั่นและความสอดคล้องภายใน (Internal Consistency Reliability) ของแบบทดสอบและแบบสอบถามมาตรวัดหลายระดับ (Likert / Rubric)',
    doi: '10.1007/BF02310555',
    tags: ['Cronbach Alpha', 'ความเชื่อมั่น', 'คุณภาพเครื่องมือ']
  },
  {
    id: 'cohen',
    citationAPA: 'Cohen, J. (1988). Statistical power analysis for the behavioral sciences (2nd ed.). Lawrence Erlbaum Associates.',
    titleTh: 'การวิเคราะห์อำนาจการทดสอบและขนาดอิทธิพล (Effect Size: Cohen’s d)',
    type: 'Book',
    description: 'เกณฑ์มาตรฐานในการแปลขนาดอิทธิพลทางสถิติ: เล็ก (d = 0.20), ปานกลาง (d = 0.50), ใหญ่ (d = 0.80) สำหรับการวัดพัฒนาการของผู้เรียน',
    tags: ['Cohen d', 'Effect Size', 'ขนาดอิทธิพล']
  },
  {
    id: 'ebel-frisbie',
    citationAPA: 'Ebel, R. L., & Frisbie, D. A. (1991). Essentials of educational measurement (5th ed.). Prentice-Hall.',
    titleTh: 'หลักการวัดและประเมินผลทางการศึกษา: ค่าความยากง่าย (p) และค่าอำนาจจำแนก (r)',
    type: 'Book',
    description: 'เกณฑ์มาตรฐานคุณภาพข้อสอบ: ค่าความยากง่าย 0.20–0.80 และค่าอำนาจจำแนก r ≥ 0.20 (Point-biserial / Item-rest correlation)',
    tags: ['Item Analysis', 'ความยากง่าย', 'อำนาจจำแนก']
  }
];
