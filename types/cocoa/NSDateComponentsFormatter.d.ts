/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDateComponentsFormatter<T = any> extends cocoa.NSFormatter, cocoa.NSObservableProtocol, cocoa.NSObserverProtocol {
    stringForObjectValue_withReferenceDate<R = unknown, P0 = unknown, P1 = unknown>(_stringForObjectValue: P0, _withReferenceDate: P1): R;
    stringFromDateComponents<R = unknown, P0 = unknown>(_stringFromDateComponents: P0): R;
    stringFromTimeInterval<R = unknown, P0 = number>(_stringFromTimeInterval: P0): R;
    _ensureUnitFormatterWithLocale<R = void, P0 = unknown>(__ensureUnitFormatterWithLocale: P0): R;
    _ensureUnitFormatterWithLocale_alreadyLocked<R = void, P0 = unknown>(__ensureUnitFormatterWithLocale_alreadyLocked: P0): R;
    stringFromDate_toDate<R = unknown, P0 = unknown, P1 = unknown>(_stringFromDate: P0, _toDate: P1): R;
    _calendarFromDateComponents<R = unknown, P0 = unknown>(__calendarFromDateComponents: P0): R;
    _calendarOrCanonicalCalendar<R = unknown>(): R;
    _canonicalizedDateComponents_withCalendar_usedUnits_withReferenceDate<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(__canonicalizedDateComponents: P0, _withCalendar: P1, _usedUnits: P2, _withReferenceDate: P3): R;
    _flushFormatterCache<R = void>(): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    _NSDateComponentsFormatter_commonInit<R = void>(): R;
    referenceDate<R = cocoa.NSDate>(): R;
    setReferenceDate<R = void, P0 = cocoa.NSDate>(_v: P0): R;
    formattingContext<R = number>(): R;
    setFormattingContext<R = void, P0 = number>(_v: P0): R;
    includesTimeRemainingPhrase<R = boolean>(): R;
    setIncludesTimeRemainingPhrase<R = void, P0 = boolean>(_v: P0): R;
    includesApproximationPhrase<R = boolean>(): R;
    setIncludesApproximationPhrase<R = void, P0 = boolean>(_v: P0): R;
    zeroFormattingBehavior<R = number>(): R;
    setZeroFormattingBehavior<R = void, P0 = number>(_v: P0): R;
    unitsStyle<R = number>(): R;
    setUnitsStyle<R = void, P0 = number>(_v: P0): R;
    calendar<R = cocoa.NSCalendar>(): R;
    setCalendar<R = void, P0 = cocoa.NSCalendar>(_v: P0): R;
    collapsesLargestUnit<R = boolean>(): R;
    setCollapsesLargestUnit<R = void, P0 = boolean>(_v: P0): R;
    allowsFractionalUnits<R = boolean>(): R;
    setAllowsFractionalUnits<R = void, P0 = boolean>(_v: P0): R;
    maximumUnitCount<R = number>(): R;
    setMaximumUnitCount<R = void, P0 = number>(_v: P0): R;
    allowedUnits<R = number>(): R;
    setAllowedUnits<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDateComponentsFormatter<T = any> extends cocoa.classes.NSFormatter, cocoa.classes.NSObservableProtocol, cocoa.classes.NSObserverProtocol {
      alloc<R = NSDateComponentsFormatter>(): R;
      new: <R = NSDateComponentsFormatter>() => R;
      localizedStringFromDateComponents_unitsStyle<R = unknown, P0 = unknown, P1 = number>(_localizedStringFromDateComponents: P0, _unitsStyle: P1): R;
    }
  }
}

declare const NSDateComponentsFormatter: cocoa.classes.NSDateComponentsFormatter;
