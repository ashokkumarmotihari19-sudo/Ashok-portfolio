import jsPDF from 'jspdf';
import { WORK_EXPERIENCE, EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const downloadResumePdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = 16;

  // Header Background Accent Bar
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 28, 'F');

  // Name & Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('ASHOK KUMAR', margin, 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(251, 191, 36); // amber-400
  doc.text('BANKING & FINANCE PROFESSIONAL · DEBT RECOVERY & LENDING SPECIALIST', margin, 18);

  doc.setFontSize(8);
  doc.setTextColor(203, 213, 225); // slate-300
  doc.text(`Mobile: ${PERSONAL_INFO.phone}  |  Email: ${PERSONAL_INFO.email}  |  Motihari, Bihar - 845401`, margin, 24);

  y = 35;

  const checkPageBreak = (requiredSpace: number) => {
    if (y + requiredSpace > 280) {
      doc.addPage();
      y = 16;
    }
  };

  // Section: Professional Summary
  doc.setDrawColor(15, 23, 42);
  doc.setFillColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('PROFESSIONAL SUMMARY', margin, y);
  y += 1.5;
  doc.setLineWidth(0.4);
  doc.line(margin, y, margin + contentWidth, y);
  y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85); // slate-700
  const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 3.8 + 3;

  // Section: Core Competencies
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('CORE COMPETENCIES', margin, y);
  y += 1.5;
  doc.line(margin, y, margin + contentWidth, y);
  y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(51, 65, 85);

  const skillsCol1 = [
    '• Retail & MSME Lending',
    '• Collections & Recovery (0–90 Bucket)',
    '• Debt Management & Restructuring',
    '• Credit Risk Awareness',
  ];
  const skillsCol2 = [
    '• Relationship Management',
    '• Business Development & Sourcing',
    '• Team Handling & Mentoring',
    '• Accounting & MIS Reporting',
  ];
  const skillsCol3 = [
    '• Computer Operations & CRM',
    '• Negotiation & Dispute Settlement',
    '• Feet On Street (FOS) Collection',
    '• RBI Scale-Based Regulation Compliance',
  ];

  const colWidth = contentWidth / 3;
  for (let i = 0; i < 4; i++) {
    doc.text(skillsCol1[i], margin, y + i * 3.8);
    doc.text(skillsCol2[i], margin + colWidth, y + i * 3.8);
    doc.text(skillsCol3[i], margin + colWidth * 2, y + i * 3.8);
  }
  y += 4 * 3.8 + 4;

  // Section: Professional Experience
  checkPageBreak(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('PROFESSIONAL EXPERIENCE', margin, y);
  y += 1.5;
  doc.line(margin, y, margin + contentWidth, y);
  y += 4.5;

  WORK_EXPERIENCE.forEach((exp) => {
    checkPageBreak(24);

    // Role & Dates
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139); // slate-500
    const periodText = `${exp.period}`;
    const periodWidth = doc.getTextWidth(periodText);
    doc.text(periodText, margin + contentWidth - periodWidth, y);
    y += 3.8;

    // Company & Location
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    doc.text(`${exp.companyName} · ${exp.division} · ${exp.location}`, margin, y);
    y += 3.6;

    // Bullets
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);

    exp.bullets.forEach((bullet) => {
      checkPageBreak(10);
      const bulletLines = doc.splitTextToSize(`• ${bullet}`, contentWidth - 4);
      doc.text(bulletLines, margin + 2, y);
      y += bulletLines.length * 3.4;
    });

    y += 2.5;
  });

  // Section: Education
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('EDUCATION', margin, y);
  y += 1.5;
  doc.line(margin, y, margin + contentWidth, y);
  y += 4.5;

  EDUCATION_DATA.forEach((edu) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${edu.degree} (${edu.year})`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`— ${edu.institution} [${edu.division}]`, margin + 45, y);
    y += 4;
  });

  // Section: Languages & Personal
  checkPageBreak(18);
  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('LANGUAGES:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Hindi, English', margin + 25, y);
  y += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('PERSONAL:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Date of Birth: 05/12/1988  |  Nationality: Indian  |  Permanent Address: Ambika Nagar, Laxman Chowk, Motihari, Bihar - 845401', margin + 25, y);

  // Save the PDF
  doc.save('Ashok_Kumar_Banking_Finance_CV.pdf');
};
