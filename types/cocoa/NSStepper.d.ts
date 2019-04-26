/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStepper<T0 = void, T1 = void, T2 = void> extends NSControl, NSAccessibilityStepperProtocol {
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    moveUp<R = void, P0 = unknown>(_moveUp: P0): R;
    autorepeat<R = boolean>(): R;
    setAutorepeat<R = void, P0 = boolean>(_v: P0): R;
    valueWraps<R = boolean>(): R;
    setValueWraps<R = void, P0 = boolean>(_v: P0): R;
    increment<R = number>(): R;
    setIncrement<R = void, P0 = number>(_v: P0): R;
    maxValue<R = number>(): R;
    setMaxValue<R = void, P0 = number>(_v: P0): R;
    minValue<R = number>(): R;
    setMinValue<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSStepper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSAccessibilityStepperProtocol {
      alloc<R = NSStepper>(): R;
      new: <R = NSStepper>() => R;
    }
  }
}

declare const NSStepper: cocoa.NSStepper.CLASS;
