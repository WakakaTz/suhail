const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsams@gmail.com"
global.location="Lahore,Pakita"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tanzania ";
global.github=process.env.GITHUB|| "";
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
global.auto_react_status = process.env.AUTO_REACT_STATUS || 'true',
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255626753818,255xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_20_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNixcbiAgICAgICAgMixcbiAgICAgICAgMjQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDU3LFxuICAgICAgICA3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEbzZmVGNtd0w0SmtKN0JvbmhRczRZOVZQbTZHVlNsNlhnZUtmZkZOTVVnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNb2Y1RU5JUlJwcV9zVmJ0S3RSSWlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRjMTZlZjg4LWU3OTgtNDc0NC04MGFmLWE2NDQzNmYxOTkxZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICA1MCxcbiAgICAgIDEwLFxuICAgICAgMjQyLFxuICAgICAgNTIsXG4gICAgICA1MSxcbiAgICAgIDE5OSxcbiAgICAgIDI0MCxcbiAgICAgIDE0MixcbiAgICAgIDksXG4gICAgICA1NixcbiAgICAgIDI1LFxuICAgICAgNjMsXG4gICAgICAyNSxcbiAgICAgIDE5MixcbiAgICAgIDE1NyxcbiAgICAgIDE3OSxcbiAgICAgIDIzNSxcbiAgICAgIDIxMSxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxMDUsXG4gICAgICA1MyxcbiAgICAgIDEwNCxcbiAgICAgIDUsXG4gICAgICA5NyxcbiAgICAgIDIwOCxcbiAgICAgIDEyOSxcbiAgICAgIDExNixcbiAgICAgIDE1OCxcbiAgICAgIDYzLFxuICAgICAgMTE5LFxuICAgICAgMTI2LFxuICAgICAgMTQ2LFxuICAgICAgMTE3LFxuICAgICAgMzIsXG4gICAgICA4NCxcbiAgICAgIDE2MyxcbiAgICAgIDEzMSxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKTkxYQk03U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI2NzUzODE4OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QivCdkJrwnZCk8J2QmiDwnZCM8J2QrvCdkKLwnZCm8J2Qm/CdkJrwnZCj8J2QolwiLFxuICAgIFwibGlkXCI6IFwiMjMwMTUwMjM1MDA1MDM0OjY3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXL3VZc0dFSmZiNXJvR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMTNRNndDMXBRZU5mL1ZRc3ZiVEljc25xRDgxNnFFZWdPdWFJS1l4azNCMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxdjdienk1OFgvL3k3TGVxOEtRZWNaWUk4eW9Kd2tmakdYU1VnMFcrWVRPcFJtL2YwYjU2dmF2NjhUbWFndXVjMGw1NTdrQUdoaHFYOE9CMjdQNW1DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwNHlKTFZEQ3JlTzVSUC9JTGJyTjdCOVBhbWtEbVYzdXdJQjRvbGdRZUREcUNCRXI1RU8xcEhhajVmekF0N2F4SzFocTZWZUtQa1JKOGlVWlZGK3hndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjY3NTM4MTg6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzOTMwMzk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDgyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMODIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1NHJQaGZUN1ZkckpPTTBEU1RGVjB5QVJ0UUVSS1ZNazkwMnI3VFFRSjBvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzQ2MjM0MTMsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY4Mzc3NTYzNFwifSIKfQ=="  // PUT your SESSION_ID 


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
