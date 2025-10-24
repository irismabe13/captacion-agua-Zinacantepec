const mapa = L.map('mapa-interactivo').setView([19.286, -99.735], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(mapa);

    const iconoAgua = L.divIcon({
      html: '💧',
      className: 'icono-agua',
      iconSize: [25, 25]
    });

    const zonas = [
      { nombre: "San Cristóbal Tecolitl", coords: [19.278, -99.715] },
      { nombre: "San Matías Transfiguración", coords: [19.273, -99.730] },
      { nombre: "Barrio El Calvario", coords: [19.285, -99.735] },
      { nombre: "Barrio de San Miguel", coords: [19.292, -99.740] },
      { nombre: "Cabecera Municipal", coords: [19.285, -99.740] },
      { nombre: "La Loma I y II", coords: [19.295, -99.750] }
    ];

    zonas.forEach(z => {
      L.marker(z.coords, { icon: iconoAgua })
        .addTo(mapa)
        .bindPopup(`<b>${z.nombre}</b><br>Zona con escasez de agua 💧`);
    });

document.addEventListener("DOMContentLoaded", () => {
  const abrirModalBtns = document.querySelectorAll("[data-modal-target]");
  const cerrarModalBtns = document.querySelectorAll(".modal-cerrar");

  abrirModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal-target");
      const modal = document.querySelector(modalId);
      if (modal) modal.style.display = "flex";
    });
  });

  cerrarModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      modal.style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});

function mostrarCarga(mensaje = "Procesando...") {
  const contenedor = document.createElement("div");
  contenedor.className = "cargando";
  contenedor.innerHTML = `
    <div class="spinner"></div>
    <span>${mensaje}</span>
  `;
  document.body.appendChild(contenedor);

  setTimeout(() => {
    contenedor.remove();
    mostrarExito("Operación completada con éxito ✅");
  }, 2000);
}

function mostrarExito(texto) {
  const msg = document.createElement("div");
  msg.className = "mensaje-exito";
  msg.textContent = texto;
  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3500);
}

function guardarDato(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerDato(clave) {
  const dato = localStorage.getItem(clave);
  return dato ? JSON.parse(dato) : null;
}

function compartirContenido(titulo, texto, url) {
  if (navigator.share) {
    navigator.share({
      title: titulo,
      text: texto,
      url: url
    }).catch(err => console.log("Error al compartir:", err));
  } else {
    alert("Tu navegador no soporta la función de compartir.");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-vermas");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const contenedor = btn.closest(".info-expandible");
      contenedor.classList.toggle("activo");

      if (contenedor.classList.contains("activo")) {
        btn.textContent = "Ver menos";
      } else {
        btn.textContent = "Ver más";
      }
    });
  });
});