/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBorderOptionsInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorViewController {
    dashFields<R = unknown>(): R;
    fillDashPlaceholderFields<R = void>(): R;
    fillDashFields<R = void>(): R;
    dashPatternAction<R = void, P0 = unknown>(_dashPatternAction: P0): R;
    joinAction<R = void, P0 = unknown>(_joinAction: P0): R;
    capAction<R = void, P0 = unknown>(_capAction: P0): R;
    evaluateCapJoinButtons<R = void>(): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    prepareDecorationButtons<R = void>(): R;
    setStyleParts<R = void, P0 = unknown>(_setStyleParts: P0): R;
    endDecorationAction<R = void, P0 = unknown>(_endDecorationAction: P0): R;
    startDecorationAction<R = void, P0 = unknown>(_startDecorationAction: P0): R;
    reloadData<R = void>(): R;
    bordersController<R = MSAutoSelectingArrayController>(): R;
    setBordersController<R = void, P0 = MSAutoSelectingArrayController>(_v: P0): R;
    endMarkerTypes<R = NSSet>(): R;
    setEndMarkerTypes<R = void, P0 = NSSet>(_v: P0): R;
    startMarkerTypes<R = NSSet>(): R;
    setStartMarkerTypes<R = void, P0 = NSSet>(_v: P0): R;
    filteredLayers<R = NSArray>(): R;
    setFilteredLayers<R = void, P0 = NSArray>(_v: P0): R;
    joinSegmentedControl<R = NSSegmentedControl>(): R;
    setJoinSegmentedControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    capSegmentedControl<R = NSSegmentedControl>(): R;
    setCapSegmentedControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    dashField2<R = NSTextField>(): R;
    setDashField2<R = void, P0 = NSTextField>(_v: P0): R;
    dashField1<R = NSTextField>(): R;
    setDashField1<R = void, P0 = NSTextField>(_v: P0): R;
    endDecorationButton<R = NSPopUpButton>(): R;
    setEndDecorationButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    startDecorationButton<R = NSPopUpButton>(): R;
    setStartDecorationButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
  }
  namespace MSBorderOptionsInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorViewController {
      alloc<R = MSBorderOptionsInspectorViewController>(): R;
      new: <R = MSBorderOptionsInspectorViewController>() => R;
    }
  }
}

declare const MSBorderOptionsInspectorViewController: cocoa.MSBorderOptionsInspectorViewController.CLASS;
