# Calculators Blueprint

## 1. Core Architecture & Standards
To ensure consistency across all subdomains and mitigate liability, every calculator must follow this strict structural blueprint.

### 1.1 Common Features
- **Header Section:** Standardized title, sub-title, and a category badge (e.g., "ESTIMATOR", "PLANNER").
- **Input Module:** Responsive grid layout (1-column on mobile, 2-column on desktop). All inputs must have clear labels, expected units (e.g., $, Head, Acres), and sensible default values.
- **Results Display:** A highly visible, distinct results panel (e.g., colored background with large typography) that calculates in real-time or upon explicit action.
- **Liability Disclaimer:** The `<CalculatorDisclaimer />` component MUST be affixed immediately below the final output of every calculator.
- **Mobile-First Design:** Touch targets must be at least 44px, and layouts must flow naturally without horizontal scrolling.

### 1.2 Required Component Hierarchy
1. Page Wrapper (`max-w-4xl`)
2. Standard Header
3. Input Card
4. Output Card / Result Panel
5. `<CalculatorDisclaimer />`

---

## 2. Calculator Inventory & Specifications

### Template: [Calculator Name]
- **Purpose:** [What does this tool calculate?]
- **Primary Inputs:**
  - Input 1 (Unit)
  - Input 2 (Unit)
- **Primary Outputs:**
  - Output 1 (Unit)
- **Tool-Specific Disclaimer Notice:** [Optional extra legal/regulatory notice]

---

### Calculator 1: Beef Cost of Production Calculator
- **Category:** Cost of Production
- **Outcome:** Cost per head
- **Purpose:** Estimates total and per-head costs for cow-calf or backgrounding operations.
- **Primary Inputs:**
  - Herd size (number of cows)
  - Calf crop percentage / weaning rate
  - Feed costs (hay, grain, supplements, silage)
  - Pasture/land lease costs
  - Veterinary & health expenses
  - Labor costs (owned & hired)
  - Equipment & depreciation
  - Breeding costs (AI or bull)
  - Death loss percentage
  - Interest on operating capital
- **Primary Outputs:**
  - Total cost of production
  - Cost per head (cow & calf)
  - Cost per pound of calf produced
  - Variable vs. fixed cost breakdown
- **Tool-Specific Disclaimer Notice:** "Beef market conditions and feed prices change rapidly."

---

### Calculator 2: Feedlot Closeout Calculator
- **Category:** Feedlot Closeout
- **Outcome:** Net return per head
- **Purpose:** Analyzes the final financial performance of a finished pen of cattle at the end of the feeding period.
- **Primary Inputs:**
  - Purchase price & weight (feeder cattle)
  - Days on feed
  - Average daily gain (ADG)
  - Feed conversion ratio
  - Feed cost per ton/bushel
  - Yardage & interest charges
  - Veterinary costs
  - Death loss
  - Sale price ($/cwt) & sale weight
- **Primary Outputs:**
  - Total cost of gain (COG)
  - Net return per head
  - Profit/loss per pen
  - Breakeven sale price
  - Performance summary (ADG, feed efficiency)
- **Tool-Specific Disclaimer Notice:** "Actual closeout figures may vary based on exact animal performance and local basis."

---

### Calculator 3: Break-Even Sale Price Calculator
- **Category:** Break-Even Price
- **Outcome:** Break-even $/cwt
- **Purpose:** Determines the minimum sale price (per hundredweight) needed to cover all rearing and feeding expenses.
- **Primary Inputs:**
  - Purchase cost of feeder cattle
  - All-in feeding & yardage costs
  - Health & veterinary expenses
  - Interest/financing costs
  - Projected sale weight
  - Death loss assumption
- **Primary Outputs:**
  - Break-even price ($/cwt)
  - Minimum required market price to avoid a loss
  - Sensitivity table (what-if on feed prices or ADG)
- **Tool-Specific Disclaimer Notice:** "Future market prices are not guaranteed."

---

### Calculator 4: Profit per Head Estimator
- **Category:** Profitability
- **Outcome:** Expected margin
- **Purpose:** Quickly estimates potential profit margins by comparing current market price against estimated production costs.
- **Primary Inputs:**
  - Current market price ($/cwt or $/head)
  - Estimated total cost per head
  - Expected sale weight
  - Optional: trucking/marketing fees
- **Primary Outputs:**
  - Gross profit per head
  - Net margin per head
  - Expected margin (positive or negative)
  - Quick go/no-go decision indicator
- **Tool-Specific Disclaimer Notice:** "Estimates are for planning purposes and do not guarantee future profitability."

---

### Calculator 5: Cattle Feed Calculator
- **Category:** Feed Planning
- **Outcome:** Total feed cost
- **Purpose:** Formulates basic rations and estimates total feed requirements and costs for a cattle operation.
- **Primary Inputs:**
  - Number of cattle & average weight
  - Target daily gain
  - Feed ingredients (hay, corn, distillers grains, silage, etc.)
  - Cost per unit of each feed
  - Feeding period length
  - Dry matter percentages
- **Primary Outputs:**
  - Daily ration formulation (lbs/head/day)
  - Total feed required (tons)
  - Total feed cost for the period
  - Cost per pound of gain
  - Ration nutrient summary (energy, protein)
- **Tool-Specific Disclaimer Notice:** "Always consult a qualified nutritionist for exact rationing."

---

### Calculator 6: Pastured Beef Enterprise Planner
- **Category:** Pasture-Raised Beef
- **Outcome:** Enterprise ROI
- **Purpose:** Plans grass-finished beef operations from pasture costs all the way through to direct consumer sales.
- **Primary Inputs:**
  - Pasture acres available & lease/ownership costs
  - Stocking rate & carrying capacity
  - Forage costs and grazing season length
  - Number of animals & production phases (cow-calf, stocker, finishing)
  - Direct marketing price (per pound, cut, or whole/half carcass)
  - Processing & butcher fees
  - Labor & overhead
- **Primary Outputs:**
  - Enterprise ROI (return on investment)
  - Revenue from direct sales
  - Total costs by phase
  - Net profit per acre and per animal
  - 5-year financial projection
- **Tool-Specific Disclaimer Notice:** "Consumer demand and pasture yields can fluctuate wildly."

---

### Calculator 7: Carcass Yield Estimator
- **Category:** Yield and Carcass Planning
- **Outcome:** Retail cuts yield
- **Purpose:** Forecasts hanging weight and retail cut yields based on live animal weight.
- **Primary Inputs:**
  - Live animal weight (lbs)
  - Breed type or body condition score
  - Dressing percentage (typical 58–63% for beef)
  - Cutting yield percentage by primal
  - Fat trim level
- **Primary Outputs:**
  - Estimated hot carcass weight (hanging weight)
  - Retail cut yield by primal (chuck, rib, loin, round, etc.)
  - Total pounds of retail beef
  - Yield percentage breakdown
- **Tool-Specific Disclaimer Notice:** "Actual yields depend heavily on individual animal genetics and processor methods."

---

### Calculator 8: Value of Additional Gain Calculator
- **Category:** Enterprise Analysis
- **Outcome:** Net value of gain
- **Purpose:** Helps producers decide whether feeding cattle to a heavier final weight is economically justified given the additional feed costs incurred.
- **Primary Inputs:**
  - Current weight and current market price
  - Target heavier weight and projected sale price
  - Cost of additional feed per pound of gain
  - Days required for additional gain
  - Interest/carrying costs
- **Primary Outputs:**
  - Revenue gained from additional weight
  - Cost of that additional gain
  - Net value of gain (profit or loss from feeding longer)
  - Break-even cost of gain threshold
  - Go/no-go recommendation on feeding to heavier weights
- **Tool-Specific Disclaimer Notice:** "Additional feeding days carry increased health and market risks."

---

### Summary Table
| Calculator | Best For | Key Decision |
|---|---|---|
| Cost of Production | Cow-calf/backgrounder operators | What does it cost me per calf? |
| Feedlot Closeout | Feedlot managers | Did this pen make money? |
| Break-Even Sale Price | All producers | What price must I receive? |
| Profit per Head | Quick market analysis | Is today's market profitable? |
| Cattle Feed Calculator | Nutritional planning | What will feed cost me? |
| Pastured Beef Planner | Grass-fed/direct marketers | Is my enterprise viable? |
| Carcass Yield Estimator | Direct marketers & processors | How much beef will I get? |
| Value of Additional Gain | Feedlot/finishing decisions | Should I keep feeding longer? |

These tools collectively cover the full beef production cycle — from cow-calf through finishing, processing, and direct marketing — making the platform a comprehensive planning suite for beef producers.

