import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { Button } from "react-native";

const table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  const edit = () => {};

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>id</DataTable.Title>
        <DataTable.Title>name</DataTable.Title>
        <DataTable.Title>email</DataTable.Title>
        <DataTable.Title numeric>Actions</DataTable.Title>
      </DataTable.Header>
      {data.map((item) => (
        <DataTable.Row key={item.id}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.email}</DataTable.Cell>
          <DataTable.Cell>
            <Button title="Edit" onPress={edit(item.id)}></Button>
            <Button title="Delet" onPress={item.id}></Button>
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default table;
