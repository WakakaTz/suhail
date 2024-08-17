const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })



//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_08_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDQxLFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyLFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidUpwMW9ISjRxdnlwOWtTektsV0pTYmQzVDlodldtZ21VTnZRdjZwc3RkZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidjlSbVhWcU1RQWl2S2JaUGIyZDFXUVwiLFxuICBcInBob25lSWRcIjogXCJlODVlMzQyZC1jM2QwLTRiMjctYTMwZS1mZTMyN2Q1ODFiZDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMTEsXG4gICAgICAxMTAsXG4gICAgICAxODEsXG4gICAgICAyNCxcbiAgICAgIDE2MyxcbiAgICAgIDY4LFxuICAgICAgMTM4LFxuICAgICAgMTYxLFxuICAgICAgMTAwLFxuICAgICAgMTk2LFxuICAgICAgMjI5LFxuICAgICAgMTU4LFxuICAgICAgMjE1LFxuICAgICAgMjIxLFxuICAgICAgMTA2LFxuICAgICAgMjEzLFxuICAgICAgMjUyLFxuICAgICAgMTIwLFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgNjEsXG4gICAgICA4MCxcbiAgICAgIDE3NixcbiAgICAgIDEwLFxuICAgICAgMjQ0LFxuICAgICAgMTEwLFxuICAgICAgNDEsXG4gICAgICAxOTUsXG4gICAgICAxMjUsXG4gICAgICA5OSxcbiAgICAgIDgsXG4gICAgICA5MCxcbiAgICAgIDEyMSxcbiAgICAgIDU4LFxuICAgICAgNDQsXG4gICAgICA0NixcbiAgICAgIDk5LFxuICAgICAgMjA4LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxCUVlIMU5KXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3MTE1MTA4ODI6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYXJsZXkgUGVzYVwiLFxuICAgIFwibGlkXCI6IFwiMjUzMzYxMjk1NzcxNzQ6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2ZELzRNT0VJMjB0TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1L1dyVnJ6eWhhczlqcjZzT3hmUVREdHRDREZsVHA4T3FlZTNCclpkZVdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRVQXh3NGVJN1JXQndFYlA5OEF0ZTdhOU9VcjhvT3BCTGlmUGp1aGRjRjR2YWVMZUNhZEdMb3lCWDlKTE5FdzVuakt6MStrcTBCYy9HWDE4ZHd1dENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhHWVAxMXZXZDNBTEZPeHp2clhsVUZ6Zit4LzlCS01UdHZiMC9DRWV6bzRVTmtKaHAwSXpFR2srV0FUTzQzaDBHSEZpRktkNGZTREd6NmlwNGVEdmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTcxMTUxMDg4MjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MjMyODJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
