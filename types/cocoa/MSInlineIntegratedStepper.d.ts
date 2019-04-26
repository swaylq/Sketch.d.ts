/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineIntegratedStepper<T0 = void, T1 = void, T2 = void> extends MSIntegratedStepper {
    drawStepper<R = void, P0 = number>(_drawStepper: P0): R;
  }
  namespace MSInlineIntegratedStepper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSIntegratedStepper {
      alloc<R = MSInlineIntegratedStepper>(): R;
      new: <R = MSInlineIntegratedStepper>() => R;
    }
  }
}

declare const MSInlineIntegratedStepper: cocoa.MSInlineIntegratedStepper.CLASS;
