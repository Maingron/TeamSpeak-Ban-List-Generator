Information about Teamspeak / Teamspeak Bans I was able to conclude:

## Valid Regex Patterns
- `.*` -> anything at any length
- `.?` -> can be 1 or 0 characters
- `\s` -> exactly 1 space
- `[aA89]` -> one of these

## Other limitations
- Max length of 255. Database entries that are longer will be ignored

## Well, YaTQA...
YaTQA actually has its own problems. While this project is aimed to work with YaTQAs import function, YaTQA seems to dislike certain characters. In doubt you'll have to add certain entries using the TeamSpeak client itself
