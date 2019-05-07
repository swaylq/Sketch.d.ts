/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLocale<T0 = void, T1 = void, T2 = void> {
    // + NSLocale(NSLocale): 
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    debugDescription<R = unknown>(): R;
    // + NSLocale(NSLocale_CalendarDirection):
    _calendarDirection<R = number>(): R;
  }
  namespace NSLocale {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSLocale(NSLocale): 
      autoupdatingCurrentLocale<R = unknown>(): R;
      // + NSLocale(NSLocale_LanguageExtras): 
      _preferredTemperatureUnit<R = unknown>(): R;
      _setPreferredTemperatureUnit<R = void, P0 = unknown>(__setPreferredTemperatureUnit: P0): R;
      _preferredMeasurementSystem<R = unknown>(): R;
      _setPreferredMeasurementSystem<R = void, P0 = unknown>(__setPreferredMeasurementSystem: P0): R;
      mostPreferredLanguageOf_withPreferredLanguages_forUsage_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_mostPreferredLanguageOf: P0, _withPreferredLanguages: P1, _forUsage: P2, _options: P3): R;
      mostPreferredLanguageOf_forUsage_options<R = unknown, P0 = unknown, P1 = number, P2 = number>(_mostPreferredLanguageOf: P0, _forUsage: P1, _options: P2): R;
      registerPreferredLanguage_usage_confidence<R = void, P0 = unknown, P1 = number, P2 = number>(_registerPreferredLanguage: P0, _usage: P1, _confidence: P2): R;
      setPreferredLanguages<R = void, P0 = unknown>(_setPreferredLanguages: P0): R;
      systemLanguages<R = unknown>(): R;
    }
  }
}

declare const NSLocale: cocoa.NSLocale.CLASS;
