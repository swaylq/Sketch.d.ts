/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDateFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
    _setUsesCharacterDirection<R = void, P0 = boolean>(__setUsesCharacterDirection: P0): R;
    _usesCharacterDirection<R = boolean>(): R;
    _setIsLenient<R = void, P0 = boolean>(__setIsLenient: P0): R;
    _setDateFormat<R = void, P0 = unknown>(__setDateFormat: P0): R;
    _dateFormat<R = unknown>(): R;
    _setDateFormat_alreadyLocked<R = void, P0 = unknown, P1 = boolean>(__setDateFormat: P0, _alreadyLocked: P1): R;
    _getLocaleAlreadyLocked<R = unknown, P0 = boolean>(__getLocaleAlreadyLocked: P0): R;
    setLocalizedDateFormatFromTemplate<R = void, P0 = unknown>(_setLocalizedDateFormatFromTemplate: P0): R;
    dateFromString<R = unknown, P0 = unknown>(_dateFromString: P0): R;
    stringFromDate<R = unknown, P0 = unknown>(_stringFromDate: P0): R;
    _locale_forOldMethods<R = unknown>(): R;
    _timeZone_forOldMethods<R = unknown>(): R;
    dealloc<R = void>(): R;
    _reset<R = void>(): R;
    _regenerateFormatter<R = void>(): R;
    _regenerateFormatterIfAbsent<R = void>(): R;
    _clearFormatter<R = void>(): R;
    allowsNaturalLanguage<R = boolean>(): R;
    initWithDateFormat_allowNaturalLanguage<R = unknown, P0 = unknown, P1 = boolean>(_initWithDateFormat: P0, _allowNaturalLanguage: P1): R;
    _attributedStringWithFieldsFromDate<R = unknown, P0 = unknown>(__attributedStringWithFieldsFromDate: P0): R;
    doesRelativeDateFormatting<R = boolean>(): R;
    setDoesRelativeDateFormatting<R = void, P0 = boolean>(_v: P0): R;
    formattingContext<R = number>(): R;
    setFormattingContext<R = void, P0 = number>(_v: P0): R;
    gregorianStartDate<R = NSDate>(): R;
    setGregorianStartDate<R = void, P0 = NSDate>(_v: P0): R;
    shortStandaloneQuarterSymbols<R = NSArray>(): R;
    setShortStandaloneQuarterSymbols<R = void, P0 = NSArray>(_v: P0): R;
    standaloneQuarterSymbols<R = NSArray>(): R;
    setStandaloneQuarterSymbols<R = void, P0 = NSArray>(_v: P0): R;
    shortQuarterSymbols<R = NSArray>(): R;
    setShortQuarterSymbols<R = void, P0 = NSArray>(_v: P0): R;
    quarterSymbols<R = NSArray>(): R;
    setQuarterSymbols<R = void, P0 = NSArray>(_v: P0): R;
    veryShortStandaloneWeekdaySymbols<R = NSArray>(): R;
    setVeryShortStandaloneWeekdaySymbols<R = void, P0 = NSArray>(_v: P0): R;
    shortStandaloneWeekdaySymbols<R = NSArray>(): R;
    setShortStandaloneWeekdaySymbols<R = void, P0 = NSArray>(_v: P0): R;
    standaloneWeekdaySymbols<R = NSArray>(): R;
    setStandaloneWeekdaySymbols<R = void, P0 = NSArray>(_v: P0): R;
    veryShortWeekdaySymbols<R = NSArray>(): R;
    setVeryShortWeekdaySymbols<R = void, P0 = NSArray>(_v: P0): R;
    veryShortStandaloneMonthSymbols<R = NSArray>(): R;
    setVeryShortStandaloneMonthSymbols<R = void, P0 = NSArray>(_v: P0): R;
    shortStandaloneMonthSymbols<R = NSArray>(): R;
    setShortStandaloneMonthSymbols<R = void, P0 = NSArray>(_v: P0): R;
    standaloneMonthSymbols<R = NSArray>(): R;
    setStandaloneMonthSymbols<R = void, P0 = NSArray>(_v: P0): R;
    veryShortMonthSymbols<R = NSArray>(): R;
    setVeryShortMonthSymbols<R = void, P0 = NSArray>(_v: P0): R;
    longEraSymbols<R = NSArray>(): R;
    setLongEraSymbols<R = void, P0 = NSArray>(_v: P0): R;
    PMSymbol<R = NSString>(): R;
    setPMSymbol<R = void, P0 = NSString>(_v: P0): R;
    AMSymbol<R = NSString>(): R;
    setAMSymbol<R = void, P0 = NSString>(_v: P0): R;
    shortWeekdaySymbols<R = NSArray>(): R;
    setShortWeekdaySymbols<R = void, P0 = NSArray>(_v: P0): R;
    weekdaySymbols<R = NSArray>(): R;
    setWeekdaySymbols<R = void, P0 = NSArray>(_v: P0): R;
    shortMonthSymbols<R = NSArray>(): R;
    setShortMonthSymbols<R = void, P0 = NSArray>(_v: P0): R;
    monthSymbols<R = NSArray>(): R;
    setMonthSymbols<R = void, P0 = NSArray>(_v: P0): R;
    eraSymbols<R = NSArray>(): R;
    setEraSymbols<R = void, P0 = NSArray>(_v: P0): R;
    defaultDate<R = NSDate>(): R;
    setDefaultDate<R = void, P0 = NSDate>(_v: P0): R;
    twoDigitStartDate<R = NSDate>(): R;
    setTwoDigitStartDate<R = void, P0 = NSDate>(_v: P0): R;
    lenient<R = boolean>(): R;
    setLenient<R = void, P0 = boolean>(_v: P0): R;
    calendar<R = NSCalendar>(): R;
    setCalendar<R = void, P0 = NSCalendar>(_v: P0): R;
    timeZone<R = NSTimeZone>(): R;
    setTimeZone<R = void, P0 = NSTimeZone>(_v: P0): R;
    dateFormat<R = NSString>(): R;
    setDateFormat<R = void, P0 = NSString>(_v: P0): R;
    formatterBehavior<R = number>(): R;
    setFormatterBehavior<R = void, P0 = number>(_v: P0): R;
    generatesCalendarDates<R = boolean>(): R;
    setGeneratesCalendarDates<R = void, P0 = boolean>(_v: P0): R;
    locale<R = NSLocale>(): R;
    setLocale<R = void, P0 = NSLocale>(_v: P0): R;
    timeStyle<R = number>(): R;
    setTimeStyle<R = void, P0 = number>(_v: P0): R;
    dateStyle<R = number>(): R;
    setDateStyle<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDateFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
      alloc<R = NSDateFormatter>(): R;
      new: <R = NSDateFormatter>() => R;
      dateFormatFromTemplate_options_locale<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_dateFormatFromTemplate: P0, _options: P1, _locale: P2): R;
      localizedStringFromDate_dateStyle_timeStyle<R = unknown, P0 = unknown, P1 = number, P2 = number>(_localizedStringFromDate: P0, _dateStyle: P1, _timeStyle: P2): R;
      initialize<R = void>(): R;
      setDefaultFormatterBehavior<R = void, P0 = number>(_setDefaultFormatterBehavior: P0): R;
      defaultFormatterBehavior<R = number>(): R;
      _formatStringFromComponents<R = unknown, P0 = unknown>(__formatStringFromComponents: P0): R;
      _componentsFromFormatString<R = unknown, P0 = unknown>(__componentsFromFormatString: P0): R;
    }
  }
}

declare const NSDateFormatter: cocoa.NSDateFormatter.CLASS;
