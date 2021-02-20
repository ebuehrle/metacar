function initApi(env, interpreter, globalObject) {
    interpreter.setProperty(
        globalObject, 'alert',
        interpreter.createNativeFunction(text => 
            alert(arguments.length ? text : '')
        )
    );
    
    interpreter.setProperty(
        globalObject, 'prompt',
        interpreter.createNativeFunction(text =>
            prompt(text)
        )
    );
    
    interpreter.setProperty(
        globalObject, 'moveForward',
        interpreter.createNativeFunction(() => 
            env.level.agent.motion.moveForward()
        )
    );
    
    interpreter.setProperty(
        globalObject, 'moveBackward',
        interpreter.createNativeFunction(() =>
            env.level.agent.motion.moveBackward()
        )
    );
    
    interpreter.setProperty(
        globalObject, 'turnLeft',
        interpreter.createNativeFunction(() =>
            env.level.agent.motion.turnLeft()
        )
    );
    
    interpreter.setProperty(
        globalObject, 'turnRight',
        interpreter.createNativeFunction(() => 
            env.level.agent.motion.turnRight()
        )
    );
    
    interpreter.setProperty(
        globalObject, 'stop',
        interpreter.createNativeFunction(() =>
            env.level.agent.core.v = 0
        )
    );
    
    interpreter.setProperty(
        globalObject, 'lidar',
        interpreter.createNativeFunction((x, y) =>
            env.getState().lidar[x][y]
        )
    );
    
    // interpreter.setProperty(
    //     globalObject, 'sleep',
    //     interpreter.createNativeFunction(millis => {
    //         interpreter.paused_ = true;
    //         setTimeout(() => { 
    //             interpreter.paused_ = false;
    //             interpreter.run()
    //         }, millis);
    //     })
    // );

    interpreter.setProperty(
        globalObject, 'sleep',
        interpreter.createNativeFunction(millis => 
            interpreter['stepTimeout'] = millis
        )
    );
}

function initMetacarApi(env) {
    return (interpreter, globalObject) => initApi(env, interpreter, globalObject);
}
