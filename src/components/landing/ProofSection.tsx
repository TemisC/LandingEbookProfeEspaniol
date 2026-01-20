import Image from 'next/image';

export default function ProofSection() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
                        "Yo tampoco creía que fuera posible..."
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Después de años buscando y fallando, encontré esto casi por accidente.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">

                    <div className="flex-1 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Al igual que tú, probé de todo. eCommerce, criptomonedas, multinivel... perdí tiempo y dinero.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Hasta que descubrí esta plataforma. En mi primer mes, generé más que en mi antiguo trabajo de oficina. No podía creer que me pagaran solo por tener conversaciones en mi idioma.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Le enseñé el método a una amiga que estaba desempleada. <strong>¿El resultado?</strong> Hoy ella gana incluso más que yo, trabajando sus propios horarios desde casa.
                        </p>
                        <div className="pt-4">
                            <p className="font-semibold text-sky-600 uppercase text-sm tracking-wide">
                                Ingresos reales, semana tras semana
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="relative rounded-2xl p-2 bg-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-100">
                            <Image
                                src="/assets/income-proof.png"
                                alt="Gráfico de ingresos mostrando ganancias de $429 dólares"
                                width={400}
                                height={300}
                                className="rounded-xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold shadow-lg border border-green-200 text-sm max-w-[200px] text-center">
                                💰 Woooo 429 USD de ingresos desde casa con el Español!
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
