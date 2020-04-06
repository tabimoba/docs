(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1743:function(e,t,a){e.exports=a.p+"assets/img/expand-step-group-mapping-icon.042e2315.gif"},1744:function(e,t,a){e.exports=a.p+"assets/img/field-groups.0d2d7ffd.png"},1745:function(e,t,a){e.exports=a.p+"assets/img/mapping-preview.80038a4f.png"},2657:function(e,t,a){"use strict";a.r(t);var i=a(0),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"group-data-mapping"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#group-data-mapping"}},[e._v("#")]),e._v(" Group data mapping")]),e._v(" "),i("p",[e._v("Group data mapping is a useful feature that enables the automatic mapping of fields based on matches between the field name and data pill name. This is especially helpful when there are a large number of fields that need to be mapped (eg. in database applications).")]),e._v(" "),i("p",[e._v("The feature allows a 1-to-1 mapping of fields in a recipe step from a selected data source.")]),e._v(" "),i("h2",{attrs:{id:"activate-the-group-mapping-wizard"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#activate-the-group-mapping-wizard"}},[e._v("#")]),e._v(" Activate the group mapping wizard")]),e._v(" "),i("p",[e._v("To start using the feature, expand the recipe step you want to map. You will notice that a 4th icon, the group data mapping icon appears to the right of your recipe step as shown below. Clicking on the icon activates the group mapping wizard.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1743),alt:"expand step to be mapped",width:"1438",height:"742"}}),e._v(" "),i("em",[e._v("Activate the wizard by clicking on the icon")])],1),e._v(" "),i("p",[e._v("Group data mapping is available on all recipe actions except the trigger.")]),e._v(" "),i("h2",{attrs:{id:"selecting-the-field-group-and-data-source"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#selecting-the-field-group-and-data-source"}},[e._v("#")]),e._v(" Selecting the field group and data source")]),e._v(" "),i("p",[e._v("The wizard shows you the fields and field groups that can be mapped on the left and the available data sources on the right. The available data sources is similar to the app data tree that can be seen when recipe building.")]),e._v(" "),i("p",[e._v("Field groups are fields that appear as nested fields in the recipe UI. They follow the object structure you have in your application. You may select the entire step's fields (including nested fields) or a specific field group. The example below shows the nested fields 'Bill to' and 'Ship to' (highlighted in orange).")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1744),alt:"field groups",width:"2216",height:"1244"}}),e._v(" "),i("em",[e._v("An example of fields and field groups within an action")])],1),e._v(" "),i("p",[e._v("After selecting the fields to be mapped, select the data source the pills should come from. The data sources available are from your Account Properties, the trigger and all recipe steps prior to the one chosen. Similar to field groups, you can choose to map from the output of an entire step, or a nested array within. In the example above, you can see nested data 'Files' in the Salesforce output (highlighted in blue).")]),e._v(" "),i("p",[e._v("After selecting the fields and data source, the wizard will display the matches and will highlight them in bold on both the left and right. It will also show the number of matching fields below the 'Next' button. Click on it to continue.")]),e._v(" "),i("h2",{attrs:{id:"how-data-sources-and-fields-are-matched"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-data-sources-and-fields-are-matched"}},[e._v("#")]),e._v(" How data sources and fields are matched")]),e._v(" "),i("p",[e._v("In the current iteration, the matches between data sources and fields are based on the "),i("strong",[e._v("name/label")]),e._v(" and "),i("strong",[e._v("API name")]),e._v(" of both the field to be mapped and the data pills from the data source.")]),e._v(" "),i("ul",[i("li",[e._v("Matches are case-insensitive")]),e._v(" "),i("li",[e._v("Matches ignore underscores and spaces")]),e._v(" "),i("li",[e._v("All data types (eg. string, integer, boolean etc.) can be matched to each other but arrays cannot be mapped to non-arrays")]),e._v(" "),i("li",[e._v("The pill label and API name will be matched to the field label or API name")]),e._v(" "),i("li",[e._v("The match has to be an exact match minus underscores, spaces and case")])]),e._v(" "),i("h3",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),i("p",[e._v("All examples below refer to the field and data pill labels.")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[i("strong",[e._v("Field")])]),e._v(" "),i("th",[i("strong",[e._v("Data pill")])]),e._v(" "),i("th",[i("strong",[e._v("Match?")])]),e._v(" "),i("th",[i("strong",[e._v("Explanation")])])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Account name")]),e._v(" "),i("td",[e._v("Account name")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Exact match")])]),e._v(" "),i("tr",[i("td",[e._v("ACCOUNT NAME")]),e._v(" "),i("td",[e._v("account name")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Case is ignored")])]),e._v(" "),i("tr",[i("td",[e._v("account_name")]),e._v(" "),i("td",[e._v("accountname")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Underscores and spaces are ignored")])]),e._v(" "),i("tr",[i("td",[e._v("Account_name")]),e._v(" "),i("td",[e._v("accountname_c")]),e._v(" "),i("td",[e._v("No")]),e._v(" "),i("td",[e._v("accountname_c has an extra character 'c'")])])])]),e._v(" "),i("h2",{attrs:{id:"data-mapping-preview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-mapping-preview"}},[e._v("#")]),e._v(" Data mapping preview")]),e._v(" "),i("p",[e._v("The second screen in the wizard will show you the fields that have successfully matched with data pills of the same name and data type. Check that the mappings are indeed the ones you are looking for. Then, using the checkboxes on the left, select or deselect all the fields you wish to map.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1745),alt:"mapping preview",width:"2548",height:"1484"}}),e._v(" "),i("em",[e._v("Data mapping preview")])],1),e._v(" "),i("p",[e._v("Click on the 'Apply mappings' button and the pills will be automatically mapped in the fields. You can edit any mappings in the recipe.")])])}),[],!1,null,null,null);t.default=s.exports}}]);