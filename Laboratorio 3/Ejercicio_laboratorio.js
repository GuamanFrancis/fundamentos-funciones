

// let y const

//let TotalProductos = Productos.length;
const NombreTienda = "Temu";

// Variables

//tipos simples 

// Entero
let cantidadProductos = 50; 

// Float
let porcentajeDescuento = 20.5; 

// String
let mensajeBienvenida = "Bienvenido a Temu"; 

// Char
let primeraLetra = 'T'; 

// Boolean
let usuarioConectado = false; 

// Undefined
let perfilUsuario = undefined; 

//variables compuestas
let  = ['luz nocturna con forma de capibara ',12.07,false] //este arreglo tiene algunas caracteristicas de un producto

let  luz_nocturna_con_forma_de_capibara = {                    //objetos

    name: "luz nocturna con forma de capibara", 
    precio:  12.07,
    descripcion:"Lampara en forma de capibara para todo tipo de entorno de trabajo",
    Descuento: false,
    reseña: undefined
} 

console.log(luz_nocturna_con_forma_de_capibara.name);


//strings - cadena de caracteres 
let Mensaje = "   Ofertas Relampago  "


console.log(Mensaje.length);

console.log(Mensaje.trim()); 

console.log(Mensaje.includes('5'));

console.log(Mensaje.toUpperCase());

console.log(Mensaje.toLocaleLowerCase());

console.log(`El mensaje  es; ${Mensaje}`);

let Precio_producto1= 30.0
let Precio_producto2= 25.0
let NombreProducto= "Reloj inteligente con llamada inalambrica"

console.log("El nombre del producto y el precio es:"+NombreProducto+Precio_producto1);


let Precio_Reloj = 50.0

let Descuento = 10.0

let Precio_Final = Precio_Reloj <= Descuento? " Comprar " : "No comprar"

console.log(Precio_Final);

let email = "fracisguaman50@gmail.com"
!email ? console.log("Ingrese un correo valido") : console.log("Registrarse");


let DescuentoCodigo = "DHT3I6" 
DescuentoCodigo === "DHT3I6" ? console.log("Descuento valido") : console.log("Codigo de descuento erroneo");


const ProductosVariados = ['Reloj inteligente','Buso color blanco','Teclado Gamer', "Lentes para sol"]
ProductosVariados.forEach((ProductosVariados)=>{console.log(ProductosVariados)})

const newProductosVariados = ProductosVariados.map((ProductosVariados)=>ProductosVariados.toUpperCase())

console.log(ProductosVariados);
console.log(newProductosVariados);


//FUNCION DECLARADA 
function MostrarCodigoDescuento() {
    console.log('TEMU2024');
    
    
}

MostrarCodigoDescuento()

//FUNCION EXPRESADA 
const MostrarCodigo= function(){
    console.log("TEMU2024");
    
}

MostrarCodigo()



//ARGUMENTOS

const validarCodigoDescuento = function (emailID, Codigo1) {

    console.log(`El codigo es $(Codigo1) y su email es $(emailID)`);
    
    
}

validarCodigoDescuento('juan@gmail.com','Temu2024')

//ARGUMENTOS OPCIONALES

const validarCodigoDescuentoo = function (mail, codigoo= 555) {

    console.log(`El token es $(codigoo) y su email es $(mail)`);
    
    
}

validarCodigoDescuentoo('juan@gmail.com')

//RETORNO

function TiposRetorno() {
    
    return {
        
        name:"Lampara de 3 intensidades",price: 5.00
    }
}

TiposRetorno()


//ARROW FUNCTION

const InicioSesion=()=>{
    console.log("Inicio exitoso");
    
}
InicioSesion()



//FUNCION FLECHA es lo mismo que una funcion expresada pero de una manera mas rapida

const registroUsuario = (email) => {
    console.log("REgistro exitoso"+email);


}

registroUsuario("francisguaman@gmail.com")

const productoTemu = {
    id: 1234,
    nombre: "Auriculares Bluetooth",
    categoria: "Electrónica",
    precio: 29.99,
    disponible: true,
    descripcion: "Auriculares inalámbricos con cancelación de ruido y 20 horas de batería."
    
};


console.log(productoTemu.nombre )
console.log(productoTemu.categoria )



//propiedades

productoTemu.color = 'negro'
console.log(productoTemu);
delete productoTemu.id

Object.values(productoTemu).includes("") ? console.log("Error") : console.log("OK");


const producto = {
    nombre: "Zapatos deportivos",
    precio: 45.99,
    categoria: "Calzado",
    disponible: true
};

const caracteristicas = {
    talla: 42,
    color: "Negro",
    material: "Cuero sintético"
};

const productoSolicitado = { ...producto, ...caracteristicas };
console.log(productoSolicitado);




const nameTelefono = "Smartphone XYZ";
const priceTelefono = 299;

const telefono = {
    nameTelefono,
    priceTelefono
};

console.log(telefono);





















