import React from "react";

let globalInstance = null;
let cursor = 0;

function setInstance(instance) {
  globalInstance = instance;
  cursor = 0;
}

export function useState(defaultValue) {
  const stateHook = getStateHook(globalInstance, defaultValue, cursor);
  cursor += 1
  return stateHook
}

function getStateHook(instance, defaultValue, cursor) {
  const hooks = instance.states[cursor];
  if (!hooks) {
    instance.states[cursor] = [
      defaultValue,
      function(value) {
        instance.states[cursor][0] = value;
        instance.forceUpdate();
      }
    ];
  }

  return instance.states[cursor]
}

function withHooks(Component) {
  return class extends React.Component {
    effects = [];
    states = [];

    render() {
      setInstance(this)
      const element = <Component {...this.props} />;
      return element;
    }
  };
}

export default withHooks;
