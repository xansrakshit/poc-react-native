import MarkMap from "@/components/MarkMap";
import Mermaid from "@/components/Mermaid";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import data from "../assets/mermaid_messages.json";

const Index = () => {
  const [mermaidContents, setMermaidContents] = useState<string[]>([]);
  const [markMapContent, setMarkMapContent] = useState<string>("");

  const markMapExample = `
      ---
      markmap:
        maxWidth: 300
        colorFreezeLevel: 2
      ---

      # markmap

      ## Links

      - <https://markmap.js.org/>
      - [GitHub](https://github.com/markmap/markmap)

      ## Related

      - [coc-markmap](https://github.com/markmap/coc-markmap)
      - [gatsby-remark-markmap](https://github.com/markmap/gatsby-remark-markmap)

      ## Features

      - links
      - **inline** ~~text~~ *styles*
      - multiline
        text
      - \`inline code\`
      - Katex - $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
      - This is a very very very very very very very very very very very very very very very long line.
    `;
  useEffect(() => {
    const contents = data.messages.map((message) => message.content);
    setMermaidContents(contents);
    setMarkMapContent(markMapExample);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {mermaidContents.map((content, index) => (
        <View key={index} style={styles.diagramContainer}>
          <Mermaid content={content} />
        </View>
      ))}
      <View style={styles.diagramContainer}>
        <MarkMap content={markMapContent} />
      </View>
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
