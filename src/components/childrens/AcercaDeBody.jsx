import React from 'react';

class AcercaDeBody extends React.Component {
  render() {
    return (
      <section className='AcercaDeBody'>
        <div className='AcercaDeBody__header'>
          <h1>Acerca De</h1>
          <h2>Alta Previa</h2>
        </div>
        <div className='AcercaDeBody__body'>
          <div>
            <h3>Pregunta probable:</h3>
            <h4>¿Por que usas lenguaje inclusivo?</h4>
            <div>
              <p>Bueno, porque el lenguaje influye en todo lo que hacemos. Tiene un valor más fuerte del que generalmente pensamos. Toda palabra tiene un porque y un significado que se le da directa o indirectamente. Yo desconozco a la persona que este leyendo esto o que este jugando a estos juegos, por eso no quiero presuponer y así habilitar a cualquiera a poder jugar :D</p>
              <p>Como todavía no hay presupuesto para dejar tu comentario podes hacerlo en Instagram (Ahre solo quería seguidores)</p>
            </div>
          </div>
          <div>
            <button type='button'>Facebook</button>
            <button type='button'>Instagram</button>
            <button type='button'>Tik Tok</button>
          </div>
          <div>
            <p>Si queres ser un todo hacker de la coctelería descargate:</p>
            <button type='button'>Bar-Mat</button>
          </div>
          <div className='AcercaDeBody__footer'>
            <p>
                Ariel Santiago Villarreal Gutierrez
              <br />
                Copyright © 2019 Todos los Derechos Reservados
              <br />
            </p>
            <div>
              <img src='' alt='Logo' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AcercaDeBody;
