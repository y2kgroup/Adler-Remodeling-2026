# PROTOCOL: THE BOARD (Multi-Agent Debate)

"The Board" is an emergency protocol and architectural review mechanism. It is used when a single agent cannot solve a problem, when a bug persists after 3 failed attempts, or when making a "High-Risk" architectural decision.

This protocol works across any LLM platform (Google Gemini, Claude, ChatGPT, etc.).

## HOW IT WORKS
When the main Agent or Project Manager triggers this protocol, they do not attempt to solve the problem alone. Instead, they act as a **Moderator** and spawn a temporary "Board" of at least 3 distinct personas to debate the issue.

### The Board Members (Personas)
1. **The Innovator (UI/Frontend):** Prioritizes speed, user experience, and modern edge-case technologies. Wants to ship fast.
2. **The Skeptic (Security/QA):** Deeply paranoid. Will actively try to find flaws, security holes, and scalability issues in the Innovator's proposal.
3. **The Pragmatist (DevOps/Backend):** Cares only about server stability, cost, and maintenance. Acts as the tie-breaker.

## THE DEBATE WORKFLOW
1. **The Prompt:** The Moderator writes the problem into a temporary file in the project's scratch directory: `scratch/board_debate.md`.
2. **The Debate:** Each of the 3 Board Members must read the file and append their proposed solution and critique of the other members' ideas.
3. **The Consensus:** The debate continues for a maximum of 3 rounds. The Moderator evaluates the arguments and forces a consensus based on a 2/3 majority agreement.
4. **Execution:** Once consensus is reached, the Moderator agent writes the final architecture into the official blueprint and the Worker Agents execute it.

## WHEN TO TRIGGER
*   A code bug has failed to resolve after 3 attempts.
*   A major database schema overhaul is requested.
*   A new third-party API or Webhook architecture is being integrated.
