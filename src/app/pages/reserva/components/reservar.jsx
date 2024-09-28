import style from "../styles/reservar.css";


export default function reserva(){
    return (
        <div className="divReserva">
            <div className="container">
                <div className="title">
                <h1>datos Personales</h1>
                </div>
                <form className="formularioDP">
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <span className="required">*</span>
                    <input type="text" id="nombre" name="nombre" required />
                    </div>

                    <div>
                        <label htmlFor="apellido">Apellido</label>
                        <span className="required">*</span>
                    <input type="text" id="apellido" name="apellido" required />
                    </div>
                    
                    <div>
                        <label htmlFor="telefono">Teléfono</label>
                        <span className="required">*</span>
                    <input type="tel" id="telefono" name="telefono" required />
                    </div>
                    
                    <div>
                        <label htmlFor="correo">Correo Electrónico</label>
                        <span className="required">*</span>
                    <input type="email" id="correo" name="correo" required />
                    </div>
                    
                    <div>
                    <label htmlFor="tipoDocumento">Tipo de Documento</label>
                    <span className="required">*</span>
                    <select id="tipoDocumento" name="tipoDocumento" required>
                        <option value="">Seleccione...</option>
                        <option value="cedula">Cédula</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="tarjetaIdentidad">Tarjeta de Identidad</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="numeroDocumento">Número de Documento</label>
                    <span className="required">*</span>
                    <input type="text" id="numeroDocumento" name="numeroDocumento" required />
                    </div>
                    
                    <div>
                    <label htmlFor="fechaLlegada">Fecha de Llegada</label>
                    <span className="required">*</span>
                    <input type="date" id="fechaLlegada" name="fechaLlegada" required />
                    </div>
                    
                    <div>
                    <label htmlFor="fechaSalida">Fecha de Salida</label>
                    <span className="required">*</span>
                    <input type="date" id="fechaSalida" name="fechaSalida" required />
                    </div>
                    
                    <div className="buttonContainer">
                    <button type="submit"> Agregar huesped</button>
                    </div>
                </form>
            </div>
            <form className="formularioMD">
            <div className="containerMDP">
                <div className="title">
                <h1>Metodos de pago</h1>
                </div>
                
                <div>
                    <input type="radio" name="metodoPago" value="tarjeta" required />
                    <label>Tarjeta de Crédito</label>
                </div>

                <div>
                    <label><input type="radio" name="metodoPago" value="efectivo" />
                    Efectivo
                    </label>
                </div>
                <div>
                    <h2>Subtotal:</h2>
                    <h2>Descuento:</h2>
                    <h2>Total:</h2>
                </div>
                <hr />
                <div>
                    <h2>Pago:</h2>
                    <h2>Cambio:</h2>
                </div>
                <div className="buttonConfirmar">
                    <button>Confirmar</button>
                </div>
                <div>
                    <button className="buttonCancelar">Cancelar</button>
                </div>
            </div>
            </form>
        </div>
    )
}