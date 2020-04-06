(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{2188:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"analytics-cloud"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#analytics-cloud"}},[t._v("#")]),t._v(" Analytics Cloud")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.salesforce.com/products/einstein-analytics/features/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Analytics Cloud"),e("OutboundLink")],1),t._v(" is a cloud based analytic tool that creates powerful visualizations and dashboards from large sets of enterprise data. It is previously known as Wave Analytics.")]),t._v(" "),e("p",[t._v("Workato makes use of the standard Saleforce connector to upload data from external sources like ERP systems or databases.")]),t._v(" "),e("h2",{attrs:{id:"connector-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connector-information"}},[t._v("#")]),t._v(" Connector information")]),t._v(" "),e("p",[t._v("Refer to the "),e("router-link",{attrs:{to:"/connectors/salesforce.html"}},[t._v("Salesforce connector")]),t._v(" page for connector information.")],1),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("h3",{attrs:{id:"insights-external-data-and-insights-external-data-part"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insights-external-data-and-insights-external-data-part"}},[t._v("#")]),t._v(" Insights External Data and Insights External Data Part")]),t._v(" "),e("p",[t._v("The InsightsExternalData object allows you to upload data from external sources. This object is used to provide "),e("code",[t._v("metadata")]),t._v(", and manage the upload process actions like "),e("code",[t._v("start")]),t._v(", "),e("code",[t._v("cancel")]),t._v(", "),e("code",[t._v("cleanup")]),t._v(" and "),e("code",[t._v("check status")]),t._v(".")]),t._v(" "),e("p",[t._v("The InsightsExternalData object is used together with the InsightsExternalDataPart object (which contains one or more subsets of the entire data to be uploaded). Together, they can be used to programmatically upload large datasets in parts. Finally, an upload is triggered to process the data parts into a dataset in your Analytics Cloud instance.")]),t._v(" "),e("p",[t._v("More information is available from the "),e("a",{attrs:{href:"https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_object_externaldatapart.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Analytics External Data API Developer Guide"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"insights-external-data-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insights-external-data-object"}},[t._v("#")]),t._v(" Insights External Data Object")]),t._v(" "),e("p",[t._v("Data uploads must be accompanied by JSON Metadata definition and must be base64 encoded. More information is available from the "),e("a",{attrs:{href:"https://developer.salesforce.com/docs/atlas.en-us.206.0.bi_dev_guide_ext_data_format.meta/bi_dev_guide_ext_data_format/bi_ext_data_schema_reference.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("External Data Format Reference"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"data-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-format"}},[t._v("#")]),t._v(" Data Format")]),t._v(" "),e("p",[t._v("The following is an example dataset in CSV format.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Id,Email,Name\n123,john@doe.com,John Doe\n124,marry@poppins.com,Mary Poppins\n")])])]),e("p",[t._v("CSV data guidelines are available "),e("a",{attrs:{href:"https://developer.salesforce.com/docs/atlas.en-us.206.0.bi_dev_guide_ext_data_format.meta/bi_dev_guide_ext_data_format/bi_ext_data_schema_overview.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"metadata-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata-json"}},[t._v("#")]),t._v(" Metadata JSON")]),t._v(" "),e("p",[t._v("The following is an example of the metadata in JSON format.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fileFormat"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"charsetName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fieldsEnclosedBy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fieldsDelimitedBy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"numberOfLinesToIgnore"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"objects"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connector"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wave_Analytics_Sample"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullyQualifiedName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lead"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lead"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lead"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fields"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullyQualifiedName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lead.Id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lead ID"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isSystemField"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isUniqueId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isMultiValue"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Text"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullyQualifiedName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lead.Email"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lead Email"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Email"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isSystemField"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isUniqueId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isMultiValue"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Text"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullyQualifiedName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lead.Name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lead Name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isSystemField"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isUniqueId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Text"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("h3",{attrs:{id:"insights-external-data-part-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insights-external-data-part-object"}},[t._v("#")]),t._v(" Insights External Data Part Object")]),t._v(" "),e("p",[t._v("Requirements:")]),t._v(" "),e("ul",[e("li",[t._v("Create InsightsExternalDataPart objects (<10MB each)")]),t._v(" "),e("li",[t._v("External data must be in form of CSV file and base64 encoded.")])]),t._v(" "),e("h3",{attrs:{id:"initiate-data-upload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initiate-data-upload"}},[t._v("#")]),t._v(" Initiate data upload")]),t._v(" "),e("p",[t._v("After successfully completing all desired Insights External Data Parts, Update the "),e("code",[t._v("Requested Action")]),t._v(' field in the InsightsExternalData record to "Process".')]),t._v(" "),e("h3",{attrs:{id:"managing-upload-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#managing-upload-process"}},[t._v("#")]),t._v(" Managing upload process")]),t._v(" "),e("p",[t._v("After initiating a data upload process (updating "),e("code",[t._v("Requested Action")]),t._v(' field to "Process"), no more edits are allowed on the objects, except to request a cancelation.')]),t._v(" "),e("h2",{attrs:{id:"example-recipe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-recipe"}},[t._v("#")]),t._v(" Example recipe")]),t._v(" "),e("p",[t._v("Let's put everything together into the following recipe.")]),t._v(" "),e("p",[e("DocImage",{attrs:{src:s(440),alt:"Analytics Cloud sample recipe",width:"2114",height:"1412"}}),t._v(" "),e("em",[t._v("Analytics Cloud recipe. "),e("a",{attrs:{href:"https://www.workato.com/recipes/607500",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example recipe"),e("OutboundLink")],1)])],1),t._v(" "),e("p",[t._v("This recipe performs a daily upload from SQL Server database to a dataset in Analytics Cloud. The recipe can be broken down to the various steps mentioned before.")]),t._v(" "),e("ol",[e("li",[t._v("Retrieving data from external data source")]),t._v(" "),e("li",[t._v("Defining a metadata JSON")]),t._v(" "),e("li",[t._v("Preparing data from external data source into CSV format")]),t._v(" "),e("li",[t._v("Create an External Data record")]),t._v(" "),e("li",[t._v("Upload Insights External Data Part(s)")]),t._v(" "),e("li",[t._v("Initial upload process by updating "),e("code",[t._v("Requested Action")]),t._v(' field to "Process" in External Data record.')])])])}),[],!1,null,null,null);a.default=r.exports},440:function(t,a,s){t.exports=s.p+"assets/img/analytics-cloud-sample-recipe.0d4011ab.png"}}]);