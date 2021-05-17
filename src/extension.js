// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const getRegexes = require("./regularExpressions.js");
let regexes;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const workspace = vscode.workspace;
	const window = vscode.window;

	const settings = workspace.getConfiguration('todoHighlighter');
	const decorationStyles = settings.get("decorations");
	regexes = getRegexes(decorationStyles);

	console.log(regexes);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-todo-highlighter.todoHighlighter', function () {
		// The code you place here will be executed every time your command is executed

		vscode.window.showInformationMessage(`Thank you for using vscode-todo-highlighter!`);
	});

	context.subscriptions.push(disposable);

	workspace.onDidChangeTextDocument((event) => {
		const document = event.document;
		const text = document.getText();

		regexes.map(regex => {
			let match;
			while (match = regex.regex.exec(text)) {
				const start = document.positionAt(match.index);
				const end = document.positionAt(match.index + match[0].length);
				const range = new vscode.Range(start, end);
		
				const decorationType = window.createTextEditorDecorationType(regex.style);
				window.activeTextEditor.setDecorations(decorationType, [{ range }])
			}
		});



	});
	
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
