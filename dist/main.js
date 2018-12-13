const fetch = function () {
    let food = $("#recipe-input")
    $.get(`/recipes/${food}`, function (recipes) {
        renderer.render(recipes)      
    }
    )
}



