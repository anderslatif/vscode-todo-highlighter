const vscode = require('vscode');

const getRegexes = require("./regularExpressions.js");
let regexes;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const workspace = vscode.workspace;
	const window = vscode.window;

	setup();

	context.subscriptions.push(vscode.commands.registerCommand('vscode-todo-highlighter.todoHighlighter', function () {
		vscode.window.showInformationMessage(`Thank you for using vscode-todo-highlighter!`);
	}));


	window.onDidChangeActiveTextEditor((event) => {
		decorate(event);	
	});

	workspace.onDidChangeConfiguration(() => {
		setup();
	})

	workspace.onDidChangeTextDocument((event) => {
		decorate(event);
	});
	
}

function setup() {
	const settings = vscode.workspace.getConfiguration('todoHighlighter');
	const decorationStyles = settings.get("decorations");
	regexes = getRegexes(decorationStyles, vscode.window);
}

function decorate(event) {
	const document = event.document;
	const text = document.getText();

	if (excludeFolders(document.fileName)) return;

	regexes.map(regex => {
		let match;
		let decorationsArray = []
		const style = regex.style; 

		while (match = regex.regex.exec(text)) {
			const start = document.positionAt(match.index);
			const end = document.positionAt(match.index + match[0].length);
			const range = new vscode.Range(start, end);
	
			let decoration = { range };
			decorationsArray.push(decoration);
			
		}
		vscode.window.activeTextEditor.setDecorations(style, decorationsArray)

	});
}

function excludeFolders(filepath) {
	if (
		filepath.includes("node_modules")     ||
		filepath.includes("bower_components") ||
		filepath.includes("dist")             ||
		filepath.includes("out")              ||
		filepath.includes("build")            ||		
		filepath.includes(".git")             ||		
		filepath.includes(".min")		
	) {
		return true;
	}
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
