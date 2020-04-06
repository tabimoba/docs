(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{2262:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jira-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jira-triggers"}},[t._v("#")]),t._v(" Jira triggers")]),t._v(" "),a("p",[t._v("The following Jira triggers can be used to kickstart workflows in your recipes.")]),t._v(" "),a("p",[t._v("To simplify API responses, the Jira REST API uses resource expansion, which means that the API will only return parts of a resource when explicitly requested. Workato automatically fetches and expands all parameters. Learn more about "),a("a",{attrs:{href:"https://developer.atlassian.com/cloud/jira/platform/rest/#expansion",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jira's resource expansion"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"how-jira-real-time-triggers-work-in-workato"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-jira-real-time-triggers-work-in-workato"}},[t._v("#")]),t._v(" How Jira real-time triggers work in Workato")]),t._v(" "),a("p",[t._v("When you use Jira real-time triggers in your recipes, Workato automatically registers a webhook in your Jira instance "),a("strong",[t._v("when the recipe is started")]),t._v(". When the recipe is stopped, "),a("strong",[t._v("the webhook is removed")]),t._v(".")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(637),alt:"Jira webhook registration",width:"1526",height:"554"}}),t._v(" "),a("em",[t._v("Jira webhooks registered by starting recipes")])],1),t._v(" "),a("p",[t._v("Registering & removing webhooks requires Jira administrator global permissions - if your Jira connection doesn't have it, use the "),a("a",{attrs:{href:"https://resources.workato.com/http-connector/#/list/2?_k=5qaw2y",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP webhook trigger"),a("OutboundLink")],1),t._v(" instead.")]),t._v(" "),a("p",[t._v("Regardless of the state of the webhook, Workato continues to run a backup poll running every 6 hours, to pick up any events (related to the recipe trigger). Workato automatically removes any duplicates from the full list of events returned by Jira.")]),t._v(" "),a("h2",{attrs:{id:"new-updated-issue-real-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-issue-real-time"}},[t._v("#")]),t._v(" New/updated issue (real-time)")]),t._v(" "),a("p",[t._v("This trigger picks up issues as soon as they are created/updated. Only issues for which the linked Jira account has sufficient permissions will be retrieved.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(638),alt:"New/updated issue (real time) trigger",width:"1470",height:"1359"}}),t._v(" "),a("em",[t._v("New/updated issue (real-time) trigger")])],1),t._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("The linked Jira account must have Jira administrators global permissions to use this real-time trigger. Learn more in our "),a("router-link",{attrs:{to:"/connectors/jira.html#using-jira-real-time-triggers"}},[t._v("Jira real-time triggers documentation")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("From")]),t._v(" "),a("td",[t._v("\n        Records created after this time will be processed by the recipe. If left blank, the default date will be set to "),a("b",[t._v("one day")]),t._v(" before the recipe is first started.\n      ")])])])]),t._v(" "),a("h3",{attrs:{id:"output-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output Fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Output field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ID")]),t._v(" "),a("td",[t._v("\n        ID of the new/updated issue.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("self")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v(" link to access the full representation of the new/updated issue.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("\n        Key of the new/updated issue.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Fields")]),t._v(" "),a("td",[t._v("\n        Expanded fields of the new/updated issue.\n      ")])])])]),t._v(" "),a("h2",{attrs:{id:"new-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-issue"}},[t._v("#")]),t._v(" New issue")]),t._v(" "),a("p",[t._v("This trigger checks for new issues every 5 minutes. Only issues for which the linked Jira account has sufficient permissions will be retrieved.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(639),alt:"New issue",width:"2204",height:"1904"}}),t._v(" "),a("em",[t._v("New issue trigger")])],1),t._v(" "),a("h3",{attrs:{id:"input-fields-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-2"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("From")]),t._v(" "),a("td",[t._v("\n        Records created after this time will be processed by the recipe. If left blank, the default date will be set to "),a("b",[t._v("one day")]),t._v(" before the recipe is first started.\n      ")])])])]),t._v(" "),a("h3",{attrs:{id:"output-fields-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[t._v("#")]),t._v(" Output Fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Output field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ID")]),t._v(" "),a("td",[t._v("\n        ID of the new issue.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("self")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v(" link to access the full representation of the new issue.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("\n        Key\n      ")]),t._v(" "),a("td",[t._v("\n        Key of the new issue.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Fields")]),t._v(" "),a("td",[t._v("\n        Expanded fields of the new issue.\n      ")])])])]),t._v(" "),a("h2",{attrs:{id:"updated-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updated-issue"}},[t._v("#")]),t._v(" Updated issue")]),t._v(" "),a("p",[t._v("This trigger checks for updated issues every 5 minutes. Only issues for which the linked Jira account has sufficient permissions will be retrieved.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(640),alt:"Updated issue",width:"1618",height:"1938"}}),t._v(" "),a("em",[t._v("Updated issue trigger")])],1),t._v(" "),a("h3",{attrs:{id:"input-fields-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-3"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("From")]),t._v(" "),a("td",[t._v("\n        Records created after this time will be processed by the recipe. If left blank, the default date will be set to "),a("b",[t._v("one day")]),t._v(" before the recipe is first started.\n      ")])])])]),t._v(" "),a("h3",{attrs:{id:"output-fields-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-3"}},[t._v("#")]),t._v(" Output Fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Output field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ID")]),t._v(" "),a("td",[t._v("\n        ID of the updated issue.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("\n        self\n      ")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v(" link to access the full representation of the updated issue.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("\n        Key of the updated issue.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Fields")]),t._v(" "),a("td",[t._v("\n        Expanded fields of the updated issue.\n      ")])])])]),t._v(" "),a("h2",{attrs:{id:"new-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-project"}},[t._v("#")]),t._v(" New project")]),t._v(" "),a("p",[t._v("This trigger checks for new projects every 5 minutes. Only projects for which the linked Jira account has sufficient permissions will be retrieved.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(641),alt:"New project",width:"1470",height:"820"}}),t._v(" "),a("em",[t._v("New project trigger")])],1),t._v(" "),a("h3",{attrs:{id:"input-fields-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-4"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("p",[t._v("No input fields are required.")]),t._v(" "),a("h3",{attrs:{id:"output-fields-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-4"}},[t._v("#")]),t._v(" Output Fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2",width:"25%"}},[t._v("Output field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n        self\n      ")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v(" link to access the full representation of the new project.\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("ID")]),t._v(" "),a("td",[t._v("\n        Project ID of the new project.\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n        Key\n      ")]),t._v(" "),a("td",[t._v("\n        Project key of the new project.\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n        Name\n      ")]),t._v(" "),a("td",[t._v("\n        Name of the new project.\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"2"}},[t._v("\n        Avatar URLs\n      ")]),t._v(" "),a("td",[t._v("48 x 48")]),t._v(" "),a("td",[t._v("URL of new project's 48 x 48 pixel avatar image.")])]),t._v(" "),a("tr",[a("td",[t._v("16 x 16")]),t._v(" "),a("td",[t._v("URL of new project's 16 x 16 pixel avatar image.")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Description")]),t._v(" "),a("td",[t._v("Description of new project")])]),a("tr",[a("td",{attrs:{rowspan:"6"}},[t._v("\n        Lead\n      ")]),t._v(" "),a("td",[t._v("self")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v(" link to access the full representation of the project lead.")])]),t._v(" "),a("tr",[a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("Key of project lead.")])]),t._v(" "),a("tr",[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("Name of project lead.")])]),t._v(" "),a("tr",[a("td",[t._v("Display name")]),t._v(" "),a("td",[t._v("Display name of project lead.")])]),t._v(" "),a("tr",[a("td",[t._v("Project keys")]),t._v(" "),a("td",[t._v("List of project keys.")])]),t._v(" "),a("tr",[a("td",[t._v("Avatar URLs")]),t._v(" "),a("td",[t._v("\n        URLs of project lead's avatar images.\n      ")])])])]),t._v(" "),a("p",[t._v("Workato automatically fetches and expands all project parameters. Learn more about "),a("a",{attrs:{href:"https://developer.atlassian.com/cloud/jira/platform/rest/#expansion",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jira's resource expansion"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"new-updated-comment-real-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-comment-real-time"}},[t._v("#")]),t._v(" New/updated comment (real-time)")]),t._v(" "),a("p",[t._v("This trigger picks up comments as soon as they are created/updated. Only comments for which the linked Jira account has sufficient permissions will be retrieved.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(642),alt:"New/updated comments (real time) trigger",width:"1470",height:"898"}}),t._v(" "),a("em",[t._v("New/updated comment (real-time) trigger")])],1),t._v(" "),a("h3",{attrs:{id:"requirements-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements-2"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("The linked Jira account must have Jira administrators global permissions to use this real-time trigger. Learn more in our "),a("router-link",{attrs:{to:"/connectors/jira.html#using-jira-real-time-triggers"}},[t._v("Jira real-time triggers documentation")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"input-fields-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-5"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("p",[t._v("No input fields are required.")]),t._v(" "),a("h3",{attrs:{id:"output-fields-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-5"}},[t._v("#")]),t._v(" Output Fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2",width:"25%"}},[t._v("Output field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n      self\n    ")]),t._v(" "),a("td",{attrs:{colspan:"2"}},[a("code",[t._v("self")]),t._v(" link to access the full representation of the new/updated comment.\n    ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("ID")]),t._v(" "),a("td",[t._v("\n        ID of the new/updated comment.\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"4"}},[t._v("\n        Author\n      ")]),t._v(" "),a("td",[t._v("self")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v("link to access the full representation of the comment author.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("\n        Name of the comment author.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Display name")]),t._v(" "),a("td",[t._v("Display name of the comment author.")])]),t._v(" "),a("tr",[a("td",[t._v("Active")]),t._v(" "),a("td",[t._v("Boolean."),a("br"),a("code",[t._v("true")]),t._v(" if comment author's account is active,"),a("br"),t._v(" "),a("code",[t._v("false")]),t._v(" if comment author's account is inactive.")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Body")]),t._v(" "),a("td",[t._v("Body of the new/updated comment.")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"4"}},[t._v("\n        Update author\n      ")]),t._v(" "),a("td",[t._v("self")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v("link to access the full representation of the update author.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("\n        Name of the update author.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Display name")]),t._v(" "),a("td",[t._v("Display name of the update author.")])]),t._v(" "),a("tr",[a("td",[t._v("Active")]),t._v(" "),a("td",[t._v("\n        Boolean."),a("br"),a("code",[t._v("true")]),t._v(" if update author's account is active,"),a("br"),t._v(" "),a("code",[t._v("false")]),t._v(" if update author's account is inactive.\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Created")]),t._v(" "),a("td",[t._v("\n      Date/time when comment was created.\n    ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n      Updated\n    ")]),t._v(" "),a("td",[t._v("\n      Date/time when comment was updated.\n    ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"2"}},[t._v("Visibility")]),t._v(" "),a("td",[t._v("type")]),t._v(" "),a("td",[t._v("\n        Type of visibility granted to view comment, e.g. "),a("code",[t._v("role")]),t._v(".\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Value")]),t._v(" "),a("td",[t._v("\n        Value of visibility, e.g. "),a("code",[t._v("administrators")]),t._v(".\n      ")])])])]),t._v(" "),a("h2",{attrs:{id:"new-updated-worklog-real-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-worklog-real-time"}},[t._v("#")]),t._v(" New/updated worklog (real-time)")]),t._v(" "),a("p",[t._v("This trigger picks up worklogs as soon as they are created/updated. Only worklogs for which the linked Jira account has sufficient permissions will be retrieved.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(643),alt:"New/updated worklogs (real-time) trigger",width:"1470",height:"898"}}),t._v(" "),a("em",[t._v("New/updated worklog (real-time) trigger")])],1),t._v(" "),a("h3",{attrs:{id:"requirements-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements-3"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("The linked Jira account must have Jira administrators global permissions to use this real-time trigger. Learn more in our "),a("router-link",{attrs:{to:"/connectors/jira.html#using-jira-real-time-triggers"}},[t._v("Jira real-time triggers documentation")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"input-fields-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-6"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("p",[t._v("No input fields are required.")]),t._v(" "),a("h3",{attrs:{id:"output-fields-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-6"}},[t._v("#")]),t._v(" Output Fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2",width:"25%"}},[t._v("Output field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n        self\n      ")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v(" link to access the full representation of the new/updated worklog,\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("ID")]),t._v(" "),a("td",[t._v("\n          ID of the new/updated worklog.\n        ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Comment")]),t._v(" "),a("td",[t._v("\n        Content of comment added to the worklog.\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"7"}},[t._v("Author")]),t._v(" "),a("td",[t._v("self")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v(" link to access the full representation of the worklog author.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("Name of worklog author.")])]),t._v(" "),a("tr",[a("td",[t._v("Display name")]),t._v(" "),a("td",[t._v("Display name of worklog author.")])]),t._v(" "),a("tr",[a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("Key of worklog author.")])]),t._v(" "),a("tr",[a("td",[t._v("Time Zone")]),t._v(" "),a("td",[t._v("Time zone setting of worklog author.")])]),t._v(" "),a("tr",[a("td",[t._v("Avatar URLs")]),t._v(" "),a("td",[t._v("\n        URLs of worklog author's avatar images.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Active")]),t._v(" "),a("td",[t._v("\n        Boolean."),a("br"),a("code",[t._v("true")]),t._v(" if update author's account is active,"),a("br"),t._v(" "),a("code",[t._v("false")]),t._v(" if update author's account is inactive.\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Body")]),t._v(" "),a("td",[t._v("Body of worklog.")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"7"}},[t._v("\n        Update author\n      ")]),t._v(" "),a("td",[t._v("self")]),t._v(" "),a("td",[a("code",[t._v("self")]),t._v("link to access the full representation of the update author.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("\n        Name of the update author.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Display name")]),t._v(" "),a("td",[t._v("Display name of the update author.")])]),t._v(" "),a("tr",[a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("\n        Key of the update author.\n      ")])]),t._v(" "),a("tr",[a("td",[t._v("Time zone")]),t._v(" "),a("td",[t._v("Time zone setting of update author.")])]),t._v(" "),a("tr",[a("td",[t._v("Avatar URLs")]),t._v(" "),a("td",[t._v("URLs of update author's avatar images.")])]),t._v(" "),a("tr",[a("td",[t._v("Active")]),t._v(" "),a("td",[t._v("\n        Boolean."),a("br"),a("code",[t._v("true")]),t._v(" if update author's account is active,"),a("br"),t._v(" "),a("code",[t._v("false")]),t._v(" if update author's account is inactive.\n      ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Created")]),t._v(" "),a("td",[t._v("\n      Date/time when worklog was created.\n    ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n      Updated\n    ")]),t._v(" "),a("td",[t._v("\n      Date/time when worklog was updated.\n    ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Started")]),t._v(" "),a("td",[t._v("\n      Date/time when worklog was started.\n    ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n      Time spent\n    ")]),t._v(" "),a("td",[t._v("\n      Time spent on worklog in week/hour/day format.\n    ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n      Time spent seconds\n    ")]),t._v(" "),a("td",[t._v("\n      Time spent on worklog in seconds format.\n    ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n      Issue ID\n    ")]),t._v(" "),a("td",[t._v("\n      Issue ID of issue which worklog is associated with.\n    ")])])])])])}),[],!1,null,null,null);e.default=s.exports},637:function(t,e,r){t.exports=r.p+"assets/img/jira-webhook-registration.e1f0836f.png"},638:function(t,e,r){t.exports=r.p+"assets/img/new-updated-issue.33eb3a8f.png"},639:function(t,e,r){t.exports=r.p+"assets/img/new-issue.824427fd.png"},640:function(t,e,r){t.exports=r.p+"assets/img/updated-issue.f2753346.png"},641:function(t,e,r){t.exports=r.p+"assets/img/new-project.ab0db7b7.png"},642:function(t,e,r){t.exports=r.p+"assets/img/new-updated-comment.756e5d93.png"},643:function(t,e,r){t.exports=r.p+"assets/img/new-updated-worklog.f4a87d3d.png"}}]);