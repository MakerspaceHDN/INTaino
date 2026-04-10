const anexosHTML = `
    <!-- ANEXOS CON CARRUSELES DINÁMICOS -->
    <section id="anexos" class="py-24 px-6 border-t border-terracotta relative overflow-hidden" style="background-color: var(--parchment);">
        <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: url('multimedia/fondopagina.png'); background-size: cover; background-position: center;"></div>
        
        <div class="max-w-7xl mx-auto relative z-10">
            <span class="text-xs font-bold tracking-[0.4em] uppercase mb-4 block text-center" style="color: var(--terracotta);">Documentación</span>
            <h2 class="text-4xl md:text-5xl mb-4 brand-font text-center" style="color: var(--charcoal);">Anexos Técnicos</h2>
            <p class="text-lg text-center max-w-2xl mx-auto mb-16" style="color: var(--charcoal-muted);">
                Detalles adicionales sobre el desarrollo, diseño y pruebas del prototipo NITAINO.
            </p>

            <!-- Team -->
            <div class="mb-20">
                <div class="relative">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="px-4 py-2 relative z-10" style="background: var(--parchment-light); border: 2px solid var(--terracotta);">
                            <h3 class="text-2xl brand-font" style="color: var(--terracotta);">Team</h3>
                        </div>
                        <div class="flex-1 h-px mt-auto mb-4" style="background: var(--terracotta);"></div>
                    </div>
                </div>
                <div class="p-6 rounded-2xl border mb-8" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                    <p class="leading-relaxed" style="color: var(--charcoal);">
                        Equipo Synergy del Politécnico Escuela Hogar del Niño. Formado por estudiantes apasionados por la tecnología y la arqueología, trabajando juntos para crear soluciones innovadoras que protejan tanto el patrimonio como a los exploradores.
                    </p>
                </div>
                
                <!-- Video Protagonista -->
                <div class="relative rounded-2xl overflow-hidden mb-8 group">
                    <div class="aspect-video rounded-2xl border-2 overflow-hidden" style="border-color: var(--terracotta); background: var(--parchment-dark);">
                        <video id="team-video-hero" src="multimedia/IMG_4898.mp4" class="w-full h-full object-cover" loop></video>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6" style="background: linear-gradient(to top, rgba(44,36,27,0.9), transparent); color: #FFFFFF;">
                        <h4 class="text-2xl font-bold mb-1" style="color: #FFFFFF;">Video del Proyecto NITAINO</h4>
                        <p class="text-base" style="color: #FFFFFF;">Presentación completa del prototipo</p>
                    </div>
                    <p class="text-center text-sm text-white mt-2 italic" style="background: rgba(44,36,27,0.9); padding: 8px;">Mantenga el cursor sobre el video para mantenerlo reproduciéndose</p>
                </div>
                
                <!-- Grid de Imágenes Team -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                        <img src="multimedia/team.jpeg" alt="Team" class="w-full h-56 object-contain">
                        <div class="p-4">
                            <h4 class="text-sm font-bold text-white">Equipo Synergy - Presentación</h4>
                            <p class="text-xs mt-1" style="color: var(--terracotta);">Integrantes del equipo durante la presentación oficial</p>
                        </div>
                    </div>
                    <div class="rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                        <img src="multimedia/team3.jpeg" alt="Team 3" class="w-full h-56 object-contain">
                        <div class="p-4">
                            <h4 class="text-sm font-bold text-white">Visita a Cueva - Exploración</h4>
                            <p class="text-xs mt-1" style="color: var(--terracotta);">Primera visita de reconocimiento a zona arqueológica</p>
                        </div>
                    </div>
                    <div class="rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                        <img src="multimedia/team6.jpeg" alt="Team 6" class="w-full h-56 object-contain">
                        <div class="p-4">
                            <h4 class="text-sm font-bold text-white">Visita al Museo - Investigación</h4>
                            <p class="text-xs mt-1" style="color: var(--terracotta);">Investigación en museo con exhibit de esqueleto</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Diseño -->
            <div class="mb-20">
                <div class="relative">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="px-4 py-2 relative z-10" style="background: var(--parchment-light); border: 2px solid var(--terracotta);">
                            <h3 class="text-2xl brand-font" style="color: var(--terracotta);">Diseño</h3>
                        </div>
                        <div class="flex-1 h-px mt-auto mb-4" style="background: var(--terracotta);"></div>
                    </div>
                </div>
                <div class="p-6 rounded-2xl border mb-8" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                    <p class="leading-relaxed" style="color: var(--charcoal);">
                        Proceso de diseño iterativo del robot NITAINO. Desde las primeras conceptos hasta el prototipo funcional, cada versión fue probada y mejorada para maximizar la efectividad en la exploración de cuevas.
                    </p>
                </div>
                <div class="carousel-wrapper relative">
                    <div class="carousel-move flex gap-4 overflow-x-auto pb-4 scrollbar-hide" id="carousel-diseno">
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                                <img src="multimedia/diseno.jpg" alt="Diseño" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-base font-bold mb-1" style="color: var(--charcoal);">Diseño 3D - Modelo Conceptual</h4>
                                    <p class="text-xs" style="color: var(--terracotta);">Prototipo virtual en 3D simplificado</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                                <img src="multimedia/diseno2.png" alt="Diseño 2" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-base font-bold mb-1" style="color: var(--charcoal);">Prototipo v1 - Vista Lateral</h4>
                                    <p class="text-xs" style="color: var(--terracotta);">Primera iteración funcional del robot vista lateral</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                                <img src="multimedia/diseno3.png" alt="Diseño 3" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-base font-bold mb-1" style="color: var(--charcoal);">Versión Final - Vista Frontal</h4>
                                    <p class="text-xs" style="color: var(--terracotta);">Modelo casi definitivo del robot vista frontal</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño4.png" alt="Diseño 4" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Diseño de Llanta v1</h4>
                                    <p class="text-[#c5a059] text-xs">Primera versión del diseño de llanta</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño5.png" alt="Diseño 5" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Diseño de Llanta v2</h4>
                                    <p class="text-[#c5a059] text-xs">Segunda versión del diseño de llanta</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño6.png" alt="Diseño 6" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Diseño de Aro de Llantas</h4>
                                    <p class="text-[#c5a059] text-xs">Estructura del aro para las llantas del robot</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño7.png" alt="Diseño 7" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Montaje - Llanta y Aro</h4>
                                    <p class="text-[#c5a059] text-xs">Diseño de llantas y aro acoplados</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño8.jpg" alt="Diseño 8" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Fotos del Robot</h4>
                                    <p class="text-[#c5a059] text-xs">Imágenes del prototipo en pruebas</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño10.jpg" alt="Diseño 10" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Fotos del Robot v2</h4>
                                    <p class="text-[#c5a059] text-xs">Otra imagen del prototipo</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño11.jpg" alt="Diseño 11" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Fotos del Robot - Vista Superior</h4>
                                    <p class="text-[#c5a059] text-xs">Imagen del robot vista desde arriba</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño12.jpg" alt="Diseño 12" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Fotos del Robot - Vista Frontal</h4>
                                    <p class="text-[#c5a059] text-xs">Imagen del robot vista de frente</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño13.jpg" alt="Diseño 13" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Fotos del Robot - Vista Lateral</h4>
                                    <p class="text-[#c5a059] text-xs">Imagen del robot vista de lado</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/ruedas4.jpeg" alt="Ruedas 4" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Evolución de Ruedas</h4>
                                    <p class="text-[#c5a059] text-xs">Foto de varias versiones de ruedas</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño14.jpg" alt="Diseño 14" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Fotos del Robot v3</h4>
                                    <p class="text-[#c5a059] text-xs">Imagen adicional del prototipo</p>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño16.jpeg" alt="Diseño 16" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Estudiante Trabajando en el Robot</h4>
                                    <p class="text-[#c5a059] text-xs">Miembro del equipo ensamblando el prototipo</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño17.jpeg" alt="Diseño 17" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Estudiante Trabajando v2</h4>
                                    <p class="text-[#c5a059] text-xs">Otra foto del estudiante trabajando en el robot</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/diseño18.jpeg" alt="Diseño 18" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Estudiante Trabajando v3</h4>
                                    <p class="text-[#c5a059] text-xs">Foto adicional del estudiante con el robot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:hidden flex justify-center items-center gap-2 mt-3 text-sm" style="color: var(--terracotta);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                        <span class="animate-pulse">Desliza para ver más</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                    <button onclick="scrollCarousel('carousel-diseno', -1)" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-10 hidden md:flex bg-black text-white hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button onclick="scrollCarousel('carousel-diseno', 1)" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-10 hidden md:flex bg-black text-white hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>

            <!-- Maniobrabilidad -->
            <div class="mb-20">
                <div class="relative">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="px-4 py-2 relative z-10" style="background: var(--parchment-light); border: 2px solid var(--terracotta);">
                            <h3 class="text-2xl brand-font" style="color: var(--terracotta);">Maniobrabilidad</h3>
                        </div>
                        <div class="flex-1 h-px mt-auto mb-4" style="background: var(--terracotta);"></div>
                    </div>
                </div>
                <div class="p-6 rounded-2xl border mb-8" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                    <p class="leading-relaxed" style="color: var(--charcoal);">
                        Pruebas de movimiento y control del robot. El sistema de tracción y las iteraciones del diseño de ruedas permitieron lograr un robot estable y fácil de controlar en diferentes superficies.
                    </p>
                </div>
                <div class="carousel-wrapper relative">
                    <div class="carousel-move flex gap-4 overflow-x-auto pb-4 scrollbar-hide" id="carousel-maniobrabilidad">
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                                <video src="multimedia/maniobrabilidad.MP4" class="w-full h-48 object-cover" autoplay muted disablePictureInPicture loop></video>
                                <div class="p-4">
                                    <h4 class="text-base font-bold mb-1" style="color: var(--charcoal);">Ojos que Ven</h4>
                                    <p class="text-xs" style="color: var(--terracotta);">Video del funcionamiento de la cámara en acción</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style="background: var(--parchment-light); border-color: var(--parchment-border);">
                                <video src="multimedia/maniobrabilidad2.mp4" class="w-full h-48 object-cover" autoplay muted disablePictureInPicture loop></video>
                                <div class="p-4">
                                    <h4 class="text-base font-bold mb-1" style="color: var(--charcoal);">Explorando lo Desconocido</h4>
                                    <p class="text-xs" style="color: var(--terracotta);">El robot en acción dentro de una cueva</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <video src="multimedia/maniobrabilidad3.mp4" class="w-full h-48 object-cover" autoplay muted disablePictureInPicture loop></video>
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">De Vuelta en la Cueva</h4>
                                    <p class="text-[#c5a059] text-xs">Segundo video del robot explorando en cueva</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item min-w-[280px] md:min-w-[300px] flex-shrink-0">
                            <div class="bg-stone-800/50 rounded-xl border border-stone-700 overflow-hidden hover:border-[#c5a059] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c5a059]/20">
                                <img src="multimedia/ruedas4.jpeg" alt="Ruedas" class="w-full h-48 object-cover">
                                <div class="p-4">
                                    <h4 class="text-white text-base font-bold mb-1">Detalle de Ruedas v2</h4>
                                    <p class="text-[#c5a059] text-xs">Una mirada más cercana al sistema de tracción mejorado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:hidden flex justify-center items-center gap-2 mt-3 text-sm" style="color: var(--terracotta);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                        <span class="animate-pulse">Desliza para ver más</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                    <button onclick="scrollCarousel('carousel-maniobrabilidad', -1)" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition z-10 hidden md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button onclick="scrollCarousel('carousel-maniobrabilidad', 1)" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition z-10 hidden md:flex">
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
