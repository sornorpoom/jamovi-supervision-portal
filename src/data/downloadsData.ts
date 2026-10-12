export interface DownloadItem {
  id: string;
  title: string;
  filename: string;
  fileType: 'csv' | 'omv' | 'xlsx' | 'software';
  category: 'csv' | 'omv' | 'excel' | 'software';
  size: string;
  description: string;
  url: string;
  tag: string;
  chapterBadge?: string;
}

export const downloadsData: DownloadItem[] = [
  // Excel Master File
  {
    id: 'excel-master',
    title: 'ไฟล์รวมชุดข้อมูลงานวิจัยทั้งหมด (Master Excel File)',
    filename: 'data test jamovi.xlsx',
    fileType: 'xlsx',
    category: 'excel',
    size: '79.8 KB',
    description: 'ไฟล์ Microsoft Excel รวมชุดข้อมูลวิจัยในชั้นเรียนทุกตอน ทุกชีต (Sheet 1-7) ครอบคลุมการเตรียมข้อมูล สถิติบรรยาย คุณภาพเครื่องมือ สถิติอ้างอิง และแบบวัดต่างๆ',
    url: '/downloads/data%20test%20jamovi.xlsx',
    tag: 'Excel ต้นฉบับ',
    chapterBadge: 'รวมทุกตอน'
  },

  // 1. CSV Data Sets (Separated by Chapter and Instrument)
  {
    id: 'csv-chap1',
    title: 'ตอนที่ 1: ชุดข้อมูลฝึกการเตรียมและจัดกระทำข้อมูล',
    filename: 'data test jamovi - 1.Data Preparation & Management.csv',
    fileType: 'csv',
    category: 'csv',
    size: '505 Bytes',
    description: 'ชุดข้อมูลสำหรับฝึกนำเข้าไฟล์ .CSV, ตั้งค่า Measure Types (Nominal/Ordinal/Continuous), Clean ค่าสูญหาย (NA) และคำนวณตัวแปร',
    url: '/downloads/data%20test%20jamovi%20-%201.Data%20Preparation%20%26%20Management.csv',
    tag: 'ชุดข้อมูล .CSV',
    chapterBadge: 'ตอนที่ 1'
  },
  {
    id: 'csv-chap2',
    title: 'ตอนที่ 2: ชุดข้อมูลสถิติบรรยายและสถิติพื้นฐาน',
    filename: 'data test jamovi - 2.Descriptive Statistics.csv',
    fileType: 'csv',
    category: 'csv',
    size: '1.2 KB',
    description: 'ชุดข้อมูลตัวแปรคะแนน ความถี่ ร้อยละ Mean, SD, Median, IQR, Box Plot และการวิเคราะห์แยกกลุ่มด้วยฟังก์ชัน Split by',
    url: '/downloads/data%20test%20jamovi%20-%202.Descriptive%20Statistics.csv',
    tag: 'ชุดข้อมูล .CSV',
    chapterBadge: 'ตอนที่ 2'
  },
  {
    id: 'csv-chap3',
    title: 'ตอนที่ 3: ชุดข้อมูลสถิติตรวจสอบคุณภาพเครื่องมือ & E1/E2',
    filename: 'data test jamovi - 3.Quality & Efficiency Statistics.csv',
    fileType: 'csv',
    category: 'csv',
    size: '759 Bytes',
    description: 'ชุดข้อมูลสำหรับฝึกคำนวณประสิทธิภาพสื่อนวัตกรรม E1/E2 (คะแนนกระบวนการระหว่างเรียนและคะแนนผลลัพธ์หลังเรียน)',
    url: '/downloads/data%20test%20jamovi%20-%203.Quality%20%26%20Efficiency%20Statistics.csv',
    tag: 'ชุดข้อมูล .CSV',
    chapterBadge: 'ตอนที่ 3'
  },
  {
    id: 'csv-chap4',
    title: 'ตอนที่ 4: ชุดข้อมูลสถิติอ้างอิงและการทดสอบสมมติฐาน',
    filename: 'data test jamovi - 4.Inferential Statistics.csv',
    fileType: 'csv',
    category: 'csv',
    size: '1.4 KB',
    description: 'ชุดข้อมูลสำหรับการทดสอบ One Sample t-test, Paired Samples t-test, Independent Samples t-test, Pearson Correlation และ Multiple Regression',
    url: '/downloads/data%20test%20jamovi%20-%204.Inferential%20Statistics.csv',
    tag: 'ชุดข้อมูล .CSV',
    chapterBadge: 'ตอนที่ 4'
  },
  {
    id: 'csv-mc',
    title: 'เครื่องมือวัด: คะแนนแบบทดสอบปรนัย (Multiple Choice 0/1)',
    filename: 'data test jamovi - 5.Multiple Choice Test.csv',
    fileType: 'csv',
    category: 'csv',
    size: '791 Bytes',
    description: 'คะแนนการตอบถูก (1) และผิด (0) ของนักเรียน สำหรับฝึกวิเคราะห์ความยากง่าย (p), อำนาจจำแนก (r / Item-rest corr) และความเชื่อมั่น KR-20',
    url: '/downloads/data%20test%20jamovi%20-%205.Multiple%20Choice%20Test.csv',
    tag: 'ชุดข้อมูล .CSV',
    chapterBadge: 'ข้อสอบปรนัย'
  },
  {
    id: 'csv-essay',
    title: 'เครื่องมือวัด: คะแนนแบบทดสอบอัตนัยตามเกณฑ์รูบริก (Essay Test)',
    filename: 'data test jamovi - 6.Essay test.csv',
    fileType: 'csv',
    category: 'csv',
    size: '664 Bytes',
    description: 'คะแนนการตรวจให้คะแนนแบบหลายค่า (Polytomous scoring 0-5) สำหรับฝึกวิเคราะห์ความยากง่ายรายข้อ และความเชื่อมั่น Cronbach’s alpha',
    url: '/downloads/data%20test%20jamovi%20-%206.Essay%20test.csv',
    tag: 'ชุดข้อมูล .CSV',
    chapterBadge: 'ข้อสอบอัตนัย'
  },
  {
    id: 'csv-quest',
    title: 'เครื่องมือวัด: คะแนนแบบสอบถามมาตรประมาณค่า (Likert Questionnaire)',
    filename: 'data test jamovi - 7.Questionnaire.csv',
    fileType: 'csv',
    category: 'csv',
    size: '451 Bytes',
    description: 'คะแนนแบบวัดเจตคติ 5 ระดับ สำหรับฝึกตรวจสอบความสอดคล้องภายใน และ Cronbach’s alpha if item dropped',
    url: '/downloads/data%20test%20jamovi%20-%207.Questionnaire.csv',
    tag: 'ชุดข้อมูล .CSV',
    chapterBadge: 'แบบสอบถาม'
  },

  // 2. Native jamovi Project Files (.omv)
  {
    id: 'omv-chap1',
    title: 'ไฟล์โปรเจกต์ jamovi สำเร็จรูป: ตอนที่ 1 (Data Prep)',
    filename: 'data test stat 01.omv',
    fileType: 'omv',
    category: 'omv',
    size: '2.7 KB',
    description: 'ไฟล์โปรเจกต์ jamovi (.omv) สำเร็จรูปของตอนที่ 1 ดับเบิลคลิกเปิดในโปรแกรม jamovi จะเห็นการตั้งค่าตัวแปร การคลีนข้อมูล และสูตร Compute ทันที',
    url: '/downloads/data%20test%20stat%2001.omv',
    tag: 'ไฟล์ jamovi (.omv)',
    chapterBadge: 'โปรเจกต์ ตอนที่ 1'
  },
  {
    id: 'omv-chap2',
    title: 'ไฟล์โปรเจกต์ jamovi สำเร็จรูป: ตอนที่ 2 (Descriptives)',
    filename: 'data test stat 02.omv',
    fileType: 'omv',
    category: 'omv',
    size: '26.0 KB',
    description: 'ไฟล์โปรเจกต์ jamovi (.omv) บรรจุผลการวิเคราะห์สถิติบรรยาย ตารางความถี่ ร้อยละ Mean, SD, Box plot และ Split by ครบถ้วน',
    url: '/downloads/data%20test%20stat%2002.omv',
    tag: 'ไฟล์ jamovi (.omv)',
    chapterBadge: 'โปรเจกต์ ตอนที่ 2'
  },
  {
    id: 'omv-chap3',
    title: 'ไฟล์โปรเจกต์ jamovi สำเร็จรูป: ตอนที่ 3 (E1/E2 & Efficiency)',
    filename: 'data test stat 03.omv',
    fileType: 'omv',
    category: 'omv',
    size: '3.6 KB',
    description: 'ไฟล์โปรเจกต์ jamovi (.omv) บรรจุการคำนวณประสิทธิภาพสื่อนวัตกรรม E1/E2 พร้อมตารางสรุปผลลัพธ์',
    url: '/downloads/data%20test%20stat%2003.omv',
    tag: 'ไฟล์ jamovi (.omv)',
    chapterBadge: 'โปรเจกต์ ตอนที่ 3'
  },
  {
    id: 'omv-chap4',
    title: 'ไฟล์โปรเจกต์ jamovi สำเร็จรูป: ตอนที่ 4 (Inferential Stats)',
    filename: 'data test stat 04.omv',
    fileType: 'omv',
    category: 'omv',
    size: '11.3 KB',
    description: 'ไฟล์โปรเจกต์ jamovi (.omv) บรรจุผลการทดสอบสมมติฐาน t-test ทุกประเภท สหสัมพันธ์ Pearson และการถดถอย Linear Regression พร้อมตาราง APA',
    url: '/downloads/data%20test%20stat%2004.omv',
    tag: 'ไฟล์ jamovi (.omv)',
    chapterBadge: 'โปรเจกต์ ตอนที่ 4'
  },
  {
    id: 'omv-mc',
    title: 'ไฟล์โปรเจกต์ jamovi สำเร็จรูป: วิเคราะห์ข้อสอบปรนัย (MC Test)',
    filename: 'data test stat MC test.omv',
    fileType: 'omv',
    category: 'omv',
    size: '9.7 KB',
    description: 'ไฟล์โปรเจกต์ jamovi (.omv) บรรจุการวิเคราะห์ Item Analysis หาค่าความยากง่าย (p), อำนาจจำแนก (r) และความเชื่อมั่น KR-20/Cronbach’s alpha รายข้อ',
    url: '/downloads/data%20test%20stat%20MC%20test.omv',
    tag: 'ไฟล์ jamovi (.omv)',
    chapterBadge: 'โปรเจกต์ ข้อสอบปรนัย'
  },
  {
    id: 'omv-essay',
    title: 'ไฟล์โปรเจกต์ jamovi สำเร็จรูป: วิเคราะห์ข้อสอบอัตนัย (Essay Test)',
    filename: 'data test stat essay test.omv',
    fileType: 'omv',
    category: 'omv',
    size: '4.8 KB',
    description: 'ไฟล์โปรเจกต์ jamovi (.omv) บรรจุการวิเคราะห์ความเชื่อมั่น Cronbach’s alpha และความยากง่ายของแบบทดสอบอัตนัยรูบริก',
    url: '/downloads/data%20test%20stat%20essay%20test.omv',
    tag: 'ไฟล์ jamovi (.omv)',
    chapterBadge: 'โปรเจกต์ ข้อสอบอัตนัย'
  },
  {
    id: 'omv-quest',
    title: 'ไฟล์โปรเจกต์ jamovi สำเร็จรูป: วิเคราะห์แบบสอบถาม (Questionnaire)',
    filename: 'data test stat questionaire test.omv',
    fileType: 'omv',
    category: 'omv',
    size: '22.5 KB',
    description: 'ไฟล์โปรเจกต์ jamovi (.omv) บรรจุผลการวิเคราะห์ความเชื่อมั่นของแบบสอบถามมาตรประมาณค่า Likert Scale และค่า if item dropped',
    url: '/downloads/data%20test%20stat%20questionaire%20test.omv',
    tag: 'ไฟล์ jamovi (.omv)',
    chapterBadge: 'โปรเจกต์ แบบสอบถาม'
  },

  // 3. Software installer link
  {
    id: 'jamovi-software',
    title: 'ดาวน์โหลดโปรแกรม jamovi (Official Solid Version)',
    filename: 'jamovi-solid-installer',
    fileType: 'software',
    category: 'software',
    size: 'Link ตรง',
    description: 'ลิงก์ตรงไปยังเว็บไซต์ทางการ www.jamovi.org เพื่อดาวน์โหลดเวอร์ชัน Solid ที่เสถียรที่สุด ฟรี 100% ไม่มีหมดอายุ (Windows / Mac / Linux)',
    url: 'https://www.jamovi.org/download.html',
    tag: 'โปรแกรมติดตั้ง',
    chapterBadge: 'ดาวน์โหลดโปรแกรม'
  }
];
