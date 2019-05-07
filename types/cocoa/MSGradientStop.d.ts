/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientStop<T0 = void, T1 = void, T2 = void> extends _MSGradientStop, MSColorConvertibleProtocol {
    cappedBounds<R = number, P0 = number>(_cappedBounds: P0): R;
    setPosition<R = void, P0 = number>(_setPosition: P0): R;
    initWithPosition_color<R = unknown, P0 = number, P1 = unknown>(_initWithPosition: P0, _color: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSGradientStop {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSGradientStop, MSColorConvertibleProtocol {
      alloc<R = MSGradientStop>(): R;
      new: <R = MSGradientStop>() => R;
      stopWithPosition_color<R = unknown, P0 = number, P1 = unknown>(_stopWithPosition: P0, _color: P1): R;
    }
  }
}

declare const MSGradientStop: cocoa.MSGradientStop.CLASS;
