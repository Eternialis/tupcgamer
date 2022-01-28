
const Signin = () => {
    return (
        <>
            <div class="menuBtn defaultColor" id="btnProducto">
                <p>Agregar un nuevo producto</p>
            </div>
            <div id="formProducto">
                <form>
                    <div>
                        <label for="nombreProd">Nombre del producto:</label>
                        <input type="text" id="nombreProd" name="nombreProd" class="formInput" autofocus />
                    </div>
                    <p id="errorMsjTitulo" class="errorMsj">El nombre del producto solo admite letras, números, guiones, comas y puntos y debe contener entre 7 y 25 caracteres.</p>
                    <div class="numeros">
                        <label for="precio">Precio: U$D</label>
                        <input type="text" id="precio" name="precio" min="1" class="formInput" />
                    </div>
                    <p id="errorMsjPrecio" class="errorMsj">El precio solo debe incluir números, comas o puntos.</p>
                    <div class="numeros">
                        <label for="stock">Stock: </label>
                        <input type="text" id="stock" name="stock" min="1" class="formInput" />
                    </div>
                    <p id="errorMsjStock" class="errorMsj">El stock solo debe incluir números enteros.</p>
                    <div>
                        <label for="categoria">Categoria:</label>
                        <select id="categoria" name="categoria" class="formInput">
                            <option value=""></option>
                            <option value="Monitor">Monitor</option>
                            <option value="Gabinete">Gabinete</option>
                            <option value="Fuente">Fuente</option>
                            <option value="Microprocesador">Microprocesador</option>
                            <option value="Placa de video">Placa de video</option>
                            <option value="Teclado">Teclado</option>
                            <option value="Mouse">Mouse</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Signin;
