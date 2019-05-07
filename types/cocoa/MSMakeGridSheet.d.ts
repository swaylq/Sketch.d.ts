/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMakeGridSheet<T0 = void, T1 = void, T2 = void> extends CHSheetController {
    defaultBoxSize<R = CGSize>(): R;
    layerCount<R = number>(): R;
    layersHaveSameSize<R = boolean>(): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    validatePaddingFields<R = void>(): R;
    registerMarginDefaults<R = void>(): R;
    awakeFromNib<R = void>(): R;
    shouldFilHolesButton<R = NSButton>(): R;
    setShouldFilHolesButton<R = void, P0 = NSButton>(_v: P0): R;
    confirmButton<R = NSButton>(): R;
    setConfirmButton<R = void, P0 = NSButton>(_v: P0): R;
    subtextField<R = NSTextField>(): R;
    setSubtextField<R = void, P0 = NSTextField>(_v: P0): R;
    shouldFillHoles<R = number>(): R;
    setShouldFillHoles<R = void, P0 = number>(_v: P0): R;
    verticalPadding<R = number>(): R;
    setVerticalPadding<R = void, P0 = number>(_v: P0): R;
    horizontalPadding<R = number>(): R;
    setHorizontalPadding<R = void, P0 = number>(_v: P0): R;
    numberOfColumns<R = number>(): R;
    setNumberOfColumns<R = void, P0 = number>(_v: P0): R;
    numberOfRows<R = number>(): R;
    setNumberOfRows<R = void, P0 = number>(_v: P0): R;
    hasVerticalPadding<R = boolean>(): R;
    setHasVerticalPadding<R = void, P0 = boolean>(_v: P0): R;
    hasHorizontalPadding<R = boolean>(): R;
    setHasHorizontalPadding<R = void, P0 = boolean>(_v: P0): R;
    doc<R = MSDocument>(): R;
    setDoc<R = void, P0 = MSDocument>(_v: P0): R;
  }
  namespace MSMakeGridSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController {
      alloc<R = MSMakeGridSheet>(): R;
      new: <R = MSMakeGridSheet>() => R;
    }
  }
}

declare const MSMakeGridSheet: cocoa.MSMakeGridSheet.CLASS;
