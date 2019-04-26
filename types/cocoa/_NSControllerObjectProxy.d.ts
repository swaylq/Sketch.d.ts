/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSControllerObjectProxy<T0 = void, T1 = void, T2 = void> extends NSObject {
    validateValue_forKeyPath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_validateValue: P0, _forKeyPath: P1, _error: P2): R;
    validateValue_forKey_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_validateValue: P0, _forKey: P1, _error: P2): R;
    _invokeSelector_withArguments_onKeyPath<R = void, P0 = string, P1 = unknown, P2 = unknown>(__invokeSelector: P0, _withArguments: P1, _onKeyPath: P2): R;
    setValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKeyPath: P1): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    mutableArrayValueForKeyPath<R = unknown, P0 = unknown>(_mutableArrayValueForKeyPath: P0): R;
    mutableArrayValueForKey<R = unknown, P0 = unknown>(_mutableArrayValueForKey: P0): R;
    _proxyMutableArrayValueForKeyPath<R = unknown, P0 = unknown>(__proxyMutableArrayValueForKeyPath: P0): R;
    _proxyMutableArrayValueForKey<R = unknown, P0 = unknown>(__proxyMutableArrayValueForKey: P0): R;
    valueForKeyPath<R = unknown, P0 = unknown>(_valueForKeyPath: P0): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    _valueWithOperatorKeyPath<R = unknown, P0 = unknown>(__valueWithOperatorKeyPath: P0): R;
    _requestTypeForOperationKey<R = number, P0 = unknown>(__requestTypeForOperationKey: P0): R;
    clearController<R = void>(): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
  }
  namespace _NSControllerObjectProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSControllerObjectProxy>(): R;
      new: <R = _NSControllerObjectProxy>() => R;
    }
  }
}
