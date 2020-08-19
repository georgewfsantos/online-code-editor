import React from "react";
import Tree from "react-animated-tree";

const TreeView = ({ loadFileContent, fileTree }) => {
  return (
    <Tree content={fileTree[0]?.name} visible>
      <Tree content={fileTree[0]?.children[0].name}>
        <Tree content={fileTree[0]?.children[0].children[0].name}>
          <Tree
            content={fileTree[0]?.children[0].children[0].children[0].name}
            onClick={() =>
              loadFileContent(
                fileTree[0]?.children[0].children[0].children[0].id
              )
            }
            canHide
          />
          <Tree
            content={fileTree[0]?.children[0].children[0].children[1].name}
            onClick={() =>
              loadFileContent(
                fileTree[0]?.children[0].children[0].children[1].id
              )
            }
            canHide
          />
          <Tree
            content={fileTree[0]?.children[0].children[0].children[2].name}
            onClick={() =>
              loadFileContent(
                fileTree[0]?.children[0].children[0].children[2].id
              )
            }
            canHide
          />
          <Tree content={fileTree[0]?.children[0].children[0].children[3].name}>
            <Tree
              content={
                fileTree[0]?.children[0].children[0].children[3].children[0]
                  .name
              }
              onClick={() =>
                loadFileContent(
                  fileTree[0]?.children[0].children[0].children[3].children[0]
                    .id
                )
              }
              canHide
            />
            <Tree
              content={
                fileTree[0]?.children[0].children[0].children[3].children[1]
                  .name
              }
              onClick={() =>
                loadFileContent(
                  fileTree[0]?.children[0].children[0].children[3].children[1]
                    .id
                )
              }
              canHide
            />
          </Tree>
        </Tree>

        <Tree content={fileTree[0]?.children[0].children[1].name}>
          <Tree
            content={fileTree[0]?.children[0].children[1].children[0].name}
            onClick={() =>
              loadFileContent(
                fileTree[0]?.children[0].children[1].children[0].id
              )
            }
            canHide
          />
          <Tree
            content={fileTree[0]?.children[0].children[1].children[1].name}
            onClick={() =>
              loadFileContent(
                fileTree[0]?.children[0].children[1].children[1].id
              )
            }
            canHide
          />
        </Tree>
      </Tree>
    </Tree>
  );
};

export default TreeView;
