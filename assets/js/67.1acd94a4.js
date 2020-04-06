(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1308:function(e,t,a){e.exports=a.p+"assets/img/send-request-action.5c78688a.png"},1309:function(e,t,a){e.exports=a.p+"assets/img/step1-provide-request-url.4bcbe463.png"},1310:function(e,t,a){e.exports=a.p+"assets/img/step1-configured-method-and-url.253116f9.gif"},1311:function(e,t,a){e.exports=a.p+"assets/img/step2-recipeiq-recommendation.605d8797.png"},1312:function(e,t,a){e.exports=a.p+"assets/img/step2-unconfigured.07591912.png"},1313:function(e,t,a){e.exports=a.p+"assets/img/request-error.c6a25d49.png"},1314:function(e,t,a){e.exports=a.p+"assets/img/request-success.ce16be3d.png"},1315:function(e,t,a){e.exports=a.p+"assets/img/configuration-applied.832dfb99.gif"},1316:function(e,t,a){e.exports=a.p+"assets/img/replace-static-values-with-datapills.aefae9e3.gif"},1317:function(e,t,a){e.exports=a.p+"assets/img/completed-http-action.87f8542d.gif"},2519:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"building-a-http-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-a-http-action"}},[e._v("#")]),e._v(" Building a HTTP action")]),e._v(" "),s("p",[e._v("After you have setup your "),s("router-link",{attrs:{to:"/developing-connectors/http/connection-setup.html"}},[e._v("HTTP connection")]),e._v(", you can now configure HTTP actions.")],1),e._v(" "),s("p",[e._v("You can build any actions supported by an API on the HTTP connector (for example, "),s("code",[e._v("GET")]),e._v(", "),s("code",[e._v("POST")]),e._v(", or "),s("code",[e._v("DELETE")]),e._v(" actions).")]),e._v(" "),s("p",[e._v("To start, give your request a name to identify it. This also changes the Workato action name at the recipe-level.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1308),alt:"Provide request name",width:"2505",height:"1750"}}),e._v(" "),s("em",[e._v("Provide request name")])],1),e._v(" "),s("h2",{attrs:{id:"workato-http-wizard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workato-http-wizard"}},[e._v("#")]),e._v(" Workato HTTP wizard")]),e._v(" "),s("p",[e._v("Workato has a 3-step HTTP wizard that prompts you to make a test request to the API endpoint. This wizard will try to provide a recommended HTTP configuration for your endpoint wherever possible.")]),e._v(" "),s("p",[e._v("Click "),s("code",[e._v("Start guided setup")]),e._v(" to begin.")]),e._v(" "),s("blockquote",[s("p",[e._v("You may exit this setup wizard at any point if you wish to configure the action manually.")])]),e._v(" "),s("h3",{attrs:{id:"example-http-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-http-action"}},[e._v("#")]),e._v(" Example HTTP action")]),e._v(" "),s("p",[e._v("We will be going through an example of building a HTTP action using the Workato HTTP wizard - "),s("strong",[e._v("Create venue in Eventbrite")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"step-1-provide-http-method-and-request-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-provide-http-method-and-request-url"}},[e._v("#")]),e._v(" Step 1: Provide HTTP method and request URL")]),e._v(" "),s("p",[e._v("To begin, provide the absolute API endpoint you wish to call, and the HTTP method of that endpoint. These should be available via the app's API documentation.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1309),alt:"Step 1: Provide HTTP method and request URL",width:"2519",height:"1302"}}),e._v(" "),s("em",[e._v("Step 1: Provide HTTP method and request URL")])],1),e._v(" "),s("p",[e._v("In this example, we wish to create a venue in Eventbrite. When referring to the documentation, we see that this API is a "),s("code",[e._v("POST")]),e._v(" call with an endpoint of "),s("code",[e._v("https://www.eventbriteapi.com/v3/venues/")]),e._v(". We'll fill out the fields as follows.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1310),alt:"Configuring HTTP method and request URL",width:"832",height:"439"}}),e._v(" "),s("em",[e._v("Configuring HTTP method and request URL")])],1),e._v(" "),s("h2",{attrs:{id:"step-2-configure-and-send-sample-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configure-and-send-sample-request"}},[e._v("#")]),e._v(" Step 2: Configure and send sample request")]),e._v(" "),s("p",[e._v("Here, you configure the sample request to send to the API endpoint.")]),e._v(" "),s("p",[e._v("For some endpoints, Workato recommends a sample request to send, which you can either choose to customize further or remove entirely to build it from scratch.")]),e._v(" "),s("p",[e._v("In our example, Workato recommends a sample request body for Eventbrite's create venue endpoint, which we'll choose to use.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1311),alt:"Step 2: RecipeIQ recommendations for HTTP configuration",width:"2523",height:"2374"}}),e._v(" "),s("em",[e._v("Step 2: RecipeIQ recommendations for HTTP configuration")])],1),e._v(" "),s("p",[e._v("For endpoints which Workato has not seen before, or if you chose to remove RecipeIQ recommendations, you'll see the following screen.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1312),alt:"Step 2: Configure and send sample request",width:"2537",height:"2952"}}),e._v(" "),s("em",[e._v("Step 2: Configure and send sample request")])],1),e._v(" "),s("p",[e._v("You can copy and paste sample request JSON from the API docs to create your sample request body and add required headers.")]),e._v(" "),s("p",[e._v("To create a sample Eventbrite venue, we used the recommended JSON request body and added values for Madison Square Garden:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"venue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Madison Square Garden"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"address_1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"4 Pennsylvania Plaza"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"city"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"New York City"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"region"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"postal_code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"country"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"USA"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[s("em",[e._v('Note: there is an incorrect input value for "'),s("strong",[e._v("country")]),e._v('" in this sample request')])]),e._v(" "),s("p",[e._v("Once all required fields are filled in, we're able to click "),s("code",[e._v("Send request")]),e._v(". Workato sends the request you've built to the app, and provides the full response back. In the following, we see that there's an error with the country we sent to Eventbrite as they only accept 2 character country codes.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1313),alt:"Request error due to wrong country code value",width:"2513",height:"1472"}}),e._v(" "),s("em",[e._v("Request error due to wrong country code value")])],1),e._v(" "),s("p",[e._v('Changing the country value from "USA" to "US" should resolve that. Click on '),s("code",[e._v("Back")]),e._v(" to edit the JSON request, then on "),s("code",[e._v("Send request")]),e._v(" again. Our request should be successful this time.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1314),alt:"Request successful",width:"2491",height:"2011"}}),e._v(" "),s("em",[e._v("Request successful")])],1),e._v(" "),s("p",[e._v("Check the connected application to see if your changes are successfully reflected on the system. In our example, we should see that the venue Madison Square Garden has been added to our Eventbrite venues list.")]),e._v(" "),s("h2",{attrs:{id:"step-3-review-http-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-review-http-configuration"}},[e._v("#")]),e._v(" Step 3: Review HTTP configuration")]),e._v(" "),s("p",[e._v("With a successful request, we know that:")]),e._v(" "),s("ul",[s("li",[e._v("the connection has been set up successfully,")]),e._v(" "),s("li",[e._v("the API endpoint we're sending our request to is correct, and")]),e._v(" "),s("li",[e._v("we're sending the right set of request body fields e.g. all required fields with valid values")])]),e._v(" "),s("p",[e._v("We can choose to customize our request further by going back to Step 2 to configure our request and sending another sample request. When we're happy with the configuration, click "),s("code",[e._v("Apply configuration")]),e._v(". The request and response will be saved to the Workato HTTP action, and the HTTP wizard returns you to the recipe page.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1315),alt:"Configuration applied for HTTP action",width:"919",height:"688"}}),e._v(" "),s("em",[e._v("Configuration applied for HTTP action")])],1),e._v(" "),s("h2",{attrs:{id:"final-http-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#final-http-configuration"}},[e._v("#")]),e._v(" Final HTTP configuration")]),e._v(" "),s("p",[e._v("We know that this configuration works - now it's time to replace the static values with datapills that hold dynamic values.")]),e._v(" "),s("p",[e._v('In this example, we want each job to automatically create a new venue that had been created in Salesforce - not to create multiple instances of "Madison Square Garden"!')]),e._v(" "),s("p",[e._v("You should do the same for any values that should be dynamic instead of static.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1316),alt:"Replace static values with datapills",width:"919",height:"516"}}),e._v(" "),s("em",[e._v("Replace static values with datapills")])],1),e._v(" "),s("p",[e._v("This is what the HTTP configuration should look like after I've put in my relevant datapills. This HTTP action is now ready to be used!")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1317),alt:"Completed HTTP action",width:"919",height:"516"}}),e._v(" "),s("em",[e._v("Completed HTTP action")])],1),e._v(" "),s("h2",{attrs:{id:"output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output")]),e._v(" "),s("p",[e._v("The output of this HTTP action depends on the "),s("strong",[e._v("response body schema")]),e._v(" defined in your HTTP configuration.")]),e._v(" "),s("h2",{attrs:{id:"http-setup-documentation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-setup-documentation"}},[e._v("#")]),e._v(" HTTP setup documentation")]),e._v(" "),s("p",[e._v("You can also browse the other chapters:")]),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/developing-connectors/http/connection-setup.html"}},[e._v("Setting up a connection to your app")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/developing-connectors/http/building-http-trigger.html"}},[e._v("Building a HTTP trigger")])],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);