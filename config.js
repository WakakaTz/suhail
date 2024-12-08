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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tanzania";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_43_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMixcbiAgICAgICAgMTExLFxuICAgICAgICA0NixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRVnNhVHZZYlRkNkppVjlPRTdHK2xiSjBhWERuTnRTOTlmeHF5OWVZVUxNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWSWlEZVpaVlNTZURlTUZsVHRSaTJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg2NWQ2Y2ViLTk3OTMtNDQ1Ny04YmM4LTg3NWY4Njk2NzQxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDM5LFxuICAgICAgMzEsXG4gICAgICA5NSxcbiAgICAgIDIwMSxcbiAgICAgIDE1MSxcbiAgICAgIDIzNixcbiAgICAgIDIxMSxcbiAgICAgIDExNSxcbiAgICAgIDczLFxuICAgICAgMjUwLFxuICAgICAgMTY0LFxuICAgICAgMSxcbiAgICAgIDI0LFxuICAgICAgNTksXG4gICAgICA0NSxcbiAgICAgIDI1MSxcbiAgICAgIDEzMixcbiAgICAgIDE1OSxcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDIzOCxcbiAgICAgIDI1NCxcbiAgICAgIDE1OCxcbiAgICAgIDEwMCxcbiAgICAgIDYsXG4gICAgICAxNzQsXG4gICAgICAxNDcsXG4gICAgICA2NyxcbiAgICAgIDE4NixcbiAgICAgIDgwLFxuICAgICAgMjYsXG4gICAgICA1MyxcbiAgICAgIDU5LFxuICAgICAgNDIsXG4gICAgICAyMTEsXG4gICAgICA4NSxcbiAgICAgIDg0LFxuICAgICAgMTc5LFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNDQzhZWFhCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjY3NTM4MTg6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCK8J2QmvCdkKTwnZCaIPCdkIzwnZCu8J2QovCdkKbwnZCb8J2QmvCdkKPwnZCiXCIsXG4gICAgXCJsaWRcIjogXCIyMzAxNTAyMzUwMDUwMzQ6NjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFcvdVlzR0VOYlIxN29HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxM1E2d0MxcFFlTmYvVlFzdmJUSWNzbnFEODE2cUVlZ091YUlLWXhrM0IwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFmc3dNMnBEOExMMzFod2ZYV1QzUitjRkFMdm9YU25XMVRjVXMrZTIzTTZLSmErREV5WmRVMmtXQ1RSQVo4cGFsenduR0VORnFTUGRVY3ByOW9CbEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkE5K01HZ2ZlQkNEc2lFZTNHY2JiRHV3K3U1SkNxYjArVlRHWDdwL3psMENoMFA2aGpwNFVBc0owa2lWS2hGQTFZNUllL3FhbXcrcFcvbHdSZHNVZUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyNjc1MzgxODo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2ODM0MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMOHhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw4eC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
