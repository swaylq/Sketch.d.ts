/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTypeSelectData<T0 = void, T1 = void, T2 = void> extends NSObject {
    foundMatch<R = boolean>(): R;
    setFoundMatch<R = void, P0 = boolean>(_setFoundMatch: P0): R;
    _typeSelectEndCurrentSearch<R = void>(): R;
    cancelScheduledEndOfSearch<R = void>(): R;
    scheduleEndOfSearch<R = void>(): R;
    initialSearchRow<R = number>(): R;
    setCurrentSearchCol<R = void, P0 = number>(_setCurrentSearchCol: P0): R;
    currentSearchCol<R = number>(): R;
    setCurrentSearchRow<R = void, P0 = number>(_setCurrentSearchRow: P0): R;
    currentSearchRow<R = number>(): R;
    nextSearchStringForNewValue<R = unknown, P0 = unknown>(_nextSearchStringForNewValue: P0): R;
    setCurrentSearchRect<R = void, P0 = CGRect>(_setCurrentSearchRect: P0): R;
    _orderFrontTypeSelectPanel<R = void>(): R;
    setCurrentSearch<R = void, P0 = unknown>(_setCurrentSearch: P0): R;
    currentSearch<R = unknown>(): R;
    clearView<R = void>(): R;
    dealloc<R = void>(): R;
    initWithInitialSearchRow_totalRows_forView<R = unknown, P0 = number, P1 = number, P2 = unknown>(_initWithInitialSearchRow: P0, _totalRows: P1, _forView: P2): R;
    _resetCurrentSearchRow<R = void>(): R;
  }
  namespace _NSTypeSelectData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTypeSelectData>(): R;
      new: <R = _NSTypeSelectData>() => R;
      ignoreTypos<R = boolean>(): R;
    }
  }
}
