# Utiliza una imagen base de PHP con Apache
FROM php:8.1-apache

# Instala las extensiones necesarias
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copia el código fuente al directorio de trabajo de Apache
COPY . /var/www/html/

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80