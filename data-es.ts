import { Idea } from './types';

export const ideasEs: Idea[] = [
  // --- BATCH 1: Retail/Services Operations ---

  // 1. Confirmador de PIX -> Detector de Comprobantes Falsos
  {
    id: 'pix',
    slug: 'detector-transferencias-falsas',
    seoTitle: 'Verificador de Transferencias y Pagos QR | SolutionKit',
    hero: {
      title: 'Deja de perder dinero con capturas de pantalla falsas',
      subtitle: 'La solución automática que valida si el dinero entró realmente en tu banco y avisa en 1 segundo.',
    },
    pain: {
      heading: '¿Pierdes tiempo revisando la App del banco mientras la fila crece?',
      description: [
        'Tu cajero tiene que parar, abrir el banco, loguearse y buscar el monto. Mientras tanto, el cliente se impacienta.',
        'Los estafadores muestran comprobantes editados o transferencias programadas y se llevan tu mercancía gratis.',
      ],
    },
    solution: {
      heading: 'Pantalla Verde: Dinero en cuenta. Fraude eliminado.',
      description: [
        'Conectamos directamente con tu API bancaria. Cuando el cliente paga (Transferencia, QR, Móvil), validamos la transacción real.',
        'Coloca una tablet frente al mostrador. Si parpadea verde, entrega el producto. Sin dar la clave del banco a los empleados.',
      ],
    },
    features: [
      { title: 'Alerta Visual', description: 'Pantalla verde y sonido de caja solo cuando el dinero está acreditado.', icon: 'zap' },
      { title: 'Cero Acceso a Fondos', description: 'Sistema de solo lectura. Nadie puede mover tu dinero.', icon: 'shield' },
      { title: 'Fila Rápida', description: 'Verificación en <1 segundo. Atiende al siguiente.', icon: 'clock' },
      { title: 'Cierre de Caja', description: 'Reporte exacto de cuánto ingresó digitalmente hoy.', icon: 'check' },
    ],
    pricing: {
      value: '9.90',
      period: 'mes',
      comparison: 'Menos que el costo de una sola estafa',
    },
    cta: 'PROTEGER MIS INGRESOS',
  },

  // 2. Ponto Doméstica -> Control Asistencia Hogar
  {
    id: 'maid-point',
    slug: 'control-asistencia-empleada-hogar',
    seoTitle: 'App de Control Horario para Empleadas del Hogar | SolutionKit',
    hero: {
      title: 'Evita demandas laborales de tu personal doméstico',
      subtitle: 'Control de entrada, salida y horas extras por WhatsApp. 100% Seguro y con validez legal.',
    },
    pain: {
      heading: 'El cuaderno de notas no sirve en un juicio',
      description: [
        '¿Confías en notas manuales? Ante una demanda, el "yo creo" no vale nada. El riesgo de pagar horas extras retroactivas es enorme.',
        'Las planillas de Excel son tediosas y el software de RRHH corporativo es muy caro para una sola empleada.',
      ],
    },
    solution: {
      heading: 'Fichaje por WhatsApp con GPS verificado',
      description: [
        'Tu empleada envía un "Hola" al llegar. El sistema registra la hora y la ubicación exacta.',
        'A fin de mes, recibes un PDF listo para firmar, con horas extras y descansos calculados automáticamente.',
      ],
    },
    features: [
      { title: 'Fichaje WhatsApp', description: 'Sin instalar Apps. Funciona en cualquier celular.', icon: 'zap' },
      { title: 'Cálculo Automático', description: 'Horas extras y compensatorias sin errores matemáticos.', icon: 'clock' },
      { title: 'Respaldo Legal', description: 'Historial digital auditable para evitar conflictos.', icon: 'shield' },
      { title: 'Alertas', description: 'Te avisa si olvidó marcar la entrada o salida.', icon: 'check' },
    ],
    pricing: {
      value: '7.90',
      period: 'mes',
      comparison: 'Precio de un café al día',
    },
    cta: 'PRUEBA GRATIS 7 DÍAS',
  },

  // 3. Orçamento Reforma -> Cotización Obra
  {
    id: 'construction-quote',
    slug: 'generador-cotizacion-obra',
    seoTitle: 'Generador de Presupuestos y Cotizaciones de Obra | SolutionKit',
    hero: {
      title: 'Deja de perder obras por enviar precios por chat',
      subtitle: 'Crea cotizaciones profesionales en PDF en 2 minutos y cierra más trabajos.',
    },
    pain: {
      heading: 'Un precio informal genera desconfianza',
      description: [
        'El cliente pide precio y envías un texto desordenado. Lo ve y no responde. Perdiste ante alguien más profesional.',
        'Sin un alcance formal, el cliente pide "extras" gratis a mitad de la obra y pierdes dinero.',
      ],
    },
    solution: {
      heading: 'Profesionalismo que justifica tu valor',
      description: [
        'Carga los ítems en tu celular. El sistema genera un PDF elegante con tu logo, costos y términos de garantía.',
        'Envía un link profesional. El cliente siente seguridad y te contrata, aunque cobres más.',
      ],
    },
    features: [
      { title: 'PDF Instantáneo', description: 'Documento listo para enviar por WhatsApp/Email.', icon: 'check' },
      { title: 'Lista de Materiales', description: 'Calcula lo que el cliente debe comprar.', icon: 'clock' },
      { title: 'Cláusulas de Garantía', description: 'Texto legal protegiendo el alcance de tu servicio.', icon: 'shield' },
      { title: 'Historial', description: 'Guarda cuánto cobraste en obras anteriores.', icon: 'zap' },
    ],
    pricing: {
      value: '4.90',
      period: 'mes',
      comparison: 'Una obra extra paga 10 años',
    },
    cta: 'CREAR MI COTIZACIÓN',
  },

  // 4. Placa de Obra -> Cartel de Obra
  {
    id: 'construction-sign',
    slug: 'generador-cartel-obra-municipal',
    seoTitle: 'Generador de Cartel de Obra Estándar Municipal | SolutionKit',
    hero: {
      title: '¿Tu obra clausurada por falta de señalización?',
      subtitle: 'Genera el cartel obligatorio con la normativa de tu ciudad en 30 segundos.',
    },
    pain: {
      heading: 'A los inspectores les encanta multar carteles faltantes',
      description: [
        'Necesitas iniciar la obra pero no sabes el diseño exigido, tamaño de letra o datos técnicos obligatorios.',
        'Contratar un diseñador es lento. La multa municipal es inmediata.',
      ],
    },
    solution: {
      heading: 'Rellena, Descarga, Imprime en la Gráfica',
      description: [
        'Selecciona tu ciudad/municipio, ingresa los datos del Responsable Técnico y número de permiso.',
        'El sistema genera el archivo de alta resolución (PDF/Vector) cumpliendo la ley local.',
      ],
    },
    features: [
      { title: 'Normativa Local', description: 'Plantillas según el código de edificación.', icon: 'check' },
      { title: 'Código QR', description: 'Generación automática si la municipalidad lo exige.', icon: 'zap' },
      { title: 'Alta Resolución', description: 'Archivo listo para impresión en lona grande.', icon: 'shield' },
      { title: 'Multiprofesional', description: 'Incluye Ing., Arquitecto y Constructora.', icon: 'check' },
    ],
    pricing: {
      value: '9.90',
      period: 'cartel',
      comparison: '10x más barato que un diseñador',
    },
    cta: 'GENERAR CARTEL',
  },

  // 5. Otimizador Fotos Marketplace -> Optimizador E-commerce
  {
    id: 'photo-optimizer',
    slug: 'editor-fotos-mercado-libre',
    seoTitle: 'Fondo Blanco y Redimensionado para Mercado Libre | SolutionKit',
    hero: {
      title: '¿Anuncios pausados por "mala calidad" de foto?',
      subtitle: 'Fondo blanco automático y ajuste de dimensiones para Mercado Libre, Amazon y Shopify.',
    },
    pain: {
      heading: 'Pierdes ventas mientras editas fotos manualmente',
      description: [
        'Tomar foto, pasar a PC, abrir Photoshop, recortar... gastas 20 minutos por producto.',
        'El marketplace rechaza tu anuncio si el fondo no es Blanco RGB 255. Tu exposición cae a cero.',
      ],
    },
    solution: {
      heading: 'Arrastra, Suelta y Vende',
      description: [
        'Sube las fotos crudas del celular. Nuestra IA quita el fondo, centra el producto y ajusta a 1200x1200px.',
        'Descarga en lote y publica. Tus anuncios ganan relevancia en el algoritmo.',
      ],
    },
    features: [
      { title: 'Fondo Blanco Puro', description: 'Recorte automático sin bordes dentados.', icon: 'zap' },
      { title: 'Zoom Optimizado', description: 'Resolución alta para activar el zoom en la web.', icon: 'check' },
      { title: 'Edición en Lote', description: 'Procesa 50 fotos mientras tomas café.', icon: 'clock' },
      { title: 'Sin Marca de Agua', description: 'Imágenes limpias listas para vender.', icon: 'shield' },
    ],
    pricing: {
      value: '12.90',
      period: 'mes',
      comparison: 'Fotos ilimitadas',
    },
    cta: 'OPTIMIZAR MIS FOTOS',
  },

  // 6. Agendamento Pet Shop -> Agenda Peluquería Canina
  {
    id: 'pet-schedule',
    slug: 'software-peluqueria-canina',
    seoTitle: 'Sistema de Agenda para Peluquería Canina y Pet Shop | SolutionKit',
    hero: {
      title: 'Elimina el caos en la agenda de tu Pet Shop',
      subtitle: 'Abandona el cuaderno. Agenda online que envía recordatorios automáticos por WhatsApp.',
    },
    pain: {
      heading: 'El cliente olvida y tú pierdes dinero (No-Show)',
      description: [
        'Reservas el turno, el cliente no aparece. Pierdes el ingreso y tiempo ocioso que no vuelve.',
        'Atender llamadas para dar turnos interrumpe el trabajo y estresa a los perros.',
      ],
    },
    solution: {
      heading: 'Agenda llena sin huecos',
      description: [
        'Envía tu link de reservas. El cliente elige horario y se agenda solo.',
        'El sistema manda un WhatsApp automático 24h y 2h antes: "¡Bobby tiene baño hoy!". Reduce las faltas drásticamente.',
      ],
    },
    features: [
      { title: 'Recordatorio Auto', description: 'Reduce el ausentismo un 80% vía WhatsApp.', icon: 'zap' },
      { title: 'Ficha Mascota', description: 'Historial de cortes, vacunas y alergias.', icon: 'check' },
      { title: 'Caja Diaria', description: 'Mira cuánto facturaste en el día/semana.', icon: 'clock' },
      { title: 'Link de Bio', description: 'Ponlo en Instagram y deja de agendar manual.', icon: 'check' },
    ],
    pricing: {
      value: '9.90',
      period: 'mes',
      comparison: 'Se paga con 1 baño recuperado',
    },
    cta: 'ORGANIZAR MI AGENDA',
  },

  // 7. Termo Consentimento LGPD -> Consentimiento Estética
  {
    id: 'aesthetic-consent',
    slug: 'consentimiento-informado-estetica',
    seoTitle: 'Generador Consentimiento Informado Estética y Spa | SolutionKit',
    hero: {
      title: 'Protege tu clínica de demandas por "malos resultados"',
      subtitle: 'Genera consentimientos informados digitales para Botox, Láser y Ácido Hialurónico.',
    },
    pain: {
      heading: 'El cliente dice que "no fue advertido" y te demanda',
      description: [
        'Los procedimientos estéticos tienen riesgos. Si hay una reacción y no firmó un documento específico, pagas la indemnización.',
        'Los modelos de internet no sirven en un juicio y no cubren derechos de imagen para redes sociales.',
      ],
    },
    solution: {
      heading: 'Documentación Legal en 1 Clic',
      description: [
        'Selecciona el tratamiento. El sistema genera el término detallando riesgos, cuidados y permisos.',
        'El cliente firma en la tablet. Se guarda en la nube encriptado. Estás legalmente cubierta.',
      ],
    },
    features: [
      { title: 'Firma Digital', description: 'Sin papel. Firma en pantalla y envía copia por email.', icon: 'zap' },
      { title: 'Modelos Específicos', description: 'Términos para Armonización, Láser, Microblading.', icon: 'check' },
      { title: 'Derechos de Imagen', description: 'Cláusula clara para postear Antes/Después.', icon: 'shield' },
      { title: 'Protección Datos', description: 'Cumple con leyes de privacidad de salud.', icon: 'check' },
    ],
    pricing: {
      value: '14.90',
      period: 'mes',
      comparison: 'Una consulta legal cuesta $100+',
    },
    cta: 'BLINDAR MI CLÍNICA',
  },

  // 8. Calculadora Frete -> Calculadora Fletes
  {
    id: 'freight-calc',
    slug: 'calculadora-fletes-camion',
    seoTitle: 'Calculadora de Fletes y Logística para Transportistas | SolutionKit',
    hero: {
      title: 'Cotización de flete en 5 segundos, no 5 horas',
      subtitle: 'Elimina planillas complejas. Permite que ventas (o clientes) calculen el envío exacto al instante.',
    },
    pain: {
      heading: 'La demora en cotizar mata la venta',
      description: [
        'El cliente llama por precio. Tienes que abrir 3 Excels (cubicaje, combustible, peajes) para calcular.',
        'Si calculas mal, pierdes dinero. Si tardas, el cliente contrata a otro.',
      ],
    },
    solution: {
      heading: 'Tarifarios Complejos, Interfaz Simple',
      description: [
        'Carga tus tablas de peso/zona una vez. El sistema maneja la lógica.',
        'Ingresa Código Postal y Peso. Obtén una cotización instantánea con todos los recargos.',
      ],
    },
    features: [
      { title: 'Cálculo Volumétrico', description: 'Compara peso real vs volumen automáticamente.', icon: 'check' },
      { title: 'Recargos', description: 'Incluye combustible, seguro y maniobras.', icon: 'clock' },
      { title: 'Portal Clientes', description: 'Inserta en tu web para autogestión.', icon: 'zap' },
      { title: 'Zonificación', description: 'Gestiona tarifas distintas por región.', icon: 'check' },
    ],
    pricing: {
      value: '22.90',
      period: 'mes',
      comparison: 'Para transportistas independientes',
    },
    cta: 'PROBAR CALCULADORA',
  },

  // 9. Gestão Chaves Condomínio -> Control Llaves
  {
    id: 'key-control',
    slug: 'control-llaves-edificio',
    seoTitle: 'Sistema de Control de Llaves para Edificios y Seguridad | SolutionKit',
    hero: {
      title: '¿Quién tiene la llave maestra ahora mismo?',
      subtitle: 'Fin del libro de actas ilegible. Controla préstamos de llaves y accesos digitalmente.',
    },
    pain: {
      heading: 'Llaves perdidas y cero responsabilidad',
      description: [
        'Desapareció la llave de mantenimiento. El guardia de noche no anotó quién la tomó. Tienes que cambiar todas las cerraduras.',
        'Los libros de papel se pierden o son ilegibles. La seguridad del edificio está comprometida.',
      ],
    },
    solution: {
      heading: 'Check-in y Check-out Digital',
      description: [
        'El guardia selecciona la llave y la persona. El sistema registra la hora.',
        'Si no se devuelve a tiempo, el sistema alerta. Auditoría completa de custodia.',
      ],
    },
    features: [
      { title: 'Foto Verificación', description: 'Foto de quien retira la llave.', icon: 'shield' },
      { title: 'Alerta Retraso', description: 'Notifica si la llave no volvió al fin del turno.', icon: 'clock' },
      { title: 'Historial', description: 'Busca: "¿Quién usó la llave #4 el martes?"', icon: 'check' },
      { title: 'Nube', description: 'Funciona en cualquier PC o tablet de recepción.', icon: 'zap' },
    ],
    pricing: {
      value: '12.90',
      period: 'mes',
      comparison: 'Costo mínimo por unidad',
    },
    cta: 'ASEGURAR LLAVES',
  },

  // 10. Contador de Peças -> Inventario App
  {
    id: 'stock-counter',
    slug: 'app-conteo-inventario',
    seoTitle: 'App de Conteo de Stock e Inventario Rápido | SolutionKit',
    hero: {
      title: 'Inventario de stock sin perder la cuenta (ni la cabeza)',
      subtitle: 'App de escaneo rápido para retail y almacenes. Escanea, cuenta, exporta.',
    },
    pain: {
      heading: '1, 2, 3... ¡perdí la cuenta!',
      description: [
        'Hacer inventario anual con papel es una pesadilla. Los errores manuales generan "stock fantasma" y pérdidas.',
        'Los módulos de ERP son lentos y complejos. Necesitas velocidad en el pasillo.',
      ],
    },
    solution: {
      heading: 'Tu celular es un Colector de Datos',
      description: [
        'Usa la cámara para leer códigos de barras o botones rápidos (+1, +10).',
        '¿Terminaste el pasillo? Exporta a Excel/CSV y cárgalo en tu sistema. Brutalmente rápido.',
      ],
    },
    features: [
      { title: 'Escáner Cámara', description: 'Usa la cámara con enfoque rápido.', icon: 'zap' },
      { title: 'Modo Offline', description: 'Cuenta en zonas sin WiFi sin perder datos.', icon: 'shield' },
      { title: 'Exportar CSV', description: 'Formato universal compatible con todo software.', icon: 'check' },
      { title: 'Multi-Ubicación', description: 'Separa conteos por Estante, Pasillo o Caja.', icon: 'clock' },
    ],
    pricing: {
      value: '7.90',
      period: 'mes',
      comparison: 'Más barato que alquilar lectores',
    },
    cta: 'EMPEZAR A CONTAR',
  },

  // --- BATCH 2: Compliance & Logistics ---

  // 11. Gerador Contrato Freelance -> Contrato Servicios
  {
    id: 'freelance-contract',
    slug: 'generador-contrato-servicios',
    seoTitle: 'Generador de Contrato de Servicios Freelance (B2B) | SolutionKit',
    hero: {
      title: 'Contrata externos sin riesgo de "Relación de Dependencia"',
      subtitle: 'Genera contratos de prestación de servicios comercialmente seguros en 3 minutos.',
    },
    pain: {
      heading: 'Acuerdos vagos invitan a demandas laborales',
      description: [
        'Usar plantillas que no especifican la "no-subordinación" crea riesgo de que se considere un empleo encubierto.',
        'Los abogados cobran caro por redactar un contrato simple de servicios.',
      ],
    },
    solution: {
      heading: 'Contratos B2B Blindados',
      description: [
        'Responde preguntas simples (alcance, entregables, precio). Generamos un contrato enfocado en resultados, no horas.',
        'Cláusulas diseñadas para proteger tu propiedad intelectual y clarificar el estatus independiente.',
      ],
    },
    features: [
      { title: 'Cláusulas Seguridad', description: 'Define claramente la independencia laboral.', icon: 'shield' },
      { title: 'Firma Digital', description: 'Envía link para firmar al instante.', icon: 'zap' },
      { title: 'Plantillas Nicho', description: 'Desarrollo, Marketing, Diseño, Consultoría.', icon: 'check' },
      { title: 'Archivo Nube', description: 'Nunca pierdas un contrato firmado.', icon: 'clock' },
    ],
    pricing: {
      value: '9.90',
      period: 'mes',
      comparison: 'Más barato que 5 min de abogado',
    },
    cta: 'GENERAR CONTRATO',
  },

  // 12. Conciliador Taxas Cartão -> Auditor Comisiones
  {
    id: 'card-reconciler',
    slug: 'auditor-comisiones-tarjeta',
    seoTitle: 'Auditor de Comisiones de Tarjeta de Crédito | SolutionKit',
    hero: {
      title: '¿Tu procesador de pagos te está robando ganancias?',
      subtitle: 'Audita automáticamente cada transacción para asegurar que las comisiones coincidan con tu contrato.',
    },
    pain: {
      heading: 'Comisiones ocultas comen 5-10% de tu margen',
      description: [
        'Vendes $100, contrato dice 2%, pero solo entran $96. Al año, esa fuga es masiva.',
        'Conciliar estado de cuenta por estado de cuenta es humanamente imposible.',
      ],
    },
    solution: {
      heading: 'Auditoría Automática de Pagos',
      description: [
        'Conectamos con tu procesador (POS/Gateway). Cruzamos ventas vs depósitos.',
        'Si la comisión cobrada excede lo pactado, marcamos el monto exacto para reclamar.',
      ],
    },
    features: [
      { title: 'Detección Fugas', description: 'Alerta cargos ocultos o errores de tasa.', icon: 'zap' },
      { title: 'Pronóstico Flujo', description: 'Sabe exactamente qué entra al banco mañana.', icon: 'clock' },
      { title: 'Multiprocesador', description: 'Ve Stripe y tu POS físico en un solo lugar.', icon: 'check' },
      { title: 'Reporte Reclamo', description: 'Evidencia PDF lista para enviar a soporte.', icon: 'shield' },
    ],
    pricing: {
      value: '12.90',
      period: 'mes',
      comparison: 'Encuentra dinero perdido cada mes',
    },
    cta: 'AUDITAR MIS TASAS',
  },

  // 13. Validador Área Entrega -> Validador Zona Reparto
  {
    id: 'delivery-area',
    slug: 'calculadora-radio-reparto',
    seoTitle: 'Calculadora de Costo de Envío y Radio de Reparto | SolutionKit',
    hero: {
      title: 'Deja de perder dinero en envíos de larga distancia',
      subtitle: 'Define tu zona rentable y automatiza el cálculo de tarifa de envío.',
    },
    pain: {
      heading: 'Entregar muy lejos erosiona tus márgenes',
      description: [
        'El cliente pregunta "¿llegan aquí?". El personal adivina. El repartidor cobra extra por distancia y tú asumes el costo.',
        'Tener flota propia requiere precios precisos por zona para ser rentable.',
      ],
    },
    solution: {
      heading: 'Mapa Logístico Inteligente',
      description: [
        'Dibuja tu zona en el mapa. Configura niveles por radio (km) o Código Postal.',
        'Ingresa dirección/CP. El sistema responde: "En Zona. Tarifa: $5.00". Cero ambigüedad.',
      ],
    },
    features: [
      { title: 'Cotización Instantánea', description: 'Respuesta inmediata de precio/disponibilidad.', icon: 'zap' },
      { title: 'Zonas Visuales', description: 'Dibuja polígonos en el mapa.', icon: 'check' },
      { title: 'Tarifa por Distancia', description: 'Precio dinámico basado en recorrido real.', icon: 'clock' },
      { title: 'Bloqueo Seguridad', description: 'Excluye barrios peligrosos específicos.', icon: 'shield' },
    ],
    pricing: {
      value: '7.90',
      period: 'mes',
      comparison: 'Evita viajes a pérdida',
    },
    cta: 'DEFINIR ZONAS',
  },

  // 14. Ficha Anamnese -> Ficha Paciente Digital
  {
    id: 'anamnesis-form',
    slug: 'formulario-ingreso-paciente',
    seoTitle: 'Fichas Clínicas y de Anamnesis Digitales | SolutionKit',
    hero: {
      title: 'Elimina el portapapeles y los archivos físicos',
      subtitle: 'Formularios de ingreso digitales seguros para Quiroprácticos, Fisio y Nutrición.',
    },
    pain: {
      heading: 'Los archivos de papel son inseguros y difíciles de buscar',
      description: [
        'Encontrar una ficha antigua toma tiempo. El desorden de papel luce poco profesional.',
        'Dejar información de salud en el escritorio es un riesgo de privacidad.',
      ],
    },
    solution: {
      heading: 'Historial del paciente en tu tablet',
      description: [
        'Envía un link antes de la cita. El cliente lo llena en casa.',
        'Agrega notas de tratamiento, fotos de progreso y firmas digitales. Todo encriptado y buscable.',
      ],
    },
    features: [
      { title: 'Llenado Remoto', description: 'Ahorra tiempo en recepción. Listo antes de llegar.', icon: 'zap' },
      { title: 'Fotos Progreso', description: 'Adjunta fotos ilimitadas al expediente.', icon: 'check' },
      { title: 'Búsqueda Instantánea', description: 'Encuentra a "Juan Pérez" en 1 segundo.', icon: 'clock' },
      { title: 'Encriptado', description: 'Almacenamiento seguro en la nube para datos sensibles.', icon: 'shield' },
    ],
    pricing: {
      value: '14.90',
      period: 'mes',
      comparison: 'Una recepción sin papeles',
    },
    cta: 'DIGITALIZAR CLÍNICA',
  },

  // 15. Rótulos Alergênicos -> Etiquetas Alimentos
  {
    id: 'food-label',
    slug: 'generador-etiquetas-alimentos',
    seoTitle: 'Generador Etiquetas Nutricionales y Sellos de Advertencia | SolutionKit',
    hero: {
      title: 'Vende tus productos alimenticios legalmente',
      subtitle: 'Genera etiquetas profesionales con tabla nutricional y sellos de advertencia obligatorios.',
    },
    pain: {
      heading: 'Errores de etiquetado causan multas y retiros de producto',
      description: [
        'Las leyes exigen formatos específicos y alertas de alérgenos/exceso de azúcar. Hacerlo manual es riesgoso.',
        'Los supermercados no aceptarán tu producto sin un código de barras y tabla nutricional pro.',
      ],
    },
    solution: {
      heading: 'Científico de Alimentos Automático',
      description: [
        'Ingresa tu receta (ej: 500g harina, 200g azúcar). El sistema calcula calorías y macros.',
        'Genera una etiqueta lista para imprimir con "CONTIENE: TRIGO" o Sellos Negros (Alto en Azúcar) automáticos.',
      ],
    },
    features: [
      { title: 'Base de Datos', description: 'Cálculos de macros precisos.', icon: 'check' },
      { title: 'Detección Alérgenos', description: 'Marca automáticamente los alérgenos comunes.', icon: 'shield' },
      { title: 'Cumplimiento Legal', description: 'Tamaños de fuente y sellos correctos.', icon: 'check' },
      { title: 'Impresión Térmica', description: 'Exporta para impresoras Zebra/Rollo.', icon: 'zap' },
    ],
    pricing: {
      value: '7.90',
      period: 'mes',
      comparison: 'Etiquetas ilimitadas',
    },
    cta: 'CREAR ETIQUETAS',
  },

  // 16. Organizador XML NFe -> Organizador Facturas
  {
    id: 'xml-organizer',
    slug: 'central-facturas-proveedores',
    seoTitle: 'Organizador de Facturas de Proveedores y Gastos | SolutionKit',
    hero: {
      title: 'Nunca más pierdas una factura de proveedor',
      subtitle: 'Centraliza, etiqueta y organiza todas tus facturas y recibos entrantes.',
    },
    pain: {
      heading: 'Facturas perdidas vuelven locos a los contadores',
      description: [
        'Las facturas se pierden en hilos de email. En época de impuestos, corres buscando comprobantes.',
        'Facturas perdidas significan menos deducciones fiscales y más impuestos a pagar.',
      ],
    },
    solution: {
      heading: 'Bandeja de entrada para tus gastos',
      description: [
        'Reenvía facturas a tu email personalizado. Extraemos los datos y las archivamos.',
        'Exporta un ZIP a tu contador mensualmente con un clic. Cero estrés.',
      ],
    },
    features: [
      { title: 'Captura Email', description: 'Reenvía PDFs y nosotros hacemos el resto.', icon: 'zap' },
      { title: 'Flujo Aprobación', description: 'Marca facturas como "Aprobada para Pago".', icon: 'shield' },
      { title: 'Archivo Fiscal', description: 'Almacenamiento por 5 años para auditorías.', icon: 'clock' },
      { title: 'Exportación 1-Clic', description: 'Envía todo a contabilidad al instante.', icon: 'check' },
    ],
    pricing: {
      value: '9.90',
      period: 'mes',
      comparison: 'Tranquilidad fiscal',
    },
    cta: 'ORGANIZAR FACTURAS',
  },

  // 17. Gestor Validade Certificados -> Rastreador Permisos
  {
    id: 'cert-expiry',
    slug: 'rastreador-vencimiento-permisos',
    seoTitle: 'Rastreador de Vencimiento de Licencias y Permisos | SolutionKit',
    hero: {
      title: 'No dejes que la operación pare por un permiso vencido',
      subtitle: 'Seguimiento de validez de Licencias Comerciales, Seguros y Permisos Sanitarios.',
    },
    pain: {
      heading: 'Una licencia vencida significa multas o clausura',
      description: [
        'Si tu permiso sanitario o licencia de alcohol vence, cierras las puertas. La pérdida es masiva.',
        'Renovar a último minuto implica pánico y tasas express.',
      ],
    },
    solution: {
      heading: 'Alerta de Cumplimiento Automatizada',
      description: [
        'Registra tus documentos críticos. El sistema crea una línea de tiempo.',
        'Recibe alertas agresivas (Email, SMS) 60, 30 y 7 días antes. Imposible ignorar.',
      ],
    },
    features: [
      { title: 'Omni-Alertas', description: 'Notificaciones te encuentran donde estés.', icon: 'zap' },
      { title: 'Semáforo UI', description: 'Verde (Bien), Amarillo (Pronto), Rojo (Vencido).', icon: 'check' },
      { title: 'Multi-Ubicación', description: 'Gestiona docs de 10 franquicias en una vista.', icon: 'shield' },
      { title: 'Requisitos', description: 'Anota qué se necesita para renovar.', icon: 'clock' },
    ],
    pricing: {
      value: '4.90',
      period: 'mes',
      comparison: 'Más barato que una multa',
    },
    cta: 'RASTREAR VENCIMIENTOS',
  },

  // 18. Reserva Salas Coworking -> Reserva Salas
  {
    id: 'coworking-booking',
    slug: 'sistema-reserva-salas',
    seoTitle: 'Sistema de Reserva de Salas para Oficinas Compartidas | SolutionKit',
    hero: {
      title: '¿Quién reservó la sala de conferencias?',
      subtitle: 'Termina con los conflictos de horarios y dobles reservas en tu oficina compartida.',
    },
    pain: {
      heading: 'Las planillas llevan a peleas de "Sal, yo reservé esto"',
      description: [
        'Dos equipos aparecen para la misma sala porque la hoja no estaba sincronizada.',
        'Rastrear horas de uso para facturar es un dolor de cabeza manual.',
      ],
    },
    solution: {
      heading: 'Horario Visual en Tiempo Real',
      description: [
        'Los miembros entran, ven disponibilidad y reservan. El espacio se bloquea al instante para otros.',
        'Genera un reporte mensual de uso para facturación precisa.',
      ],
    },
    features: [
      { title: 'Check-in QR', description: 'Escanea en la puerta para reclamar la sala.', icon: 'zap' },
      { title: 'Créditos', description: 'Limita horas según el plan de membresía.', icon: 'shield' },
      { title: 'Pantalla Lobby', description: 'Muestra reservas actuales en una TV.', icon: 'check' },
      { title: 'Sincronización', description: 'Funciona con Google Calendar/Outlook.', icon: 'clock' },
    ],
    pricing: {
      value: '12.90',
      period: 'mes',
      comparison: 'Para hasta 5 salas',
    },
    cta: 'GESTIONAR SALAS',
  },

  // 19. Simulador Imposto -> Estimador Impuestos
  {
    id: 'tax-simulator',
    slug: 'estimador-impuestos-pyme',
    seoTitle: 'Estimador de Impuestos y IVA para Pymes | SolutionKit',
    hero: {
      title: '¿Cuánto impuesto debo pagar el próximo mes?',
      subtitle: 'Estimador simple para predecir la carga fiscal y proteger el flujo de caja.',
    },
    pain: {
      heading: 'La cuenta de impuestos no debería ser sorpresa',
      description: [
        'Los ingresos fluctúan, y los impuestos también. Gastar el dinero del IVA por accidente es un error fatal.',
        'Esperar el reporte trimestral del contador es muy tarde para ajustar.',
      ],
    },
    solution: {
      heading: 'Rastreo de Pasivo en Tiempo Real',
      description: [
        'Ingresa ingresos al entrar. El sistema aplica tu tasa impositiva estimada.',
        'Sabe exactamente cuánto efectivo apartar. Simula escenarios "Qué pasa si...".',
      ],
    },
    features: [
      { title: 'Tasas Configurables', description: 'Ajusta tu % de IVA o Renta.', icon: 'check' },
      { title: 'Alerta Tramo', description: 'Avisa si los ingresos te empujan a un régimen superior.', icon: 'shield' },
      { title: 'Ganancia Neta', description: 'Calcula ingreso real después de impuestos.', icon: 'zap' },
      { title: 'Vista Anual', description: 'Proyecta la responsabilidad fiscal del año.', icon: 'clock' },
    ],
    pricing: {
      value: '7.90',
      period: 'mes',
      comparison: 'Claridad financiera',
    },
    cta: 'ESTIMAR IMPUESTOS',
  },

  // 20. CRM Assessoria Imprensa -> CRM Periodistas
  {
    id: 'pr-crm',
    slug: 'crm-relaciones-publicas',
    seoTitle: 'CRM de Relaciones Públicas y Prensa Freelance | SolutionKit',
    hero: {
      title: 'Tu lista de medios, organizada y activa',
      subtitle: 'Un CRM simple para publicistas freelance y agencias de PR boutique.',
    },
    pain: {
      heading: 'Enviar pitches a emails muertos quema puentes',
      description: [
        'Los periodistas cambian de trabajo seguido. Mantener un Excel es un trabajo de tiempo completo.',
        'Las herramientas corporativas cuestan miles al mes, dejando fuera a los freelancers.',
      ],
    },
    solution: {
      heading: 'Relaciones con Medios de Nicho',
      description: [
        'Guarda contactos con etiquetas (ej: "Tech", "Moda", "Crypto").',
        'Registra interacciones: ¿Quién publicó? ¿Quién necesita seguimiento? ¿Quién pasó?',
      ],
    },
    features: [
      { title: 'Log Interacción', description: 'Mira cuándo fue el último contacto.', icon: 'clock' },
      { title: 'Etiquetas Smart', description: 'Filtra "Bloggers Comida" al instante.', icon: 'check' },
      { title: 'Rastreo Links', description: 'Guarda links de cobertura en un perfil.', icon: 'zap' },
      { title: 'Privacidad', description: 'Gestión segura de contactos.', icon: 'shield' },
    ],
    pricing: {
      value: '17.90',
      period: 'mes',
      comparison: 'Fracción del costo de grandes herramientas',
    },
    cta: 'ORGANIZAR PRENSA',
  },

  // --- BATCH 3: HR, Real Estate & Niche Finance ---

  // 21. Rastreador Férias -> Rastreador Vacaciones
  {
    id: 'vacation-tracker',
    slug: 'rastreador-vacaciones-equipo',
    seoTitle: 'Rastreador de Vacaciones y Ausencias de Equipo | SolutionKit',
    hero: {
      title: 'Detén conflictos de vacaciones antes que pasen',
      subtitle: 'Calendario visual de ausencias. Previene falta de personal y aprueba días libres rápido.',
    },
    pain: {
      heading: 'Dos personas clave fuera al mismo tiempo = Caos',
      description: [
        'Sin un calendario visual, apruebas vacaciones superpuestas por accidente.',
        'Rastrear días restantes en hojas de cálculo es propenso a errores.',
      ],
    },
    solution: {
      heading: 'Primero en llegar, primero en servir (con aprobación)',
      description: [
        'Los empleados revisan el calendario y piden fechas. El sistema marca conflictos al instante.',
        'Vista de línea de tiempo muestra exactamente quién está "Dentro" y "Fuera" el próximo mes.',
      ],
    },
    features: [
      { title: 'Alerta Conflicto', description: 'Avisa si la cobertura del dpto es muy baja.', icon: 'shield' },
      { title: 'Vista Equipo', description: 'Calendario unificado para toda la empresa.', icon: 'clock' },
      { title: 'Aprobación 1-Clic', description: 'Aprueba solicitudes directo desde el email.', icon: 'check' },
      { title: 'Saldo Días', description: 'Auto-descuenta días de la asignación anual.', icon: 'zap' },
    ],
    pricing: {
      value: '7.90',
      period: 'mes',
      comparison: 'Hasta 10 empleados',
    },
    cta: 'RASTREAR VACACIONES',
  },

  // 22. Gerador Declaração Horas -> Hoja de Tiempos
  {
    id: 'timesheet',
    slug: 'generador-hoja-tiempos-consultor',
    seoTitle: 'Generador de Hoja de Tiempos (Timesheet) Profesional | SolutionKit',
    hero: {
      title: 'Prueba tus horas de trabajo y cobra más rápido',
      subtitle: 'Genera hojas de tiempo PDF profesionales para adjuntar a tus facturas.',
    },
    pain: {
      heading: 'Los clientes preguntan "¿Qué hiciste toda la semana?"',
      description: [
        'Trabajaste duro, pero el cliente siente que la factura es alta. Sin un registro, es tu palabra contra la suya.',
        'Enviar un archivo Excel crudo se ve amateur.',
      ],
    },
    solution: {
      heading: 'La transparencia construye confianza',
      description: [
        'Registra horas o usa el temporizador. Agrega descripciones (ej: "Depuración API Login").',
        'Genera un reporte PDF con tu marca. Prueba indiscutible de esfuerzo.',
      ],
    },
    features: [
      { title: 'Temporizador', description: 'Start/Stop en escritorio o móvil.', icon: 'clock' },
      { title: 'Reporte PDF', description: 'Formato limpio y profesional.', icon: 'check' },
      { title: 'Segmentos', description: 'Separa horas por Cliente o Proyecto.', icon: 'zap' },
      { title: 'Calc Tarifa', description: 'Auto-calcula total: Horas x Tarifa.', icon: 'shield' },
    ],
    pricing: {
      value: '4.90',
      period: 'mes',
      comparison: 'El tiempo es dinero',
    },
    cta: 'EMPEZAR A RASTREAR',
  },

  // 23. Calculadora Reajuste Aluguel -> Ajuste Inflación Renta
  {
    id: 'rent-calc',
    slug: 'calculadora-inflacion-alquiler',
    seoTitle: 'Calculadora de Aumento de Alquiler e Inflación | SolutionKit',
    hero: {
      title: 'Calcula aumentos de alquiler justa y legalmente',
      subtitle: 'Toma datos oficiales de inflación (IPC) y genera una carta de notificación.',
    },
    pain: {
      heading: 'Aumentos arbitrarios molestan a los inquilinos',
      description: [
        'Escribir "El alquiler sube $50" se siente codicioso. Los inquilinos se resisten.',
        'Olvidar ajustar por inflación significa perder dinero cada año.',
      ],
    },
    solution: {
      heading: 'Ajustes Respaldados por Datos',
      description: [
        'Selecciona el índice de inflación (IPC) y rango de fechas. El sistema calcula el aumento exacto permitido.',
        'Genera un aviso PDF formal citando la fuente de datos. Profesional y objetivo.',
      ],
    },
    features: [
      { title: 'Datos Oficiales', description: 'Vinculado a estadísticas gubernamentales.', icon: 'check' },
      { title: 'Aviso Formal', description: 'Plantilla lista para imprimir/email.', icon: 'shield' },
      { title: 'Portafolio', description: 'Guarda cálculos para múltiples unidades.', icon: 'zap' },
      { title: 'Alerta Renovación', description: 'Te recuerda 60 días antes del fin de contrato.', icon: 'clock' },
    ],
    pricing: {
      value: '3.90',
      period: 'unidad',
      comparison: 'Por año',
    },
    cta: 'CALCULAR AUMENTO',
  },

  // 24. Gerador Recibo Pagamento -> Generador Factura Freelance
  {
    id: 'receipt-gen',
    slug: 'generador-recibo-honorarios',
    seoTitle: 'Generador de Recibo de Honorarios y Facturas Freelance | SolutionKit',
    hero: {
      title: 'Cobra como un negocio profesional',
      subtitle: 'Crea facturas limpias y recibos de pago en segundos.',
    },
    pain: {
      heading: '"Solo hazme una transferencia" se ve poco profesional',
      description: [
        'Los clientes corporativos necesitan una factura adecuada para sus impuestos. Sin una, el pago se retrasa.',
        'Crear docs de Word desde cero cada vez es una pérdida de vida.',
      ],
    },
    solution: {
      heading: 'Facturación Instantánea',
      description: [
        'Ingresa detalles del servicio y monto. El sistema agrega impuestos si es necesario.',
        'Genera un link PDF para enviar por email o chat. Luce profesional, cobra más rápido.',
      ],
    },
    features: [
      { title: 'Config Impuestos', description: 'Agrega IVA o Retenciones fácilmente.', icon: 'check' },
      { title: 'Firma Móvil', description: 'Firma el recibo en la pantalla de tu celular.', icon: 'zap' },
      { title: 'Link Compartible', description: 'Link liviano, sin adjuntos pesados.', icon: 'clock' },
      { title: 'Registros', description: 'Mantén historial de todo lo cobrado.', icon: 'shield' },
    ],
    pricing: {
      value: '7.90',
      period: 'mes',
      comparison: 'Facturas ilimitadas',
    },
    cta: 'CREAR FACTURA',
  },

  // 25. Organizador Senhas Agência -> Bóveda Accesos
  {
    id: 'password-manager',
    slug: 'boveda-claves-agencia',
    seoTitle: 'Gestor de Accesos y Claves de Clientes para Agencias | SolutionKit',
    hero: {
      title: 'Deja de enviar contraseñas de clientes por chat',
      subtitle: 'Bóveda encriptada diseñada para agencias para compartir accesos seguramente sin revelar credenciales.',
    },
    pain: {
      heading: 'Las planillas son una brecha de seguridad esperando pasar',
      description: [
        'Si tu Google Sheet se filtra, tus clientes son hackeados y tú demandado.',
        'Cuando un empleado renuncia, ¿realmente cambias 50 claves manualmente?',
      ],
    },
    solution: {
      heading: 'Comparte acceso, no secretos',
      description: [
        'Guarda credenciales en la bóveda. Comparte "Acceso" con personal vía extensión de navegador.',
        'Ellos inician sesión sin ver nunca la contraseña real. Revoca al instante.',
      ],
    },
    features: [
      { title: 'Cero Conocimiento', description: 'Encriptación significa que ni nosotros vemos tus datos.', icon: 'shield' },
      { title: 'Cubetas Clientes', description: 'Agrupa logins por Cuenta de Cliente.', icon: 'check' },
      { title: 'Auto-Fill', description: 'Extensión llena los formularios de login.', icon: 'zap' },
      { title: 'Logs Auditoría', description: 'Mira exactamente quién accedió a qué cuenta y cuándo.', icon: 'clock' },
    ],
    pricing: {
      value: '14.90',
      period: 'mes',
      comparison: 'Para hasta 5 usuarios',
    },
    cta: 'ASEGURAR ACCESOS',
  },
];