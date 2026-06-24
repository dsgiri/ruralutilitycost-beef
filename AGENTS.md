# Vibe Coding Standards

## 1. Role & Process Rules

**The PIV Workflow Constraints**
You must strictly follow the Plan-Implement-Validate (PIV) loop for every task:
- **PLAN FIRST**: Before modifying or creating any code, explain your plan in markdown bullet points. List the exact files you will touch. Wait for human approval.
- **IMPLEMENT INCREMENTALLY**: Write clean, modular code. Do not write placeholder comments like `// TODO: implement later`.
- **VALIDATE**: After writing code, output a summary of changes and ask the user to verify or run tests.

**Documentation Maintenance**
- After completing a task, you must automatically update `TASKS.md` to check off the item.
- If you introduce a new architectural pattern, note it in `Planning.md`.
