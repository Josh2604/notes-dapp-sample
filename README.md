# Dapp de Notas
Esta es una Dapp (aplicación descentralizada) de notas construida con Hardhat y Ethereum. Esta aplicación permite a los usuarios crear, leer, actualizar y eliminar notas. La Dapp está conectada a dos redes blockchain diferentes: Polygon y Avalanche.

## Funcionalidades

La Dapp de Notas tiene las siguientes funcionalidades:

Crear notas: los usuarios pueden crear nuevas notas ingresando un contenido.
Numero de notas: los usuarios pueden ver el numero de notas creadas
Actualizar notas: los usuarios marcar como completada una nota en especifico.
Eliminar notas: los usuarios pueden eliminar una nota existente.

## Tecnologías utilizadas

Hardhat: una herramienta de desarrollo de Ethereum que permite compilar, probar y desplegar contratos inteligentes.
React: una biblioteca de JavaScript para construir interfaces de usuario.
ethers.js: una biblioteca de JavaScript que permite interactuar con contratos inteligentes de Ethereum.
Polygon: una red blockchain que permite transacciones rápidas y baratas.
Avalanche: una red blockchain escalable y de alta velocidad.

## Uso
### Instalación
Primero, clone el repositorio y navegue hasta la carpeta del proyecto:
```sh
git clone https://github.com/su-usuario/notes-dapp-sample.git
cd notes-dapp-sample
```

Instale las dependencias de Node.js:
```sh
npm install
```

# Configuración
Antes de ejecutar la aplicación, debe configurar su archivo .env con su clave privada de Polygon y Avalanche:
```txt
MUMBAI_URL=
MUMBAI_PRIVATE_KEY=
CONTRACT_ADDRESS=

FUJI_URL=
FUJI_PRIVATE_KEY=

```

# Ejecución
Para ejecutar la aplicación en modo de desarrollo, ejecute los siguientes comandos en dos terminales separados:

# Despliegue
Para desplegar la aplicación en las tesnet de Polygon y Avalanche, ejecute los siguientes comandos:

```sh
npx hardhat run --network mumbai scripts/TaskListDeploy.js
```
```sh
npx hardhat run --network fuji scripts/TaskListDeploy.js
```

# Contribución
Si desea contribuir a este proyecto, puede hacerlo de la siguiente manera:

1. Fork del repositorio.
2. Cree una nueva rama (git checkout -b feature/nueva-caracteristica).
3. Realice los cambios necesarios y documente sus cambios.
4. Confirme los cambios (git commit -am 'Agregue una nueva característica').
5. Haga push a la rama (git push origin feature/nueva-caracteristica).
6. Cree un pull request.