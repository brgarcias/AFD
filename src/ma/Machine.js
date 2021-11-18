import React, { useState } from "react";
import AFN from "./AFN";

export function Machine(props) {
  let [afd, setAfd] = useState(new AFN());
  let [valor, setValor] = useState(0);
  let [a, setA] = useState(false);
  let [b, setB] = useState(false);
  let [c, setC] = useState(false);
  let [doce, setDoce] = useState("");
  let [p, setP] = useState("");
  let [est, setEst] = useState(0);
  let [troco, setTroco] = useState();

  const styleOn = {
    background: "#ede6e6",
    color: "#575454",
    border: 0,
    borderRadius: "5px",
    fontSize: "20px",
    cursor: "pointer",
  };
  const styleOff = {
    background: "#575454",
    color: "#ede6e6",
    border: 0,
    borderRadius: "5px",
    fontSize: "20px",
    cursor: "pointer",
  };

  const restart = (newValue) => {
    let newAfd = new AFN();
    setDoce("");
    setP("");
    setEst(0);
    setTroco("");
    setA(false);
    setB(false);
    setC(false);
    newAfd.consumir(newValue);
    setValor(newAfd.getTroco());
    setAfd(newAfd);
  };

  const handleC5 = () => {
    if (afd.consumir("5") < 0) {
      restart("5");
      return;
    }
    if (afd.getTroco() > 5) {
      setA(true);
      if (afd.getTroco() > 6) {
        setB(true);
        if (afd.getTroco() > 7) setC(true);
      }
    }
    setValor(afd.getTroco());
    setP(afd.getPalavra());
    setEst(afd.getEstado());
  };

  const handleC2 = () => {
    if (afd.consumir("2") < 0) {
      restart("2");
      return;
    }
    if (afd.getTroco() > 5) {
      setA(true);
      if (afd.getTroco() > 6) {
        setB(true);
        if (afd.getTroco() > 7) setC(true);
      }
    }
    setValor(afd.getTroco());
    setP(afd.getPalavra());
    setEst(afd.getEstado());
  };

  const handleC1 = () => {
    if (afd.consumir("1") < 0) {
      restart("1");
      return;
    }
    if (afd.getTroco() > 5) {
      setA(true);
      if (afd.getTroco() > 6) {
        setB(true);
        if (afd.getTroco() > 7) setC(true);
      }
    }
    setValor(afd.getTroco());
    setP(afd.getPalavra());
    setEst(afd.getEstado());
  };

  const handleCA = () => {
    afd.consumir("a");

    setDoce(
      <div
        onClick={() => {
          setDoce("");
        }}
        style={{
          width: "50px",
          height: "50px",
          background: "#bb4343",
          position: "absolute",
          bottom: "12%",
          borderRadius: "50px",
          right: "30%",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          A
        </p>
      </div>
    );

    setTroco(
      <div>
        <p style={{ floating: "left", height: "10px" }}>Troco</p>
        <div
          onClick={() => {
            setTroco("");
          }}
          style={{
            background: "#47a958",
            width: "50px",
            height: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "50px",
            bottom: "12%",
            right: "30%",
          }}
        >
          <p style={{ textAlign: "center" }}>R${afd.getTroco() - 6}</p>
        </div>
      </div>
    );

    setValor(0);
    setP(afd.getPalavra());
    setEst(afd.getEstado());
    setA(false);
    setB(false);
    setC(false);
    if (afd.getEstado < 0) {
      restart();
      return;
    }
  };

  const handleCB = () => {
    afd.consumir("b");
    setDoce(
      <div
        onClick={() => {
          setDoce("");
        }}
        style={{
          width: "50px",
          height: "50px",
          background: "#4765A9",
          position: "absolute",
          borderRadius: "50px",
          bottom: "12%",
          right: "30%",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          B
        </p>
      </div>
    );

    setTroco(
      <div>
        <p style={{ floating: "left", height: "10px" }}>Troco</p>
        <div
          onClick={() => {
            setTroco("");
          }}
          style={{
            background: "#47a958",
            width: "50px",
            height: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "50px",
            bottom: "12%",
            right: "30%",
          }}
        >
          <p style={{ textAlign: "center" }}>R${afd.getTroco() - 7}</p>
        </div>
      </div>
    );

    setValor(0);
    setP(afd.getPalavra());
    setEst(afd.getEstado());
    setA(false);
    setB(false);
    setC(false);
    if (afd.getEstado < 0) {
      restart();
      return;
    }
  };

  const handleCC = () => {
    afd.consumir("c");

    setDoce(
      <div
        onClick={() => {
          setDoce("");
        }}
        style={{
          width: "50px",
          height: "50px",
          background: "#47A958",
          position: "absolute",
          borderRadius: "50px",
          bottom: "12%",
          right: "30%",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          C
        </p>
      </div>
    );

    setTroco(
      <div>
        <p style={{ floating: "left", height: "10px" }}>Troco</p>
        <div
          onClick={() => {
            setTroco("");
          }}
          style={{
            background: "#47a958",
            width: "50px",
            height: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "50px",
            bottom: "12%",
            right: "30%",
          }}
        >
          <p style={{ textAlign: "center" }}>R${afd.getTroco() - 8}</p>
        </div>
      </div>
    );
    setValor(0);
    setP(afd.getPalavra());
    setEst(afd.getEstado());
    setA(false);
    setB(false);
    setC(false);
    if (afd.getEstado < 0) {
      restart();
      return;
    }
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "7%",
          left: "19%",
          background: "#b4d72a",
          borderRadius: "50px",
          width: "55%",
          height: "85%",
          padding: "20px",
        }}
      >
        <div>
          <div
            style={{
              width: "80%",
              height: 462,
              float: "left",
            }}
          ></div>

          <div>
            <p
              style={{
                position: "absolute",
                top: "-15px",
                fontSize: "40px",
                left: "25px",
              }}
            >
              Máquina de Doces
            </p>
            <div
              style={{
                position: "absolute",
                float: "left",
                width: "60%",
                height: "420px",
                background: "#1e1e1e",
                padding: "20px",
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                top: "90px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    width: "45%",
                    height: "100px",
                    background: "#bb4343",
                    borderRadius: "50px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{ textAlign: "center", margin: 0, fontSize: "25px" }}
                  >
                    A
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      margin: 0,
                      fontSize: "25px",
                      fontWeight: 700,
                    }}
                  >
                    R$6,00
                  </p>
                </div>
              </div>

              <div>
                <div
                  style={{
                    width: "45%",
                    height: "100px",
                    background: "rgb(71 101 169)",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50px",
                  }}
                >
                  <p
                    style={{ textAlign: "center", margin: 0, fontSize: "25px" }}
                  >
                    B
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      margin: 0,
                      fontSize: "25px",
                      fontWeight: 700,
                    }}
                  >
                    R$7,00
                  </p>
                </div>
              </div>

              <div>
                <div
                  style={{
                    width: "45%",
                    height: "100px",
                    background: "#47a958",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50px",
                  }}
                >
                  <p
                    style={{ textAlign: "center", margin: 0, fontSize: "25px" }}
                  >
                    C
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      margin: 0,
                      fontSize: "25px",
                      fontWeight: 700,
                    }}
                  >
                    R$8,00
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div style={{ height: "30px" }}></div>

              <div
                style={{
                  float: "right",
                  color: "green",
                  width: "140px",
                  height: "25px",
                  background: "black",
                  textAlign: "center",
                  borderRadius: "50px",
                }}
              >
                R$ {valor},00
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "absolute",
                  right: "15px",
                  top: "80px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    float: "left",
                    padding: "7px",
                  }}
                >
                  <div style={{ margin: "5px" }}>
                    <button onClick={handleC1} style={styleOn}>
                      1$
                    </button>
                  </div>
                  <div style={{ margin: "5px" }}>
                    <button onClick={handleC2} style={styleOn}>
                      2$
                    </button>
                  </div>
                  <div style={{ margin: "5px" }}>
                    <button onClick={handleC5} style={styleOn}>
                      5$
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    float: "right",
                    padding: "7px",
                  }}
                >
                  <div style={{ margin: "5px" }}>
                    <button
                      onClick={a ? handleCA : () => {}}
                      style={a ? styleOn : styleOff}
                    >
                      a
                    </button>
                  </div>
                  <div style={{ margin: "5px" }}>
                    <button
                      onClick={b ? handleCB : () => {}}
                      style={b ? styleOn : styleOff}
                    >
                      b
                    </button>
                  </div>
                  <div style={{ margin: "5px" }}>
                    <button
                      onClick={c ? handleCC : () => {}}
                      style={c ? styleOn : styleOff}
                    >
                      c
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: "100px",
                padding: "20px",
              }}
            >
              <div style={{ height: "10px" }}></div>
              <div
                style={{
                  background: "#1e1e1e",
                  width: "80px",
                  height: "80px",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "20px",
                }}
              >
                {doce && (
                  <button
                    onClick={restart}
                    style={{
                      position: "absolute",
                      right: "22%",
                      top: "42%",
                      background: "#c38932",
                      border: 0,
                      borderRadius: "20px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Resetar
                  </button>
                )}
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                padding: "20px",
              }}
            >
              <div
                style={{
                  background: "#1e1e1e",
                  width: "80px",
                  height: "55px",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "15px",
                }}
              >
                {troco}
              </div>
              <div style={{ height: "10px" }}></div>
              <div
                style={{
                  background: "#1e1e1e",
                  width: "80px",
                  height: "80px",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "20px",
                }}
              >
                {doce && <p>Doce</p>}
                {doce}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
