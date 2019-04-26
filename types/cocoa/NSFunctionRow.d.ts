/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRow<T0 = void, T1 = void, T2 = void> extends NSObject {
    device<R = unknown>(): R;
    touches<R = unknown>(): R;
    convertPointFromDevice<R = CGPoint, P0 = CGPoint>(_convertPointFromDevice: P0): R;
    convertPointToDevice<R = CGPoint, P0 = CGPoint>(_convertPointToDevice: P0): R;
    _dumpLayer<R = unknown>(): R;
  }
  namespace NSFunctionRow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFunctionRow>(): R;
      new: <R = NSFunctionRow>() => R;
      defaultFrameForType<R = CGRect, P0 = number>(_defaultFrameForType: P0): R;
      markActiveFunctionRowsAsDimmed<R = void, P0 = boolean>(_markActiveFunctionRowsAsDimmed: P0): R;
      removeActiveFunctionRow<R = void, P0 = unknown>(_removeActiveFunctionRow: P0): R;
      addActiveFunctionRow<R = void, P0 = unknown>(_addActiveFunctionRow: P0): R;
      _topLevelFunctionRowViews<R = unknown>(): R;
      activeFunctionRows<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      isDynamicFunctionRowAvailable<R = boolean>(): R;
      observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
      initialize<R = void>(): R;
      functionRowContentViewForContextID<R = unknown, P0 = number>(_functionRowContentViewForContextID: P0): R;
      associatedDisplay<R = number>(): R;
      associatedScreenAndDisplay<R = unknown, P0 = number>(_associatedScreenAndDisplay: P0): R;
    }
  }
}

declare const NSFunctionRow: cocoa.NSFunctionRow.CLASS;
