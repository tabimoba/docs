(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1871:function(t,e,o){t.exports=o.p+"assets/img/saml-jitp.7ab09c16.png"},1872:function(t,e,o){t.exports=o.p+"assets/img/okta-profile-editor.00e7138e.png"},1873:function(t,e,o){t.exports=o.p+"assets/img/okta-profile.e2fa52d0.png"},1874:function(t,e,o){t.exports=o.p+"assets/img/add-attribute.525eb8de.png"},1875:function(t,e,o){t.exports=o.p+"assets/img/attribute-fields.72b71b1a.png"},1876:function(t,e,o){t.exports=o.p+"assets/img/workato-saml-app.b6150ab6.png"},1877:function(t,e,o){t.exports=o.p+"assets/img/saml-app-setting.9e9e38df.png"},1878:function(t,e,o){t.exports=o.p+"assets/img/configure-saml.43c6a750.png"},1879:function(t,e,o){t.exports=o.p+"assets/img/attribute-statement.cb74cec4.png"},1880:function(t,e,o){t.exports=o.p+"assets/img/new-user-custom-role.e8b98c17.png"},1881:function(t,e,o){t.exports=o.p+"assets/img/assign-current-user.dd604d23.gif"},2687:function(t,e,o){"use strict";o.r(e);var r=o(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"team-collaboration-just-in-time-provisioning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#team-collaboration-just-in-time-provisioning"}},[t._v("#")]),t._v(" Team collaboration - Just in time provisioning")]),t._v(" "),r("p",[t._v("Just-in-Time (JIT) provisioning eliminates the needs for team admins to create Workato user accounts in advance on behalf of team members. When an employee signs up for a new Workato account via SAML SSO, they will automatically be added into the organization's team.")]),t._v(" "),r("blockquote",[r("p",[t._v("If an employee has an existing Workato account they will be automatically be added into the organization's team.")])]),t._v(" "),r("p",[t._v("You may enable SAML Just-In-Time provisioning on "),r("strong",[t._v("Team")]),t._v(" > "),r("strong",[t._v("Settings")]),t._v(" page.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(1871),alt:"Enable SAML Just-In-Time provisioning",width:"1580",height:"1376"}}),t._v(" "),r("em",[t._v("Enable SAML Just-In-Time provisioning")])],1),t._v(" "),r("h2",{attrs:{id:"customize-jit-provisioning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#customize-jit-provisioning"}},[t._v("#")]),t._v(" Customize JIT provisioning")]),t._v(" "),r("p",[t._v("You can customize JIT provisioning to relay user-specific information to Workato. Workato will take a SAML attribute (e.g. name) and apply it for the provisioned Workato account. This enables new users to be provisioned with the appropriate information according to your workflow.")]),t._v(" "),r("p",[t._v("The following attributes are supported: "),r("code",[t._v("workato_email")]),t._v(", "),r("code",[t._v("workato_full_name")]),t._v(", and "),r("code",[t._v("workato_role")]),t._v(". If the attributes are not configured, a default value will be used.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Workato user field")]),t._v(" "),r("th",[t._v("SAML attribute")]),t._v(" "),r("th",[t._v("Default value")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("User email")]),t._v(" "),r("td",[r("code",[t._v("workato_email")])]),t._v(" "),r("td",[t._v("SAML "),r("code",[t._v("NameID")]),r("br"),t._v("(in email format)")])]),t._v(" "),r("tr",[r("td",[t._v("User name")]),t._v(" "),r("td",[r("code",[t._v("workato_full_name")])]),t._v(" "),r("td",[t._v("Part of SAML "),r("code",[t._v("Name")])])]),t._v(" "),r("tr",[r("td",[t._v("User team role")]),t._v(" "),r("td",[r("code",[t._v("workato_role")])]),t._v(" "),r("td",[r("code",[t._v("Operator")])])])])]),t._v(" "),r("h3",{attrs:{id:"why-customize-jit-provisioning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-customize-jit-provisioning"}},[t._v("#")]),t._v(" Why customize JIT provisioning")]),t._v(" "),r("p",[t._v("Outside of the default roles ("),r("code",[t._v("Admin")]),t._v(", "),r("code",[t._v("Analyst")]),t._v(", and "),r("code",[t._v("Operator")]),t._v("), custom roles can be configured with specific access to folder or permissions to edit connections and recipes. This gives you more control to enforce security policies for Workato accounts.")]),t._v(" "),r("p",[t._v("Also, this eliminates the need to manually provision Workato accounts with the "),r("strong",[t._v("appropriate access privileges")]),t._v(". This leads to reduced operations cost and smoother onboarding.")]),t._v(" "),r("h2",{attrs:{id:"how-to-customize-jit-provisioning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-customize-jit-provisioning"}},[t._v("#")]),t._v(" How to customize JIT provisioning")]),t._v(" "),r("p",[t._v("To assign user information during JIT provisioning, you first need complete the basic setup:")]),t._v(" "),r("ul",[r("li",[t._v("Enable "),r("router-link",{attrs:{to:"/user-accounts-and-teams/single-sign-on.html"}},[t._v("SAML based SSO")]),t._v(" for Team")],1),t._v(" "),r("li",[t._v("Enable "),r("a",{attrs:{href:"#team-collaboration-just-in-time-provisioning"}},[t._v("SAML Just-in-Time provisioning")]),t._v(" for Team")]),t._v(" "),r("li",[t._v("Create "),r("router-link",{attrs:{to:"/user-accounts-and-teams/team-collaboration.html#custom-roles"}},[t._v("custom role")]),t._v(" on Workato\n"),r("ul",[r("li",[t._v("e.g. "),r("code",[t._v("mktg_ops")]),t._v(" with specific access to the Marketing folder")])])],1),t._v(" "),r("li",[r("strong",[t._v("Configure the SAML attribute")]),t._v(" on the SAML provider's application page.")])]),t._v(" "),r("h3",{attrs:{id:"configure-saml-attribute-on-saml-provider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-saml-attribute-on-saml-provider"}},[t._v("#")]),t._v(" Configure SAML attribute on SAML provider")]),t._v(" "),r("p",[t._v("Let's configure the SAML attributes for "),r("code",[t._v("workato_role")]),t._v(" on Okta.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Steps")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1. Locate "),r("strong",[t._v("Profile Editor")])]),t._v(" "),r("td",[r("DocImage",{attrs:{src:o(1872),alt:"Profile editor",width:"1195",height:"508"}})],1)]),t._v(" "),r("tr",[r("td",[t._v("2. Select Okta > "),r("strong",[t._v("Profile")])]),t._v(" "),r("td",[r("DocImage",{attrs:{src:o(1873),alt:"Okta profile",width:"1175",height:"302"}})],1)]),t._v(" "),r("tr",[r("td",[t._v("3. Select "),r("strong",[t._v("Add attribute")])]),t._v(" "),r("td",[r("DocImage",{attrs:{src:o(1874),alt:"Add attribute",width:"1081",height:"474"}})],1)]),t._v(" "),r("tr",[r("td",[t._v("4. Fill in the "),r("strong",[t._v("attribute")]),t._v(" details")]),t._v(" "),r("td",[t._v("For more information see "),r("a",{attrs:{href:"#setting-up-workato-role-attribute"}},[t._v("here")]),t._v("."),r("br"),r("DocImage",{attrs:{src:o(1875),alt:"Attribute fields",width:"509",height:"516"}})],1)]),t._v(" "),r("tr",[r("td",[t._v("5. Locate the Workato "),r("strong",[t._v("SAML app")])]),t._v(" "),r("td",[r("DocImage",{attrs:{src:o(1876),alt:"Workato SAML app",width:"1243",height:"474"}})],1)]),t._v(" "),r("tr",[r("td",[t._v("6. Select "),r("strong",[t._v("SAML settings")]),t._v(" > edit")]),t._v(" "),r("td",[r("DocImage",{attrs:{src:o(1877),alt:"Add attribute",width:"1035",height:"677"}})],1)]),t._v(" "),r("tr",[r("td",[t._v("7. Skip to "),r("strong",[t._v("Configure SAML")])]),t._v(" "),r("td",[r("DocImage",{attrs:{src:o(1878),alt:"Configure SAML",width:"2054",height:"750"}})],1)]),t._v(" "),r("tr",[r("td",[t._v("8. Locate "),r("strong",[t._v("Attribute statement")])]),t._v(" "),r("td",[t._v("The "),r("code",[t._v("Name")]),t._v(" value is passed to workato (this is case-sensitive), "),r("code",[t._v("user.workato_role")]),t._v(" is the attribute you just configured."),r("br"),r("br"),t._v(" "),r("DocImage",{attrs:{src:o(1879),alt:"Attribute statement",width:"997",height:"339"}}),r("br"),r("br"),t._v("Instead of the "),r("code",[t._v("user.workato_role")]),t._v(" attribute, it is possible to input a fixed value (e.g. Analyst). This will set the default for all users to be provisioned with the "),r("code",[t._v("Analyst")]),t._v(" role.")],1)]),t._v(" "),r("tr",[r("td",[t._v("9. Save and exit SAML setting")]),t._v(" "),r("td",[t._v("Note that existing users will not be affect. In order to implement JIT custom role provisioning, define the user's "),r("code",[t._v("workato_role")]),t._v(" in their "),r("a",{attrs:{href:"#assign-roles-for-team-members"}},[t._v("profile page")]),t._v(".")])])])]),t._v(" "),r("h4",{attrs:{id:"setting-up-workato-role-attribute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-workato-role-attribute"}},[t._v("#")]),t._v(" Setting up "),r("code",[t._v("workato_role")]),t._v(" attribute")]),t._v(" "),r("p",[t._v("Workato accepts certain attributes and converts them into user values when provisioning a new account. In order to facilitate this, all values have to be identical to the roles in Workato Team.")]),t._v(" "),r("p",[t._v("For example, we created a custom role in workato Team called "),r("code",[t._v("mktg_ops")]),t._v(" with custom permissions to certain folders and recipes.")]),t._v(" "),r("p",[t._v("Thus, the SAML attribute will be as follows:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("SAML attribute")]),t._v(" "),r("th",[t._v("Stored values")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("workato_role")])]),t._v(" "),r("td",[r("code",[t._v("Admin")]),t._v(", "),r("code",[t._v("Analyst")]),t._v(", "),r("code",[t._v("Operator")]),t._v(" and "),r("code",[t._v("mktg_ops")])])])])]),t._v(" "),r("blockquote",[r("p",[t._v("It is recommended that you also list out the default roles; "),r("code",[t._v("Admin")]),t._v(", "),r("code",[t._v("Analyst")]),t._v(", "),r("code",[t._v("Operator")]),t._v(".")])]),t._v(" "),r("p",[t._v("All values are case-sensitive ("),r("code",[t._v("Admin")]),t._v(", "),r("s",[r("code",[t._v("admin")])]),t._v("). Ensure that you have configured the role names identical to the ones on your Team setting.")]),t._v(" "),r("h2",{attrs:{id:"assign-roles-for-team-members"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assign-roles-for-team-members"}},[t._v("#")]),t._v(" Assign roles for team members")]),t._v(" "),r("ul",[r("li",[t._v("When an employee is onboarded with Okta, select a value for "),r("code",[t._v("workato_role")]),t._v(".")])]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(1880),alt:"Select workato_role for new user",width:"2054",height:"1372"}}),t._v(" "),r("em",[t._v("Select "),r("code",[t._v("workato_role")]),t._v(" for new user")])],1),t._v(" "),r("ul",[r("li",[t._v("For existing Okta users, assign "),r("code",[t._v("workato_role")]),t._v(" on their profile page. This only applies if this Okta user "),r("strong",[t._v("does not have")]),t._v(" an existing Workato account.")])]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(1881),alt:"Configure workato_role for an existing user",width:"600",height:"398"}}),t._v(" "),r("em",[t._v("Configure "),r("code",[t._v("workato_role")]),t._v(" for an existing user")])],1),t._v(" "),r("p",[t._v("Now, when when a user logins to Workato "),r("router-link",{attrs:{to:"/user-accounts-and-teams/single-sign-on.html"}},[t._v("using SSO")]),t._v(", the identity provider passes "),r("code",[t._v("workato_role")]),t._v(" for this new user. For a new hire in the Marketing department, the provisioned Workato account with be configured with the custom role "),r("code",[t._v("mktg_ops")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=a.exports}}]);