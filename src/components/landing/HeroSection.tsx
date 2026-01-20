import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white pb-16 pt-16 md:pb-24 lg:pt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-12">

                    {/* Text Content */}
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-1">
                        <div className="mb-8 inline-flex items-center rounded-full bg-sky-50 px-4 py-1.5 border border-sky-100">
                            <span className="text-sm font-semibold text-sky-600">
                                Oportunidad para LATAM 🌎
                            </span>
                        </div>

                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance">
                            “Probé eCommerce, criptos, trading y multinivel… y nada fue tan rápido y real como ganar dinero desde casa con mi idioma”
                        </h1>

                        <p className="mt-6 text-xl leading-8 text-slate-600">
                            Si hablas español nativo, tienes una herramienta más valiosa que cualquier estrategia de trading. Descubre cómo generar ingresos reales desde casa sin saber inglés ni tener experiencia previa.
                        </p>

                        <div className="mt-10 flex gap-4">
                            <a href="#oferta" className="rounded-xl bg-sky-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all">
                                Quiero saber cómo funciona
                            </a>
                        </div>

                        <p className="mt-4 text-sm text-slate-500">
                            ✅ Sin experiencia requerida &nbsp; • &nbsp; ✅ Pagos en dólares &nbsp; • &nbsp; ✅ 100% Legal
                        </p>
                    </div>

                    {/* Image */}
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-1 relative">
                        <div className="relative rounded-2xl bg-slate-100 p-2 ring-1 ring-slate-200 lg:max-w-lg mx-auto">
                            <Image
                                src="/assets/hero-woman.jpg"
                                alt="Mujer trabajando desde casa feliz con su computador"
                                width={600}
                                height={800}
                                className="rounded-xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
