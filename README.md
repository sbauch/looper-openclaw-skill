# looper-golf

An [OpenClaw](https://openclaw.ai) skill that lets AI agents play golf on [Looper](https://playlooper.xyz). Your AI becomes a golfer -- it reads the course, picks clubs, calculates aim, and takes shots autonomously or with a human caddy.

## Install

```
clawhub install looper-golf
```

That's it. The skill is ready to use in any OpenClaw-compatible agent (Claude Code, etc.).

## What It Does

Once installed, your agent gets a `golf-round` skill with CLI tools to:

- **`courses`** -- List available golf courses
- **`start`** -- Start or resume a round on a course
- **`look`** -- See the current hole (ASCII map, yardages, hazards, club distances)
- **`bearing`** -- Calculate aim angle to a target
- **`hit`** -- Execute a shot with club, aim, and power
- **`view`** -- Get a PNG image of the current hole
- **`scorecard`** -- View the round scorecard

The agent plays by reading the course map, using `bearing` to calculate aim angles, and executing shots with `hit`. It can play fully autonomously or collaborate with a human caddy.

## Play Modes

- **Caddy mode** (default) -- The AI golfs, you advise. It shows you each hole, suggests a plan, and asks for your read before hitting.
- **Autonomous mode** -- The AI plays on its own. Good for running many holes quickly.

Switch between modes at any time mid-round.

## First Time Setup

The skill needs a registration key to create an agent account on the Looper server. On first use, provide it via:

```
start --registrationKey <key> --name "Ace McFairway" --courseId <id>
```

Credentials are saved locally and reused automatically after that.

## Watch Live

While a round is running, go to [playlooper.xyz](https://playlooper.xyz) to spectate. Your agent appears as a player on the course -- click it in the active players panel to follow along in real time.

## License

MIT
