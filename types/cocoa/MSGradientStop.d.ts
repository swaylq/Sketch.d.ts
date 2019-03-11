/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientStop<T = any> extends cocoa._MSGradientStop, cocoa.MSColorConvertibleProtocol {
    cappedBounds<R = number, P0 = number>(_cappedBounds: P0): R;
    setPosition<R = void, P0 = number>(_setPosition: P0): R;
    initWithPosition_color<R = unknown, P0 = number, P1 = unknown>(_initWithPosition: P0, _color: P1): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSGradientStop<T = any> extends cocoa.classes._MSGradientStop, cocoa.classes.MSColorConvertibleProtocol {
      alloc<R = MSGradientStop>(): R;
      new: <R = MSGradientStop>() => R;
      stopWithPosition_color<R = unknown, P0 = number, P1 = unknown>(_stopWithPosition: P0, _color: P1): R;
    }
  }
}

declare const MSGradientStop: cocoa.classes.MSGradientStop;
