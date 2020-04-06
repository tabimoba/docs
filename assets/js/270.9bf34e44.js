(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{1492:function(t,a,e){t.exports=e.p+"assets/img/YAML-parser-by-workato.5476f1d6.png"},1493:function(t,a,e){t.exports=e.p+"assets/img/parse-yaml-in-other-types.c0e484dd.png"},2578:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"handling-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-yaml"}},[t._v("#")]),t._v(" Handling YAML")]),t._v(" "),s("p",[t._v("YAML is a data serialization format that is written in a human-readable language. It stores data as "),s("code",[t._v("key:value")]),t._v(" pairs in a variety of data types. YAML files are an easy way to store, update, and retrieve data that everyone can understand.")]),t._v(" "),s("p",[t._v("We will go through an example of sieving through a YAML file and retrieving the relevant data. We will be using a sample YAML file of Employee information.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("employee_1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Martin Simon\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Technical Manager\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Employed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Introduction_string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        Hi i love to play football\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Responsibilities_list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" sales rep\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" fire safety committee\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" first aid\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Languages_NestedList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("perl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" elite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("python"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Elite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pascal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Fundamental"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Education_dictionary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Bachelors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("School")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UCLA\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Degree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BSc in IoT\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GPA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.3")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PostGrad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("School")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MIT\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Degree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PhD in CS\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GPA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.2")]),t._v("\n")])])]),s("h2",{attrs:{id:"yaml-parser-by-workato"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-parser-by-workato"}},[t._v("#")]),t._v(" YAML parser by Workato")]),t._v(" "),s("p",[t._v("Convert YAML content into useable datapills with the built-in YAML parser. "),s("strong",[t._v("YAML parser by Workato")]),t._v(" is a native application that does not require any connection setup.")]),t._v(" "),s("p",[t._v("Select "),s("strong",[t._v("App")]),t._v(" > "),s("strong",[t._v("YAML parser by Workato")]),t._v(" to get started.")]),t._v(" "),s("p",[t._v("This parser requires you to download the YAML file on to Workato beforehand. You can do so with a connector's built-in download action (e.g. Dropbox) or with "),s("router-link",{attrs:{to:"/handling-files-and-attachments.html"}},[t._v("File by Workato")]),t._v(".")],1),t._v(" "),s("p",[s("DocImage",{attrs:{src:e(1492),alt:"Parse YAML content",width:"2518",height:"2249"}}),t._v(" "),s("em",[t._v("Parse YAML content. See the sample recipe "),s("a",{attrs:{href:"https://www.workato.com/recipes/969549",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])],1),t._v(" "),s("h3",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Input field")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Sample YAML document")]),t._v(" "),s("td",[t._v("The YAML schema of your document. This is used to generate outputs in the datatree.")])]),t._v(" "),s("tr",[s("td",[t._v("YAML content")]),t._v(" "),s("td",[t._v("The file to be parsed.")])])])]),t._v(" "),s("h3",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),s("p",[t._v("Datapills will be generated according to the format defined in the "),s("strong",[t._v("Sample YAML document")]),t._v(". In our example, an array output is generated, with simple datapills ("),s("code",[t._v("name")]),t._v(" and "),s("code",[t._v("title")]),t._v(") and arrays ("),s("code",[t._v("responsibilities list")]),t._v(") and nested objects ("),s("code",[t._v("languages nested list")]),t._v(").")]),t._v(" "),s("h3",{attrs:{id:"working-with-yaml-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-yaml-content"}},[t._v("#")]),t._v(" Working with YAML content")]),t._v(" "),s("p",[t._v("Beside formatting entire files in YAML, it is common to use YAML headers for other file formats. They commonly store metadata like "),s("strong",[t._v("titles")]),t._v(", "),s("strong",[t._v("authors")]),t._v(", and "),s("strong",[t._v("date")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("YAML parser by Workato")]),t._v(" will read through the content between the "),s("code",[t._v("---")]),t._v("..."),s("code",[t._v("---")]),t._v(" boundaries and return them as datapills. All other file content will be ignored.")]),t._v(" "),s("p",[t._v("For example, you may store YAML in a HTML file:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Edinburgh Biodiversity"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" John Doe\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 22/Oct/2016\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" html_document\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("p",[t._v("The recipe will return datapills only for the YAML specified in the action.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:e(1493),alt:"Parse YAML content in other file types",width:"2378",height:"1180"}}),t._v(" "),s("em",[t._v("Parse YAML content in other file types")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);