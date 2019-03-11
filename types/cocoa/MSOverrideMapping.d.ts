/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideMapping<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    compareTo<R = number, P0 = unknown>(_compareTo: P0): R;
    removeOverridePoint<R = void, P0 = unknown>(_removeOverridePoint: P0): R;
    selectContendersFrom<R = void, P0 = unknown>(_selectContendersFrom: P0): R;
    initWithOverridePoint<R = unknown, P0 = unknown>(_initWithOverridePoint: P0): R;
    contenders<R = cocoa.NSMutableArray>(): R;
    setContenders<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    overridePoint<R = cocoa.MSOverridePoint>(): R;
    setOverridePoint<R = void, P0 = cocoa.MSOverridePoint>(_v: P0): R;
    score<R = number>(): R;
    setScore<R = void, P0 = number>(_v: P0): R;
    oldOverridePoint<R = cocoa.MSOverridePoint>(): R;
  }
  namespace classes {
    export interface MSOverrideMapping<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSOverrideMapping>(): R;
      new: <R = MSOverrideMapping>() => R;
      consolidateAndFindNextMappingFrom<R = unknown, P0 = unknown>(_consolidateAndFindNextMappingFrom: P0): R;
      overrideMappingFor_withOldOverrides<R = unknown, P0 = unknown, P1 = unknown>(_overrideMappingFor: P0, _withOldOverrides: P1): R;
    }
  }
}

declare const MSOverrideMapping: cocoa.classes.MSOverrideMapping;
