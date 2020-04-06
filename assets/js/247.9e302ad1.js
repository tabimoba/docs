(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{2321:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oracle-new-updated-row-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-new-updated-row-triggers"}},[t._v("#")]),t._v(" Oracle - New/updated row triggers")]),t._v(" "),a("h2",{attrs:{id:"new-updated-row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-row"}},[t._v("#")]),t._v(" New/updated row")]),t._v(" "),a("p",[t._v("This trigger picks up rows that are inserted/updated in the selected table or view. Each row is processed as a separate job. It checks for new/updated rows once every poll interval.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(818),alt:"New/updated row trigger",width:"2133",height:"1806"}}),t._v(" "),a("em",[t._v("New/updated row trigger")])],1),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#table"}},[t._v("Table")])]),t._v(" "),a("td",[t._v("\n        First, select a table/view to process rows from.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#unique-key"}},[t._v("Unique key")])]),t._v(" "),a("td",[t._v("\n        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#sort-column"}},[t._v("Sort column")])]),t._v(" "),a("td",[t._v("\n        Now, select a column to identify updated rows.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#where-condition"}},[t._v("WHERE condition")])]),t._v(" "),a("td",[t._v("\n        Finally, provide an optional "),a("code",[t._v("WHERE")]),t._v(" condition to filter rows.\n      ")])])])]),t._v(" "),a("h2",{attrs:{id:"new-updated-batch-of-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-batch-of-rows"}},[t._v("#")]),t._v(" New/updated batch of rows")]),t._v(" "),a("p",[t._v("This trigger picks up rows that are inserted/updated in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new/updated rows once every poll interval.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(819),alt:"New/updated batch of rows trigger",width:"2135",height:"2100"}}),t._v(" "),a("em",[t._v("New/updated batch of rows trigger")])],1),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#table"}},[t._v("Table")])]),t._v(" "),a("td",[t._v("\n        First, select a table/view to process rows from.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#unique-key"}},[t._v("Unique key")])]),t._v(" "),a("td",[t._v("\n        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#sort-column"}},[t._v("Sort column")])]),t._v(" "),a("td",[t._v("\n        Now, select a column to identify updated rows.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#batch-size"}},[t._v("Batch size")])]),t._v(" "),a("td",[t._v("\n        Next, configure the batch size to process in each individual job for this recipe.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#where-condition"}},[t._v("WHERE condition")])]),t._v(" "),a("td",[t._v("\n        Finally, provide an optional "),a("code",[t._v("WHERE")]),t._v(" condition to filter rows.\n      ")])])])]),t._v(" "),a("h2",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),a("p",[t._v("Select the table/view to process rows from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),t._v(" "),a("h3",{attrs:{id:"unique-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unique-key"}},[t._v("#")]),t._v(" Unique key")]),t._v(" "),a("p",[t._v("Values from this selected column is used to deduplicate rows in the selected table.")]),t._v(" "),a("p",[t._v("As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. "),a("code",[t._v("ID")]),t._v("). It should be incremental and sortable. This column can also be indexed for better performance.")]),t._v(" "),a("p",[t._v("Only columns that have "),a("strong",[t._v("primary key ('P')")]),t._v(" or "),a("strong",[t._v("unique ('U')")]),t._v(" constraints can be used. Run this SQL query to find out which columns fulfill this requirement.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" all_indexes i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" all_ind_columns c\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n  i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TABLE_OWNER'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TABLE_NAME'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uniqueness "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UNIQUE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNION")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" cc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" all_constraints con"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" all_cons_columns cc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n  con"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TABLE_OWNER'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  con"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TABLE_NAME'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  con"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'U'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'P'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  con"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  con"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name\n")])])]),a("p",[t._v("If no column can be found, check out our "),a("router-link",{attrs:{to:"/connectors/oracle/best-practices.html#designing-tables-for-use-in-workato"}},[t._v("best practices")]),t._v(" to find out how to make one.")],1),t._v(" "),a("h3",{attrs:{id:"sort-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sort-column"}},[t._v("#")]),t._v(" Sort column")]),t._v(" "),a("p",[t._v("Sort column is a column that is updated whenever a row in the table is updated. Typically, this is a timestamp column.")]),t._v(" "),a("p",[t._v("When a row is updated, the Unique key value remains the same. However, it should have it's timestamp updated to reflect the last updated time. Following this logic, Workato keeps track of values in this column together with values in the selected "),a("a",{attrs:{href:"#unique-key"}},[a("strong",[t._v("Unique key")])]),t._v(" column. When a change in the "),a("strong",[t._v("Sort column")]),t._v(" value is observed, an updated row event will be recorded and processed by the trigger.")]),t._v(" "),a("p",[t._v("Only "),a("strong",[t._v("date")]),t._v(", "),a("strong",[t._v("timestamp")]),t._v(", "),a("strong",[t._v("timestamp with time zone")]),t._v(" and "),a("strong",[t._v("timestamp with local time zone")]),t._v(" column types can be used. Run this SQL query to find out which columns fulfill this requirement.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" column_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" all_tab_columns\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n  owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WORKATO'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ORACLE_STRING'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TIMESTAMP%'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" data_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DATE%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("If no column can be found, check out our "),a("router-link",{attrs:{to:"/connectors/oracle/best-practices.html#designing-tables-for-use-in-workato"}},[t._v("best practices")]),t._v(" to find out how to make one.")],1),t._v(" "),a("h3",{attrs:{id:"batch-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-size"}},[t._v("#")]),t._v(" Batch size")]),t._v(" "),a("p",[t._v("Batch size of rows to return in each job. This can be any number between "),a("strong",[t._v("1")]),t._v(" and the maximum batch size. Maximum batch size is "),a("strong",[t._v("100")]),t._v(" and default is "),a("strong",[t._v("100")]),t._v(".")]),t._v(" "),a("p",[t._v("In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.")]),t._v(" "),a("h3",{attrs:{id:"where-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[t._v("#")]),t._v(" WHERE condition")]),t._v(" "),a("p",[t._v("This condition is used to filter rows based on one or more column values.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closed'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" priority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),a("p",[t._v("Leave blank to process all rows from the selected table.")]),t._v(" "),a("p",[t._v("Complex "),a("code",[t._v("WHERE")]),t._v(" conditions with subqueries can also be used. Refer to the "),a("router-link",{attrs:{to:"/connectors/oracle/introduction.html#using-where-conditions"}},[t._v("WHERE condition")]),t._v(" guide for more information.")],1),t._v(" "),a("h2",{attrs:{id:"list-of-workato-triggers-and-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-workato-triggers-and-actions"}},[t._v("#")]),t._v(" List of Workato triggers and actions")]),t._v(" "),a("p",[t._v("Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/connectors/oracle/new-row-trigger.html"}},[t._v("New row trigger")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/select.html"}},[t._v("Select actions")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/insert.html"}},[t._v("Insert actions")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/update.html"}},[t._v("Update actions")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/upsert.html"}},[t._v("Upsert actions")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/delete.html"}},[t._v("Delete actions")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/run_sql.html"}},[t._v("Run custom SQL action")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/stored-procedure.html"}},[t._v("Execute stored procedure")])],1)]),t._v(" "),a("p",[t._v("Or get busy building your recipes now! Check out our")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/connectors/oracle/best-practices.html"}},[t._v("Best practices")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/database-common-use-cases.html"}},[t._v("Use cases")])],1)])])}),[],!1,null,null,null);e.default=r.exports},818:function(t,e,s){t.exports=s.p+"assets/img/new-updated-row-trigger.9fb9cf8f.png"},819:function(t,e,s){t.exports=s.p+"assets/img/new-updated-batch-of-rows-trigger.08cbfd09.png"}}]);