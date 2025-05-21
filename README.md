## Configuracion

Con los siguientes comando se podrá levantar el proyecto usando Docker compose, el primer comando ejecuta mientras la terminal o linea de comando se encuentra activa.

```bash
docker-compose up --build
```

Si quiere ejecutar para en segundo plano utilizar "-d" significa "detached mode", dentro del comando

```bash
docker-compose up -d --build
```

Verificamos si los contenedores se encuentran corriendo

```bash
docker ps
```

Y si se desea ver los logs ejecutar el comando 
```bash
docker-compose logs -f
```