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

export function useEffect(effect) {
  saveEffectHook(globalInstance, effect)
}

function saveEffectHook(instance, effect) {
  instance.effects.push(effect)
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
    effects = []
    cleans = []
    states = []

    cleanup() {
      while(this.cleans.length) {
        const clean = this.cleans.shift()
        if (typeof clean === 'function') clean()
      }
    }

    performEffect() {
      const { effects, cleans } = this
      this.cleanup()
      while (effects.length) {
        const effect = effects.shift()
        cleans.push(effect())
      }
    }

    componentDidMount() {
      this.performEffect()
    }

    componentDidUpdate() {
      this.performEffect()
    }

    componentWillUnmount() {
      this.cleanup()
    }

    render() {
      setInstance(this)
      const element = <Component {...this.props} />;
      return element;
    }
  };
}

export default withHooks;
