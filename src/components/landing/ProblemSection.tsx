export default function ProblemSection() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-sky-600">
                        ¿Te suena familiar?
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
                        Estás cansado de probar métodos que prometen mucho y no dan nada
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Seguro ya has visto cientos de anuncios de "dinero fácil". Trading, dropshipping, apuestas deportivas... todos requieren inversión, riesgo o meses de aprendizaje.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-slate-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                                    ❌
                                </div>
                                Inversiones Riesgosas
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-slate-600">
                                Perder tus ahorros en criptomonedas o plataformas de trading que desaparecen de la noche a la mañana.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-slate-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                                    ❌
                                </div>
                                Sistemas Complicados
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-slate-600">
                                Crear tiendas online, manejar inventarios, pagar publicidad... un trabajo de tiempo completo sin garantía de sueldo.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-slate-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                                    ❌
                                </div>
                                Estafas Piramidales
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-slate-600">
                                Tener que "invitar a 3 amigos" para poder cobrar. Eso no es un trabajo, es una molestia.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-slate-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                                    ❌
                                </div>
                                "No sé inglés"
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-slate-600">
                                Crees que para trabajar online necesitas dominar el inglés a la perfección. Spoiler: Para esto NO lo necesitas.
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </section>
    );
}
