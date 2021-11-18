import React, { useState } from "react";
import AFN from "./AFN";

export function Machine(props) {
  let [afd, setAfd] = useState(new AFN());
  let [valor, setValor] = useState(0);
  let [troco, setTroco] = useState(false);
  let [a, setA] = useState(false);
  let [b, setB] = useState(false);
  let [c, setC] = useState(false);
  let [doce, setDoce] = useState("");
  let [p, setP] = useState("");
  let [est, setEst] = useState(0);
  //const input = "11528";

  /*for(let i = 0; i < input.length; i++){
    //System.out.println(afn.consumir(input.charAt(i)));
    afd.consumir(input.charAt(i));
}*/
  const styleOn = {
    borderRadius: "50%",
    background: "#B8B8FE",
    color: "#5A559A",
    padding: "10px",
    margin: "5px",
    border: "1px solid",
    fontSize: "20px",
  };
  const styleOff = {
    borderRadius: "50%",
    background: "#5A559A",
    color: "#B8B8FE",
    padding: "10px",
    margin: "5px",
    border: "1px solid",
    fontSize: "20px",
  };

  const styleButton = {
    background: "#5A559A",
    color: "#B8B8FE",
    padding: "10px",
    margin: "5px",
    border: "1px solid",
    fontSize: "14px",
  };

  const restart = () => {
    setAfd(new AFN());
    setValor(0);
    setTroco(false);
    setDoce("");
    setP("");
    setEst(0);
    setA(false);
    setB(false);
    setC(false);
  };

  const handleC5 = () => {
    if (afd.consumir("5") < 0) {
      restart();
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
      restart();
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
      restart();
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
    setDoce("A");
    setTroco(afd.getTroco() - 6);
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
    setDoce("B");
    setTroco(afd.getTroco() - 7);
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
    setDoce("C");
    setTroco(afd.getTroco() - 8);
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
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "16px" }}>
        Valor: R$ <span style={{ fontWeight: "700" }}>{valor}</span>
      </p>
      <button onClick={restart} style={styleButton}>
        Recomeçar
      </button>
      <div style={{ padding: "10px" }}>
        <button onClick={handleC5} style={styleOn}>
          5
        </button>
        <button onClick={handleC2} style={styleOn}>
          2
        </button>
        <button onClick={handleC1} style={styleOn}>
          1
        </button>
      </div>
      <div>
        <button
          onClick={c ? handleCC : () => {}}
          style={c ? styleOn : styleOff}
        >
          c
        </button>
        <button
          onClick={b ? handleCB : () => {}}
          style={b ? styleOn : styleOff}
        >
          b
        </button>
        <button
          onClick={a ? handleCA : () => {}}
          style={a ? styleOn : styleOff}
        >
          a
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ paddingRight: "20px", fontSize: "16px" }}>
          Doce:{" "}
          <span style={{ fontWeight: "700", fontSize: "12px" }}>{doce}</span>
        </p>
        {/* <p style={{ paddingRight: "20px", fontSize: "16px" }}>
          Palavra:{" "}
          <span style={{ fontWeight: "700", fontSize: "12px" }}>{p}</span>
        </p>
        <p style={{ fontSize: "16px" }}>
          Estado:{" "}
          <span style={{ fontWeight: "700", fontSize: "12px" }}>{est}</span>
        </p> */}
        {troco && (
          <p style={{ fontSize: "16px" }}>
            Troco:{" "}
            <span style={{ fontWeight: "700", fontSize: "12px" }}>{troco}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Machine;
