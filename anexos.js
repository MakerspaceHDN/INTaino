const anexosHTML = `
    <!-- ANEXOS CON CARRUSELES DINÁMICOS -->
    <section id="anexos" class="py-24 px-6 border-t border-stone-800 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#c5a059]/5 to-transparent pointer-events-none"></div>
        
        <div class="max-w-7xl mx-auto relative z-10">
            <span class="text-[#c5a059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block text-center">Documentación</span>
            <h2 class="text-4xl md:text-5xl text-white mb-4 brand-font text-center">Anexos Técnicos</h2>
            <p class="text-stone-300 text-lg text-center max-w-2xl mx-auto mb-16">
                Detalles adicionales sobre el desarrollo, diseño y pruebas del prototipo NITAINO.
            </p>

            <!-- Team -->
            <div class="mb-20">
                <div class="relative">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="bg-[#1a1614] px-4 py-2 relative z-10">
                            <h3 class="text-2xl text-white brand-font">Team</h3>
                        </div>
                        <div class="flex-1 h-px bg-stone-700 mt-auto mb-4"></div>
                    </div>
                </div>
                <div class="bg-stone-900/50 p-6 rounded-2xl border border-stone-800 mb-8">
                    <p class="text-stone-300 leading-relaxed">
                        Equipo Synergy del Politécnico Escuela Hogar del Niño. Formado por estudiantes apasionados por la tecnología y la arqueología, trabajando juntos para crear soluciones innovadoras que protejan tanto el patrimonio como a los exploradores.
                    </p>
                </div>
                
                <!-- Video Protagonista -->
                <div class="relative rounded-2xl overflow-hidden mb-8 group">
                    <div class="aspect-video bg-stone-900 rounded-2xl border-2 border-[#c5a059]/50 overflow-hidden">
                        <video id="team-video-hero" src="multimedia/IMG_4898.mp4" class="w-full h-full object-cover" controls loop muted></video>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                        <h4 class="text-white text-xl font-bold mb-1">Video del Proyecto NITAINO</h4>
                        <p class="text-[#c5a059] text-sm">Presentación completa del prototipo</p>
                    </div>
                </div>
                
                <!-- Grid de Imágenes Team -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                        <img src="multimedia/team.jpeg" alt="Team" class="w-full h-56 object-cover">
                        <div class="p-4">
                            <h4 class="text-white text-sm font-bold">Equipo Synergy</h4>
                            <p class="text-[#c5a059] text-xs mt-1">Presentación oficial</p>
                        </div>
                    </div>
                    <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                        <img src="multimedia/team3.jpeg" alt="Team 3" class="w-full h-56 object-cover">
                        <div class="p-4">
                            <h4 class="text-white text-sm font-bold">Trabajo en equipo</h4>
                            <p class="text-[#c5a059] text-xs mt-1">Colaboración y esfuerzo</p>
                        </div>
                    </div>
                    <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                        <img src="multimedia/team6.jpeg" alt="Team 6" class="w-full h-56 object-cover">
                        <div class="p-4">
                            <h4 class="text-white text-sm font-bold">Moments captured</h4>
                            <p class="text-[#c5a059] text-xs mt-1">Documentación del proceso</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Diseño -->
            <div class="mb-20">
                <div class="relative">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="bg-[#1a1614] px-4 py-2 relative z-10">
                            <h3 class="text-2xl text-white brand-font">Diseño</h3>
                        </div>
                        <div class="flex-1 h-px bg-stone-700 mt-auto mb-4"></div>
                    </div>
                </div>
                <div class="bg-stone-900/50 p-6 rounded-2xl border border-stone-800 mb-8">
                    <p class="text-stone-300 leading-relaxed">
                        Proceso de diseño iterativo del robot NITAINO. Desde las primeras conceptos hasta el prototipo funcional, cada versión fue probada y mejorada para maximizar la efectividad en la exploración de cuevas.
                    </p>
                </div>
                <div class="carousel-wrapper relative">
                    <div class="carousel-move flex gap-4 overflow-x-auto pb-4 scrollbar-hide" id="carousel-diseno">
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseno.jpg" alt="Diseño" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Diseño Inicial</h4>
                                    <p class="text-[#c5a059] text-xs">Concepto base</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseno2.png" alt="Diseño 2" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Prototipo v1</h4>
                                    <p class="text-[#c5a059] text-xs">Versión mejorada</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseno3.png" alt="Diseño 3" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Versión Final</h4>
                                    <p class="text-[#c5a059] text-xs">Prototipo funcional</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño4.png" alt="Diseño 4" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Iteración 2</h4>
                                    <p class="text-[#c5a059] text-xs">Mejoras técnicas</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño5.png" alt="Diseño 5" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Sistema Electrónico</h4>
                                    <p class="text-[#c5a059] text-xs">Integración ESP32</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño6.png" alt="Diseño 6" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Chasis</h4>
                                    <p class="text-[#c5a059] text-xs">Estructura</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño7.png" alt="Diseño 7" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Montaje</h4>
                                    <p class="text-[#c5a059] text-xs">Componentes</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño8.jpg" alt="Diseño 8" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Pruebas</h4>
                                    <p class="text-[#c5a059] text-xs">Validación</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño9.jpg" alt="Diseño 9" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Prototipo</h4>
                                    <p class="text-[#c5a059] text-xs">Versión funcional</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño10.jpg" alt="Diseño 10" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Detalles</h4>
                                    <p class="text-[#c5a059] text-xs">Acabados</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño11.jpg" alt="Diseño 11" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Ruedas v1</h4>
                                    <p class="text-[#c5a059] text-xs">Sistema inicial</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño12.jpg" alt="Diseño 12" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Ruedas v2</h4>
                                    <p class="text-[#c5a059] text-xs">Mejora tracción</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño13.jpg" alt="Diseño 13" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Ruedas v3</h4>
                                    <p class="text-[#c5a059] text-xs">Versión final</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/ruedas4.jpeg" alt="Ruedas 4" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Ruedas v4</h4>
                                    <p class="text-[#c5a059] text-xs">Optimización</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño14.jpg" alt="Diseño 14" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Iteración 3</h4>
                                    <p class="text-[#c5a059] text-xs">Refinamiento</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño15.jpg" alt="Diseño 15" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Ensamblaje</h4>
                                    <p class="text-[#c5a059] text-xs">Integración final</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño16.jpeg" alt="Diseño 16" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Resultado</h4>
                                    <p class="text-[#c5a059] text-xs">Robot completo</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño17.jpeg" alt="Diseño 17" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Prueba final</h4>
                                    <p class="text-[#c5a059] text-xs">Validación</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño18.jpeg" alt="Diseño 18" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Producto final</h4>
                                    <p class="text-[#c5a059] text-xs">NITAINO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onclick="scrollCarousel('carousel-diseno', -1)" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition z-10 hidden md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button onclick="scrollCarousel('carousel-diseno', 1)" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition z-10 hidden md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>

            <!-- Maniobrabilidad -->
            <div class="mb-20">
                <div class="relative">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="bg-[#1a1614] px-4 py-2 relative z-10">
                            <h3 class="text-2xl text-white brand-font">Maniobrabilidad</h3>
                        </div>
                        <div class="flex-1 h-px bg-stone-700 mt-auto mb-4"></div>
                    </div>
                </div>
                <div class="bg-stone-900/50 p-6 rounded-2xl border border-stone-800 mb-8">
                    <p class="text-stone-300 leading-relaxed">
                        Pruebas de movimiento y control del robot. El sistema de tracción y las iteraciones del diseño de ruedas permitieron lograr un robot estable y fácil de controlar en diferentes superficies.
                    </p>
                </div>
                <div class="carousel-wrapper relative">
                    <div class="carousel-move flex gap-4 overflow-x-auto pb-4 scrollbar-hide" id="carousel-maniobrabilidad">
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <video src="multimedia/maniobrabilidad.MP4" class="w-full h-48 object-cover" controls></video>
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Prueba v1</h4>
                                    <p class="text-[#c5a059] text-xs">Movimiento inicial</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <video src="multimedia/maniobrabilidad2.mp4" class="w-full h-48 object-cover" controls></video>
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Prueba v2</h4>
                                    <p class="text-[#c5a059] text-xs">Mejora respuesta</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <video src="multimedia/maniobrabilidad3.mp4" class="w-full h-48 object-cover" controls></video>
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Prueba Final</h4>
                                    <p class="text-[#c5a059] text-xs">Robot estable</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/ruedas4.jpeg" alt="Ruedas" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Sistema de Ruedas</h4>
                                    <p class="text-[#c5a059] text-xs">Tracción optimizada</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onclick="scrollCarousel('carousel-maniobrabilidad', -1)" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition z-10 hidden md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button onclick="scrollCarousel('carousel-maniobrabilidad', 1)" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition z-10 hidden md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
        </div>
        
        <div id="anexos-particles" class="absolute inset-0 pointer-events-none overflow-hidden"></div>
    </section>
`;

function renderAnexos() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.insertAdjacentHTML('beforebegin', anexosHTML);
        initParticles();
        initVideoHero();
    }
}

document.addEventListener('DOMContentLoaded', renderAnexos);

function scrollCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const scrollAmount = 320;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function initParticles() {
    const container = document.getElementById('anexos-particles');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: #c5a059;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            bottom: -20px;
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: floatUp ${Math.random() * 15 + 10}s linear infinite;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(particle);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 50}px); opacity: 0; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
}

function initVideoHero() {
    const video = document.getElementById('team-video-hero');
    if (!video) return;
    
    video.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
    });
    
    video.addEventListener('mouseleave', () => {
        video.pause();
    });
}
