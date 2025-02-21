# Comandos Sequelize CLI
## Modelos y migraciones
### Generar un modelo + Migraciones
```
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
```
### Generar Migraciones
```
npx sequelize-cli db:migrate
```
### Rollback (revertir migraciones)

```
npx sequelize-cli db:migrate:undo
```