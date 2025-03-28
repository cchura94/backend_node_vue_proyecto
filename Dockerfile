FROM node:22-alpine

# establecer el directorio de trabajo
WORKDIR /usr/src/app

# copiar los archivos necesarios de node
COPY package*.json ./

# Instalar dependencias que se necesitan 
RUN npm install

# Copiar el resto del codigo
COPY . .

# Exponer el puerto 
EXPOSE 3000

# Comando para correr la aplicación
CMD [ "npm", "run", "start" ]