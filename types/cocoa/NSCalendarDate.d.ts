/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCalendarDate<T0 = void, T1 = void, T2 = void> extends NSDate {
    initWithString_calendarFormat_locale<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithString: P0, _calendarFormat: P1, _locale: P2): R;
    descriptionWithCalendarFormat_locale<R = unknown, P0 = unknown, P1 = unknown>(_descriptionWithCalendarFormat: P0, _locale: P1): R;
    initWithString_calendarFormat<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _calendarFormat: P1): R;
    descriptionWithCalendarFormat<R = unknown, P0 = unknown>(_descriptionWithCalendarFormat: P0): R;
    descriptionWithLocale<R = unknown, P0 = unknown>(_descriptionWithLocale: P0): R;
    description<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    classForCoder<R = unknown>(): R;
    addTimeInterval<R = unknown, P0 = number>(_addTimeInterval: P0): R;
    years_months_days_hours_minutes_seconds_sinceDate<R = void, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number, P6 = unknown>(_years: P0, _months: P1, _days: P2, _hours: P3, _minutes: P4, _seconds: P5, _sinceDate: P6): R;
    dateByAddingYears_months_days_hours_minutes_seconds<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number>(_dateByAddingYears: P0, _months: P1, _days: P2, _hours: P3, _minutes: P4, _seconds: P5): R;
    microsecondOfSecond<R = number>(): R;
    secondOfMinute<R = number>(): R;
    minuteOfHour<R = number>(): R;
    hourOfDay<R = number>(): R;
    dayOfYear<R = number>(): R;
    dayOfWeek<R = number>(): R;
    dayOfMonth<R = number>(): R;
    monthOfYear<R = number>(): R;
    yearOfCommonEra<R = number>(): R;
    dayOfCommonEra<R = number>(): R;
    setCalendarFormat<R = void, P0 = unknown>(_setCalendarFormat: P0): R;
    calendarFormat<R = unknown>(): R;
    setTimeZone<R = void, P0 = unknown>(_setTimeZone: P0): R;
    timeZone<R = unknown>(): R;
    timeZoneDetail<R = unknown>(): R;
    timeIntervalSinceReferenceDate<R = number>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    initWithYear_month_day_hour_minute_second_timeZone<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number, P6 = unknown>(_initWithYear: P0, _month: P1, _day: P2, _hour: P3, _minute: P4, _second: P5, _timeZone: P6): R;
    init<R = unknown>(): R;
    initWithTimeIntervalSinceReferenceDate<R = unknown, P0 = number>(_initWithTimeIntervalSinceReferenceDate: P0): R;
    release<R = void>(): R;
    dealloc<R = void>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
  }
  namespace NSCalendarDate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDate {
      dateWithString_calendarFormat_locale<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_dateWithString: P0, _calendarFormat: P1, _locale: P2): R;
      dateWithString_calendarFormat<R = unknown, P0 = unknown, P1 = unknown>(_dateWithString: P0, _calendarFormat: P1): R;
      supportsSecureCoding<R = boolean>(): R;
      dateWithYear_month_day_hour_minute_second_timeZone<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number, P6 = unknown>(_dateWithYear: P0, _month: P1, _day: P2, _hour: P3, _minute: P4, _second: P5, _timeZone: P6): R;
      calendarDate<R = unknown>(): R;
      distantPast<R = unknown>(): R;
      distantFuture<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      dateWithNaturalLanguageString_date_locale<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_dateWithNaturalLanguageString: P0, _date: P1, _locale: P2): R;
    }
  }
}

declare const NSCalendarDate: cocoa.NSCalendarDate.CLASS;
