import Image from 'next/image';

export default function SolutionSection() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-16">

                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl bg-slate-50 p-2 ring-1 ring-slate-200">
                            <Image
                                src="/assets/man-teaching.png"
                                alt="Hombre enseñando español desde su casa cómodamente"
                                width={600}
                                height={600}
                                className="rounded-xl shadow-xl w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0 lg:w-1/2">
                        <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-1.5 border border-green-100 mb-6">
                            <span className="text-sm font-semibold text-green-700">
                                La Solución Real 💡
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
                            Gana dinero simplemente <span className="text-sky-600">hablando tu idioma nativo</span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Existe una plataforma global con millones de estudiantes buscando practicar español. No buscan profesores catedráticos, buscan <strong>hablantes nativos</strong> para tener conversaciones reales.
                        </p>

                        <div className="mt-10 space-y-8">
                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold leading-8 text-slate-900">Resultados Rápidos</h3>
                                    <p className="mt-2 text-base leading-7 text-slate-600">
                                        Olvídate de estudiar trading por 6 meses. Aquí puedes tener tu primer alumno y generar ingresos desde la primera semana.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold leading-8 text-slate-900">Método  Paso a Paso</h3>
                                    <p className="mt-2 text-base leading-7 text-slate-600">
                                        Te enseño exactamente qué decir y hacer para que tu perfil sea aprobado y los alumnos te elijan a ti, aunque no tengas experiencia docente.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold leading-8 text-slate-900">Pagos en Dólares</h3>
                                    <p className="mt-2 text-base leading-7 text-slate-600">
                                        Genera ingresos en moneda fuerte desde la comodidad de tu casa en Latinoamérica.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
