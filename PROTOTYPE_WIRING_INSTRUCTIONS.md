# Prototype Interaction Wiring Instructions

## 🎉 What I've Built For You

I've created all the screens and components for your interactive prototype:

### ✅ **Created Screens:**
1. **Main Dashboard** (with new Filter button)
2. **Open Tickets Detail** page with ticket list
3. **Closed Tickets Detail** page with ticket list
4. **Filter Panel** (dropdown with options)
5. **Hover Tooltips** for bar chart (2 variants)

**View in Figma:** https://www.figma.com/design/tKc3BJjBRxF81a27H5Wql6

---

## 🔧 Now You Need to Wire the Interactions

Figma doesn't allow prototype interactions to be added via API, so you'll need to connect them manually. Here's the **5-minute setup**:

---

### **Step 1: Open Prototype Mode**

1. Open your Figma file
2. Click **Prototype** tab (top-right, next to "Design")
3. You'll see all your frames ready to connect

---

### **Step 2: Wire the Metric Cards** (2 interactions)

**Open Tickets Card → Detail Page:**
```
1. Select "Open Tickets Card" metric card
2. Click the + icon on the right edge
3. Drag the blue arrow to "Open Tickets Detail" frame
4. In right panel:
   - Trigger: On click
   - Action: Navigate to
   - Destination: Open Tickets Detail
   - Animation: Move in (from right)
   - Easing: Ease out
```

**Closed Tickets Card → Detail Page:**
```
1. Select "Closed Tickets Card" metric card
2. Click the + icon on the right edge
3. Drag to "Closed Tickets Detail" frame
4. Settings:
   - Trigger: On click
   - Action: Navigate to
   - Destination: Closed Tickets Detail
   - Animation: Move in (from right)
   - Easing: Ease out
```

---

### **Step 3: Wire the Back Buttons** (2 interactions)

**From Open Tickets Detail → Dashboard:**
```
1. Select "Back Button" in "Open Tickets Detail" frame
2. Drag arrow to main "Support Tickets Dashboard" frame
3. Settings:
   - Trigger: On click
   - Action: Navigate to
   - Destination: Support Tickets Dashboard
   - Animation: Move out (to right)
   - Easing: Ease in
```

**From Closed Tickets Detail → Dashboard:**
```
1. Select "Back Button" in "Closed Tickets Detail" frame
2. Drag to main dashboard
3. Same settings as above
```

---

### **Step 4: Wire the Filter Button** (1 interaction)

**Filter Button → Open Panel:**
```
1. Select "Filter Button" on dashboard
2. Drag to "Filter Panel (Open State)" frame
3. Settings:
   - Trigger: On click
   - Action: Open overlay
   - Destination: Filter Panel (Open State)
   - Position: Manual
   - Animation: Dissolve
   - Close when clicking outside: ✓ (checked)
```

---

### **Step 5: Wire the Bar Chart Tooltips** (2 interactions)

**Open Tickets Bar → Tooltip:**
```
1. Select the "Open Bar" in chart section
2. Drag to "Open Tickets Tooltip (Hover State)"
3. Settings:
   - Trigger: While hovering
   - Action: Open overlay
   - Destination: Open Tickets Tooltip
   - Position: Manual (position near the bar)
   - Animation: Dissolve
   - Background: None
```

**Closed Tickets Bar → Tooltip:**
```
1. Select the "Closed Bar" in chart section
2. Drag to "Closed Tickets Tooltip (Hover State)"
3. Same settings as above
```

---

### **Step 6: Set the Starting Frame**

```
1. Select the main "Support Tickets Dashboard" frame
2. In right panel (Prototype tab), find "Flow starting point"
3. Check the box "Set as starting frame"
4. Name the flow: "Dashboard Flow"
```

---

## ▶️ **Step 7: Test Your Prototype**

1. Click the **▶ Play** button (top-right)
2. Test each interaction:
   - ✅ Click metric cards → Goes to detail pages
   - ✅ Click back buttons → Returns to dashboard
   - ✅ Click filter button → Opens filter panel
   - ✅ Click outside panel → Closes filter panel
   - ✅ Hover over bars → Shows tooltips

---

## 🔗 **Step 8: Share the Prototype**

1. Click **Share** button (top-right)
2. Choose **"Copy link"**
3. Toggle **"Link to current page"** OFF (so it starts at dashboard)
4. Set permissions:
   - **Anyone with the link** = Public sharing
   - **Only invited people** = Private sharing
5. Copy the prototype URL - it will look like:
   ```
   https://www.figma.com/proto/tKc3BJjBRxF81a27H5Wql6/...
   ```

Share this link with your team! They can click through without Figma account.

---

## 🎯 **Interaction Summary**

Here's what will be interactive:

| Element | Action | Result |
|---------|--------|--------|
| Open Tickets card | Click | → Open Tickets Detail page |
| Closed Tickets card | Click | → Closed Tickets Detail page |
| Back button (any detail page) | Click | → Main Dashboard |
| Filter button | Click | → Opens filter dropdown |
| Filter panel background | Click outside | → Closes filter panel |
| Open bar (chart) | Hover | → Shows "127 tickets (27.1%)" tooltip |
| Closed bar (chart) | Hover | → Shows "342 tickets (72.9%)" tooltip |

---

## 💡 **Pro Tips**

### Make it Feel Polished:
- Use **"Move in/out"** animations for page navigation (feels native)
- Use **"Dissolve"** for overlays and tooltips (subtle and quick)
- Keep animation duration at **300ms** (default) - feels snappy
- Use **"Ease out"** for entering, **"Ease in"** for exiting

### Add Extra Polish (Optional):
- Add **"While pressing"** state to buttons (slightly darker)
- Add **smart animate** between similar screens (smoother)
- Create **loading states** if you want to show data fetching

---

## 🚨 **Troubleshooting**

**Problem: Can't find a frame to connect to**
- Solution: Make sure you're on Page 1, all frames are there

**Problem: Overlay doesn't show up**
- Solution: Check "Open overlay" is selected, not "Navigate to"

**Problem: Tooltip stays visible**
- Solution: Make sure trigger is "While hovering", not "On click"

**Problem: Back button doesn't work**
- Solution: Use "Navigate to" with the dashboard frame, or use "Back" action

---

## 📸 **Before & After**

**Before (Static):**
- Dashboard shows data but nothing happens on click

**After (Interactive):**
- Click metric cards → See full ticket lists
- Click filter → Refine what you see
- Hover bars → Get detailed stats
- Navigate back → Smooth animations

---

## ⏱️ **Time Estimate**

- **Wiring all interactions:** 5-7 minutes
- **Testing:** 2-3 minutes
- **Total:** ~10 minutes to fully working prototype

---

## 🎓 **Want Me to Do It?**

Unfortunately, Figma's API doesn't support adding prototype interactions programmatically (yet!). But the good news:

- ✅ All screens are built
- ✅ All components are positioned
- ✅ Everything is named clearly
- ✅ You just need to drag 7 arrows in Figma

It's literally just clicking and dragging in prototype mode!

---

## 📚 **Resources**

- [Figma Prototyping Tutorial Video](https://www.youtube.com/watch?v=X5qiBwqptek)
- [Figma Prototype Docs](https://help.figma.com/hc/en-us/articles/360040314193)
- [Interactive Overlay Guide](https://help.figma.com/hc/en-us/articles/360039818254)

---

**Questions?** Just ask and I'll help troubleshoot! 🚀
