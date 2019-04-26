/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsFormatterData<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    dealloc<R = void>(): R;
    isEqualToFormatterData<R = boolean, P0 = unknown>(_isEqualToFormatterData: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    locale<R = NSLocale>(): R;
    setLocale<R = void, P0 = NSLocale>(_v: P0): R;
    ignoresFallbacks<R = boolean>(): R;
    setIgnoresFallbacks<R = void, P0 = boolean>(_v: P0): R;
    forceGivenNameFirst<R = boolean>(): R;
    setForceGivenNameFirst<R = void, P0 = boolean>(_v: P0): R;
    forceFamilyNameFirst<R = boolean>(): R;
    setForceFamilyNameFirst<R = void, P0 = boolean>(_v: P0): R;
    phonetic<R = boolean>(): R;
    setPhonetic<R = void, P0 = boolean>(_v: P0): R;
    style<R = number>(): R;
    setStyle<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSPersonNameComponentsFormatterData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = _NSPersonNameComponentsFormatterData>(): R;
      new: <R = _NSPersonNameComponentsFormatterData>() => R;
    }
  }
}
