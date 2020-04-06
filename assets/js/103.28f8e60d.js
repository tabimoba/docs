(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{18:function(e,t,r){e.exports=r.p+"assets/img/sample-google-sheet.18294aa3.jpg"},2239:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"google-sheets-trigger-new-row-in-sheet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets-trigger-new-row-in-sheet"}},[e._v("#")]),e._v(" Google Sheets trigger - New row in sheet")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("New row in sheet")]),e._v(" trigger is able to pick up new rows "),s("strong",[e._v("added at the bottom")]),e._v(" of your selected sheet, in real-time.")]),e._v(" "),s("p",[e._v("Note that rows added in the middle of the sheet will not picked up. Also, once you have started this trigger, "),s("strong",[e._v("do NOT delete any row")]),e._v(" from the sheet, the trigger will stop tracking correctly.")]),e._v(" "),s("h2",{attrs:{id:"how-to-use-this-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-trigger"}},[e._v("#")]),e._v(" How to use this trigger")]),e._v(" "),s("h3",{attrs:{id:"setting-up-the-google-sheet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-google-sheet"}},[e._v("#")]),e._v(" Setting up the Google sheet")]),e._v(" "),s("p",[e._v("First, in order for us to retrieve the custom data in a sheet, the sheet must contain at least one header line for the first row and one data line for the second row, as in the following screenshot.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(18),alt:"Google sheet sample",width:"653",height:"283"}}),e._v(" "),s("em",[e._v("Sample Google sheet with 1 header row and 1 data rows")])],1),e._v(" "),s("h3",{attrs:{id:"configuring-the-new-row-in-sheet-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-new-row-in-sheet-trigger"}},[e._v("#")]),e._v(" Configuring the New row in sheet trigger")]),e._v(" "),s("p",[e._v("Select the "),s("strong",[e._v("New row in sheet")]),e._v(" trigger.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(540),alt:"Set up application",width:"1330",height:"695"}}),e._v(" "),s("em",[e._v("Set up the application and the trigger")])],1),e._v(" "),s("p",[e._v("To configure the trigger, we need to select the spreadsheet and the actual sheet to process. Selecting a specific spreadsheet would generate your list of sheets within that spreadsheet.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(541),alt:"Blank Trigger",width:"1317",height:"804"}}),e._v(" "),s("em",[e._v("Select the spreadsheet to monitor for new rows")])],1),e._v(" "),s("p",[e._v("Select the specific sheet to monitor for new rows.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(542),alt:"Filled trigger",width:"1266",height:"777"}}),e._v(" "),s("em",[e._v("Once the spreadsheet has been selected, an additional picklist is generated asking for the specific sheet to monitor")])],1),e._v(" "),s("p",[e._v("Set up your action:")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(543),alt:"Scheduler action",width:"1253",height:"634"}}),e._v(" "),s("em",[e._v("Scheduler action")])],1),e._v(" "),s("h3",{attrs:{id:"running-the-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-trigger"}},[e._v("#")]),e._v(" Running the trigger")]),e._v(" "),s("p",[e._v("Now that we have the trigger configured, let's complete our recipe and run it!")]),e._v(" "),s("p",[e._v('We just want to test if the trigger really picks up any new row in the sheet, so we don\'t care too much about the action. In this test, we just simply select the Scheduler action "Get current time".')]),e._v(" "),s("p",[e._v("Let's start the below recipe. Your new recipe should look as follows:")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(544),alt:"Google spreadsheet sample",width:"2134",height:"522"}}),e._v(" "),s("em",[e._v("configured recipe with scheduler action for testing")])],1),e._v(" "),s("p",[e._v("In this case, the trigger picks up all 4 data lines in my Google sheet.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(545),alt:"Customized job report",width:"1681",height:"757"}}),e._v(" "),s("em",[e._v("Customized job report displaying selected information about the trigger event processed")])],1),e._v(" "),s("p",[e._v("While the recipe is running, any new rows added "),s("strong",[e._v("at the bottom of the sheet")]),e._v(" will be picked up almost immediately. If the recipe is stopped at any time, starting it again will cause the recipe to pick up trigger jobs where it left off. In other words, any new rows added while the recipe was stopped will also be picked up when the recipe is started again.")])])}),[],!1,null,null,null);t.default=i.exports},540:function(e,t,r){e.exports=r.p+"assets/img/application-and-trigger.d91e946d.png"},541:function(e,t,r){e.exports=r.p+"assets/img/trigger-setup-blank.4a3ee42f.png"},542:function(e,t,r){e.exports=r.p+"assets/img/trigger-setup-filled.273961f4.png"},543:function(e,t,r){e.exports=r.p+"assets/img/scheduler-action.13a5fc08.png"},544:function(e,t,r){e.exports=r.p+"assets/img/configured-recipe.34da07fb.jpg"},545:function(e,t,r){e.exports=r.p+"assets/img/updated-job-report.98ecdd80.jpg"}}]);