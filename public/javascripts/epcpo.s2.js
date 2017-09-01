/** @jsx epcpo.s2 **/
class Section2 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <form action="" method="">

        <div className="row">
          <div className="form-group col">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control form-control-sm" id="email" />
          </div>
          <div className="form-group col">
            <label htmlFor="pwd">Password</label>
            <input type="password" className="form-control form-control-sm" id="pwd" />
          </div>
        </div>

        <div className="row">
          <div className="form-group col">
            <label htmlFor="cedula">Cédula</label>
            <input type="text" className="form-control form-control-sm" id="cedula" />
          </div>
          <div className="form-group col">
            <p>Empresa</p>
            <div className="form-check form-check-inline col-md-4">
              <label className="form-check-label">
                <input className="form-check-input mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" /> SAS
              </label>
            </div>
            <div className="form-check form-check-inline col-md-4">
              <label className="form-check-label">
                <input className="form-check-input mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" /> CTA
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group col">
            <label htmlFor="area">Área o unidad de negocio</label>
            <select className="form-control form-control-sm custom-select d-block mt-1" id="area" required>
              <option value={false}>Seleccionar área</option>
              <option value={1}>ASEO Y DESINFECCIÓN</option>
              <option value={2}>ASEO IMAGEN</option>
              <option value={3}>ASEO INSTITUCIONAL</option>
              <option value={4}>ADMINISTRACION BAÑOS</option>
              <option value={5}>SERVICIOS GENERALES</option>
              <option value={6}>MIRS</option>
              <option value={7}>REGIONAL CENTRO</option>
              <option value={8}>REGIONAL NORTE</option>
              <option value={9}>REGIONAL SUROCCIDENTE</option>
            </select>
          </div>
          <div className="form-group col">
            <label htmlFor="antiguedad">Antigüedad del contrato</label>
            <select className="form-control form-control-sm custom-select d-block mt-1" id="antiguedad" required>
              <option value={false}>Seleccionar antigüedad</option>
              <option value={1}>DE UNO A TRES MESES</option>
              <option value={2}>DE 4 MESES A 6 MESES</option>
              <option value={3}>DE 7 MESES A 12 MESES</option>
              <option value={4}>DE 13 MESES A 18 MESES</option>
              <option value={5}>MÁS DE 18 MESES</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="form-group col">
            <label htmlFor="evaluador">Nombre del evaluador</label>
            <input type="text" className="form-control form-control-sm" id="evaluador" />
          </div>
          <div className="form-group col">
            <label htmlFor="cargo">Cargo del evaluador (Jefe inmediato)</label>
            <select className="form-control form-control-sm custom-select d-block mt-1" id="cargo" required>
              <option value={false}>Seleccionar cargo</option>
              <option value={1}>GERENTE</option>
              <option value={2}>DIRECTOR</option>
              <option value={3}>JEFE</option>
              <option value={4}>ASISTENTE</option>
              <option value={5}>{`COORDINADOR / ADMINISTRADOR`}</option>
              <option value={6}>SUPERVISOR</option>
              <option value={7}>SECRETARIA</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <button className="btn btn-primary col-md-2 ml-3">Atrás</button>
          <p className="col-md-2 rounded-top rounded-bottom bg-primary text-light text-center py-1 ml-auto my-auto">Sección 2 de 14</p>
          <button className="btn btn-primary col-md-2 mr-3 ml-auto">Siguiente</button>
        </div>
      </form>
    )
  }
}

ReactDOM.render(
  <Section2 />,
  document.getElementById('encuesta')
);
