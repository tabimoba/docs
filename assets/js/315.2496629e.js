(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{2296:function(e,t,i){"use strict";i.r(t);var a=i(0),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"on-prem-files-append-line-to-csv-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-files-append-line-to-csv-file"}},[e._v("#")]),e._v(" On-prem files - Append line to CSV file")]),e._v(" "),a("p",[e._v("This action appends a new line to an existing CSV file. Select the CSV file and map data to each column.")]),e._v(" "),a("p",[e._v("Be careful not to use this action concurrently on the same CSV file from multiple recipes or with concurrency setting greater than 1. The file may be corrupted as a result.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:i(764),alt:"Append line to CSV file action",width:"2214",height:"2037"}}),e._v(" "),a("em",[e._v("Append line to CSV file action")])],1),e._v(" "),a("h2",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("CSV file")]),e._v(" "),a("td",[e._v("\n        First, select a CSV file to process lines from. This CSV file must have a header line. The value of each column in the header will be used to generate the input schema of the trigger.\n      ")])]),e._v(" "),a("tr",[a("td",[e._v("Column delimiter")]),e._v(" "),a("td",[e._v("\n        Next, select a column delimiter for this selected CSV file. The delimiters available are: comma, semicolon, space and tab.\n      ")])]),e._v(" "),a("tr",[a("td",[e._v("Columns")]),e._v(" "),a("td",[e._v("Columns of the selected CSV file will be available as input fields here. Map data for each column to be appended to the file.")])])])]),e._v(" "),a("h2",{attrs:{id:"output-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",[e._v("Output field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("File path")]),e._v(" "),a("td",[e._v("This is the path of the file. This path is relative to the base path you define in the connection profile. Learn about "),a("a",{attrs:{href:"/connectors/on-prem-files.html#relative-path"}},[e._v("relative path")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[e._v("File size (bytes)")]),e._v(" "),a("td",[e._v("Size of the file contents in bytes.")])]),e._v(" "),a("tr",[a("td",[e._v("Last modified time")]),e._v(" "),a("td",[e._v("This is the last modified time of the file. This value is updated by your OS.")])])])])])}),[],!1,null,null,null);t.default=l.exports},764:function(e,t,i){e.exports=i.p+"assets/img/append-csv-line-action.79a61d41.png"}}]);