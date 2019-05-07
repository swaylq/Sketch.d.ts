/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutounbinder<T0 = void, T1 = void, T2 = void> extends NSProxy {
    _autounbinder<R = unknown>(): R;
    mutableSetValueForKeyPath<R = unknown, P0 = unknown>(_mutableSetValueForKeyPath: P0): R;
    mutableArrayValueForKeyPath<R = unknown, P0 = unknown>(_mutableArrayValueForKeyPath: P0): R;
    validateValue_forKeyPath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_validateValue: P0, _forKeyPath: P1, _error: P2): R;
    setValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKeyPath: P1): R;
    valueForKeyPath<R = unknown, P0 = unknown>(_valueForKeyPath: P0): R;
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    retainBindingTargetAndUnbind<R = void>(): R;
    removeBinding_fromObject<R = void, P0 = unknown, P1 = unknown>(_removeBinding: P0, _fromObject: P1): R;
    addBinding_fromObject_isWeak<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(_addBinding: P0, _fromObject: P1, _isWeak: P2): R;
    addBinding_fromObject<R = void, P0 = unknown, P1 = unknown>(_addBinding: P0, _fromObject: P1): R;
    bindingTarget<R = unknown>(): R;
    initWithBindingTarget<R = unknown, P0 = unknown>(_initWithBindingTarget: P0): R;
  }
  namespace NSAutounbinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSProxy {}
  }
}

declare const NSAutounbinder: cocoa.NSAutounbinder.CLASS;
