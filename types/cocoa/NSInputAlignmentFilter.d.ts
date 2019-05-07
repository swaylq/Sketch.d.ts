/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentFilter<T0 = void, T1 = void, T2 = void> extends NSObject {
    processAlignment_ofReference_againstGuide<R = boolean, P0 = CGPoint, P1 = unknown, P2 = unknown>(_processAlignment: P0, _ofReference: P1, _againstGuide: P2): R;
    processVerticalAlignment_ofReference_againstHorizontalGuide<R = boolean, P0 = number, P1 = unknown, P2 = unknown>(_processVerticalAlignment: P0, _ofReference: P1, _againstHorizontalGuide: P2): R;
    processHorizontalAlignment_ofReference_againstVerticalGuide<R = boolean, P0 = number, P1 = unknown, P2 = unknown>(_processHorizontalAlignment: P0, _ofReference: P1, _againstVerticalGuide: P2): R;
    updateWithPanRecognizer<R = void, P0 = unknown>(_updateWithPanRecognizer: P0): R;
    updateWithEvent<R = void, P0 = unknown>(_updateWithEvent: P0): R;
    dealloc<R = void>(): R;
    alignDistance<R = boolean, P0 = CGPoint>(_alignDistance: P0): R;
    alignVerticalDistance<R = boolean, P0 = number>(_alignVerticalDistance: P0): R;
    alignHorizontalDistance<R = boolean, P0 = number>(_alignHorizontalDistance: P0): R;
    filterActionInputUsingPanRecognizer<R = void, P0 = unknown>(_filterActionInputUsingPanRecognizer: P0): R;
    filterInputEvent<R = void, P0 = unknown>(_filterInputEvent: P0): R;
    _requestPeriodicUpdate<R = void>(): R;
    _schedulePeriodicUpdateWithRecognizer<R = void, P0 = unknown>(__schedulePeriodicUpdateWithRecognizer: P0): R;
    _modifierFlagsAllowAlignment<R = boolean>(): R;
    _shouldAlignVerticalDistance<R = boolean, P0 = number>(__shouldAlignVerticalDistance: P0): R;
    _shouldAlignHorizontalDistance<R = boolean, P0 = number>(__shouldAlignHorizontalDistance: P0): R;
    _canPerformAlignment<R = boolean>(): R;
    _clearPeriodicTimer<R = void>(): R;
    _filteredVelocity<R = CGPoint>(): R;
    _hasCurrentLocation<R = boolean>(): R;
    _currentLocation<R = CGPoint>(): R;
    _currentTimestamp<R = number>(): R;
    _updateDragOnLocation_timestamp_modifierFlags_recognizer<R = void, P0 = CGPoint, P1 = number, P2 = number, P3 = unknown>(__updateDragOnLocation: P0, _timestamp: P1, _modifierFlags: P2, _recognizer: P3): R;
    _setSnapDistance<R = void, P0 = number>(__setSnapDistance: P0): R;
    _setActuationBlock<R = void, P0 = CDUnknownBlockType>(__setActuationBlock: P0): R;
    _isVerticalVelocityAlignable<R = boolean>(): R;
    _isHorizontalVelocityAlignable<R = boolean>(): R;
  }
  namespace NSInputAlignmentFilter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSInputAlignmentFilter>(): R;
      new: <R = NSInputAlignmentFilter>() => R;
      inputEventMask<R = number>(): R;
      filterInputEventMask<R = number>(): R;
    }
  }
}

declare const NSInputAlignmentFilter: cocoa.NSInputAlignmentFilter.CLASS;
