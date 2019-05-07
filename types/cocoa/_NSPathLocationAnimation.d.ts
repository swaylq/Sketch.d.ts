/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPathLocationAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    originalWidthsCount<R = number>(): R;
    originalWidthForIndex<R = number, P0 = number>(_originalWidthForIndex: P0): R;
    addOriginalWidth<R = void, P0 = number>(_addOriginalWidth: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSPathLocationAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = _NSPathLocationAnimation>(): R;
      new: <R = _NSPathLocationAnimation>() => R;
    }
  }
}
