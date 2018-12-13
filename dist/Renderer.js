class Renderer{
    render(recipe) {
        $(".recipe-container").empty()
        let source = $("#ingredients-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template(recipe)
        $('recipe-container').append(newHTML)
    }

}

let renderer = new Renderer

