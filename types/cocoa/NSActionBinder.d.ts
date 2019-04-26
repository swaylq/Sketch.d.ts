/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSActionBinder<T0 = void, T1 = void, T2 = void> extends NSEditorBinder {
    performAction<R = void, P0 = unknown>(_performAction: P0): R;
    _performActionWithCommitEditing<R = boolean>(): R;
    _performActionWithCommitEditing_didCommit_contextInfo<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__performActionWithCommitEditing: P0, _didCommit: P1, _contextInfo: P2): R;
    _executePerformAction<R = void>(): R;
    targetAndArgumentsAcceptableAtIndexPath<R = boolean, P0 = unknown>(_targetAndArgumentsAcceptableAtIndexPath: P0): R;
    targetAndArgumentsAcceptableAtIndex<R = boolean, P0 = number>(_targetAndArgumentsAcceptableAtIndex: P0): R;
    targetAndArgumentsAcceptable<R = boolean>(): R;
    _targetAndArgumentsAcceptableForMode<R = boolean, P0 = __NSKeyValueCodingControllerModeType>(__targetAndArgumentsAcceptableForMode: P0): R;
    _invokeSelector_withArguments_forBinding<R = void, P0 = string, P1 = unknown, P2 = unknown>(__invokeSelector: P0, _withArguments: P1, _forBinding: P2): R;
    invokesSeparatelyWithArrayObjectsWithBinding<R = boolean, P0 = unknown>(_invokesSeparatelyWithArrayObjectsWithBinding: P0): R;
    setInvokesSeparatelyWithArrayObjects_withBinding<R = void, P0 = boolean, P1 = unknown>(_setInvokesSeparatelyWithArrayObjects: P0, _withBinding: P1): R;
    allowsNullArgumentWithBinding<R = boolean, P0 = unknown>(_allowsNullArgumentWithBinding: P0): R;
    setAllowsNullArgument_withBinding<R = void, P0 = boolean, P1 = unknown>(_setAllowsNullArgument: P0, _withBinding: P1): R;
    selector<R = string>(): R;
    setSelector<R = void, P0 = string>(_setSelector: P0): R;
    _targetBindingBound<R = boolean>(): R;
    _argumentBindingCount<R = number>(): R;
  }
  namespace NSActionBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEditorBinder {
      alloc<R = NSActionBinder>(): R;
      new: <R = NSActionBinder>() => R;
      _enumeratedArgumentBindings<R = unknown, P0 = number>(__enumeratedArgumentBindings: P0): R;
      _targetBinding<R = unknown>(): R;
      _enumerationBinding<R = unknown>(): R;
    }
  }
}

declare const NSActionBinder: cocoa.NSActionBinder.CLASS;
