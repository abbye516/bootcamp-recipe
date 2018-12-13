const fetch = function () {
    let food = $("#recipe-input").val()
    $.get(`/recipes/${food}`, function (recipes) {
        renderer.render(recipes)      
    }
    )
}



