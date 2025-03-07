# Comandos Sequelize CLI
## Modelos y migraciones
### Generar un modelo + Migraciones
```
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name Persona --attributes nombres:string,apellidos:string,telefono:string,direccion:string,userId:integer
npx sequelize-cli model:generate --name Categoria --attributes nombre:string,detalle:text,estado:boolean
npx sequelize-cli model:generate --name Producto --attributes nombre:string,precio:decimal,stock:integer,descripcion:text,imagen:string,estado:boolean,categoriaId:integer
npx sequelize-cli model:generate --name Cliente --attributes nombre_completo:string,ci:string,telefono:string,direccion:string,correo:string
npx sequelize-cli model:generate --name Pedido --attributes fecha:string,observacion:text,detalle:text,estado:integer,clienteId:integer
npx sequelize-cli model:generate --name PedidoProducto --attributes pedidoId:integer,productoId:integer,cantidad:integer

```
### Generar Migraciones
```
npx sequelize-cli db:migrate
```
### Rollback (revertir migraciones)

````
npx sequelize-cli db:migrate:undo
```