/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIntegratedStepper<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    isFlipped<R = boolean>(): R;
    stepWithEvent<R = void, P0 = unknown>(_stepWithEvent: P0): R;
    repeatStepEvent<R = void, P0 = unknown>(_repeatStepEvent: P0): R;
    timerWithInterval_repeats<R = unknown, P0 = number, P1 = boolean>(_timerWithInterval: P0, _repeats: P1): R;
    clickShouldDismissPopover<R = boolean, P0 = unknown>(_clickShouldDismissPopover: P0): R;
    keepFiringTimer<R = boolean>(): R;
    setKeepFiringTimer<R = void, P0 = boolean>(_v: P0): R;
    initialSlowTimer<R = NSTimer>(): R;
    setInitialSlowTimer<R = void, P0 = NSTimer>(_v: P0): R;
    timer<R = NSTimer>(): R;
    setTimer<R = void, P0 = NSTimer>(_v: P0): R;
    highlightMode<R = number>(): R;
    setHighlightMode<R = void, P0 = number>(_v: P0): R;
    target<R = MSUpDownController>(): R;
    setTarget<R = void, P0 = MSUpDownController>(_v: P0): R;
  }
  namespace MSIntegratedStepper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSIntegratedStepper>(): R;
      new: <R = MSIntegratedStepper>() => R;
    }
  }
}

declare const MSIntegratedStepper: cocoa.MSIntegratedStepper.CLASS;
