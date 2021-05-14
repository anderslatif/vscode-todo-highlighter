// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-todo-highlighter.todoHighlighter', function () {
		// The code you place here will be executed every time your command is executed

		vscode.window.showInformationMessage(`Thank you for using vscode-todo-highlighter!`);
	});

	context.subscriptions.push(disposable);


	vscode.workspace.onDidChangeTextDocument((event) => {
		const window = vscode.window;
		const document = event.document;
		const text = document.getText();

		// if (text.includes("todo")) {
			const start = document.positionAt(0);
			const end = document.positionAt(1);
			const range = new vscode.Range(start, end);

			const decorationType = window.createTextEditorDecorationType({
				backgroundColor: 'green',
				border: '2px solid white',
			});

			console.log(range);

			window.activeTextEditor.setDecorations(decorationType, [{ range }])
		// }
	});
	
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
