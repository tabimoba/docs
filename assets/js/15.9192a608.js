(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{2122:function(e,t,a){e.exports=a.p+"assets/img/new-bot-command-trigger-datatree.c3fa237e.png"},2123:function(e,t,a){e.exports=a.p+"assets/img/salesforce-show-account-command.2d3f06a5.gif"},2124:function(e,t,a){e.exports=a.p+"assets/img/salesforce-show-account-recipe.6fbb4377.png"},2125:function(e,t,a){e.exports=a.p+"assets/img/salesforce-show-account-config-1.eaad2f2f.png"},2126:function(e,t,a){e.exports=a.p+"assets/img/salesforce-show-account-config-2.a9372ae1.png"},2127:function(e,t,a){e.exports=a.p+"assets/img/salesforce-show-account-results.2f8954c0.png"},2128:function(e,t,a){e.exports=a.p+"assets/img/new-event-trigger.ce38a02d.png"},2129:function(e,t,a){e.exports=a.p+"assets/img/custom-event.99517b6e.png"},2130:function(e,t,a){e.exports=a.p+"assets/img/event-sample-json.67fc19b4.png"},2131:function(e,t,a){e.exports=a.p+"assets/img/custom-event-schema.55e5980d.png"},2132:function(e,t,a){e.exports=a.p+"assets/img/event-subscription.b7505d45.png"},2133:function(e,t,a){e.exports=a.p+"assets/img/workbot-url.7383380c.gif"},2134:function(e,t,a){e.exports=a.p+"assets/img/workbot-url-mention.ace962f7.gif"},2135:function(e,t,a){e.exports=a.p+"assets/img/typeahead-example.9256ead8.png"},2136:function(e,t,a){e.exports=a.p+"assets/img/dynamic-menu-recipe-params.36ee7064.png"},2137:function(e,t,a){e.exports=a.p+"assets/img/params-in-dynamic-menu-trigger.c700d796.png"},2138:function(e,t,a){e.exports=a.p+"assets/img/dynamic-menu-param-example.f8fb5104.png"},214:function(e,t,a){e.exports=a.p+"assets/img/message-actions-example.df7d7c44.gif"},2729:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"workbot-triggers-for-slack"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workbot-triggers-for-slack"}},[e._v("#")]),e._v(" Workbot triggers for Slack")]),e._v(" "),o("p",[e._v("Workbot for Slack allows you to send commands to Workbot on Slack. Workbot will handle these commands and interact with your connected apps to do things, such as display details of a customer account, close opportunities, display a list of invoices or tickets, or create/update existing tickets.")]),e._v(" "),o("p",[e._v("Each Workbot command is processed using a Workato recipe. The recipe trigger picks up the Workbot command as a trigger event, and the recipe determines the actions to carry out. With Workbot, you can create custom workflows that execute via your Slack commands, and optionally retrieve relevant data for you back to Slack.")]),e._v(" "),o("p",[e._v("The Workbot for Slack connector has 5 triggers:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#new-command-trigger-building-custom-commands"}},[e._v("New command")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#new-event-trigger"}},[e._v("New event (real-time)")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#new-message-action-trigger"}},[e._v("New message action trigger")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#new-url-mention"}},[e._v("New URL mention")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#new-dynamic-menu-event"}},[e._v("New dynamic menu event")])])]),e._v(" "),o("h2",{attrs:{id:"new-command-trigger-building-custom-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-command-trigger-building-custom-commands"}},[e._v("#")]),e._v(" New command trigger (building custom commands)")]),e._v(" "),o("p",[e._v("This trigger requires you to configure a custom Workbot command. When this recipe is started, Workbot will monitor for that command. Whenever the command is called, Workbot proceeds to carry out the recipe actions.")]),e._v(" "),o("h3",{attrs:{id:"new-command-trigger-input-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-command-trigger-input-fields"}},[e._v("#")]),e._v(" New command trigger input fields")]),e._v(" "),o("p",[e._v("The following table lists the configurable input fields in the trigger, and what each field does.")]),e._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",[e._v("New command trigger input field")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("App")]),e._v(" "),o("td",[e._v("\n              1st part of the Workbot command. The app that the Workbot command is working with e.g. "),o("br"),o("code",[e._v("Salesforce")])])]),e._v(" "),o("tr",[o("td",[e._v("Action")]),e._v(" "),o("td",[e._v("\n              2nd part of the Workbot command. What the Workbot command is doing with the action data, e.g."),o("br"),o("code",[e._v("show")]),e._v(", "),o("code",[e._v("create")]),e._v(", "),o("code",[e._v("update")]),e._v(".\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Action data")]),e._v(" "),o("td",[e._v("\n              3rd part of the Workbot command. The record that the Workbot command works with, e.g."),o("br"),o("code",[e._v("invoice")]),e._v(", "),o("code",[e._v("customer")]),e._v(", "),o("code",[e._v("ticket")]),e._v(".\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Command input fields")]),e._v(" "),o("td",[e._v("\n              The input to ask from the user so as to successfully carry out recipe actions, defined in a specific format. Parameters may have the type "),o("code",[e._v("file")]),e._v(", which accepts file content (e.g. text, binary content) as input. This can be uploaded into Slack. You can use this file in subsequent operations using the Workbot action "),o("a",{attrs:{href:"/workbot/workbot-actions.html"}},[e._v("Download Attachment.")])])]),e._v(" "),o("tr",[o("td",[e._v("Command hint")]),e._v(" "),o("td",[e._v("\n            Short description of what the command does. Shows up in the Workbot app page under "),o("b",[e._v("Commands")]),e._v(".\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Hidden command")]),e._v(" "),o("td",[e._v("\n              If "),o("b",[e._v("yes")]),e._v(", command will not show up as a button in the Slack channel when the user types app name. If "),o("b",[e._v("no")]),e._v(", command will show up as a button in the Slack channel when the user types app name.\n            ")])])])]),e._v(" "),o("h4",{attrs:{id:"workbot-command-format"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workbot-command-format"}},[e._v("#")]),e._v(" Workbot command format")]),e._v(" "),o("p",[e._v("The Workbot command is created by piecing 3 elements together, the "),o("code",[e._v("app")]),e._v(", "),o("code",[e._v("action")]),e._v(" and "),o("code",[e._v("action data")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("app action action-data\n")])])]),o("p",[e._v('In the following case, the application is "Salesforce", command action is "Show", and business data is "Account". The command that Workbot will respond to is therefore:')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Salesforce show account\n")])])]),o("h4",{attrs:{id:"workbot-command-input-parameters-format"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workbot-command-input-parameters-format"}},[e._v("#")]),e._v(" Workbot command input parameters format")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("command input fields")]),e._v(" field lets you decide what data is needed from the user to carry out the recipe actions successfully.")]),e._v(" "),o("p",[e._v("Each input parameter has to be provided in the following format:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("param_name optional:true prompt:false type:string hint:hint_to_help_users sample:example_data\n")])])]),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",[e._v("Command input fields")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Name")]),e._v(" "),o("td",[e._v("Required. Needs to be a single word.")])]),e._v(" "),o("tr",[o("td",[e._v("Optional")]),e._v(" "),o("td",[e._v("\n              Not required. If not defined, defaults to "),o("code",[e._v("optional:true")]),e._v(". Input parameter will be optional.\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Prompt")]),e._v(" "),o("td",[e._v("\n              Not required. If not defined, defaults to "),o("code",[e._v("prompt:false")]),e._v(". No prompt will be generated.\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Data Type")]),e._v(" "),o("td",[e._v("\n              Not required. If not defined, defaults to "),o("code",[e._v("type:string")]),e._v(". Possible types are "),o("code",[e._v("string")]),e._v(", "),o("code",[e._v("boolean")]),e._v(", "),o("code",[e._v("number")]),e._v(", "),o("code",[e._v("file")]),e._v(", and "),o("code",[e._v("date_time")]),e._v(".\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Hint")]),e._v(" "),o("td",[e._v("\n            Not required. If not defined, defaults to no hint.\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Example")]),e._v(" "),o("td",[e._v("\n              Not required. If not defined, defaults to no sample data.\n            ")])])])]),e._v(" "),o("p",[e._v("In this case, to successfully retrieve Salesforce account data, we need the full account name from the Slack user.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("name optional: false prompt: false type: string hint: Exact account name sample: IBM\n")])])]),o("p",[e._v("The configured command input fields will be displayed as follow up questions for the user after the Workbot command.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(288),alt:"Salesforce show account input parameters",width:"2558",height:"1154"}}),e._v(" "),o("em",[e._v("A command input field displayed on Slack")])],1),e._v(" "),o("h3",{attrs:{id:"new-command-trigger-output-datapills"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-command-trigger-output-datapills"}},[e._v("#")]),e._v(" New command trigger output datapills")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("New command")]),e._v(" trigger also provides a set of datapill variables as that holds data about the command, such as the user making the command, the channel the command was made it, etc. The following table details these datapill variables.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2122),alt:"New command trigger output datatree",width:"554",height:"636"}}),e._v(" "),o("em",[e._v("New bot command output datatree")])],1),e._v(" "),o("p",[e._v("The following table lists the output datapills from the trigger, and what data each field contains.")]),e._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",[e._v("New command trigger datapill variables")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("App")]),e._v(" "),o("td",[e._v("\n              1st part of the Workbot command. The app that the Workbot command is working with e.g. "),o("br"),o("code",[e._v("Salesforce")])])]),e._v(" "),o("tr",[o("td",[e._v("Action data")]),e._v(" "),o("td",[e._v("\n              2nd part of the Workbot command. What the Workbot command is doing with the action data, e.g."),o("br"),o("code",[e._v("show")]),e._v(", "),o("code",[e._v("create")]),e._v(", "),o("code",[e._v("update")]),e._v(".\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Action")]),e._v(" "),o("td",[e._v("\n              3rd part of the Workbot command. The record that the Workbot command works with, e.g."),o("br"),o("code",[e._v("invoice")]),e._v(", "),o("code",[e._v("customer")]),e._v(", "),o("code",[e._v("ticket")]),e._v(".\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Message ID")]),e._v(" "),o("td",[e._v("\n              The epoch time when the Workbot command was sent. Can be used to populate "),o("b",[e._v("Thread ID")]),e._v(" input fields to create a thread under this Workbot command message."),o("br"),e._v(" Can also be used in "),o("b",[e._v("Message to update")]),e._v(", to overwrite a previously posted message.\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Context")]),e._v(" "),o("td",[e._v("\n            Slack data about this Workbot command, e.g. the team and channel it was posted in, the user who posted it, ID of the thread it was in, if applicable.\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Command input parameters")]),e._v(" "),o("td",[e._v("\n              Data obtained from the user by asking follow up questions to their Workbot command.\n            ")])])])]),e._v(" "),o("p",[e._v("The following table holds additional information about the "),o("strong",[e._v("Context")]),e._v(" object and the data it correspondingly holds.")]),e._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",[e._v("Context datapill variables")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Team")]),e._v(" "),o("td",[e._v("Slack team ID")])]),e._v(" "),o("tr",[o("td",[e._v("User")]),e._v(" "),o("td",[e._v("Slack user ID")])]),e._v(" "),o("tr",[o("td",[e._v("Reply Channel")]),e._v(" "),o("td",[e._v("\n            Slack channel ID where message was posted\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("User handle")]),e._v(" "),o("td",[e._v("Slack user handle")])]),e._v(" "),o("tr",[o("td",[e._v("User e-mail")]),e._v(" "),o("td",[e._v("Slack user email")])]),e._v(" "),o("tr",[o("td",[e._v("User name")]),e._v(" "),o("td",[e._v("Slack user friendly name")])]),e._v(" "),o("tr",[o("td",[e._v("Thread ID")]),e._v(" "),o("td",[e._v("\n              Thread ID if message was posted to thread, "),o("code",[e._v("null")]),e._v(" otherwise\n            ")])])])]),e._v(" "),o("p",[e._v("Triggers may contain "),o("strong",[e._v("Message ID")]),e._v(" in their output. Message ID has a value only when "),o("strong",[e._v("New command")]),e._v(" was triggered by a button action. If command was triggered as result of a manually typed command, this field will be empty.")]),e._v(" "),o("h3",{attrs:{id:"example-salesforce-show-account-command"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-salesforce-show-account-command"}},[e._v("#")]),e._v(" Example: Salesforce show account command")]),e._v(" "),o("p",[e._v('In the following gif, we\'re chatting directly with Workbot via a DM. When we type in the app name "Salesforce", Workbot generates a list of available commands and displays them as buttons. The command can also be manually typed into the DM as '),o("code",[e._v("Salesforce show account")]),e._v(".")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2123),alt:"Salesforce show account command",width:"960",height:"484"}}),e._v(" "),o("em",[e._v("Salesforce show account command")])],1),e._v(" "),o("p",[e._v("When the "),o("code",[e._v("Salesforce show account")]),e._v(" command is called, either via the button click or the typed command, a corresponding recipe with a Workbot for Slack "),o("strong",[e._v("new command trigger")]),e._v(" will trigger. This recipe will have a Workbot "),o("strong",[e._v("New command")]),e._v(" trigger that listens specifically to the command "),o("code",[e._v("Salesforce show account")]),e._v(". The "),o("a",{attrs:{href:"https://www.workato.com/recipes/57662",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built Workbot for Slack recipe"),o("OutboundLink")],1),e._v(" that does this can be found below.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2124),alt:"Salesforce show account command recipe",width:"1590",height:"960"}}),e._v(" "),o("em",[e._v("Salesforce show account command recipe "),o("a",{attrs:{href:"https://www.workato.com/recipes/57662",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example recipe"),o("OutboundLink")],1)])],1),e._v(" "),o("p",[e._v("The trigger configuration for the "),o("code",[e._v("Salesforce show account")]),e._v(" command is as follows.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2125),alt:"Salesforce show account command trigger configuration 1",width:"1488",height:"1084"}})],1),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2126),alt:"Salesforce show account command trigger configuration 2",width:"1484",height:"740"}}),e._v(" "),o("em",[e._v("Salesforce show account command trigger configuration")])],1),e._v(" "),o("p",[e._v("We know that Workbot commands are created by piecing 3 elements together, the "),o("code",[e._v("app")]),e._v(", "),o("code",[e._v("action")]),e._v(" and "),o("code",[e._v("action data")]),e._v('. In this case, application is "Salesforce", command action is "Show", and business data is "Account". The command that Workbot will respond to is therefore '),o("code",[e._v("Salesforce show account")]),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("command input parameters")]),e._v(" field lets you decide what data is needed from the user to carry out the recipe actions successfully. In this case, to successfully retrieve Salesforce account data, we need the full account name from the Slack user, so we define the parameter as follows:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("name optional: false prompt: false type: string hint: Exact account name sample: IBM\n")])])]),o("p",[e._v("The configured command input parameters will be displayed as follow up questions for the user after the Workbot command.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(288),alt:"Salesforce show account input parameters",width:"2558",height:"1154"}}),e._v(" "),o("em",[e._v("Input parameters display on Slack")])],1),e._v(" "),o("p",[e._v("When the user has finished providing all the required input, the recipe actions will be executed. In this case, the recipe action was to display the Salesforce account details as a message attachment in a grid format.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2127),alt:"Salesforce show account command results",width:"2542",height:"696"}}),e._v(" "),o("em",[e._v("Salesforce show account command results")])],1),e._v(" "),o("h2",{attrs:{id:"new-event-trigger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-event-trigger"}},[e._v("#")]),e._v(" New event trigger")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("New event trigger")]),e._v(" executes when the specified event occurs in your Slack workspace. The trigger works with Slack's "),o("a",{attrs:{href:"https://api.slack.com/events-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Events API"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://api.slack.com/messaging/interactivity#components",target:"_blank",rel:"noopener noreferrer"}},[e._v("interactive components"),o("OutboundLink")],1),e._v(" (like block actions & modal submissions). Each trigger subscribes to 1 type of event.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("For events in the Events API, your bot must first be subscribed to the event in Slack.")])])]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2128),alt:"New event trigger",width:"3292",height:"2052"}}),e._v(" "),o("em",[e._v("Workbot for Slack new event trigger")])],1),e._v(" "),o("p",[e._v("By default, this trigger contains a list of the most frequently subscribed events. If the event you're looking for is not on the list, you can switch to "),o("strong",[e._v("Enter custom value")]),e._v(" to manually configure the event.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2129),alt:"Custom event",width:"3292",height:"1948"}}),e._v(" "),o("em",[e._v("Event name points the event to the recipe and is useful in providing context — otherwise, no syntax is enforced")])],1),e._v(" "),o("p",[e._v("You may also choose to generate the event payload by specifying a sample JSON by clicking on "),o("strong",[e._v("Use a sample JSON")]),e._v(" under "),o("strong",[e._v("Event schema")]),e._v(".")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2130),alt:"Event sample JSON",width:"3292",height:"1502"}})],1),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2131),alt:"Custom event JSON",width:"3292",height:"1502"}})],1),e._v(" "),o("p",[e._v("See the list of events you can subscribe to over at Slack's "),o("a",{attrs:{href:"https://api.slack.com/events",target:"_blank",rel:"noopener noreferrer"}},[e._v("API Event Types documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("This trigger is best used with "),o("router-link",{attrs:{to:"/workbot/workbot-custom-bots.html"}},[e._v("custom bots")]),e._v(", as it allows you to specify which bot or workspace events your bot subscribes to. To subscribe to events, "),o("a",{attrs:{href:"https://api.slack.com/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("head over to your bot in Slack"),o("OutboundLink")],1),e._v(" and navigate to "),o("strong",[e._v("Event Subscriptions")]),e._v(". Subscribe to the events you need, then hit "),o("strong",[e._v("Save Changes")]),e._v(".")],1),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2132),alt:"Event subscription",width:"3292",height:"1948"}}),e._v(" "),o("em",[e._v("Event Subscriptions in Slack")])],1),e._v(" "),o("p",[e._v("This trigger can also listen to "),o("a",{attrs:{href:"https://api.slack.com/messaging/interactivity/enabling#understanding_payloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("block action"),o("OutboundLink")],1),e._v(" and block kit modal "),o("a",{attrs:{href:"https://api.slack.com/block-kit/surfaces/modals#handling_submissions",target:"_blank",rel:"noopener noreferrer"}},[e._v("view submission"),o("OutboundLink")],1),e._v(" events. These events get sent to the "),o("strong",[e._v("Interactive Components")]),e._v(" request URL, so if you've already enabled "),o("router-link",{attrs:{to:"/workbot/workbot-custom-bots.html#enabling-interactive-components"}},[e._v("interactive components in your custom bot")]),e._v(", then there's no further action required — you're all set.")],1),e._v(" "),o("h2",{attrs:{id:"new-message-action-trigger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-message-action-trigger"}},[e._v("#")]),e._v(" New message action trigger")]),e._v(" "),o("p",[e._v("This trigger allows you to perform message actions onto existing Slack messages in your Slack team.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(214),alt:"Message action gif",width:"932",height:"694"}})],1),e._v(" "),o("p",[e._v("When triggered, message actions launch a dialog to collect command input fields from the user. The original contents of the message (along with input obtained from the dialog) can be used to create tasks, tickets, and more. To start using message actions, check out our "),o("router-link",{attrs:{to:"/workbot/workbot-message-action.html"}},[e._v("message actions documentation")]),e._v(".")],1),e._v(" "),o("p",[e._v("This trigger allows you to build a custom command for Workbot in a Workato recipe. When you call this custom command in Slack to Workbot, the recipe will trigger and execute the actions you have defined. To find out how to create a simple command, check out "),o("router-link",{attrs:{to:"/workbot/workbot-commands.html"}},[e._v("this guide")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"new-url-mention"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-url-mention"}},[e._v("#")]),e._v(" New URL mention")]),e._v(" "),o("p",[e._v("This trigger monitors certain types of URLs in Slack, and pulls pre-defined, formatted data into the channel when such an URL is mentioned. Currently, Salesforce and Github URLs are supported.")]),e._v(" "),o("p",[e._v("When you send a URL in Slack, you can have Workbot provide certain information into the channel for everyone to see. For example, you can send a Salesforce lead URL into your sales channel and workbot will automatically send a message showing more information about that particular lead.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2133),alt:"workbot triggers",width:"858",height:"457"}})],1),e._v(" "),o("p",[e._v("Simply select the application in the trigger (Currently only Salesforce and Github), and select the Document, and set up your actions as you prefer. By default, giving a Salesforce or Github URL in a channel that Workbot is in will trigger a prompt from Workbot asking you if you want to show details of the content of the URL that you have sent. Click on yes to trigger the recipe. You can also edit the recipe in Workato if you want to have more or less fields included in the message.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2134),alt:"workbot triggers",width:"1080",height:"604"}})],1),e._v(" "),o("h2",{attrs:{id:"new-dynamic-menu-event"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-dynamic-menu-event"}},[e._v("#")]),e._v(" New dynamic menu event")]),e._v(" "),o("p",[e._v("In Workbot command recipes that invoke dialogs, a "),o("code",[e._v("select")]),e._v(" field can be defined with dynamic menu options.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(40),alt:"Dynamic menu",width:"1399",height:"1434"}}),e._v(" "),o("em",[e._v("A Workbot command recipe with dynamic menu options")])],1),e._v(" "),o("p",[e._v("This trigger executes when a user types in such a field, and returns what the user typed (i.e. the "),o("code",[e._v("typeahead")]),e._v(" value). At least 5 characters must be typed to trigger an event.")]),e._v(" "),o("p",[e._v("Use this "),o("code",[e._v("typeahead")]),e._v(" value to retrieve a list of records (from another app, e.g. Salesforce) to return to the main recipe (i.e. the recipe that posts the dialog where the "),o("code",[e._v("select")]),e._v(" field is).")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2135),alt:"Typeahead example",width:"2940",height:"1906"}})],1),e._v(" "),o("p",[e._v("You can return the list of records to the dynamic menu by using the "),o("router-link",{attrs:{to:"/workbot/workbot-actions.html#return-menu-options"}},[e._v("Return menu options")]),e._v(" action. Hence, this trigger should always be paired with a "),o("strong",[e._v("Return menu options")]),e._v(" action.")],1),e._v(" "),o("h3",{attrs:{id:"input"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[e._v("#")]),e._v(" Input")]),e._v(" "),o("h4",{attrs:{id:"dynamic-menu-name"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-menu-name"}},[e._v("#")]),e._v(" Dynamic menu name")]),e._v(" "),o("p",[e._v("Identifier for this menu.")]),e._v(" "),o("h4",{attrs:{id:"command-input-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-input-fields"}},[e._v("#")]),e._v(" Command input fields")]),e._v(" "),o("p",[e._v("A Workbot command recipe with dynamic menu options can pass parameters to a Dynamic menu recipe via the "),o("strong",[e._v("Dynamic menu recipe params")]),e._v(" field. The dynamic menu recipe can use these additional parameters in generating menu options.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2136),alt:"Dynamic menu recipe params",width:"1400",height:"1168"}}),e._v(" "),o("em",[e._v("A Workbot command recipe with a dynamic menu options field passing a 'stagename' parameter with value 'Closed Won'")])],1),e._v(" "),o("p",[e._v("Correspondingly, the trigger must also have the same parameter defined.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2137),alt:"Params in dynamic menu trigger",width:"3038",height:"1100"}}),e._v(" "),o("em",[e._v("The corresponding dynamic menu recipe with the same 'stagename' parameter defined")])],1),e._v(" "),o("p",[e._v("The dynamic menu recipe is then able to utilize the additional parameters in generating menu options. In the example below, the parameter "),o("code",[e._v("stagename")]),e._v(" is passed to the dynamic menu recipe, allowing the SOQL search to be further refined.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(2138),alt:"Dynamic menu param example",width:"3040",height:"1997"}}),e._v(" "),o("em",[e._v("'stagename' parameter is passed to refine the SOQL search")])],1),e._v(" "),o("h3",{attrs:{id:"output"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output")]),e._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",{attrs:{colspan:"2"}},[e._v("Fields")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{attrs:{rowspan:"5"}},[e._v("Event context")]),e._v(" "),o("td",[e._v("Team")]),e._v(" "),o("td",[e._v("Team ID and domain where command was invoked.")])]),e._v(" "),o("tr",[o("td",[e._v("User")]),e._v(" "),o("td",[e._v("User ID and name of user who invoked command")])]),e._v(" "),o("tr",[o("td",[e._v("Channel")]),e._v(" "),o("td",[e._v("\n              Channel ID and name where command was invoked.\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("State")]),e._v(" "),o("td",[e._v("\n              System message containing dynamic menu recipe ID and parameter name-value pair.\n            ")])]),e._v(" "),o("tr",[o("td",[e._v("Action ts")]),e._v(" "),o("td",[e._v("\n              Timestamp of when action was invoked.\n            ")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"3"}},[e._v("Typeahead")]),e._v(" "),o("td",[e._v("Name")]),e._v(" "),o("td",[e._v("Name of parameter where dynamic menu event was received from.")])]),e._v(" "),o("td",[e._v("Value")]),e._v(" "),o("td",[e._v("Characters typed by user in the dynamic menu options field.")]),e._v(" "),o("tr",[o("td",[e._v("Callback ID")]),e._v(" "),o("td",[e._v("System message")])]),e._v(" "),o("tr"),e._v(" "),o("tr"),e._v(" "),o("tr",[o("td",{attrs:{colspan:"2"}},[e._v("Parameters")]),e._v(" "),o("td",[e._v("\n              Name-value pairs passed by a Workbot command recipe with dynamic menu options.\n            ")])])])])])}),[],!1,null,null,null);t.default=n.exports},288:function(e,t,a){e.exports=a.p+"assets/img/salesforce-show-account-input-params-display.ca63192d.png"},40:function(e,t,a){e.exports=a.p+"assets/img/dynamic-menu.da27da9b.png"}}]);