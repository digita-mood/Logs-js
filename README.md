# 🧪 Log.js - Consola estilizada y controlada para proyectos JavaScript

## 🐙 License

This project is licensed under the MIT License.

Copyright © 2025 digitalMood

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


**Log.js** es una mini librería de logging para JavaScript que mejora la salida de consola con estilos, emojis, agrupaciones y temporizadores. Incluye un **modo desarrollo/producción** para evitar que los logs aparezcan en entornos productivos.

---

## 🚀 Instalación

Descargá el archivo `Log.js` y añadilo a tu proyecto. Luego importalo así:

```js
import Log from './Log.js';

⚙️ Configuración de entorno

const isDev = true; // Cambia a false para desactivar logs en producción

🧩 Métodos disponibles

Método | Descripción
Log.info(msg) | Muestra info con ícono ℹ️ y color azul
Log.warn(msg) | Muestra advertencia con ícono ⚠️ y color naranja
Log.error(msg) | Muestra error con ícono ⛔ y color rojo
Log.success(msg) | Muestra éxito con ícono ✅ y color verde
Log.debug(msg) | Muestra debug con ícono 🐞 y color violeta
Log.group(label) | Inicia un grupo expandido de mensajes
Log.groupCollapsed(label) | Inicia un grupo colapsado de mensajes
Log.groupEnd() | Cierra el grupo actual
Log.trace([msg]) | Muestra un stacktrace con mensaje opcional
Log.time(label) | Inicia un cronómetro con una etiqueta
Log.timeEnd(label) | Finaliza el cronómetro y muestra duración
Log.table(data) | Muestra los datos en formato de tabla
Log.assert(condición, msg) | Imprime un mensaje si la condición es falsa
Log.clear() | Limpia la consola

🧪 Ejemplo de uso

´´´js
Log.clear();

Log.groupCollapsed('🚀 Inicio de la aplicación');
Log.time('Carga');

Log.info('Cargando usuario...');
Log.debug('Respuesta API recibida');
Log.success('Usuario cargado con éxito');
Log.warn('El token expira pronto');
Log.error('No se pudo conectar al servidor');

Log.assert(1 + 1 === 3, 'Algo no está sumando bien 🤯');

Log.table([
  { nombre: 'Joaquín', rol: 'Dev' },
  { nombre: 'Vera', rol: 'Princesa' }
]);

Log.timeEnd('Carga');
Log.groupEnd();
```
🧯 Modo Producción

const isDev = false;


---

¿Querés que también te lo formatee para publicarlo como página en GitHub Pages o tipo documentación con estilo? Se puede hacer una locura con Markdown + CSS + magia ✨
