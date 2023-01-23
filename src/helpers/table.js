// Handlebars.registerHelper("tableFunc", function(product) {
//   const table = document.getElementById('t-body')
//   table.innerHTML = ''; 
//   product.map(p =>{
//     table.innerHTML += 
//     `
//     <tr>
                           
//     <td  data-label="Categoría">{{note.category}}</td>
//      <td data-label="Marca">{{brand}}</td>
//    <td data-label="Producto">{{object}}</td>

//    <form action="/notes/save/{{_id}}?_method=PUT" method="POST">
//     <input type="hidden" name="_method" value="PUT"> 
//     <td data-label="Stock">
//         <input type="number" name="stock" class="input-table" value="{{stock}}">
//     </td>

//      <td data-label="Vencimiento">{{dateFormat dateOff}}</td>
   
//     <td data-label="Acciones" class="btn-table-actions">
      
//             <button class="btn btn-success btn-block btn-sm" type="submit">Guardar</button>
//         </form> 
       
//           <form action="/notes/delete/{{_id}}?_method=DELETE" method="POST">
//             <input type="hidden" name="_method" value="DELETE">
//            <button class="btn btn-danger btn-block btn-sm" type="submit">Eliminar</button>
//          </form>
//      </td>
   
//  </tr>   
//  `
//   })
// })



var template = document.getElementById('index').innerHTML; 

var compile = HandleBars.compile(template); 

var data = []; 

Handlebars.registerHelper('link_to', function(url, name){
    var name = Handlebars.Utils.escapeExpression(name); 
        url = Handlebars.Utils.escapeExpression(url); 
        link = "<a href=\"" + location.protocol + "//" + location.host + "//" + "/" + url + "\">" + name + "</a>"

    return new Handlebars.SafeString(link)
})

var compiledHTML = compile(data); 

document.getElementById('action').innerHTML += compiledHTML