const vscode = require('vscode');

function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.popout', async (uri) => {
		await vscode.commands.executeCommand('vscode.openFolder', uri, true);
	});
	context.subscriptions.push(disposable);
}

module.exports = {
	activate
}
