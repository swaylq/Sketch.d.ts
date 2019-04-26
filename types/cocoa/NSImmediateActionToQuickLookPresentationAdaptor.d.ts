/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImmediateActionToQuickLookPresentationAdaptor<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSImmediateActionToQuickLookPresentationAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSImmediateActionToQuickLookPresentationAdaptor>(): R;
      new: <R = NSImmediateActionToQuickLookPresentationAdaptor>() => R;
      isForceClickPossibleFromEvent<R = boolean, P0 = unknown>(_isForceClickPossibleFromEvent: P0): R;
    }
  }
}

declare const NSImmediateActionToQuickLookPresentationAdaptor: cocoa.NSImmediateActionToQuickLookPresentationAdaptor.CLASS;
