/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDate<T0 = void, T1 = void, T2 = void> {
    // + NSDate(NSCalendarDateStuff): 
    descriptionWithCalendarFormat_timeZone_locale<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_descriptionWithCalendarFormat: P0, _timeZone: P1, _locale: P2): R;
    dateWithCalendarFormat_timeZone<R = unknown, P0 = unknown, P1 = unknown>(_dateWithCalendarFormat: P0, _timeZone: P1): R;
    // + NSDate(NSDate): 
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    // + NSDate(NSDatePortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    // + NSDate(NSScriptAppleEventConversion): 
    _scriptingDateDescriptor<R = unknown>(): R;
    // + NSDate(NSURLExtras): 
    _web_isToday<R = boolean>(): R;
    _web_compareDay<R = number, P0 = unknown>(__web_compareDay: P0): R;
    _web_RFC1123DateString<R = unknown>(): R;
    // + NSDate(NTP): 
    NTPRepresentation_bc<R = number>(): R;
  }
  namespace NSDate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSDate(NSNaturalLanguageDate): 
      dateWithNaturalLanguageString_locale<R = unknown, P0 = unknown, P1 = unknown>(_dateWithNaturalLanguageString: P0, _locale: P1): R;
      dateWithNaturalLanguageString<R = unknown, P0 = unknown>(_dateWithNaturalLanguageString: P0): R;
      dateWithNaturalLanguageString_date_locale<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_dateWithNaturalLanguageString: P0, _date: P1, _locale: P2): R;
      // + NSDate(NSScriptAppleEventConversion): 
      _scriptingDateWithDescriptor<R = unknown, P0 = unknown>(__scriptingDateWithDescriptor: P0): R;
      // + NSDate(NTP): 
      dateWithNTPRepresentation_bc<R = unknown, P0 = number>(_dateWithNTPRepresentation_bc: P0): R;
      NTPEpoch_bc<R = unknown>(): R;
    }
  }
}

declare const NSDate: cocoa.NSDate.CLASS;
