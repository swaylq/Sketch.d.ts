/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackButtonController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    hide<R = void>(): R;
    attachToView<R = void, P0 = unknown>(_attachToView: P0): R;
    backButtonAction<R = void, P0 = unknown>(_backButtonAction: P0): R;
    doc<R = MSDocument>(): R;
    setDoc<R = void, P0 = MSDocument>(_v: P0): R;
  }
  namespace MSBackButtonController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSBackButtonController>(): R;
      new: <R = MSBackButtonController>() => R;
    }
  }
}

declare const MSBackButtonController: cocoa.MSBackButtonController.CLASS;
