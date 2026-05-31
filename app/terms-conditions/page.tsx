"use client";

import { useState } from "react";

const sections = [
  {
    id: "ordering",
    icon: "◈",
    title: "Ordering & Payment",
    color: "#C8A96E",
    clauses: [
      "Customer shall order for the purchase of Product by making a full payment. Before placing the order, it shall be the customer's responsibility to ensure that their property/premises have adequate access for the furniture purchased through the doors, corridors, stairs and corners to ensure proper access to delivery and fitting of the Product prior to placing the Order. No exchange, replacement or refund will be provided in such cases.",
      "Customer needs to check the furniture being purchased matches the décor of his/her house and no request for return/replacement shall be entertained on this ground.",
      "Helios Home may at its sole option, without any notice, announce seasonal sales or promotional offers. Customer shall not be eligible for any discount or re-billing for Products purchased prior to such announcements.",
      "Customer acknowledges that the discount/price/MRP may vary based on market situations, locations, promotions and seasonal offers.",
      "Products purchased must be collected within 30 days from the date of billing/invoice. Helios Home reserves the right to charge demurrage, cancel the sale and resell the Product if delivery is delayed due to any act attributable to the customer.",
      "Upon written request, Helios Home may allow storage of Products at its warehouse, subject to additional warehousing charges. Such storage shall not exceed 30 days from the date of billing/invoice.",
      "Prices and discounts displayed on the website shall be final. Any price or offer quoted elsewhere shall not be applicable.",
      "Products covered under warranty shall be governed by the Warranty Terms, upon production of original Invoice copy.",
      "Orders once confirmed shall not be cancelled or altered under any circumstances except as provided herein.",
    ],
  },
  {
    id: "delivery",
    icon: "◎",
    title: "Delivery",
    color: "#8BA7C7",
    clauses: [
      "Where the purchase value is less than Rs. 999/- and/or the delivery location is beyond City/Town Municipality jurisdiction, customer shall pay the transportation and delivery charges as specified by Helios Home.",
      "Delivery shall mean delivery of the Product at ground level up to the main entrance of the customer address provided in the invoice.",
      "After successful order completion, the delivery date shall be communicated via SMS to the registered mobile number on the invoice.",
      "Customer acknowledges that there shall not be any tele-communication regarding delivery from Helios Home.",
      "To re-schedule delivery date or change delivery location, customer must intimate Helios Home at least three business days prior to the communicated delivery date. Delivery address cannot be changed later during delivery.",
      "Acceptance of re-schedule requests shall be at the sole discretion of Helios Home, subject to availability of delivery slots and distance.",
      "Customer shall provide a government-issued identity proof copy and invoice at the time of taking delivery.",
      "Helios Home delivery team shall not dismantle, move or modify any existing furniture at the customer's location.",
      "Customer shall ensure no hindrances from any person/authority at the time of delivery and allow access to service elevators or other facilities.",
      "Customer must inform Helios Home about non-availability of elevator or any factors (society/apartment rules, bye-laws) that may hinder delivery, and agrees to pay additional delivery/labour charges determined by Helios Home.",
      "While all care shall be taken in transporting Products, Helios Home does not take responsibility for any damage to the building or structure at the delivery location.",
      "Delivery is subject to force majeure events, normal transit wear and tear, and acts beyond Helios Home's control including traffic and vehicle breakdown. Helios Home shall inform and re-schedule as per slot availability.",
      "As per Helios Home's Policy, customer shall not reward or gratify the delivery and assembling team.",
      "Customer must ensure the mobile number on the invoice is reachable for the delivery team.",
      "Customer shall be available on the scheduled delivery date. Subsequent delivery after a missed delivery shall be on a chargeable basis.",
      "Customer must inspect the product during fitment and notify if damaged. Damage reported after successful fitment shall be treated as damage during use and handled per warranty terms.",
    ],
  },
  {
    id: "assembling",
    icon: "◇",
    title: "Assembling",
    color: "#A0C4A0",
    clauses: [
      "Assembling will be completed by Helios Home subject to available fitment schedule. Upon delivery, customer shall inspect Products for manufacturing defects and acknowledge receipt. Helios Home shall not be responsible for damage post-acknowledgement.",
      "Post assembling, the Helios Home team may assist in clearing debris such as cartons and packaging material.",
      "Before Helios Home team departs, customer shall check for defects or damage and provide acknowledgement to Helios Home.",
    ],
  },
  {
    id: "exchange",
    icon: "◉",
    title: "Exchange & Refund",
    color: "#C4A0A0",
    clauses: [
      "Helios Home may exchange Products returned within 7 days of purchase, provided the original invoice is submitted and items are in original packing, unused and saleable condition. Unpacked and/or installed/affixed Products shall not be exchanged. If exchange is agreed, a credit note shall be issued deducting delivery charges.",
      "Payment shall not be refunded except where Helios Home is unable to repair or replace defective Products.",
      "Refunds shall be made through cheque, NEFT or credit note equivalent to the invoiced value, after deducting all offer values.",
      "All refunds shall be reversed to the original mode of payment and issued within 5–7 working days from confirmation, or as a credit note.",
    ],
  },
  {
    id: "warranty",
    icon: "◆",
    title: "Warranty Terms",
    color: "#B8A0C4",
    clauses: [
      "Warranty covers Products for one year from the date of invoice, and ONLY against manufacturing defects as assessed by Helios Home.",
      "Helios Home reserves the right to inspect and determine manufacturing defects. If affirmed, Helios Home may repair or replace defective Products or parts at its sole discretion, subject to spare availability.",
      "Customer acknowledges that repair or rectification requires considerable time due to spare part availability and technician schedules. Timelines shall be communicated and agreed upon before proceeding.",
      "The original copy of the invoice must be produced to avail warranty.",
      "Glass items, display products (last piece), and Products purchased 'as is where is' are not covered under warranty and shall not be returned, exchanged or replaced if broken, stained, used or altered.",
      "Warranty does not apply for: Chrome-plated furniture parts; Products with natural tendency of deterioration (e.g., foam or polyfil).",
      "The decision of Helios Home regarding the nature of defect and warranty applicability shall be final and binding.",
      "Warranty does not apply if damage is caused by: Natural wear and tear; Improper assembling by customer; Inadequate maintenance; Wrong handling; Movement from initial assembly location; Glass or product breakage; Pest, termite or fungus infestation; Product modifications; Misuse or negligence; Humid conditions or direct sunlight exposure; Rusting or fading due to non-maintenance; Assembly by non-Helios Home team; Electrical fittings.",
      "HELIOS HOME SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL LOSS OR DAMAGES. HELIOS HOME'S MAXIMUM LIABILITY SHALL BE LIMITED TO THE COST OF THE PRODUCT.",
      "Customer shall not rely on verbal representations made by any employee or agent of Helios Home relating to Products or warranty.",
      "Except as specified herein, Helios Home does not make any other express or implied warranties of merchantability and fitness for a particular purpose.",
      "Customer shall use Products per user/care instructions provided by Helios Home. Helios Home is not responsible for any loss, damage, or personal injury due to usage or assembling of the Products.",
      "Repairs are subject to spare part availability. Colour, texture and appearance of spare parts may vary from the original Product model.",
      "Upon completion of warranty, Helios Home is not liable for or obligated to undertake repairs or rectification of Products.",
    ],
  },
  {
    id: "instructions",
    icon: "◐",
    title: "General Instructions",
    color: "#C4B8A0",
    clauses: [
      "Customer or an authorised representative must be available during delivery and assembling.",
      "Customer shall ensure the safety of their members during assembling. Helios Home shall not be responsible for any mishap or damage during furniture assembling.",
      "Customer acknowledges that assembling may create noise and disturbance. Assembling requires power supply (for drills and equipment) which shall be provided by the customer at their own cost.",
      "Customer shall keep the place of assembling clear from all obstacles and ensure belongings are safeguarded.",
      "Customer shall not allow the Helios Home delivery team within premises except for delivery or repair of Products.",
      "Customer acknowledges that Products may be unpacked for random quality checks prior to delivery. A pre-checked certification shall be pasted on repacked Products.",
      "Customers are solely responsible for safeguarding their valuables and belongings at the time of delivery/fitment. Helios Home is not responsible for any loss of customer valuables.",
    ],
  },
];

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedClauses, setExpandedClauses] = useState({});

  const toggleSection = (id:any) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const toggleClause = (sectionId:any, idx:any) => {
    const key = `${sectionId}-${idx}`;
    setExpandedClauses((prev:any) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0F0E0C",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#E8E0D0",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@200;300;400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .tc-hero {
          position: relative;
          padding: 80px 40px 60px;
          border-bottom: 1px solid rgba(200,169,110,0.2);
          overflow: hidden;
        }
        .tc-hero::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .tc-label {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.35em;
          color: #C8A96E;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .tc-label::after {
          content: '';
          flex: 1;
          max-width: 80px;
          height: 1px;
          background: rgba(200,169,110,0.4);
        }
        .tc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #F0E8D8;
          margin-bottom: 20px;
        }
        .tc-title em {
          font-style: italic;
          color: #C8A96E;
        }
        .tc-subtitle {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 12px;
          font-weight: 200;
          letter-spacing: 0.15em;
          color: rgba(232,224,208,0.45);
          max-width: 480px;
          line-height: 1.8;
        }

        .tc-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 48px 40px 80px;
        }

        .tc-section {
          margin-bottom: 6px;
          border: 1px solid rgba(232,224,208,0.07);
          border-radius: 4px;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .tc-section.open {
          border-color: rgba(232,224,208,0.15);
        }

        .tc-section-header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 28px;
          cursor: pointer;
          background: rgba(255,255,255,0.02);
          transition: background 0.2s ease;
          user-select: none;
        }
        .tc-section-header:hover {
          background: rgba(255,255,255,0.04);
        }

        .tc-section-icon {
          font-size: 16px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .open .tc-section-icon {
          transform: rotate(45deg);
        }

        .tc-section-title {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          flex: 1;
          color: #E8E0D0;
        }

        .tc-section-count {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-style: italic;
          color: rgba(232,224,208,0.3);
          flex-shrink: 0;
        }

        .tc-section-chevron {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 18px;
          color: rgba(232,224,208,0.25);
          flex-shrink: 0;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .open .tc-section-chevron {
          transform: rotate(180deg);
          color: rgba(232,224,208,0.5);
        }

        .tc-section-body {
          display: none;
          padding: 0 28px 24px;
          border-top: 1px solid rgba(232,224,208,0.06);
        }
        .open .tc-section-body {
          display: block;
          animation: fadeSlide 0.28s ease forwards;
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tc-clause {
          display: flex;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(232,224,208,0.05);
          cursor: pointer;
          transition: background 0.15s;
        }
        .tc-clause:last-child { border-bottom: none; }
        .tc-clause:hover .tc-clause-num {
          opacity: 1;
        }

        .tc-clause-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(232,224,208,0.3);
          flex-shrink: 0;
          width: 20px;
          margin-top: 3px;
          transition: opacity 0.2s;
          text-align: right;
          opacity: 0.6;
        }

        .tc-clause-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.72;
          color: rgba(232,224,208,0.72);
          flex: 1;
          letter-spacing: 0.01em;
        }

        .tc-footer {
          border-top: 1px solid rgba(200,169,110,0.15);
          padding: 40px 40px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .tc-footer-line {
          flex: 1;
          height: 1px;
          background: rgba(232,224,208,0.06);
        }
        .tc-footer-text {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 10px;
          font-weight: 200;
          letter-spacing: 0.3em;
          color: rgba(232,224,208,0.2);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .tc-toc {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 28px 40px;
          border-bottom: 1px solid rgba(232,224,208,0.06);
        }
        .tc-toc-pill {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 6px 14px;
          border: 1px solid rgba(232,224,208,0.12);
          border-radius: 2px;
          color: rgba(232,224,208,0.4);
          cursor: pointer;
          transition: all 0.2s ease;
          background: transparent;
        }
        .tc-toc-pill:hover, .tc-toc-pill.active {
          border-color: #C8A96E;
          color: #C8A96E;
          background: rgba(200,169,110,0.05);
        }

        @media (max-width: 600px) {
          .tc-hero { padding: 48px 20px 40px; }
          .tc-body { padding: 32px 20px 60px; }
          .tc-toc { padding: 20px; }
          .tc-footer { padding: 28px 20px; }
          .tc-section-header { padding: 16px 20px; }
          .tc-section-body { padding: 0 20px 20px; }
        }
      `}</style>

      <div className="tc-hero">
        <div className="tc-label">Helios Home · Legal Documentation</div>
        <h1 className="tc-title">
          Terms &amp; <em>Conditions</em>
        </h1>
        <p className="tc-subtitle">
          These terms and conditions govern the purchase, delivery, assembly,
          exchange, and warranty of all Helios Home–branded products. Please
          read each section carefully before placing your order.
        </p>
      </div>

      <div className="tc-toc">
        {sections.map((s) => (
          <button
            key={s.id}
            className={`tc-toc-pill${activeSection === s.id ? " active" : ""}`}
            onClick={() => {
              toggleSection(s.id);
              setTimeout(() => {
                document.getElementById(`section-${s.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 80);
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="tc-body">
        {sections.map((section) => {
          const isOpen = activeSection === section.id;
          return (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className={`tc-section${isOpen ? " open" : ""}`}
            >
              <div
                className="tc-section-header"
                onClick={() => toggleSection(section.id)}
                style={isOpen ? { borderLeft: `3px solid ${section.color}` } : { borderLeft: "3px solid transparent" }}
              >
                <span className="tc-section-icon" style={{ color: section.color }}>
                  {section.icon}
                </span>
                <span className="tc-section-title">{section.title}</span>
                <span className="tc-section-count">{section.clauses.length} clauses</span>
                <span className="tc-section-chevron">⌄</span>
              </div>

              <div className="tc-section-body">
                {section.clauses.map((clause, idx) => (
                  <div key={idx} className="tc-clause">
                    <span className="tc-clause-num">{idx + 1}.</span>
                    <p className="tc-clause-text">{clause}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermsConditions;