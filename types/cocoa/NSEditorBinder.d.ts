/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEditorBinder<T0 = void, T1 = void, T2 = void> extends NSBinder {
    _adjustStatesOfObject_mode_state_triggerRedisplay<R = void, P0 = unknown, P1 = __NSKeyValueCodingControllerModeType, P2 = boolean, P3 = boolean>(__adjustStatesOfObject: P0, _mode: P1, _state: P2, _triggerRedisplay: P3): R;
    _isExplicitlyNonEditable<R = boolean>(): R;
    _conditionallySetsStates<R = boolean>(): R;
    conditionallySetsHidden<R = boolean>(): R;
    selectionSupportsEnabledState<R = boolean>(): R;
    setConditionallySetsHidden<R = void, P0 = boolean>(_setConditionallySetsHidden: P0): R;
    conditionallySetsEnabled<R = boolean>(): R;
    setConditionallySetsEnabled<R = void, P0 = boolean>(_setConditionallySetsEnabled: P0): R;
    conditionallySetsEditable<R = boolean>(): R;
    setConditionallySetsEditable<R = void, P0 = boolean>(_setConditionallySetsEditable: P0): R;
    _isReferenceBinding<R = boolean, P0 = unknown>(__isReferenceBinding: P0): R;
  }
  namespace NSEditorBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBinder {
      alloc<R = NSEditorBinder>(): R;
      new: <R = NSEditorBinder>() => R;
    }
  }
}

declare const NSEditorBinder: cocoa.NSEditorBinder.CLASS;
