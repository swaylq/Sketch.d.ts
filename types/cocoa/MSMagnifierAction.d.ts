/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMagnifierAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    colorMagnifierAction<R = void, P0 = unknown>(_colorMagnifierAction: P0): R;
    currentPopoverHandlesColorMagnifier<R = boolean>(): R;
    validate<R = boolean>(): R;
    label<R = unknown>(): R;
  }
  namespace MSMagnifierAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSMagnifierAction>(): R;
      new: <R = MSMagnifierAction>() => R;
    }
  }
}

declare const MSMagnifierAction: cocoa.MSMagnifierAction.CLASS;
