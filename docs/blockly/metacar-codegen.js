Blockly.JavaScript['forward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'moveForward();\n';
  return code;
};

Blockly.JavaScript['turn_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnLeft();\n';
  return code;
};

Blockly.JavaScript['turn_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnRight();\n';
  return code;
};

Blockly.JavaScript['backward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'moveBackward();\n';
  return code;
};

Blockly.JavaScript['stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'stop();\n';
  return code;
};

Blockly.JavaScript['sleep'] = function(block) {
  var number_millis = block.getFieldValue('millis');
  // TODO: Assemble JavaScript into code variable.
  var code = `sleep(${number_millis});\n`;
  return code;
};
