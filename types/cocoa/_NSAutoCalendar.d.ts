/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAutoCalendar<T0 = void, T1 = void, T2 = void> {
    // + _NSAutoCalendar(_): 
    enumerateDatesStartingAfterDate_matchingComponents_options_usingBlock<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_enumerateDatesStartingAfterDate: P0, _matchingComponents: P1, _options: P2, _usingBlock: P3): R;
    isDateInWeekend<R = boolean, P0 = unknown>(_isDateInWeekend: P0): R;
    nextWeekendStartDate_interval_options_afterDate<R = boolean, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_nextWeekendStartDate: P0, _interval: P1, _options: P2, _afterDate: P3): R;
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    description<R = unknown>(): R;
    components_fromDate_toDate_options<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = number>(_components: P0, _fromDate: P1, _toDate: P2, _options: P3): R;
    dateByAddingComponents_toDate_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_dateByAddingComponents: P0, _toDate: P1, _options: P2): R;
    components_fromDate<R = unknown, P0 = number, P1 = unknown>(_components: P0, _fromDate: P1): R;
    dateFromComponents<R = unknown, P0 = unknown>(_dateFromComponents: P0): R;
    rangeOfUnit_startDate_interval_forDate<R = boolean, P0 = number, P1 = unknown, P2 = number, P3 = unknown>(_rangeOfUnit: P0, _startDate: P1, _interval: P2, _forDate: P3): R;
    ordinalityOfUnit_inUnit_forDate<R = number, P0 = number, P1 = number, P2 = unknown>(_ordinalityOfUnit: P0, _inUnit: P1, _forDate: P2): R;
    rangeOfUnit_inUnit_forDate<R = _NSRange, P0 = number, P1 = number, P2 = unknown>(_rangeOfUnit: P0, _inUnit: P1, _forDate: P2): R;
    maximumRangeOfUnit<R = _NSRange, P0 = number>(_maximumRangeOfUnit: P0): R;
    minimumRangeOfUnit<R = _NSRange, P0 = number>(_minimumRangeOfUnit: P0): R;
    gregorianStartDate<R = unknown>(): R;
    setGregorianStartDate<R = void, P0 = unknown>(_setGregorianStartDate: P0): R;
    minimumDaysInFirstWeek<R = number>(): R;
    setMinimumDaysInFirstWeek<R = void, P0 = number>(_setMinimumDaysInFirstWeek: P0): R;
    firstWeekday<R = number>(): R;
    setFirstWeekday<R = void, P0 = number>(_setFirstWeekday: P0): R;
    timeZone<R = unknown>(): R;
    setTimeZone<R = void, P0 = unknown>(_setTimeZone: P0): R;
    locale<R = unknown>(): R;
    setLocale<R = void, P0 = unknown>(_setLocale: P0): R;
    calendarIdentifier<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithCalendarIdentifier<R = unknown, P0 = unknown>(_initWithCalendarIdentifier: P0): R;
    _init<R = unknown>(): R;
    init<R = unknown>(): R;
    _update<R = void, P0 = unknown>(__update: P0): R;
  }
  namespace _NSAutoCalendar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + _NSAutoCalendar(_): 
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}
