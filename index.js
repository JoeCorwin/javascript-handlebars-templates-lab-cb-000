function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = {
    recipeName: 'Winter Chx Soup'
    description: 'yummy chicken noodle soup',
    ingredients: [
      {name: 'chicken'},
      {name: 'stock'},
      {name: 'noodles'},
      {name: 'carrots'},
      {name: 'garlic'},
    ]
  }

  var template = Handlebars.compile(document.getElementById("my-template").innerHTML);
  var html = template(recipe);
}
