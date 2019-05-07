/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    forceUpdateTree<R = void>(): R;
    _updateTree<R = void>(): R;
    _noteTouchBarsChanged<R = void>(): R;
    _stopObservingTouchBar<R = void, P0 = unknown>(__stopObservingTouchBar: P0): R;
    _startObservingTouchBar<R = void, P0 = unknown>(__startObservingTouchBar: P0): R;
    _diffTouchBars_againstOldTouchBars_blockForAdding_blockForRemoving<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(__diffTouchBars: P0, _againstOldTouchBars: P1, _blockForAdding: P2, _blockForRemoving: P3): R;
    _expandBars<R = unknown, P0 = unknown>(__expandBars: P0): R;
    escapeKeyReplacementItem<R = NSTouchBarItem>(): R;
    touchBarView<R = NSTouchBarView>(): R;
    touchBars<R = NSArray>(): R;
    setTouchBars<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSTouchBarViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSTouchBarViewController>(): R;
      new: <R = NSTouchBarViewController>() => R;
    }
  }
}

declare const NSTouchBarViewController: cocoa.NSTouchBarViewController.CLASS;
