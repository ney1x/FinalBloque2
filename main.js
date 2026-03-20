// ================================================
// main.js - Ney Salazar
// 7mo semestre · Ingeniería de Sistemas · USB
// Bloque 2: contenido generado desde JavaScript
// ================================================


// -----------------------------------------------
// SECCIÓN 1: DATOS DE LA PÁGINA (Array y Map)
// -----------------------------------------------

// Array con los nombres de las secciones del sitio
const secciones = ['inicio', 'matriz', 'multimedia', 'contacto']

// Map que relaciona cada sección con su título visible en el nav
const titulosNav = new Map([
    ['inicio',     'Inicio'],
    ['matriz',     'Matriz 4.0'],
    ['multimedia', 'Multimedia'],
    ['contacto',   'Contacto']
])

// Array de objetos con los pilares de la Industria 4.0
// Cada pilar tiene nombre y sus herramientas por modelo de servicio
const pilares = [
    {
        nombre: 'Ciberseguridad en la nube',
        iaas: ['Cato', 'Aryaka'],
        paas: ['OneLogin', 'ForgeRock'],
        saas: ['CheckPoint', 'Sophos']
    },
    {
        nombre: 'Big Data',
        iaas: ['Backblaze', 'Cloudian'],
        paas: ['Aiven', 'Instaclustr'],
        saas: ['Splunk', 'Sumo Logic']
    }
]

// Set con tecnologías destacadas (sin repetidos)
const tecnologiasDestacadas = new Set([
    'JavaScript', 'HTML', 'CSS', 'Python', 'SQL', 'Git'
])


// -----------------------------------------------
// SECCIÓN 2: GENERACIÓN DEL NAV
// -----------------------------------------------

// Función que construye la barra de navegación usando el Map y el Array
function generarNav() {
    const nav = document.getElementById('navbar')
    let htmlNav = ''

    // Bucle FOR: recorre el array de secciones para crear cada enlace
    for (let i = 0; i < secciones.length; i++) {
        const id = secciones[i]
        const titulo = titulosNav.get(id) // obtenemos el título desde el Map
        htmlNav += `<a href="#" onclick="mostrarSeccion('${id}'); return false;">${titulo}</a>`
    }

    nav.innerHTML = htmlNav
}


// -----------------------------------------------
// SECCIÓN 3: MOSTRAR SECCIÓN (Switch)
// -----------------------------------------------

// Función principal que cambia el contenido según la sección seleccionada
// Usa switch para decidir qué función de renderizado llamar
function mostrarSeccion(seccion) {
    const contenedor = document.getElementById('contenido-principal')

    // Marcamos el enlace activo en el nav
    marcarNavActivo(seccion)

    // Switch: según la sección elegida, renderizamos el contenido correspondiente
    switch (seccion) {
        case 'inicio':
            contenedor.innerHTML = renderInicio()
            break
        case 'matriz':
            contenedor.innerHTML = renderMatriz()
            break
        case 'multimedia':
            contenedor.innerHTML = renderMultimedia()
            break
        case 'contacto':
            contenedor.innerHTML = renderContacto()
            break
        default:
            // Si la sección no existe, mostramos un mensaje de error
            contenedor.innerHTML = '<p style="padding:30px;">Sección no encontrada.</p>'
    }
}

// Función que resalta el enlace activo en la barra de navegación
function marcarNavActivo(seccionActiva) {
    const enlaces = document.querySelectorAll('#navbar a')

    // Bucle FOR OF: recorre los enlaces del nav
    for (const enlace of enlaces) {
        // IF: si el texto del enlace coincide con el título de la sección activa, lo resalta
        if (enlace.textContent === titulosNav.get(seccionActiva)) {
            enlace.classList.add('activo')
        } else {
            enlace.classList.remove('activo')
        }
    }
}


// -----------------------------------------------
// SECCIÓN 4: FUNCIONES DE RENDERIZADO
// -----------------------------------------------

// --- Inicio ---
function renderInicio() {
    // IF: personalizamos el saludo según la hora del día
    const hora = new Date().getHours()
    let saludo

    if (hora < 12) {
        saludo = '¡Buenos días!'
    } else if (hora < 18) {
        saludo = '¡Buenas tardes!'
    } else {
        saludo = '¡Buenas noches!'
    }

    // Generamos la lista de tecnologías desde el Set usando FOR OF
    let listaTecnologias = ''
    for (const tec of tecnologiasDestacadas) {
        listaTecnologias += `<span class="etiqueta">${tec}</span>`
    }

    return `
    <section class="seccion">
      <h2>${saludo} Soy Ney Salazar</h2>
      <p>
        Estudiante de séptimo semestre de Ingeniería de Sistemas en la
        Universidad Simón Bolívar, Barranquilla. Me interesan la ciberseguridad,
        el análisis de datos y las tecnologías que impulsan la Industria 4.0.
      </p>
      <h3>Tecnologías que manejo:</h3>
      <div class="etiquetas">${listaTecnologias}</div>
    </section>
  `
}

// --- Matriz 4.0 ---
function renderMatriz() {
    // Construimos las filas de la tabla usando un bucle FOR sobre el array de pilares
    let filas = ''

    for (let i = 0; i < pilares.length; i++) {
        const p = pilares[i]

        // WHILE: construimos cada celda uniendo las herramientas con ' · '
        let j = 0
        let iaasStr = ''
        while (j < p.iaas.length) {
            iaasStr += (j > 0 ? ' · ' : '') + p.iaas[j]
            j++
        }

        let k = 0
        let paasStr = ''
        while (k < p.paas.length) {
            paasStr += (k > 0 ? ' · ' : '') + p.paas[k]
            k++
        }

        let m = 0
        let saasStr = ''
        while (m < p.saas.length) {
            saasStr += (m > 0 ? ' · ' : '') + p.saas[m]
            m++
        }

        filas += `
      <tr>
        <td><b>${p.nombre}</b></td>
        <td>${iaasStr}</td>
        <td>${paasStr}</td>
        <td>${saasStr}</td>
      </tr>
    `
    }

    return `
    <section class="seccion">
      <h2>Matriz de Pilares — Industria 4.0</h2>
      <p>Clasificación de tecnologías según su modelo de servicio en la nube:</p>
      <table border="1" cellpadding="12" cellspacing="0">
        <thead>
          <tr>
            <th>Pilar</th>
            <th>IaaS — Infraestructura</th>
            <th>PaaS — Plataforma</th>
            <th>SaaS — Software</th>
          </tr>
        </thead>
        <tbody>
          ${filas}
        </tbody>
      </table>
    </section>
  `
}

// --- Multimedia ---
function renderMultimedia() {
    return `
    <section class="seccion">
      <h2>Contenido Multimedia</h2>
      <div class="multimedia-grid">

        <!-- Mapa de la Universidad Simón Bolívar -->
        <div class="media-item">
          <h3>Universidad Simón Bolívar</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.488319692484!2d-74.7904359!3d11.0019283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d140e6917db%3A0xc3c92f155f9a6913!2sUniversidad%20Sim%C3%B3n%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1700000000000"
            width="420" height="280" style="border:0;" allowfullscreen loading="lazy">
          </iframe>
        </div>

        <!-- Video sobre la Industria 4.0 -->
        <div class="media-item">
          <h3>¿Qué es la Industria 4.0?</h3>
          <iframe
            width="420" height="280"
            src="https://www.youtube.com/embed/mFa8RGHuRpY"
            title="Industria 4.0 explicada"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

      </div>
    </section>
  `
}

// --- Contacto ---
function renderContacto() {
    // Generamos el select de semestres con un bucle FOR
    let opciones = '<option value="">-- Seleccionar --</option>'
    const textosSemestre = ['1ro','2do','3ro','4to','5to','6to','7mo','8vo','9no','10mo']

    for (let s = 1; s <= 10; s++) {
        // IF: marcamos el 7mo semestre como seleccionado por defecto
        const seleccionado = (s === 7) ? 'selected' : ''
        opciones += `<option value="${s}" ${seleccionado}>${textosSemestre[s - 1]}</option>`
    }

    return `
    <section class="seccion">
      <h2>Formulario de Alta</h2>
      <form action="#" method="POST">
        <table border="1" cellpadding="14" cellspacing="0" class="tabla-form">

          <!-- Campo nombre -->
          <tr onmouseover="this.style.backgroundColor='#eaf4fb'" onmouseout="this.style.backgroundColor='white'">
            <td width="30%"><b>Nombre *</b></td>
            <td>
              <input type="text" id="nombre" name="nombre" size="20" placeholder="Nombre">
              <br><br>
              <input type="text" name="apellido" size="25" placeholder="Apellido">
            </td>
          </tr>

          <!-- Campo correo -->
          <tr onmouseover="this.style.backgroundColor='#eaf4fb'" onmouseout="this.style.backgroundColor='white'">
            <td><b>Correo electrónico *</b></td>
            <td><input type="email" name="correo" size="35" placeholder="ejemplo@correo.com"></td>
          </tr>

          <!-- Campo semestre generado con JS -->
          <tr onmouseover="this.style.backgroundColor='#eaf4fb'" onmouseout="this.style.backgroundColor='white'">
            <td><b>Semestre</b></td>
            <td><select name="semestre">${opciones}</select></td>
          </tr>

          <!-- Botón de envío -->
          <tr>
            <td colspan="2" align="right">
              <input type="submit" value="Enviar Datos" onclick="confirmarEnvio(); return false;">
            </td>
          </tr>

        </table>
      </form>
    </section>
  `
}


// -----------------------------------------------
// SECCIÓN 5: EVENTOS
// -----------------------------------------------

// Función de confirmación al enviar el formulario
function confirmarEnvio() {
    const nombre = document.getElementById('nombre').value

    // IF: validamos que el nombre no esté vacío antes de confirmar
    if (nombre !== '') {
        alert('¡Datos enviados correctamente, ' + nombre + '!')
    } else {
        alert('Por favor ingresa tu nombre antes de enviar.')
    }
}

// Función que genera el pie de página
function generarFooter() {
    const footer = document.getElementById('footer')
    footer.innerHTML = `
    <p>© 2026 Ney Salazar · Universidad Simón Bolívar · Barranquilla, Colombia</p>
    <a href="#">Política de privacidad</a>
  `
}


// -----------------------------------------------
// SECCIÓN 6: INICIALIZACIÓN
// Al cargar la página, generamos nav, footer y
// mostramos la sección de inicio por defecto
// -----------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    console.log('Página cargada correctamente ✨')
    console.log('Autor: Ney Salazar — 7mo semestre Ing. Sistemas, USB')

    generarNav()       // construye la barra de navegación
    generarFooter()    // construye el pie de página
    mostrarSeccion('inicio') // muestra la sección inicial
})
