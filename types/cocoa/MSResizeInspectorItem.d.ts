/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResizeInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    resetConstraints<R = void, P0 = unknown>(_resetConstraints: P0): R;
    toggleBoth<R = void, P0 = unknown>(_toggleBoth: P0): R;
    resizeConstraintsAction<R = void, P0 = unknown>(_resizeConstraintsAction: P0): R;
    zPositionForButton<R = number, P0 = unknown>(_zPositionForButton: P0): R;
    updateButtonOrder<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    resizingPreviewView<R = _TtC6Sketch21MSResizingPreviewView>(): R;
    setResizingPreviewView<R = void, P0 = _TtC6Sketch21MSResizingPreviewView>(_v: P0): R;
    fixVerticalButton<R = NSButton>(): R;
    setFixVerticalButton<R = void, P0 = NSButton>(_v: P0): R;
    fixHorizontalButton<R = NSButton>(): R;
    setFixHorizontalButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSResizeInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSResizeInspectorItem>(): R;
      new: <R = MSResizeInspectorItem>() => R;
    }
  }
}

declare const MSResizeInspectorItem: cocoa.MSResizeInspectorItem.CLASS;
