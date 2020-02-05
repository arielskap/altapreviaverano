import React, { useEffect } from 'react';
import H1 from '../components/H1';
import ImgPerfil from '../components/ImgPerfil';
import '../assets/styles/components/Perfil.scss';
import avocado from '../assets/static/avocado.svg';
import palmera from '../assets/static/palmera.png';

import anonymous from '../assets/static/anonymous.svg';
import archer from '../assets/static/archer.svg';
import avatars from '../assets/static/avatars.svg';
import einstein from '../assets/static/einstein.svg';
import folklore from '../assets/static/folklore.svg';
import head from '../assets/static/head.svg';
import job from '../assets/static/job.svg';
import legend from '../assets/static/legend.svg';
import monk from '../assets/static/monk.svg';
import muslim from '../assets/static/muslim.svg';
import ninja from '../assets/static/ninja.svg';
import nun from '../assets/static/nun.svg';
import spooky from '../assets/static/spooky.svg';
import supervillian from '../assets/static/supervillian.svg';
import transportation from '../assets/static/transportation.svg';
import unicorn from '../assets/static/unicorn.svg';
import woman from '../assets/static/woman.svg';
import skeleton from '../assets/static/skeleton.svg';

const Perfil = () => {
  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = 'coral';
    document.querySelector('.App').style.backgroundImage = `url(${avocado})`;
    return () => {
      document.querySelector('.App').style.backgroundImage = `url(${palmera})`;
    };
  });
  /*Lo que quieres hacer es posible gracias a que puedes guardar la imagen como Base64, te mostrare como, ojo esta respuesta no es originalmente mía pero funciona, esta posteada en StackOverflow en ingles véase el enlace

En primer lugar, tomo mi imagen getElementByIDy guardo la imagen como Base64. Luego guardo la cadena Base64 como mi valor localStorage.

bannerImage = document.getElementById('bannerImg');
imgData = getBase64Image(bannerImage);
localStorage.setItem("imgData", imgData);
Aquí está la función que convierte la imagen en Base64:

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
Luego, en mi próxima página, creé una imagen con un src en blanco:

<img src="" id="tableBanner" />
Y directamente cuando se carga la página, utilizo estas tres líneas siguientes para obtener la cadena base64 de localstorage y aplicarla a la imagen con el src en blanco que creé:

var dataImage = localStorage.getItem('imgData');
bannerImg = document.getElementById('tableBanner');
bannerImg.src = "data:image/png;base64," + dataImage;
Edito para agregar como verificar si la variable no existe;

if (localStorage.getItem("mi_variable") === null) {
  //Aqui se ejecuta todo si no existe
}
Esto no funciona con gif ya que los gif no son compatibles con canvas

*/
  return (
    <div className=' container mx-auto px-4'>
      <div className='pt-4'>
        <H1 className='perfil'>Perfil</H1>
      </div>
      <div>
        <ImgPerfil src='' alt='' />
      </div>
      <div className='mt-4'>
        <div>
          <h2 className='text-center text-xl'>¿Que podes hacer en tu perfil?</h2>
          <p>
          Basicamente nada... Na mentira...
            <br />
          Podes agregar tu instagram, el mismo aparecera si agregas un juego y es elegido por los desarrolladores.
            <br />
          Y además podes... Cambiar tu avatar!!!
          </p>
        </div>
        <div className='my-6'>
          <h3 className='text-center text-lg'>¡Cambiar Avatar!</h3>
          <div className='flex flex-wrap'>
            <ImgPerfil src={anonymous} alt='anonymous' />
            <ImgPerfil src={archer} alt='archer' />
            <ImgPerfil src={avatars} alt='avatars' />
            <ImgPerfil src={einstein} alt='einstein' />
            <ImgPerfil src={folklore} alt='folklore' />
            <ImgPerfil src={head} alt='head' />
            <ImgPerfil src={job} alt='job' />
            <ImgPerfil src={legend} alt='legend' />
            <ImgPerfil src={monk} alt='monk' />
            <ImgPerfil src={muslim} alt='muslim' />
            <ImgPerfil src={ninja} alt='ninja' />
            <ImgPerfil src={nun} alt='nun' />
            <ImgPerfil src={spooky} alt='spooky' />
            <ImgPerfil src={supervillian} alt='supervillian' />
            <ImgPerfil src={transportation} alt='transportation' />
            <ImgPerfil src={unicorn} alt='unicorn' />
            <ImgPerfil src={woman} alt='woman' />
            <ImgPerfil src={skeleton} alt='skeleton' />
          </div>
          <div className='text-right'>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mb-3'>¡Confirmar!</button>
          </div>
        </div>
        <div className='mx-4'>
          <form onSubmit={() => {}}>
            <label htmlFor='nombre'>
              *Podes poner lo que quieras, no te queremos robar informacion o si...
              <input id='nombre' type='text' placeholder='tuGatita123' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal' />
            </label>
            <label htmlFor='instagram'>
              *Si un juego que recomiendas es elegido para formar parte de la app, se agregara tu instagram, es lo minimo que podemos hacer por trabajar gratis (?
              <input id='instagram' type='text' placeholder='ecstasy.ring' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal' />
            </label>
            <div className='text-right'>
              <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4'>¡Agregarme!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
