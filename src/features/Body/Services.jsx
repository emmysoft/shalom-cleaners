import React from "react";

import MovingTruck from "../../assets/MovingTruck.png";
import vaccuumcleaner from "../../assets/vaccuumcleaner.png";
import pressurewasher from "../../assets/pressurewasher.png";
import carclean from "../../assets/carclean.png";
import book from "../../assets/book.png";
import Tiles from "../../assets/Tiles.png";
import TileStar from "../../assets/TileStar.png";
import sofa from "../../assets/sofa.png";
import TidyBrush from "../../assets/TidyBrush.png";
import {
  ImageGrid1,
  ImageGrid2,
  ImageGrid3,
  ImagePara,
  imagestyle,
  imgStyle,
  serviceImage,
  servicebody,
  servicehead,
} from "./ServiceStyle";

function Services() {
  return (
    <>
      <div style={servicebody}>
        <h3 style={servicehead}>Our Services</h3>
        <div style={serviceImage}>
          <div style={ImageGrid1}>
            <div style={imagestyle}>
              <img
                src={MovingTruck}
                alt=""
                style={Object.assign(
                  { width: "123px", height: "123px" },
                  imgStyle
                )}
              />
              <p
                style={Object.assign(
                  { width: "207px", height: "24px" },
                  ImagePara
                )}
              >
                Moving Cleaning
              </p>
            </div>
            <div style={imagestyle}>
              <img
                src={vaccuumcleaner}
                alt=""
                style={Object.assign(
                  { width: "129px", height: "129px" },
                  imgStyle
                )}
              />
              <p
                style={Object.assign(
                  { width: "183px", height: "48px" },
                  ImagePara
                )}
              >
                Clean-up after Event
              </p>
            </div>
            <div style={imagestyle}>
              <img
                src={pressurewasher}
                alt=""
                style={Object.assign(
                  { width: "123px", height: "123px" },
                  imgStyle
                )}
              />
              <p
                style={Object.assign(
                  { width: "220px", height: "24px" },
                  ImagePara
                )}
              >
                Pressure Washing
              </p>
            </div>
          </div>
          <div style={ImageGrid2}>
            <div style={imagestyle}>
              <img
                src={carclean}
                alt=""
                style={Object.assign(
                  { width: "123px", height: "123px" },
                  imgStyle
                )}
              />
              <p
                style={Object.assign(
                  { width: "207px", height: "24px" },
                  ImagePara
                )}
              >
                Vehicle Cleaning
              </p>
            </div>
            <div style={imagestyle}>
              <img
                src={book}
                alt=""
                style={Object.assign(
                  { width: "123px", height: "123px" },
                  imgStyle
                )}
              />
              <p
                style={Object.assign(
                  { width: "206px", height: "24px" },
                  ImagePara
                )}
              >
                Vehicle Detailing
              </p>
            </div>
            <div style={imagestyle}>
              <img
                src={Tiles}
                alt=""
                style={Object.assign(
                  { width: "123px", height: "123px" },
                  imgStyle
                )}
              />
              <p
                style={Object.assign(
                  { width: "154px", height: "48px" },
                  ImagePara
                )}
              >
                Tiles & Grout Cleaning
              </p>
            </div>
          </div>
          <div style={ImageGrid3}>
            <div style={imagestyle}>
              <img
                src={TileStar}
                alt=""
                style={Object.assign(
                  { width: "123px", height: "123px" },
                  imgStyle
                )}
              />
              <p
                style={Object.assign(
                  { width: "244px", height: "24px" },
                  ImagePara
                )}
              >
                Hardwood Cleaning
              </p>
            </div>
            <div style={imagestyle}>
              <img
                src={sofa}
                alt=""
                style={Object.assign(
                  { width: "123px", height: "123px" },
                  imgStyle
                )}
              />
              <p
                style={Object.assign(
                  { width: "249px", height: "24px" },
                  ImagePara
                )}
              >
                Upholstery Cleaning
              </p>
            </div>
            <div style={imagestyle}>
              <img
                src={TidyBrush}
                alt=""
                style={Object.assign(
                  { width: "123px", height: "123px" },
                  imgStyle
                )}
              />
              <p
                style={Object.assign(
                  { width: "239px", height: "24px" },
                  ImagePara
                )}
              >
                General Tidying-up
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
