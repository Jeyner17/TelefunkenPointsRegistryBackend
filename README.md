# Proyecto de Salas con Node.js y Socket.io

## Descripción

Este proyecto es una aplicación de Node.js que permite la creación y gestión de salas de chat en tiempo real utilizando `Socket.io`. La aplicación también utiliza `Express` para gestionar las rutas HTTP y `CORS` para la configuración de seguridad de las solicitudes.


## Instalación

Para instalar y configurar el proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local:

    ```sh
    git clone https://github.com/Jeyner17/TelefunkenPointsRegistry.git
    ```

2. Navega al directorio del proyecto:

    ```sh
    cd nombre-del-repo
    ```

3. Instala las dependencias necesarias:

    ```sh
    npm install
    ```

## Uso

1. Inicia el servidor:

    ```sh
    npm start
    ```

2. La aplicación estará disponible en `http://localhost:3000`.

## Rutas HTTP

- **POST /api/rooms/create-room**: Crea una nueva sala.
  - Cuerpo de la solicitud:
    ```json
    {
      "roomName": "Nombre de la sala",
      "numPlayers": 4,
      "creatorAvatar": "URL del avatar del creador",
      "playerName": "Nombre del creador"
    }
    ```

## Eventos de Socket.io

- **connection**: Evento disparado cuando un cliente se conecta.
- **join-room**: Evento disparado cuando un jugador se une a una sala.
  - Datos del evento:
    ```json
    {
      "roomId": "ID de la sala",
      "playerName": "Nombre del jugador",
      "avatar": "URL del avatar del jugador"
    }
    ```
- **update-players**: Evento emitido para notificar a todos los clientes en la sala sobre los jugadores actuales.
- **joined-room**: Evento emitido para notificar al cliente que se ha unido a la sala, indicando el éxito o fallo de la operación.
- **disconnect**: Evento disparado cuando un cliente se desconecta.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tus cambios (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commits (`git commit -am 'Añadir nueva funcionalidad'`).
4. Envía los cambios a tu repositorio fork (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request en el repositorio original.

## Licencia

Este proyecto está licenciado bajo la Lic