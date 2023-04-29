import React from "react";
import { BsClockHistory, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import Form from "../../components/Form/Form";
import {
  bizname,
  cont,
  contact,
  contactBody,
  contactCont,
  contactHead,
  contactInfo1,
  contactInfo2,
  contactPara,
  contactinfo,
  contactinfohead,
  detailbox,
  para,
  paraName,
} from "./ContactStyle";

function Contact() {
  return (
    <>
      <div style={contactBody}>
        <h3 style={contactHead}>Contact Us</h3>
        <div style={contactCont}>
          <div style={contactinfo}>
            <h3 style={contactinfohead}>
              Feel free to contact with us for any kind of query.
            </h3>
            <p style={contactPara}>
              Thank you for your interest in hiring Shalom Cleaning Service
              Company. We consider communication with the customer.
            </p>
          </div>

          <div style={cont}>
            <div style={contact}>
              <div style={contactInfo1}>
                <div style={detailbox}>
                  <div style={bizname}>
                    <SlLocationPin
                      style={{
                        color: "#000080",
                        width: "30px",
                        height: "37px",
                      }}
                    />
                    <p
                      style={Object.assign(
                        //   { width: "168px", height: "36px" },
                        paraName
                      )}
                    >
                      Office Address
                    </p>
                  </div>
                  <p
                    style={Object.assign(
                      { width: "250px", height: "37px" },
                      para
                    )}
                  >
                    1219 Rudolph street , calumet city , 60409 , Illinois USA
                  </p>
                </div>
                <div style={detailbox}>
                  <div style={bizname}>
                    <AiOutlineMail
                      style={{
                        color: "#000080",
                        width: "30px",
                        height: "37px",
                      }}
                    />
                    <p style={Object.assign({ width: "156px" }, paraName)}>
                      Mail:
                    </p>
                  </div>
                  <p
                    style={Object.assign(
                      // { width: "189px", height: "48px" },
                      para
                    )}
                  >
                    shalomandsonsotc2021 @gmail.com
                  </p>
                </div>
              </div>
              <div style={contactInfo2}>
                <div style={detailbox}>
                  <div style={bizname}>
                    <BsTelephone
                      style={{
                        color: "#000080",
                        width: "30px",
                        height: "37px",
                      }}
                    />
                    <p
                      style={Object.assign(
                        //   { width: "125px", height: "36px" },
                        paraName
                      )}
                    >
                      Phone No:
                    </p>
                  </div>
                  <p
                    style={Object.assign(
                      { width: "117px", height: "24px" },
                      para
                    )}
                  >
                    [872] 731-3875
                  </p>
                </div>
                <div style={detailbox}>
                  <div style={bizname}>
                    <BsClockHistory
                      style={{
                        color: "#000080",
                        width: "30px",
                        height: "37px",
                      }}
                    />
                    <p
                      style={Object.assign(
                        //   { width: "175px", height: "36px" },
                        paraName
                      )}
                    >
                      Opening Time:
                    </p>
                  </div>
                  <p
                    style={Object.assign(
                      { width: "172px", height: "48px" },
                      para
                    )}
                  >
                    08.00 am - 05.00 pm (Monday-Friday)
                  </p>
                </div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
