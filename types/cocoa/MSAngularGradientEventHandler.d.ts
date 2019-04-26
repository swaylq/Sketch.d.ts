/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAngularGradientEventHandler<T0 = void, T1 = void, T2 = void> extends MSGradientEventHandler {
    positionForStop<R = number, P0 = CGPoint>(_positionForStop: P0): R;
    basePointAtIndex<R = CGPoint, P0 = number>(_basePointAtIndex: P0): R;
  }
  namespace MSAngularGradientEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSGradientEventHandler {
      alloc<R = MSAngularGradientEventHandler>(): R;
      new: <R = MSAngularGradientEventHandler>() => R;
    }
  }
}

declare const MSAngularGradientEventHandler: cocoa.MSAngularGradientEventHandler.CLASS;
