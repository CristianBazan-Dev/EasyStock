// import { renderNotes } from "../controllers/notes.controller.js";


//  const table = async ()=>{

//      const { notes }  = await renderNotes(); 
//      return `


//      <table class="table">


//      <thead>
//              <tr>
//                  <th>Categoría</th>
//                  <th>Marca</th>
//                  <th>Producto</th>
//                  <th>Stock</th>
//                  <th>Vencimiento</th>
//                  <th>Acciones</th>
//              </tr>
//          </thead>

//              <tbody>
//                  ${
//                      notes
//                      .map(
//                          (note) => `
//                          <tbody>

//                          <tr>
                         
//                              <td  data-label="Categoría">{{note.category}}</td>
//                              <td data-label="Marca">{{brand}}</td>
//                              <td data-label="Producto">{{object}}</td>
            
//                             <form action="/notes/save/{{_id}}?_method=PUT" method="POST">
//                              <input type="hidden" name="_method" value="PUT"> 
//                              <td data-label="Stock">
//                                  <input type="number" name="stock" class="input-table" value="{{stock}}">
//                              </td>
            
//                              <td data-label="Vencimiento">{{dateFormat dateOff}}</td>
                            
//                              <td data-label="Acciones" class="btn-table-actions">
                               
//                                      <button class="btn btn-success btn-block btn-sm" type="submit">Guardar</button>
//                                  </form> 
                                
//                                   <form action="/notes/delete/{{_id}}?_method=DELETE" method="POST">
//                                      <input type="hidden" name="_method" value="DELETE">
//                                      <button class="btn btn-danger btn-block btn-sm" type="submit">Eliminar</button>
//                                  </form>
//                              </td>
                            
//                          </tr>   
//                          `
//                      )
//                      .join('\n')
                    
//                  }
//              </tbody>
//          </table>
//      </div>
//  </div>
//  </div>
//  `;
//  }

// export default table;


notes.map((note) => `

                <tbody>

                          <tr>
                         
                             <td  data-label="Categoría">{{note.category}}</td>
                              <td data-label="Marca">{{brand}}</td>
                            <td data-label="Producto">{{object}}</td>
            
                            <form action="/notes/save/{{_id}}?_method=PUT" method="POST">
                             <input type="hidden" name="_method" value="PUT"> 
                             <td data-label="Stock">
                                 <input type="number" name="stock" class="input-table" value="{{stock}}">
                             </td>
            
                              <td data-label="Vencimiento">{{dateFormat dateOff}}</td>
                            
                             <td data-label="Acciones" class="btn-table-actions">
                               
                                     <button class="btn btn-success btn-block btn-sm" type="submit">Guardar</button>
                                 </form> 
                                
                                   <form action="/notes/delete/{{_id}}?_method=DELETE" method="POST">
                                     <input type="hidden" name="_method" value="DELETE">
                                    <button class="btn btn-danger btn-block btn-sm" type="submit">Eliminar</button>
                                  </form>
                              </td>
                            
                          </tr>   
                          `
                     )
                    


                     nt.map(note => `
        <tbody>

        <tr>
       
           <td  data-label="Categoría">{{note.category}}</td>
            <td data-label="Marca">{{brand}}</td>
          <td data-label="Producto">{{object}}</td>

          <form action="/notes/save/{{_id}}?_method=PUT" method="POST">
           <input type="hidden" name="_method" value="PUT"> 
           <td data-label="Stock">
               <input type="number" name="stock" class="input-table" value="{{stock}}">
           </td>

            <td data-label="Vencimiento">{{dateFormat dateOff}}</td>
          
           <td data-label="Acciones" class="btn-table-actions">
             
                   <button class="btn btn-success btn-block btn-sm" type="submit">Guardar</button>
               </form> 
              
                 <form action="/notes/delete/{{_id}}?_method=DELETE" method="POST">
                   <input type="hidden" name="_method" value="DELETE">
                  <button class="btn btn-danger btn-block btn-sm" type="submit">Eliminar</button>
                </form>
            </td>
          
        </tr>   
        `)