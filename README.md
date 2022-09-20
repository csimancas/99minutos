99 minutos prueba tecnica.



Este es un proyecto con [Next.js](https://nextjs.org/) [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Proyecto para crear ordenes de servicios de envios, consultar ordenes y solicitar cancelaciones de ordenes.
## Getting Started
First, clone the project.

https://github.com/csimancas/99minutos.git

Next install depencencies with npm or yarn

npm install
yarn


Run dev mode

npm run dev
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Theres no api folder, all the consume endpoints are in
 services/orders


Resume:

-Tuve algunas complicaciones al momento de querer crear las ordenes, ya que me mandaba un error con CORS.

Todo el proyecto esta en una sola pantalla, Crear Orden, Consultar Ordenes (Que me genere un archivo con un array data.ts en el directorio raiz, para simular la consulta de la orden) y solicitar la cancelación de una orden dentro de una modal.

Muchas gracias. Saludos.