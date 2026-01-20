export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <span className="text-slate-400 text-sm">Privacidad</span>
                    <span className="text-slate-400 text-sm">Términos</span>
                    <span className="text-slate-400 text-sm">Contacto</span>
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-slate-500">
                        &copy; 2024 Profe de Español Pro. Todos los derechos reservados.
                    </p>
                    <p className="text-center text-xs leading-5 text-slate-400 mt-2">
                        Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}
