(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{2625:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"password-encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password-encryption"}},[t._v("#")]),t._v(" Password Encryption")]),t._v(" "),a("p",[t._v("To avoid exposure of any sensitive data (like passwords or private keys) in your configuration file ("),a("code",[t._v("config.yml")]),t._v("), you have a choice to encrypt it by using the encryptor tool. The process of encrypting any secret value is as follows:")]),t._v(" "),a("ol",[a("li",[t._v("Make sure you have your agent keys properly downloaded and placed into the "),a("code",[t._v("conf")]),t._v(" folder. They are required for encryption.")]),t._v(" "),a("li",[t._v("Run the encryptor tool in your command line.\n"),a("ul",[a("li",[t._v("For Windows: "),a("code",[t._v("bin\\encryptor.cmd")])]),t._v(" "),a("li",[t._v("For Linux and Mac: "),a("code",[t._v("bin/encryptor.sh")])])])]),t._v(" "),a("li",[t._v("When prompted, enter your secret value twice.")]),t._v(" "),a("li",[t._v("The script will print an encrypted text. Example:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("encrypted: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RCVtuGPjJWNqwkFQvhT...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Copy and paste the provided text as a value into "),a("code",[t._v("config.yml")]),t._v(". Make sure your value is  in a single line. For example, in a database profile:")])]),t._v(" "),a("div",{staticClass:"language-YAML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sales")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("postgresql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//sales.database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5432/sales\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" joe\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("encrypted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RCVtuGPjJWNqwkFQvhT...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The encryption is based on your agent's private key. You cannot use encrypted value from one agent inside another agent's configuration. Note that only "),a("em",[t._v("YAML")]),t._v(" values can be encrypted (you cannot encrypt "),a("em",[t._v("YAML")]),t._v(" property keys).")])])}),[],!1,null,null,null);e.default=n.exports}}]);