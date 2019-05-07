/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NS1DVelocityFilter<T0 = void, T1 = void, T2 = void> extends NSObject {
    _isTimestampOutOfDate<R = boolean, P0 = number>(__isTimestampOutOfDate: P0): R;
    resetIfOutOfDate<R = boolean, P0 = number>(_resetIfOutOfDate: P0): R;
    reset<R = void>(): R;
    addDelta_withTimestamp<R = void, P0 = number, P1 = number>(_addDelta: P0, _withTimestamp: P1): R;
    dealloc<R = void>(): R;
    maxAllowedVelocity<R = number>(): R;
    setMaxAllowedVelocity<R = void, P0 = number>(_v: P0): R;
    lastTimestamp<R = number>(): R;
    setLastTimestamp<R = void, P0 = number>(_v: P0): R;
    filteredVelocity<R = number>(): R;
  }
  namespace _NS1DVelocityFilter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NS1DVelocityFilter>(): R;
      new: <R = _NS1DVelocityFilter>() => R;
    }
  }
}
