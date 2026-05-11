# Git Quick Reference for Designers

## 🚀 Daily Workflow (Copy & Paste These!)

### Starting New Work
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

### Saving Your Work
```bash
git status                    # See what changed
git add .                     # Stage all changes
git commit -m "Description"   # Commit with message
git push origin feature/your-feature-name
```

### Creating a Pull Request
```bash
# After pushing, GitHub will show a link, or use:
gh pr create --title "Your Title" --body "Description"

# Or visit: https://github.com/jonathon1454/option-1/pulls
```

### After PR is Merged
```bash
git checkout main
git pull origin main
git branch -d feature/your-feature-name
```

---

## 🆘 Emergency Commands

### "Oh no, I want to undo my changes!"
```bash
# Discard changes to a file
git checkout -- filename.png

# Discard ALL uncommitted changes (careful!)
git reset --hard HEAD
```

### "I committed to main by mistake!"
```bash
# Create a branch from your current position
git branch feature/oops-wrong-branch

# Reset main back one commit
git reset --hard HEAD~1

# Switch to your new branch (your changes are safe here)
git checkout feature/oops-wrong-branch
```

### "I need to update my branch with latest main"
```bash
git checkout main
git pull origin main
git checkout feature/your-branch
git merge main
```

### "I forgot to pull before starting!"
```bash
# Stash your changes temporarily
git stash

# Pull latest
git pull origin main

# Restore your changes
git stash pop
```

---

## 📊 Checking Status

```bash
git status              # What's changed?
git log --oneline -10   # Last 10 commits
git branch -a           # All branches
git diff                # See exact changes
```

---

## 🏷️ Branch Naming Cheatsheet

| Type | Example |
|------|---------|
| New feature | `feature/add-filters` |
| Bug fix | `fix/spacing-issue` |
| Design iteration | `design/mobile-layout` |
| Experiment | `experiment/dark-mode` |

---

## ✅ Commit Message Templates

### Simple Change
```
Fix metric card spacing
```

### Complex Change
```
Add mobile responsive layout

- Stack cards vertically on small screens
- Adjust bar chart for narrow viewports
- Update spacing for touch targets

Figma: https://figma.com/...
```

---

## 🎯 Pro Tips

1. **Commit often** - Small commits are easier to review
2. **Pull before you start** - Avoid conflicts
3. **Push daily** - Don't lose work!
4. **Delete merged branches** - Keep it tidy
5. **Write clear messages** - Future you will thank you

---

## 🔗 Need Help?

- Full workflow: [WORKFLOW.md](WORKFLOW.md)
- Git documentation: https://git-scm.com/docs
- GitHub guides: https://guides.github.com/

**Still stuck?** Ask your team or check `git --help`
