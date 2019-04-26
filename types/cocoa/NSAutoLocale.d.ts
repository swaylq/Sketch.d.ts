/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutoLocale<T0 = void, T1 = void, T2 = void> extends NSLocale {
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    description<R = unknown>(): R;
    _setNullLocale<R = void>(): R;
    _nullLocale<R = number>(): R;
    _prefs<R = unknown>(): R;
    displayNameForKey_value<R = unknown, P0 = unknown, P1 = unknown>(_displayNameForKey: P0, _value: P1): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    initWithLocaleIdentifier<R = unknown, P0 = unknown>(_initWithLocaleIdentifier: P0): R;
    _init<R = unknown>(): R;
    _update<R = void, P0 = unknown>(__update: P0): R;
  }
  namespace NSAutoLocale {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLocale {
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}

declare const NSAutoLocale: cocoa.NSAutoLocale.CLASS;
