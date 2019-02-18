var lodash = require("lodash-es")
var employees = require("./employees")

var managerGroups = lodash.groupBy(employees, "manager")

var root = document.createElement("div")
root.innerHTML = "<pre>"+JSON.stringify(managerGroups, null, 2)+"</pre>"
document.body.appendChild(root)