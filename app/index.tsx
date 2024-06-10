import Mermaid from "@/components/Mermaid";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import data from "../assets/mermaid_messages.json";

const Index = () => {
  const [mermaidContents, setMermaidContents] = useState<string[]>([]);

  useEffect(() => {
    const contents = data.messages.map((message) => message.content);
    setMermaidContents(contents);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {mermaidContents.map((content, index) => (
        <View key={index} style={styles.diagramContainer}>
          <Mermaid content={content} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {},
  diagramContainer: {
    marginBottom: 20,
  },
});
