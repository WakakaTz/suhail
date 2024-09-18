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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_37_08_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICA0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiamo5dVpLdFRVcW9Yc2JQSVpERkRuZ2Y4OEJMWGthM1lKbUZiQVFWU0hhWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjY3NTM4MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQxRDY4QjJCQzk3NEJCNjM4RDBCQ0QxQjQ5Mzk3MzZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzkzNDI3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJySk04bXhKRFRUV0h0VWpLeTR3QTNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU2NmRjNzlhLTE4YzAtNGY5MC04ZWVhLTc4YTIyNzQ5NmY1ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAxMTQsXG4gICAgICAzNixcbiAgICAgIDg1LFxuICAgICAgMTU4LFxuICAgICAgMjUzLFxuICAgICAgOTIsXG4gICAgICAxNzEsXG4gICAgICAxNjYsXG4gICAgICA4NyxcbiAgICAgIDI0MixcbiAgICAgIDc4LFxuICAgICAgMTM4LFxuICAgICAgNzcsXG4gICAgICAxNDUsXG4gICAgICA2NCxcbiAgICAgIDI0LFxuICAgICAgMTkxLFxuICAgICAgMTg0LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgODMsXG4gICAgICAyMjMsXG4gICAgICAxMTEsXG4gICAgICAxOTcsXG4gICAgICA4NixcbiAgICAgIDUyLFxuICAgICAgMTIsXG4gICAgICA4OCxcbiAgICAgIDE5OSxcbiAgICAgIDIyMSxcbiAgICAgIDE4NSxcbiAgICAgIDE3NSxcbiAgICAgIDExNCxcbiAgICAgIDIyOSxcbiAgICAgIDIzOCxcbiAgICAgIDExNSxcbiAgICAgIDI0NixcbiAgICAgIDYsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVYyNU1IUUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyNjc1MzgxODo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktha2EgTXVpbWJhamlcIixcbiAgICBcImxpZFwiOiBcIjIzMDE1MDIzNTAwNTAzNDo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJQ05pTWdERUxiTWhMWUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9VSzk4VVJ3SVJmTFJhMUtWK2YvVXozbi9wRC92ak5NQ092L2VoS0xWMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia1JoQlpzUTc0Y3VYUXNseG1GZGZiYnVLL29JMEp0S1k5QytudHZVa2h2QWhsNStpVXdVcHhjN3Q2dDB6M3JpZ0pPdE8xVXgvZ3hIazVNQXkycURnQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibkJYRVpRVHJPeFFFWmxXQVNHNHZyQnZ3a0t2eE1lK3F6YlJ0M0t1WklzVW1IdDBoU1lLczY5MFRNTERJZ1p0eDNxY1lEVFE1ZnpjSzNhcjQzNDlNanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjI2NzUzODE4OjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzkzNDI2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFreFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWt4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibnhxTHJoeUZtbnlyZ3VvdURnZjBGdENoL1B6b2d2MVl3b1RTdm03NVpZaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NTY0MzQwNDgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
