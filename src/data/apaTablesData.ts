import { ApaTableItem } from '../types';

export const apaTablesData: ApaTableItem[] = [
  {
    id: 'apa-descriptive',
    title: 'ตารางสถิติบรรยายผลสัมฤทธิ์ทางการเรียน (Descriptives Table)',
    chapterNumber: 2,
    statType: 'สถิติบรรยาย (Mean, SD, Min, Max)',
    htmlContent: `<table style="width:100%; border-collapse:collapse; font-family:'TH Sarabun PSK', serif; font-size:16pt; line-height:1.2;">
  <caption style="text-align:left; font-weight:bold; margin-bottom:6px;">ตารางที่ 4.1 ค่าเฉลี่ย ส่วนเบี่ยงเบนมาตรฐาน และระดับคุณภาพผลสัมฤทธิ์ทางการเรียนวิชาวิทยาศาสตร์ (N = 30)</caption>
  <thead>
    <tr style="border-top: 2px solid #000; border-bottom: 1.5px solid #000;">
      <th style="text-align:left; padding:6px 10px;">ตัวแปร / กลุ่มการเรียนรู้</th>
      <th style="text-align:center; padding:6px 10px;"><i>N</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>M</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>SD</i></th>
      <th style="text-align:center; padding:6px 10px;">Min</th>
      <th style="text-align:center; padding:6px 10px;">Max</th>
      <th style="text-align:center; padding:6px 10px;">ระดับคุณภาพ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:6px 10px;">คะแนนทดสอบก่อนเรียน (Pre-test)</td>
      <td style="text-align:center; padding:6px 10px;">30</td>
      <td style="text-align:center; padding:6px 10px;">13.80</td>
      <td style="text-align:center; padding:6px 10px;">1.67</td>
      <td style="text-align:center; padding:6px 10px;">11.00</td>
      <td style="text-align:center; padding:6px 10px;">17.00</td>
      <td style="text-align:center; padding:6px 10px;">ปรับปรุง</td>
    </tr>
    <tr>
      <td style="padding:6px 10px;">คะแนนทดสอบหลังเรียน (Post-test)</td>
      <td style="text-align:center; padding:6px 10px;">30</td>
      <td style="text-align:center; padding:6px 10px;">25.70</td>
      <td style="text-align:center; padding:6px 10px;">2.45</td>
      <td style="text-align:center; padding:6px 10px;">20.00</td>
      <td style="text-align:center; padding:6px 10px;">29.00</td>
      <td style="text-align:center; padding:6px 10px;">ดีมาก</td>
    </tr>
    <tr>
      <td style="padding:6px 10px; padding-left:25px;">• กลุ่มที่เรียนด้วยกิจกรรม 5E ร่วมกับสื่อดิจิทัล</td>
      <td style="text-align:center; padding:6px 10px;">15</td>
      <td style="text-align:center; padding:6px 10px;">27.13</td>
      <td style="text-align:center; padding:6px 10px;">1.46</td>
      <td style="text-align:center; padding:6px 10px;">24.00</td>
      <td style="text-align:center; padding:6px 10px;">29.00</td>
      <td style="text-align:center; padding:6px 10px;">ดีมาก</td>
    </tr>
    <tr style="border-bottom: 2px solid #000;">
      <td style="padding:6px 10px; padding-left:25px;">• กลุ่มที่เรียนด้วยการสอนปกติ</td>
      <td style="text-align:center; padding:6px 10px;">15</td>
      <td style="text-align:center; padding:6px 10px;">24.27</td>
      <td style="text-align:center; padding:6px 10px;">2.31</td>
      <td style="text-align:center; padding:6px 10px;">20.00</td>
      <td style="text-align:center; padding:6px 10px;">28.00</td>
      <td style="text-align:center; padding:6px 10px;">ดี</td>
    </tr>
  </tbody>
</table>
<div style="font-family:'TH Sarabun PSK', serif; font-size:14pt; font-style:italic; margin-top:4px;"><i>หมายเหตุ.</i> คะแนนเต็ม 30 คะแนน; <i>M</i> = ค่าเฉลี่ย, <i>SD</i> = ส่วนเบี่ยงเบนมาตรฐาน</div>`,
    explanation: 'ตารางแสดงสถิติบรรยายพื้นฐานตามมาตรฐาน APA 7th Edition ไม่มีเส้นแนวตั้ง ใช้เส้นแนวนอน 3 เส้นหลัก และตัวเอียงสัญลักษณ์ N, M, SD',
    writingTemplate: 'จากตารางที่ 4.1 พบว่า นักเรียนชั้นประถมศึกษาปีที่ 6 ที่เรียนด้วยชุดกิจกรรมการเรียนรู้ 5E ร่วมกับสื่อดิจิทัล มีคะแนนผลสัมฤทธิ์ทางการเรียนหลังเรียนเฉลี่ยเท่ากับ 27.13 คะแนน (SD = 1.46) สูงกว่ากลุ่มที่เรียนด้วยการสอนปกติซึ่งมีคะแนนเฉลี่ยเท่ากับ 24.27 คะแนน (SD = 2.31)'
  },
  {
    id: 'apa-e1e2',
    title: 'ตารางประสิทธิภาพสื่อนวัตกรรม (E1/E2 Efficiency Table)',
    chapterNumber: 3,
    statType: 'ประสิทธิภาพนวัตกรรม (E1/E2 เกณฑ์ 85/85)',
    htmlContent: `<table style="width:100%; border-collapse:collapse; font-family:'TH Sarabun PSK', serif; font-size:16pt; line-height:1.2;">
  <caption style="text-align:left; font-weight:bold; margin-bottom:6px;">ตารางที่ 4.2 ผลการหาประสิทธิภาพของชุดกิจกรรมการเรียนรู้แบบสืบเสาะหาความรู้ (5E) ร่วมกับสื่อดิจิทัล (E1/E2)</caption>
  <thead>
    <tr style="border-top: 2px solid #000; border-bottom: 1.5px solid #000;">
      <th style="text-align:left; padding:6px 10px;">รายการประเมินประสิทธิภาพ</th>
      <th style="text-align:center; padding:6px 10px;">คะแนนเต็ม</th>
      <th style="text-align:center; padding:6px 10px;"><i>M</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>SD</i></th>
      <th style="text-align:center; padding:6px 10px;">ร้อยละประสิทธิภาพ</th>
      <th style="text-align:center; padding:6px 10px;">เกณฑ์มาตรฐาน</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:6px 10px;">ประสิทธิภาพของกระบวนการ (<i>E</i><sub>1</sub>)</td>
      <td style="text-align:center; padding:6px 10px;">30</td>
      <td style="text-align:center; padding:6px 10px;">25.93</td>
      <td style="text-align:center; padding:6px 10px;">1.82</td>
      <td style="text-align:center; padding:6px 10px;">86.44</td>
      <td style="text-align:center; padding:6px 10px;">85.00</td>
    </tr>
    <tr style="border-bottom: 2px solid #000;">
      <td style="padding:6px 10px;">ประสิทธิภาพของผลลัพธ์ (<i>E</i><sub>2</sub>)</td>
      <td style="text-align:center; padding:6px 10px;">30</td>
      <td style="text-align:center; padding:6px 10px;">25.70</td>
      <td style="text-align:center; padding:6px 10px;">2.45</td>
      <td style="text-align:center; padding:6px 10px;">85.67</td>
      <td style="text-align:center; padding:6px 10px;">85.00</td>
    </tr>
  </tbody>
</table>
<div style="font-family:'TH Sarabun PSK', serif; font-size:14pt; font-style:italic; margin-top:4px;"><i>หมายเหตุ.</i> <i>N</i> = 30; ค่าประสิทธิภาพของชุดกิจกรรมเท่ากับ 86.44/85.67 ซึ่งสูงกว่าเกณฑ์มาตรฐาน 85/85 ที่กำหนดไว้</div>`,
    explanation: 'ตารางแสดงการคำนวณ E1 (คะแนนกระบวนการระหว่างเรียน) และ E2 (คะแนนแบบทดสอบวัดผลสัมฤทธิ์หลังเรียน) ตามหลักการของ ศ.ดร.ชัยยงค์ พรหมวงศ์',
    writingTemplate: 'จากตารางที่ 4.2 ปรากฏว่า ชุดกิจกรรมการเรียนรู้แบบสืบเสาะหาความรู้ (5E) ร่วมกับสื่อดิจิทัล มีประสิทธิภาพของกระบวนการ (E1) เท่ากับ 86.44 และประสิทธิภาพของผลลัพธ์ (E2) เท่ากับ 85.67 แสดงว่าชุดกิจกรรมมีประสิทธิภาพเท่ากับ 86.44/85.67 ซึ่งสูงกว่าเกณฑ์มาตรฐาน 85/85 ที่ตั้งไว้'
  },
  {
    id: 'apa-paired-t',
    title: 'ตารางเปรียบเทียบก่อนเรียน-หลังเรียน (Paired Samples t-test)',
    chapterNumber: 4,
    statType: 'การทดสอบสมมติฐานพัฒนาการ (Paired t-test & Cohen’s d)',
    htmlContent: `<table style="width:100%; border-collapse:collapse; font-family:'TH Sarabun PSK', serif; font-size:16pt; line-height:1.2;">
  <caption style="text-align:left; font-weight:bold; margin-bottom:6px;">ตารางที่ 4.3 การเปรียบเทียบคะแนนผลสัมฤทธิ์ทางการเรียนก่อนเรียนและหลังเรียนของนักเรียนชั้น ป.6 (N = 30)</caption>
  <thead>
    <tr style="border-top: 2px solid #000; border-bottom: 1.5px solid #000;">
      <th style="text-align:left; padding:6px 10px;">การทดสอบ</th>
      <th style="text-align:center; padding:6px 10px;"><i>M</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>SD</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>Mean Diff.</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>t</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>df</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>p</i></th>
      <th style="text-align:center; padding:6px 10px;">Cohen’s <i>d</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:6px 10px;">ก่อนเรียน (Pre-test)</td>
      <td style="text-align:center; padding:6px 10px;">13.80</td>
      <td style="text-align:center; padding:6px 10px;">1.67</td>
      <td style="text-align:center; padding:6px 10px;" rowspan="2">+11.90</td>
      <td style="text-align:center; padding:6px 10px;" rowspan="2">24.30***</td>
      <td style="text-align:center; padding:6px 10px;" rowspan="2">29</td>
      <td style="text-align:center; padding:6px 10px;" rowspan="2">&lt; .001</td>
      <td style="text-align:center; padding:6px 10px;" rowspan="2">4.44</td>
    </tr>
    <tr style="border-bottom: 2px solid #000;">
      <td style="padding:6px 10px;">หลังเรียน (Post-test)</td>
      <td style="text-align:center; padding:6px 10px;">25.70</td>
      <td style="text-align:center; padding:6px 10px;">2.45</td>
    </tr>
  </tbody>
</table>
<div style="font-family:'TH Sarabun PSK', serif; font-size:14pt; font-style:italic; margin-top:4px;"><i>หมายเหตุ.</i> คะแนนเต็ม 30 คะแนน; *** <i>p</i> &lt; .001 (One-tailed test); Cohen’s <i>d</i> = ขนาดอิทธิพล</div>`,
    explanation: 'ตารางแสดงผลต่างคะแนนก่อน-หลังเรียน พร้อมค่าสถิติ t, องศาอิสระ (df), ค่า p-value และขนาดอิทธิพล Cohen’s d เพื่อยืนยันพัฒนาการของผู้เรียน',
    writingTemplate: 'จากตารางที่ 4.3 พบว่า นักเรียนมีคะแนนผลสัมฤทธิ์ทางการเรียนหลังเรียน (M = 25.70, SD = 2.45) สูงกว่าก่อนเรียน (M = 13.80, SD = 1.67) อย่างมีนัยสำคัญทางสถิติที่ระดับ .001 (t(29) = 24.30, p < .001) โดยมีขนาดอิทธิพลเท่ากับ 4.44 ซึ่งจัดอยู่ในระดับสูงมาก'
  },
  {
    id: 'apa-ind-t',
    title: 'ตารางเปรียบเทียบระหว่าง 2 กลุ่มการสอน (Independent Samples t-test)',
    chapterNumber: 4,
    statType: 'การทดสอบ 2 กลุ่มตัวอย่างอิสระ (Student’s t & Levene’s Test)',
    htmlContent: `<table style="width:100%; border-collapse:collapse; font-family:'TH Sarabun PSK', serif; font-size:16pt; line-height:1.2;">
  <caption style="text-align:left; font-weight:bold; margin-bottom:6px;">ตารางที่ 4.4 การเปรียบเทียบคะแนนผลสัมฤทธิ์ทางการเรียนระหว่างกลุ่มที่เรียนด้วย 5E ดิจิทัล กับกลุ่มการสอนปกติ</caption>
  <thead>
    <tr style="border-top: 2px solid #000; border-bottom: 1.5px solid #000;">
      <th style="text-align:left; padding:6px 10px;">กลุ่มการจัดการเรียนรู้</th>
      <th style="text-align:center; padding:6px 10px;"><i>N</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>M</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>SD</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>t</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>df</i></th>
      <th style="text-align:center; padding:6px 10px;"><i>p</i></th>
      <th style="text-align:center; padding:6px 10px;">Cohen’s <i>d</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:6px 10px;">กลุ่มที่เรียนด้วย 5E ร่วมกับสื่อดิจิทัล</td>
      <td style="text-align:center; padding:6px 10px;">15</td>
      <td style="text-align:center; padding:6px 10px;">27.13</td>
      <td style="text-align:center; padding:6px 10px;">1.46</td>
      <td style="text-align:center; padding:6px 10px;" rowspan="2">4.02***</td>
      <td style="text-align:center; padding:6px 10px;" rowspan="2">28</td>
      <td style="text-align:center; padding:6px 10px;" rowspan="2">&lt; .001</td>
      <td style="text-align:center; padding:6px 10px;" rowspan="2">1.47</td>
    </tr>
    <tr style="border-bottom: 2px solid #000;">
      <td style="padding:6px 10px;">กลุ่มที่เรียนด้วยการสอนปกติ</td>
      <td style="text-align:center; padding:6px 10px;">15</td>
      <td style="text-align:center; padding:6px 10px;">24.27</td>
      <td style="text-align:center; padding:6px 10px;">2.31</td>
    </tr>
  </tbody>
</table>
<div style="font-family:'TH Sarabun PSK', serif; font-size:14pt; font-style:italic; margin-top:4px;"><i>หมายเหตุ.</i> การทดสอบความเท่ากันของความแปรปรวน (Levene’s Test) พบ <i>F</i> = 1.86, <i>p</i> = .184 (ความแปรปรวนเท่ากัน); *** <i>p</i> &lt; .001</div>`,
    explanation: 'ตารางเปรียบเทียบผลสัมฤทธิ์ระหว่าง 2 กลุ่มตัวอย่างอิสระ พร้อมรายงานผลการทดสอบความแปรปรวน Levene’s Test ในหมายเหตุใต้ตาราง',
    writingTemplate: 'จากตารางที่ 4.4 ผลการทดสอบความเท่ากันของความแปรปรวนด้วย Levene’s test พบว่าความแปรปรวนของทั้งสองกลุ่มไม่แตกต่างกัน (p = .184) และเมื่อทดสอบด้วย Student’s t-test พบว่ากลุ่มที่เรียนด้วย 5E ร่วมกับสื่อดิจิทัล มีคะแนนเฉลี่ยสูงกว่ากลุ่มที่เรียนด้วยการสอนปกติอย่างมีนัยสำคัญทางสถิติที่ระดับ .001 (t(28) = 4.02, p < .001, d = 1.47)'
  }
];
