const env = new metacar.env('metacar', metacar.level.level3);
env.load();

window.addEventListener('keydown', e => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
    }
});

let workspace = Blockly.inject('blockly', {
    toolbox: document.getElementById('toolbox')
});

let codeInterpreter;

document.querySelector('.run').addEventListener('click', () => {
    Blockly.JavaScript.addReservedWords('code', 'env');
    const code = Blockly.JavaScript.workspaceToCode(workspace);

    console.log(code);

    new Promise(resolve => {
        codeInterpreter = new Interpreter(code, initMetacarApi(env));
        (function runCode() {
            document.querySelector('.execution').classList.add('running');
            try {
                if (codeInterpreter && codeInterpreter.step()) {
                    setTimeout(runCode, codeInterpreter['stepTimeout'] || 1);
                    return;
                }
            } catch (e) {
                alert(e);
            }
            document.querySelector('.execution').classList.remove('running');
        })();
        resolve();
    });
});

document.querySelector('.stop').addEventListener('click', () => {
    codeInterpreter.paused_ = true;
    codeInterpreter = null;
    env.level.agent.core.v = 0
});

document.querySelector('.reset').addEventListener('click', () => {
    env.reset();
});
