import React, { useContext } from "react";
import { Link } from "react-router-dom";
import vtr from "../../img/victor-800x800.png";
import rbt from "../../img/ROBERTO-800x800.png";
import vd from "../../img/Gift-de-Vsl.mp4";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid text-center p-0">
      <h1 className="mb-4">Quienes somos?</h1>
      <p className="text-align-justify">
        Peel Creative Company, con sede en Barcelona, cuenta con años de
        experiencia en marketing y creación de contenido profesional para
        diversas plataformas digitales. En colaboración con Lightbox Studio,
        ubicado en el Arco de Triunfo de Barcelona, ofrecemos estudios
        personalizados para grabaciones de alta calidad. Nuestros servicios
        incluyen estrategia de marketing, asesoramiento de guiones, dirección y
        producción de video y fotografía, así como edición profesional y
        servicios especializados en meta ads para maximizar el impacto de tu
        contenido.
      </p>
      <div className="row justify-content-center my-4">
        <div className="col-12 col-md-6 mb-3 d-flex justify-content-center">
          <img
            className="profile-img img-fluid mx-5"
            style={{ borderRadius: "7px" }}
            src={vtr}
            alt="Victor"
          />
          <img
            className="profile-img img-fluid mx-5"
            style={{ borderRadius: "7px" }}
            src={rbt}
            alt="Roberto"
          />
        </div>
      </div>
      <div
        className="row align-items-center bg-warning mx-0 my-1"
        style={{ marginBottom: "10px", padding: "10px", width: "100vw" }}
      >
        <div className="col-12 col-md-6 text-left">
          <h1>
            Equipos Audiovisuales Completos
            <br />
            <br />
            <strong>
              Graba reels, VSLs, webinars, entrevistas, videos corporativos,
              ads, videos de YouTube y mucho más.
            </strong>
            <br />
          </h1>
          <br />
          <br />
          <p>
            Además de adaptar el set a sus preferencias, podrás grabar el
            contenido de audio y video necesario para impulsar el crecimiento de
            su negocio. Contamos con una amplia cartera de clientes satisfechos.
            Aquí presentamos algunos ejemplos:
          </p>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <video
            width="100%"
            height="auto"
            autoPlay
            muted
            playsInline
            loop
            controlsList="nodownload noplaybackrate"
          >
            <source src={vd} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="container d-flex justify-content-around my-4">
        <div className="d-grid align-items-start m-2" style={{ flexBasis: "30%" }}>
          <i className="fa-regular fa-image" style={{ fontSize: "2em" }}></i>
          <h2 style={{ whiteSpace: "nowrap" }}>Calidad de imagen</h2>
          <p>
            Dada la competencia en el mundo digital, es vital diferenciarse en
            el aspecto visual, por eso la calidad del vídeo que entregamos es
            excelente.
          </p>
        </div>
        <div className="d-grid align-items-start m-2" style={{ flexBasis: "30%" }}>
          <i className="fa-solid fa-volume-high" style={{ fontSize: "2em" }}></i>
          <h2 style={{ whiteSpace: "nowrap" }}>Calidad de sonido</h2>
          <p>
            El 50% del vídeo es el audio, si hay un mal audio,
            el cliente puede pasar el vídeo por lo molesto que puede ser,
            por eso contamos con micrófonos profesionales.
          </p>
        </div>
        <div className="d-grid align-items-start m-2" style={{ flexBasis: "30%" }}>
          <i className="fa-regular fa-circle" style={{ fontSize: "2em" }}></i>
          <h2 style={{ whiteSpace: "nowrap" }}>Composición</h2>
          <p>
            Juntamos 2 factores importantes como imagen y sonido, de esta forma
            creamos una pieza visual placentera en todos los aspectos, siendo
            así fácil de consumir para el cliente y así obtener la mayor
            retención posible.
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-around my-4">
        <div className="d-grid align-items-start m-2" style={{ flexBasis: "30%" }}>
          <i className="fa-regular fa-pen-to-square" style={{ fontSize: "2em" }}></i>
          <h2 style={{ whiteSpace: "nowrap" }}>Story telling</h2>
          <p>
            Esta parte es fundamental para ayudar a retener el 100% de retención.
            Crear una pequeña historia en los videos ayuda a que el cliente se quede a ver el vídeo entero
          </p>
        </div>
        <div className="d-grid align-items-start m-2" style={{ flexBasis: "30%" }}>
          <i className="fa-solid fa-money-bill" style={{ fontSize: "2em" }}></i>
          <h2 style={{ whiteSpace: "nowrap" }}>Venta en video</h2>
          <p>
          Gracias a todos los aspectos anteriores, el vídeo aumentará su retención, 
          al tener más personas viendo el vídeo más tiempo, hay más probabilidad de venta
          </p>
        </div>
        <div className="d-grid align-items-start m-2" style={{ flexBasis: "30%" }}>
          <i className="fa-solid fa-film" style={{ fontSize: "2em" }}></i>
          <h2 style={{ whiteSpace: "nowrap" }}>Composición armoniosa</h2>
          <p>
          Integrando imagen y sonido de manera fluida, creamos vídeos que son estéticamente 
          agradables y que transmiten el mensaje de manera efectiva, 
          aumentando la conectividad con tu audiencia.
          </p>
        </div>
      </div>
    </div>
  );
};
