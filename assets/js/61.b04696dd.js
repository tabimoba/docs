(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{2252:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"jdbc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jdbc"}},[t._v("#")]),t._v(" JDBC")]),t._v(" "),n("p",[t._v("Connect to any ANSI-compliant database using this connector using a JDBC driver.")]),t._v(" "),n("h2",{attrs:{id:"supported-databases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supported-databases"}},[t._v("#")]),t._v(" Supported databases")]),t._v(" "),n("p",[t._v("All ANSI-compliant databases with a JDBC driver")]),t._v(" "),n("h2",{attrs:{id:"how-to-connect-to-jdbc-on-workato"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-jdbc-on-workato"}},[t._v("#")]),t._v(" How to connect to JDBC on Workato")]),t._v(" "),n("p",[t._v("To create a connection to a JDBC source, you "),n("strong",[t._v("must")]),t._v(" use an "),n("router-link",{attrs:{to:"/on-prem.html"}},[t._v("On-premise agent")]),t._v(". The JDBC connector uses JDBC authentication through an On-premise agent to establish a secure connection with your JDBC driver. Learn how to configure an "),n("router-link",{attrs:{to:"/on-prem/agents/profile.html#jdbc-profile"}},[t._v("on-premise agent profile")]),t._v(" to connect to a JDBC-compliant database.")],1),t._v(" "),n("p",[t._v("The JDBC connector only supports ANSI-compliant databases like "),n("strong",[t._v("Snowflake")]),t._v(" and "),n("strong",[t._v("SAP HANA")]),t._v(". The database should support binding variables to be able to use some actions such as "),n("strong",[t._v("INSERT")]),t._v(".")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(580),alt:"JDBC connection using on-premise agent",width:"1163",height:"568"}}),t._v(" "),n("em",[t._v("JDBC connection using on-premise agent")])],1),t._v(" "),n("table",{staticClass:"unchanged rich-diff-level-one"},[n("thead",[n("tr",[n("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Connection name")]),t._v(" "),n("td",[t._v("Give this JDBC connection a unique name that identifies which JDBC instance it is connected to.")])]),t._v(" "),n("tr",[n("td",[t._v("On-prem secure agent")]),t._v(" "),n("td",[t._v("Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the "),n("a",{attrs:{href:"/on-prem.html"}},[t._v("On-premise agent")]),t._v(" guide for more information.")])]),t._v(" "),n("tr",[n("td",[t._v("On-prem connection profile")]),t._v(" "),n("td",[t._v("Profile name of the database you wish to connect to. This should be predefined in your "),n("code",[t._v("config.yml")]),t._v(" file in your On-premise agent.")])]),t._v(" "),n("tr",[n("td",[t._v("Schema")]),t._v(" "),n("td",[n("b",[t._v("Optional")]),t._v(" Name of the schema you wish to use in this connection.")])])])]),t._v(" "),n("h2",{attrs:{id:"working-with-the-jdbc-connector"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-jdbc-connector"}},[t._v("#")]),t._v(" Working with the JDBC connector")]),t._v(" "),n("h3",{attrs:{id:"table-and-view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-and-view"}},[t._v("#")]),t._v(" Table and view")]),t._v(" "),n("p",[t._v("The JDBC connector works with all tables and views available to the credentials used to establish the connection. These are available in pick lists in each trigger/action, or you can provide the exact name.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(581),alt:"Table selection from pick list",width:"1095",height:"428"}}),t._v(" "),n("em",[t._v("Select a table/view from pick list")])],1),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(582),alt:"Exact table name provided",width:"1088",height:"423"}}),t._v(" "),n("em",[t._v("Provide exact table/view name in a text field")])],1),t._v(" "),n("p",[t._v("Case sensitivity of the name of a table/view depends on your database implementation.")]),t._v(" "),n("h3",{attrs:{id:"single-row-vs-batch-of-rows"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-row-vs-batch-of-rows"}},[t._v("#")]),t._v(" Single row vs batch of rows")]),t._v(" "),n("p",[t._v("JDBC connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum batch size.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(583),alt:"Batch trigger inputs",width:"1084",height:"516"}}),t._v(" "),n("em",[t._v("Batch trigger inputs")])],1),t._v(" "),n("p",[t._v("Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(584),alt:"Single row output",width:"402",height:"504"}}),t._v(" "),n("em",[t._v("Single row output")])],1),t._v(" "),n("p",[t._v("However, a trigger that processes rows in batches will output them as an array of rows. The "),n("kbd",[t._v("Rows")]),t._v(" datapill indicates that the output is a list containing data for each row in that batch.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(585),alt:"Batch trigger output",width:"402",height:"525"}}),t._v(" "),n("em",[t._v("Batch trigger output")])],1),t._v(" "),n("p",[t._v("As a result, the output of batch triggers/actions needs to be handled differently. The output of the trigger can be used in actions with batch operations (like Salesforce "),n("strong",[t._v("Create objects in bulk action")]),t._v(") that requires mapping the "),n("kbd",[t._v("Rows")]),t._v(" datapill into the source list. Learn how to work with lists in "),n("router-link",{attrs:{to:"/features/list-management.html#using-datapills-in-an-action-with-a-list-input-action-handles-list-processing-implicitly"}},[t._v("List management")]),t._v(".")],1),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(586),alt:"Using batch trigger output",width:"1094",height:"644"}}),t._v(" "),n("em",[t._v("Using batch trigger output")])],1),t._v(" "),n("h3",{attrs:{id:"where-condition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[t._v("#")]),t._v(" WHERE condition")]),t._v(" "),n("p",[t._v("This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:")]),t._v(" "),n("ul",[n("li",[t._v("filter rows to be picked up in triggers")]),t._v(" "),n("li",[t._v("filter rows in "),n("strong",[t._v("Select rows")]),t._v(" action")]),t._v(" "),n("li",[t._v("filter rows to be deleted in "),n("strong",[t._v("Delete rows")]),t._v(" action")])]),t._v(" "),n("p",[t._v("This clause will be used as a "),n("code",[t._v("WHERE")]),t._v(" statement in each request. This should follow basic SQL syntax.")]),t._v(" "),n("h4",{attrs:{id:"simple-statements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-statements"}},[t._v("#")]),t._v(" Simple statements")]),t._v(" "),n("p",[t._v("String values must be enclosed in single quotes ("),n("code",[t._v("''")]),t._v(") and columns used must exist in the table/view.")]),t._v(" "),n("p",[t._v("A simple "),n("code",[t._v("WHERE")]),t._v(" condition to filter rows based on values in a single column looks like this.")]),t._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[t._v("currency "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'USD'")]),t._v("\n")])])]),n("p",[t._v("If used in a "),n("strong",[t._v("Select rows")]),t._v(" action, this "),n("code",[t._v("WHERE")]),t._v(" condition will return all rows that has the value 'USD' in the "),n("code",[t._v("currency")]),t._v(" column. Just remember to wrap datapills with single quotes in your inputs.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(587),alt:"Using datapills in WHERE condition",width:"1258",height:"226"}}),t._v(" "),n("em",[t._v("Using datapills in "),n("code",[t._v("WHERE")]),t._v(" condition")])],1),t._v(" "),n("p",[t._v("Column names with spaces must be enclosed in double quotes ("),n("code",[t._v('""')]),t._v(") or square brackets ("),n("code",[t._v("[]")]),t._v("). For example, "),n("strong",[t._v("currency code")]),t._v(" must to enclosed in brackets to be used as an identifier.")]),t._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("currency code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'USD'")]),t._v("\n")])])]),n("p",[n("DocImage",{attrs:{src:a(588),alt:"WHERE condition with enclosed identifier",width:"1244",height:"226"}}),t._v(" "),n("em",[n("code",[t._v("WHERE")]),t._v(" condition with enclosed identifier")])],1),t._v(" "),n("h4",{attrs:{id:"complex-statements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#complex-statements"}},[t._v("#")]),t._v(" Complex statements")]),t._v(" "),n("p",[t._v("Your "),n("code",[t._v("WHERE")]),t._v(" condition can also contain subqueries. The example below selects inactive employees from the "),n("code",[t._v("compensation")]),t._v(" table (presumably to ensure they're not accidentally compensated).")]),t._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" compensation_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" users "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" active "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("When used in a "),n("strong",[t._v("Select rows")]),t._v(" action, this will select all rows in the "),n("code",[t._v("compensation")]),t._v(" table related to users who are no longer active ("),n("code",[t._v("active = 0")]),t._v(").")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(589),alt:"Using subquery in WHERE condition",width:"1094",height:"564"}}),t._v(" "),n("em",[t._v("Using subquery in WHERE condition")])],1)])}),[],!1,null,null,null);e.default=s.exports},580:function(t,e,a){t.exports=a.p+"assets/img/connection.d6490b5f.png"},581:function(t,e,a){t.exports=a.p+"assets/img/table_pick_list.237ba3c7.png"},582:function(t,e,a){t.exports=a.p+"assets/img/table_name_text.7dc6aa8e.png"},583:function(t,e,a){t.exports=a.p+"assets/img/batch_trigger_input.e749073c.png"},584:function(t,e){t.exports="data:image/png;base64,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"},585:function(t,e,a){t.exports=a.p+"assets/img/batch_trigger_output.6d8c861f.png"},586:function(t,e,a){t.exports=a.p+"assets/img/using_batch_output.65cc636c.png"},587:function(t,e,a){t.exports=a.p+"assets/img/use_datapill_in_where.c2d4e1c6.png"},588:function(t,e,a){t.exports=a.p+"assets/img/where-condition-with-enclosed-identifier.74cf9ada.png"},589:function(t,e,a){t.exports=a.p+"assets/img/subquery-in-where-condition.fae81778.png"}}]);