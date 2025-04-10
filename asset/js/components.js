
function includeComponent(id, file){
    fetch(
    file
    ).then(res => res.text()).then(data=>{
        document.getElementById(id).innerHTML = data;
    })
}

document.addEventListener("DOMContentLoaded", () =>{
    includeComponent("header", "components/header.html")
    includeComponent("footer", "components/footer.html")
    includeComponent("CAT", "components/cat_section.html")
    includeComponent("SearchBar", "components/SearchBar.html")
    includeComponent("featured", "components/featured.html")
    includeComponent("learning", "components/learning.html")
    includeComponent("expore-topic", "components/expore-topic.html")
    includeComponent("siderbar_variables", "components/siderbar_variables.html")
    includeComponent("advanced_variables", "components/advanced_variables.html")
    includeComponent("variables_Basic", "components/variables/Variables_Basic.html"),
    includeComponent("Variables_Declaration", "components/variables/Variables_Declaration.html")
    includeComponent("let_vs_const_vs_var", "components/variables/let_vs_const_vs_var.html")
    includeComponent("variables_scope", "components/variables/variables_scope.html")
    includeComponent("data_type", "components/variables/data_type.html")
    includeComponent("variablesNaming", "components/variables/variablesNaming.html") 
    includeComponent("bestPractices", "components/variables/bestPractices.html")
    includeComponent("DemoRunCode", "components/variables/Demoruncode.html")
    includeComponent("variablesCommonMistakes", "components/variables/variablesCommonMistakes.html")

    
})