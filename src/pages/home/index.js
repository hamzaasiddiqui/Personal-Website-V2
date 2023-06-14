import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import Marquee from "react-fast-marquee";
import { Avatar } from "@readyplayerme/visage";

const modelSrc = "https://models.readyplayer.me/6487546d3133f8119d3cdfb0.glb";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-100 ">
            <Avatar
              dirLightColor="#da0037"
              dirLightIntensity={30}
              cameraTarget={1.63}
              cameraInitialDistance={0.6}
              modelSrc={modelSrc}
            />
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-0">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-5">{introdata.description}</p>
              </div>
            </div>
          </div>
        </div>
        <Marquee
          className="marquee-text p-0 m-0"
          autoFill={true}
          pauseOnHover={true}
          speed={150}
        >
          Hamza Siddiqui-Hamza Siddiqui-Hamza Siddiqui-Hamza Siddiqui-Hamza
          Siddiqui-Hamza Siddiqui-Hamza Siddiqui-Hamza Siddiqui-Hamza
          Siddiqui-Hamza Siddiqui-Hamza Siddiqui-Hamza Siddiqui-
        </Marquee>
      </section>
    </HelmetProvider>
  );
};
