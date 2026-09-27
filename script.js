(()=>{
  'use strict'; const PRODUCTS=[{
    id:1,brand:'OMNILIFE',cat:'Bebidas Refrescantes',name:'Agua Blu',price:5.9,stock:19,desc:'Agua mineral natural de manantial.',img:"assets/IMG/imagen-01.png",tone:'omni'
  }  ,{
    id:2,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'Aloe Beta',price:82,stock:18,desc:'Suplemento alimenticio sabor piña con aloe.',img:"assets/IMG/imagen-02.png",tone:'omni'
  }  ,{
    id:3,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'Aqtúa Evolución',price:230,stock:17,desc:'Suplemento alimenticio sabor mandarina con coenzima QH, magnesio, L-carnitina, ribosa y fibra.',img:"assets/IMG/imagen-03.png",tone:'omni'
  }  ,{
    id:4,brand:'OMNILIFE',cat:'Nutrición Ligera',name:'Cafezzino',price:149,stock:16,desc:'Suplemento alimenticio en polvo con café colombiano.',img:"assets/IMG/imagen-04.png",tone:'omni'
  }  ,{
    id:5,brand:'OMNILIFE',cat:'Nutrición Ligera',name:'Dolce Vita',price:191,stock:15,desc:'Suplemento alimenticio en polvo sabor toronja con extracto de café.',img:"assets/IMG/imagen-05.png",tone:'omni'
  }  ,{
    id:6,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'Ego',price:106,stock:14,desc:'Suplemento alimenticio en bebida sabor frutas del bosque.',img:"assets/IMG/imagen-06.png",tone:'omni'
  }  ,{
    id:7,brand:'OMNILIFE',cat:'Balance',name:"Fiber'n Plus",price:206,stock:13,desc:'Suplemento alimenticio en polvo sabor durazno con inulina de agave.',img:"assets/IMG/imagen-07.png",tone:'omni'
  }  ,{
    id:8,brand:'OMNILIFE',cat:'Vitalidad',name:'Undú',price:241,stock:8,desc:'Suplemento con condroitina, glucosamina, extracto de aceituna, aminoácidos, vitaminas y minerales',img:'assets/IMG/imagen-08.png',tone:'omni'
  }  ,{
    id:9,brand:'OMNILIFE',cat:'Bienestar General',name:'OMNIPLUS',price:218,stock:11,desc:'Suplemento alimenticio micelizado sabor naranja, concentrado nutritivo y vitaminas.',img:'assets/IMG/imagen-09.png',tone:'omni'
  }  ,{
    id:10,brand:'OMNILIFE',cat:'Vitalidad',name:'Power Maker',price:254,stock:10,desc:'Nutrición muscular con aminoácidos, vitaminas y minerales, sabor naranja.',img:'assets/IMG/imagen-10.png',tone:'omni'
  }  ,{
    id:11,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'Optimus',price:167,stock:20,desc:'Suplemento alimenticio en polvo sabor lima-limón con colina y aminoácidos.',img:"assets/IMG/imagen-11.png",tone:'omni'
  }  ,{
    id:12,brand:'OMNILIFE',cat:'Nutrición Ligera',name:'Teatino',price:159,stock:19,desc:'Suplemento alimenticio sabor maracuyá con aminoácidos.',img:"assets/IMG/imagen-12.png",tone:'omni'
  }  ,{
    id:13,brand:'OMNILIFE',cat:'Bienestar General',name:'Uzo Evolución',price:1320,stock:18,desc:'Suplemento alimenticio en polvo sabor vainilla francesa. Caja con 30 sobres.',img:"assets/IMG/imagen-13.png",tone:'omni'
  }  ,{
    id:14, img:"assets/IMG/imagen-14.png",brand:'OMNILIFE',cat:'Nutrición Ligera',name:'OMNILIFE Shake Supreme Fresa',price:198,stock:17,desc:'Polvo para preparar bebida sabor fresa silvestre con proteína vegetal.',img:"assets/IMG/imagen-14.png",tone:'omni'
  }  ,{
    id:15,brand:'OMNILIFE',cat:'Nutrición Ligera',name:'OMNILIFE Shake Supreme Cookies & Cream',price:198,stock:16,desc:'Polvo para preparar bebida sabor cookies & cream con proteína vegetal.',img:"assets/IMG/imagen-15.png",tone:'omni'
  }  ,{
    id:16,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'Estop Plus',price:290,stock:15,desc:'Suplemento alimenticio en polvo sabor a nuez con inulina.',img:"assets/IMG/imagen-16.png",tone:'omni'
  }  ,{
    id:17,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'Homo Plus',price:135,stock:14,desc:'Suplemento alimenticio en polvo sabor mandarina con arándano rojo, licopeno y minerales.',img:"assets/IMG/imagen-17.png",tone:'omni'
  }  ,{
    id:18,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'OMNILIFE Vkids',price:201,stock:13,desc:'Suplemento alimenticio en polvo sabor vainilla con proteína vegetal.',img:"assets/IMG/imagen-18.png",tone:'omni'
  }  ,{
    id:19,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'Omniviu Supreme',price:164,stock:12,desc:'Suplemento alimenticio en polvo sabor moras con luteína y zeaxantina.',img:"assets/IMG/imagen-19.png",tone:'omni'
  }  ,{
    id:20, img:"assets/IMG/imagen-20.png",brand:'OMNILIFE',cat:'Nutrición Especializada',name:'OMNILIFE GUMMIES MIMIS',price:545,stock:11,desc:'Suplemento alimenticio en gomita sabor fresa-menta con aminoácidos.',img:"assets/IMG/imagen-20.png",tone:'omni'
  }  ,{
    id:21,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'OMNILIFE Flu-y',price:85,stock:10,desc:'Suplemento alimenticio en cápsulas con magnesio.',img:"assets/IMG/imagen-21.png",tone:'omni'
  }  ,{
    id:22,brand:'OMNILIFE',cat:'Vitalidad',name:'INCA FX',price:46,stock:20,desc:'Contiene vitamina C y fibra dietética, endulzado con frutos de monje y stevia.',img:"assets/IMG/imagen-22.png",tone:'omni'
  }  ,{
    id:23,brand:'OMNILIFE',cat:'Vitalidad',name:'Ego 10',price:17,stock:19,desc:'Suplemento alimenticio líquido sabor fruta de la pasión con inositol y taurina.',img:"assets/IMG/imagen-23.png",tone:'omni'
  }  ,{
    id:24,brand:'OMNILIFE',cat:'Balance',name:'OMNILIFE Probiotic',price:185,stock:18,desc:'Suplemento alimenticio sabor limón-arándano para complementar el balance nutricional.',img:"assets/IMG/imagen-24.png",tone:'omni'
  }  ,{
    id:25,brand:'OMNILIFE',cat:'Bienestar General',name:'One C Mix',price:130,stock:17,desc:'Suplemento alimenticio en polvo sabor mango verde con glutatión, aminoácidos y antioxidantes.',img:"assets/IMG/imagen-25.png",tone:'omni'
  }  ,{
    id:26,brand:'OMNILIFE',cat:'Bienestar General',name:'Omniplus Frutas 940 ml',price:750,stock:16,desc:'Suplemento alimenticio líquido sabor frutas. Producto micelizado y concentrado nutritivo.',img:"assets/IMG/imagen-26.png",tone:'omni'
  }  ,{
    id:27,brand:'OMNILIFE',cat:'Bienestar General',name:'Aqtúa Supreme',price:230,stock:15,desc:'Fórmula con coenzima Q10 y magnesio, sabor mandarina.',img:"assets/IMG/imagen-27.png",tone:'omni'
  }  ,{
    id:28,brand:'OMNILIFE',cat:'Vitalidad',name:'Magnus Supreme',price:142,stock:14,desc:'Suplemento alimenticio en polvo sabor cítrico.',img:"assets/IMG/imagen-28.png",tone:'omni'
  }  ,{
    id:29,brand:'OMNILIFE',cat:'Nutrición Especializada',name:'IQU',price:108,stock:13,desc:'Suplemento alimenticio en bebida de origen natural con jengibre y mandarina.',img:"assets/IMG/imagen-29.png",tone:'omni'
  }  ,{
    id:30,brand:'OMNILIFE',cat:'Nutrición Ligera',name:'Cafezzino Plus',price:149,stock:12,desc:'Bebida de café colombiano para acompañar tu rutina.',img:"assets/IMG/imagen-30.png",tone:'omni'
  }  ,{
    id:31,brand:'SEYTÚ',cat:'Maquillaje',name:'Primer Facial',price:96,stock:11,desc:'Fórmula de textura tipo mousse que perfecciona, matifica y prepara la piel.',img:'assets/productos_reales/foto-31.png',tone:'seytu'
  }  ,{
    id:32,brand:'SEYTÚ',cat:'Maquillaje',name:'Brillo Labial Diamante',price:87,stock:10,desc:'Fórmula que se funde sobre los labios y aporta brillo.',img:'assets/productos_reales/foto-32.png',tone:'seytu'
  }  ,{
    id:33,brand:'SEYTÚ',cat:'Maquillaje',name:'Polvo Iluminador Desert Sunset',price:53,stock:20,desc:'Polvo iluminador de larga duración con brillo radiante y aterciopelado.',img:'assets/productos_reales/foto-33.png',tone:'seytu'
  }  ,{
    id:34,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Suero Facial de Hidratación Profunda con Aloe Vera',price:99,stock:19,desc:'Suero facial que hidrata a profundidad y complementa la rutina de cuidado.',img:'assets/productos_reales/foto-34.png',tone:'seytu'
  }  ,{
    id:35,brand:'SEYTÚ',cat:'Cuidado Diario',name:'Espuma Limpiadora Facial',price:104,stock:18,desc:'Limpieza facial suave para la rutina diaria.',img:'assets/productos_reales/foto-35.png',tone:'seytu'
  }  ,{
    id:36,brand:'SEYTÚ',cat:'Maquillaje',name:'Labial Líquido Mate 90s Baby',price:86,stock:17,desc:'Labial líquido de suave aplicación, color intenso y acabado mate.',img:'assets/productos_reales/foto-36.png',tone:'seytu'
  }  ,{
    id:37,brand:'SEYTÚ',cat:'Maquillaje',name:'Sacapuntas SEYTÚ',price:15,stock:16,desc:'Sacapuntas de doble hoja diseñado para lápices de uso cosmético.',img:'assets/productos_reales/foto-37.png',tone:'seytu'
  }  ,{
    id:38,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Loción Corporal Coco Vainilla',price:72,stock:15,desc:'Hidrata y protege la piel, brindando una sensación de suavidad.',img:'assets/productos_reales/foto-38.png',tone:'seytu'
  }  ,{
    id:39,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Mascarilla Reparadora Capilar',price:75,stock:14,desc:'Repara y fortalece el cabello dañado, ayudando a recuperar su suavidad, brillo y apariencia saludable.',img:'assets/IMG/imagen-39.png',tone:'seytu'
  }  ,{
    id:40,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Jabón Líquido Corporal Frutos Rojos',price:62,stock:13,desc:'Limpia delicadamente la piel manteniéndola hidratada con aroma a frutos rojos.',img:'assets/productos_reales/foto-40.png',tone:'seytu'
  }  ,{
    id:41,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Loción Corporal Frutos Rojos',price:72,stock:12,desc:'Suaviza y nutre la piel con un delicado aroma a frutos rojos.',img:'assets/productos_reales/foto-41.png',tone:'seytu'
  }  ,{
    id:42,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Loción Capilar Fortificante',price:173,stock:11,desc:'Fortalece el cabello y ayuda a reducir la caída por quiebre.',img:'assets/IMG/imagen-42.png',tone:'seytu'
  }  ,{
    id:43,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Crema de Manos Antibacterial Sandía - Melón',price:18,stock:10,desc:'Crema antibacterial para manos de rápida aplicación.',img:'assets/productos_reales/foto-43.png',tone:'seytu'
  }  ,{
    id:44,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Tónico Hidratante',price:135,stock:20,desc:'Ayuda a regresar a la piel su balance de hidratación natural.',img:'assets/productos_reales/foto-44.png',tone:'seytu'
  }  ,{
    id:45,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Mascarilla Facial',price:108,stock:19,desc:'Fórmula de limpieza profunda que promueve la eliminación de células.',img:'assets/productos_reales/foto-45.png',tone:'seytu'
  }  ,{
    id:46,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Protector Solar Facial FPS 50+',price:93,stock:18,desc:'Protector solar facial de toque seco para uso diario.',img:'assets/productos_reales/foto-46.png',tone:'seytu'
  }  ,{
    id:47,brand:'OMNILIFE',cat:'OMNIPLUS',name:'Omniplus Gel Premium',price:98,stock:17,desc:'Hidrata, mejora la elasticidad y ayuda a cuidar la piel y el cabello.',img:'assets/IMG/imagen-47.png',tone:'omnilife'
  }  ,{
    id:48,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Micro-Exfoliante Facial',price:89,stock:16,desc:'Exfoliante facial de textura granulosa que limpia, acondiciona y suaviza.',img:'assets/productos_reales/foto-48.png',tone:'seytu'
  }  ,{
    id:49, img:'assets/products/real/product-49.png',brand:'SEYTÚ',cat:'System',name:'Gel Anti-Manchas',price:157,stock:15,desc:'Gel formulado con activos aclarantes para disminuir progresivamente la apariencia de manchas.',img:'',tone:'seytu'
  }  ,{
    id:50, img:'assets/products/real/product-50.png',brand:'SEYTÚ',cat:'System',name:'Crema para Manos, Cuello y Escote',price:133,stock:14,desc:'Ayuda a minimizar la apariencia de manchas oscuras en manos, cuello y escote.',img:'',tone:'seytu'
  }  ,{
    id:51, img:'assets/products/real/product-51.png',brand:'SEYTÚ',cat:'System',name:'Suero localizado para brotes',price:67,stock:13,desc:'Gel localizado para efecto directo en los brotes y su apariencia.',img:'',tone:'seytu'
  }  ,{
    id:52, img:'assets/products/real/product-52.png',brand:'SEYTÚ',cat:'System',name:'Suplemento T-Specialist',price:203,stock:12,desc:'Suplemento alimenticio sabor arándano con fitoceramidas de trigo.',img:'',tone:'seytu'
  }  ,{
    id:53, img:'assets/products/real/product-53.png',brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Suero para Contorno de Ojos de Hidratación Profunda con Aloe Vera',price:59,stock:11,desc:'Ayuda a mantener iluminada y radiante la zona del contorno de ojos.',img:'',tone:'seytu'
  }  ,{
    id:54,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Desmaquillante para Ojos',price:82,stock:10,desc:'Fórmula para desmaquillar la delicada zona de los ojos.',img:'assets/productos_reales/foto-54.png',tone:'seytu'
  }  ,{
    id:55,brand:'SEYTÚ',cat:'Omniplus',name:'Bálsamo Labial Omniplus FPS15',price:79,stock:20,desc:'Bálsamo labial con filtros orgánicos para protección.',img:'assets/productos_reales/foto-55.png',tone:'seytu'
  }  ,{
    id:56,brand:'SEYTÚ',cat:'Cuidado de la piel',name:'Crema Corporal Piel de Naranja',price:140,stock:19,desc:'Formulada para mejorar textura, hidratación y suavidad de áreas corporales.',img:'assets/productos_reales/foto-56.png',tone:'seytu'
  }  ,{
    id:57,brand:'SEYTÚ',cat:'Capilar',name:'Tinte Permanente sin Amoniaco Castaño Oscuro',price:81,stock:18,desc:'Tinte permanente sin amoníaco para realzar el color natural del cabello.',img:'assets/productos_reales/foto-57.png',tone:'seytu'
  }  ,{
    id:58,brand:'SEYTÚ',cat:'Capilar',name:'Tinte Permanente sin Amoniaco Rojo',price:81,stock:17,desc:'Tinte permanente sin amoníaco para aportar intensidad al cabello.',img:'assets/productos_reales/foto-58.png',tone:'seytu'
  }  ,{
    id:59,brand:'SEYTÚ',cat:'Capilar',name:'Tinte Permanente sin Amoniaco Rubio Claro',price:81,stock:16,desc:'Tinte permanente sin amoníaco para realzar el color natural del cabello.',img:'assets/productos_reales/foto-59.png',tone:'seytu'
  }  ,{
    id:60,brand:'SEYTÚ',cat:'Capilar',name:'Shampoo Color Protect',price:75,stock:15,desc:'Shampoo que ayuda a mantener el tono del cabello teñido.',img:'assets/productos_reales/foto-60.png',tone:'seytu'
  }
  ];
  // Imágenes entregadas por la usuaria: únicamente estas sustituyen las imágenes del catálogo.
  // Los productos sin imagen en IMG usan el indicador "Imagen cargando…".
  const IMG_BY_ID = {
  "1": "assets/IMG/imagen-01.png",
  "2": "assets/IMG/imagen-02.png",
  "3": "assets/IMG/imagen-03.png",
  "4": "assets/IMG/imagen-04.png",
  "5": "assets/IMG/imagen-05.png",
  "6": "assets/IMG/imagen-06.png",
  "7": "assets/IMG/imagen-07.png",
  "8": "assets/IMG/imagen-08.png",
  "9": "assets/IMG/imagen-09.png",
  "10": "assets/IMG/imagen-10.png",
  "11": "assets/IMG/imagen-11.png",
  "12": "assets/IMG/imagen-12.png",
  "13": "assets/IMG/imagen-13.png",
  "14": "assets/IMG/imagen-14.png",
  "15": "assets/IMG/imagen-15.png",
  "16": "assets/IMG/imagen-16.png",
  "17": "assets/IMG/imagen-17.png",
  "18": "assets/IMG/imagen-18.png",
  "19": "assets/IMG/imagen-19.png",
  "20": "assets/IMG/imagen-20.png",
  "21": "assets/IMG/imagen-21.png",
  "22": "assets/IMG/imagen-22.png",
  "23": "assets/IMG/imagen-23.png",
  "24": "assets/IMG/imagen-24.png",
  "25": "assets/IMG/imagen-25.png",
  "26": "assets/IMG/imagen-26.png",
  "27": "assets/IMG/imagen-27.png",
  "28": "assets/IMG/imagen-28.png",
  "29": "assets/IMG/imagen-29.png",
  "30": "assets/IMG/imagen-30.png",
  "31": "assets/IMG/imagen-31.png",
  "32": "assets/IMG/imagen-32.png",
  "33": "assets/IMG/imagen-33.png",
  "34": "assets/IMG/imagen-34.png",
  "35": "assets/IMG/imagen-35.png",
  "36": "assets/IMG/imagen-36.png",
  "37": "assets/IMG/imagen-37.png",
  "38": "assets/IMG/imagen-38.png",
  "39": "assets/IMG/imagen-39.png",
  "40": "assets/IMG/imagen-40.png",
  "41": "assets/IMG/imagen-41.png",
  "42": "assets/IMG/imagen-42.png",
  "43": "assets/IMG/imagen-43.png",
  "44": "assets/IMG/imagen-44.png",
  "45": "assets/IMG/imagen-45.png",
  "46": "assets/IMG/imagen-46.png",
  "47": "assets/IMG/imagen-47.png",
  "48": "assets/IMG/imagen-48.png",
  "49": "assets/IMG/imagen-49.png",
  "50": "assets/IMG/imagen-50.png",
  "51": "assets/IMG/imagen-51.png",
  "52": "assets/IMG/imagen-52.png",
  "53": "assets/IMG/imagen-53.png",
  "54": "assets/IMG/imagen-54.png",
  "55": "assets/IMG/imagen-55.png",
  "56": "assets/IMG/imagen-56.png",
  "57": "assets/IMG/imagen-57.png",
  "58": "assets/IMG/imagen-58.png",
  "59": "assets/IMG/imagen-59.png",
  "60": "assets/IMG/imagen-60.png",
  "61": "assets/IMG/imagen-61.png",
  };
  PRODUCTS.forEach(p => { p.img = IMG_BY_ID[p.id] || ''; });
  const IMAGE_LOADING = 'assets/IMG/imagen-01.png';
  const KEY='omniSeytuModern_v6_catalog60'; const PRODUCT_PATCH_VERSION='catalog_patch_20260924_v4_admin_save_fix'; const clone=()=>PRODUCTS.map(p=>({
    ...p
  }
  )); const defaults={
    user:null,products:clone(),favorites:[],cart:[],orders:[],feedback:[],theme:'light',font:'DM Sans',fontSize:100,notifications:true,motion:true,recentSetting:true,profileName:'Administrador',profileEmail:'admin@omnilife.local',profilePhone:'',profilePassword:'admin',stockSetting:true,confirmDeleteSetting:true,contrast:false,avatar:'',adminAvatar:'',recent:[]
  }
  ; const ADMIN_USER='admin',ADMIN_PASS='admin';
  // API compartida: si la web y PHP están en el mismo servidor se usa la ruta relativa.
  // Si se abre con Live Server (5500/5501), se conserva el backend Apache del servidor.
  const API=(location.protocol==='file:')
    ? 'http://localhost/final_omnilife/backend/api.php'
    : ((location.port==='5500'||location.port==='5501')
      ? `${location.protocol}//${location.hostname}/final_omnilife/backend/api.php`
      : 'backend/api.php');
const TEST_USERS=[
 {nombres:'Usuario 1',apellidos:'Prueba',usuario:'usuario1',correo:'usuario1@prueba.local',clave:'123456'},
 {nombres:'Usuario 2',apellidos:'Prueba',usuario:'usuario2',correo:'usuario2@prueba.local',clave:'123456'},
 {nombres:'Usuario 3',apellidos:'Prueba',usuario:'usuario3',correo:'usuario3@prueba.local',clave:'123456'}
];
function ensureTestUsers(){const current=usersList();let changed=false;for(const t of TEST_USERS){if(!current.some(u=>(u.usuario||'').toLowerCase()===t.usuario)){current.push(t);changed=true}}if(changed)localStorage.setItem('omniSeytuUsers',JSON.stringify(current));}
 let adminSection='dashboard',adminTab='products'; const channel=('BroadcastChannel' in window)?new BroadcastChannel('omniSeytuSync'):null; let state=load(),selectedBrand='todos',rating=0,payment='Yape',currentOrder=null; function load(){
    try{
      const raw=JSON.parse(localStorage.getItem(KEY));
      const loaded=raw?{...defaults,...raw,products:raw.products?.length?raw.products.map(p=>({...p,id:Number(p.id),img:p.img||canonicalImageForId(Number(p.id))||IMG_BY_ID[Number(p.id)]||''})):clone()}:structuredClone(defaults);
      loaded.favorites=Array.isArray(loaded.favorites)?[...new Set(loaded.favorites.map(Number).filter(Number.isFinite))]:[];
      loaded.cart=Array.isArray(loaded.cart)?loaded.cart.map(x=>({id:Number(x.id),qty:Math.max(1,Number(x.qty)||1)})).filter(x=>Number.isFinite(x.id)):[];
      loaded.orders=Array.isArray(loaded.orders)?loaded.orders:[];
      loaded.feedback=Array.isArray(loaded.feedback)?loaded.feedback:[];
      loaded.recent=Array.isArray(loaded.recent)?loaded.recent.map(Number).filter(Number.isFinite):[];
      // Cada entrada como invitado comienza siempre con actividad limpia.
      // Así nunca se arrastran favoritos, carrito, compras u otros datos de una sesión anterior.
      if(!loaded.user){
        loaded.favorites=[];
        loaded.cart=[];
        loaded.orders=[];
        loaded.feedback=[];
        loaded.recent=[];
      }
      if(localStorage.getItem(PRODUCT_PATCH_VERSION)!=='1'){
        const patches={
          39:{name:'Mascarilla Reparadora Capilar',price:75,desc:'Repara y fortalece el cabello dañado, ayudando a recuperar su suavidad, brillo y apariencia saludable.'},
          42:{name:'Loción Capilar Fortificante',price:173,desc:'Fortalece el cabello y ayuda a reducir la caída por quiebre.'},
          47:{name:'Omniplus Gel Premium',price:98,desc:'Hidrata, mejora la elasticidad y ayuda a cuidar la piel y el cabello.'}
        };
        loaded.products=loaded.products.map(p=>patches[p.id]?{...p,...patches[p.id],img:IMG_BY_ID[Number(p.id)]||p.img}:p);
        localStorage.setItem(PRODUCT_PATCH_VERSION,'1');
        localStorage.setItem(KEY,JSON.stringify(loaded));
      }
      return loaded;
    }
    catch{
      return structuredClone(defaults)
    }
  }
  let userStateSyncTimer=null;
let userStateSyncBusy=false;
let userStateSyncQueued=false;
function scheduleUserStateSync(){
  if(!state.user?.id_usuario || state.user?.role==='admin') return;
  clearTimeout(userStateSyncTimer);
  userStateSyncTimer=setTimeout(()=>syncServerUserStateSave(),500);
}
async function syncServerProfile(){
  if(!state.user?.id_usuario) return false;
  try{
    const r=await fetch(`${API}?action=profile_get&id_usuario=${encodeURIComponent(state.user.id_usuario)}&_=${Date.now()}`,{cache:'no-store'});
    const x=await r.json();
    if(!r.ok||x.ok===false||!x.user) throw new Error(x.message||'No se pudo cargar el perfil.');
    state.user={...state.user,...x.user,role:x.user.role||x.user.rol||state.user.role};
    if(state.user.role==='admin'){
      state.profileName=state.user.nombres||'Administrador';
      state.profileEmail=state.user.correo||'admin@omnilife.local';
      state.profilePhone=state.user.telefono||'';if(state.user.avatar)state.avatar=state.user.avatar;
    }
    localStorage.setItem('omniSeytuUsers',JSON.stringify(usersList().map(u=>Number(u.id_usuario)===Number(state.user.id_usuario)?{...u,...state.user}:u)));
    save(false); userUI(); if(state.user.role==='admin') adminUI();
    return true;
  }catch(e){console.warn('No se pudo recuperar el perfil desde MySQL:',e.message);return false;}
}
async function syncServerUserState(){
  if(!state.user?.id_usuario || state.user?.role==='admin') return false;
  try{
    const r=await fetch(`${API}?action=user_state_get&id_usuario=${encodeURIComponent(state.user.id_usuario)}&_=${Date.now()}`,{cache:'no-store'});
    const x=await r.json(); if(!r.ok||x.ok===false)throw new Error(x.message||'No se pudo cargar la configuración guardada.');
    const s=x.state||{};
    if(Array.isArray(s.favorites)) state.favorites=[...new Set(s.favorites.map(Number).filter(Number.isFinite))];
    if(Array.isArray(s.cart)) state.cart=s.cart.map(x=>({id:Number(x.id),qty:Math.max(1,Number(x.qty)||1)})).filter(x=>Number.isFinite(x.id)&&x.id>0);
    if(Array.isArray(s.recent)) state.recent=[...new Set(s.recent.map(Number).filter(Number.isFinite))];
    if(typeof s.selectedBrand==='string') selectedBrand=s.selectedBrand;
    if(Number.isFinite(Number(s.rating))) rating=Math.max(0,Math.min(5,Number(s.rating)));
    if(typeof s.payment==='string'&&s.payment) payment=s.payment;
    if(typeof s.theme==='string') state.theme=s.theme;
    if(typeof s.font==='string'&&s.font) state.font=s.font;
    if(Number.isFinite(Number(s.fontSize))) state.fontSize=Number(s.fontSize);
    if(typeof s.notifications==='boolean') state.notifications=s.notifications;
    if(typeof s.motion==='boolean') state.motion=s.motion;
    if(typeof s.recentSetting==='boolean') state.recentSetting=s.recentSetting;
    if(typeof s.stockSetting==='boolean') state.stockSetting=s.stockSetting;
    if(typeof s.confirmDeleteSetting==='boolean') state.confirmDeleteSetting=s.confirmDeleteSetting;
    if(typeof s.contrast==='boolean') state.contrast=s.contrast;
    if(typeof s.avatar==='string') state.avatar=s.avatar;
    persistUserLocalState();
    save(false); applyPreferences(); renderAll();
    return true;
  }catch(e){console.warn('No se pudo recuperar la configuración del usuario:',e.message);return false}
}
async function syncServerUserStateSave(){
  if(userStateSyncBusy){userStateSyncQueued=true;return}
  if(!state.user?.id_usuario || state.user?.role==='admin')return;
  userStateSyncBusy=true;
  try{
    const durable={
      favorites:state.favorites,
      cart:state.cart,
      recent:state.recent,
      selectedBrand,
      rating,
      payment,
      theme:state.theme,
      font:state.font,
      fontSize:state.fontSize,
      notifications:state.notifications,
      motion:state.motion,
      recentSetting:state.recentSetting,
      stockSetting:state.stockSetting,
      confirmDeleteSetting:state.confirmDeleteSetting,
      contrast:state.contrast,
      avatar:state.avatar||''
    };
    const r=await fetch(`${API}?action=user_state_save`,{method:'POST',headers:{'Content-Type':'application/json'},cache:'no-store',body:JSON.stringify({id_usuario:Number(state.user.id_usuario),state:durable})});
    const x=await r.json();if(!r.ok||x.ok===false)throw new Error(x.message||'No se pudo guardar la configuración.');
    persistUserLocalState();
  }catch(e){console.warn('No se pudo guardar la configuración del usuario:',e.message)}
  finally{userStateSyncBusy=false;if(userStateSyncQueued){userStateSyncQueued=false;scheduleUserStateSync()}}
}
function userStateLocalKey(uid){return 'omniSeytuUserState_'+String(uid||'');}
function persistUserLocalState(){
  if(!state.user?.id_usuario || state.user?.role==='admin') return;
  try{
    localStorage.setItem(userStateLocalKey(state.user.id_usuario),JSON.stringify({
      favorites:state.favorites||[],cart:state.cart||[],recent:state.recent||[]
    }));
  }catch{}
}
function restoreUserLocalState(uid){
  if(!uid)return;
  try{
    const raw=localStorage.getItem(userStateLocalKey(uid));
    if(!raw)return;
    const s=JSON.parse(raw)||{};
    if(Array.isArray(s.favorites))state.favorites=[...new Set(s.favorites.map(Number).filter(Number.isFinite))];
    if(Array.isArray(s.cart))state.cart=s.cart.map(x=>({id:Number(x.id),qty:Math.max(1,Number(x.qty)||1)})).filter(x=>Number.isFinite(x.id)&&x.id>0);
    if(Array.isArray(s.recent))state.recent=[...new Set(s.recent.map(Number).filter(Number.isFinite))];
  }catch{}
}
function save(syncServer=true){
    state.favorites=[...new Set((state.favorites||[]).map(Number).filter(Number.isFinite))];
    state.cart=(state.cart||[]).map(x=>({id:Number(x.id),qty:Math.max(1,Number(x.qty)||1)})).filter(x=>Number.isFinite(x.id));
    state.recent=(state.recent||[]).map(Number).filter(Number.isFinite);
    // Para usuarios registrados mantenemos una copia por cuenta en este navegador
    // y la copia permanente en MySQL. Así cerrar sesión nunca borra sus favoritos/carrito.
    persistUserLocalState();
    const persisted={...state,favorites:state.user?state.favorites:state.favorites,cart:state.user?state.cart:state.cart};
    localStorage.setItem(KEY,JSON.stringify(persisted));
    try{
      // Nunca difundimos pedidos del administrador a otras pestañas/dispositivos.
      // Los pedidos se consultan siempre desde MySQL para evitar duplicados o fugas de datos.
      if(state.user?.role!=='admin'){
        const shared={...state,orders:[]};
        channel?.postMessage({type:'state',state:shared});
      }
    }catch{}
    if(syncServer) scheduleUserStateSync();
  }
  const $=id=>document.getElementById(id), $$=s=>[...document.querySelectorAll(s)], money=n=>`S/ ${Number(n).toFixed(2)}`; function toast(t){
    const e=$('toast'); e.textContent=t; e.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>e.classList.remove('show'),2300)
  }
  function esc(v){
    return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot; ',"'":'&#039;'}[m]))}
function product(id){return state.products.find(p=>p.id===Number(id))}
function canonicalImageForId(id){
  const n=Number(id);
  return Number.isFinite(n)&&n>=1 && (n<=60 || n===61) ? `assets/IMG/imagen-${String(n).padStart(2,'0')}.png` : '';
}
function localProductImage(p){return canonicalImageForId(p?.id)||IMAGE_LOADING}
// Convierte rutas de imágenes de MySQL en URLs seguras para el navegador.
// Esto corrige nombres que contienen espacios, tildes, # y caracteres especiales.
function safeAssetUrl(path){
  if(!path)return IMAGE_LOADING;
  let s=String(path).trim().replaceAll('\\','/');
  if(/^https?:\/\//i.test(s)||s.startsWith('data:')||s.startsWith('blob:'))return s;
  return s.split('/').map(part=>{try{part=decodeURIComponent(part)}catch(e){}return encodeURIComponent(part)}).join('/');
}
function imgOrFallback(p,cls=''){const src=safeAssetUrl(localProductImage(p)||p?.img||IMAGE_LOADING);return `<img class="${cls}" src="${src}" alt="${esc(p?.name||'Producto')}" loading="lazy">`}
function visual(p){return `<div class="product-image"><button class="fav ${
      state.favorites.includes(p.id)?'on':''
    }
    " data-fav="${
      p.id
    }
    " title="${state.favorites.includes(p.id)?'Quitar de favoritos':'Guardar en favoritos'}" aria-label="${state.favorites.includes(p.id)?'Quitar de favoritos':'Guardar en favoritos'}">${state.favorites.includes(p.id)?'★':'☆'}</button>${imgOrFallback(p)}<div class="fallback ${
      p.tone
    }
    ">${p.brand}<br><small>${esc(p.name)}</small></div></div>`}
function card(p){const st=p.stock<=0?'Agotado':p.stock<=4?`${p.stock} quedan`:`${p.stock} disponibles`;return `<article class="card">${visual(p)}<div class="card-body"><span class="brand-tag">${p.brand} · ${esc(p.cat)}</span><h3>${esc(p.name)}</h3><p class="desc">${esc(p.desc)}</p><div class="price-row"><span class="price">${money(p.price)}</span><span class="stock ${
      p.stock<=0?'out':p.stock<=4?'low':''
    }
    ">${st}</span></div><div class="card-actions"><button class="add" data-add="${
      p.id
    }
    " ${p.stock<=0?'disabled':''}>${p.stock<=0?'Sin stock':'Agregar'}</button><button class="detail-btn" data-detail="${
      p.id
    }
    " aria-label="Ver detalle">⌁</button></div></div></article>`}
function setSection(id){$$('.section').forEach(s=>s.classList.toggle('active',s.id===id));$$('.nav').forEach(n=>n.classList.toggle('active',n.dataset.go===id));const titles={inicio:'Inicio',catalogo:'Catálogo',favoritos:'Favoritos',pedido:'Mi pedido',historial:'Mis compras',opiniones:'Foro',cuenta:'Mi cuenta',config:'Configuración'};$('pageTitle').textContent=titles[id]||'Inicio';document.querySelector('.sidebar')?.classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});renderAll()}
function setAvatarElement(el,src,ini){if(!el)return;if(src){el.style.backgroundImage=`url("${src}")`;el.style.backgroundSize='cover';el.style.backgroundPosition='center';el.style.color='transparent';const btn=el.querySelector('.avatar-edit-btn');if(btn)btn.style.color='#fff'}else{el.style.backgroundImage='';el.style.backgroundSize='';el.style.backgroundPosition='';el.style.color='';el.textContent=ini;const btn=document.createElement('button');btn.type='button';btn.className='avatar-edit-btn';btn.dataset.avatarTrigger='';btn.setAttribute('aria-label','Cambiar foto');btn.textContent='✎';el.appendChild(btn)}}
function userUI(){const u=state.user,name=u?.nombres||'Invitado',mail=u?.correo||'Modo invitado',ini=(name[0]||'I').toUpperCase();if($('profileNameEdit'))$('profileNameEdit').value=u?.nombres||'';if($('profileLastEdit'))$('profileLastEdit').value=u?.apellidos||'';if($('profileUsernameEdit'))$('profileUsernameEdit').value=u?.usuario||'';if($('profileEmailEdit'))$('profileEmailEdit').value=u?.correo||'';if($('profilePhoneEdit'))$('profilePhoneEdit').value=u?.telefono||'';['sideName','topName','accountName'].forEach(id=>$(id).textContent=name);['sideEmail','topEmail','accountEmail','accountMail'].forEach(id=>$(id).textContent=mail);['sideAvatar','topAvatar','accountAvatar','settingsAvatar'].forEach(id=>setAvatarElement($(id),state.avatar,ini));$('accountNames').textContent=u?.nombres||'—';$('accountLast').textContent=u?.apellidos||'—';$('accountMail').textContent=mail;if($('accountPhone'))$('accountPhone').textContent=u?.telefono||'—';if($('accountPhoneMain'))$('accountPhoneMain').textContent=u?.telefono||'—';$('welcome').innerHTML=u?`¡Hola, ${esc(name.split(' ')[0])}!<em> Qué bueno verte.</em>`:'Todo lo que buscas,<em> en un solo lugar.</em>';if($('settingsProfileName'))$('settingsProfileName').textContent=name;if($('settingsProfileEmail'))$('settingsProfileEmail').textContent=mail;if($('settingsUsername'))$('settingsUsername').textContent=u?.usuario||'—';applyPreferences();}
function adminUI(){
  const u=state.user||{},src=state.adminAvatar||u.avatar||'',name=u.nombres||state.profileName||'Administrador',last=u.apellidos||'',username=u.usuario||'admin',mail=u.correo||state.profileEmail||'admin@omnilife.local',phone=u.telefono||state.profilePhone||'';
  state.profileName=name;state.profileEmail=mail;state.profilePhone=phone;
  ['adminAvatar','adminSettingsAvatar'].forEach(id=>{
    const el=$(id);if(!el)return;
    if(src){
      el.style.backgroundImage=`url("${src}")`;el.style.backgroundSize='cover';el.style.backgroundPosition='center';el.style.color='transparent';
    }else{
      el.style.backgroundImage='';el.style.backgroundSize='';el.style.backgroundPosition='';el.style.color='';
      el.innerHTML='A<button type="button" class="avatar-edit-btn" data-admin-avatar-trigger aria-label="Cambiar foto">✎</button>';
    }
  });
  if($('adminSideName'))$('adminSideName').textContent=name;
  if($('adminSideEmail'))$('adminSideEmail').textContent=mail;
  if($('adminSettingsName'))$('adminSettingsName').textContent=name;
  if($('adminSettingsEmail'))$('adminSettingsEmail').textContent=mail;
  // No sobrescribir lo que el administrador está editando. La sincronización
  // automática del panel puede volver a llamar adminUI() mientras se escribe.
  // Solo cargamos desde la cuenta cuando el campo no está siendo editado.
  const setAdminField=(id,value)=>{
    const el=$(id);if(!el)return;
    if(el.dataset.adminDirty==='1' || document.activeElement===el)return;
    el.value=value;
  };
  setAdminField('adminNameEdit',name);
  setAdminField('adminLastEdit',last);
  setAdminField('adminUsernameEdit',username);
  setAdminField('adminEmailEdit',mail);
  setAdminField('adminPhoneEdit',phone);
  // Igual que en la configuración del usuario: muestra la contraseña actual protegida.
  // Se toma únicamente de la sesión local del administrador; MySQL conserva el hash y nunca se lee como texto.
  const cachedAdmin=usersList().find(item=>Number(item.id_usuario)===Number(u.id_usuario) || String(item.usuario||'').toLowerCase()===String(username).toLowerCase());
  const currentPass=cachedAdmin?.clave||state.profilePassword||'';
  if($('adminCurrentPass') && currentPass && document.activeElement!==$('adminCurrentPass')) $('adminCurrentPass').value=currentPass;
}
function applyPreferences(){document.body.classList.toggle('dark',state.theme==='dark');document.body.classList.toggle('soft-contrast',state.contrast===true);document.body.classList.toggle('hide-stock',state.stockSetting===false);document.documentElement.style.setProperty('--ui-font',`"${
      state.font||'DM Sans'
    }
    ",system-ui,sans-serif`);if($('darkMode'))$('darkMode').checked=state.theme==='dark';if($('adminDarkMode'))$('adminDarkMode').innerHTML=state.theme==='dark'?'<span>☀️</span><b>Modo claro</b>':'<span>🌙</span><b>Modo oscuro</b>';if($('fontSizeRange'))$('fontSizeRange').value=state.fontSize||100;if($('fontSizeValue'))$('fontSizeValue').textContent=`${state.fontSize||100}%`;if($('notifySetting'))$('notifySetting').checked=state.notifications!==false;if($('motionSetting'))$('motionSetting').checked=state.motion!==false;$$('[data-theme]').forEach(b=>b.classList.toggle('active',b.dataset.theme===state.theme));$$('[data-font]').forEach(b=>b.classList.toggle('active',b.dataset.font===state.font));document.documentElement.style.fontSize=`${state.fontSize||100}%`;document.body.classList.toggle('reduce-motion',state.motion===false)}
function categories(){const pool=selectedBrand==='todos'?state.products:state.products.filter(p=>p.brand===selectedBrand);const cats=[...new Set(pool.map(p=>p.cat))].sort();const current=$('category')?.value||'todos';$('category').innerHTML='<option value="todos">Todas las categorías</option>'+cats.map(c=>`<option>${esc(c)}</option>`).join('');if(cats.includes(current))$('category').value=current;else $('category').value='todos'}
function filtered(){let list=[...state.products],q=($('search')?.value||'').toLowerCase(),cat=$('category')?.value||'todos',sort=$('sort')?.value||'default';if(selectedBrand!=='todos')list=list.filter(p=>p.brand===selectedBrand);if(cat!=='todos')list=list.filter(p=>p.cat===cat);if(q)list=list.filter(p=>(p.name+' '+p.brand+' '+p.cat+' '+p.desc).toLowerCase().includes(q));if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);if(sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));return list}
function renderCatalog(){$('catalog').innerHTML=filtered().map(card).join('')||'<div class="empty">No encontramos productos con esos filtros.</div>'}
function renderFeatured(){$('featured').innerHTML=state.products.slice(0,4).map(card).join('');$('productStat').textContent=state.products.length}
function renderFavorites(){const l=state.products.filter(p=>state.favorites.includes(p.id));$('favorites').innerHTML=l.length?l.map(card).join(''):'<div class="empty">Todavía no tienes favoritos.<br>Presiona ♡ en cualquier producto.</div>'}
function cartItems(){return state.cart.map(x=>({line:x,p:product(x.id)})).filter(x=>x.p)}
function total(){return cartItems().reduce((s,x)=>s+x.p.price*x.line.qty,0)}
function renderCart(){const items=cartItems();if(!items.length){$('cart').innerHTML='<div class="empty">🛒<h3>Tu pedido está vacío</h3><p>Explora el catálogo y agrega lo que quieras comprar.</p><button class="btn primary" data-go="catalogo">Ir al catálogo</button></div>';return}$('cart').innerHTML=`<div class="cart-layout"><div class="cart-list">${items.map(({line,p})=>cartRow(line,p)).join('')}</div><aside class="summary"><small class="eyebrow">RESUMEN</small><h3>Tu compra</h3><p>${items.reduce((s,x)=>s+x.line.qty,0)} unidad(es) · ${items.length} producto(s)</p><div class="total"><span>Total</span><span>${money(total())}</span></div><button class="btn primary full" id="openCheckout">Continuar al pago →</button></aside></div>`}
function cartRow(line,p){const src=safeAssetUrl(localProductImage(p)||p.img||IMAGE_LOADING);return `<div class="cart-item"><div class="thumb"><img src="${
      src
    }
    " data-local="${
      localProductImage(p)
    }
    " alt="${
      esc(p.name)
    }
    " onerror="if(this.dataset.usedLocal!=="1"){
      this.dataset.usedLocal="1"; this.src=this.dataset.local
    }
    else{
      this.style.display="none"
    }
    "></div><div><h4>${esc(p.name)}</h4><small>${money(p.price)} por unidad · stock actual: ${p.stock}</small></div><div class="qty"><button data-minus="${
      p.id
    }
    ">−</button><b>${line.qty}</b><button data-plus="${
      p.id
    }
    ">+</button></div><button class="remove" data-remove="${
      p.id
    }
    ">Eliminar</button></div>`}
function renderHistory(){
  if(!state.orders.length){$('history').innerHTML=state.user?'<div class="empty history-empty">📋 Aún no tienes compras registradas.<br><small>Cuando completes una compra, aquí podrás abrir el detalle completo de cada pedido.</small></div>':'<div class="empty history-empty">🔐 <h3>Mis compras es una sección privada</h3><p>Inicia sesión para consultar tus pedidos, productos, precios y boletas.</p><button class="btn primary" id="historyLogin">Iniciar sesión</button></div>';return}
  $('history').innerHTML=state.orders.slice().sort((a,b)=>new Date(b.date||0)-new Date(a.date||0)).map(o=>{
    const status=o.status||'Pendiente';
    const statusClass=String(status).toLowerCase().replace(/[^a-záéíóúüñ]+/g,'-');
    return `<div class="order"><div class="order-icon ${o.seen?'is-seen':''}">${o.seen?'✓':'•'}</div><div class="order-main"><b>Pedido ${esc(o.id)}</b><small>${esc(o.date)} · ${esc(o.payment)} · ${o.items.reduce((n,i)=>n+i.qty,0)} unidad(es)</small></div><div class="order-total"><b>${money(o.total)}</b><div class="order-status-stack"><span class="order-status-pill ${statusClass}">${esc(status)}</span><span class="order-review-pill ${o.seen?'seen':'pending'}">${o.seen?'✓ Visto':'◷ Pendiente de revisión'}</span></div></div><button class="link" data-detail-order="${esc(o.id)}">Ver compra</button><button class="link" data-receipt="${esc(o.id)}">Ver boleta</button></div>`
  }).join('')
}
function openOrderDetail(id){
  const o=state.orders.find(x=>x.id===id); if(!o)return;
  currentOrder=o;
  $('orderDetailTitle').textContent=`Pedido ${o.id}`;
  $('orderDetailMeta').innerHTML=`<span>📅 ${esc(o.date)}</span><span>💳 ${esc(o.payment)}</span><span>👤 ${esc(o.customer||'Cliente')}</span><span>📧 ${esc(o.email||'')}</span>`;
  $('orderDetailItems').innerHTML=o.items.map(i=>{const p=product(i.id)||i;const src=safeAssetUrl(i.img||p.img||localProductImage(p));return `<tr><td><div class="detail-product"><img src="${src}" alt="${esc(i.name)}" onerror="this.src='${localProductImage(p)}'"><div><b>${esc(i.name)}</b><small>${esc(i.brand||p.brand||'')}</small></div></div></td><td>${money(i.price)}</td><td>${i.qty}</td><td><b>${money(i.price*i.qty)}</b></td></tr>`}).join('');
  $('orderDetailSummary').innerHTML=`<div><span>Productos</span><b>${o.items.reduce((n,i)=>n+i.qty,0)} unidad(es)</b></div><div><span>Subtotal</span><b>${money(o.items.reduce((n,i)=>n+i.price*i.qty,0))}</b></div><div class="grand"><span>Total pagado</span><b>${money(o.total)}</b></div><div class="order-detail-actions"><button class="btn primary" id="detailReceipt">Ver boleta</button><button class="btn light" data-close="orderDetailModal">Cerrar</button></div>`;
  $('orderDetailModal').classList.remove('hidden');
}
async function syncForum(){
  if(typeof API==='undefined')return false;
  try{
    const x=await apiCall('foro_list',{},'GET');
    if(Array.isArray(x.opiniones)){
      state.feedback=x.opiniones.map(f=>({
        id:String(f.id),id_usuario:Number(f.id_usuario)||0,usuario:f.usuario||'Usuario',
        title:f.titulo||'Opinión',text:f.text||'',rating:Number(f.rating)||0,
        type:f.tipo||'Experiencia general',aspect:f.aspecto||'Experiencia general',
        recommend:f.recommend||'sin',date:f.date||'',helpful:Number(f.helpful)||0
      }));
      save(false);
      if(!$('app')?.classList.contains('hidden'))renderFeedback();
      return true;
    }
  }catch(e){console.warn('No se pudo sincronizar el foro:',e.message);}
  return false;
}
function renderFeedback(){
  const list=Array.isArray(state.feedback)?state.feedback:[];
  const avg=list.length?list.reduce((s,f)=>s+Number(f.rating||0),0)/list.length:0;
  if($('feedbackAvg'))$('feedbackAvg').textContent=avg.toFixed(1);
  if($('feedbackCount'))$('feedbackCount').textContent=`${list.length} ${list.length===1?'opinión':'opiniones'}`;
  [5,4,3,2,1].forEach(n=>{
    const c=list.filter(f=>Number(f.rating)===n).length;
    const bar=$(`ratingBar${n}`),num=$(`ratingNum${n}`);
    if(bar)bar.style.width=`${list.length?Math.round(c/list.length*100):0}%`;
    if(num)num.textContent=c;
  });
  const sort=$('feedbackSort')?.value||'recent';
  const ordered=list.slice();
  if(sort==='high')ordered.sort((a,b)=>Number(b.rating)-Number(a.rating));
  else if(sort==='low')ordered.sort((a,b)=>Number(a.rating)-Number(b.rating));
  else ordered.sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
  const listEl=$('feedbackList');
  if(!listEl)return;
  listEl.innerHTML=ordered.length?ordered.map(f=>{
    const rating=Math.max(0,Math.min(5,Number(f.rating)||0));
    const author=f.usuario||f.user||'Usuario';
    return `<div class="feedback">
      <div class="feedback-top">
        <span class="feedback-stars">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</span>
        <span class="feedback-type">${esc(f.type||'Experiencia general')}</span>
        <span class="feedback-author">👤 ${esc(author)}</span>
      </div>
      <h4>${esc(f.title||'Opinión')}</h4>
      <div>${esc(f.text||'')}</div>
      <div class="feedback-extra">
        <span>💜 ${esc(f.aspect||'Experiencia general')}</span>
        <span>${f.recommend==='si'?'👍 Lo recomienda':f.recommend==='no'?'👎 No lo recomienda':'• Sin recomendación'}</span>
      </div>
      <small>Publicado ${esc(f.date||'')}${f.helpful?` · ${f.helpful} útil`:''}</small>
      <button class="feedback-helpful" data-helpful="${esc(f.id||'')}">👍 Me resultó útil</button>
    </div>`;
  }).join(''):'<div class="empty" style="padding:25px">Todavía no hay opiniones. Sé la primera persona en compartir tu experiencia.</div>';
}

function renderInventory(){$('inventory').innerHTML=state.products.map(p=>`<div class="inventory-row"><div><b>${esc(p.name)}</b><small>${p.brand} · ${esc(p.cat)}</small></div><input data-edit="name" data-id="${
      p.id
    }
    " value="${
      esc(p.name)
    }
    "><input data-edit="price" data-id="${
      p.id
    }
    " type="number" min="0" step="0.01" value="${
      p.price
    }
    "><input data-edit="stock" data-id="${
      p.id
    }
    " type="number" min="0" step="1" value="${
      p.stock
    }
    "><button class="btn light save-label" data-save="${
      p.id
    }
    ">Guardar</button></div>`).join('')}
function renderSmartHome(){
  const fav=state.favorites.length;
  const cartQty=state.cart.reduce((n,x)=>n+Number(x.qty||0),0);
  const orders=state.orders.length;
  const activity=fav+cartQty+orders;
  const max=Math.max(1,fav,cartQty,orders);
  if($('smartFavCount'))$('smartFavCount').textContent=fav;
  if($('smartCartCount'))$('smartCartCount').textContent=cartQty;
  if($('smartOrderCount'))$('smartOrderCount').textContent=orders;
  if($('smartFavBarValue'))$('smartFavBarValue').textContent=fav;
  if($('smartCartBarValue'))$('smartCartBarValue').textContent=cartQty;
  if($('smartOrderBarValue'))$('smartOrderBarValue').textContent=orders;
  if($('smartFavBar'))$('smartFavBar').style.width=`${Math.min(100,fav/max*100)}%`;
  if($('smartCartBar'))$('smartCartBar').style.width=`${Math.min(100,cartQty/max*100)}%`;
  if($('smartOrderBar'))$('smartOrderBar').style.width=`${Math.min(100,orders/max*100)}%`;
  if($('smartActivityTotal'))$('smartActivityTotal').textContent=activity;
  if($('smartDonut'))$('smartDonut').style.setProperty('--activity-angle',`${Math.min(359,Math.max(8,activity?Math.round(activity/Math.max(1,state.products.length)*360):8))}deg`);
  if($('smartCartTotal'))$('smartCartTotal').textContent=money(total());
  if($('smartStockText'))$('smartStockText').textContent=`${state.products.length} productos`;
  if($('smartProgressBar'))$('smartProgressBar').style.width=`${Math.min(100,Math.max(10,state.products.length/60*100))}%`;
  const activityPercent=Math.min(100,Math.round(activity/Math.max(1,state.products.length)*100));
  if($('smartActivityPercent'))$('smartActivityPercent').textContent=`${activityPercent}%`;
  if($('smartActivityProgressBar'))$('smartActivityProgressBar').style.width=`${activityPercent}%`;
}
function renderAll(){if($('app').classList.contains('hidden'))return;$('favCount').textContent=state.favorites.length;const q=state.cart.reduce((s,x)=>s+x.qty,0);$('cartCount').textContent=q;$('cartTop').textContent=q;if($('heroCartCount'))$('heroCartCount').textContent=q;updateCartCounters();$('orderCount').textContent=state.orders.length;categories();renderFeatured();renderCatalog();renderFavorites();renderCart();renderHistory();renderFeedback();renderInventory();renderSmartHome();$('darkMode').checked=state.theme==='dark';if($('recentSetting'))$('recentSetting').checked=state.recentSetting!==false;if($('stockSetting'))$('stockSetting').checked=state.stockSetting!==false;if($('confirmDeleteSetting'))$('confirmDeleteSetting').checked=state.confirmDeleteSetting!==false;document.body.classList.toggle('dark',state.theme==='dark')}
function updateCartCounters(){const q=state.cart.reduce((sum,x)=>sum+Number(x.qty||0),0);if($('cartCount'))$('cartCount').textContent=q;if($('cartTop'))$('cartTop').textContent=q;if($('heroCartCount'))$('heroCartCount').textContent=q;const chip=$('openCartTop');if(chip){chip.classList.toggle('has-items',q>0);chip.setAttribute('aria-label',q?`Abrir carrito · ${q} ${q===1?'producto':'productos'}`:'Abrir carrito')}}
function refreshCartOnly(){
  updateCartCounters();
  renderSmartHome();
  const items=cartItems();
  const modal=$('cartModal');
  if(modal && !modal.classList.contains('hidden')){
    items.forEach(({line})=>{const row=modal.querySelector('[data-cart-row="'+line.id+'"]');if(row){const q=row.querySelector('.cart-qty-value');if(q)q.textContent=line.qty;}});
    modal.querySelectorAll('[data-cart-row]').forEach(row=>{if(!state.cart.some(x=>Number(x.id)===Number(row.dataset.cartRow)))row.remove();});
    if($('modalTotal'))$('modalTotal').textContent=money(total());
  }
  const cartSection=$('pedido');
  if(cartSection?.classList.contains('active')) renderCart();
}
function changeCartQty(id,delta){
  id=Number(id); const p=product(id); const line=state.cart.find(x=>Number(x.id)===id);
  if(!p||!line)return; const next=line.qty+Number(delta);
  if(next<=0){state.cart=state.cart.filter(x=>Number(x.id)!==id);save();refreshCartOnly();toast(`${p.name} quitado del carrito.`);return;}
  if(next>Number(p.stock))return toast(`No puedes superar el stock disponible de ${p.name}.`);
  line.qty=next; save(); refreshCartOnly();
}
function removeCart(id){
  id=Number(id); const p=product(id); state.cart=state.cart.filter(x=>Number(x.id)!==id); save(); refreshCartOnly();
  if(p)toast(`${p.name} eliminado del carrito.`);
}
function addCart(id){
  const p=product(id); if(!p||p.stock<=0)return toast('Este producto está agotado.');
  let l=state.cart.find(x=>x.id===p.id); if(l){if(l.qty>=p.stock)return toast('No puedes superar el stock disponible.');l.qty++;}else state.cart.unshift({id:p.id,qty:1});
  save(); refreshCartOnly(); toast(`${p.name} agregado al pedido.`);
}
async function toggleFav(id){
  const pid=Number(id); const p=product(pid); if(!p)return;
  const was=state.favorites.includes(pid);
  const next=was?state.favorites.filter(x=>Number(x)!==pid):[...state.favorites,pid];
  state.favorites=next;
  save();
  // Actualización inmediata de la interfaz.
  if($('favCount'))$('favCount').textContent=state.favorites.length;
  renderCatalog(); renderFeatured(); renderFavorites(); renderSmartHome();
  $$('[data-fav]').forEach(btn=>{
    if(Number(btn.dataset.fav)!==pid)return;
    const saved=state.favorites.includes(pid);
    btn.classList.toggle('on',saved);
    btn.textContent=btn.classList.contains('detail-fav')?(saved?'★ Guardado':'☆ Guardar en favoritos'):(saved?'★':'☆');
    btn.title=saved?'Quitar de favoritos':'Guardar en favoritos';
    btn.setAttribute('aria-label',saved?'Quitar de favoritos':'Guardar en favoritos');
  });

  // Invitado: favoritos temporales del navegador.
  if(!state.user?.id_usuario){
    if(p)toast(was?`${p.name} quitado de favoritos.`:`${p.name} guardado en favoritos.`);
    return;
  }

  // Cuenta autenticada: persistencia real en MySQL.
  try{
    await apiCall(was?'favorite_remove':'favorite_add',{
      id_usuario:state.user.id_usuario,
      id_producto:pid
    });
    if(p)toast(was?`${p.name} quitado de favoritos.`:`${p.name} guardado en tu cuenta.`);
  }catch(err){
    // Si MySQL rechaza la operación, revertimos el cambio visual.
    state.favorites=was?[...state.favorites,pid]:state.favorites.filter(x=>Number(x)!==pid);
    save();
    renderCatalog(); renderFeatured(); renderFavorites(); renderSmartHome();
    if($('favCount'))$('favCount').textContent=state.favorites.length;
    toast('No se pudo guardar el favorito en la base de datos: '+err.message);
  }
}

function openProduct(id){
  const p=product(id); if(!p)return;
  state.recent=[p.id,...(state.recent||[]).filter(x=>Number(x)!==p.id)];
  save();
  const src=safeAssetUrl(p.img||localProductImage(p));
  const related=state.products.filter(x=>x.id!==p.id && (x.cat===p.cat||x.brand===p.brand)).slice(0,3);
  const stockLabel=p.stock<=0?'Agotado':p.stock<=4?`Solo quedan ${p.stock}`:`${p.stock} disponibles`;
  const benefits=p.tone==='seytu'?['Rutina de cuidado personal','Presentación pensada para uso diario','Consulta sus características antes de comprar']:['Complementa tu rutina de bienestar','Información y disponibilidad visibles','Consulta sus características antes de comprar'];
  $('productDetail').innerHTML=`
    <div class="product-detail-plus">
      <div class="detail-gallery">
        <div class="detail-brand-badge">${esc(p.brand)}</div>
        <button class="detail-fav" data-fav="${p.id}">${state.favorites.includes(p.id)?'★ Guardado':'☆ Guardar en favoritos'}</button>
        <div class="detail-image"><img src="${src}" data-local="${localProductImage(p)}" alt="${esc(p.name)}" onerror="if(this.dataset.usedLocal!==\"1\"){this.dataset.usedLocal=\"1\";this.src=this.dataset.local}else{this.style.display=\"none\"}"></div>
        <div class="detail-mini-info"><span>✓ Compra organizada</span><span>✓ Stock visible</span><span>✓ Pedido desde tu cuenta</span></div>
      </div>
      <div class="detail-content">
        <div class="detail-breadcrumb">CATÁLOGO / ${esc(p.brand)} / ${esc(p.cat)}</div>
        <small class="eyebrow">${esc(p.cat)}</small>
        <h2>${esc(p.name)}</h2>
        <div class="detail-rating"><span>★★★★★</span><b>Producto destacado</b><small>Consulta la información antes de agregarlo.</small></div>
        <p class="detail-description">${esc(p.desc)}</p>
        <div class="detail-price-row"><div><small>Precio</small><strong>${money(p.price)}</strong></div><span class="detail-stock ${p.stock<=4?'warn':''}">● ${stockLabel}</span></div>
        <div class="detail-feature-grid">${benefits.map((b,i)=>`<div><span>${['✦','✓','ℹ'][i]}</span><b>${b}</b></div>`).join('')}</div>
        <div class="detail-purchase-box"><div><small>Cantidad</small><div class="detail-qty"><button data-detail-minus="${p.id}">−</button><b id="detailQty">1</b><button data-detail-plus="${p.id}">+</button></div></div><button class="btn primary detail-add" data-add-detail="${p.id}" ${p.stock<=0?'disabled':''}>${p.stock<=0?'Sin stock':'Agregar al pedido →'}</button></div>
        <div class="detail-links"><button class="link" data-detail-share="${p.id}">↗ Compartir producto</button><button class="link" data-detail-whatsapp="${p.id}">💬 Consultar por WhatsApp</button></div>
        <div class="detail-trust"><div><b>📦 Pedido</b><small>Queda registrado en tu cuenta</small></div><div><b>💳 Pago</b><small>Elige tu método al finalizar</small></div><div><b>🧾 Boleta</b><small>Disponible después de comprar</small></div></div>
      </div>
    </div>
    ${related.length?`<div class="detail-related"><div><small class="eyebrow">TAMBIÉN PODRÍA INTERESARTE</small><h3>Descubre otros productos</h3></div><div class="detail-related-grid">${related.map(x=>`<button class="related-product" data-detail="${x.id}"><span><img src="${safeAssetUrl(x.img||localProductImage(x))}" alt="${esc(x.name)}"></span><div><b>${esc(x.name)}</b><small>${x.brand} · ${money(x.price)}</small></div><strong>→</strong></button>`).join('')}</div></div>`:''}`;
  $('productModal').classList.remove('hidden');
}
function openCartModal(){
  if(!$('app')||$('app').classList.contains('hidden'))return;
  const items=cartItems();
  const qty=state.cart.reduce((n,x)=>n+Number(x.qty||0),0);
  const quick=`<div class="cart-quick-head"><div><strong>✓ ${qty} ${qty===1?'producto listo':'productos listos'}</strong><span>Tu selección queda guardada en tu cuenta.</span></div>${qty?'<button class="ghost" type="button" id="clearCartQuick">Vaciar</button>':''}</div>`;
  $('cartModalList').innerHTML=quick+(items.map(({line,p})=>{
    const src=safeAssetUrl(p.img||localProductImage(p));
    return `<div class="modal-cart-item" data-cart-row="${p.id}"><div class="cart-check">✓</div><div><img src="${src}" data-local="${localProductImage(p)}" alt="${esc(p.name)}" onerror="if(this.dataset.usedLocal!==\"1\"){this.dataset.usedLocal=\"1\";this.src=this.dataset.local}else{this.style.display=\"none\"}"></div><div><b>${esc(p.name)}</b><small>${money(p.price)} · stock ${p.stock}</small></div><div class="qty"><button data-minus="${p.id}">−</button><b class="cart-qty-value">${line.qty}</b><button data-plus="${p.id}">+</button></div><button class="remove" data-remove="${p.id}" title="Quitar del carrito" aria-label="Quitar del carrito">×</button></div>`;
  }).join('')||'<div class="empty cart-empty-fast">🛒<h3>Tu carrito está vacío</h3><p>Agrega productos y aparecerán aquí al instante.</p></div>');
  $('modalTotal').textContent=money(total());
  $('cartModal').classList.remove('hidden');
  $('clearCartQuick')?.addEventListener('click',()=>{state.cart=[];save();refreshCartOnly();toast('Carrito vaciado y guardado en tu cuenta.');openCartModal()});
}
function payInfo(){
  const box=$('payInfo'),fields=$('paymentFields'),amount=money(total());
  if($('paymentTotalTop'))$('paymentTotalTop').textContent=amount;
  if($('confirmPayAmount'))$('confirmPayAmount').textContent=amount;

  const c={
    Yape:['💜','Yape','Escanea este QR con Yape o ingresa el número móvil asociado.','Número de celular','999 999 999'],
    Plin:['💙','Plin','Ingresa el número móvil asociado a Plin.','Número de celular','999 999 999'],
    Tarjeta:['💳','Tarjeta','Usa datos de prueba; no se procesa ningún cobro real.','Número de tarjeta','0000 0000 0000 0000'],
    QR:['▦','Código QR','Escanea el código para simular el pago.','Referencia opcional','OP-000000'],
    Transferencia:['🏦','Transferencia bancaria','Registra el código de operación de la transferencia.','Código de operación','OP-000000'],
    'Contra entrega':['📦','Pago contra entrega','Pagarás al recibir el pedido.','Referencia de entrega','Casa / referencia']
  }[payment]||null;

  if(payment==='Yape'){
    box.innerHTML=`<div class="pay-info-inner pay-info-yape">
      <div class="yape-qr-wrap">
        <img class="yape-qr" src="assets/yape-qr.jpeg" alt="Código QR de Yape para realizar el pago">
        <small>Escanéalo con Yape</small>
      </div>
      <div class="yape-payment-copy">
        <b>${c[0]} ${c[1]}</b>
        <small>${c[2]}</small>
        <strong>${amount}</strong>
      </div>
    </div>`;
  }else if(payment==='QR'){
    box.innerHTML=`<div class="pay-info-inner">
      <div class="qr"></div>
      <div><b>${c[0]} ${c[1]}</b><small>${c[2]}</small><strong>${amount}</strong></div>
    </div>`;
  }else{
    box.innerHTML=`<div class="pay-info-inner">
      <span class="big-pay-icon">${c[0]}</span>
      <div><b>${c[1]}</b><small>${c[2]}</small><strong>${amount}</strong></div>
    </div>`;
  }

  fields.innerHTML=payment==='Tarjeta'
    ? `<div class="payment-field-row">
        <label>${c[3]}<input id="paymentRef" inputmode="numeric" placeholder="${c[4]}"></label>
        <label>Vencimiento<input id="paymentExpiry" placeholder="MM/AA" maxlength="5"></label>
        <label>CVV<input id="paymentCvv" inputmode="numeric" placeholder="123" maxlength="3"></label>
      </div>`
    : `<label>${c[3]}<input id="paymentRef" inputmode="tel" maxlength="9" pattern="[0-9]{9}" placeholder="${c[4]}"></label>`;

  const ref=$('paymentRef');
  if(ref&&['Yape','Plin'].includes(payment)){
    ref.maxLength=9;
    ref.addEventListener('input',()=>{ref.value=ref.value.replace(/\D/g,'').slice(0,9)});
  }
}
function openPayment(){if(!state.user){$('authRequiredModal').classList.remove('hidden');return}$('cartModal').classList.add('hidden');$('payEmail').value=state.user?.correo||'';payInfo();$('paymentModal').classList.remove('hidden')}

function resetReceiptQuestion(){
  $('receiptQuestion')?.classList.remove('hidden');
  $('receiptOptions')?.classList.add('hidden');
  $('receiptShareOptions')?.classList.add('hidden');
}
function showReceiptOptions(){
  $('receiptQuestion')?.classList.add('hidden');
  $('receiptOptions')?.classList.remove('hidden');
  $('receiptShareOptions')?.classList.remove('hidden');
}

async function confirmPayment(){
  if(['Yape','Plin'].includes(payment)){const ref=$('paymentRef')?.value.replace(/\D/g,'')||'';if(ref.length!==9)return toast('El número de celular debe tener exactamente 9 dígitos.');}
  if(payment==='Tarjeta'){const ref=$('paymentRef')?.value.replace(/\D/g,'')||'';if(ref.length<13||ref.length>16)return toast('Ingresa un número de tarjeta válido.');}
  if(!state.user){$('paymentModal').classList.add('hidden');$('authRequiredModal').classList.remove('hidden');return}
  const items=cartItems();
  if(!items.length)return toast('Tu pedido está vacío.');
  for(const {line,p} of items)if(line.qty>p.stock)return toast(`Stock insuficiente para ${p.name}.`);
  const email=$('payEmail').value.trim()||state.user.correo||'';
  const draft={payment,total:total(),customer:state.user.nombres||'Cliente',email,items:items.map(({line,p})=>({id:p.id,name:p.name,price:Number(p.price),qty:line.qty,brand:p.brand,img:p.img||localProductImage(p)}))};
  const confirmBtn=$('confirmPay');
  if(confirmBtn){confirmBtn.disabled=true;confirmBtn.textContent='Guardando compra…';}
  try{
    // Primero se confirma en MySQL. Así el administrador siempre recibe el pedido real.
    const server=await apiCall('create_order',{id_usuario:state.user.id_usuario,items:draft.items.map(i=>({id:i.id,qty:i.qty})),payment:draft.payment,email:draft.email});
    const o={...draft,id:'SL-'+String(server.id_pedido).padStart(8,'0'),date:new Date().toLocaleString('es-PE',{dateStyle:'short',timeStyle:'short'}),total:Number(server.total),status:'Confirmado',seen:false};
    items.forEach(({line,p})=>{p.stock-=line.qty});
    state.orders=[o,...(state.orders||[]).filter(x=>x.id!==o.id)];
    state.cart=[];
    currentOrder=o;
    save();
    await syncServerData();
    $('paymentModal').classList.add('hidden');
    $('cartModal')?.classList.add('hidden');
    currentOrder=state.orders.find(x=>x.id===o.id)||o;
    const success=$('successModal');const successText=$('successText');
    if(successText)successText.textContent=`Pedido ${currentOrder.id} · ${money(currentOrder.total)} · ${currentOrder.payment}. Tu compra fue guardada correctamente y ya está disponible en Mis compras y Administración.`;
    if(success){resetReceiptQuestion();success.classList.remove('hidden');success.style.display='flex';success.setAttribute('aria-hidden','false');success.scrollIntoView({block:'center',behavior:'smooth'})}
    renderAll();
  }catch(err){
    console.error('No se pudo registrar el pedido en MySQL:',err);
    toast('No se pudo guardar el pedido en la base de datos. No se descontó el stock.');
  }finally{
    if(confirmBtn){confirmBtn.disabled=false;confirmBtn.textContent='Confirmar compra';}
  }
}
function sendReceiptWhatsApp(o){const lines=o.items.map(i=>`• ${i.name} x${i.qty} — ${money(i.price*i.qty)}`).join('\n');const msg=`Hola, quiero compartir mi comprobante de compra.\n\nPedido: ${o.id}\nTotal: ${money(o.total)}\nMétodo de pago: ${o.payment}\n\nDetalle:\n${lines}\n\nEl comprobante completo se puede descargar/imprimir desde la opción de boleta del catálogo.`;const url='https://wa.me/?text='+encodeURIComponent(msg);const popup=window.open(url,'_blank');if(!popup)location.href=url}
function receipt(o,autoPrint=false){const receiptLogo=(location.href.substring(0,location.href.lastIndexOf('/')+1)||'')+'assets/logo.jpeg';const rows=o.items.map(i=>`<tr><td>${
      esc(i.name)
    }
    <small>${
      esc(i.brand)
    }
    </small></td><td>${
      i.qty
    }
    </td><td>${
      money(i.price)
    }
    </td><td>${
      money(i.price*i.qty)
    }
    </td></tr>`).join('');const w=window.open('','_blank','width=420,height=760');if(!w){toast('El navegador bloqueó la ventana de la boleta. Permite ventanas emergentes para este sitio e inténtalo nuevamente.');return false;}w.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Boleta ${
      esc(o.id)
    }
    </title><style>@page{
      size:80mm auto; margin:0
    }
    *{
      box-sizing:border-box
    }
    body{
      margin:0; background:#eee; font-family:"${esc(state.font||'DM Sans')}",system-ui,sans-serif; color:#171827
    }
    .receipt{
      width:80mm; max-width:80mm; margin:12px auto; background:#fff; padding:5mm 4mm; font-size:11px
    }
    .top{
      text-align:center; padding-bottom:10px; border-bottom:1px dashed #999
    }
    .brandline{
      display:flex; align-items:center; justify-content:center; gap:7px
    }
    .brandlogo{
      width:30px; height:30px; border-radius:50%; object-fit:cover
    }
    .brand{
      font-size:15px; font-weight:900
    }
    .brand span{
      font-weight:400
    }
    .sub{
      font-size:8px; color:#666; margin-top:3px
    }
    .num{
      font-size:9px; margin-top:8px
    }
    .num b{
      display:block; font-size:11px; margin-top:2px
    }
    .body{
      padding-top:10px
    }
    .status{
      text-align:center; display:block; font-size:9px; font-weight:800; margin-bottom:8px
    }
    h1{
      font-family:"${esc(state.font||'DM Sans')}",system-ui,sans-serif; font-size:20px; text-align:center; margin:5px 0
    }
    .muted{
      color:#666; font-size:9px; text-align:center; margin:4px 0 12px
    }
    .customer{
      border-top:1px dashed #aaa; border-bottom:1px dashed #aaa; padding:8px 0; margin-bottom:10px
    }
    .customer div{
      display:flex; justify-content:space-between; gap:8px; margin:3px 0
    }
    .customer small{
      font-size:8px; color:#777
    }
    .customer b{
      font-size:9px; text-align:right; overflow-wrap:anywhere
    }
    table{
      width:100%; border-collapse:collapse
    }
    th,td{
      text-align:left; padding:5px 1px; border-bottom:1px dotted #bbb; font-size:9px; vertical-align:top
    }
    th{
      font-size:8px; color:#666
    }
    th:not(:first-child),td:not(:first-child){
      text-align:right
    }
    td:first-child{
      width:48%
    }
    td small{
      display:block; color:#777; font-size:7px; margin-top:2px
    }
    .total{
      display:flex; justify-content:space-between; border-top:1.5px solid #222; margin-top:8px; padding-top:8px; font-size:14px; font-weight:900
    }
    .pay{
      margin-top:9px; padding:7px 0; border-bottom:1px dashed #aaa; border-top:1px dashed #aaa; font-size:9px
    }
    .qr{
      width:48px; height:48px; margin:10px auto 5px; background:repeating-linear-gradient(45deg,#111 0 3px,#fff 3px 6px); border:4px solid #fff; box-shadow:0 0 0 1px #bbb
    }
    .actions{
      display:flex; gap:7px; margin-top:12px
    }
    .actions button{
      flex:1; border:0; border-radius:7px; padding:9px 5px; font-weight:800; font-size:9px; background:#6d3488; color:#fff
    }
    .actions .secondary{
      background:#eee; color:#572574
    }
    @media print{
      body{
        background:#fff
      }
      .receipt{
        margin:0; padding:4mm; width:80mm; max-width:80mm
      }
      .actions{
        display:none
      }
    }
    @media(max-width:600px){
      .receipt{
        margin:0
      }
    }
    </style></head><body><div class="receipt"><div class="top"><div class="brandline"><img class="brandlogo" src="${receiptLogo}" alt="Logo OMNILIFE SEYTÚ"><div><div class="brand">OMNILIFE <span>×</span> SEYTÚ</div><div class="sub">Catálogo digital</div></div></div><div class="num">BOLETA DE DEMOSTRACIÓN · N.º <b>${
      esc(o.id)
    }
    </b>${
      esc(o.date)
    }
    </div></div><div class="body"><span class="status">✓ PEDIDO CONFIRMADO</span><h1>Boleta de compra</h1><p class="muted">Comprobante generado por el catálogo digital.</p><div class="customer"><div><small>Cliente</small><b>${
      esc(o.customer)
    }
    </b></div><div><small>Correo</small><b>${
      esc(o.email||'—')
    }
    </b></div></div><table><thead><tr><th>Producto</th><th>Cant.</th><th>Precio</th><th>Importe</th></tr></thead><tbody>${
      rows
    }
    </tbody></table><div class="total"><span>TOTAL</span><span>${
      money(o.total)
    }
    </span></div><div class="pay">Pago: <b>${
      esc(o.payment)
    }
    </b><br>Estado: <b>Confirmado</b></div><div style="text-align:center"><div class="qr"></div><small style="color:#777;font-size:7px">QR de demostración · ${
      esc(o.id)
    }
    </small></div></div><div class="actions"><button onclick="window.print()">Imprimir</button><button class="secondary" onclick="window.close()">Cerrar</button></div></div></body></html>`);w.document.close();if(autoPrint){const doPrint=()=>{try{w.focus();w.print()}catch(e){}};if(w.document.readyState==='complete')setTimeout(doPrint,150);else w.onload=()=>setTimeout(doPrint,150)}return true}

function usersList(){try{return JSON.parse(localStorage.getItem('omniSeytuUsers')||'[]')}catch{return[]}}
ensureTestUsers();

(function(){
  const panel=document.getElementById('adminPanel');
  const open=document.getElementById('adminMobileMenu');
  const close=document.getElementById('adminMobileClose');
  if(!panel||!open)return;
  const setOpen=(value)=>{
    panel.classList.toggle('admin-menu-open',value);
    open.setAttribute('aria-expanded',value?'true':'false');
    document.body.classList.toggle('admin-menu-lock',value);
  };
  open.addEventListener('click',()=>setOpen(!panel.classList.contains('admin-menu-open')));
  close&&close.addEventListener('click',()=>setOpen(false));
  panel.addEventListener('click',(e)=>{
    if(panel.classList.contains('admin-menu-open') && e.target===panel) setOpen(false);
    if(e.target.closest('.admin-nav,[data-admin-go]')) setTimeout(()=>setOpen(false),0);
  });
  window.addEventListener('resize',()=>{if(window.innerWidth>900)setOpen(false)});
})();

function adminSetSection(id){adminSection=id;const sectionName=id==='dashboard'?'Dashboard':id==='settings'?'Settings':id[0].toUpperCase()+id.slice(1);$$('.admin-section').forEach(s=>s.classList.toggle('active',s.id==='admin'+sectionName));$$('.admin-nav').forEach(n=>n.classList.toggle('active',n.dataset.adminGo===id));const titles={dashboard:'Resumen general',orders:'Pedidos y boletas',users:'Usuarios',settings:'Configuración'};$('adminPageTitle').textContent=titles[id]||'Resumen general';renderAdmin();if(id==='orders'){syncAdminOrders();}else if(id==='users'){syncServerUsers();}}
function renderAdmin(){adminUI();const users=usersList();$('adminOrdersStat').textContent=state.orders.length;$('adminProductsStat').textContent=state.products.length;$('adminUsersStat').textContent=users.length;$('adminStockStat').textContent=state.products.reduce((n,p)=>n+Number(p.stock||0),0);if($('adminOrderCount'))$('adminOrderCount').textContent=state.orders.length;if($('adminUserCount'))$('adminUserCount').textContent=users.length;renderAdminProducts();renderAdminOrders();renderAdminUsers();renderAdminFavorites();}
function adminProductRow(p){const editable=p.editable!==0&&p.editable!==false;return `<div class="admin-product-row" data-product-row="${p.id}"><div class="admin-product-visual"><img src="${safeAssetUrl(p.img||localProductImage(p))}" data-local="${localProductImage(p)}" alt="${esc(p.name)}" onerror="if(this.dataset.used!=="1"){this.dataset.used="1";this.src=this.dataset.local}else{this.style.display="none"}"></div><div class="admin-product-info"><b>${esc(p.name)}</b><small>${esc(p.brand)} · ${esc(p.cat)}</small><small class="admin-sync-note">${Number(p.stock||0)>0?`Stock ${Number(p.stock)}`:'Sin stock'} · ${money(p.price)}</small></div><div class="admin-inline"><label>Precio<input ${editable?'':'disabled'} data-admin-edit="price" data-id="${p.id}" type="number" min="0" step="0.01" value="${p.price}"></label><label>Stock<input ${editable?'':'disabled'} data-admin-edit="stock" data-id="${p.id}" type="number" min="0" step="1" value="${p.stock}"></label></div><button class="btn admin-primary" data-admin-save="${p.id}" ${editable?'':'disabled'}>Actualizar</button><button class="btn ${editable?'light admin-edit-lock active':'light admin-edit-lock'}" data-admin-toggle-edit="${p.id}" type="button">${editable?'Desactivar edición':'Activar edición'}</button><div class="admin-product-actions-bottom"><button class="btn admin-product-remove" data-admin-delete-product="${p.id}" type="button">Quitar producto</button></div></div>`}
function renderAdminProducts(){const html=`<div class="admin-list-head"><div><b>Inventario conectado</b><small>Todos los productos del catálogo</small></div><span>${state.products.length} productos</span></div>`+state.products.map(adminProductRow).join('');if($('adminProductsTable'))$('adminProductsTable').innerHTML=html;if($('adminProductsFull'))$('adminProductsFull').innerHTML=html}
function renderAdminOrders(){
  const seenIds=new Set();
  const orders=(state.orders||[]).filter(o=>{const key=String(o.id);if(seenIds.has(key))return false;seenIds.add(key);return true;}).slice().sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
  const html=orders.length?orders.map(o=>{
    const status=o.status||'Pendiente',seen=o.seen===true,items=o.items||[];
    const qty=items.reduce((n,i)=>n+Number(i.qty||0),0);
    const detail=items.map(i=>`${esc(i.name)} × ${Number(i.qty||0)}`).join(' · ')||'Detalle no disponible';
    return `<article class="admin-order-row admin-order-enhanced">
      <div class="order-icon ${seen?'is-seen':''}">${seen?'✓':'•'}</div>
      <div class="admin-order-main"><div class="admin-order-title"><b>${esc(o.id)}</b><span class="admin-order-state ${status.toLowerCase()}">${esc(status)}</span></div><small>${esc(o.date||'')} · <b>${esc(o.customer||'Cliente')}</b> · ${esc(o.payment||'Pago')}</small><p>${detail}</p><small>${qty} unidad(es) · ${esc(o.email||'Sin correo')}</small></div>
      <strong class="admin-order-total">${money(o.total)}</strong>
      <select class="admin-order-status" data-order-status="${esc(o.id)}" aria-label="Estado de ${esc(o.id)}"><option ${status==='Pendiente'?'selected':''}>Pendiente</option><option ${status==='Procesando'?'selected':''}>Procesando</option><option ${status==='Entregado'?'selected':''}>Entregado</option><option ${status==='Realizado'?'selected':''}>Realizado</option></select>
      <button class="link" data-order-seen="${esc(o.id)}">${seen?'Visto ✓':'Marcar visto'}</button><button class="btn admin-primary admin-receipt-btn" data-receipt="${esc(o.id)}">🧾 Boleta</button>
    </article>`;
  }).join(''):'<div class="admin-orders-empty"><span>🧾</span><h3>Aún no hay pedidos registrados</h3><p>Cuando un cliente confirme una compra, aparecerá aquí automáticamente.</p><button class="btn admin-primary" data-admin-refresh-orders>Actualizar pedidos</button></div>';
  if($('adminOrdersTable'))$('adminOrdersTable').innerHTML=html;if($('adminOrdersFull'))$('adminOrdersFull').innerHTML=html;
}
function renderAdminUsers(){
  const seen=new Set();
  const users=usersList().filter(u=>{const key=String(u.id_usuario||u.correo||u.usuario||'').toLowerCase();if(!key||seen.has(key))return false;seen.add(key);return true;});
  const html=users.length?`<div class="admin-users-head"><span>Cuenta</span><span>Correo</span><span>Tipo</span><span>Acción</span></div>`+users.map(u=>{
    const role=(u.role||u.rol)==='admin'?'admin':'cliente';
    return `<div class="admin-user-row admin-user-row-modern">
      <div class="admin-user-identity"><div class="avatar">${esc((u.nombres||'U')[0].toUpperCase())}</div><div><b>${esc(((u.nombres||'')+' '+(u.apellidos||'')).trim()||'Usuario')}</b><small>@${esc(u.usuario||'sin_usuario')}</small></div></div>
      <div class="admin-user-contact"><b>${esc(u.correo||'')}</b><small>${esc(u.telefono||'Sin teléfono')}</small></div>
      <select class="admin-user-role" data-user-role="${u.id_usuario}"><option value="cliente" ${role==='cliente'?'selected':''}>Cliente</option><option value="admin" ${role==='admin'?'selected':''}>Administrador</option></select>
      <button class="btn light admin-user-save" data-save-user-role="${u.id_usuario}">Guardar</button>
      ${role==='admin' ? '' : `<button class="btn ghost admin-user-delete" data-delete-user="${u.id_usuario}" type="button">Quitar</button>`}
    </div>`;
  }).join(''):'<div class="empty">No hay usuarios registrados.</div>';
  if($('adminUsersTable'))$('adminUsersTable').innerHTML=html;if($('adminUsersFull'))$('adminUsersFull').innerHTML=html;
}
async function adminUpdateUserRole(id){
  const select=document.querySelector(`[data-user-role="${id}"]`);
  if(!select)return;
  const rol=select.value==='admin'?'admin':'cliente';
  try{
    const x=await apiCall('update_user_role',{id_usuario:Number(id),rol});
    if(x.user){
      const users=usersList().map(u=>Number(u.id_usuario)===Number(id)?{...u,...x.user,role:x.user.role||x.user.rol}:u);
      localStorage.setItem('omniSeytuUsers',JSON.stringify(users));
      await syncServerUsers();
      renderAdmin();
      toast(rol==='admin'?'✓ Usuario convertido en administrador.':'✓ Usuario convertido en cliente.');
    }
  }catch(err){toast('No se pudo cambiar el tipo de cuenta: '+err.message);}
}
window.omniConfirm=window.omniConfirm||function(opts={}){return new Promise(resolve=>{const m=document.getElementById('omniConfirmModal');if(!m)return resolve(window.confirm(opts.text||'¿Quieres continuar?'));const title=document.getElementById('omniConfirmTitle'),text=document.getElementById('omniConfirmText'),ok=document.getElementById('omniConfirmOk'),cancel=document.getElementById('omniConfirmCancel'),icon=document.getElementById('omniConfirmIcon');title.textContent=opts.title||'¿Quieres continuar?';if(icon)icon.textContent=opts.icon||'!';text.textContent=opts.text||'Esta acción requiere confirmación.';ok.textContent=opts.okText||'Confirmar';m.classList.remove('hidden');m.setAttribute('aria-hidden','false');const close=v=>{m.classList.add('hidden');m.setAttribute('aria-hidden','true');ok.onclick=null;cancel.onclick=null;resolve(v)};ok.onclick=()=>close(true);cancel.onclick=()=>close(false);});};
async function adminDeleteUser(id){
  const userId=Number(id); if(!userId)return;
  const row=usersList().find(u=>Number(u.id_usuario)===userId);
  const label=((row?.nombres||'')+' '+(row?.apellidos||'')).trim()||row?.usuario||row?.correo||'este usuario';
  const confirmed=await window.omniConfirm({title:'¿Eliminar usuario?',text:`Se quitará la cuenta de ${label} del listado de usuarios y ya no podrá iniciar sesión. Sus pedidos históricos permanecerán guardados.`,okText:'Sí, eliminar usuario'});if(!confirmed)return;
  try{
    const x=await apiCall('delete_user',{id_usuario:userId});
    if(!x.ok)throw new Error(x.message||'No se pudo quitar el usuario.');
    localStorage.setItem('omniSeytuUsers',JSON.stringify(usersList().filter(u=>Number(u.id_usuario)!==userId)));
    await syncServerUsers(); renderAdmin();
    toast('✓ Usuario quitado correctamente.');
  }catch(err){toast('No se pudo quitar el usuario: '+err.message)}
}

function adminAddUser(){
  ['adminUserName','adminUserLast','adminUserUsername','adminUserEmail','adminUserPhone','adminUserPass','adminUserPassConfirm'].forEach(id=>{if($(id))$(id).value='';});
  if($('adminUserRole'))$('adminUserRole').value='cliente';
  if($('adminUserMsg'))$('adminUserMsg').textContent='';
  $('adminUserCreateModal')?.classList.remove('hidden');
  setTimeout(()=>$('adminUserName')?.focus(),50);
}
async function adminCreateUserSave(){
  const nombres=$('adminUserName')?.value.trim()||'';
  const apellidos=$('adminUserLast')?.value.trim()||'';
  const usuario=$('adminUserUsername')?.value.trim().toLowerCase()||'';
  const correo=$('adminUserEmail')?.value.trim().toLowerCase()||'';
  const telefono=$('adminUserPhone')?.value.trim()||'';
  const clave=$('adminUserPass')?.value||'';
  const clave2=$('adminUserPassConfirm')?.value||'';
  const rol=$('adminUserRole')?.value==='admin'?'admin':'cliente';
  if(!nombres||!apellidos||!usuario||!correo||clave.length<6){return toast('Completa todos los campos y usa una contraseña de mínimo 6 caracteres.');}
  if(clave!==clave2)return toast('Las contraseñas no coinciden.');
  if(!/^[a-z0-9._-]{3,30}$/.test(usuario))return toast('El usuario debe tener 3 a 30 caracteres, sin espacios.');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo))return toast('Ingresa un correo válido.');
  try{
    const x=await apiCall('create_user',{nombres,apellidos,usuario,correo,clave,telefono,rol});
    if(!x?.user?.id_usuario) throw new Error('MySQL no devolvió el ID del usuario creado.');
    const verified=await apiCall('users',{},'GET');
    const saved=Array.isArray(verified.users)&&verified.users.some(u=>Number(u.id_usuario)===Number(x.user.id_usuario));
    if(!saved) throw new Error('El usuario fue enviado, pero no se pudo verificar en MySQL.');
    await syncServerUsers();
    $('adminUserCreateModal')?.classList.add('hidden');
    renderAdmin();
    toast(`✓ Usuario creado y verificado en MySQL (ID ${x.user.id_usuario}).`);
  }catch(err){toast('No se pudo crear el usuario: '+err.message);}
}

async function renderAdminFavorites(){
  const box=$('adminFavoritesList'); if(!box)return;
  try{
    const x=await apiCall('admin_favorites',{},'GET');
    const items=Array.isArray(x.favorites)?x.favorites:[];
    box.innerHTML=items.length?items.map(f=>`<div class="admin-fav-row"><img src="${safeAssetUrl(f.img||localProductImage({id:Number(f.id)}))}" alt=""><div><b>${esc(f.name)}</b><small>${esc(f.brand||'')} · ${Number(f.total||0)} favorito(s)</small></div></div>`).join(''):'<div class="empty">Aún no hay favoritos registrados.</div>';
  }catch(e){
    box.innerHTML='<div class="empty">No se pudo cargar el resumen de favoritos.</div>';
  }
}
function renderAdminInventory(){$('adminInventory').innerHTML=state.products.map(p=>`<div class="admin-inventory-row"><div><b>${esc(p.name)}</b><small>${esc(p.cat)} · ${esc(p.estado||'Disponible')} · ${Number(p.stock||0)} unidades</small></div><strong>${money(p.price)}</strong><button class="btn light" data-admin-edit-product="${p.id}">Editar producto</button></div>`).join('')}
async function uploadProductImage(file){
  if(!file) return '';
  const form=new FormData(); form.append('imagen',file);
  const r=await fetch(`${API}?action=upload_product_image`,{method:'POST',body:form,cache:'no-store'});
  const text=await r.text(); let x; try{x=JSON.parse(text)}catch(_){throw new Error('El servidor no devolvió una respuesta válida al subir la imagen.');}
  if(!r.ok||x.ok===false) throw new Error(x.message||'No se pudo subir la imagen.');
  return x.img||'';
}
async function adminSaveProduct(id){const p=product(id);if(!p)return;const get=k=>document.querySelector(`[data-admin-edit="${k}"][data-id="${p.id}"]`);const price=Number(get('price')?.value);const stock=Math.max(0,Math.floor(Number(get('stock')?.value)));if(!Number.isFinite(price)||!Number.isFinite(stock))return toast('Revisa precio y stock.');try{const x=await apiCall('update_product',{id:p.id,name:p.name,cat:p.cat||'General',desc:p.desc||'',price:Math.max(0,price),stock,img:p.img||'',estado:p.estado||'Disponible',editable:p.editable!==false&&p.editable!==0});if(x.product){Object.assign(p,x.product,{img:canonicalImageForId(p.id)||x.product.img||p.img});state.cart=state.cart.filter(l=>{const cp=product(l.id);return cp&&Number(l.qty)<=Number(cp.stock||0)});save();renderAll();renderAdmin();broadcastCatalogSync();toast('✓ Cambio guardado en MySQL y enviado a todas las vistas.');}}catch(err){toast('No se pudo guardar en MySQL: '+err.message)}}
async function adminSaveProductFull(id){const p=product(id);if(!p)return;const name=$('adminEditName').value.trim(),cat=$('adminEditCat').value.trim(),desc=$('adminEditDesc').value.trim(),price=Math.max(0,Number($('adminEditPrice').value||0)),stock=Math.max(0,Math.floor(Number($('adminEditStock').value||0))),estado=$('adminEditStatus').value;let img=$('adminEditImg').value.trim();if(!name||!cat||!Number.isFinite(price)||!Number.isFinite(stock))return toast('Completa correctamente los datos del producto.');try{const file=$('adminEditImageFile')?.files?.[0];if(file)img=await uploadProductImage(file);const x=await apiCall('update_product',{id,name,cat,desc,price,stock,img,estado});if(x.product){Object.assign(p,x.product);state.cart=state.cart.filter(l=>{const cp=product(l.id);return cp&&Number(l.qty)<=Number(cp.stock||0)});save();renderAll();renderAdmin();$('adminProductEditModal').classList.add('hidden');broadcastCatalogSync();toast('✓ Producto actualizado en MySQL y enviado a todas las vistas.');}}catch(err){toast('No se pudo guardar: '+err.message)}}
async function adminToggleProductEdit(id){const p=product(id);if(!p)return;const next=!(p.editable!==false&&Number(p.editable)!==0);const action=next?'activar':'desactivar';const confirmed=await window.omniConfirm({title:next?'¿Activar edición?':'¿Desactivar edición?',text:next?`Podrás editar el producto “${p.name}” desde este panel. ¿Quieres activar la edición?`:`El producto “${p.name}” quedará protegido y no podrás modificarlo hasta volver a activar la edición.`,okText:next?'Sí, activar edición':'Sí, desactivar edición',icon:next?'✎':'🔒'});if(!confirmed)return;try{const x=await apiCall('update_product',{id:p.id,name:p.name,brand:p.brand,cat:p.cat||'General',desc:p.desc||'',price:Number(p.price)||0,stock:Number(p.stock)||0,img:p.img||'',estado:p.estado||'Disponible',editable:next});if(x.product){Object.assign(p,x.product);save();renderAll();renderAdmin();broadcastCatalogSync();toast(next?'✓ Edición activada.':'✓ Edición desactivada.');}}catch(err){toast('No se pudo cambiar el permiso de edición: '+err.message)}}
function openAdminProductEditor(id){const p=product(id);if(!p)return;if(p.editable===false||Number(p.editable)===0){toast('La edición de este producto está desactivada. Actívala primero.');return;}$('adminEditId').value=p.id;$('adminEditName').value=p.name||'';$('adminEditCat').value=p.cat||'';$('adminEditDesc').value=p.desc||'';$('adminEditPrice').value=p.price??0;$('adminEditStock').value=p.stock??0;$('adminEditImg').value=p.img||'';$('adminEditStatus').value=p.estado||'Disponible';if($('adminEditImageFile'))$('adminEditImageFile').value='';$('adminProductEditModal').classList.remove('hidden')}
function adminAddProduct(){
  ['adminCreateName','adminCreateCat','adminCreateDesc','adminCreateImg'].forEach(id=>{if($(id))$(id).value='';});
  if($('adminCreatePrice'))$('adminCreatePrice').value='0';
  if($('adminCreateStock'))$('adminCreateStock').value='0';
  if($('adminCreateStatus'))$('adminCreateStatus').value='Disponible';
  if($('adminCreateImageFile'))$('adminCreateImageFile').value='';
  if($('adminProductCreateModal')){ $('adminProductCreateModal').classList.remove('hidden'); $('adminProductCreateModal').style.setProperty('display','grid','important'); $('adminProductCreateModal').setAttribute('aria-hidden','false'); }
}
async function adminCreateProductSave(){
  const name=$('adminCreateName')?.value.trim()||'';
  const cat=$('adminCreateCat')?.value.trim()||'General';
  const desc=$('adminCreateDesc')?.value.trim()||'';
  const price=Math.max(0,Number($('adminCreatePrice')?.value||0));
  const stock=Math.max(0,Math.floor(Number($('adminCreateStock')?.value||0)));
  let img=$('adminCreateImg')?.value.trim()||'';
  const estado=$('adminCreateStatus')?.value||'Disponible';
  if(!name)return toast('Escribe el nombre del producto.');
  if(!Number.isFinite(price)||!Number.isFinite(stock))return toast('Revisa precio y stock.');
  try{
    const file=$('adminCreateImageFile')?.files?.[0];
    if(file) img=await uploadProductImage(file);
    const x=await apiCall('create_product',{name,cat,desc,price,stock,img,estado});
    if(!x?.id) throw new Error('MySQL no devolvió el ID del producto creado.');
    const verified=await apiCall('products',{},'GET');
    const saved=Array.isArray(verified.products)&&verified.products.some(p=>Number(p.id)===Number(x.id));
    if(!saved) throw new Error('El producto fue enviado, pero no se pudo verificar en MySQL.');
    await syncServerProducts({broadcast:false});
    if($('adminProductCreateModal')){ $('adminProductCreateModal').classList.add('hidden'); $('adminProductCreateModal').style.removeProperty('display'); $('adminProductCreateModal').setAttribute('aria-hidden','true'); }
    renderAdmin();
    toast(`✓ ${name} guardado y verificado en MySQL (ID ${x.id}).`);
  }catch(err){toast('No se pudo crear el producto: '+err.message);}
}
let adminOrdersPoll=null;
function startAdminOrdersSync(){
  if(adminOrdersPoll)clearInterval(adminOrdersPoll);
  syncAdminOrders();
  adminOrdersPoll=setInterval(()=>{if(!$('adminPanel')?.classList.contains('hidden')&&state.user?.role==='admin')syncAdminOrders();},5000);
}
function stopAdminOrdersSync(){if(adminOrdersPoll){clearInterval(adminOrdersPoll);adminOrdersPoll=null;}}
function openAdmin(){state.user={...(state.user||{}),nombres:state.user?.nombres||state.profileName||'Administrador',apellidos:state.user?.apellidos||'',correo:state.user?.correo||state.profileEmail||'admin@omnilife.local',usuario:state.user?.usuario||'admin',role:'admin'};state.orders=[];save();adminUI();$('auth').classList.add('hidden');$('app').classList.add('hidden');$('adminPanel').classList.remove('hidden');renderAdmin();adminSetSection('dashboard');startAdminOrdersSync()}
function closeAdmin(){stopAdminOrdersSync();state.user=null;state.orders=[];save();$('adminPanel').classList.add('hidden');$('auth').classList.remove('hidden');showAuthHome()}
function showAuthHome(){
  $$('.modal').forEach(m=>m.classList.add('hidden'));
  $('app')?.classList.add('hidden');
  $('adminPanel')?.classList.add('hidden');
  $('auth')?.classList.remove('hidden');
  $('authHome').classList.add('hidden');
  $('clientAccess').classList.remove('hidden');
  $('adminAccess').classList.add('hidden');
  $('loginBox').classList.remove('hidden');
  $('registerBox').classList.add('hidden');
  if($('loginUser'))$('loginUser').value='';
  if($('loginPass'))$('loginPass').value='';
  $('regUser').value='';$('regName').value='';$('regLast').value='';
  $('regEmail').value='';$('regPhone').value='';$('regPass').value='';$('regPassConfirm').value='';
  $('loginMsg').textContent='';$('regMsg').textContent='';
  applyPreferences();
}
function authTab(v){$('loginBox').classList.toggle('hidden',v!=='login');$('registerBox').classList.toggle('hidden',v!=='register');}
function resetCatalog(){if(confirm('¿Restaurar nombres, precios y stock iniciales?')){state.products=clone();state.cart=[];save();renderAll();toast('Catálogo restaurado.')}}
function bind(){
  $('cartModal')?.addEventListener('click',e=>{
    const btn=e.target.closest('[data-minus],[data-plus],[data-remove]');
    if(!btn)return;
    e.preventDefault();e.stopPropagation();
    if(btn.dataset.minus){changeCartQty(btn.dataset.minus,-1);}
    else if(btn.dataset.plus){changeCartQty(btn.dataset.plus,1);}
    else if(btn.dataset.remove){removeCart(btn.dataset.remove);}
    if(!$('cartModal').classList.contains('hidden'))openCartModal();
  });
  document.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;if(t.id==='openCartTop'){openCartModal();return}if(t.dataset.smartGo){const target=t.dataset.smartGo;if(['historial','cuenta','config','opiniones'].includes(target)&&!state.user){requireLogin();return}setSection(target);return}if(t.dataset.adminGo){adminSetSection(t.dataset.adminGo);return}if(t.dataset.adminRefreshOrders!==undefined){syncAdminOrders().then(ok=>toast(ok?'✓ Pedidos actualizados desde MySQL.':'No se pudo conectar con la base de datos.'));return}if(t.dataset.orderSeen){const o=state.orders.find(x=>x.id===t.dataset.orderSeen);if(!o)return;o.seen=true;const dbId=Number(o.dbId)||Number(String(o.id).replace(/\D/g,''));apiCall('update_order_status',{id_pedido:dbId,estado:o.status||'Pendiente',visto:1}).then(()=>{save();renderAdmin();}).catch(err=>toast('No se pudo actualizar el pedido: '+err.message));return}if(t.dataset.adminTab){adminTab=t.dataset.adminTab;$$('[data-admin-tab]').forEach(b=>b.classList.toggle('active',b.dataset.adminTab===adminTab));$('adminProductsTable').classList.toggle('hidden',adminTab!=='products');$('adminOrdersTable').classList.toggle('hidden',adminTab!=='orders');$('adminUsersTable').classList.toggle('hidden',adminTab!=='users');return}if(t.id==='adminLogout'){closeAdmin();return}if(t.id==='adminQuickUserTop'){adminAddUser();return}if(t.id==='adminAddProductDashboard'||t.id==='adminQuickAddProduct'){adminAddProduct();return}if(t.dataset.deleteUser){adminDeleteUser(t.dataset.deleteUser);return}if(t.dataset.saveUserRole){adminUpdateUserRole(t.dataset.saveUserRole);return}if(t.dataset.adminSave){adminSaveProduct(t.dataset.adminSave);return}if(t.dataset.adminToggleEdit){adminToggleProductEdit(t.dataset.adminToggleEdit);return}if(t.dataset.adminEditProduct){openAdminProductEditor(t.dataset.adminEditProduct);return}if(t.id==='adminResetCatalog'){resetCatalog();renderAdmin();return}if(t.dataset.go){const protectedSections=['historial','opiniones','cuenta','config'];if(protectedSections.includes(t.dataset.go)&&!state.user){requireLogin();return}setSection(t.dataset.go);return}if(t.dataset.fav){e.preventDefault();e.stopPropagation();toggleFav(t.dataset.fav);return}
if(t.dataset.detailMinus){const q=$('detailQty');if(q)q.textContent=Math.max(1,Number(q.textContent||1)-1);return}
if(t.dataset.detailPlus){const p=product(t.dataset.detailPlus),q=$('detailQty');if(p&&q)q.textContent=Math.min(p.stock||1,Number(q.textContent||1)+1);return}
if(t.dataset.addDetail){const p=product(t.dataset.addDetail),q=Math.max(1,Number($('detailQty')?.textContent||1));if(!p)return;for(let i=0;i<q;i++)addCart(p.id);$('productModal').classList.add('hidden');return}
if(t.dataset.detailShare){const p=product(t.dataset.detailShare);if(p){const text=`${p.brand} · ${p.name} · ${money(p.price)}\n${p.desc}`;if(navigator.share)navigator.share({title:p.name,text}).catch(()=>{});else navigator.clipboard?.writeText(text).then(()=>toast('Información copiada para compartir.')).catch(()=>toast('No se pudo copiar la información.'));}return}
if(t.dataset.detailWhatsapp){const p=product(t.dataset.detailWhatsapp);if(p){const url='https://wa.me/?text='+encodeURIComponent(`Hola, quisiera consultar por ${p.brand} ${p.name}. Precio: ${money(p.price)}.`);window.open(url,'_blank');}return}
if(t.dataset.fav){toggleFav(t.dataset.fav);return}if(t.dataset.add){addCart(t.dataset.add);$('productModal').classList.add('hidden');return}if(t.dataset.detail){openProduct(t.dataset.detail);return}if(t.dataset.minus){e.preventDefault();e.stopPropagation();changeCartQty(t.dataset.minus,-1);return}
if(t.dataset.plus){e.preventDefault();e.stopPropagation();changeCartQty(t.dataset.plus,1);return}
if(t.dataset.remove){e.preventDefault();e.stopPropagation();removeCart(t.dataset.remove);return}if(t.dataset.close){$(t.dataset.close).classList.add('hidden');return}if(t.dataset.brand){selectedBrand=t.dataset.brand;categories();$$('[data-brand]').forEach(b=>b.classList.toggle('active',b.dataset.brand===selectedBrand));renderCatalog();return}if(t.dataset.pay){payment=t.dataset.pay;$$('.pay').forEach(b=>b.classList.toggle('active',b.dataset.pay===payment));payInfo();return}if(t.dataset.rate){rating=Number(t.dataset.rate);$$('[data-rate]').forEach(b=>b.classList.toggle('on',Number(b.dataset.rate)<=rating));return}if(t.dataset.detailOrder){openOrderDetail(t.dataset.detailOrder);return}if(t.dataset.receipt){const o=state.orders.find(x=>x.id===t.dataset.receipt);if(o)receipt(o);return}if(t.id==='openCheckout'){openCartModal();return}if(t.id==='checkout'){openPayment();return}if(t.id==='confirmPay'){confirmPayment();return}if(t.id==='receiptYes'&&currentOrder){showReceiptOptions();return}if(t.id==='receiptNo'){ $('successModal').classList.add('hidden'); $('successModal').style.display='none'; setSection('inicio'); return }if(t.id==='viewReceipt'&&currentOrder){$('successModal').classList.add('hidden');$('successModal').style.display='none';receipt(currentOrder);return}if(t.id==='printReceipt'&&currentOrder){$('successModal').classList.add('hidden');$('successModal').style.display='none';receipt(currentOrder,true);return}if(t.id==='whatsappReceipt'&&currentOrder){sendReceiptWhatsApp(currentOrder);return}if(t.id==='closeAfterPayment'){ $('successModal').classList.add('hidden'); $('successModal').style.display='none'; setSection('inicio'); return }if(t.id==='successHistory'){ $('successModal').classList.add('hidden'); setSection('historial'); return}if(t.id==='historyLogin'||t.id==='goLogin'){showAuthHome();$('authRequiredModal').classList.add('hidden');return}if(t.id==='detailReceipt'&&currentOrder){$('orderDetailModal').classList.add('hidden');receipt(currentOrder);return}if(t.id==='sendFeedback'){
  if(!requireLogin())return;
  const text=$('comment').value.trim(),title=$('commentTitle')?.value.trim()||'Opinión',
    type=$('feedbackType')?.value||'Experiencia general',aspect=$('feedbackAspect')?.value||'Experiencia general',
    recommend=$('feedbackRecommend')?.value||'sin';
  if(!text||!rating)return toast('Selecciona una valoración y escribe un comentario.');
  t.disabled=true;
  (async()=>{
    try{
      const x=await apiCall('foro_add',{id_usuario:Number(state.user.id_usuario),rating:Number(rating),text,title,type,aspect,recommend});
      if(!x.opinion)throw new Error('El servidor no devolvió la opinión guardada.');
      state.feedback=[x.opinion,...(state.feedback||[]).filter(f=>String(f.id)!==String(x.opinion.id))];
      save(false);renderFeedback();
      $('comment').value='';if($('commentTitle'))$('commentTitle').value='';
      rating=0;$$('[data-rate]').forEach(b=>b.classList.remove('on'));
      if($('feedbackRecommend'))$('feedbackRecommend').value='sin';
      if($('feedbackAspect'))$('feedbackAspect').value='Experiencia general';
      if($('commentCounter'))$('commentCounter').textContent='0/1200';
      toast('¡Tu opinión fue publicada en el foro y guardada en MySQL!');
    }catch(err){toast('No se pudo publicar la opinión: '+err.message);}
    finally{t.disabled=false;}
  })();
  return;
}
if(t.dataset.helpful){
  const id=String(t.dataset.helpful);
  (async()=>{
    try{
      const x=await apiCall('foro_helpful',{id:Number(id)});
      const f=(state.feedback||[]).find(v=>String(v.id)===id);
      if(f)f.helpful=Number(x.helpful)||0;
      save(false);renderFeedback();toast('Gracias por tu valoración.');
    }catch(err){toast('No se pudo actualizar la valoración: '+err.message);}
  })();
  return;
}if(t.dataset.save){const id=Number(t.dataset.save);const p=product(id);if(!p)return;const name=document.querySelector(`[data-edit="name"][data-id="${p.id}"]`)?.value.trim()||p.name;const price=Number(document.querySelector(`[data-edit="price"][data-id="${p.id}"]`)?.value);const stock=Math.max(0,Math.floor(Number(document.querySelector(`[data-edit="stock"][data-id="${p.id}"]`)?.value)));if(!Number.isFinite(price)||!Number.isFinite(stock))return toast('Revisa precio y stock.');(async()=>{try{const x=await apiCall('update_product',{id:p.id,name,cat:p.cat||'General',desc:p.desc||'',price:Math.max(0,price),stock,img:p.img||'',estado:p.estado||'Disponible',editable:p.editable!==false&&p.editable!==0});if(x.product){Object.assign(p,x.product);state.cart=state.cart.filter(l=>{const cp=product(l.id);return cp&&Number(l.qty)<=Number(cp.stock||0)});save();renderAll();renderAdmin();broadcastCatalogSync();toast('✓ Cambio guardado en MySQL y sincronizado con todos los catálogos.')}}catch(err){toast('No se pudo guardar en MySQL: '+err.message)}})();return}});['search','category','sort'].forEach(id=>$(id).addEventListener('input',renderCatalog));$('comment')?.addEventListener('input',e=>{if($('commentCounter'))$('commentCounter').textContent=`${e.target.value.length}/1200`});$('feedbackSort')?.addEventListener('change',renderFeedback);$('loginForm').addEventListener('submit',login);$('registerForm').addEventListener('submit',register);$('showForgot')?.addEventListener('click',()=>{ $('forgotPasswordModal').classList.remove('hidden'); $('forgotEmail').focus(); });$('forgotForm')?.addEventListener('submit',requestPasswordReset);$('resetForm')?.addEventListener('submit',resetPassword);$('logout').addEventListener('click',logout);$('showRegister').addEventListener('click',()=>authTab('register'));$('continueGuest').addEventListener('click',enterGuest);$('backLogin').addEventListener('click',()=>authTab('login'));$('mobileMenu').addEventListener('click',()=>document.querySelector('.sidebar').classList.toggle('open'));$('backTop')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));window.addEventListener('scroll',()=>{$('backTop')?.classList.toggle('show',window.scrollY>420)});window.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)){e.preventDefault();setSection('catalogo');$('search')?.focus();}});$('darkMode')?.addEventListener('change',e=>{state.theme=e.target.checked?'dark':'light';save();applyPreferences();renderAll()});
  $('adminDarkMode')?.addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';save();applyPreferences();renderAll()});
  $('adminEditSave')?.addEventListener('click',()=>adminSaveProductFull(Number($('adminEditId')?.value||0)));
$('adminAddProduct')?.addEventListener('click',adminAddProduct);
$('adminCreateSave')?.addEventListener('click',adminCreateProductSave);$('adminUserCreateSave')?.addEventListener('click',adminCreateUserSave);$('clearData')?.addEventListener('click',async()=>{if(confirm('¿Limpiar carrito, favoritos, compras y opiniones?')){state.cart=[];state.favorites=[];state.orders=[];state.feedback=[];state.recent=[];if(state.user?.id_usuario){try{await apiCall('favorites_clear',{id_usuario:state.user.id_usuario});}catch(err){toast('No se pudieron limpiar los favoritos en MySQL: '+err.message);return;}}save();renderAll();toast('Datos limpiados.')}});$('fontSizeRange')?.addEventListener('input',e=>{state.fontSize=Number(e.target.value);save();applyPreferences()});$('notifySetting')?.addEventListener('change',e=>{state.notifications=e.target.checked;save()});$('motionSetting')?.addEventListener('change',e=>{state.motion=e.target.checked;save();applyPreferences()});$('resetPreferences')?.addEventListener('click',()=>{state.theme='light';state.font='DM Sans';state.fontSize=100;state.notifications=true;state.motion=true;state.recentSetting=true;state.stockSetting=true;state.confirmDeleteSetting=true;state.contrast=false;save();applyPreferences();renderAll();toast('Preferencias restablecidas.')});$('stockSetting')?.addEventListener('change',e=>{state.stockSetting=e.target.checked;save();applyPreferences();renderAll()});$('confirmDeleteSetting')?.addEventListener('change',e=>{state.confirmDeleteSetting=e.target.checked;save()});$('contrastSetting')?.addEventListener('click',()=>{state.contrast=!state.contrast;save();applyPreferences();toast(state.contrast?'Contraste suave activado.':'Contraste suave desactivado.')});$('resetView')?.addEventListener('click',()=>{state.contrast=false;state.fontSize=100;state.font='DM Sans';state.motion=true;save();applyPreferences();renderAll();toast('Vista restablecida.')});$('exportData')?.addEventListener('click',()=>{const payload={usuario:state.user,preferencias:{tema:state.theme,fuente:state.font,tamano:state.fontSize},favoritos:state.favorites,carrito:state.cart,pedidos:state.orders,opiniones:state.feedback};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mis-datos-omnilife-seytu.json';a.click();URL.revokeObjectURL(a.href);toast('Tus datos fueron preparados para exportación.')});$('saveProfileData')?.addEventListener('click',async()=>{if(!state.user)return toast('Inicia sesión para editar tu cuenta.');const payload={id_usuario:state.user.id_usuario,nombres:$('profileNameEdit')?.value.trim()||'',apellidos:$('profileLastEdit')?.value.trim()||'',usuario:$('profileUsernameEdit')?.value.trim().toLowerCase()||'',correo:$('profileEmailEdit')?.value.trim().toLowerCase()||'',telefono:$('profilePhoneEdit')?.value.trim()||'',avatar:state.avatar||null};if(!payload.nombres||!payload.apellidos||!payload.usuario||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.correo)||!/^[0-9]{7,15}$/.test(payload.telefono))return $('profileSettingsMsg').textContent='Completa correctamente tus datos, incluido el teléfono.';try{const x=await apiCall('update_profile',payload);state.user={...state.user,...x.user};if(x.user?.avatar)state.avatar=x.user.avatar;localStorage.setItem('omniSeytuUsers',JSON.stringify(usersList().map(u=>Number(u.id_usuario)===Number(state.user.id_usuario)?{...u,...x.user}:u)));save();userUI();$('profileSettingsMsg').textContent='Datos actualizados correctamente.';toast('✓ Datos de cuenta actualizados.')}catch(e){$('profileSettingsMsg').textContent=e.message||'No se pudieron guardar los datos.'}});
$('saveProfilePassword')?.addEventListener('click',async()=>{if(!state.user)return toast('Inicia sesión para editar tu cuenta.');const cur=$('profileCurrentPass')?.value||'',n=$('profileNewPass')?.value||'',n2=$('profileNewPass2')?.value||'';if(n.length<6)return $('profileSettingsMsg').textContent='La nueva contraseña debe tener mínimo 6 caracteres.';if(n!==n2)return $('profileSettingsMsg').textContent='Las contraseñas no coinciden.';try{await apiCall('change_password',{id_usuario:state.user.id_usuario,current_password:cur,new_password:n});const users=usersList().map(u=>Number(u.id_usuario)===Number(state.user.id_usuario)?{...u,clave:n}:u);localStorage.setItem('omniSeytuUsers',JSON.stringify(users));$('profileCurrentPass').value='';$('profileNewPass').value='';$('profileNewPass2').value='';$('profileSettingsMsg').textContent='Contraseña actualizada correctamente.';toast('✓ Contraseña actualizada.')}catch(e){$('profileSettingsMsg').textContent=e.message||'No se pudo cambiar la contraseña.'}});
// Marcar como 'sucio' cualquier dato que el administrador esté editando para
// que las sincronizaciones automáticas no vuelvan a poner el valor anterior.
['adminNameEdit','adminLastEdit','adminUsernameEdit','adminEmailEdit','adminPhoneEdit'].forEach(id=>$(id)?.addEventListener('input',e=>{e.currentTarget.dataset.adminDirty='1';}));

$('saveAdminData')?.addEventListener('click',async()=>{const n=$('adminNameEdit')?.value.trim()||'',a=$('adminLastEdit')?.value.trim()||'',u=$('adminUsernameEdit')?.value.trim().toLowerCase()||'',m=$('adminEmailEdit')?.value.trim().toLowerCase()||'',phone=$('adminPhoneEdit')?.value.trim()||'';if(!n||!a)return $('adminSettingsMsg').textContent='Completa nombres y apellidos.';if(!/^[a-z0-9._-]{3,30}$/.test(u))return $('adminSettingsMsg').textContent='El usuario debe tener entre 3 y 30 caracteres (letras, números, punto, guion o guion bajo).';if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m))return $('adminSettingsMsg').textContent='Ingresa un correo válido.';if(!/^[0-9]{7,15}$/.test(phone))return $('adminSettingsMsg').textContent='Ingresa un teléfono válido.';if(!state.user?.id_usuario)return $('adminSettingsMsg').textContent='La cuenta de administrador todavía no está sincronizada con MySQL.';try{const x=await apiCall('update_profile',{id_usuario:state.user.id_usuario,nombres:n,apellidos:a,usuario:u,correo:m,telefono:phone,avatar:state.user.avatar||null});state.user={...state.user,...x.user,role:'admin'};state.profileName=n;state.profileEmail=m;state.profilePhone=phone;localStorage.setItem('omniSeytuUsers',JSON.stringify(usersList().map(item=>Number(item.id_usuario)===Number(state.user.id_usuario)?{...item,...state.user}:item)));['adminNameEdit','adminLastEdit','adminUsernameEdit','adminEmailEdit','adminPhoneEdit'].forEach(id=>{const el=$(id);if(el)delete el.dataset.adminDirty;});save();adminUI();$('adminSettingsMsg').textContent='Datos actualizados correctamente.';toast('✓ Datos del administrador actualizados.')}catch(e){$('adminSettingsMsg').textContent=e.message||'No se pudieron guardar los datos del administrador.';toast('No se pudieron actualizar los datos del administrador.')}});
$('saveAdminPassword')?.addEventListener('click',async()=>{const cur=$('adminCurrentPass')?.value||'',n=$('adminNewPass')?.value||'',n2=$('adminNewPass2')?.value||'';if(!state.user?.id_usuario)return $('adminSettingsMsg').textContent='La cuenta de administrador todavía no está sincronizada con MySQL.';if(!cur)return $('adminSettingsMsg').textContent='Ingresa la contraseña actual.';if(n.length<6)return $('adminSettingsMsg').textContent='La nueva contraseña debe tener mínimo 6 caracteres.';if(n!==n2)return $('adminSettingsMsg').textContent='Las contraseñas no coinciden.';try{await apiCall('change_password',{id_usuario:state.user.id_usuario,current_password:cur,new_password:n});state.profilePassword=n;const users=usersList().map(item=>Number(item.id_usuario)===Number(state.user.id_usuario)?{...item,clave:n}:item);localStorage.setItem('omniSeytuUsers',JSON.stringify(users));$('adminCurrentPass').value=n;$('adminNewPass').value='';$('adminNewPass2').value='';save();$('adminSettingsMsg').textContent='Contraseña actualizada correctamente.';toast('✓ Contraseña del administrador actualizada.')}catch(e){$('adminSettingsMsg').textContent=e.message||'No se pudo cambiar la contraseña.'}});
$('removeAdminAvatar')?.addEventListener('click',()=>{state.adminAvatar='';save();adminUI();toast('Imagen del administrador quitada.')});
const avatarFile=$('avatarFile');$$('[data-avatar-trigger]').forEach(b=>b.addEventListener('click',()=>avatarFile?.click()));avatarFile?.addEventListener('change',e=>{const f=e.target.files?.[0];if(!f)return;if(f.size>2*1024*1024)return toast('La imagen debe pesar menos de 2 MB.');const r=new FileReader();r.onload=async()=>{state.avatar=r.result;save();userUI();if(state.user?.id_usuario){try{const x=await apiCall('update_profile',{id_usuario:state.user.id_usuario,nombres:state.user.nombres||'',apellidos:state.user.apellidos||'',usuario:state.user.usuario||'',correo:state.user.correo||'',telefono:state.user.telefono||'',avatar:state.avatar});state.user={...state.user,...x.user};}catch(err){toast('La imagen quedó en este dispositivo, pero no se pudo sincronizar con MySQL.')}}toast('Imagen de perfil actualizada.')};r.readAsDataURL(f)});$('removeAvatar')?.addEventListener('click',async()=>{state.avatar='';save();userUI();if(state.user?.id_usuario){try{await apiCall('remove_user_avatar',{id_usuario:state.user.id_usuario});}catch(err){toast('No se pudo sincronizar la eliminación de la imagen con MySQL.')}}toast('Imagen de perfil quitada.')});$$('[data-remove-avatar]').forEach(b=>b.addEventListener('click',async()=>{state.avatar='';save();userUI();if(state.user?.id_usuario){try{await apiCall('remove_user_avatar',{id_usuario:state.user.id_usuario});}catch(err){toast('No se pudo sincronizar la eliminación de la imagen con MySQL.')}}toast('Imagen de perfil quitada.') }));const adminAvatarFile=$('adminAvatarFile');$('adminAvatar')?.addEventListener('click',e=>{if(e.target.closest('[data-admin-avatar-trigger]'))adminAvatarFile?.click()});adminAvatarFile?.addEventListener('change',e=>{const f=e.target.files?.[0];if(!f)return;if(f.size>2*1024*1024)return toast('La imagen debe pesar menos de 2 MB.');const r=new FileReader();r.onload=()=>{state.adminAvatar=r.result;save();adminUI();toast('Imagen del administrador actualizada.')};r.readAsDataURL(f)});const adminAvatarFile2=$('adminAvatarFile2');$$('[data-admin-avatar-trigger]').forEach(b=>b.addEventListener('click',()=>{if(b.closest('#adminSettings'))adminAvatarFile2?.click();else adminAvatarFile?.click()}));adminAvatarFile2?.addEventListener('change',e=>{const f=e.target.files?.[0];if(!f)return;if(f.size>2*1024*1024)return toast('La imagen debe pesar menos de 2 MB.');const r=new FileReader();r.onload=()=>{state.adminAvatar=r.result;save();adminUI();toast('Imagen del administrador actualizada.')};r.readAsDataURL(f)});$$('[data-theme]').forEach(b=>b.addEventListener('click',()=>{state.theme=b.dataset.theme;save();applyPreferences();renderAll()}));
  $$('[data-home-search]').forEach(b=>b.addEventListener('click',()=>{
    const category=b.dataset.homeSearch;
    setSection('catalogo');
    if($('category')){$('category').value=category;renderCatalog();}
  }));
  const tips=[
    ['Encuentra lo que buscas','Usa los filtros del catálogo para localizar productos con menos pasos.'],
    ['Ajusta tu carrito','Puedes subir, bajar o eliminar unidades directamente desde la ventana del carrito.'],
    ['Guarda tus favoritos','Presiona ♡ en un producto y podrás verlo después desde Favoritos.'],
    ['Revisa antes de pagar','Comprueba cantidades y total antes de continuar al pago.']
  ];
  let tipIndex=0;
  const nextTip=()=>{if($('homeTipTitle')){$('homeTipTitle').textContent=tips[tipIndex][0];$('homeTipText').textContent=tips[tipIndex][1];}};
  $('nextHomeTip')?.addEventListener('click',()=>{tipIndex=(tipIndex+1)%tips.length;nextTip();});
  nextTip();
$$('[data-font]').forEach(b=>b.addEventListener('click',()=>{state.font=b.dataset.font;save();applyPreferences()}));
document.addEventListener('change',e=>{const sel=e.target.closest?.('[data-order-status]');if(!sel)return;const o=state.orders.find(x=>x.id===sel.dataset.orderStatus);if(!o)return;const next=sel.value,dbId=Number(o.dbId)||Number(String(o.id).replace(/\D/g,''));o.status=next;apiCall('update_order_status',{id_pedido:dbId,estado:next,visto:o.seen?1:0}).then(()=>{renderAdmin();toast('✓ Estado del pedido actualizado.')}).catch(err=>{toast('No se pudo actualizar el estado: '+err.message);syncAdminOrders();});});$('resetCatalog')?.addEventListener('click',()=>{resetCatalog();renderAdmin()});$$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.add('hidden')}));window.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.modal').forEach(m=>m.classList.add('hidden'))});window.addEventListener('storage',e=>{if(e.key===KEY&&e.newValue){try{state={...defaults,...JSON.parse(e.newValue)};renderAll();if(!$('adminPanel').classList.contains('hidden'))renderAdmin()}catch{}}});channel?.addEventListener('message',e=>{if(e.data?.type==='state'&&e.data.state){state={...defaults,...e.data.state};renderAll();if(!$('adminPanel').classList.contains('hidden'))renderAdmin()}})}
async function apiCall(action,data={},method='POST'){try{const query=method==='GET'?`?action=${encodeURIComponent(action)}&_=${Date.now()}`:`?action=${encodeURIComponent(action)}`;const r=await fetch(`${API}${query}`,{cache:'no-store',method,headers:{'Content-Type':'application/json'},body:method==='GET'?undefined:JSON.stringify(data)});const text=await r.text();let x;try{x=JSON.parse(text)}catch(_){throw new Error('El servidor no devolvió una respuesta JSON válida. Puedes usar el modo de prueba local.')}if(!r.ok||x.ok===false)throw new Error(x.message||'No se pudo completar la operación.');return x}catch(e){throw e}}
async function login(e){
  e.preventDefault();
  const identifier=$('loginUser').value.trim().toLowerCase(),pass=$('loginPass').value;
  const startUserSession=(u)=>{
    // Cada cuenta recupera únicamente sus propios favoritos y carrito.
    state.user=u;
    if(u?.role==='admin'){state.profileName=u.nombres||'Administrador';state.profileEmail=u.correo||'admin@omnilife.local';state.profilePhone=u.telefono||'';}
    state.favorites=[];state.cart=[];state.orders=[];state.feedback=[];state.recent=[];
    if(u?.id_usuario) restoreUserLocalState(u.id_usuario);
    save(false);
    enter();
  };
  try{
    const x=await apiCall('login',{identifier,password:pass});
    localStorage.setItem('omniSeytuUsers',JSON.stringify([...usersList().filter(u=>(u.correo||'').toLowerCase()!==x.user.correo.toLowerCase()),{...x.user,clave:pass}]));
    startUserSession(x.user);
    toast(`¡Bienvenido/a, ${x.user.nombres}!`);
  }catch(err){
    const isAdminIdentifier=identifier==='admin'||identifier==='admin@omnilife.local';
    if(!isAdminIdentifier){
      const cleanId=identifier.replace(/\D/g,'');const local=usersList().find(u=>(((u.usuario||'').toLowerCase()===identifier||(u.correo||'').toLowerCase()===identifier||(String(u.telefono||'').replace(/\D/g,'')===cleanId&&cleanId.length>=7)))&&String(u.clave)===pass);
      if(local){startUserSession(local);toast(`¡Bienvenido/a, ${local.nombres}!`);return}
    }
    $('loginMsg').textContent=err.message||'No se pudo iniciar sesión.'
  }
}
async function requestPasswordReset(e){
  e.preventDefault();
  const email=$('forgotEmail').value.trim().toLowerCase();
  $('forgotMsg').textContent='';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){ $('forgotMsg').textContent='Ingresa un correo válido.'; return; }
  try{
    const x=await apiCall('forgot_request',{correo:email});
    $('forgotMsg').textContent=x.dev_code ? `${x.message||'Código listo.'} Código: ${x.dev_code}` : (x.message||'Código enviado.');
    $('resetBox').classList.remove('hidden');
    if(x.dev_code){ $('resetCode').value=x.dev_code; $('resetCode').focus(); }
  }catch(err){ $('forgotMsg').textContent=err.message||'No se pudo enviar el código.'; }
}
async function resetPassword(e){
  e.preventDefault();
  const email=$('forgotEmail').value.trim().toLowerCase();
  const code=$('resetCode').value.trim();
  const pass=$('resetPass').value, pass2=$('resetPass2').value;
  if(pass.length<6)return $('resetMsg').textContent='La nueva contraseña debe tener mínimo 6 caracteres.';
  if(pass!==pass2)return $('resetMsg').textContent='Las contraseñas no coinciden.';
  try{
    const x=await apiCall('reset_password',{correo:email,codigo:code,clave:pass});
    $('resetMsg').textContent=x.message||'Contraseña actualizada.';
    setTimeout(()=>{ $('forgotPasswordModal').classList.add('hidden'); $('resetBox').classList.add('hidden'); $('forgotForm').reset(); $('resetForm').reset(); authTab('login'); $('loginUser').value=email; $('loginPass').value=''; $('loginMsg').textContent='Contraseña actualizada. Ya puedes iniciar sesión.'; },900);
  }catch(err){ $('resetMsg').textContent=err.message||'Código inválido o vencido.'; }
}
async function register(e){
  e.preventDefault();
  const u={
    nombres:$('regName').value.trim(),
    apellidos:$('regLast').value.trim(),
    usuario:$('regUser').value.trim().toLowerCase(),
    correo:$('regEmail').value.trim().toLowerCase(),
    telefono:$('regPhone').value.trim(),
    clave:$('regPass').value
  };
  const confirm=$('regPassConfirm').value;

  if(!u.nombres||!u.apellidos||!u.usuario||!u.correo||!u.telefono||u.clave.length<6)
    return $('regMsg').textContent='Completa todos los campos, incluido el número telefónico, y usa una contraseña de mínimo 6 caracteres.';
  if(!/^[0-9+()\s-]{7,20}$/.test(u.telefono))
    return $('regMsg').textContent='Ingresa un número telefónico válido.';
  if(!/^[a-z0-9._-]{3,30}$/.test(u.usuario))
    return $('regMsg').textContent='El usuario debe tener 3 a 30 caracteres, sin espacios.';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(u.correo))
    return $('regMsg').textContent='Ingresa un correo electrónico válido.';
  if(u.clave!==confirm)
    return $('regMsg').textContent='Las contraseñas no coinciden.';
  if(u.usuario===ADMIN_USER)
    return $('regMsg').textContent='Ese usuario está reservado.';
  if(usersList().some(x=>(x.usuario||'').toLowerCase()===u.usuario||(x.correo||'').toLowerCase()===u.correo))
    return $('regMsg').textContent='Ese usuario o correo ya está registrado.';

  try{
    const x=await apiCall('register',u);
    // La cuenta se guarda en MySQL. NO se inicia sesión automáticamente.
    // Volvemos a la pantalla de login con los datos de acceso listos.
    const saved={...x.user,usuario:u.usuario};
    localStorage.setItem('omniSeytuUsers',JSON.stringify([
      ...usersList().filter(v=>(v.correo||'').toLowerCase()!==u.correo),
      {...saved}
    ]));
    authTab('login');
    $('loginUser').value=u.usuario;
    $('loginPass').value=u.clave;
    $('loginMsg').textContent='';
    $('loginUser').focus();
    toast('Cuenta creada. Ahora inicia sesión con tus datos.');
  }catch(err){
    // Modo local de prueba si PHP/MySQL todavía no está disponible.
    const localUser={...u};
    localStorage.setItem('omniSeytuUsers',JSON.stringify([
      ...usersList().filter(v=>(v.usuario||'').toLowerCase()!==u.usuario && (v.correo||'').toLowerCase()!==u.correo),
      localUser
    ]));
    authTab('login');
    $('loginUser').value=u.usuario;
    $('loginPass').value=u.clave;
    $('loginMsg').textContent='';
    $('loginUser').focus();
    toast('Cuenta creada en modo de prueba. Ahora inicia sesión.');
  }
}
async function syncServerFavorites(){
  if(!state.user?.id_usuario)return false;
  try{
    const r=await fetch(`${API}?action=favorites&id_usuario=${encodeURIComponent(state.user.id_usuario)}&_=${Date.now()}`,{cache:'no-store'});
    const data=await r.json();
    if(!r.ok||data.ok===false)throw new Error(data.message||'No se pudieron cargar los favoritos.');
    const serverFavorites=Array.isArray(data.favorites)?[...new Set(data.favorites.map(Number).filter(Number.isFinite))]:[];
    if(serverFavorites.length || !(state.favorites||[]).length) state.favorites=serverFavorites;
    save(false);
    renderAll();
    return true;
  }catch(e){
    console.warn('No se pudieron sincronizar favoritos:',e.message);
    return false;
  }
}
async function syncServerData(){
  if(!state.user?.id_usuario)return;
  try{const r=await fetch(`${API}?action=orders&id_usuario=${encodeURIComponent(state.user.id_usuario)}`);const x=await r.json();if(x.ok){state.orders=x.orders.map(o=>({id:'SL-'+String(o.id_pedido).padStart(8,'0'),date:new Date(o.fecha_pedido).toLocaleString('es-PE',{dateStyle:'short',timeStyle:'short'}),payment:o.metodo_pago||'Pago',total:Number(o.total),status:o.estado||'Pendiente',seen:Number(o.visto||0)===1,customer:state.user.nombres||'Cliente',email:o.correo_comprobante||state.user.correo,items:(o.items||[]).map(i=>({id:Number(i.id),name:i.name,price:Number(i.price),qty:Number(i.qty),brand:i.brand||'OMNILIFE',img:i.img||''}))}));save();renderAll()}}catch(e){console.warn('No se pudo sincronizar pedidos:',e.message)}
}
let catalogSyncBusy=false;
async function syncServerProducts(options={}){
  if(catalogSyncBusy)return false;
  catalogSyncBusy=true;
  try{
    const x=await apiCall('products',{},'GET');
    if(Array.isArray(x.products)){
      state.products=x.products.map(p=>{const id=Number(p.id);return {...p,id,price:Number(p.price),stock:Number(p.stock),img:canonicalImageForId(id)||(p.img&&String(p.img).trim())||IMG_BY_ID[id]||''};});
      save();
      renderAll();
      if(options.broadcast===true) broadcastCatalogSync();
      return true;
    }
    return false;
  }catch(e){
    console.warn('No se pudo sincronizar el catálogo:',e.message);
    return false;
  }finally{catalogSyncBusy=false;}
}

let serverCatalogPoll=null;
function startServerCatalogSync(){
  if(serverCatalogPoll) return;
  const tick=async()=>{
    if(document.visibilityState==='hidden') return;
    try{
      const changed=await syncServerProducts({broadcast:false});
      if(changed && $('adminPanel') && !$('adminPanel').classList.contains('hidden')) renderAdmin();
    }catch(_){}
  };
  tick();
  serverCatalogPoll=setInterval(tick,4000);
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')tick();});
}
async function syncAdminOrders(){
  if(state.user?.role!=='admin')return false;
  try{
    const x=await apiCall('admin_orders',{},'GET');
    if(Array.isArray(x.orders)){
      state.orders=x.orders.map(o=>({id:'SL-'+String(o.id_pedido).padStart(8,'0'),dbId:Number(o.id_pedido),date:o.fecha_pedido?new Date(o.fecha_pedido).toLocaleString('es-PE',{dateStyle:'short',timeStyle:'short'}):'—',payment:o.metodo_pago||'Pago',total:Number(o.total),status:o.estado||'Pendiente',seen:Number(o.visto||0)===1,customer:(o.cliente||'Cliente').trim(),email:o.correo_comprobante||'',items:(o.items||[]).map(i=>({id:Number(i.id),name:i.name,price:Number(i.price),qty:Number(i.qty),brand:i.brand||'OMNILIFE',img:i.img||''}))}));
      // Guardado local para que la boleta siga disponible aunque se recargue la interfaz.
      const persisted={...state,favorites:[],orders:state.orders};localStorage.setItem(KEY,JSON.stringify(persisted));
      if($('adminPanel')&&!$('adminPanel').classList.contains('hidden'))renderAdmin();
      return true;
    }
  }catch(e){console.warn('No se pudieron sincronizar pedidos de administración:',e.message);return false}
  return false;
}
async function syncServerUsers(){
  if(state.user?.role!=='admin') return false;
  try{
    const x=await apiCall('users',{},'GET');
    if(Array.isArray(x.users)){
      localStorage.setItem('omniSeytuUsers',JSON.stringify(x.users));
      if($('adminPanel') && !$('adminPanel').classList.contains('hidden')) renderAdmin();
      return true;
    }
  }catch(e){ console.warn('No se pudo sincronizar usuarios:',e.message); }
  return false;
}
const CATALOG_SYNC_KEY='omniSeytuCatalogSync';
let catalogChannel=null;
function broadcastCatalogSync(){
  const payload={version:Date.now(),source:'omnilife-admin'};
  try{localStorage.setItem(CATALOG_SYNC_KEY,JSON.stringify(payload));localStorage.removeItem(CATALOG_SYNC_KEY)}catch(e){}
  try{catalogChannel?.postMessage(payload)}catch(e){}
}
function setupCatalogRealtime(){
  window.addEventListener('storage',e=>{
    if(e.key===CATALOG_SYNC_KEY){
      syncServerProducts({broadcast:false});
      toast('✓ Catálogo actualizado desde Administración.');
    }
  });
  if('BroadcastChannel' in window){
    try{catalogChannel=new BroadcastChannel('omnilife-seytu-catalog');catalogChannel.onmessage=()=>{syncServerProducts({broadcast:false});}}catch(e){}
  }
}
async function enter(){await syncServerProfile();if(state.user?.role==='admin'){openAdmin();return}$('auth').classList.add('hidden');$('adminPanel').classList.add('hidden');$('app').classList.remove('hidden');userUI();renderAll();syncServerProducts();await syncServerUserState();await syncServerFavorites();await syncForum();renderAll();syncServerData()}
function resetGuestData(){
  state.user=null;
  state.favorites=[];
  state.cart=[];
  state.orders=[];
  state.feedback=[];
  state.recent=[];
  save();
}
function enterGuest(){
  resetGuestData();
  $('auth').classList.add('hidden');
  $('adminPanel').classList.add('hidden');
  $('app').classList.remove('hidden');
  userUI();
  renderAll();
  syncForum();
  setSection('inicio');
  toast('Estás navegando como invitado. Tus contadores comienzan en 0.');
}
function requireLogin(){if(state.user)return true;$('authRequiredModal').classList.remove('hidden');return false}
async function logout(){
  // Guarda el estado de esta cuenta antes de limpiar la sesión visual.
  if(state.user?.id_usuario && state.user?.role!=='admin'){
    persistUserLocalState();
    try{await syncServerUserStateSave();}catch{}
  }
  state.user=null;state.favorites=[];state.cart=[];state.orders=[];state.feedback=[];state.recent=[];
  save(false);$('app').classList.add('hidden');$('adminPanel').classList.add('hidden');$('auth').classList.remove('hidden');showAuthHome();
}

let sharedSyncBusy=false;
async function syncSharedData(){
  if(sharedSyncBusy || document.hidden) return;
  sharedSyncBusy=true;
  try{
    await syncServerProducts({broadcast:false});
    if(state.user?.role==='admin') await syncServerUsers();
  }finally{
    sharedSyncBusy=false;
  }
}
// Sincronización entre dispositivos mediante MySQL/PHP.
// BroadcastChannel/storage solo complementan la actualización instantánea en la misma red/pestaña.
setInterval(syncSharedData,2000);
// Mantiene compras y preferencias del usuario sincronizadas entre dispositivos.
setInterval(()=>{if(state.user?.id_usuario && state.user?.role!=='admin' && document.visibilityState!=='hidden'){syncServerData();syncServerUserState();}if(!$('app')?.classList.contains('hidden') && document.visibilityState!=='hidden')syncForum();},5000);
window.addEventListener('focus',()=>{syncSharedData();syncForum();if(state.user?.id_usuario&&state.user?.role!=='admin'){syncServerData();syncServerUserState();}});
window.addEventListener('online',()=>syncSharedData());
// Respaldo de interfaz: garantiza que los botones principales abran sus modales aunque falle otro listener.
window.addEventListener('error',()=>{});
function init(){setupCatalogRealtime();$('cartModal')?.classList.add('hidden');setTimeout(()=>{$('splash').classList.add('hidden');$('cartModal')?.classList.add('hidden');if(!state.user){resetGuestData();$('auth').classList.remove('hidden');showAuthHome()}},900);bind();userUI();if(state.user)enter();else{resetGuestData();$('auth').classList.remove('hidden');showAuthHome()}$('cartModal')?.classList.add('hidden');renderAll()}
// ===== PUENTE GLOBAL PARA BOTONES DEL ADMINISTRADOR =====
// Estas funciones viven dentro del cierre del script; se exponen explícitamente
// para que los botones HTML puedan ejecutarlas incluso si otro listener falla.
window.adminAddProduct = adminAddProduct;
window.adminCreateProductSave = adminCreateProductSave;
window.adminAddUser = adminAddUser;
window.adminCreateUserSave = adminCreateUserSave;
window.openAdminProductEditor = openAdminProductEditor;
window.adminSaveProduct = adminSaveProduct;
window.adminSaveProductFull = adminSaveProductFull;
window.adminUpdateUserRole = adminUpdateUserRole;
window.adminDeleteUser = adminDeleteUser;

// Listener de respaldo: los botones críticos funcionan aunque el listener general
// del administrador haya quedado interrumpido por otro componente.
document.addEventListener('click', function adminCriticalButtons(e){
  const btn=e.target.closest?.('#adminAddProductDashboard,#adminQuickAddProduct,#adminQuickUserTop,#adminCreateSave,#adminUserCreateSave');
  if(!btn) return;
  if(btn.id==='adminAddProductDashboard'||btn.id==='adminQuickAddProduct'){ e.preventDefault(); adminAddProduct(); return; }
  if(btn.id==='adminQuickUserTop'){ e.preventDefault(); adminAddUser(); return; }
  if(btn.id==='adminCreateSave'){ e.preventDefault(); adminCreateProductSave(); return; }
  if(btn.id==='adminUserCreateSave'){ e.preventDefault(); adminCreateUserSave(); return; }
}, true);

init();
startServerCatalogSync();
})();

/* Cierre global robusto: X, botones con data-close y fondo de cualquier modal. */
(function(){
  function hideModal(id){
    var m=document.getElementById(id); if(!m)return false;
    m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); m.style.removeProperty('display');
    document.body.classList.remove('modal-open');
    return true;
  }
  document.addEventListener('click',function(ev){
    var btn=ev.target.closest?.('[data-close]');
    if(btn){
      ev.preventDefault(); ev.stopPropagation();
      hideModal(btn.getAttribute('data-close'));
      return;
    }
    var modal=ev.target.closest?.('.modal');
    if(modal && ev.target===modal) hideModal(modal.id);
  },true);
  document.addEventListener('keydown',function(ev){
    if(ev.key!=='Escape')return;
    document.querySelectorAll('.modal:not(.hidden)').forEach(function(m){hideModal(m.id);});
  },true);
})();

/* Acceso final: cierre directo del modal de recuperación y botones X con type=button. */
(function(){
  function closeModalById(id){
    var m=document.getElementById(id);
    if(!m)return;
    m.classList.add('hidden');
    m.setAttribute('aria-hidden','true');
    m.style.removeProperty('display');
    document.body.classList.remove('modal-open');
  }
  function bindAuthModalClose(){
    var modal=document.getElementById('forgotPasswordModal');
    if(!modal)return;
    var close=modal.querySelector('.close[data-close="forgotPasswordModal"]');
    if(close){
      close.type='button';
      close.onclick=function(ev){
        ev.preventDefault();ev.stopPropagation();
        closeModalById('forgotPasswordModal');
        var f=document.getElementById('forgotForm');
        var r=document.getElementById('resetForm');
        if(f)f.reset(); if(r)r.reset();
        var rb=document.getElementById('resetBox'); if(rb)rb.classList.add('hidden');
      };
    }
    modal.addEventListener('click',function(ev){
      if(ev.target===modal)closeModalById('forgotPasswordModal');
    });
  }
  function bindAllCloseButtons(){
    document.querySelectorAll('.modal .close').forEach(function(btn){
      btn.type='button';
      if(btn.dataset.close){
        btn.addEventListener('click',function(ev){
          ev.preventDefault();ev.stopPropagation();
          closeModalById(btn.dataset.close);
        },{capture:true});
      }
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){bindAuthModalClose();bindAllCloseButtons();});
  else {bindAuthModalClose();bindAllCloseButtons();}
  document.addEventListener('keydown',function(ev){
    if(ev.key==='Escape'){
      var m=document.getElementById('forgotPasswordModal');
      if(m && !m.classList.contains('hidden'))closeModalById('forgotPasswordModal');
    }
  });
})();

/* Acceso final: cierre directo del modal de recuperación y botones X con type=button. */
(function(){
  function closeModalById(id){
    var m=document.getElementById(id); if(!m)return;
    m.classList.add('hidden'); m.setAttribute('aria-hidden','true');
    m.style.removeProperty('display'); document.body.classList.remove('modal-open');
  }
  function bindAuthModalClose(){
    var modal=document.getElementById('forgotPasswordModal'); if(!modal)return;
    var close=modal.querySelector('.close[data-close="forgotPasswordModal"]');
    if(close){
      close.type='button';
      close.onclick=function(ev){
        ev.preventDefault();ev.stopPropagation();closeModalById('forgotPasswordModal');
        var f=document.getElementById('forgotForm'),r=document.getElementById('resetForm'),rb=document.getElementById('resetBox');
        if(f)f.reset();if(r)r.reset();if(rb)rb.classList.add('hidden');
      };
    }
    modal.addEventListener('click',function(ev){if(ev.target===modal)closeModalById('forgotPasswordModal');});
  }
  function bindAllCloseButtons(){
    document.querySelectorAll('.modal .close').forEach(function(btn){
      btn.type='button';
      if(btn.dataset.close)btn.addEventListener('click',function(ev){ev.preventDefault();ev.stopPropagation();closeModalById(btn.dataset.close);},{capture:true});
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){bindAuthModalClose();bindAllCloseButtons();});else{bindAuthModalClose();bindAllCloseButtons();}
  document.addEventListener('keydown',function(ev){if(ev.key==='Escape'){var m=document.getElementById('forgotPasswordModal');if(m&&!m.classList.contains('hidden'))closeModalById('forgotPasswordModal');}});
})();
