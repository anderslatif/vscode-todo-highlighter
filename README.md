# vscode-todo-highlighter

Highlight comments based on certain keywords.

## Features

Highlight comments of type:

// 

/* multiline comments */

\<!-- HTML comments -->

\# SQL and many other types of comment

with keywords such as: todo, fixme, assignment and task. 

## Extension Settings

Change the configurations through the  `contributes.configuration` extension point.

You can change the decoration style for a specific comment type like this: 

* `todoHighlighter.decorations.todo`: `{color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.28)}`


## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

Initial release of vscode-todo-highlighter

