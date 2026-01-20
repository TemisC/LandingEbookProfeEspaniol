import Image from 'next/image';

export default function OfferSection() {
    return (
        <section id="oferta" className="relative overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Todo lo que necesitas para empezar <span className="text-sky-600">HOY</span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        No pierdas más tiempo buscando información incompleta en internet. Aquí tienes el mapa exacto.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-slate-200 outline outline-1 outline-slate-200 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900">Ebook "Profe de Español Pro"</h3>
                        <p className="mt-6 text-base leading-7 text-slate-600">
                            La guía definitiva para monetizar tu idioma nativo en la plataforma secreta.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">¿Qué incluye?</h4>
                            <div className="h-px flex-auto bg-slate-100" />
                        </div>
                        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-2 sm:gap-6">
                            {[
                                'La Plataforma Secreta Revelada',
                                'Guía de Registro Anti-Rechazo',
                                'Scripts de Video Aprobados',
                                'Estrategia de Primer Alumno',
                                'Cómo cobrar en Dólares',
                                'Plantillas de Mensajes',
                            ].map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 p-4 bg-sky-50 rounded-xl border border-sky-100">
                            <p className="text-sm font-semibold text-sky-800">
                                🎁 BONUS: Acceso a Mentoría 1 a 1 (Cupos Limitados)
                            </p>
                            <p className="text-xs mt-1 text-sky-600">
                                Soporte personalizado para acelerar tus primeros resultados.
                            </p>
                        </div>

                    </div>

                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="relative rounded-2xl bg-slate-50 py-10 text-center ring-1 ring-inset ring-slate-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">

                            {/* Image Integration as visual reinforcer */}
                            <div className="absolute top-0 right-0 -mt-16 -mr-4 w-24 hidden lg:block rotate-12">
                                {/* Decorative element or small image could go here */}
                            </div>

                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-slate-600">Precio de Lanzamiento</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-slate-900">$27</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-slate-600">USD</span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-xl bg-sky-600 px-3 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all hover:scale-105"
                                >
                                    DESCARGAR AHORA
                                </a>
                                <p className="mt-6 text-xs leading-5 text-slate-600">
                                    Garantía de satisfacción de 7 días. Pago seguro vía Stripe/PayPal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Image at the bottom/side */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[21/9] lg:aspect-[21/7]">
                    <Image
                        src="/assets/woman-remote.png"
                        alt="Mujer trabajando feliz desde una cafetería"
                        fill
                        className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <h3 className="text-white text-2xl md:text-3xl font-bold">Tu oficina puede ser cualquier lugar del mundo. 🌎</h3>
                    </div>
                </div>
            </div>

        </section>
    );
}
