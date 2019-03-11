/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownController<T = any> extends cocoa.NSResponder {
    cxx_destruct<R = void>(): R;
    isEditable<R = boolean>(): R;
    isEnabled<R = boolean>(): R;
    isEditing<R = boolean>(): R;
    floatValue<R = number>(): R;
    incrementValueAccountingForModifierFlags<R = number>(): R;
    adjustValueForMinimum<R = number, P0 = number>(_adjustValueForMinimum: P0): R;
    incrementBy<R = boolean, P0 = number>(_incrementBy: P0): R;
    decrement<R = void>(): R;
    adjustValueForMaximum<R = number, P0 = number>(_adjustValueForMaximum: P0): R;
    increment<R = void>(): R;
    incrementValue<R = number>(): R;
    setFloatValueAndNotifyBindings<R = void, P0 = number>(_setFloatValueAndNotifyBindings: P0): R;
    giveUpFirstResponder<R = void>(): R;
    insertNewline<R = void, P0 = unknown>(_insertNewline: P0): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    cancelTextEditingForInvalidReplacementString<R = boolean, P0 = unknown>(_cancelTextEditingForInvalidReplacementString: P0): R;
    textDidChange<R = void, P0 = unknown>(_textDidChange: P0): R;
    textDidEndEditing<R = void>(): R;
    eventIsInsideView<R = boolean, P0 = unknown>(_eventIsInsideView: P0): R;
    hideStepper<R = void, P0 = boolean>(_hideStepper: P0): R;
    stepperRect<R = cocoa.CGRect>(): R;
    makeStepper<R = void>(): R;
    initWithTextField_createStepper<R = unknown, P0 = unknown, P1 = boolean>(_initWithTextField: P0, _createStepper: P1): R;
    stepper<R = cocoa.MSIntegratedStepper>(): R;
    setStepper<R = void, P0 = cocoa.MSIntegratedStepper>(_v: P0): R;
    textField<R = cocoa.MSUpDownProtocol>(): R;
    setTextField<R = void, P0 = cocoa.MSUpDownProtocol>(_v: P0): R;
    incrementDecrementDelegate<R = cocoa.MSIncrementDecrementDelegate>(): R;
    setIncrementDecrementDelegate<R = void, P0 = cocoa.MSIncrementDecrementDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSUpDownController<T = any> extends cocoa.classes.NSResponder {
      alloc<R = MSUpDownController>(): R;
      new: <R = MSUpDownController>() => R;
      stepperClass<R = unknown>(): R;
    }
  }
}

declare const MSUpDownController: cocoa.classes.MSUpDownController;
