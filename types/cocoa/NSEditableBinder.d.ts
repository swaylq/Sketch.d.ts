/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEditableBinder<T0 = void, T1 = void, T2 = void> extends NSBinder {
    _setStatesImmediatelyInObject_mode_triggerRedisplay<R = void, P0 = unknown, P1 = __NSKeyValueCodingControllerModeType, P2 = boolean>(__setStatesImmediatelyInObject: P0, _mode: P1, _triggerRedisplay: P2): R;
    _hiddenStateWithMode<R = boolean, P0 = __NSKeyValueCodingControllerModeType>(__hiddenStateWithMode: P0): R;
    hiddenStateAtIndexPath<R = boolean, P0 = unknown>(_hiddenStateAtIndexPath: P0): R;
    hiddenStateAtIndex<R = boolean, P0 = number>(_hiddenStateAtIndex: P0): R;
    hiddenState<R = boolean>(): R;
    _enabledStateWithMode<R = boolean, P0 = __NSKeyValueCodingControllerModeType>(__enabledStateWithMode: P0): R;
    enabledStateAtIndexPath<R = boolean, P0 = unknown>(_enabledStateAtIndexPath: P0): R;
    enabledStateAtIndex<R = boolean, P0 = number>(_enabledStateAtIndex: P0): R;
    enabledState<R = boolean>(): R;
    _editableStateWithMode<R = boolean, P0 = __NSKeyValueCodingControllerModeType>(__editableStateWithMode: P0): R;
    editableStateAtIndexPath<R = boolean, P0 = unknown>(_editableStateAtIndexPath: P0): R;
    editableStateAtIndex<R = boolean, P0 = number>(_editableStateAtIndex: P0): R;
    editableState<R = boolean>(): R;
    _requestAnyHiddenState<R = void>(): R;
    _requestHiddenState<R = void, P0 = boolean>(__requestHiddenState: P0): R;
    _requestAnyEnabledState<R = void>(): R;
    _requestEnabledState<R = void, P0 = boolean>(__requestEnabledState: P0): R;
    _requestAnyEditableState<R = void>(): R;
    _requestEditableState<R = void, P0 = boolean>(__requestEditableState: P0): R;
    _countBindings<R = void>(): R;
  }
  namespace NSEditableBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBinder {
      alloc<R = NSEditableBinder>(): R;
      new: <R = NSEditableBinder>() => R;
      _enumeratedHiddenBindings<R = unknown, P0 = number>(__enumeratedHiddenBindings: P0): R;
      _enumeratedEnabledBindings<R = unknown, P0 = number>(__enumeratedEnabledBindings: P0): R;
      _enumeratedEditableBindings<R = unknown, P0 = number>(__enumeratedEditableBindings: P0): R;
    }
  }
}

declare const NSEditableBinder: cocoa.NSEditableBinder.CLASS;
