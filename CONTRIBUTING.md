# Contributing

Thank you for contributing to the Coffee-Shop project! This document describes the workflow, branch policy, and pull request (PR) rules your group should follow.

Branching model
- `master` : Protected production branch. Only group lead may merge `development` -> `master` via PR after final review and testing.
- `development` : Main integration branch for ongoing work. All feature/topic branches are merged into `development` via PR.
- Feature branches: Create branches from `development` with names like `feature/<short-desc>` or `fix/<short-desc>`.

Typical workflow
1. Create a feature branch off `development`:
   - `git checkout development`
   - `git pull origin development`
   - `git checkout -b feature/my-new-feature`
2. Implement the changes in small, focused commits.
3. Push the branch to remote and open a Pull Request into `development`.
4. Request at least one code review from a teammate. Address review comments with follow-up commits.
5. After approval, merge the PR to `development` (use GitHub merge button). Do not push directly to `development` or `master`.
6. When development is stable and approved for release, the group lead opens a PR from `development` -> `master`. After final review and CI checks (if any), the group lead merges to `master`.

Pull Request rules
- Title: Use a short descriptive title e.g. `Add order validation`.
- Description: Include a short summary, the files changed, and any setup steps to test.
- Tests: Describe manual steps to verify the change (e.g., run JSON Server, open app, place order).
- Size: Keep PRs small and focused. Large features should be split into multiple PRs.

Commit message convention (recommended)
- Use present-tense, short description in first line. Examples:
  - `feat: add order form validation`
  - `fix: correct total price calculation`
  - `docs: add component hierarchy`

Setting branch protection (recommended, done on GitHub)
1. Go to repository Settings → Branches → Add rule.
2. Enter branch name pattern `master` and enable:
   - Require pull request reviews before merging
   - Require status checks to pass (if you add CI)
   - Include administrators (optional)
3. Optionally, add the same rule for `development` to enforce PR-based merges.

Running the project locally (developer quick start)
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Start JSON Server (mock API):
   ```powershell
   npm run server
   ```
   JSON Server listens on `http://127.0.0.1:3000` by default (see `package.json`).
3. Start the dev server:
   ```powershell
   npm run dev
   ```

Reporting issues
- Use GitHub Issues to report bugs or request enhancements. Reference the branch or PR where the problem occurs.

Thank you — keep changes small, document behavior, and use PRs for all merges.
