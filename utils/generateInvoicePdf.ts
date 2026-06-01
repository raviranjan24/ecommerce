import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
const BRAND_DARK   = [15,  23,  42]  as [number,number,number]; // slate-900
const BRAND_MID    = [30,  64, 175]  as [number,number,number]; // blue-700
const BRAND_LIGHT  = [219,234,254]  as [number,number,number]; // blue-100
const ACCENT       = [99, 102, 241]  as [number,number,number]; // indigo-500
const TEXT_MUTED   = [100,116,139]  as [number,number,number]; // slate-500
const BG_LIGHT     = [248,250,252]  as [number,number,number]; // slate-50
const WHITE        = [255,255,255]  as [number,number,number];
const BORDER       = [226,232,240]  as [number,number,number]; // slate-200
const hex = (rgb: [number,number,number]) => rgb;

function setFill(doc: jsPDF, rgb: [number,number,number]) {
  doc.setFillColor(rgb[0], rgb[1], rgb[2]);
}
function setDraw(doc: jsPDF, rgb: [number,number,number]) {
  doc.setDrawColor(rgb[0], rgb[1], rgb[2]);
}
function setTextColor(doc: jsPDF, rgb: [number,number,number]) {
  doc.setTextColor(rgb[0], rgb[1], rgb[2]);
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export const generateInvoicePdf = async (order: any, invoice: any) => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const PAGE_W = 210;
  const PAGE_H = 297;
  const MARGIN = 14;
  const COL2   = PAGE_W / 2 + 2;

  // ── 1. TOP ACCENT STRIP ─────────────────────────────────────────────────────
  setFill(doc, BRAND_MID);
  doc.rect(0, 0, PAGE_W, 2, "F");

  // ── 2. HEADER BAND — white bg so logo is always clearly visible ─────────────
  setFill(doc, WHITE);
  doc.rect(0, 2, PAGE_W, 36, "F");

  // Thin bottom border under header
  setDraw(doc, BORDER);
  doc.setLineWidth(0.4);
  doc.line(0, 38, PAGE_W, 38);

  // Logo renders clearly on white background
  try {
    const img = new Image();
    img.src = "/images/logo.png";
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
    doc.addImage(img, "PNG", MARGIN, 7, 44, 22);
  } catch {
    setTextColor(doc, BRAND_DARK);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("STORE", MARGIN, 24);
  }

  // "TAX INVOICE" — dark text on white header
  setTextColor(doc, BRAND_DARK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("TAX INVOICE", PAGE_W - MARGIN, 22, { align: "right" });

  // Blue underline accent beneath TAX INVOICE
  setDraw(doc, BRAND_MID);
  doc.setLineWidth(0.8);
  doc.line(PAGE_W - MARGIN - 58, 25, PAGE_W - MARGIN, 25);

  // ── 3. META STRIP (light bg) ────────────────────────────────────────────────
  setFill(doc, BG_LIGHT);
  doc.rect(0, 38, PAGE_W, 22, "F");

  const metaItems = [
    ["Invoice No",     invoice.invoiceNo],
    ["Invoice Date",   new Date(invoice.invoiceDate).toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" })],
    ["Order No",       order.orderNumber],
    ["Payment",        order.paymentMethod],
    ["Status",         order.status],
  ];

  const colW = (PAGE_W - MARGIN * 2) / metaItems.length;
  metaItems.forEach(([label, value], i) => {
    const x = MARGIN + i * colW;
    setTextColor(doc, TEXT_MUTED);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.text(label.toUpperCase(), x, 46);

    setTextColor(doc, BRAND_DARK);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(String(value), x, 53);
  });

  // ── 4. ADDRESS CARDS ────────────────────────────────────────────────────────
  const CARD_Y  = 68;
  const CARD_H  = 52;
  const CARD_W  = (PAGE_W - MARGIN * 2 - 6) / 2;

  // Seller card
  setFill(doc, BG_LIGHT);
  setDraw(doc, BORDER);
  doc.setLineWidth(0.3);
  doc.roundedRect(MARGIN, CARD_Y, CARD_W, CARD_H, 2, 2, "FD");

  // Card header bar
  setFill(doc, BRAND_MID);
  doc.roundedRect(MARGIN, CARD_Y, CARD_W, 8, 2, 2, "F");
  doc.rect(MARGIN, CARD_Y + 4, CARD_W, 4, "F"); // square bottom corners

  setTextColor(doc, WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("SOLD BY", MARGIN + 4, CARD_Y + 5.5);

  setTextColor(doc, BRAND_DARK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(invoice.storeInfo.name, MARGIN + 4, CARD_Y + 15);

  doc.setFont("helvetica", "normal");
  setTextColor(doc, TEXT_MUTED);
  doc.setFontSize(8);
  const sellerLines = doc.splitTextToSize(invoice.storeInfo.address, CARD_W - 8);
  doc.text(sellerLines, MARGIN + 4, CARD_Y + 22);
  doc.text(invoice.storeInfo.state,         MARGIN + 4, CARD_Y + 29);
  doc.text(`Ph: ${invoice.storeInfo.phone}`, MARGIN + 4, CARD_Y + 36);

  // Shipping card
  const CARD2_X = MARGIN + CARD_W + 6;
  setFill(doc, BG_LIGHT);
  setDraw(doc, BORDER);
  doc.roundedRect(CARD2_X, CARD_Y, CARD_W, CARD_H, 2, 2, "FD");

  setFill(doc, ACCENT);
  doc.roundedRect(CARD2_X, CARD_Y, CARD_W, 8, 2, 2, "F");
  doc.rect(CARD2_X, CARD_Y + 4, CARD_W, 4, "F");

  setTextColor(doc, WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("SHIP TO", CARD2_X + 4, CARD_Y + 5.5);

  setTextColor(doc, BRAND_DARK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(order.shippingAddress?.name || "", CARD2_X + 4, CARD_Y + 15);

  doc.setFont("helvetica", "normal");
  setTextColor(doc, TEXT_MUTED);
  doc.setFontSize(8);
  const addrLines = doc.splitTextToSize(order.shippingAddress?.address || "", CARD_W - 8);
  doc.text(addrLines, CARD2_X + 4, CARD_Y + 22);
  const cityState = `${order.shippingAddress?.city || ""}, ${order.shippingAddress?.state || ""}`;
  doc.text(cityState, CARD2_X + 4, CARD_Y + 29);
  doc.text(`${order.shippingAddress?.country || ""} - ${order.shippingAddress?.pincode || ""}`, CARD2_X + 4, CARD_Y + 35);
  doc.text(`Ph: ${order.shippingAddress?.phone || ""}`, CARD2_X + 4, CARD_Y + 41);
  const emailText = doc.splitTextToSize(`Email: ${order.shippingAddress?.email || ""}`, CARD_W - 8);
  doc.text(emailText, CARD2_X + 4, CARD_Y + 47);

  // ── 5. SECTION DIVIDER ──────────────────────────────────────────────────────
  const TABLE_START = CARD_Y + CARD_H + 8;

  setTextColor(doc, BRAND_MID);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("ORDER ITEMS", MARGIN, TABLE_START - 2);

  setDraw(doc, BRAND_MID);
  doc.setLineWidth(0.5);
  doc.line(MARGIN + 32, TABLE_START - 3, PAGE_W - MARGIN, TABLE_START - 3);

  // ── 6. ITEMS TABLE ──────────────────────────────────────────────────────────
  autoTable(doc, {
    startY: TABLE_START,
    head: [["#", "Product", "Size", "Qty", "Unit Rate", "Amount"]],
    body: order.items.map((item: any, i: number) => [
      i + 1,
      item?.name,
      item.size,
      item.quantity,
      `Rs. ${Number(item.price).toFixed(2)}`,
      `Rs. ${(item.quantity * item.price).toFixed(2)}`,
    ]),
    headStyles: {
      fillColor: BRAND_DARK,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 9,
      cellPadding: 4,
    },
    bodyStyles: {
      fontSize: 8.5,
      cellPadding: 3.5,
      textColor: hex(BRAND_DARK),
    },
    alternateRowStyles: {
      fillColor: BG_LIGHT,
    },
    columnStyles: {
      0: { cellWidth: 10, halign: "center" },
      3: { halign: "center" },
      4: { halign: "right" },
      5: { halign: "right", fontStyle: "bold" },
    },
    tableLineColor: BORDER,
    tableLineWidth: 0.2,
    margin: { left: MARGIN, right: MARGIN },
  });

  const finalY = (doc as any).lastAutoTable.finalY + 6;

  // ── 7. TOTALS BOX ───────────────────────────────────────────────────────────
  const TOT_W = 72;
  const TOT_X = PAGE_W - MARGIN - TOT_W;

  setFill(doc, BG_LIGHT);
  setDraw(doc, BORDER);
  doc.setLineWidth(0.3);
  doc.roundedRect(TOT_X, finalY, TOT_W, 36, 2, 2, "FD");

  const drawRow = (label: string, value: string, y: number, bold = false) => {
    setTextColor(doc, TEXT_MUTED);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(8.5);
    doc.text(label, TOT_X + 4, y);
    setTextColor(doc, BRAND_DARK);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.text(value, TOT_X + TOT_W - 4, y, { align: "right" });
  };

  drawRow("Subtotal",  `Rs. ${invoice.pricing.subTotal}`,                finalY + 8);
  drawRow("Shipping",  `Rs. ${order.shippingFee}`,                       finalY + 16);

  // Grand total row with accent bg
  setFill(doc, BRAND_MID);
  doc.roundedRect(TOT_X, finalY + 22, TOT_W, 14, 2, 2, "F");
  doc.rect(TOT_X, finalY + 22, TOT_W, 7, "F"); // flatten top corners

  setTextColor(doc, WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Grand Total", TOT_X + 4, finalY + 31);
  doc.text(`Rs. ${invoice.pricing.grandTotal}`, TOT_X + TOT_W - 4, finalY + 31, { align: "right" });

  // ── 8. AMOUNT IN WORDS ──────────────────────────────────────────────────────
  setFill(doc, BRAND_LIGHT);
  setDraw(doc, BRAND_MID);
  doc.setLineWidth(0.4);
  doc.roundedRect(MARGIN, finalY, PAGE_W - MARGIN * 2 - TOT_W - 6, 36, 2, 2, "FD");

  setTextColor(doc, TEXT_MUTED);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text("AMOUNT IN WORDS", MARGIN + 4, finalY + 8);

  setTextColor(doc, BRAND_DARK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  const words = doc.splitTextToSize(invoice.amountInWords, PAGE_W - MARGIN * 2 - TOT_W - 18);
  doc.text(words, MARGIN + 4, finalY + 16);

  // ── 9. FOOTER ───────────────────────────────────────────────────────────────
  const FOOT_Y = PAGE_H - 22;

  setFill(doc, BRAND_DARK);
  doc.rect(0, FOOT_Y, PAGE_W, 22, "F");

  // Accent bar at very bottom
  setFill(doc, BRAND_MID);
  doc.rect(0, PAGE_H - 2, PAGE_W, 2, "F");

  setTextColor(doc, [203, 213, 225]); // slate-300
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Thank you for shopping with us! For queries, contact us at support@store.com", MARGIN, FOOT_Y + 9);

  setTextColor(doc, WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Authorized Signatory", PAGE_W - MARGIN, FOOT_Y + 9, { align: "right" });

  setTextColor(doc, [71, 85, 105]); // slate-600
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text("This is a computer-generated invoice and does not require a physical signature.", MARGIN, FOOT_Y + 16);

  // ── SAVE ────────────────────────────────────────────────────────────────────
  doc.save(`${invoice.invoiceNo}.pdf`);
};