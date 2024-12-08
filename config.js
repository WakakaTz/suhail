const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })



//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun79@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Kalulu😎" 


global.devs = "255626753818" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255626753818";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.AUTO_REACT_STATUS = process.env.AUTO_REACT_STATUS || 'yes',
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255626753818,255xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_24_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAzMixcbiAgICAgICAgODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTE5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM3LFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic1lUTi9DcDFJUzhYRmJHaWU1ZTZTSEJwL05wZ0JQM0RuRTUwMXNzWm1Mcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjY3NTM4MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdCMDY4RjM1NDc0QjY4NzA2M0ZDMDBBQ0YxNzlFNkI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzQ1MDY4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYyNjc1MzgxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDAyRjYzNEI4QjRDQ0VEMEVDMkFCMTM1RUUyOTI1MUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3NDUwNjgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjI2NzUzODE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMjYxQTE5RkZGNjlENjI5QUI1QzM4NkUwQ0YxNkMyMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc0NTA2ODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjY3NTM4MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE2MzNBRDhGRkREMzY1M0MyMDg2NDgxMjZBODgzOTgxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzQ1MDY4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0YWJjVU43QVJJR3VjTGsxU2RVSmhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0NDAwMzViLWViZmItNDYyMy1hNWE3LWE3OWVjMmI2NGJhOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDE1MSxcbiAgICAgIDIzNyxcbiAgICAgIDgxLFxuICAgICAgODQsXG4gICAgICAxMCxcbiAgICAgIDE2MCxcbiAgICAgIDIwOSxcbiAgICAgIDUsXG4gICAgICAzNyxcbiAgICAgIDE3NyxcbiAgICAgIDIxMSxcbiAgICAgIDQxLFxuICAgICAgMTA3LFxuICAgICAgMTYxLFxuICAgICAgMjE2LFxuICAgICAgNTQsXG4gICAgICAxMDMsXG4gICAgICA5NixcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICA2OCxcbiAgICAgIDE0NCxcbiAgICAgIDI0NyxcbiAgICAgIDIzLFxuICAgICAgMTQ5LFxuICAgICAgMTY0LFxuICAgICAgMTc2LFxuICAgICAgMjE5LFxuICAgICAgMjE5LFxuICAgICAgMTYxLFxuICAgICAgMTMsXG4gICAgICA1OSxcbiAgICAgIDE2NSxcbiAgICAgIDE1MSxcbiAgICAgIDkyLFxuICAgICAgNCxcbiAgICAgIDEwOCxcbiAgICAgIDIwNixcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRWlAyR1c1SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI2NzUzODE4OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QivCdkJrwnZCk8J2QmiDwnZCM8J2QrvCdkKLwnZCm8J2Qm/CdkJrwnZCj8J2QolwiLFxuICAgIFwibGlkXCI6IFwiMjMwMTUwMjM1MDA1MDM0OjYyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXL3VZc0dFTE9jMjdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMTNRNndDMXBRZU5mL1ZRc3ZiVEljc25xRDgxNnFFZWdPdWFJS1l4azNCMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0VGg5ak5ZK0pPU1VtVzgxTHd2WG1BMkhWQUxLeU5NckxCWklHdGgwZGROSUQ3Y1NYSDIzYktTeEtDeHF6L0RDdUM5UGJxZ2xRQ01pbTBqTm5SQ2xBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1NGJhTnFId2tJbkJueHNPbnhKQXlXRlpKNWtIMGdxQWtHRzBjelNBLzBFSGZ1dlpMYkFDT3c2VHprRHR1aTAwU3VqcFBFSUVwbnFhMlcybWpuWC9BQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjY3NTM4MTg6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3NDUwNjgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDh4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMOHguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWL2h6YytVRUpaTml5SnVtZmtUWFdleUNTekcycDdIYmNjV1NPSXpUVFZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzQ2MjM0MTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzQ1MDY4MTc1MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Kalulu 😎" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kalulu - MD",
  ownername:process.env.OWNER_NAME|| "*KALULU*",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
