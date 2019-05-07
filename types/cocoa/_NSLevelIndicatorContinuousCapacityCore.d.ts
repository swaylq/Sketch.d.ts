/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorContinuousCapacityCore<T0 = void, T1 = void, T2 = void> extends NSObject, _NSLevelIndicatorCoreProtocol {
    cxx_destruct<R = void>(): R;
    _fakeDrawFillInRect_withTintColor<R = void, P0 = CGRect, P1 = unknown>(__fakeDrawFillInRect: P0, _withTintColor: P1): R;
    _fakeCreateOrUpdateFillLayer_withTintColor<R = void, P0 = unknown, P1 = unknown>(__fakeCreateOrUpdateFillLayer: P0, _withTintColor: P1): R;
    _layerForTieredZone<R = unknown, P0 = number>(__layerForTieredZone: P0): R;
    _forEachTieredZoneInRect_forState_performBlock<R = void, P0 = CGRect, P1 = unknown, P2 = CDUnknownBlockType>(__forEachTieredZoneInRect: P0, _forState: P1, _performBlock: P2): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSLevelIndicatorContinuousCapacityCore {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSLevelIndicatorCoreProtocol {
      alloc<R = _NSLevelIndicatorContinuousCapacityCore>(): R;
      new: <R = _NSLevelIndicatorContinuousCapacityCore>() => R;
    }
  }
}
