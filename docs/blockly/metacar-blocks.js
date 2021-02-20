Blockly.Blocks['forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Move forward.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["turn left","left"], ["turn right","right"]]), "turn_direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("backward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Move backward.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Brake to zero speed.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sleep for")
        .appendField(new Blockly.FieldNumber(500, 0, Infinity, 1), "millis")
        .appendField("milliseconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Don't do this when you're driving.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lidar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("there is")
        .appendField(new Blockly.FieldDropdown([["a car","car"], ["a road","road"], ["terrain","terrain"]]), "obstacle_type")
        .appendField(new Blockly.FieldDropdown([["0m","0m"], ["1m","1m"], ["2m","2m"], ["3m","3m"], ["4m","4m"]]), "front_distance")
        .appendField("in front,")
        .appendField(new Blockly.FieldDropdown([["0m","0m"], ["1m","1m"], ["2m","2m"]]), "lateral_distance")
        .appendField(new Blockly.FieldDropdown([["to the left","left"], ["to the right","right"]]), "lateral_direction");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
