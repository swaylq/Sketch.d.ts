/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOrthography<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    allLanguages<R = unknown>(): R;
    allScripts<R = unknown>(): R;
    dominantLanguage<R = unknown>(): R;
    dominantLanguageForScript<R = unknown, P0 = unknown>(_dominantLanguageForScript: P0): R;
    languagesForScript<R = unknown, P0 = unknown>(_languagesForScript: P0): R;
    orthographyFlags<R = number>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    classForCoder<R = unknown>(): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    initWithDominantScript_languageMap<R = unknown, P0 = unknown, P1 = unknown>(_initWithDominantScript: P0, _languageMap: P1): R;
    languageMap<R = NSDictionary>(): R;
    dominantScript<R = NSString>(): R;
  }
  namespace NSOrthography {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSOrthography>(): R;
      new: <R = NSOrthography>() => R;
      defaultOrthographyForLanguage<R = unknown, P0 = unknown>(_defaultOrthographyForLanguage: P0): R;
      _orthographyWithDominantScript_languageMap<R = unknown, P0 = unknown, P1 = unknown>(__orthographyWithDominantScript: P0, _languageMap: P1): R;
      _scriptNameForScriptIndex<R = unknown, P0 = number>(__scriptNameForScriptIndex: P0): R;
      orthographyWithDominantScript_languageMap<R = unknown, P0 = unknown, P1 = unknown>(_orthographyWithDominantScript: P0, _languageMap: P1): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSOrthography: cocoa.NSOrthography.CLASS;
