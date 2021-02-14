const env = new metacar.env('metacar', metacar.level.level3);
env.load();

let workspace = Blockly.inject('blockly', {
    toolbox: document.getElementById('toolbox')
});

function sleep(millis) {
    const date = new Date();
    while(new Date() - date < millis);
}

document.getElementById('run').addEventListener('click', () => {
    Blockly.JavaScript.addReservedWords('code', 'env');
    const code = Blockly.JavaScript.workspaceToCode(workspace);

    new Promise(resolve => {
        function initApi(interpreter, globalObject) {
            // Add an API function for the alert() block.
            var wrapper = function(text) {
              return alert(arguments.length ? text : '');
            };
            interpreter.setProperty(globalObject, 'alert',
                interpreter.createNativeFunction(wrapper));
          
            // Add an API function for the prompt() block.
            wrapper = function(text) {
              return prompt(text);
            };
            interpreter.setProperty(globalObject, 'prompt',
                interpreter.createNativeFunction(wrapper));

            wrapper = function() {
                return env.level.agent.motion.moveForward();
            }
            interpreter.setProperty(globalObject, 'moveForward',
                interpreter.createNativeFunction(wrapper));

            wrapper = function() {
                return env.level.agent.motion.moveBackward();
            }
            interpreter.setProperty(globalObject, 'moveBackward',
                interpreter.createNativeFunction(wrapper));

            wrapper = function() {
                return env.level.agent.motion.turnLeft();
            }
            interpreter.setProperty(globalObject, 'turnLeft',
                interpreter.createNativeFunction(wrapper));

            wrapper = function() {
                return env.level.agent.motion.turnRight();
            }
            interpreter.setProperty(globalObject, 'turnRight',
                interpreter.createNativeFunction(wrapper));
            
            wrapper = function() {
                return env.level.agent.core.v = 0;
            }
            interpreter.setProperty(globalObject, 'stop',
                interpreter.createNativeFunction(wrapper));

            wrapper = function(millis) {
                interpreter.paused_ = true;
                setTimeout(() => { 
                    interpreter.paused_ = false;
                    interpreter.run()
                }, millis);
            }
            interpreter.setProperty(globalObject, 'sleep',
                interpreter.createNativeFunction(wrapper));
        }

        const myInterpreter = new Interpreter(code, initApi);
        myInterpreter.run();

        resolve();
    }).catch(e => alert(e));
});
