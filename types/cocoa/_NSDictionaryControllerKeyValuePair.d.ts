/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDictionaryControllerKeyValuePair<T0 = void, T1 = void, T2 = void> extends NSDictionaryControllerKeyValuePair {
    isExplicitlyIncluded<R = boolean>(): R;
    _markAsExplicitlyIncluded<R = void, P0 = boolean>(__markAsExplicitlyIncluded: P0): R;
    value<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_setValue: P0): R;
    _setValueWithoutNotification<R = void, P0 = unknown>(__setValueWithoutNotification: P0): R;
    validateValue_error<R = boolean, P0 = unknown, P1 = unknown>(_validateValue: P0, _error: P1): R;
    key<R = unknown>(): R;
    setKey<R = void, P0 = unknown>(_setKey: P0): R;
    _setKeyWithoutLocalizedKey<R = void, P0 = unknown>(__setKeyWithoutLocalizedKey: P0): R;
    validateKey_error<R = boolean, P0 = unknown, P1 = unknown>(_validateKey: P0, _error: P1): R;
    localizedKey<R = unknown>(): R;
    setLocalizedKey<R = void, P0 = unknown>(_setLocalizedKey: P0): R;
    _setLocalizedKeyWithoutKey<R = void, P0 = unknown>(__setLocalizedKeyWithoutKey: P0): R;
    validateLocalizedKey_error<R = boolean, P0 = unknown, P1 = unknown>(_validateLocalizedKey: P0, _error: P1): R;
    _validateAnyKey_error<R = boolean, P0 = unknown, P1 = unknown>(__validateAnyKey: P0, _error: P1): R;
    _setWithoutNotificationLocalizedKey_key<R = void, P0 = unknown, P1 = unknown>(__setWithoutNotificationLocalizedKey: P0, _key: P1): R;
    dealloc<R = void>(): R;
    dictionaryController<R = NSDictionaryController>(): R;
    setDictionaryController<R = void, P0 = NSDictionaryController>(_v: P0): R;
  }
  namespace _NSDictionaryControllerKeyValuePair {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDictionaryControllerKeyValuePair {
      alloc<R = _NSDictionaryControllerKeyValuePair>(): R;
      new: <R = _NSDictionaryControllerKeyValuePair>() => R;
    }
  }
}
