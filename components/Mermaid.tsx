import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

interface MermaidProps {
  content: string;
}

const Mermaid = ({ content }: MermaidProps) => {
  const [mermaidContent, setMermaidContent] = useState("");

  useEffect(() => {
    const diagramHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #282c34;
            color: white;
          }
        </style>
      </head>
      <body>
        <div class="mermaid">${content}</div>
        <script type="module">
          import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs';
          mermaid.initialize({ startOnLoad: true, securityLevel: 'loose', theme: 'dark' });
          mermaid.contentLoaded();
        </script>
      </body>
      </html>
    `;
    setMermaidContent(diagramHTML);
  }, [content]);

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: mermaidContent }}
        style={styles.webview}
      />
    </View>
  );
};

export default Mermaid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
