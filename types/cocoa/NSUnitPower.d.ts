/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitPower<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitPower {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitPower>(): R;
      new: <R = NSUnitPower>() => R;
      horsepower<R = unknown>(): R;
      femtowatts<R = unknown>(): R;
      picowatts<R = unknown>(): R;
      nanowatts<R = unknown>(): R;
      microwatts<R = unknown>(): R;
      milliwatts<R = unknown>(): R;
      watts<R = unknown>(): R;
      kilowatts<R = unknown>(): R;
      megawatts<R = unknown>(): R;
      gigawatts<R = unknown>(): R;
      terawatts<R = unknown>(): R;
    }
  }
}

declare const NSUnitPower: cocoa.NSUnitPower.CLASS;
