import React, { useRef } from "react";
import { useContext } from "react";
import { Container, Table } from "reactstrap";
import { JestCopy } from "../Context";

const Data = () => {
  const { data, setData } = useContext(JestCopy);

  const infoRef = useRef();

  const copyToClipboard = async (text, event) => {
    console.log(event.target.select);
    await navigator.clipboard.writeText(text);
  };

  const id = () => {
    return Math.random().toString(32).split(2, 9);
  };

  const renderData = () => {
    const iteams = [];
    let count = 1;
    for (const info in data) {
      iteams.push(
        <tr key={id()} onClick={(event) => copyToClipboard(data[info], event)}>
          <th scope="row">{count++}</th>
          <td>{info}</td>
          <td ref={infoRef}>{data[info]}</td>
        </tr>
      );
    }
    return iteams;
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Info</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Container>
  );
};

export default Data;
