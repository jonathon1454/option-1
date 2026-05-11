# Design Handoff: Support Tickets Dashboard

## 📋 Overview
Dashboard showing open vs closed support tickets with metric cards and bar chart visualization.

## 🎨 Figma File
**Live Design:** https://www.figma.com/design/tKc3BJjBRxF81a27H5Wql6

### Pages in Figma:
- **Page 1**: Final dashboard design
- **📐 Design Specs**: Implementation guide with colors, typography, and spacing

## 🖼️ Design Assets
- `dashboard-final.png` - Complete dashboard screenshot
- `dashboard-preview.png` - Metric cards preview

## 🛠️ Implementation Requirements

### Components to Build:
1. **Dashboard Container** - Main wrapper with padding and background
2. **Metric Card** - Reusable card component for displaying ticket counts
3. **Bar Chart** - Horizontal bar visualization with labels and values

### Color Palette:
| Color | Hex | Usage |
|-------|-----|-------|
| Teal | `#1487B1` | Open tickets |
| Green | `#059E56` | Closed tickets |
| Gray-50 | `#FAFAFA` | Page background |
| White | `#FFFFFF` | Card backgrounds |
| Gray-300 | `#E0E0E0` | Borders |
| Gray-900 | `#212121` | Primary text |
| Gray-600 | `#737373` | Secondary text |

### Typography:
- **Font Family:** Inter
- **Title:** Semi Bold, 32px
- **Subtitle:** Regular, 16px
- **Metric Values:** Bold, 48px
- **Labels:** Regular, 14px

### Spacing:
- Card padding: `24px`
- Section gap: `32px`
- Card gap: `24px`
- Inner spacing: `8px`

## 📊 Data Structure

```typescript
interface DashboardData {
  openTickets: number;    // Example: 127
  closedTickets: number;  // Example: 342
  total: number;          // Example: 469
}
```

## 🔄 Recommended Workflow

### For Engineers:

1. **Inspect in Figma**
   - Use Figma's Dev Mode to inspect spacing, colors, and dimensions
   - Export icons/assets if needed

2. **Set up component structure**
   ```
   DashboardPage
   ├── Header
   │   ├── Title
   │   └── Subtitle
   ├── MetricsRow
   │   ├── MetricCard (Open)
   │   └── MetricCard (Closed)
   └── ChartSection
       ├── ChartTitle
       └── BarChart
           ├── Bar (Open)
           └── Bar (Closed)
   ```

3. **Integrate with API**
   - Fetch ticket data from backend
   - Calculate percentages for bar widths
   - Update metrics dynamically

4. **Responsive Behavior**
   - Desktop: 1440px max-width
   - Tablet: Stack cards vertically
   - Mobile: Full-width cards and bars

## 🎯 Acceptance Criteria

- [ ] Dashboard matches Figma design visually
- [ ] Colors match Zendesk Garden palette
- [ ] Typography uses Inter font
- [ ] Spacing matches design specs
- [ ] Metric cards display live data
- [ ] Bar chart shows proportional comparison
- [ ] Responsive on mobile/tablet/desktop
- [ ] Accessible (proper ARIA labels, keyboard navigation)

## 💬 Design Questions?

Contact: jonathon.newby@zendesk.com

For design changes or iterations, update the Figma file and notify the team.

## 🔗 Related Resources

- [Zendesk Garden Documentation](https://garden.zendesk.com/)
- [Garden React Components](https://garden.zendesk.com/components)
- GitHub Repo: https://github.com/jonathon1454/option-1
