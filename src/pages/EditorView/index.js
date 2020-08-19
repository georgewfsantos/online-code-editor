import React, { useState, useEffect } from "react";
import "prismjs/themes/prism-funky.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-java";

import TreeView from "../../components/TreeView";
import Header from "../../components/Header";
import api from "../../services/api";

import { Container, FileView, FileContentView, SideBar } from "./styles";

const EditorView = () => {
  const [fileTree, setFileTree] = useState([]);
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [showHeader, setShowHeader] = useState(false);

  async function loadFileTree() {
    const response = await api.get("filetree");

    setFileTree(response.data);
  }

  useEffect(() => {
    loadFileTree();
  }, []);

  async function loadFileContent(fileId) {
    const response = await api.get(`/files/${fileId}`);
    const { name, content } = response.data;

    setFileName(name);
    setFileContent(content);
    setShowHeader(true);
  }

  return (
    <Container>
      <SideBar>
        <TreeView loadFileContent={loadFileContent} fileTree={fileTree} />
      </SideBar>
      <FileView>
        <Header
          fileName={fileName}
          fileContent={fileContent}
          showHeader={showHeader}
        />
        {fileContent ? (
          <FileContentView>
            <Editor
              value={fileContent}
              onValueChange={setFileContent}
              highlight={() => highlight(fileContent, languages.java)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
            />
          </FileContentView>
        ) : null}
      </FileView>
    </Container>
  );
};

export default EditorView;
