import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

interface MarkMapProps {
  content: string;
}

const MarkMap = ({ content }: MarkMapProps) => {
  const [webViewHeight, setWebViewHeight] = useState<number>(0);
  const [markMapContent, setMarkMapContent] = useState("");
  const webViewRef = useRef(null);

  useEffect(() => {
    const diagramHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
          svg.markmap {
            width: 100%;
            height: auto;
          }
        </style>
        <script src="https://cdn.jsdelivr.net/npm/markmap-autoloader@0.16"></script>
      </head>
      <body>
        <div class="markmap">
          <script type="text/template">
            ${content}
          </script>
        </div>
      </body>
      </html>
    `;
    setMarkMapContent(diagramHTML);
  }, [content]);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        // originWhitelist={["*"]}
        source={{ html: markMapContent }}
        style={[styles.webview]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        // onMessage={handleMessage}
      />
    </View>
  );
};

export default MarkMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "auto",
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  webview: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
