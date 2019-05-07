/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLocalizableString<T0 = void, T1 = void, T2 = void> extends NSString {
    setDevelopmentLanguageString<R = void, P0 = unknown>(_setDevelopmentLanguageString: P0): R;
    setStringsFileKey<R = void, P0 = unknown>(_setStringsFileKey: P0): R;
    dealloc<R = void>(): R;
    initWithStringsFileKey_developmentLanguageString<R = unknown, P0 = unknown, P1 = unknown>(_initWithStringsFileKey: P0, _developmentLanguageString: P1): R;
    length<R = number>(): R;
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    developmentLanguageString<R = NSString>(): R;
    stringsFileKey<R = NSString>(): R;
  }
  namespace NSLocalizableString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = NSLocalizableString>(): R;
      new: <R = NSLocalizableString>() => R;
      localizableStringWithStringsFileKey_developmentLanguageString<R = unknown, P0 = unknown, P1 = unknown>(_localizableStringWithStringsFileKey: P0, _developmentLanguageString: P1): R;
    }
  }
}

declare const NSLocalizableString: cocoa.NSLocalizableString.CLASS;
