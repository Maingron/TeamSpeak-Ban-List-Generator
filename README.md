# Maingrons teamspeak-ban-list generator
This tools generates Regex Ban lists for TeamSpeak that you can import with YaTQA. ...These TeamSpeak limitations are crazy!

## How to
After downloading and extracting, open the index.html file on your computer (with your browser). It will output a YaTQA file with ban rules (You'll have to save the text output into a file yourself, sorry!)

You can edit the rules in the JavaScript files. You're probably looking for `const words` in input.js. Maybe you'll also want to change `var charsetCollection` in generateCharsetBan.js.

Make sure to open your browser console (CTRL + I) to monitor for errors. Queries get too long for TeamSpeak basically immediately - This is also the reason for banning some charsets within charsetCollection, so we don't have to check for all of these "fake" letters later.


Contributions and questions welcome.

## Further steps
Depending on your configuration, you can take further steps to harden your TeamSpeak server.
Some examples:
- Fail2Ban (with TeamSpeak configuration)
- Moderators

## Special things when adding words
- Make sure to watch the browser console for errors
- Writing `+` results in regex +, meaning the previous character (or character group) can follow unlimited times

## Screenshots
|  |  |
|--|--|
|![Banner](img/banner.png)|![Logo](logo.svg)|
![Screenshot of YaTQA](img/screenshot1.png)
