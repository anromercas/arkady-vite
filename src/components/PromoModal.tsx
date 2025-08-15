// src/components/PromoModal.tsx
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type Props = {
  imgSrc: string;
  imgAlt?: string;
  href?: string; // opcional: si quieres que la imagen lleve a una URL
  storageKey?: string; // para controlar "no volver a mostrar"
  delayMs?: number; // retardo para mostrar tras pintar la página (p.ej. 800ms)
};

const DEFAULT_STORAGE_KEY = "arkady_promo_hidden";

export default function PromoModal({
  imgSrc,
  imgAlt = "Promoción Arkady",
  href,
  storageKey = DEFAULT_STORAGE_KEY,
  delayMs = 600,
}: Props) {
  const [open, setOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Mostrar con pequeño delay para no competir con el LCP del hero
  useEffect(() => {
    const hidden = localStorage.getItem(storageKey) === "1";
    if (hidden) return;

    const t = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs, storageKey]);

  // Cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleClose = () => {
    if (dontShowAgain) localStorage.setItem(storageKey, "1");
    setOpen(false);
  };

  if (!open) return null;

  // Contenido clickable (imagen con link) y overlay que NO cierra al hacer click fuera
  const content = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
      ref={dialogRef}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div className="relative z-10 mx-4 max-w-[92vw] sm:max-w-md md:max-w-lg rounded-2xl shadow-2xl bg-white flex flex-col items-center">
        {/* Texto superior */}
        <p className="absolute text-center">
          ¡Haz click en la imagen para Reservar!
        </p>
        {/* Botón cerrar */}
        <button
          ref={closeBtnRef}
          onClick={handleClose}
          aria-label="Cerrar promoción"
          className="absolute right-3 top-3 z-20 rounded-full p-2 bg-white/90 hover:bg-white shadow group"
        >
          <X className="h-5 w-5 text-gray-700 group-hover:scale-110 transition-transform" />
        </button>

        {/* Área visual (sin scroll) */}
        <div
          className="
      w-full 
      flex items-center justify-center
      px-0 pt-10   /* deja espacio para la X en móviles */
    "
          style={{
            // La imagen nunca excede el viewport: 92vh menos el pie (56px)
            maxHeight: "calc(92vh - 56px)",
          }}
        >
          {href ? (
            <a href={href} aria-label="Ir a la promoción" className="block">
              <img
                src={imgSrc}
                alt={imgAlt}
                loading="lazy"
                className="
            block 
            max-w-[92vw] sm:max-w-md md:max-w-lg
            max-h-[calc(92vh-56px)]
            object-contain
          "
              />
            </a>
          ) : (
            <img
              src={imgSrc}
              alt={imgAlt}
              loading="lazy"
              className="
          block 
          max-w-[92vw] sm:max-w-md md:max-w-lg
          max-h-[calc(92vh-56px)]
          object-contain
        "
            />
          )}
        </div>

        {/* Pie fijo (56px) */}
        <div className="h-14 w-full flex items-center justify-between gap-3 px-4">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="size-4"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
            />
            No volver a mostrar
          </label>

          <button
            onClick={handleClose}
            className="text-sm font-medium text-white bg-[#20c997] hover:bg-[#1ba884] rounded-full px-4 py-2"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );

  return content;
}
