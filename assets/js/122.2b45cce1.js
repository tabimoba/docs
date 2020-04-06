(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{2294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"on-prem-command-line-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-command-line-scripts"}},[e._v("#")]),e._v(" On-prem command-line scripts")]),e._v(" "),a("p",[e._v("Enterprises often have on-prem applications and databases that are deployed within their corporate datacenter.")]),e._v(" "),a("p",[e._v("Workato's "),a("code",[e._v("On-prem command-line scripts")]),e._v(" connector allows you to run whitelisted command line scripts in your private network. The command is executed by the on-prem agent. You can whitelist any command that can be run on the machine with the on-prem agent.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(754),alt:"On-prem command-line scripts connector",width:"1650",height:"840"}})],1),e._v(" "),a("h2",{attrs:{id:"setup-and-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-connection"}},[e._v("#")]),e._v(" Setup and connection")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("First, follow the instructions to "),a("router-link",{attrs:{to:"/on-prem/agents/setup.html"}},[e._v("setup an on-prem agent")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Next, find the agent's "),a("code",[e._v("config.yml")]),e._v(" file and "),a("router-link",{attrs:{to:"/on-prem/agents/profile.html#command-line-scripts-profile"}},[e._v("setup a connection profile")]),e._v(" for "),a("code",[e._v("On-prem command-line scripts")]),e._v(". Following the example provided in the documentation provided, we have created a profile called "),a("code",[e._v("workday_reports")]),e._v(".")],1)])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("router-link",{attrs:{to:"/on-prem/agents/run.html"}},[e._v("Run the on-prem agent")]),e._v(". Then check your "),a("a",{attrs:{href:"https://www.workato.com/on_prem_groups",target:"_blank",rel:"noopener noreferrer"}},[e._v("on-prem agent management page"),a("OutboundLink")],1),e._v(" and make sure your agent is "),a("code",[e._v("Active")]),e._v(".")],1)]),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(755),alt:"On-prem agent management page",width:"2662",height:"1194"}})],1),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("After the agent is active, you will be able to setup Workato's "),a("code",[e._v("On-prem files")]),e._v(" connector. Input the connection profile name and select an On-prem agent, in this case, "),a("code",[e._v("workday_reports")]),e._v(" and "),a("code",[e._v("On-prem command-line scripts")]),e._v(".")])]),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(756),alt:"On-prem files connection setup",width:"1516",height:"1398"}})],1),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Click on "),a("code",[e._v("Link your account")]),e._v(". If everything is setup correctly, you will see a "),a("code",[e._v("Connection success")]),e._v(" message.")])]),e._v(" "),a("h2",{attrs:{id:"execute-command-line-script-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execute-command-line-script-action"}},[e._v("#")]),e._v(" Execute command-line script action")]),e._v(" "),a("h3",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[e._v("#")]),e._v(" Command")]),e._v(" "),a("p",[e._v("The commands listed in the on-prem agent's "),a("code",[e._v("config.yml")]),e._v(" file are the only ones that can be invoked with this connector. The commands are whitelisted when you include them in this file. View how to setup a connection profile "),a("router-link",{attrs:{to:"/on-prem/agents/profile.html#command-line-scripts-profile"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"input-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-parameters"}},[e._v("#")]),e._v(" Input parameters")]),e._v(" "),a("p",[e._v("The input parameters should be specified when creating your profile in the on-prem agent's "),a("code",[e._v("config.yml")]),e._v(" file. In the example below, two parameters, "),a("code",[e._v("target_directory")]),e._v(" and "),a("code",[e._v("source_file")]),e._v(" were specified. View how to setup a connection profile "),a("router-link",{attrs:{to:"/on-prem/agents/profile.html#command-line-scripts-profile"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(757),alt:"Parameters specified in yml",width:"1144",height:"534"}}),e._v(" "),a("em",[e._v("Input parameters in the agent's config.yml file")])],1),e._v(" "),a("p",[e._v("Correspondingly, after selecting the command-line script 'Append file to another' in your recipe, the 2 parameters appear in the script input as required values as shown below:")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(758),alt:"Parameters on Workato recipe",width:"2202",height:"1100"}}),e._v(" "),a("em",[e._v("Input parameters in the recipe")])],1),e._v(" "),a("p",[e._v("In the fields, you should provide data pills or static data that you wish to use in your command-line script.")]),e._v(" "),a("h3",{attrs:{id:"other-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-parameters"}},[e._v("#")]),e._v(" Other parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Timeout")]),e._v(" "),a("br"),e._v("The "),a("code",[e._v("timeout")]),e._v(" parameter is specified in the "),a("code",[e._v("config.yml")]),e._v(" file. This property is the maximum duration (in seconds) for each script execution. The value of the timeout parameter defaults to 90 seconds when not provided.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Concurrency limit")]),e._v(" "),a("br"),e._v(" The "),a("code",[e._v("concurrency_limit")]),e._v(" parameter is specified in the "),a("code",[e._v("config.yml")]),e._v(" file. This value states the maximum number of concurrently executed scripts and defaults to 10 when not provided. After reaching the limit, requests will be queued until prior scripts are executed.")])])]),e._v(" "),a("h3",{attrs:{id:"escaping-parameter-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#escaping-parameter-values"}},[e._v("#")]),e._v(" Escaping parameter values")]),e._v(" "),a("p",[e._v("To escape parameter values, use an escape character when defining a profile in the on-prem agent's "),a("code",[e._v("config.yml")]),e._v(" file. The escape_char property value is set to "),a("code",[e._v("\\")]),e._v(" on Unix and "),a("code",[e._v('""')]),e._v(" on Windows.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(759),alt:"Parameters specified in yml",width:"1754",height:"952"}}),e._v(" "),a("em",[e._v("Using an escape character")])],1),e._v(" "),a("p",[e._v("In the example shown in the image above, values in the "),a("code",[e._v("target_file")]),e._v(" name can be escaped with a backslash.")]),e._v(" "),a("h3",{attrs:{id:"invocation-styles-synchronous-asynchronous"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invocation-styles-synchronous-asynchronous"}},[e._v("#")]),e._v(" Invocation styles (Synchronous/asynchronous)")]),e._v(" "),a("p",[e._v("To invoke the command asynchronously, scroll to the 'Remove optional fields' dropdown and select the field 'Run script in background?'. Running the command in the background allows the rest of the recipe steps to continue without waiting for the command to complete (asynchronous).")]),e._v(" "),a("p",[e._v("Leave the option blank or select 'No' and the command will run in the foreground (synchronous). The recipe will wait for the command to complete its run before proceeding to the subsequent steps.")]),e._v(" "),a("h3",{attrs:{id:"output-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-data"}},[e._v("#")]),e._v(" Output data")]),e._v(" "),a("p",[e._v("The output of the execute command-line script includes:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Process ID")]),e._v(" "),a("br"),e._v("An ID that is unique to the command-line script that was run.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Exit code")]),e._v(" "),a("br"),e._v("Every command returns an exit code. A successful command returns a 0, while an unsuccessful one returns a non-zero value that is the error code.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("System out")]),e._v(" "),a("br"),e._v("System out shows the message that is returned after the command-line script has run. The message is restricted by a 50k character limit.")])])])])}),[],!1,null,null,null);t.default=r.exports},754:function(e,t,n){e.exports=n.p+"assets/img/on-prem-scripts-action.a19319aa.png"},755:function(e,t,n){e.exports=n.p+"assets/img/on-prem-scripts-activeprofile.e3b7ae0a.png"},756:function(e,t,n){e.exports=n.p+"assets/img/on-prem-scripts-connection.de3c5c5a.png"},757:function(e,t,n){e.exports=n.p+"assets/img/input-parameters-yml2.b3764442.png"},758:function(e,t,n){e.exports=n.p+"assets/img/input-parameters-action2.f37429c5.png"},759:function(e,t,n){e.exports=n.p+"assets/img/input-parameters-yml.55af955f.png"}}]);