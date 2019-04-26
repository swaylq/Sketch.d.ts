/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitAngle<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitAngle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitAngle>(): R;
      new: <R = NSUnitAngle>() => R;
      revolutions<R = unknown>(): R;
      gradians<R = unknown>(): R;
      radians<R = unknown>(): R;
      arcSeconds<R = unknown>(): R;
      arcMinutes<R = unknown>(): R;
      degrees<R = unknown>(): R;
    }
  }
}

declare const NSUnitAngle: cocoa.NSUnitAngle.CLASS;
